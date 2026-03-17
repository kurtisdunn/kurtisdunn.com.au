import { Readable } from "stream"
import { google } from "googleapis"
import type { drive_v3 } from "googleapis"
import type { AssessmentPayload, AssessmentResult, MeetingPlan } from "@/app/api/assessment/route"

// ─── Auth ────────────────────────────────────────────────────────────────────

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!key) return null

  const credentials = JSON.parse(key)
  return new google.auth.GoogleAuth({
    credentials,
    scopes: [
      "https://www.googleapis.com/auth/drive",
    ],
  })
}

// ─── Create client folder + docs ─────────────────────────────────────────────

export async function createClientFolder(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): Promise<string | null> {
  const sharedDriveId = process.env.GOOGLE_SHARED_DRIVE_ID
  const parentFolderId = sharedDriveId || process.env.GOOGLE_DRIVE_FOLDER_ID
  const auth = getAuth()

  if (!auth || !parentFolderId) {
    console.warn(
      "[google-drive] Missing GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_SHARED_DRIVE_ID/GOOGLE_DRIVE_FOLDER_ID — skipping.",
    )
    return null
  }

  const drive = google.drive({ version: "v3", auth })

  const clientLabel = data.businessName || data.name
  const folderName = `${clientLabel} — ${data.industry}`
  const today = new Date().toISOString().split("T")[0]

  const driveParams: Partial<drive_v3.Params$Resource$Files$Create> = sharedDriveId
    ? { supportsAllDrives: true }
    : {}

  // ── Helper: create a folder ──────────────────────────────────────────────

  async function createFolder(name: string, parentId: string): Promise<string> {
    const f = await drive.files.create({
      requestBody: {
        name,
        mimeType: "application/vnd.google-apps.folder",
        parents: [parentId],
      },
      ...driveParams,
      fields: "id",
    })
    return f.data.id!
  }

  // ── Helper: create Google Doc + markdown file ────────────────────────────

  async function createDoc(name: string, parentId: string, content: string) {
    // Google Doc (editable in browser)
    await drive.files.create({
      requestBody: {
        name,
        mimeType: "application/vnd.google-apps.document",
        parents: [parentId],
      },
      media: {
        mimeType: "text/markdown",
        body: Readable.from(content),
      },
      ...driveParams,
      fields: "id",
    })

    // Markdown backup
    await drive.files.create({
      requestBody: {
        name: `${name}.md`,
        parents: [parentId],
      },
      media: {
        mimeType: "text/markdown",
        body: Readable.from(content),
      },
      ...driveParams,
      fields: "id",
    })
  }

  // ── 1. Create client folder ──────────────────────────────────────────────

  const folderId = await createFolder(folderName, parentFolderId)

  // ── 2. Create sub-folders ────────────────────────────────────────────────

  const discoveryId = await createFolder("01 — Discovery & Audit", folderId)
  const proposalId = await createFolder("02 — Proposal", folderId)
  const deliveryId = await createFolder("03 — Delivery", folderId)
  const handoverId = await createFolder("04 — Handover", folderId)

  // ── 3. Create all documents ──────────────────────────────────────────────

  // All doc creation runs in parallel for speed
  await Promise.all([
    // ── 01 — Discovery & Audit ─────────────────────────────────────────────

    createDoc(
      `Client Brief — ${clientLabel}`,
      discoveryId,
      buildClientBrief(data, today),
    ),
    createDoc(
      `Audit Meeting Plan — ${clientLabel}`,
      discoveryId,
      buildMeetingPlanDoc(data, result),
    ),
    createDoc(
      `Recommendations — ${clientLabel}`,
      discoveryId,
      buildRecommendationsDoc(data, result),
    ),
    createDoc(
      `Audit Notes — ${clientLabel}`,
      discoveryId,
      buildAuditNotesTemplate(data),
    ),
    createDoc(
      `Discovery Checklist — ${clientLabel}`,
      discoveryId,
      buildDiscoveryChecklist(data),
    ),

    // ── 02 — Proposal ──────────────────────────────────────────────────────

    createDoc(
      `Proposal Draft — ${clientLabel}`,
      proposalId,
      buildProposalTemplate(data, result),
    ),
    createDoc(
      `Follow-Up Emails — ${clientLabel}`,
      proposalId,
      buildFollowUpEmails(data, result),
    ),

    // ── 03 — Delivery ──────────────────────────────────────────────────────

    createDoc(
      `Onboarding Email — ${clientLabel}`,
      deliveryId,
      buildOnboardingEmail(data, result),
    ),
    createDoc(
      `Project Tracker — ${clientLabel}`,
      deliveryId,
      buildProjectTracker(data, result),
    ),
    createDoc(
      `Automation Documentation — ${clientLabel}`,
      deliveryId,
      buildDocumentationTemplate(data, result),
    ),

    // ── 04 — Handover ──────────────────────────────────────────────────────

    createDoc(
      `Handover Checklist — ${clientLabel}`,
      handoverId,
      buildHandoverChecklist(data, result),
    ),
    createDoc(
      `Testimonial Request — ${clientLabel}`,
      handoverId,
      buildTestimonialRequest(data),
    ),
    createDoc(
      `Support Retainer Pitch — ${clientLabel}`,
      handoverId,
      buildSupportRetainerPitch(data, result),
    ),
  ])

  console.log(`[google-drive] Created client folder: ${folderName} (${folderId}) — 13 docs (Google Doc + .md each)`)
  return folderId
}

