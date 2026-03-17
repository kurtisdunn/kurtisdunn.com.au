# Analytics & Conversion Tracking Plan — kurtisdunn.com.au

## Tools Stack

| Tool | Purpose | Cost |
|------|---------|------|
| **GA4** | Web analytics, traffic, behaviour, conversions | Free |
| **Google Tag Manager** | Tag management, event firing | Free |
| **Google Search Console** | Organic search performance, indexation | Free |
| **Microsoft Clarity** | Session recordings, heatmaps, scroll maps | Free |
| **Cal.com / Calendly** | Audit booking tracking (webhook on confirmation) | Free/Low |
| **CRM** (HubSpot Free or Notion) | Lead tracking, pipeline | Free |

---

## GA4 Property Configuration

### Data Stream
- Web stream: `https://kurtisdunn.com.au`
- Enhanced measurement: ON (page views, scrolls, outbound clicks, site search, file downloads)

### Custom Dimensions

| Dimension | Scope | Parameter | Purpose |
|-----------|-------|-----------|---------|
| `industry` | Event | `industry` | Which industry the visitor self-identified with |
| `page_type` | Event | `page_type` | homepage, service, industry, blog, book-audit, pseo |
| `form_name` | Event | `form_name` | Which form was submitted |
| `cta_location` | Event | `cta_location` | Where on the page the CTA was clicked |
| `lead_source` | User | `lead_source` | How this lead first arrived |

### Conversions (Key Events)

| Conversion | Event Name | Counting | Value |
|------------|-----------|----------|-------|
| Audit booked | `audit_booked` | Once per user | $500 (estimated avg. lead value) |
| Lead magnet downloaded | `lead_magnet_download` | Once per user | $50 |
| Contact form submitted | `contact_form_submit` | Once per user | $100 |
| ROI calculator completed | `roi_calculator_complete` | Once per user | $75 |

---

## Event Tracking Plan

### Navigation & Engagement Events

| Event Name | Trigger | Properties | Priority |
|------------|---------|------------|:--------:|
| `page_view` | Page load (automatic) | page_title, page_location, page_type | Auto |
| `scroll` | 90% scroll depth (automatic) | percent_scrolled | Auto |
| `scroll_depth` | 25%, 50%, 75%, 100% markers | depth_percentage, page_type | Medium |
| `outbound_click` | External link click (automatic) | link_url, link_domain | Auto |
| `cta_click` | Any CTA button clicked | cta_text, cta_location, page_type | High |
| `nav_click` | Header/footer nav item clicked | nav_item, nav_location | Low |
| `industry_card_click` | Industry card on homepage | industry_name | Medium |
| `service_card_click` | Service card clicked | service_name | Medium |
| `faq_expand` | FAQ accordion opened | question_text, page_type | Low |
| `testimonial_view` | Testimonial section enters viewport | page_type | Low |

### Form Events

| Event Name | Trigger | Properties | Priority |
|------------|---------|------------|:--------:|
| `form_view` | Form enters viewport | form_name, page_type | Medium |
| `form_start` | First field focused | form_name, page_type | High |
| `form_field_complete` | Field blurred with value | form_name, field_name | Medium |
| `form_field_error` | Validation error shown | form_name, field_name, error_type | Medium |
| `form_submit_attempt` | Submit button clicked | form_name, page_type | High |
| `form_submit_success` | Server confirms submission | form_name, page_type | Critical |
| `form_abandon` | Page unload with partial form | form_name, last_field_completed | High |

### Conversion Events

| Event Name | Trigger | Properties | Priority |
|------------|---------|------------|:--------:|
| `audit_booked` | Booking confirmed (Calendly/Cal.com webhook or thank-you page) | source_page, industry_selected, challenge_selected | Critical |
| `lead_magnet_download` | Lead magnet email form submitted | asset_name, page_type | High |
| `contact_form_submit` | Contact form submitted | topic_selected | High |
| `roi_calculator_complete` | Calculator results displayed | industry, team_size, estimated_savings | High |
| `roi_calculator_email` | User opts to email results | — | Medium |
| `assessment_complete` | Quick assessment form finished | industry, team_size, biggest_pain | High |

### Popup Events

