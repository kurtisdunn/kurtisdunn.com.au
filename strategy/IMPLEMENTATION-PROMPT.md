# Implementation Prompt — Build kurtisdunn.com.au in Next.js

Use this prompt to instruct Claude Code (or any AI coding assistant) to build the site. Copy the sections you need per phase, or use the full prompt for a complete build.

---

## FULL BUILD PROMPT

You are building kurtisdunn.com.au — a business automation consulting website for a solo Australian operator targeting SMBs with 5–50 staff. The primary CTA is booking a free 15-minute Automation Audit.

### Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui (new-york style)
- **Icons:** Lucide React
- **Fonts:** Lexend (headings) + Source Sans 3 (body) via next/font/google
- **Deployment:** AWS S3 + CloudFront (static export via `next export`) OR Vercel
- **Analytics:** GA4 via Google Tag Manager (dataLayer pushes)
- **Forms:** React Hook Form + server actions or API routes
- **Booking:** Cal.com embed (or Calendly)
- **Schema:** JSON-LD via next/head or metadata API

### Strategy Documents (READ THESE FIRST)

Before writing any code, read the following strategy files in the `strategy/` directory. They contain all copy, design specs, SEO requirements, and architectural decisions:

1. **`strategy/site-map.md`** — Complete page hierarchy, URL slugs, navigation spec, internal linking rules
2. **`strategy/seo-strategy.md`** — Title tags, meta descriptions, H1s for EVERY page. Keyword targets. Schema requirements
3. **`strategy/copy-all-pages.md`** — Complete copy for all 8 core pages (homepage, services, about, book-audit, 3 industry pages, contact). Use this copy verbatim
4. **`strategy/cro-strategy.md`** — Above-fold layouts, CTA hierarchy, scroll depth optimisation, trust signal placement per page
5. **`strategy/forms.md`** — All 5 form designs with field specs, validation rules, error messages, post-submit flows
6. **`strategy/popups.md`** — 3 popup variants with copy, trigger rules, frequency caps
7. **`strategy/schema.json`** — All JSON-LD schema markup templates for every page type
8. **`strategy/analytics-plan.md`** — GA4 events, dataLayer push specs, GTM structure
9. **`strategy/ui-ux-complete/01-design-system.md`** — Colour palette, typography scale, spacing, components, shadows, border radius
10. **`strategy/ui-ux-complete/02-page-wireframes.md`** — ASCII wireframes for all pages (mobile + desktop)
11. **`strategy/ui-ux-complete/03-interactions-accessibility.md`** — Animations, transitions, responsive breakpoints, WCAG 2.1 AA requirements, component architecture
12. **`strategy/psychology-layer.md`** — Psychological triggers mapped to specific page locations (reference when placing CTAs, testimonials, trust signals)
13. **`strategy/programmatic-seo-plan.md`** — pSEO template structure for Phase 4 (industry×location + use-case pages)

### Design System (Summary)

```
Colours:
  Primary:      #0D7377 (deep teal)
  Primary Light: #14B8A6
  CTA:          #16A34A (action green)
  CTA Hover:    #15803D
  Background:   #FAFBFC (off-white)
  Surface:      #FFFFFF
  Surface Alt:  #F3F4F6
  Text Primary: #111827
  Text Secondary: #4B5563
  Text Muted:   #6B7280
  Border:       #E5E7EB
  Error:        #EF4444

Typography:
  Headings: Lexend (600, 700)
  Body: Source Sans 3 (400, 500, 600)
  H1: 56px desktop / 36px mobile
  H2: 40px desktop / 28px mobile
  Body: 18px desktop / 16px mobile

Spacing: 4px base unit (Tailwind default scale)
Border Radius: rounded-md (8px) for buttons, rounded-lg (12px) for cards
Max Content Width: 1280px (max-w-7xl)
```

### Project Structure

