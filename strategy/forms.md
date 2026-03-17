# Form Design & Optimisation — kurtisdunn.com.au

## Forms Inventory

| Form | Location | Purpose | Goal |
|------|----------|---------|------|
| **Audit Booking Form** | `/book-audit`, header CTA | Primary conversion — book the 15-min call | Highest completion rate possible |
| **Quick Assessment Form** | Homepage hero, `/assessment` | Qualify + route to audit booking | Micro-commitment → audit |
| **Contact Form** | `/contact` | General enquiries | Low friction general capture |
| **Lead Magnet Form** | Blog posts, popups, resources | Email capture for nurture | Email list growth |
| **ROI Calculator Form** | `/resources/automation-roi-calculator` | Interactive engagement → audit | Micro-conversion → audit |

---

## FORM 1: Audit Booking Form (Primary)

### Design Philosophy
This is the most important form on the site. Every unnecessary field is a lost booking. Absolute minimum viable data to schedule a call.

### Field Specification

| # | Field | Type | Required | Label | Placeholder | Keyboard (mobile) | Why This Field |
|---|-------|------|:--------:|-------|-------------|:--:|------|
| 1 | First name | text | Yes | Your name | "e.g. Sarah" | text | Personalise the call |
| 2 | Email | email | Yes | Email address | "name@business.com.au" | email | Confirmation + follow-up |
| 3 | Business name | text | No | Business name (optional) | "e.g. Smith Plumbing" | text | Pre-call research |
| 4 | Biggest challenge | select | No | What's your biggest time drain? | "Select one..." | — | Pre-qualify + personalise |

**Dropdown options for "Biggest challenge":**
- Quoting & proposals
- Invoicing & billing
- Client onboarding
- Data entry & admin
- Reporting
- Team coordination
- Customer follow-ups
- Something else

**Total fields: 2 required, 2 optional = 4 total (feels like 2)**

### Button Copy
**Primary:** "Book My Free Audit"
**Loading state:** "Booking..." (button disabled, spinner)
**Success state:** Redirect to confirmation page

### Trust Elements (Adjacent to Form)

```
┌────────────────────────────────────┐
│  Your name: _______________        │
│  Email: ___________________        │
│  Business (optional): ________     │
│  Biggest time drain: [Select ▼]    │
│                                    │
│  [Book My Free Audit]              │
│                                    │
│  🔒 No spam. No obligation.        │
│     Your details stay with me.     │
│                                    │
│  ★★★★★ "Best 15 minutes I've      │
│  spent on the business this year." │
│  — Sarah M., Sydney               │
└────────────────────────────────────┘
```

### Validation Rules

| Field | Validation | Error Message |
|-------|-----------|---------------|
| Name | Non-empty, 2+ chars | "Please enter your name" |
| Email | Valid email format | "That doesn't look like an email address — check for typos?" |
| Email | Common domain typo detection | "Did you mean @gmail.com?" |

### Post-Submit Flow

1. **Immediate:** Redirect to `/book-audit/confirmed` thank-you page
2. **Thank-you page content:**
   - "You're booked. Here's what happens next."
   - Confirmation details (or Calendly embed for time selection)
   - "While you wait, check out: [relevant blog post] or [ROI Calculator]"
   - Calendar invite auto-sent via email
3. **Email (immediate):** Confirmation email with:
   - Call details + calendar link
   - "What to expect" one-paragraph overview
   - "No need to prepare anything. Just show up."
4. **Email (24h before call):** Reminder with the same details
5. **CRM action:** Lead created, tagged with "challenge" selection, assigned to Kurtis

### Alternative: Calendly/Cal.com Embed

If using a scheduling tool, the form simplifies further:

```
┌────────────────────────────────────┐
│  Pick a time that works:           │
│                                    │
│  [Calendly/Cal.com embed]          │
│  ┌──────────────────────────────┐  │
│  │  Mon 17 Mar  │  Tue 18 Mar  │  │
│  │  9:00am      │  10:00am     │  │
│  │  10:30am     │  2:00pm      │  │
│  │  2:00pm      │  3:30pm      │  │
│  └──────────────────────────────┘  │
│                                    │
│  Calendly handles name + email     │
│  collection in its own flow.       │
│                                    │
│  🔒 15 minutes · Zero cost         │
└────────────────────────────────────┘
```