// ─── Doc content builders ────────────────────────────────────────────────────
// ─── 01 — Discovery & Audit ─────────────────────────────────────────────────

function buildClientBrief(data: AssessmentPayload, date: string): string {
  return `# Client Brief

| Field | Detail |
|-------|--------|
| **Date** | ${date} |
| **Name** | ${data.name} |
| **Email** | ${data.email} |
| **Business** | ${data.businessName || "—"} |
| **Industry** | ${data.industry} |
| **Team Size** | ${data.teamSize} |
| **Business Age** | ${data.businessAge} |
| **Admin Hours/Week** | ${data.adminHours} |

---

## Their Words

**Biggest Pain:**
> ${data.biggestPainDescription || "Not provided"}

**Biggest Bottleneck:**
> ${data.biggestBottleneck || "Not provided"}

**What They'd Do With Extra Time:**
> ${data.extraTimeUse || "Not specified"}

---

## Current Operations

**Time-Consuming Tasks:**
${data.timeConsumingTasks.map((t) => `- ${t}`).join("\n") || "- None selected"}

**Time-Wasting Situations:**
${data.timeWasterSituations.map((t) => `- ${t}`).join("\n") || "- None selected"}

- **Task Tracking:** ${data.taskTracking || "—"}
- **Process Consistency:** ${data.processConsistency ? `${data.processConsistency}/5` : "—"}

---

## Technology Stack

**Current Tools:**
${data.currentTools.map((t) => `- ${t}`).join("\n") || "- None / mostly manual"}

**Current Automation:**
${data.currentAutomation.map((t) => `- ${t}`).join("\n") || "- None"}

---

## Goals

${data.businessGoals.map((g) => `- ${g}`).join("\n") || "- None selected"}

---

*Lead source: Website Assessment Quiz — ${date}*`
}

function buildMeetingPlanDoc(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const mp = result.meetingPlan

  return `# 30-Minute Audit — Meeting Plan

> **Client:** ${data.name}${data.businessName ? ` — ${data.businessName}` : ""}
> **Industry:** ${data.industry} | **Team:** ${data.teamSize} | **Admin:** ${data.adminHours}/wk

---

## Pre-Call Prep

${mp.preCallPrep.map((p) => `- [ ] ${p}`).join("\n")}

---

## Opening Hook

> *"${mp.openingHook}"*

---

## Discovery Questions

${mp.discoveryQuestions.map((q, i) => `${i + 1}. ${q}`).join("\n")}

---

## Demo Opportunities

${mp.demoOpportunities.map((d) => `- ${d}`).join("\n")}

---

## Objection Prep

${mp.objectionPrep.map((o) => `- ${o}`).join("\n")}

---

## Proposed Scope

${mp.proposedScope}

**Estimated Project Value:** ${mp.estimatedProjectValue}

---

## Next Steps (close the call with these)

${mp.nextSteps.map((s) => `- [ ] ${s}`).join("\n")}`
}

