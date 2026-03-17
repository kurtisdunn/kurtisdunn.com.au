import { after } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Resend } from "resend"
import { logAssessmentLead } from "@/lib/google-sheets"
import { createClientFolder } from "@/lib/google-drive"

// ─── Types ────────────────────────────────────────────────────────────────────

export type AssessmentPayload = {
  // Contact
  name: string
  email: string
  businessName: string
  biggestPainDescription: string
  // Business
  industry: string
  teamSize: string
  businessAge: string
  // Operations
  timeConsumingTasks: string[]
  biggestBottleneck: string
  taskTracking: string
  processConsistency: string
  // Time wasters
  timeWasterSituations: string[]
  adminHours: string
  // Technology
  currentTools: string[]
  currentAutomation: string[]
  // Goals
  businessGoals: string[]
  extraTimeUse: string
}

export type Recommendation = {
  title: string
  problem: string
  solution: string
  impact: string
  tools: string[]
}

export type MeetingPlan = {
  preCallPrep: string[]
  openingHook: string
  discoveryQuestions: string[]
  demoOpportunities: string[]
  objectionPrep: string[]
  proposedScope: string
  nextSteps: string[]
  estimatedProjectValue: string
}

export type AssessmentResult = {
  headline: string
  summary: string
  recommendations: Recommendation[]
  callToAction: string
}

// ─── Gemini prompt ────────────────────────────────────────────────────────────

function buildPrompt(data: AssessmentPayload): string {
  return `You are Kurtis Dunn, an Australian business automation consultant. A potential client has completed an assessment. Analyse their answers and generate a personalised automation roadmap.

ASSESSMENT DATA:
Name: ${data.name}
Business: ${data.businessName || "Not provided"}
Industry: ${data.industry}
Team size: ${data.teamSize}
Business age: ${data.businessAge}
Weekly admin hours: ${data.adminHours}

Most time-consuming tasks: ${data.timeConsumingTasks.join(", ") || "None selected"}
Biggest bottleneck (their words): "${data.biggestBottleneck || "Not described"}"
Biggest pain described upfront: "${data.biggestPainDescription || "Not provided"}"

Time-wasting situations they experience: ${data.timeWasterSituations.join(", ") || "None selected"}

Current tools: ${data.currentTools.join(", ") || "None / doing things manually"}
Current automation in use: ${data.currentAutomation.join(", ") || "None"}
Process consistency (1–5): ${data.processConsistency || "Not rated"}
Task tracking method: ${data.taskTracking || "Not specified"}

Business goals: ${data.businessGoals.join(", ") || "None selected"}
What they'd do with extra time: ${data.extraTimeUse || "Not specified"}

INSTRUCTIONS:
Generate a JSON object with EXACTLY this structure. Return ONLY valid JSON, no markdown, no explanation:

{
  "headline": "A short (max 10 words), specific, personalised headline. Example: 'Here's What I'd Automate First in Your Accounting Firm'",
  "summary": "3–4 sentences. Reference their specific situation: business type, team size, admin hours, and the pain they described. Make it feel like you've genuinely listened. Use plain Australian English. First person ('I'). Don't use phrases like 'based on your responses' or 'your assessment indicates'.",
  "recommendations": [
    {
      "title": "Specific, action-oriented title. Not generic. E.g., 'Auto-send invoices the moment a job is marked complete'",
      "problem": "One sentence naming the exact pain this solves. Reference their specific situation.",
      "solution": "2 sentences. What happens automatically and how. Mention real tool names where possible (Xero, ServiceM8, Power Automate, n8n, Make, HubSpot, etc.).",
      "impact": "Specific estimate. E.g., '6–10 hours saved per week' or 'Cuts invoice turnaround from 3 days to same-day'",
      "tools": ["Array of tool names relevant to this recommendation and their existing stack"]
    }
  ],
  "callToAction": "2 sentences. Personal invite to the 30-minute audit. Reference something specific from their answers. Warm, direct, Australian. E.g., 'Given you're spending ${data.adminHours} on admin each week, a 30-minute call would be worth it...'",
  "kurtisNotes": "INTERNAL — NOT shown to client. Bullet-point talking points for a 30-minute call: red flags, opportunities, suggested questions, what to demo, any concerns about ROI or readiness. Be direct and honest. 4–6 points.",
  "meetingPlan": {
    "preCallPrep": ["3–4 bullet points: what to check before the call (their website, LinkedIn, specific tools they mentioned, relevant case study to have ready)"],
    "openingHook": "1–2 sentences. A personalised opening line referencing something specific from their assessment — their biggest pain, their industry, or what they said they'd do with extra time. NOT generic.",
    "discoveryQuestions": ["4–5 specific questions to ask based on their answers. Dig deeper into the gaps — things they mentioned but didn't elaborate on, or red flags in their data. E.g., if process consistency is low, ask 'Walk me through what happens when a new job comes in — step by step.'"],
    "demoOpportunities": ["2–3 specific things to show or describe on the call that would land well with this client. E.g., 'Show how Xero auto-invoicing works with ServiceM8' or 'Walk through a live dashboard example for a trades business'. Reference their actual tools."],
    "objectionPrep": ["2–3 likely objections based on their profile (team size, industry, admin hours, previous automation experience) with one-line responses. E.g., if they're a small team: 'Too small for automation → Sweet spot is 5–50 staff, biggest ROI per dollar'"],
    "proposedScope": "2–3 sentences outlining what a realistic first project would look like for this client — which 1–2 automations to propose first, rough budget range, and timeline. Be specific.",
    "nextSteps": ["3–4 concrete next steps to close the call with. E.g., 'Send proposal within 48 hours', 'Follow up with ROI calculation', 'Share case study from similar trades business'"],
    "estimatedProjectValue": "Estimated project value range based on their team size, complexity, and number of recommended automations. E.g., '$4,000 – $7,000'"
  }
}

Rules:
- Generate 3–5 recommendations, ordered by estimated ROI (quickest win first)
- If they have no tools, recommend entry-level starting points
- If process consistency is 1–2, note that documentation comes before automation
- Recommendations must be specific to their industry and stated pain — not generic
- kurtisNotes must be genuinely useful prep, not a summary of what they already said
- meetingPlan must be a structured 30-minute audit call plan specific to THIS client — not generic advice. Reference their actual tools, industry, pain points, and team size. This is your prep sheet for the call.`
}