**Recommendation:** Use Cal.com (open source, more customisable, lower cost) or Calendly. Embed directly on the page — don't redirect to an external booking page. The fewer page transitions, the higher the completion rate.

---

## FORM 2: Quick Assessment Form (Homepage Hero)

### Design Philosophy
This form lives in the homepage hero section. Its purpose is micro-commitment (commitment & consistency principle) — not data collection. It should feel like an interactive quiz, not a form.

### Field Specification

**Step 1 (visible in hero):**

| # | Field | Type | Required | Label |
|---|-------|------|:--------:|-------|
| 1 | Industry | button group | Yes | "What kind of business do you run?" |

**Options (clickable cards, not a dropdown):**
- 🔧 Trades & Field Service
- 💼 Professional Services
- 📊 Accounting & Finance
- 🏥 Healthcare
- 🏠 Property & Real Estate
- ⚖️ Legal
- 📦 Other

**Step 2 (revealed after step 1):**

| # | Field | Type | Required | Label |
|---|-------|------|:--------:|-------|
| 2 | Team size | button group | Yes | "How many people on your team?" |

**Options:**
- Just me
- 2–5
- 6–15
- 16–50
- 50+

**Step 3 (revealed after step 2):**

| # | Field | Type | Required | Label |
|---|-------|------|:--------:|-------|
| 3 | Biggest pain | button group | Yes | "What takes up the most time?" |

**Options:**
- Quoting & proposals
- Invoicing & billing
- Client onboarding
- Data entry
- Reporting
- Customer follow-ups

**Step 4 (final — collect contact):**

| # | Field | Type | Required | Label |
|---|-------|------|:--------:|-------|
| 4 | Name | text | Yes | "Your name" |
| 5 | Email | email | Yes | "Your email" |

**Button:** "See My Results →"

### Progress Indicator
- Visual dots or mini progress bar: ● ● ○ ○
- "Step 2 of 4" text label
- Goal-gradient effect: by step 3, they're 75% done and motivated to finish

### Post-Submit
- Store selections in sessionStorage + CRM
- Redirect to `/book-audit` with pre-filled context
- Display: "Based on what you've told me, here are the top 3 automations I'd recommend for a [industry] business with [X] staff..."
- Personalised CTA: "Book your free audit to walk through these together"

### Why This Design Works
- **Commitment & consistency:** Each click is a micro-yes that builds momentum
- **Goal-gradient:** Progress bar motivates completion
- **IKEA effect:** They've invested effort, making the result feel more valuable
- **Endowment:** "My results" — possessive language creates ownership
- **Low activation energy:** Clicking cards is easier than typing

---

## FORM 3: Contact Form

### Field Specification

| # | Field | Type | Required | Label | Placeholder |
|---|-------|------|:--------:|-------|-------------|
| 1 | Name | text | Yes | Your name | "e.g. Sarah Chen" |
| 2 | Email | email | Yes | Email address | "name@business.com.au" |
| 3 | Topic | select | Yes | How can I help? | "Select one..." |
| 4 | Message | textarea | No | Tell me more (optional) | "A few sentences about what you need..." |

**Topic dropdown options:**
- Book an Automation Audit (redirects to `/book-audit` on selection)
- General question about automation
- Ongoing support enquiry
- Partnership or media
- Something else

**Button:** "Send Message"

**Post-submit message:**
"Thanks — I'll get back to you within one business day. If it's urgent, call me on [phone number]."

---

## FORM 4: Lead Magnet Download Form

### Field Specification

| # | Field | Type | Required | Label |
|---|-------|------|:--------:|-------|
| 1 | Email | email | Yes | Your email |

**That's it. One field.**

**Button:** "Send Me the [Asset Name]"

