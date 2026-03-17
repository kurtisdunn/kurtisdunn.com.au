# Revenue Operations Plan — kurtisdunn.com.au

## Context

This RevOps plan is designed for a **solo operator** with no sales team, no SDRs, and no account managers. Kurtis is the entire revenue function — marketing, sales, delivery, and support. The stack must be lightweight, automatable, and maintainable by one person.

**GTM motion:** Inbound-led, service-based
**ACV range:** $2,000–$15,000 per project + optional monthly support retainer
**Sales cycle:** 1–3 weeks (short: audit → proposal → signed)
**Current stack:** None (building from scratch)

---

## Recommended Tool Stack

| Function | Tool | Cost | Why This Tool |
|----------|------|------|---------------|
| **CRM** | HubSpot Free CRM | $0 | Free forever, good automation, integrates with everything |
| **Email marketing** | Kit (ConvertKit) or Mailchimp Free | $0–$29/mo | Simple email sequences, good for solo operators |
| **Scheduling** | Cal.com (self-hosted) or Calendly Free | $0 | Booking widget embeds, reminders, calendar sync |
| **Automation glue** | Make (Integromat) or Zapier | $0–$20/mo | Connect forms → CRM → email → calendar |
| **Forms** | Native site forms + HubSpot forms | $0 | Avoid third-party form tools |
| **Proposals** | PandaDoc Free or Google Docs | $0 | E-signature, tracking, templates |
| **Invoicing** | Xero | ~$30/mo | Standard Australian accounting integration |
| **Analytics** | GA4 + GSC + Microsoft Clarity | $0 | Covered in analytics-plan.md |
| **Project management** | Notion or Linear | $0 | Track active client projects |

**Total cost: $0–$80/month** — appropriate for a solo consultant.

---

## Lead Lifecycle (Solo Operator Version)

### Stage Definitions

| Stage | Entry Criteria | What Happens | Automation |
|-------|---------------|-------------|------------|
| **Subscriber** | Downloads lead magnet or subscribes to newsletter | Enters email nurture sequence | Auto: Add to Kit/Mailchimp, tag with source |
| **Lead** | Submits contact form or assessment, or completes ROI calculator with email | CRM contact created, tagged with source and interest | Auto: Create HubSpot contact, assign properties |
| **Audit Booked** | Books free 15-minute audit via Cal.com | Confirmation email sent, pre-audit prep triggered | Auto: Calendar invite, CRM stage update, reminder emails |
| **Audit Complete** | Audit call completed | Notes added to CRM, follow-up email sent within 2 hours | Manual: Add notes. Auto: Follow-up email template triggered |
| **Proposal Sent** | Proposal delivered via PandaDoc/email | Proposal tracking (opened, viewed, signed) | Auto: CRM stage update. Manual: Write and send proposal |
| **Won** | Proposal signed, deposit paid | Onboarding sequence triggered, project created in Notion | Auto: CRM stage update, onboarding email sequence |
| **Lost** | Proposal declined or no response after follow-up | Loss reason logged, enter re-engagement sequence | Auto: Move to "lost" in CRM, enter 90-day nurture |
| **Client** | Active project in progress | Regular check-ins, project updates | Manual: Delivery. Auto: Status update reminders |
| **Completed** | Project delivered and handed over | Request testimonial, enter alumni nurture | Auto: Testimonial request email, alumni sequence |

---

## Automated Workflows

### Workflow 1: New Lead → CRM → Audit Booking Nudge

```
Trigger: Form submission (any form except lead magnet)
  ↓
Action: Create contact in HubSpot
  - Set properties: name, email, company, source page, industry, challenge
  - Set lifecycle stage: Lead
  ↓
Condition: Did they book an audit?
  YES → Move to "Audit Booked" stage → stop
  NO → Enter audit nudge sequence:
    - Email 1 (immediate): "Thanks for reaching out. Here's what the free audit covers."
    - Email 2 (Day 2): "Most businesses I work with save 10–20 hours a week. Here's a case study."
    - Email 3 (Day 5): "Still thinking about it? Here's a quick way to see your potential savings." (link to ROI calculator)
    - Email 4 (Day 10): "Last note from me — the audit is free and takes 15 minutes. Book here if you'd like."
```