function buildRecommendationsDoc(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const recs = result.recommendations
    .map(
      (r, i) =>
        `### ${i + 1}. ${r.title}

- **Problem:** ${r.problem}
- **Solution:** ${r.solution}
- **Impact:** ${r.impact}
- **Tools:** ${r.tools.join(", ")}`,
    )
    .join("\n\n")

  const notes = result.kurtisNotes
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => `- ${l.replace(/^[-•*]\s*/, "")}`)
    .join("\n")

  return `# Recommendations & Talking Points

> **Client:** ${data.name}${data.businessName ? ` — ${data.businessName}` : ""}

---

## ${result.headline}

${result.summary}

---

## Recommendations (ordered by ROI)

${recs}

---

## Call to Action

${result.callToAction}

---

## Internal Talking Points

${notes}`
}

function buildAuditNotesTemplate(data: AssessmentPayload): string {
  return `# Audit Call Notes

> **Client:** ${data.name}${data.businessName ? ` — ${data.businessName}` : ""}
> **Date:** _______________
> **Duration:** 30 minutes

---

## Fit Rating

- [ ] **Hot** — ready to go, clear ROI, budget available
- [ ] **Warm** — interested, needs proposal to decide
- [ ] **Cool** — exploring, not urgent
- [ ] **Not a fit** — wrong stage, too small, misaligned

---

## Key Pain Points (in their words)

1.
2.
3.

---

## Automations Discussed

### 1.
- Estimated time savings:
- Tools needed:

### 2.
- Estimated time savings:
- Tools needed:

### 3.
- Estimated time savings:
- Tools needed:

---

## Objections / Concerns Raised



---

## Budget Discussed

- [ ] Not discussed
- [ ] $2K–$5K range
- [ ] $5K–$10K range
- [ ] $10K+ range
- [ ] Ongoing support interest

---

## Next Steps

- [ ] Send proposal (by: _______)
- [ ] Send case study
- [ ] Follow up in _____ days
- [ ] Schedule follow-up call
- [ ] Other:

---

## Additional Notes

`
}

function buildDiscoveryChecklist(data: AssessmentPayload): string {
  return `# Discovery Checklist

> **Client:** ${data.name}${data.businessName ? ` — ${data.businessName}` : ""}

---

## Pre-Call Research (5 min before call)

- [ ] Review their website — what do they do, size, industry signals
- [ ] Check LinkedIn — who am I talking to, role, experience
- [ ] Review CRM/assessment data — how they found us, quiz answers
- [ ] Open ROI calculator in a tab
- [ ] Review Meeting Plan doc (in this folder)
- [ ] Have Recommendations doc open for reference

---

## During the Call

- [ ] Confirm their role and who else is involved in decisions
- [ ] Validate assessment pain points — ask them to walk through their week
- [ ] Ask: "What tools are you currently using?" (verify against quiz answers)
- [ ] Ask: "How many hours a week does your team spend on [pain point]?"
- [ ] Ask: "Have you tried automating anything before? What happened?"
- [ ] Ask: "If we could fix one thing today, what would it be?"
- [ ] Present 2–3 specific automations with time-savings estimates
- [ ] Gauge budget expectations — listen for signals, don't push
- [ ] Confirm next step: "I'll send a proposal within 1–2 business days"

---

## Post-Call Actions (within 2 hours)

- [ ] Fill in Audit Notes doc (in this folder)
- [ ] Update fit rating (Hot / Warm / Cool / Not a fit)
- [ ] Log pain points, tools discussed, and recommended automations
- [ ] Send follow-up email (use Follow-Up Email #1 from 02 — Proposal folder)
- [ ] If Hot/Warm: begin customising Proposal Draft
- [ ] If Cool: schedule follow-up for 2 weeks
- [ ] If Not a fit: note reason, close gracefully
- [ ] Update Google Sheet with status

---

## Red Flags to Watch For

- No clear pain point (just "curious about automation")
- Can't articulate what's costing them time
- Expects free work or extended trial
- Team size of 1 with no revenue (too early)
- Already committed to a competitor solution
`
}

// ─── 02 — Proposal ──────────────────────────────────────────────────────────

