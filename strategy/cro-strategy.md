# CRO Strategy — kurtisdunn.com.au

## Primary Conversion Goal

**Book a Free 15-Minute Automation Audit** — every page on the site exists to drive this action or nurture towards it.

### Secondary Conversion Goals
1. Email capture (lead magnet download or newsletter signup)
2. ROI Calculator completion (micro-conversion, triggers audit CTA)
3. Contact form submission (general enquiries)

---

## Site-Wide CRO Principles

### 1. Single Primary CTA Everywhere
Every page has one primary CTA: **Book Your Free Automation Audit**. It appears in the header (sticky), within the page content, and as the final section. No competing CTAs at the same hierarchy level.

### 2. Mobile-First CRO
60%+ of Australian SMB traffic is mobile. Every conversion element must be designed mobile-first:
- Sticky bottom CTA bar on mobile (always visible)
- Tap-friendly buttons (minimum 48px height)
- Forms that work with thumb-only input
- No horizontal scrolling, no tiny text

### 3. Page Speed = Conversion
Every 1-second delay in load time reduces conversions by ~7%. Targets:
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Total page weight < 1MB

### 4. Trust Before Ask
No CTA should appear without a trust signal within visual range. Place testimonials, metrics, or credibility signals adjacent to every CTA.

---

## Page-by-Page CRO Specifications

### HOMEPAGE

**Above the fold (first viewport):**

```
┌─────────────────────────────────────────┐
│ [Logo]  Services  Industries  Blog  About  │ [Book Free Audit] (button)│
├─────────────────────────────────────────┤
│                                         │
│  Stop Losing 10+ Hours a Week           │
│  to Work a Computer Should Be Doing     │
│                                         │
│  I help Australian small businesses     │
│  automate the admin that's eating       │
│  your week.                             │
│                                         │
│  [Book Your Free Automation Audit]      │
│  15 minutes · Zero cost · No obligation │
│                                         │
│  ─── Trusted by 50+ Australian SMBs ── │
│  [metric] [metric] [metric] [metric]    │
│                                         │
└─────────────────────────────────────────┘
```

**Critical elements:**
- Headline must pass the 5-second test: visitor knows what this is, who it's for, and what to do
- CTA button: high-contrast colour (russian-green on white, or white on russian-green)
- Social proof bar immediately below CTA — validates the claim before scrolling
- No hero image competing with the headline. Background can be subtle, but text is primary

**Scroll depth optimisation:**

| Section | Scroll Position | Purpose | CTA Present? |
|---------|:-:|---------|:---:|
| Hero + social proof | 0–15% | Capture attention, establish value, first CTA | Yes (primary) |
| Problem ("Sound Familiar?") | 15–30% | Build empathy, agitate the pain | No (builds tension) |
| Solution ("What If...") | 30–50% | Present the answer, 3 key benefits | Yes (inline) |
| How It Works (3 steps) | 50–60% | Reduce complexity, show the path | Yes (after step 3) |
| Industries | 60–70% | Self-identification — "this is for me" | Links to verticals |
| Trust section | 70–80% | Overcome objections, build confidence | No (builds trust) |
| Testimonials | 80–85% | Social proof — real voices | No |
| FAQ | 85–95% | Handle remaining objections | No (addresses hesitation) |
| Final CTA | 95–100% | Convert convinced visitors | Yes (primary) |

**CTA hierarchy:**
1. **Primary** (hero): Book Your Free Automation Audit → `/book-audit`
2. **Primary repeat** (after How It Works): Start With a Free Audit → `/book-audit`
3. **Secondary** (industries section): "See how it works for [industry]" → industry pages
4. **Primary repeat** (final section): Book Your Free Automation Audit → `/book-audit`

**Trust signal placement:**
- Social proof metrics bar: directly below hero CTA
- Client logos or industry icons: between problem and solution sections
- Testimonials: dedicated section with named attribution
- "Australian-owned", ABN, "No lock-in": trust section + footer

---

### BOOK AUDIT PAGE (/book-audit)

This is the highest-conversion-priority page on the site.

**Above the fold:**

```
┌─────────────────────────────────────────┐
│                                         │
│  Your Free 15-Minute Automation Audit   │
│                                         │
│  In one short call, I'll identify       │
│  exactly where your business is         │
│  losing time — and what to automate     │
│  first.                                 │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  [Embedded booking widget]        │  │
│  │   Name: ___________               │  │
│  │   Email: __________               │  │
│  │   Business: ________              │  │
│  │   [Book Your Audit]               │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ★★★★★ "Best 15 minutes I've spent     │
│  on the business this year."            │
│  — [Name], [Company]                    │
│                                         │
└─────────────────────────────────────────┘
```