### Workflow 2: Audit Booked → Pre-Audit Warmup

```
Trigger: Cal.com booking confirmed (webhook → Make → HubSpot)
  ↓
Action: Update CRM stage to "Audit Booked"
  ↓
Action: Send confirmation email
  - What to expect
  - "No need to prepare anything"
  - Calendar invite attached
  ↓
Action: 24 hours before call → Send reminder email
  - "Looking forward to chatting tomorrow. Here's the link: [meeting URL]"
  ↓
Action: Create task in Notion: "Prep for audit: [Company Name]"
  - Pre-call checklist: check their website, LinkedIn, industry context
```

### Workflow 3: Post-Audit → Proposal Pipeline

```
Trigger: Kurtis marks audit as complete in CRM (manual)
  ↓
Action: Update CRM stage to "Audit Complete"
  ↓
Action: Send follow-up email (template, personalised by Kurtis):
  - Summary of what was discussed
  - Top 2–3 recommended automations
  - "I'll send a proposal by [date] if you'd like to move forward"
  ↓
Wait: Proposal sent (manual trigger)
  ↓
Action: Update CRM stage to "Proposal Sent"
  ↓
Action: If PandaDoc — track views and notify Kurtis when opened
  ↓
Wait: 3 days after proposal sent, no response
  ↓
Action: Send gentle follow-up: "Just checking — did you get a chance to look at the proposal?"
  ↓
Wait: 7 days after proposal sent, no response
  ↓
Action: Send final follow-up: "No worries if the timing isn't right. I'll check in again in a few months."
  ↓
If no response after 14 days → Move to "Lost" with reason "No response"
```

### Workflow 4: Won → Onboarding

```
Trigger: Proposal signed in PandaDoc (or manual CRM update)
  ↓
Action: Update CRM stage to "Won"
  ↓
Action: Send onboarding email:
  - Welcome + next steps
  - Access requests (tool logins, permissions)
  - Project timeline overview
  - "Here's how we'll communicate during the project"
  ↓
Action: Create project in Notion with template:
  - Client name, contact details
  - Scope from proposal
  - Milestones and deadlines
  - Deliverables checklist
  ↓
Action: Send invoice (deposit) via Xero
```

### Workflow 5: Project Complete → Testimonial + Alumni

```
Trigger: Project marked complete in Notion/CRM
  ↓
Action: Update CRM stage to "Completed"
  ↓
Wait: 7 days
  ↓
Action: Send testimonial request email:
  "Hey [Name], now that we've wrapped up — would you mind sharing a quick testimonial?
  Here's a one-question form: [link]. Takes 30 seconds."
  ↓
Wait: 30 days
  ↓
Action: Enter alumni nurture sequence:
  - Monthly: automation tip email (same as newsletter)
  - Quarterly: "How are your automations running? Need any tweaks?"
  - Annually: "Time for a check-up? Book a free review call."
```

### Workflow 6: Lost → Re-engagement

```
Trigger: CRM stage set to "Lost"
  ↓
Action: Log loss reason (dropdown: budget, timing, went with competitor, no response, not ready)
  ↓
Wait: 90 days
  ↓
Action: Send re-engagement email:
  "Hi [Name], it's been a few months since we chatted. Things change —
  if automation is back on the radar, the free audit offer still stands."
  ↓
If no response → Return to subscriber-level nurture (newsletter only)
```

---

## CRM Configuration (HubSpot Free)

### Pipeline Stages

| Stage | Probability | Required Fields |
|-------|:-----------:|----------------|
| Audit Booked | 10% | Name, email, company, industry, source |
| Audit Complete | 25% | Audit notes, recommended automations, fit rating |
| Proposal Sent | 50% | Proposal link, project value, expected close date |
| Negotiation | 70% | Any requested changes, revised terms |
| Won | 100% | Signed proposal, deposit invoice |
| Lost | 0% | Loss reason |

### Contact Properties (Custom)

