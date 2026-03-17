# Page Wireframes — kurtisdunn.com.au

All wireframes are mobile-first. Desktop layouts are described as responsive expansions.

---

## HOMEPAGE WIREFRAME

### Mobile (375px)

```
┌─────────────────────────┐
│ [Logo]        [≡] [CTA] │ ← Fixed header, 56px
├─────────────────────────┤
│                         │
│  🇦🇺 Australian-owned    │ ← Trust badge, small
│                         │
│  Stop Losing 10+        │ ← H1, Lexend 700, 36px
│  Hours a Week to        │
│  Work a Computer        │
│  Should Be Doing        │
│                         │
│  I help Australian      │ ← Body, 18px
│  small businesses       │
│  automate the admin     │
│  that's eating your     │
│  week.                  │
│                         │
│ [Book Your Free Audit]  │ ← CTA Green, full-width
│  15 min · Zero cost     │ ← Caption below
│                         │
├─────────────────────────┤
│  50+  │  10-20  │ 150+ │ ← Metric strip, 3 col
│  SMBs │  hrs    │ flows│
├─────────────────────────┤
│                         │
│  Sound Familiar?        │ ← H2
│                         │
│  • Monday: manually...  │ ← Pain list
│  • Tuesday: chasing...  │
│  • Wednesday: same...   │
│  • Thursday: onboard... │
│  • Friday: wondering... │
│                         │
├─────────────────────────┤
│                         │
│  What If the Boring     │ ← H2
│  Stuff Just...Happened? │
│                         │
│ ┌─────────────────────┐ │
│ │ Get Your Week Back  │ │ ← Benefit card 1
│ │ 10-20 hours saved   │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Stop the Errors     │ │ ← Benefit card 2
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Scale Without Hiring│ │ ← Benefit card 3
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│                         │
│  Three Steps.           │ ← H2
│  No Complexity.         │
│                         │
│  ① Audit               │ ← Step cards, numbered
│  Book a free 15-min...  │
│                         │
│  ② Build               │
│  I design and build...  │
│                         │
│  ③ Run                 │
│  Your automations go... │
│                         │
│ [Start With Free Audit] │ ← CTA repeat
│                         │
├─────────────────────────┤
│                         │
│  Built for Businesses   │ ← H2
│  Like Yours             │
│                         │
│ ┌─────────────────────┐ │
│ │ 🔧 Trades           │ │ ← Industry cards
│ │ Quoting, job mgmt...│ │    stacked on mobile
│ │ See how it works →  │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 💼 Professional Svcs│ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 📊 Accounting       │ │
│ └─────────────────────┘ │
│  ... (3 more cards)     │
│                         │
├─────────────────────────┤
│                         │
│  Why Businesses Choose  │ ← H2 (Trust section)
│  to Work With Me        │
│                         │
│  ✓ Founder-led          │ ← Trust points
│  ✓ Australian-based     │    with descriptions
│  ✓ No lock-in           │
│  ✓ You own everything   │
│                         │
├─────────────────────────┤
│                         │
│  What Clients Say       │ ← H2
│                         │
│ ┌─────────────────────┐ │
│ │ "Quote text..."     │ │ ← Testimonial card
│ │ ★★★★★               │ │    swipeable carousel
│ │ Name, Title, City   │ │
│ └─────────────────────┘ │
│  ● ○ ○                 │ ← Carousel dots
│                         │
├─────────────────────────┤
│                         │
│  Questions You          │ ← H2
│  Probably Have          │
│                         │
│  ▶ What is an audit?   │ ← Accordion FAQ
│  ▶ How much does...    │
│  ▶ Will it replace...  │
│  ▶ What tools...       │
│  ▶ What if not tech... │
│  ▶ How long does...    │
│                         │
├─────────────────────────┤
│                         │
│  Ready to Get Your      │ ← Final CTA section
│  Week Back?             │    Green background
│                         │
│  Book a free 15-minute  │
│  audit...               │
│                         │
│ [Book Your Free Audit]  │ ← White button on green
│  Available this week    │
│                         │
├─────────────────────────┤
│                         │
│  FOOTER                 │
│  Logo + tagline         │
│  Services | Industries  │
│  Resources | Company    │
│  Contact details        │
│  ABN | © 2026           │
│  Australian-owned       │
│                         │
└─────────────────────────┘

┌─────────────────────────┐
│ 📞 Book Free Audit [→] │ ← Sticky bottom bar
└─────────────────────────┘   60px, always visible
```

### Desktop Expansion (1280px)

| Section | Mobile → Desktop Change |
|---------|------------------------|
| Header | Hamburger → full horizontal nav + CTA button |
| Hero | Stacked → 60/40 split (text left, abstract graphic/animation right) |
| Metric strip | 3 col → 4 col with larger numbers |
| Problem | Full width → max-w-3xl centred |
| Benefits | Stacked cards → 3-column grid |
| Steps | Stacked → horizontal 3-column with connecting line |
| Industries | Stacked → 3×2 grid |
| Trust points | Stacked → 2×2 grid with icons |
| Testimonials | Carousel → 3 visible cards |
| FAQ | Accordion remains, max-w-3xl centred |
| Final CTA | Full-width green band |
| Footer | Stacked → 4-column grid |
| Sticky bar | Bottom bar → header CTA is sufficient |