function buildProposalTemplate(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const topRecs = result.recommendations.slice(0, 3)
  const recsList = topRecs
    .map(
      (r, i) =>
        `### ${i + 1}. ${r.title}

${r.solution}

**Expected impact:** ${r.impact}`,
    )
    .join("\n\n")

  return `# Proposal Draft

| | |
|---|---|
| **Prepared for** | ${data.name}${data.businessName ? ` — ${data.businessName}` : ""} |
| **Prepared by** | Kurtis Dunn — Business Automation Consulting |
| **Date** | _______________ |

---

## The Challenge

${data.businessName || "Your business"} currently spends ${data.adminHours || "significant hours"} per week on repetitive admin tasks. ${data.biggestPainDescription || "Key manual processes are slowing the team down and creating bottlenecks."}

---

## What We'll Build

${recsList}

---

## How It Works

| Week | Phase | Detail |
|------|-------|--------|
| 1 | Discovery & setup | Access to your tools, map current workflows, confirm scope |
| 2–3 | Build & configure | Build automations, connect tools, internal testing |
| 4 | Testing, training & handover | Test with real data, train your team, deliver documentation |

---

## Investment

**[INSERT PRICING]**

Estimated value range: **${result.meetingPlan.estimatedProjectValue}**

**Includes:**
- All automations listed above
- Full documentation and handover guide
- 1-hour training session for your team
- 30 days post-launch support

**Payment terms:** 50% on signing, 50% on completion

*Optional: Ongoing support retainer ($___/month)*

---

## About Kurtis

Kurtis Dunn is an AWS Certified Solutions Architect, DevOps Engineer and Security Specialist helping Australian small businesses automate their operations. Specialising in ${data.industry.toLowerCase()}, with a focus on practical, maintainable automation that pays for itself.

---

## Next Steps

1. Review and approve this proposal
2. Sign and pay 50% deposit
3. We begin Week 1 — discovery & setup
4. Your automations are live within 4 weeks

---

**Kurtis Dunn**
kurtis@kurtisdunn.com.au | kurtisdunn.com.au
ABN 69 866 882 083`
}

function buildFollowUpEmails(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const clientLabel = data.businessName || data.name
  const firstName = data.name.split(" ")[0]
  const topRecs = result.recommendations.slice(0, 3)

  return `# Follow-Up Email Sequence — ${clientLabel}

> Copy-paste these emails as needed. Adjust timing based on the conversation.

---

## Email 1 — Post-Audit Summary (send within 2 hours of call)

**Subject:** Great chatting, ${firstName} — here's what we discussed

Hi ${firstName},

Thanks for taking the time to chat today — I really enjoyed learning about ${clientLabel} and what you're building.

Here's a quick recap of what we discussed:

${topRecs.map((r) => `- **${r.title}** — ${r.impact}`).join("\n")}

I'll have a proposal over to you within the next 1–2 business days with exact scope, timeline, and pricing.

In the meantime, feel free to reply with any questions.

Cheers,
Kurtis

---

## Email 2 — Proposal Delivery (1–2 days after audit)

**Subject:** Your automation proposal — ${clientLabel}

Hi ${firstName},

As promised, here's your proposal: **[ATTACH PDF or LINK]**

Quick summary:
- **What:** ${topRecs.map((r) => r.title).join(", ")}
- **Timeline:** 4 weeks from kickoff
- **Investment:** ${result.meetingPlan.estimatedProjectValue}

Everything is detailed in the proposal, but the short version: we connect your existing tools, eliminate the manual work, and hand you a documented system your team can run without me.

Happy to jump on a quick call if you'd like to talk through anything.

Cheers,
Kurtis

---

## Email 3 — Gentle Follow-Up (4 days after proposal, no response)

**Subject:** Quick follow-up on the proposal

Hi ${firstName},

Just checking in — did you get a chance to look over the proposal?

No rush at all. If anything's unclear or you'd like to adjust the scope, I'm happy to chat.

Cheers,
Kurtis

---

## Email 4 — Value Reminder (8 days after proposal, no response)

**Subject:** Thought of you — quick note

Hi ${firstName},

I was working on a similar project this week and it reminded me of your situation with ${data.biggestPainDescription ? data.biggestPainDescription.split(".")[0].toLowerCase() : "the manual processes we discussed"}.

For context, that client was spending about ${data.adminHours || "10+"} hours a week on the same kind of admin. After automation, they got most of that back.

No pressure — just wanted to share in case it helps with the decision. The proposal still stands whenever you're ready.

Cheers,
Kurtis

---

## Email 5 — Graceful Close (14 days after proposal, no response)

**Subject:** Closing the loop

Hi ${firstName},

I know things get busy, so I wanted to follow up one last time.

If the timing isn't right, no worries at all — I'll check back in a few months to see how things are going. The offer stands whenever you're ready.

If something else came up or you went a different direction, I'd genuinely appreciate knowing — it helps me improve.

All the best with ${clientLabel}.

Cheers,
Kurtis
`
}