**Critical decisions:**
- **Booking widget above the fold.** Don't make visitors scroll to find it.
- **Minimal navigation.** Consider removing main nav or reducing to logo + back link only. This is a conversion page, not a browsing page.
- **Testimonial directly under the form.** Social proof at the point of decision.
- **Objection handling below the fold** for visitors who scroll (they need convincing).

**Objection handling order (below fold):**
1. What you'll get (4 deliverables) — answers "Is this worth my time?"
2. Who this is for — answers "Is this for me?"
3. FAQ — answers specific objections (cost, sales pressure, technical level)
4. More testimonials — final reassurance
5. Second CTA with booking widget — catch the now-convinced scroller

---

### SERVICES PAGE

**Conversion strategy:** This page is a routing page. Its job is to help visitors find the right service and either (a) click through to a service detail page or (b) book the audit.

**Above the fold:**
- Clear headline establishing what Kurtis does
- Brief subheadline
- Audit CTA button (for visitors who don't need to read more)
- Service cards visible or partially visible (invite scrolling)

**Each service card includes:**
- Icon or illustration
- Service name
- One-sentence description
- "Learn more →" link
- For Automation Audit card: "Free" badge prominently displayed

**CTA hierarchy:**
1. Audit CTA in hero (for ready visitors)
2. Service card links (for researching visitors)
3. "Not sure where to start?" CTA at bottom → `/book-audit`

---

### INDUSTRY PAGES (Trades, Professional Services, Accounting)

**Conversion strategy:** These pages serve visitors with high commercial intent from organic search. They need to feel "this person understands MY business" within 5 seconds.

**Above the fold:**
- Industry-specific headline (e.g., "Business Automation for Trades & Field Service")
- Industry-specific subheadline mentioning their tools/problems
- Audit CTA
- Industry-relevant image or icon

**Scroll structure:**

| Section | Purpose | Conversion Element |
|---------|---------|-------------------|
| Hero | Immediate relevance | CTA button |
| Problem | "You get me" — empathy | None (builds tension) |
| Solution | Specific automated workflows | Inline CTA: "Want this for your business?" |
| Results | Quantified outcomes | None (builds case) |
| Case study teaser | Proof it works | Link to full case study |
| FAQ | Handle industry objections | None |
| Final CTA | Convert | CTA button + booking widget |

**Industry-specific trust signals:**
- Tool logos (ServiceM8, Tradify, Xero, MYOB, etc.)
- Industry-specific language and terminology
- Industry-matched testimonial
- Specific time/cost savings for that industry

---

### ABOUT PAGE

**Conversion strategy:** Visitors on the About page are evaluating trust. They've seen the offering — now they want to know the person. Conversion happens through confidence-building, not pressure.

**Above the fold:**
- Photo of Kurtis (professional but approachable)
- "G'day — I'm Kurtis" headline
- Brief positioning statement
- NO CTA above the fold on About — let trust build first

**CTA placement:**
- Single CTA at the very bottom, after the full story
- Soft ask: "Want to see if automation fits your business?"
- The About page should make the audit feel like meeting someone you already trust

---

### BLOG POSTS

**Conversion strategy:** Blog traffic is top-of-funnel. Push for email capture first, audit booking second.

**CTA placement within posts:**

| Position | CTA Type | What It Says |
|----------|----------|-------------|
| ~30% scroll | Inline text CTA | "Want help with this? Book a free audit." (subtle, text-only) |
| ~50% scroll | Lead magnet CTA block | "Download the [relevant checklist]" (boxed, coloured background) |
| End of post | Primary CTA block | "Book Your Free Automation Audit" (full-width section) |
| Sticky sidebar (desktop) | Email signup | "Get automation tips weekly" |
| Sticky bottom bar (mobile) | Primary CTA | "Book Free Audit" (persistent) |

**Post-specific CTAs:**
- Tool comparison posts → "Not sure which tool fits? Book an audit"
- How-to posts → "Rather have someone do this for you? Book an audit"
- Industry posts → "See what automation looks like for [industry]" → industry page

---

### CONTACT PAGE

**Conversion strategy:** The contact page should route visitors to the highest-value action (audit booking) while still offering general contact options.

**Hierarchy:**
1. First option (visually prominent): Book an Automation Audit
2. Second option: Contact form
3. Third option: Direct email/phone

---

## Mobile UX Priorities

### Sticky Mobile CTA Bar
A persistent bottom bar on every page (except `/book-audit` where the form is already visible):

```
┌─────────────────────────────────────┐
│  📞  Book Your Free Audit  [Button] │
└─────────────────────────────────────┘
```

- 60px height, fixed to bottom
- High-contrast button colour
- Disappears when the visitor scrolls to a section that already contains a CTA (to avoid overlap)

### Mobile-Specific Optimisations
- Tap targets: minimum 48px × 48px
- Font size: minimum 16px body, 14px captions
- No hover-dependent interactions
- Accordions for FAQ sections (not all-visible)
- Swipeable testimonial carousel
- Click-to-call phone number in header

---

## Trust Signal Strategy

### Placement Rules

| Trust Signal Type | Where to Place | Why |
|------------------|---------------|-----|
| Metric strip (50+ SMBs, 10–20 hrs saved) | Directly below hero CTA on homepage | Validates the bold claim immediately |
| Client logos | Between problem and solution sections | Builds credibility before the pitch |
| Individual testimonials | Adjacent to every CTA | Reduces friction at the decision point |
| "Australian-owned & operated" | Header badge + footer | Key differentiator, always visible |
| ABN + business details | Footer | Legal trust signal |
| "No lock-in" messaging | Near CTAs + trust section | Overcomes commitment fear |
| Tool logos (Zapier, Xero, etc.) | Services page, industry pages | Technical credibility |
| Case study links | Industry pages, services pages | Proof of results |

---

## Objection Handling Map

| Objection | Where to Address | How |
|-----------|-----------------|-----|
| "Is this just a sales pitch?" | Book Audit page, FAQ | "No sales pitch. You'll walk away with a plan either way." |
| "I'm not technical" | Homepage FAQ, industry pages | "Your team keeps using tools they already know" |
| "Automation is for big companies" | Homepage problem section, testimonials | SMB-specific language, small business testimonials |
| "What if it breaks?" | Services page (Ongoing Support) | "Optional ongoing support. I don't disappear after handover." |
| "How much will this cost?" | Homepage FAQ | Transparent range: "$2K–$15K. Fixed quote after audit." |
| "Will I be locked in?" | Trust section, About page | "No lock-in. You own everything. Fully documented." |
| "I don't have time for another meeting" | Book Audit page | "15 minutes. That's it." |
| "I've tried automation before and it failed" | Blog content, case studies | Specific methodology explaining why this approach is different |

---

## Conversion Tracking Points

Every page should track these events (detailed in `analytics-plan.md`):

| Event | Trigger | Priority |
|-------|---------|----------|
| `cta_click_audit` | Any "Book Audit" button click | Critical |
| `form_start` | First form field focused | High |
| `form_submit` | Form successfully submitted | Critical |
| `scroll_depth` | 25%, 50%, 75%, 100% | Medium |
| `testimonial_view` | Testimonial section enters viewport | Low |
| `faq_expand` | FAQ accordion opened | Low |
| `industry_card_click` | Industry card clicked on homepage | Medium |
| `service_card_click` | Service card clicked | Medium |
| `lead_magnet_download` | Lead magnet form submitted | High |
| `roi_calculator_complete` | Calculator results viewed | High |

---

## A/B Test Roadmap

### Test 1 (Week 1–4): Hero Headline
- **Control:** "Stop Losing 10+ Hours a Week to Work a Computer Should Be Doing"
- **Variant A:** "Your Team Is Wasting 10+ Hours a Week on Admin. Let's Fix That."
- **Variant B:** "Save 10+ Hours a Week With Smarter Business Automation"
- **Metric:** CTA click rate

### Test 2 (Week 4–8): CTA Button Copy
- **Control:** "Book Your Free Automation Audit"
- **Variant A:** "Find Out Where You're Losing Time"
- **Variant B:** "Get Your Free Audit"
- **Metric:** Booking completion rate

### Test 3 (Week 8–12): Social Proof Placement
- **Control:** Social proof bar below hero
- **Variant:** Social proof bar above the headline
- **Metric:** Scroll depth + CTA click rate

### Test 4 (Month 3+): Book Audit Page Layout
- **Control:** Booking widget above fold, content below
- **Variant:** Two-column layout (content left, booking widget sticky right)
- **Metric:** Audit booking completion rate

---

## Quick Wins (Implement at Launch)

1. **Sticky header CTA** — "Book Free Audit" button visible on every page, every scroll position
2. **Social proof bar** — specific numbers directly under hero CTA
3. **Mobile sticky bottom bar** — persistent CTA on mobile
4. **Testimonial near every CTA** — reduce friction at decision points
5. **FAQ sections on all key pages** — handle objections before they stall the visitor
6. **"Australian-owned" badge** in header — instant trust signal
7. **Phone number visible** on mobile — click-to-call for high-intent visitors
