# Popup & Overlay Strategy — kurtisdunn.com.au

## Strategy Overview

Three popup variants, each serving a different moment in the visitor journey. All popups are respectful, easy to dismiss, and genuinely valuable. No dark patterns.

### Popup Inventory

| Popup | Trigger | Goal | Audience |
|-------|---------|------|----------|
| **Exit Intent — Audit Nudge** | Exit intent (desktop) / scroll-up (mobile) | Capture leaving visitors, push to audit booking | All visitors who haven't booked |
| **Scroll — Lead Magnet** | 50% scroll depth on blog posts | Email capture via relevant lead magnet | Blog readers |
| **Timed — ROI Hook** | 45 seconds on service or industry pages | Micro-conversion via ROI calculator | Service/industry page visitors |

### Conflict Rules
- Only ONE popup per session, ever. First triggered wins.
- If visitor has already booked an audit or downloaded a lead magnet (cookie/localStorage check), suppress all popups.
- Never show popups on `/book-audit`, `/contact`, or during any active form interaction.
- 14-day cooldown after any popup dismissal before showing again.

---

## POPUP 1: Exit Intent — Audit Nudge

### Trigger
- **Desktop:** Mouse moves toward browser close/back button (exit intent detection)
- **Mobile:** User scrolls up rapidly after being 40%+ down the page (proxy for "leaving")
- **Delay:** Only after 15+ seconds on page (don't trigger for accidental clicks)

### Audience
- All visitors except:
  - Those who have already booked an audit
  - Those who dismissed a popup in the last 14 days
  - Those currently on `/book-audit` or `/contact`
  - Those referred from email (they're already in the funnel)

### Frequency
- Once per session maximum
- 14-day cooldown after dismissal
- Never show again after audit is booked

### Copy

**Variant A: Loss Aversion Frame**

```
┌────────────────────────────────────────────┐
│                                        [X] │
│                                            │
│   Still doing it all manually?             │
│                                            │
│   The average business I work with         │
│   is losing 10–20 hours a week to          │
│   tasks a computer should handle.          │
│                                            │
│   In 15 minutes, I'll show you exactly     │
│   where your time is going — for free.     │
│                                            │
│   [Book My Free Audit]                     │
│                                            │
│   No thanks, I'll keep doing it manually   │
│                                            │
└────────────────────────────────────────────┘
```

**Variant B: Social Proof Frame**

```
┌────────────────────────────────────────────┐
│                                        [X] │
│                                            │
│   50+ Australian businesses already        │
│   stopped wasting time on admin.           │
│                                            │
│   Book a free 15-minute audit and I'll     │
│   show you the 2–3 automations that        │
│   would make the biggest difference        │
│   to your week.                            │
│                                            │
│   [Book My Free Audit]                     │
│                                            │
│   Not right now                            │
│                                            │
└────────────────────────────────────────────┘
```

**Variant C: Curiosity + Specificity Frame**

```
┌────────────────────────────────────────────┐
│                                        [X] │
│                                            │
│   Quick question before you go —           │
│                                            │
│   Do you know which 3 tasks in your        │
│   business are costing you the most        │
│   time every week?                         │
│                                            │
│   I can tell you in 15 minutes. Free.      │
│                                            │
│   [Find Out → Book Free Audit]             │
│                                            │
│   I already know                           │
│                                            │
└────────────────────────────────────────────┘
```

### Design Notes
- **Size:** 480px wide (desktop), full-width bottom sheet (mobile)
- **Background:** White card, semi-transparent dark overlay behind
- **Close:** Visible [X] top-right + click outside to close + Esc key
- **CTA button:** russian-green background, white text, full-width within card
- **Decline text:** Subtle grey, no guilt-tripping
- **Animation:** Fade in (200ms), slight scale up from 95% to 100%
- **Mobile:** Bottom slide-up sheet, swipe down to dismiss

---

## POPUP 2: Scroll — Lead Magnet (Blog Posts Only)

### Trigger
- **Scroll depth:** 50% of article content
- **Pages:** Blog posts only (`/blog/*`)
- **Delay:** Not shown if visitor has been on page < 20 seconds (prevents trigger on fast scrollers)

### Audience
- Blog readers who haven't already:
  - Downloaded this specific lead magnet
  - Subscribed to the email list
  - Dismissed a popup in the last 14 days

### Frequency
- Once per session
- 14-day cooldown after dismissal
- Suppress permanently after email captured

### Copy

**Template (adapts based on blog post topic):**

```
┌────────────────────────────────────────────┐
│                                        [X] │
│                                            │
│   📋 Free: 50 Tasks You Should             │
│   Be Automating Right Now                  │
│                                            │
│   A checklist of the 50 most common        │
│   tasks Australian SMBs automate —         │
│   sorted by ROI and difficulty.            │
│                                            │
│   Email: ___________________________       │
│                                            │
│   [Send Me the Checklist]                  │
│                                            │
│   🔒 No spam. Unsubscribe anytime.         │
│                                            │
└────────────────────────────────────────────┘
```

**Contextual variants by blog topic:**

| Blog Topic | Lead Magnet Offered |
|-----------|-------------------|
| General automation | "50 Tasks to Automate" checklist |
| Trades-specific | "Trades Automation Starter Pack" |
| Accounting-specific | "Accountant's Automation Starter Pack" |
| Tools/how-to | "Tool Comparison Cheat Sheet" |
| Efficiency/ops | "Automation Readiness Scorecard" |

### Design Notes
- **Format:** Slide-in from bottom-right corner (desktop), bottom sheet (mobile)
- **Size:** 380px wide (desktop), full-width (mobile)
- **Doesn't block content** — positioned in corner, not centre
- **Single field:** Email only (see forms.md for rationale)
- **Post-submit:** Replace popup content with "Check your inbox" confirmation + download link
- **Animation:** Slide up from below viewport (300ms, ease-out)

---

## POPUP 3: Timed — ROI Hook (Service/Industry Pages)

### Trigger
- **Time:** 45 seconds on page
- **Pages:** Service pages (`/services/*`) and industry pages (`/industries/*`)
- **Logic:** Only if visitor hasn't scrolled past 75% (they're engaged but haven't reached the bottom CTA yet)

### Audience
- Service/industry page visitors who haven't:
  - Booked an audit
  - Used the ROI calculator
  - Dismissed a popup in the last 14 days

### Frequency
- Once per session
- 14-day cooldown
- Suppress after ROI calculator used or audit booked

### Copy

```
┌────────────────────────────────────────────┐
│                                        [X] │
│                                            │
│   How much is manual admin actually        │
│   costing your business?                   │
│                                            │
│   Use the free ROI calculator to find      │
│   out — takes 30 seconds.                  │
│                                            │
│   [Calculate My Savings]                   │
│                                            │
│   Maybe later                              │
│                                            │
└────────────────────────────────────────────┘
```

### Design Notes
- **Format:** Small slide-in from bottom-right (desktop), bottom bar (mobile)
- **Size:** 360px wide (desktop), full-width 80px height bar (mobile)
- **CTA links to:** `/resources/automation-roi-calculator`
- **Minimal and non-intrusive** — this is a soft nudge, not a hard sell
- **Animation:** Slide in from right edge (250ms)

---

## Mobile-Specific Behaviour

### What Changes on Mobile
- No exit-intent detection (not possible). Use scroll-up-after-engagement as proxy.
- All popups appear as bottom sheets, not centre modals (Google penalises intrusive mobile interstitials).
- Bottom sheets are dismissible by swipe-down gesture.
- Popup height never exceeds 50% of viewport (Google compliance).
- Touch targets minimum 48px.

### Google Interstitial Guidelines Compliance
- Popups never cover content before the user has engaged (minimum 15s delay).
- Blog lead magnet popup is a slide-in, not a full-screen overlay.
- All popups are easily dismissible with visible close buttons.
- No popup blocks the primary content on first visit before engagement.

---

## Technical Implementation

### Recommended Tool
**ConvertKit** (now Kit) or **OptinMonster** for popup management. Both offer:
- Exit intent detection
- Scroll triggers
- Frequency capping with cookies
- A/B testing built-in
- Email integration
- GDPR compliance features

### Cookie/Storage Strategy

| Key | Value | Duration |
|-----|-------|----------|
| `popup_dismissed` | timestamp | 14 days |
| `audit_booked` | true | Permanent |
| `lead_magnet_downloaded` | asset_name | Permanent |
| `email_captured` | true | Permanent |

### Accessibility Requirements
- **Focus trap:** When popup is open, Tab cycles within the popup only
- **Esc key:** Closes the popup
- **Screen reader:** `role="dialog"` + `aria-labelledby` pointing to headline
- **Focus management:** Focus moves to popup on open, returns to trigger element on close
- **Colour contrast:** All text meets WCAG 2.1 AA (4.5:1 ratio minimum)

---

## A/B Test Plan

### Test 1: Exit Intent Copy (Variants A vs B vs C)
- **Metric:** CTA click rate, audit booking rate
- **Duration:** Until 200+ impressions per variant
- **Expected winner:** Variant C (curiosity) or A (loss aversion)

### Test 2: Blog Lead Magnet Format
- **Control:** Slide-in corner popup
- **Variant:** Inline content block (not a popup at all)
- **Metric:** Email capture rate, bounce rate impact
- **Hypothesis:** Inline blocks may convert lower but maintain better UX metrics

### Test 3: ROI Hook Timing
- **Control:** 45-second delay
- **Variant A:** 30-second delay
- **Variant B:** 60-second delay
- **Metric:** Click-through to calculator, overall page engagement

---

## Measurement

### Events to Track Per Popup

| Event | Description |
|-------|-------------|
| `popup_impression` | Popup displayed to visitor |
| `popup_cta_click` | CTA button clicked |
| `popup_dismiss_x` | Closed via X button |
| `popup_dismiss_outside` | Closed via outside click |
| `popup_dismiss_esc` | Closed via Esc key |
| `popup_form_submit` | Email form submitted (lead magnet popup) |
| `popup_decline_click` | "No thanks" text clicked |

### Target Benchmarks

| Popup | Impression → CTA Click | CTA Click → Conversion |
|-------|:---:|:---:|
| Exit intent (audit) | 5–10% | 20–30% of clicks book |
| Scroll (lead magnet) | 3–6% | 40–60% of clicks submit email |
| Timed (ROI hook) | 4–8% | 30–50% of clicks complete calculator |