| Event Name | Trigger | Properties | Priority |
|------------|---------|------------|:--------:|
| `popup_impression` | Popup displayed | popup_type, popup_variant, page_type | Medium |
| `popup_cta_click` | Popup CTA clicked | popup_type, popup_variant | High |
| `popup_dismiss` | Popup closed (any method) | popup_type, dismiss_method | Medium |
| `popup_form_submit` | Popup email form submitted | popup_type, popup_variant | High |

---

## GTM Container Structure

### Tags

| Tag Name | Type | Fires On |
|----------|------|----------|
| GA4 - Config | GA4 Configuration | All Pages |
| GA4 - CTA Click | GA4 Event | CTA Click Trigger |
| GA4 - Form Start | GA4 Event | Form Focus Trigger |
| GA4 - Form Submit | GA4 Event | Form Submit Trigger |
| GA4 - Audit Booked | GA4 Event | Thank You Page / Webhook |
| GA4 - Popup Impression | GA4 Event | Popup Display Trigger |
| GA4 - Scroll Depth | GA4 Event | Scroll Depth Trigger |
| MS Clarity | Custom HTML | All Pages |

### Triggers

| Trigger Name | Type | Condition |
|-------------|------|-----------|
| CTA Click | Click - All Elements | CSS class contains `cta-button` |
| Form Focus | Custom Event | dataLayer event = `form_start` |
| Form Submit Success | Custom Event | dataLayer event = `form_submit_success` |
| Popup Display | Custom Event | dataLayer event = `popup_impression` |
| Scroll 25/50/75/100 | Scroll Depth | Vertical, percentages |
| Thank You Page | Page View | Page path = `/book-audit/confirmed` |

### Data Layer Implementation

```javascript
// CTA click (fire from onClick handler)
dataLayer.push({
  event: 'cta_click',
  cta_text: 'Book Your Free Automation Audit',
  cta_location: 'hero',
  page_type: 'homepage'
});

// Form start (fire on first field focus)
dataLayer.push({
  event: 'form_start',
  form_name: 'audit_booking',
  page_type: 'book-audit'
});

// Form submit success
dataLayer.push({
  event: 'form_submit_success',
  form_name: 'audit_booking',
  page_type: 'book-audit'
});

// Audit booked (fire on confirmation)
dataLayer.push({
  event: 'audit_booked',
  source_page: '/book-audit',
  industry_selected: 'trades',
  challenge_selected: 'quoting'
});

// Popup impression
dataLayer.push({
  event: 'popup_impression',
  popup_type: 'exit_intent',
  popup_variant: 'loss_aversion',
  page_type: 'homepage'
});
```

---

## UTM Convention

### Format
`utm_source=<source>&utm_medium=<medium>&utm_campaign=<campaign>&utm_content=<content>`

### Standard Values

| Source | Medium | When to Use |
|--------|--------|-------------|
| `google` | `organic` | Automatic (GA4 default) |
| `google` | `cpc` | Google Ads (if used later) |
| `linkedin` | `social` | LinkedIn organic posts |
| `linkedin` | `paid_social` | LinkedIn ads (if used later) |
| `newsletter` | `email` | Monthly email newsletter |
| `nurture` | `email` | Automated email sequences |
| `direct` | `referral` | Partner/directory links |
| `reddit` | `social` | Reddit posts/comments |

### Campaign Naming Convention
`{year}_{month}_{descriptor}`

Examples:
- `2026_03_launch` — site launch campaign
- `2026_04_trades_blog` — trades-focused blog push
- `2026_q2_newsletter` — Q2 newsletter series

### Content Tags for CTA Differentiation
Use `utm_content` to distinguish CTAs on the same page:
- `hero_cta` — above-fold primary CTA
- `mid_page_cta` — inline CTA within content
- `footer_cta` — bottom-of-page CTA
- `popup_exit` — exit intent popup
- `popup_scroll` — scroll-triggered popup
- `email_sig` — email signature link

---

## Funnel Tracking

### Primary Funnel: Visitor → Audit Booking

| Stage | Event | Expected Drop-off |
|-------|-------|:---:|
| 1. Site visit | `page_view` | — |
| 2. Engagement | `scroll_depth` (50%+) | 60–70% |
| 3. CTA click | `cta_click` (audit) | 85–90% |
| 4. Booking page view | `page_view` (/book-audit) | 20–30% |
| 5. Form start | `form_start` | 30–40% |
| 6. Form submit | `form_submit_success` | 15–25% |
| 7. Audit booked | `audit_booked` | 5–10% |