// ─── 03 — Delivery ──────────────────────────────────────────────────────────

function buildOnboardingEmail(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const firstName = data.name.split(" ")[0]
  const clientLabel = data.businessName || data.name
  const topRecs = result.recommendations.slice(0, 3)

  return `# Onboarding Email — ${clientLabel}

> Send this after proposal is signed and deposit received.

---

**Subject:** We're on! Here's what happens next — ${clientLabel}

Hi ${firstName},

Welcome aboard! I'm really looking forward to working with you and the team at ${clientLabel}.

Here's what happens next:

---

### Week 1 — Discovery & Setup

I need access to a few things so I can start mapping your current workflows:

**Please share access to:**
${data.currentTools.map((t) => `- [ ] ${t} — admin or editor access`).join("\n") || "- [ ] Your main business tools (I'll confirm which ones on our kickoff call)"}
- [ ] Any spreadsheets, templates, or documents your team uses daily
- [ ] Relevant email accounts or inboxes (if applicable)

> **Easiest way:** Create a temporary login or invite me at kurtis@kurtisdunn.com.au

---

### What I'll deliver

${topRecs.map((r, i) => `${i + 1}. **${r.title}** — ${r.solution}`).join("\n")}

---

### How we'll communicate

- **Primary:** Email (kurtis@kurtisdunn.com.au)
- **Quick questions:** I'll share my mobile number on our kickoff call
- **Updates:** I'll send you a weekly progress update every Friday
- **Meetings:** One kickoff call this week, then as-needed

---

### Timeline

| Week | What's happening |
|------|-----------------|
| 1 | Discovery — access setup, workflow mapping, scope confirmation |
| 2–3 | Build — automations built, connected, internally tested |
| 4 | Handover — testing with real data, team training, documentation |

---

### One thing to do now

Reply to this email with the access details above, and I'll get started.

Looking forward to it!

Cheers,
Kurtis
`
}

function buildProjectTracker(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const clientLabel = data.businessName || data.name
  const topRecs = result.recommendations.slice(0, 3)

  return `# Project Tracker — ${clientLabel}

> Update this document throughout the project. This is the single source of truth.

---

## Project Details

| | |
|---|---|
| **Client** | ${data.name}${data.businessName ? ` — ${data.businessName}` : ""} |
| **Industry** | ${data.industry} |
| **Start date** | _______________ |
| **Target completion** | _______________ |
| **Project value** | ${result.meetingPlan.estimatedProjectValue} |
| **Deposit received** | - [ ] Yes |
| **Status** | Not started |

---

## Scope — Automations to Build

${topRecs.map((r, i) => `### ${i + 1}. ${r.title}

- **What:** ${r.solution}
- **Tools:** ${r.tools.join(", ")}
- **Status:** Not started
- **Notes:**
`).join("\n")}

---

## Week 1 — Discovery & Setup

- [ ] Kickoff call completed
- [ ] Access to all tools received
- [ ] Current workflows mapped and documented
- [ ] Scope confirmed with client (any changes from proposal?)
- [ ] Data sources identified
- [ ] Edge cases and exceptions documented
- [ ] Weekly update #1 sent

---

## Week 2 — Build (Part 1)

- [ ] Automation #1 — built and internally tested
- [ ] Automation #2 — built and internally tested
- [ ] Integration points connected
- [ ] Error handling configured
- [ ] Weekly update #2 sent

---

## Week 3 — Build (Part 2)

- [ ] Automation #3 — built and internally tested
- [ ] All automations running end-to-end
- [ ] Client review / demo of progress
- [ ] Feedback incorporated
- [ ] Weekly update #3 sent

---

## Week 4 — Testing, Training & Handover

- [ ] Test with real client data
- [ ] Fix any issues found during testing
- [ ] Documentation written (see Automation Documentation doc)
- [ ] Training session scheduled
- [ ] Training session completed
- [ ] Client sign-off received
- [ ] Final invoice sent
- [ ] Final invoice paid
- [ ] Weekly update #4 (final) sent
- [ ] Handover Checklist completed (see 04 — Handover folder)

---

## Post-Launch Support (30 days)

- [ ] Week 1 check-in: "How's everything running?"
- [ ] Week 2 check-in: any tweaks needed?
- [ ] Week 3: proactive review of automation logs
- [ ] Week 4: final check, pitch support retainer if appropriate
- [ ] Support period ended — move to alumni sequence

---

## Issues / Change Requests

| Date | Issue | Status | Resolution |
|------|-------|--------|------------|
| | | | |
| | | | |
| | | | |

---

## Client Communication Log

| Date | Type | Summary |
|------|------|---------|
| | Kickoff call | |
| | Weekly update | |
| | | |
`
}