// ─── Email helpers ────────────────────────────────────────────────────────────

const EMAIL_FONT = `font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif;`

// Shared branded wrapper: pre-header + outer shell + header logo bar + footer
function emailShell(
  preheader: string,
  headerContent: string,
  bodyContent: string,
  footerContent: string,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Kurtis Dunn</title>
</head>
<body style="margin:0;padding:0;background:#F3F4F6;${EMAIL_FONT}">

  <!--[if mso]><div style="display:none"><![endif]-->
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#F3F4F6;line-height:1px;">${preheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
  <!--[if mso]></div><![endif]-->

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- Card -->
        <table role="presentation" width="100%" style="max-width:600px;" cellpadding="0" cellspacing="0" border="0">

          <!-- Logo bar -->
          <tr>
            <td style="background:#0D7377;padding:20px 32px 16px;border-radius:12px 12px 0 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px;">Kurtis Dunn</span>
                    <span style="color:rgba(255,255,255,0.55);font-size:13px;margin-left:10px;">Business Automation &amp; AI</span>
                  </td>
                  <td align="right">
                    <a href="https://kurtisdunn.com.au" style="color:rgba(255,255,255,0.6);font-size:12px;text-decoration:none;">kurtisdunn.com.au</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Coloured header band -->
          ${headerContent}

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:32px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:20px 32px;border-radius:0 0 12px 12px;">
              ${footerContent}
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

// ─── Email templates ──────────────────────────────────────────────────────────

function buildUserEmailHtml(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const firstName = data.name.split(" ")[0]

  const recs = result.recommendations
    .map(
      (r, i) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-left:4px solid #0D7377;border-radius:8px;padding:20px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#0D7377;">
            ${i + 1} of ${result.recommendations.length}
          </p>
          <p style="margin:0 0 10px;font-size:16px;font-weight:700;color:#111827;line-height:1.4;">${r.title}</p>
          <p style="margin:0 0 8px;font-size:14px;color:#374151;line-height:1.6;">
            <span style="font-weight:600;color:#111827;">The problem:</span> ${r.problem}
          </p>
          <p style="margin:0 0 12px;font-size:14px;color:#374151;line-height:1.6;">
            <span style="font-weight:600;color:#111827;">What happens:</span> ${r.solution}
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="background:#ECFDF5;border:1px solid #A7F3D0;border-radius:20px;padding:5px 12px;">
                <span style="font-size:12px;font-weight:700;color:#065F46;">&#10003; ${r.impact}</span>
              </td>
              ${r.tools.length ? `<td style="padding-left:10px;font-size:12px;color:#6B7280;">${r.tools.join(" &middot; ")}</td>` : ""}
            </tr>
          </table>
        </td>
      </tr>
    </table>`,
    )
    .join("")

  const header = `
  <tr>
    <td style="background:linear-gradient(135deg,#0D7377 0%,#0a5c60 100%);padding:28px 32px 32px;">
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.6);">Your Personalised Automation Plan</p>
      <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;line-height:1.35;">${result.headline}</h1>
    </td>
  </tr>`

  const body = `
    <p style="margin:0 0 6px;font-size:16px;color:#374151;line-height:1.7;">Hi ${firstName},</p>
    <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.8;">${result.summary}</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr>
        <td style="border-top:2px solid #E5E7EB;padding-top:20px;">
          <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:#111827;">Where I&rsquo;d start for ${data.businessName || "your business"}</p>
        </td>
      </tr>
    </table>

    ${recs}

    <!-- CTA block -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;">
      <tr>
        <td style="background:#0D7377;border-radius:10px;padding:28px;text-align:center;">
          <p style="margin:0 0 16px;font-size:15px;color:rgba(255,255,255,0.9);line-height:1.7;max-width:440px;margin-left:auto;margin-right:auto;">${result.callToAction}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
            <tr>
              <td style="background:#16A34A;border-radius:6px;padding:14px 32px;">
                <a href="https://kurtisdunn.com.au/book-audit" style="color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;">Book Your Free 30-Minute Audit</a>
              </td>
            </tr>
          </table>
          <p style="margin:14px 0 0;font-size:12px;color:rgba(255,255,255,0.55);">Zero cost &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Available this week</p>
        </td>
      </tr>
    </table>`

  const footer = `
    <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.7;">
      This plan was generated for <strong style="color:#374151;">${data.businessName || "your business"}</strong> based on your assessment answers.
      Questions? Reply to this email — it comes straight to me.
    </p>
    <p style="margin:12px 0 0;font-size:13px;color:#9CA3AF;">
      <strong style="color:#374151;">Kurtis Dunn</strong> &nbsp;&middot;&nbsp;
      <a href="mailto:kurtis@kurtisdunn.com.au" style="color:#0D7377;text-decoration:none;">kurtis@kurtisdunn.com.au</a> &nbsp;&middot;&nbsp;
      <a href="https://kurtisdunn.com.au" style="color:#0D7377;text-decoration:none;">kurtisdunn.com.au</a>
    </p>`

  return emailShell(
    `Your personalised automation plan for ${data.businessName || "your business"} is ready — ${result.recommendations.length} recommendations inside.`,
    header,
    body,
    footer,
  )
}

function buildKurtisEmailHtml(
  data: AssessmentPayload,
  result: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan },
): string {
  const formatList = (items: string[]) =>
    items.length ? items.map((i) => `<li style="margin-bottom:4px;">${i}</li>`).join("") : "<li style='color:#9CA3AF;'>None</li>"

  const notes = result.kurtisNotes
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => `<li style="margin-bottom:8px;line-height:1.6;">${l.replace(/^[-•*]\s*/, "")}</li>`)
    .join("")

  const header = `
  <tr>
    <td style="background:#111827;padding:20px 32px 24px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td>
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6B7280;">New Assessment Submission</p>
            <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">${data.name}${data.businessName ? ` &mdash; ${data.businessName}` : ""}</p>
            <p style="margin:6px 0 0;font-size:13px;color:#9CA3AF;">${data.email} &nbsp;&middot;&nbsp; ${data.industry} &nbsp;&middot;&nbsp; ${data.teamSize} staff</p>
          </td>
          <td align="right" style="vertical-align:top;">
            <span style="display:inline-block;background:#16A34A;color:#ffffff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;">REVIEW NEEDED</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>`

  const body = `
    <!-- Talking points -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr>
        <td style="background:#FFFBEB;border:1px solid #FCD34D;border-left:4px solid #F59E0B;border-radius:8px;padding:20px;">
          <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:0.06em;">Talking Points for the Audit Call</p>
          <ul style="margin:0;padding-left:18px;font-size:14px;color:#78350F;line-height:1.7;">${notes}</ul>
        </td>
      </tr>
    </table>

    <!-- Meeting Plan -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
      <tr>
        <td style="background:#EFF6FF;border:1px solid #BFDBFE;border-left:4px solid #2563EB;border-radius:8px;padding:20px;">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#1E40AF;text-transform:uppercase;letter-spacing:0.06em;">30-Minute Audit — Meeting Plan</p>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">PRE-CALL PREP</p>
          <ul style="margin:0 0 14px;padding-left:18px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.preCallPrep.map((p) => `<li style="margin-bottom:4px;">${p}</li>`).join("")}</ul>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">OPENING HOOK</p>
          <p style="margin:0 0 14px;font-size:13px;color:#1E3A5F;line-height:1.7;font-style:italic;">&ldquo;${result.meetingPlan.openingHook}&rdquo;</p>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">DISCOVERY QUESTIONS</p>
          <ol style="margin:0 0 14px;padding-left:18px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.discoveryQuestions.map((q) => `<li style="margin-bottom:4px;">${q}</li>`).join("")}</ol>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">DEMO OPPORTUNITIES</p>
          <ul style="margin:0 0 14px;padding-left:18px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.demoOpportunities.map((d) => `<li style="margin-bottom:4px;">${d}</li>`).join("")}</ul>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">OBJECTION PREP</p>
          <ul style="margin:0 0 14px;padding-left:18px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.objectionPrep.map((o) => `<li style="margin-bottom:4px;">${o}</li>`).join("")}</ul>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">PROPOSED SCOPE</p>
          <p style="margin:0 0 14px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.proposedScope}</p>

          <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#1E40AF;">NEXT STEPS (to close the call with)</p>
          <ol style="margin:0 0 14px;padding-left:18px;font-size:13px;color:#1E3A5F;line-height:1.7;">${result.meetingPlan.nextSteps.map((s) => `<li style="margin-bottom:4px;">${s}</li>`).join("")}</ol>

          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="background:#DBEAFE;border-radius:20px;padding:6px 14px;">
                <span style="font-size:12px;font-weight:700;color:#1E40AF;">Est. project value: ${result.meetingPlan.estimatedProjectValue}</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Recommendations summary -->
    <p style="margin:0 0 14px;font-size:15px;font-weight:700;color:#111827;">Generated Recommendations</p>
    ${result.recommendations
      .map(
        (r, i) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="font-size:12px;color:#6B7280;">Rec ${i + 1}</td>
              <td align="right" style="font-size:12px;color:#0D7377;font-weight:700;">${r.impact}</td>
            </tr>
          </table>
          <p style="margin:6px 0 4px;font-size:14px;font-weight:700;color:#111827;">${r.title}</p>
          <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">${r.solution}</p>
          ${r.tools.length ? `<p style="margin:8px 0 0;font-size:12px;color:#6B7280;">Tools: ${r.tools.join(" &middot; ")}</p>` : ""}
        </td>
      </tr>
    </table>`,
      )
      .join("")}

    <!-- Divider -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
      <tr><td style="border-top:1px solid #E5E7EB;"></td></tr>
    </table>

    <!-- Full data -->
    <p style="margin:0 0 14px;font-size:15px;font-weight:700;color:#111827;">Full Assessment Data</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13px;margin-bottom:20px;">
      <tr style="border-bottom:1px solid #F3F4F6;">
        <td style="padding:8px 0;color:#6B7280;width:42%;">Business age</td>
        <td style="padding:8px 0;color:#111827;font-weight:500;">${data.businessAge || "—"}</td>
      </tr>
      <tr style="border-bottom:1px solid #F3F4F6;">
        <td style="padding:8px 0;color:#6B7280;">Admin hours/week</td>
        <td style="padding:8px 0;color:#111827;font-weight:500;">${data.adminHours || "—"}</td>
      </tr>
      <tr style="border-bottom:1px solid #F3F4F6;">
        <td style="padding:8px 0;color:#6B7280;">Process consistency</td>
        <td style="padding:8px 0;color:#111827;font-weight:500;">${data.processConsistency ? `${data.processConsistency}/5` : "—"}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6B7280;">Task tracking</td>
        <td style="padding:8px 0;color:#111827;font-weight:500;">${data.taskTracking || "—"}</td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Time-consuming tasks</p>
          <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;">${formatList(data.timeConsumingTasks)}</ul>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Time-wasting situations</p>
          <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;">${formatList(data.timeWasterSituations)}</ul>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Current tools</p>
          <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;">${formatList(data.currentTools)}</ul>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Current automation</p>
          <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;">${formatList(data.currentAutomation)}</ul>
        </td>
      </tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
      <tr>
        <td style="background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:0.05em;">Business goals</p>
          <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;">${formatList(data.businessGoals)}</ul>
        </td>
      </tr>
    </table>

    ${data.biggestPainDescription ? `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
      <tr>
        <td style="background:#F0FDF4;border:1px solid #BBF7D0;border-left:4px solid #16A34A;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:0.06em;">Their words — upfront pain</p>
          <p style="margin:0;font-size:14px;color:#15803D;font-style:italic;line-height:1.6;">&ldquo;${data.biggestPainDescription}&rdquo;</p>
        </td>
      </tr>
    </table>` : ""}

    ${data.biggestBottleneck ? `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
      <tr>
        <td style="background:#F0FDF4;border:1px solid #BBF7D0;border-left:4px solid #16A34A;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#166534;text-transform:uppercase;letter-spacing:0.06em;">Their words — biggest bottleneck</p>
          <p style="margin:0;font-size:14px;color:#15803D;font-style:italic;line-height:1.6;">&ldquo;${data.biggestBottleneck}&rdquo;</p>
        </td>
      </tr>
    </table>` : ""}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:6px;">
      <tr>
        <td style="background:#EFF6FF;border:1px solid #BFDBFE;border-radius:6px;padding:14px 16px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#1E40AF;text-transform:uppercase;letter-spacing:0.06em;">What they&rsquo;d do with extra time</p>
          <p style="margin:0;font-size:14px;color:#1D4ED8;">${data.extraTimeUse || "Not specified"}</p>
        </td>
      </tr>
    </table>`

  const footer = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="font-size:12px;color:#9CA3AF;line-height:1.6;">
          <strong style="color:#6B7280;">Kurtis Dunn</strong> &nbsp;&middot;&nbsp; Internal assessment notification &nbsp;&middot;&nbsp;
          <a href="https://kurtisdunn.com.au" style="color:#0D7377;text-decoration:none;">kurtisdunn.com.au</a>
        </td>
        <td align="right" style="font-size:12px;color:#9CA3AF;white-space:nowrap;">
          Reply goes to: <a href="mailto:${data.email}" style="color:#0D7377;text-decoration:none;">${data.email}</a>
        </td>
      </tr>
    </table>`

  return emailShell(
    `New assessment: ${data.name}${data.businessName ? ` @ ${data.businessName}` : ""} — ${data.industry}, ${data.teamSize} staff`,
    header,
    body,
    footer,
  )
}

// ─── Background processing ───────────────────────────────────────────────────

async function processAssessment(data: AssessmentPayload) {
  // ── 0. Log to Google Sheets ──────────────────────────────────────────────

  try {
    await logAssessmentLead(data)
  } catch (err) {
    console.error("[assessment] Google Sheets error:", err)
  }

  // ── 1. Generate recommendations with Gemini ─────────────────────────────

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  })

  let rawResult: AssessmentResult & { kurtisNotes: string; meetingPlan: MeetingPlan }

  try {
    const response = await model.generateContent(buildPrompt(data))
    const text = response.response.text()

    // Gemini with responseMimeType should return clean JSON, but strip code fences just in case
    const clean = text.replace(/^```(?:json)?\n?/m, "").replace(/\n?```$/m, "").trim()
    rawResult = JSON.parse(clean)
  } catch (err) {
    console.error("[assessment] Gemini error:", err)
    return
  }

  // ── 2. Create Google Drive client folder ────────────────────────────────

  try {
    await createClientFolder(data, rawResult)
  } catch (err) {
    console.error("[assessment] Google Drive error:", err)
  }

  // ── 3. Send emails ──────────────────────────────────────────────────────

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const fromAddress = process.env.EMAIL_FROM ?? "kurtis@kurtisdunn.com.au"
    const kurtisEmail = process.env.KURTIS_EMAIL ?? "kurtis@kurtisdunn.com.au"

    await Promise.allSettled([
      // Email to the client
      resend.emails.send({
        from: `Kurtis Dunn <${fromAddress}>`,
        to: data.email,
        subject: `Your automation plan — ${data.businessName || data.name}`,
        html: buildUserEmailHtml(data, rawResult),
        replyTo: kurtisEmail,
      }),
      // Notification to Kurtis
      resend.emails.send({
        from: `Assessment Bot <${fromAddress}>`,
        to: kurtisEmail,
        subject: `New assessment: ${data.name}${data.businessName ? ` @ ${data.businessName}` : ""} (${data.industry})`,
        html: buildKurtisEmailHtml(data, rawResult),
        replyTo: data.email,
      }),
    ])
  } else {
    console.warn(
      "[assessment] RESEND_API_KEY not set — emails skipped. Set RESEND_API_KEY, EMAIL_FROM, and KURTIS_EMAIL in your environment.",
    )
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  let data: AssessmentPayload

  try {
    data = await req.json()
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 })
  }

  // Basic validation
  if (!data.name || !data.email || !data.industry) {
    return Response.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Process Claude + emails in background after response is sent
  after(() => processAssessment(data))

  return Response.json({ success: true })
}