| Property | Type | Options/Description |
|----------|------|-------------------|
| `industry` | Dropdown | Trades, Professional Services, Accounting, Healthcare, Property, Legal, Other |
| `team_size` | Dropdown | 1, 2–5, 6–15, 16–50, 50+ |
| `biggest_challenge` | Dropdown | Quoting, Invoicing, Onboarding, Data Entry, Reporting, Follow-ups, Other |
| `source_page` | Text | URL of the page that generated this lead |
| `lead_source` | Dropdown | Organic, Referral, LinkedIn, Email, Direct, Paid |
| `fit_rating` | Dropdown | Hot, Warm, Cool, Not a fit |
| `audit_date` | Date | Date of audit call |
| `project_value` | Currency | Estimated project value |
| `tools_used` | Multi-select | Xero, MYOB, ServiceM8, Tradify, HubSpot, Monday, etc. |

### Automation Rules in HubSpot

| Trigger | Action |
|---------|--------|
| Contact created with source = "audit_booking" | Set stage to "Audit Booked" |
| Deal stage moved to "Won" | Create task: "Send onboarding email" |
| Deal stage moved to "Lost" | Create task: "Log loss reason" |
| Deal in "Proposal Sent" for > 7 days | Create task: "Follow up on proposal" |
| Contact has no activity for 90 days | Add to re-engagement list |

---

## Speed-to-Lead (Solo Operator Edition)

Since Kurtis is a solo operator, "speed-to-lead" means automated responses, not human responses.

| Event | Response | Timing |
|-------|----------|--------|
| Audit booked | Automated confirmation email + calendar invite | Instant |
| Contact form submitted | Automated "Thanks, I'll reply within 1 business day" | Instant |
| Lead magnet downloaded | Automated delivery email + nurture sequence start | Instant |
| ROI calculator completed (with email) | Automated results email | Instant |
| Manual follow-up needed | Kurtis replies personally | Within 4 business hours |

### Notification Strategy
- **Email notification to Kurtis** for every new lead (contact form, audit booking)
- **Slack notification** (if using Slack) or **SMS via Make/Zapier** for high-priority events (audit bookings, proposal views)
- **Daily digest** of all new leads and pipeline changes (automated from HubSpot)

---

## Revenue Metrics & Targets

### Solo Operator Economics

| Metric | Assumption | Monthly | Annual |
|--------|-----------|---------|--------|
| Audit calls per month | 8–12 | — | — |
| Audit → proposal rate | 60% | 5–7 proposals | — |
| Proposal → won rate | 50% | 2–4 new clients | — |
| Average project value | $6,000 | — | — |
| **New project revenue** | | **$12K–$24K** | **$144K–$288K** |
| Ongoing support clients | 5–10 at $500/mo | **$2.5K–$5K** | **$30K–$60K** |
| **Total revenue target** | | **$14.5K–$29K** | **$174K–$348K** |

### Capacity Planning

| Activity | Hours/week | Notes |
|----------|:----------:|-------|
| Client delivery (projects) | 20–25 | Core revenue-generating work |
| Audit calls (8–12/month) | 2–3 | 15 min each + 15 min prep |
| Proposals & follow-up | 2–3 | Writing proposals, email follow-up |
| Content creation | 4–5 | 1 blog post/week + LinkedIn |
| Admin & ops | 2–3 | Invoicing, CRM, email |
| **Total** | **30–39** | Sustainable for solo operator |

---

## The Meta-Irony: Automate the Automation Consultant's Sales Process

Kurtis sells automation — so his own sales process should be visibly automated. This is both practical and a powerful trust signal.

**Visible automations in the sales process:**
1. Instant audit confirmation email (shows automation in action)
2. Automated calendar booking (no back-and-forth scheduling)
3. Pre-audit prep automatically pulled from CRM data
4. Proposal auto-populated from audit notes template
5. Follow-up sequences run automatically
6. Testimonial request sent automatically post-project

**Mention this to prospects:** "You just experienced automation yourself — the booking, the confirmation, the reminder. That's what I build for businesses like yours."

---

## Quarterly RevOps Review Checklist

- [ ] Review pipeline conversion rates by stage — where are deals stalling?
- [ ] Review lead sources — which channels produce the best leads?
- [ ] Check CRM data hygiene — merge duplicates, update stale contacts
- [ ] Review loss reasons — any patterns? (budget, timing, competitor)
- [ ] Update email sequences based on what's working
- [ ] Review pricing — is the ACV appropriate for the value delivered?
- [ ] Evaluate capacity — can Kurtis handle more audits, or is delivery the bottleneck?
- [ ] Update testimonials and case studies from recent projects