---

## BOOK AUDIT PAGE WIREFRAME (/book-audit)

### Mobile (375px)

```
┌─────────────────────────┐
│ [Logo]           [Back] │ ← Minimal header
├─────────────────────────┤
│                         │
│  Your Free 15-Minute    │ ← H1
│  Automation Audit       │
│                         │
│  In one short call,     │ ← Subheadline
│  I'll identify exactly  │
│  where your business    │
│  is losing time.        │
│                         │
│ ┌─────────────────────┐ │
│ │ Your name:          │ │ ← Form
│ │ [_______________]   │ │
│ │                     │ │
│ │ Email:              │ │
│ │ [_______________]   │ │
│ │                     │ │
│ │ Business (optional):│ │
│ │ [_______________]   │ │
│ │                     │ │
│ │ Biggest time drain: │ │
│ │ [Select one...   ▼] │ │
│ │                     │ │
│ │ [Book My Free Audit]│ │
│ │                     │ │
│ │ 🔒 No spam. No     │ │
│ │ obligation.         │ │
│ └─────────────────────┘ │
│                         │
│  ★★★★★ "Best 15 mins   │ ← Testimonial
│  I've spent on the      │
│  business this year."   │
│  — Name, Company        │
│                         │
├─────────────────────────┤
│                         │
│  What Happens in the    │ ← H2
│  Audit                  │
│                         │
│  1. Map where you're    │ ← 4 deliverables
│     losing time         │
│  2. Priority list       │
│  3. Rough cost/timeline │
│  4. Honest opinion      │
│                         │
├─────────────────────────┤
│  ... (Who it's for)     │
│  ... (Objection FAQ)    │
│  ... (More testimonials)│
│  ... (Second form/CTA)  │
└─────────────────────────┘
```

### Desktop Expansion

- **Two-column layout:** Content left (60%), form sticky-right (40%)
- Form stays visible as visitor scrolls through content
- Minimal navigation (logo + back link only)

---

## SERVICES PAGE WIREFRAME

### Desktop (1280px)

```
┌──────────────────────────────────────────────────┐
│ [Header with nav]                        [CTA]   │
├──────────────────────────────────────────────────┤
│                                                  │
│  Business Automation Services                    │ ← H1
│  That Actually Get Used                          │
│                                                  │
│  [Book Your Free Audit]                          │ ← For ready visitors
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Audit    │ │ Workflow │ │ AI &     │        │ ← Service cards
│  │ [FREE]   │ │ Design   │ │ Chatbot  │        │    3-col grid
│  │          │ │          │ │          │        │
│  │ Learn →  │ │ Learn →  │ │ Learn →  │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                  │
│  ┌──────────┐ ┌──────────┐                      │
│  │ Reporting│ │ Ongoing  │                      │
│  │          │ │ Support  │                      │
│  │ Learn →  │ │ Learn →  │                      │
│  └──────────┘ └──────────┘                      │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  How Every Project Works                         │ ← 6-step process
│  ① → ② → ③ → ④ → ⑤ → ⑥                       │    horizontal timeline
│                                                  │
├──────────────────────────────────────────────────┤
│  Not Sure Where to Start?                        │ ← CTA section
│  [Book Your Free Audit]                          │
└──────────────────────────────────────────────────┘
```

---

## INDUSTRY PAGE WIREFRAME (Generic Template)

### Desktop (1280px)

```
┌──────────────────────────────────────────────────┐
│ [Header]                                 [CTA]   │
├──────────────────────────────────────────────────┤
│                                                  │
│  Business Automation for                         │ ← H1
│  {Industry Name}                                 │
│                                                  │
│  {Industry-specific subheadline}                 │
│                                                  │
│  [Book Your Free Audit]                          │
│                                                  │
│  [Tool logos: ServiceM8, Xero, etc.]             │ ← Tool credibility
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  {Problem section - industry-specific}           │
│  ┌─────────────────────────────────────────────┐ │
│  │ Pain point 1 → Pain point 2 → Pain point 3 │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  What Automation Looks Like for {Industry}       │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Workflow │ │ Workflow │ │ Workflow │        │ ← Automated
│  │    1     │ │    2     │ │    3     │        │    workflows
│  │ Lead →   │ │ Job →    │ │ Report → │        │    as flow
│  │ Quote →  │ │ Invoice  │ │ Dashboard│        │    diagrams
│  │ Job      │ │          │ │          │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                  │
│  [Want this? Book your audit →]                  │ ← Inline CTA
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  Results strip                                   │
│  [10-15hrs] [Same-day invoices] [Zero errors]   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  "{Testimonial}" — Name, Company                 │ ← Case study teaser
│  → Read the full case study                      │
│                                                  │
├──────────────────────────────────────────────────┤
│  FAQ (industry-specific, accordion)              │
├──────────────────────────────────────────────────┤
│  Final CTA section (green band)                  │
│  [Book Your Free Automation Audit]               │
└──────────────────────────────────────────────────┘
```