```
app/
├── layout.tsx              # Root layout (header, footer, fonts, analytics)
├── page.tsx                # Homepage
├── about/page.tsx
├── contact/page.tsx
├── book-audit/
│   ├── page.tsx            # Booking page
│   └── confirmed/page.tsx  # Thank-you page
├── services/
│   ├── page.tsx            # Services hub
│   ├── automation-audit/page.tsx
│   ├── workflow-design/page.tsx
│   ├── ai-chatbot-setup/page.tsx
│   ├── reporting-dashboards/page.tsx
│   └── ongoing-support/page.tsx
├── industries/
│   ├── page.tsx            # Industries hub
│   ├── trades/page.tsx
│   ├── professional-services/page.tsx
│   ├── accounting-finance/page.tsx
│   ├── healthcare/page.tsx
│   ├── property-real-estate/page.tsx
│   └── legal/page.tsx
├── case-studies/
│   ├── page.tsx            # Hub
│   └── [slug]/page.tsx     # Dynamic
├── blog/
│   ├── page.tsx            # Hub
│   ├── [slug]/page.tsx     # Posts
│   └── category/[slug]/page.tsx
├── resources/
│   ├── page.tsx
│   └── automation-roi-calculator/page.tsx
├── automation/             # pSEO pages (Phase 4)
│   └── [slug]/page.tsx     # Dynamic: trades-brisbane, invoice-processing, etc.
├── faq/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── not-found.tsx           # Custom 404
├── sitemap.ts              # Auto-generated sitemap
└── robots.ts               # robots.txt config

components/
├── layout/
│   ├── Header.tsx          # Sticky nav with CTA, mobile hamburger, scroll shadow
│   ├── Footer.tsx          # 4-column grid, ABN, contact info
│   ├── MobileCtaBar.tsx    # Sticky bottom bar (mobile only)
│   └── Breadcrumb.tsx      # Auto from route segments
├── sections/
│   ├── Hero.tsx            # Configurable: headline, subheadline, CTA, optional image
│   ├── MetricStrip.tsx     # Animated count-up numbers
│   ├── ProblemSection.tsx  # Pain points with day-of-week list
│   ├── BenefitCards.tsx    # 3-column grid with icons
│   ├── ProcessSteps.tsx    # 3-6 step horizontal/vertical timeline
│   ├── IndustryCards.tsx   # 6-card grid linking to verticals
│   ├── TrustSection.tsx    # 4 trust points with checkmarks
│   ├── TestimonialCarousel.tsx  # Swipeable on mobile, 3-up on desktop
│   ├── FaqAccordion.tsx    # Accessible accordion with schema
│   └── CtaBand.tsx         # Full-width green CTA section
├── forms/
│   ├── AuditBookingForm.tsx
│   ├── QuickAssessment.tsx # Multi-step micro-commitment form
│   ├── ContactForm.tsx
│   ├── LeadMagnetForm.tsx  # Single email field
│   └── RoiCalculator.tsx   # Interactive calculator with sliders
├── popups/
│   ├── ExitIntentPopup.tsx
│   ├── ScrollLeadMagnet.tsx
│   └── RoiHookSlideIn.tsx
├── ui/                     # shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── select.tsx
│   ├── accordion.tsx
│   └── ...
└── shared/
    ├── JsonLd.tsx          # Schema markup component
    ├── CtaButton.tsx       # Standardised CTA with analytics
    └── SectionHeading.tsx  # Consistent H2 styling

lib/
├── utils.ts               # cn() helper (already exists)
├── analytics.ts            # dataLayer push helpers
├── schema.ts               # JSON-LD generation from templates
└── constants.ts            # Site-wide constants (phone, email, ABN, social URLs)

data/
├── testimonials.ts         # Client testimonials array
├── services.ts             # Service definitions
├── industries.ts           # Industry definitions
├── faq.ts                  # FAQ questions and answers
└── pSEO/                   # Phase 4: structured data for programmatic pages
    ├── industries.json
    ├── locations.json
    ├── use-cases.json
    └── intros/             # Hand-written unique intros per pSEO page
```

### Build Instructions

#### Phase 1 Priority (Build These First)

Build in this order:

1. **Next.js project setup** — `create-next-app` with TypeScript, Tailwind, App Router. Configure fonts, theme colours in Tailwind config, shadcn/ui init.

2. **Root layout** (`app/layout.tsx`) — HTML lang="en-AU", fonts (Lexend + Source Sans 3 via next/font/google), GTM script, global styles, skip-to-content link.

3. **Header component** — Sticky, white bg, scroll shadow effect, logo left, nav items, green CTA button right. Mobile: hamburger + full-screen overlay. See `cro-strategy.md` for nav spec.

4. **Footer component** — 4-column grid per `site-map.md` navigation spec. ABN, contact info, "Australian-owned & operated" badge.

5. **MobileCtaBar** — Sticky 60px bottom bar on mobile: "Book Free Audit" button. Hidden on `/book-audit` page. See `cro-strategy.md`.

6. **Homepage** (`app/page.tsx`) — Build every section from `copy-all-pages.md` Section 1 (Homepage). Follow the wireframe in `02-page-wireframes.md`. Follow CRO spec in `cro-strategy.md`. Apply psychology triggers from `psychology-layer.md`. Add schema from `schema.json` → "homepage".

7. **Book Audit page** (`app/book-audit/page.tsx`) — High-conversion landing page per `copy-all-pages.md` Section 4. Embed Cal.com widget. Minimal nav (logo + back only). Form spec in `forms.md` Form 1. Schema: BreadcrumbList.