**Post-submit:**
- Immediately display download link on page (don't rely solely on email delivery)
- Send email with download link as backup
- Tag contact in CRM with lead magnet name
- Enter nurture sequence (see `sales-enablement.md`)

### Why One Field
- Lead magnets are top-of-funnel. Asking for more data at this stage loses more leads than the data is worth.
- Name and company can be enriched later via Clearbit or asked in follow-up emails.
- The email alone is enough to begin nurturing.

---

## FORM 5: ROI Calculator

### Input Fields

| # | Field | Type | Label | Default |
|---|-------|------|-------|---------|
| 1 | Industry | button group | "What kind of business?" | None |
| 2 | Team size | slider or number | "How many people on your team?" | 10 |
| 3 | Hours on admin | slider | "How many hours per week does your team spend on repetitive admin?" | 15 |
| 4 | Average hourly cost | slider | "Roughly, what's the loaded hourly cost of your team?" | $45 |

### Output (Instant, No Email Required)

```
┌────────────────────────────────────────┐
│  Your Estimated Automation ROI         │
│                                        │
│  Weekly admin hours:        15 hrs     │
│  Automatable (est. 60%):   9 hrs       │
│  Weekly savings:           $405        │
│  Annual savings:           $21,060     │
│                                        │
│  Typical project cost:     $5,000–     │
│                            $10,000     │
│  Payback period:           ~3 months   │
│                                        │
│  ─────────────────────────────────     │
│                                        │
│  Want to dig into the specifics?       │
│  [Book Your Free Audit]               │
│                                        │
│  Or get a copy emailed to you:         │
│  Email: ___________ [Send]             │
│                                        │
└────────────────────────────────────────┘
```

### Design Principles
- Results shown instantly — no gating
- Email capture is optional and secondary ("Want a copy?")
- The large annual savings number serves as an anchor (see psychology-layer.md)
- CTA to book audit appears in context of the result they just calculated
- The investment they made in entering data (IKEA effect) makes the result feel valuable

---

## Mobile Form Optimisation

### All Forms
- Single column layout only
- Fields span full width of viewport (minus padding)
- Minimum touch target: 48px height
- 16px minimum font size in inputs (prevents iOS auto-zoom)
- Appropriate input types:
  - `type="email"` → shows @ key
  - `type="tel"` → shows number pad
  - `inputmode="numeric"` → for number fields
- `autocomplete` attributes on all fields:
  - `autocomplete="given-name"`
  - `autocomplete="email"`
  - `autocomplete="organization"`
  - `autocomplete="tel"`

### Mobile-Specific
- Sticky submit button (always visible at bottom of form)
- No dropdown selects where possible — use button groups/cards instead (easier to tap)
- Collapse optional fields behind "Add more details" link
- Keyboard should not obscure the active field (scroll into view)

---

## Error Handling Standards

### Inline Validation
- Validate on blur (when user moves to next field), not on every keystroke
- Show green checkmark on valid fields
- Show red border + error message on invalid fields
- Never clear the user's input on error

### Error Message Patterns

| Field | Error | Message |
|-------|-------|---------|
| Name | Empty | "Please enter your name" |
| Name | Too short | "Name should be at least 2 characters" |
| Email | Empty | "Please enter your email address" |
| Email | Invalid format | "That doesn't look like an email address" |
| Email | Common typo | "Did you mean @gmail.com?" (suggest correction) |
| Required select | No selection | "Please select an option" |

### On Submit Failure
- Scroll to first error field
- Focus the field
- Show all error messages
- Preserve all entered data
- Button returns to default state (re-enable)

---

## Analytics Events Per Form

| Event | Description | Data Captured |
|-------|-------------|--------------|
| `form_view` | Form enters viewport | form_name, page |
| `form_start` | First field focused | form_name, page, field_name |
| `field_complete` | Field blurred with value | form_name, field_name |
| `field_error` | Validation error shown | form_name, field_name, error_type |
| `form_submit` | Submit button clicked | form_name, page |
| `form_success` | Server confirms submission | form_name, page |
| `form_error` | Server returns error | form_name, error_type |
| `form_abandon` | Page unload with partial form | form_name, last_field_completed |

---

## Follow-Up Sequence Trigger Points

| Form Submitted | Immediate Action | Sequence Triggered |
|---------------|-----------------|-------------------|
| Audit booking | Confirmation email + calendar invite | Pre-audit warmup (see sales-enablement.md) |
| Quick assessment | Redirect to `/book-audit` with context | Assessment follow-up sequence |
| Contact form | "Thanks, I'll reply within 1 day" | None (manual reply) |
| Lead magnet | Deliver asset + confirmation | Nurture sequence (5 emails) |
| ROI Calculator (with email) | Send results copy | ROI follow-up sequence |