### Secondary Funnel: Blog → Email → Audit

| Stage | Event |
|-------|-------|
| 1. Blog post read | `page_view` (blog) + `scroll_depth` (75%+) |
| 2. Lead magnet download | `lead_magnet_download` |
| 3. Email nurture | Track in CRM (email opens, clicks) |
| 4. Audit booking | `audit_booked` (with `lead_source=email`) |

---

## Heatmap & Session Recording (Microsoft Clarity)

### Priority Pages for Heatmaps

| Page | What to Watch For |
|------|------------------|
| Homepage | Scroll depth drop-off points, CTA visibility, which sections get attention |
| `/book-audit` | Form interaction, scroll past booking widget, objection-reading patterns |
| Industry pages | Which sections get read, where visitors click, form engagement |
| Blog posts | Content engagement depth, CTA visibility, sidebar interaction |

### Session Recording Filters

Set up these saved filters in Clarity:

| Filter | Purpose |
|--------|---------|
| Visited `/book-audit` but no conversion | Identify booking friction |
| Rage clicks | Find broken or confusing UI elements |
| Dead clicks | Find elements that look clickable but aren't |
| Mobile visitors, homepage | Check mobile CTA visibility and form UX |
| Exit from `/book-audit` | Understand why visitors leave without booking |

### Review Cadence
- **Weekly:** Check top rage clicks and dead clicks
- **Fortnightly:** Review 10 session recordings of `/book-audit` visitors who didn't convert
- **Monthly:** Full heatmap review of all priority pages

---

## Reporting Dashboard

### Weekly Metrics (GA4 Explore Report)

| Metric | Source | Target (Month 3) |
|--------|--------|-------------------|
| Total sessions | GA4 | 500–1,000/week |
| Organic sessions | GA4 | 100–300/week |
| Audit booking page views | GA4 | 30–60/week |
| Audit bookings | GA4 + CRM | 2–5/week |
| Form start → submit rate | GA4 | 40–60% |
| Lead magnet downloads | GA4 | 5–15/week |
| Blog engagement (75%+ scroll) | GA4 | 30–50% of blog readers |

### Monthly Metrics

| Metric | Source |
|--------|--------|
| Organic keyword rankings (top 20) | GSC |
| Pages indexed | GSC |
| Backlinks gained | GSC / Ahrefs |
| Email list size | CRM / email tool |
| Audit → proposal conversion rate | CRM |
| Proposal → client conversion rate | CRM |
| Revenue from organic leads | CRM |

---

## Privacy & Compliance

### Australian Privacy Act
- No GDPR requirement for Australian-only business, but best practice to respect user preferences
- Implement a simple cookie consent banner (GA4 consent mode)
- Don't collect PII in GA4 event properties (no email addresses, phone numbers, or names)
- Privacy policy must disclose analytics usage

### GA4 Consent Mode

```javascript
// Default: deny analytics until consent given
gtag('consent', 'default', {
  'analytics_storage': 'denied'
});

// On consent:
gtag('consent', 'update', {
  'analytics_storage': 'granted'
});
```

### Microsoft Clarity
- Clarity automatically masks sensitive form fields
- Verify masking is working on booking and contact forms
- No session recordings of payment forms (not applicable here, but good practice)

---

## Implementation Checklist

### Pre-Launch
- [ ] GA4 property created and configured
- [ ] GTM container installed on all pages
- [ ] Enhanced measurement enabled in GA4
- [ ] Custom dimensions created
- [ ] Key events marked as conversions
- [ ] Data layer push events added to codebase
- [ ] UTM convention documented and shared
- [ ] Microsoft Clarity installed
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] Cookie consent banner implemented

### Post-Launch (Week 1)
- [ ] Verify all events firing correctly (GA4 DebugView)
- [ ] Verify conversion tracking (test booking, test form submit)
- [ ] Verify Clarity recording sessions
- [ ] Verify GSC showing impressions
- [ ] Set up GA4 Explore reports for weekly metrics
- [ ] Set up Clarity filters for priority pages

### Ongoing
- [ ] Weekly: Check conversion events, fix any tracking issues
- [ ] Monthly: Review Clarity recordings, update heatmap analysis
- [ ] Quarterly: Audit tracking plan against actual usage, remove unused events