8. **Book Audit confirmed** (`app/book-audit/confirmed/page.tsx`) — Thank-you page with next steps, blog link, ROI calculator link.

9. **About page** — Copy from `copy-all-pages.md` Section 3. Kurtis photo placeholder. Schema: Person + BreadcrumbList.

10. **Services page** — Copy from `copy-all-pages.md` Section 2. Service cards grid. Schema: Service + OfferCatalog.

11. **Contact page** — Copy from `copy-all-pages.md` Section 8. Two-column layout. Contact form per `forms.md` Form 3.

12. **SEO metadata** — Every page gets unique title, description, OG tags per `seo-strategy.md` on-page specs table. Use Next.js metadata API.

13. **Schema markup** — JSON-LD on every page per `schema.json`. Use the JsonLd component.

14. **Analytics** — dataLayer pushes per `analytics-plan.md`. CTA clicks, form events, scroll depth.

15. **Sitemap + Robots** — `app/sitemap.ts` generating all URLs. `app/robots.ts` allowing all crawlers including AI bots (GPTBot, PerplexityBot, ClaudeBot).

#### Key Implementation Rules

- **Use the copy verbatim** from `copy-all-pages.md`. Don't rewrite it.
- **Follow the wireframes** in `02-page-wireframes.md` for layout structure.
- **Every CTA button** must fire a `cta_click` dataLayer event with `cta_text` and `cta_location` properties.
- **Every page** needs a final CTA section (CtaBand component) before the footer.
- **Testimonials** use placeholder data initially — structure the component to accept real data later.
- **All images** use next/image with WebP, lazy loading (except hero which is priority).
- **All forms** follow validation rules and error messages from `forms.md`.
- **Dark mode** is supported but secondary — light mode is the default and primary experience.
- **No emojis as icons** — use Lucide React SVG icons only.
- **Accessibility** — WCAG 2.1 AA minimum per `03-interactions-accessibility.md`.

---

## PHASE-BY-PHASE PROMPTS

### Phase 1 Prompt (Copy this for initial build)

```
Read all files in the strategy/ directory. You are building kurtisdunn.com.au
as a Next.js 15 App Router project with TypeScript and Tailwind CSS 4.

Start by:
1. Initialising a new Next.js project (replacing the current Vite setup)
2. Setting up Tailwind with the design system colours from
   strategy/ui-ux-complete/01-design-system.md
3. Installing and configuring shadcn/ui (new-york style)
4. Setting up Lexend + Source Sans 3 fonts via next/font/google

Then build Phase 1 pages in this order:
- Root layout with Header, Footer, MobileCtaBar
- Homepage (all sections from strategy/copy-all-pages.md)
- Book Audit page with Cal.com embed placeholder
- About page
- Services hub page
- Contact page

Use copy verbatim from strategy/copy-all-pages.md.
Follow layouts from strategy/ui-ux-complete/02-page-wireframes.md.
Add SEO metadata per strategy/seo-strategy.md.
Add schema markup per strategy/schema.json.
Add analytics events per strategy/analytics-plan.md.
```

### Phase 2 Prompt (Industry pages + blog)

```
Read strategy/copy-all-pages.md, strategy/site-map.md, and
strategy/seo-strategy.md.

Build Phase 2:
1. Three industry pages: /industries/trades, /industries/professional-services,
   /industries/accounting-finance — using copy from strategy/copy-all-pages.md
   sections 5, 6, 7
2. Five service detail pages per strategy/site-map.md URL map
3. FAQ page with accordion component and FAQPage schema
4. Blog infrastructure: /blog hub page and /blog/[slug] dynamic route
5. Exit-intent popup per strategy/popups.md Popup 1
6. Email signup form per strategy/forms.md Form 4
```

### Phase 3 Prompt (Content + conversion)

```
Build Phase 3:
1. Three more industry pages: /industries/healthcare,
   /industries/property-real-estate, /industries/legal
2. ROI Calculator page per strategy/forms.md Form 5
3. Case studies hub and dynamic route (/case-studies/[slug])
4. Lead magnet scroll popup per strategy/popups.md Popup 2
5. Quick Assessment multi-step form per strategy/forms.md Form 2
```

### Phase 4 Prompt (Programmatic SEO)

```
Read strategy/programmatic-seo-plan.md.

Build the programmatic SEO system:
1. Create data files: data/pSEO/industries.json, locations.json, use-cases.json
2. Build /automation/[slug] dynamic route with generateStaticParams()
3. Create page template per the template structure in programmatic-seo-plan.md
4. Write unique intro paragraphs for Tier 1 pages (18 industry×location combos)
5. Generate schema markup per strategy/schema.json pseo_industry_location_template
6. Add internal linking per strategy/site-map.md linking rules
7. Update sitemap.ts to include all pSEO pages
```