function buildDocumentationTemplate(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const clientLabel = data.businessName || data.name
  const topRecs = result.recommendations.slice(0, 3)

  return `# Automation Documentation — ${clientLabel}

> This is the client-facing documentation. Write in plain English.
> The goal: ${clientLabel}'s team can maintain these automations without Kurtis.

---

${topRecs.map((r, i) => `## Automation ${i + 1}: ${r.title}

### What it does

${r.solution}

### How it works (step by step)

1. **Trigger:** [What kicks off this automation?]
2. **Step 1:** [What happens first?]
3. **Step 2:** [What happens next?]
4. **Output:** [What's the end result?]

### Tools involved

${r.tools.map((t) => `- **${t}** — [what role it plays]`).join("\n")}

### How to check it's working

- [ ] [What to look for to confirm it's running]
- [ ] [Where to check logs or history]

### Common issues & fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| [Automation didn't fire] | [Typical cause] | [How to fix] |
| [Wrong data appeared] | [Typical cause] | [How to fix] |
| [Error notification received] | [Typical cause] | [How to fix] |

### How to make changes

- **To change [common thing]:** [Step-by-step instructions]
- **To add [common thing]:** [Step-by-step instructions]
- **To pause/disable:** [Step-by-step instructions]

---
`).join("\n")}

## General Troubleshooting

### If an automation stops working

1. Check if the trigger tool is still connected (re-authenticate if needed)
2. Check if any tool has updated or changed its interface
3. Look at the automation history/logs for error messages
4. Try re-running the last failed step manually
5. If stuck, email kurtis@kurtisdunn.com.au with the error message

### Key accounts & access

| Tool | Login | Role | Notes |
|------|-------|------|-------|
| | | | |
| | | | |
| | | | |

---

*Documentation prepared by Kurtis Dunn — kurtisdunn.com.au*
*Last updated: _______________*
`
}

// ─── 04 — Handover ──────────────────────────────────────────────────────────

function buildHandoverChecklist(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const clientLabel = data.businessName || data.name

  return `# Handover Checklist — ${clientLabel}

> Complete every item before closing the project.

---

## Deliverables

- [ ] All automations built, tested, and running in production
- [ ] Automation Documentation completed and shared with client
- [ ] Training session delivered (${data.teamSize} team members)
- [ ] Training session recorded (if agreed)
- [ ] All access credentials documented

---

## Client Sign-Off

- [ ] Client has confirmed all automations are working as expected
- [ ] Client has confirmed documentation is clear and complete
- [ ] Client knows how to troubleshoot common issues
- [ ] Client knows who to contact for support

---

## Financial

- [ ] Final invoice sent
- [ ] Final invoice paid
- [ ] Support retainer discussed (see Support Retainer Pitch doc)

---

## Access & Security

- [ ] Remove any temporary admin access Kurtis had
- [ ] Transfer ownership of any automations to client's account
- [ ] Confirm client has master credentials for all tools
- [ ] Remove any test data created during build

---

## Post-Project Setup

- [ ] 30-day support period started (end date: _______________)
- [ ] Weekly check-in schedule confirmed
- [ ] Testimonial request scheduled for Day 7 (see Testimonial Request doc)
- [ ] Client added to alumni nurture sequence
- [ ] Google Sheet updated with project status: Completed
- [ ] CRM updated with project completion date

---

## Lessons Learned (internal)

**What went well:**
-
-

**What could improve:**
-
-

**Scope creep / change requests during project:**
-
-

**Would I take this type of project again?** Yes / No / With changes

**Referral potential:** High / Medium / Low
`
}

function buildTestimonialRequest(data: AssessmentPayload): string {
  const firstName = data.name.split(" ")[0]
  const clientLabel = data.businessName || data.name

  return `# Testimonial Request — ${clientLabel}

> Send 7 days after project completion. Copy-paste the email below.

---

**Subject:** Quick favour — 30 seconds

Hi ${firstName},

It's been a week since we wrapped up your automation project, and I hope everything's running smoothly!

I have a quick favour to ask — would you mind sharing a short testimonial about your experience? It really helps other small business owners feel confident about working with me.

No need to write an essay — even 2–3 sentences is perfect. Here are some prompts if it helps:

1. **What was the biggest problem we solved?**
2. **What results have you seen since?** (time saved, fewer errors, etc.)
3. **Would you recommend this to other business owners? Why?**

You can reply directly to this email, or if you'd prefer, I can send you a quick form.

Either way, thanks for being a great client — it's been a pleasure working with ${clientLabel}.

Cheers,
Kurtis

---

## If They Respond — Next Steps

- [ ] Thank them immediately
- [ ] Ask permission to use their name and business name
- [ ] Ask if they'd be open to a short video testimonial (optional, high value)
- [ ] Add to website testimonials (src/data/testimonials.ts)
- [ ] Add to proposal social proof section
- [ ] Send a small thank-you (handwritten note, coffee voucher, etc.)

---

## If No Response After 3 Days

**Subject:** Re: Quick favour — 30 seconds

Hi ${firstName},

Just bumping this up — totally understand if you're busy.

If a testimonial feels like too much, even a one-line reply like "Kurtis helped us save X hours a week on Y" would be amazing.

No pressure either way!

Cheers,
Kurtis
`
}

function buildSupportRetainerPitch(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const clientLabel = data.businessName || data.name
  const firstName = data.name.split(" ")[0]
  const topRecs = result.recommendations.slice(0, 3)

  return `# Support Retainer Pitch — ${clientLabel}

> Use this during the handover conversation or as a follow-up email.
> Best pitched during the final week of the project when value is most tangible.

---

## Talking Points (verbal, during handover call)

> "${firstName}, your automations are running great. One thing I want to flag — these tools update regularly, and sometimes an API change or a tool update can break a connection. Most of my clients find it's worth having someone keep an eye on things so nothing falls over silently."

> "I offer a monthly support retainer — think of it as insurance for your automations. I proactively monitor everything, handle any tweaks, and you get priority access if something needs fixing."

---

## Email Version (send 1 week after handover if not discussed)

**Subject:** Keeping your automations running smoothly

Hi ${firstName},

Now that your automations are live, I wanted to mention something I offer to all my clients — an ongoing support retainer.

### What's included:

- **Proactive monitoring** — I check your automations regularly so issues are caught before they affect your team
- **Quarterly optimisation reviews** — as your business grows, your automations should too
- **Priority support** — if something breaks, you go to the front of the queue
- **Training for new team members** — when you hire, I'll get them up to speed
- **Tool updates** — when ${topRecs.map((r) => r.tools[0]).filter(Boolean).slice(0, 2).join(" or ")} updates their platform, I handle the adjustments

### Investment:

**$500/month** (cancel anytime with 30 days notice)

No lock-in contract. Most clients find it pays for itself the first time something breaks at 5pm on a Friday.

Want me to set this up? Just reply and I'll send through the details.

Cheers,
Kurtis

---

## Objection Handling

**"I can handle it myself"**
> "Absolutely — and the documentation is designed for that. The retainer is really for the stuff you can't see: silent failures, API changes, and optimisation opportunities. Most of my clients prefer to focus on running their business."

**"Too expensive"**
> "Totally understand. The 30-day post-launch support is included either way. If you'd prefer, I also do ad-hoc support at $150/hour — no commitment, just call when you need me."

**"Let me think about it"**
> "Of course. I'll follow up in a month when the 30-day support wraps up. By then you'll have a good feel for how hands-on these need to be."
`
}