---

## ABOUT PAGE WIREFRAME

### Desktop (1280px)

```
┌──────────────────────────────────────────────────┐
│ [Header]                                         │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────────────┐  G'day — I'm Kurtis       │ ← Photo left
│  │                  │                            │    Text right
│  │  [Kurtis photo]  │  I'm a business automation│    (60/40 split)
│  │                  │  consultant based in       │
│  │  Professional    │  Australia...              │
│  │  but approachable│                            │
│  │                  │                            │
│  └──────────────────┘                            │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  Why I Do This                                   │ ← Story section
│  (full-width text, max-w-3xl centred)            │    No image needed
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│  What You Can Expect                             │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │ ← 3-col grid
│  │ I work   │ │ I don't  │ │ I keep   │        │
│  │ alone,   │ │ lock you │ │ it       │        │
│  │ on       │ │ in       │ │ simple   │        │
│  │ purpose  │ │          │ │          │        │
│  └──────────┘ └──────────┘ └──────────┘        │
│                                                  │
├──────────────────────────────────────────────────┤
│  CTA section (soft — no pressure)                │
│  [Book Your Free Automation Audit]               │
└──────────────────────────────────────────────────┘
```

---

## BLOG POST WIREFRAME

### Desktop (1280px)

```
┌──────────────────────────────────────────────────┐
│ [Header]                                         │
├──────────────────────────────────────────────────┤
│  Home > Blog > {Post Title}                      │ ← Breadcrumb
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌────────────────────────────┐ ┌──────────────┐│
│  │                            │ │ SIDEBAR      ││
│  │  {Post Title} (H1)        │ │              ││
│  │                            │ │ [Email       ││
│  │  By Kurtis Dunn            │ │  signup]     ││
│  │  Published: {date}         │ │              ││
│  │  Updated: {date}           │ │ Get weekly   ││
│  │                            │ │ automation   ││
│  │  {Post content...}         │ │ tips         ││
│  │                            │ │              ││
│  │  --- 30% CTA ---          │ │ [email___]   ││
│  │  "Want help with this?     │ │ [Subscribe]  ││
│  │   Book a free audit."      │ │              ││
│  │                            │ │──────────────││
│  │  {More content...}         │ │              ││
│  │                            │ │ Related:     ││
│  │  --- 50% Lead Magnet ---  │ │ • Post 1     ││
│  │  ┌──────────────────────┐ │ │ • Post 2     ││
│  │  │ Download: 50 Tasks   │ │ │ • Post 3     ││
│  │  │ [email__] [Get it]   │ │ │              ││
│  │  └──────────────────────┘ │ │              ││
│  │                            │ │              ││
│  │  {More content...}         │ │              ││
│  │                            │ │              ││
│  └────────────────────────────┘ └──────────────┘│
│                                                  │
├──────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────┐│
│  │ Book Your Free Automation Audit              ││ ← Full-width CTA
│  │ [Book Audit]                                 ││
│  └──────────────────────────────────────────────┘│
├──────────────────────────────────────────────────┤
│  Related Posts                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ Post 1   │ │ Post 2   │ │ Post 3   │        │
│  └──────────┘ └──────────┘ └──────────┘        │
└──────────────────────────────────────────────────┘
```

**Mobile:** Sidebar moves below post content. Sticky bottom bar for CTA.

---

## CONTACT PAGE WIREFRAME

### Desktop (1280px)

```
┌──────────────────────────────────────────────────┐
│ [Header]                                         │
├──────────────────────────────────────────────────┤
│                                                  │
│  Get in Touch                                    │ ← H1
│                                                  │
│  ┌──────────────────────┐ ┌────────────────────┐│
│  │                      │ │                    ││
│  │  Book an Audit (Free)│ │  Send a Message    ││ ← Two-column
│  │                      │ │                    ││
│  │  The fastest way to  │ │  Name: [_______]   ││
│  │  get started.        │ │  Email: [______]   ││
│  │                      │ │  Topic: [Select ▼] ││
│  │  [Book Your Audit]   │ │  Message: [____]   ││
│  │                      │ │  [Send Message]    ││
│  │  ─────────────────   │ │                    ││
│  │                      │ │                    ││
│  │  Or call/email:      │ │                    ││
│  │  📞 [phone]          │ │                    ││
│  │  ✉ [email]           │ │                    ││
│  │                      │ │                    ││
│  │  Mon–Fri, 9am–5pm    │ │                    ││
│  │  AEST                │ │                    ││
│  │                      │ │                    ││
│  └──────────────────────┘ └────────────────────┘│
│                                                  │
└──────────────────────────────────────────────────┘
```
