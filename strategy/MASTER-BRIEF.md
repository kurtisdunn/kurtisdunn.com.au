# MASTER BRIEF — kurtisdunn.com.au Redesign

## 1. Summary of Key Decisions

### Positioning
- **Primary message:** "Stop Losing 10+ Hours a Week to Work a Computer Should Be Doing"
- **Primary CTA:** Book a Free 15-Minute Automation Audit
- **Voice:** First person ("I"), plain Australian English, direct, proof-driven
- **Differentiators:** Founder-led, no lock-in, fully documented, Australian onshore

### Site Architecture
- 23 static pages + ~95–126 dynamic pages (blog, case studies, pSEO)
- Two-level hierarchy: Core pages + industry verticals + service detail pages
- Programmatic SEO: 48 industry×location pages + 15 use-case pages
- React Router SPA → **must migrate to SSG/SSR** (Astro recommended) for SEO

### Design System
- **Style:** Trust & Authority — clean, professional, credibility-first
- **Colours:** Teal primary (#0D7377) + Green CTA (#16A34A) on white/off-white
- **Typography:** Lexend (headings) + Source Sans 3 (body)
- **Components:** Cards, metric strips, FAQ accordions, testimonial carousels, inline CTAs
- **Mobile-first** with sticky bottom CTA bar

### SEO Strategy
- Target 18 primary keywords across services and industry pages
- E-E-A-T signals: founder story, case studies, testimonials, ABN, Australian-based messaging
- AI search optimisation: structured content blocks, FAQ schema, robots.txt allowing AI bots
- Technical: SSG, XML sitemap, schema markup on all pages, Core Web Vitals compliance

### Content Strategy
- 4 content pillars: Automation Fundamentals, Industry-Specific, Tools & How-Tos, Efficiency & Operations
- 48 blog posts in Year 1 (1/week)
- 5 case studies (one per key industry)
- Lead magnets: Automation Readiness Scorecard, 50 Tasks Checklist, Industry Starter Packs, ROI Calculator

### Conversion Strategy
- Every page drives to the audit booking
- 3 popup types: exit-intent (audit nudge), scroll (lead magnet), timed (ROI hook)
- Multi-step assessment form on homepage for micro-commitment
- Booking form: 2 required fields + 2 optional = minimum friction
- Trust signals adjacent to every CTA

### Revenue Operations
- HubSpot Free CRM + Cal.com + Kit (email) + Make (automation glue) + Xero
- 6 automated workflows: lead capture → audit → proposal → win/loss → testimonial → alumni
- Speed-to-lead via automated responses (human follow-up within 4 hours)
- Revenue target: $174K–$348K/year (projects + retainers)

### Sales Enablement
- 10-objection quick-reference table
- 15-minute audit discovery script
- 5-email follow-up sequence
- Proposal template (5–7 pages, PandaDoc)
- One-pager for champion distribution

---

## 2. Build Priority Order (Fastest ROI First)

### Phase 1: Foundation (Weeks 1–4) — SHIP FIRST
**Goal:** Get a converting site live with core pages and audit booking.

| Item | Effort | Impact |
|------|--------|--------|
| Homepage (full CRO-optimised copy) | High | Critical |
| Book Audit page with Cal.com embed | Medium | Critical |
| About page | Medium | High |
| Services hub page | Medium | High |
| Contact page | Low | Medium |
| Header/footer/nav | Medium | Critical |
| Schema markup (LocalBusiness, WebSite, FAQPage) | Low | High |
| GA4 + GTM + Clarity setup | Medium | High |
| Google Business Profile | Low | High |
| Mobile sticky CTA bar | Low | High |

**Technical:** Can ship Phase 1 on current React SPA with pre-rendering plugin. Schema via JSON-LD in `<head>`.

### Phase 2: Verticals & SEO (Weeks 5–8)
**Goal:** Capture industry-specific organic traffic.

| Item | Effort | Impact |
|------|--------|--------|
| 3 industry pages (Trades, Prof Services, Accounting) | High | High |
| 5 service detail pages | Medium | Medium |
| FAQ page (dedicated) | Low | Medium |
| Blog infrastructure + 4 pillar posts | High | High |
| XML sitemap + GSC submission | Low | High |
| Exit-intent popup (audit nudge) | Medium | Medium |
| Email sequences (HubSpot/Kit) | Medium | High |

### Phase 3: Content & Conversion (Weeks 9–16)
**Goal:** Build authority and email list.

| Item | Effort | Impact |
|------|--------|--------|
| 3 more industry pages (Healthcare, Property, Legal) | Medium | Medium |
| ROI Calculator page | Medium | High |
| First case study | Medium | High |
| 8 more blog posts (completing Month 1–3 calendar) | High | Medium |
| Lead magnet: Automation Readiness Scorecard | Medium | Medium |
| Scroll popup (lead magnet on blog) | Low | Medium |
| Blog email signup + nurture sequence | Medium | Medium |
| First A/B test (hero headline) | Low | Medium |

### Phase 4: Scale (Weeks 17–24)
**Goal:** Programmatic SEO, content flywheel.

| Item | Effort | Impact |
|------|--------|--------|
| **Migrate to Astro or Next.js** (required for pSEO) | High | Critical |
| Build pSEO templates + launch Tier 1 (18 pages) | High | High |
| 15 use-case pages | Medium | Medium |
| 2 more case studies | Medium | Medium |
| Industry Starter Pack lead magnets (3 variants) | Medium | Medium |
| LinkedIn content cadence (2–3x/week) | Ongoing | Medium |
| Monthly content production (4 posts/month) | Ongoing | High |

### Phase 5: Optimise (Months 7–12)
**Goal:** Refine based on data.

| Item | Effort | Impact |
|------|--------|--------|
| Launch remaining pSEO pages (Tier 2: 30 pages) | Medium | Medium |
| A/B testing programme (monthly tests) | Ongoing | Medium |
| Content refresh (update top posts quarterly) | Low | Medium |
| 2 more case studies | Medium | Medium |
| YouTube automation demo videos | Medium | Medium |
| Guest posts for backlinks | Ongoing | High |
| Re-evaluate SEO targets based on GSC data | Low | High |

---

## 3. Files Produced

| File | Description |
|------|-------------|
| `strategy/site-map.md` | Complete site architecture: page hierarchy, URLs, navigation spec, internal linking plan |
| `strategy/seo-strategy.md` | Keyword targets, on-page specs, title tags, meta descriptions, E-E-A-T strategy, AI SEO plan |
| `strategy/content-strategy.md` | Content pillars, 12-month blog calendar, lead magnet strategy, case study framework |
| `strategy/copy-all-pages.md` | Full copy for 8 pages: homepage, services, about, book audit, 3 industry verticals, contact |
| `strategy/psychology-layer.md` | 12 psychological principles mapped to specific page locations with implementation notes |
| `strategy/cro-strategy.md` | Page-by-page CRO specs: above-fold layouts, CTA hierarchy, trust signals, scroll optimisation |
| `strategy/forms.md` | 5 form designs: audit booking, assessment, contact, lead magnet, ROI calculator |
| `strategy/popups.md` | 3 popup variants with copy, trigger rules, frequency caps, mobile behaviour |
| `strategy/programmatic-seo-plan.md` | 63-page pSEO plan: industry×location + use-case templates, uniqueness strategy |
| `strategy/schema.json` | All schema markup: LocalBusiness, Service, FAQPage, BreadcrumbList, Article templates |
| `strategy/analytics-plan.md` | GA4 events, GTM structure, conversion tracking, UTM convention, Clarity setup |
| `strategy/revops-plan.md` | Solo operator revenue stack: CRM config, 6 automated workflows, pipeline stages, capacity plan |
| `strategy/sales-enablement.md` | Objection handling, audit call script, proposal template, 5-email follow-up, one-pager |
| `strategy/product-marketing.md` | Positioning statement, messaging hierarchy, 3 personas, competitive matrix, brand voice |
| `strategy/ui-ux-complete/01-design-system.md` | Colour palette, typography, spacing, components, icons |
| `strategy/ui-ux-complete/02-page-wireframes.md` | ASCII wireframes for all core pages (mobile + desktop) |
| `strategy/ui-ux-complete/03-interactions-accessibility.md` | Animations, responsive specs, WCAG 2.1 AA, developer handoff notes |

---

## 4. 90-Day Launch Roadmap

### Days 1–7: Setup
- [ ] Set up Google Business Profile
- [ ] Set up HubSpot Free CRM
- [ ] Set up Cal.com for audit booking
- [ ] Set up Kit (ConvertKit) for email
- [ ] Set up GA4 property + GTM container
- [ ] Set up Microsoft Clarity
- [ ] Verify GSC + Bing Webmaster Tools
- [ ] Order professional headshot for About page

### Days 8–21: Build Phase 1
- [ ] Implement design system (colours, typography, components)
- [ ] Build header, footer, mobile CTA bar
- [ ] Build homepage (all sections per wireframe)
- [ ] Build Book Audit page with Cal.com embed
- [ ] Build About page
- [ ] Build Services hub page
- [ ] Build Contact page
- [ ] Implement schema markup (LocalBusiness, WebSite, FAQPage)
- [ ] Install GA4 + GTM + Clarity tracking
- [ ] Set up audit booking confirmation flow

### Days 22–28: QA & Launch
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iPhone, Android, various sizes)
- [ ] Accessibility audit (keyboard nav, screen reader, contrast)
- [ ] Performance audit (Lighthouse, Core Web Vitals)
- [ ] Validate schema markup (Rich Results Test)
- [ ] Verify all tracking events firing (GA4 DebugView)
- [ ] **LAUNCH** 🚀
- [ ] Submit sitemap to GSC
- [ ] Announce on LinkedIn

### Days 29–42: Phase 2 Build
- [ ] Build 3 industry pages (Trades, Prof Services, Accounting)
- [ ] Build 5 service detail pages
- [ ] Build FAQ page
- [ ] Set up blog infrastructure
- [ ] Publish first 4 blog posts (Month 1 calendar)
- [ ] Set up exit-intent popup
- [ ] Build email sequences in Kit

### Days 43–56: Phase 2 Content
- [ ] Publish blog posts 5–8 (Month 2 calendar)
- [ ] Collect first 3 testimonials
- [ ] Set up ROI calculator page
- [ ] Create first lead magnet (Automation Readiness Scorecard)
- [ ] Set up scroll popup on blog

### Days 57–70: Phase 3 Start
- [ ] Build remaining 3 industry pages
- [ ] Write first case study
- [ ] Publish blog posts 9–12 (Month 3 calendar)
- [ ] Launch first A/B test (hero headline)
- [ ] Review analytics: what's working, what needs adjustment

### Days 71–90: Optimise & Plan
- [ ] Review GA4 data: traffic sources, conversion rates, top pages
- [ ] Review Clarity: heatmaps, session recordings, friction points
- [ ] Adjust copy and CTAs based on data
- [ ] Plan Astro/Next.js migration (required for Phase 4 pSEO)
- [ ] Plan Month 4–6 content calendar
- [ ] Collect second round of testimonials
- [ ] Write second case study
- [ ] **Day 90 review:** Measure against KPIs, adjust strategy

---

## 5. Gaps & Assumptions to Validate With Kurtis

### Must Confirm Before Building

| Item | Assumption | Needs Validation |
|------|-----------|-----------------|
| **Business location** | Based in Australia (city not specified) | Which city/state? Needed for schema markup and GBP |
| **ABN** | Exists but not provided | Actual ABN number for footer and schema |
| **Phone number** | Not provided | Business phone for header, schema, GBP |
| **LinkedIn URL** | Assumed active | Actual URL for schema and social links |
| **Real testimonials** | Placeholders used throughout | Need 3–5 real client testimonials with permission |
| **Real metrics** | "50+ SMBs", "150+ workflows" used as placeholders | What are the real numbers? |
| **Pricing** | Assumed $2K–$15K range | Actual pricing range or starting point |
| **Case studies** | None exist yet | Need to start collecting before/after data from current clients |
| **Photo** | Needed for About page and schema | Professional headshot available? |
| **Booking tool** | Recommended Cal.com | Does Kurtis have a preference? |
| **CRM** | Recommended HubSpot Free | Does Kurtis have a preference? |
| **Domain email** | Assumed kurtis@kurtisdunn.com.au | Active? |

### Technical Decisions Needed

| Decision | Recommendation | Alternative | Impact |
|----------|---------------|-------------|--------|
| **SSG framework migration** | Astro | Next.js | Critical for SEO — current SPA won't rank |
| **When to migrate** | Phase 4 (weeks 17–24) | Phase 1 (delay launch by 2 weeks) | Earlier = better SEO from day one |
| **Blog CMS** | Markdown files in repo (Astro) | Headless CMS (Sanity, Contentful) | Markdown is simpler for a solo operator |
| **Email tool** | Kit (ConvertKit) | Mailchimp, Buttondown | Kit has better automation for creators |
| **Popup tool** | ConvertKit (built-in) | OptinMonster, Sumo | Depends on email tool choice |

### Content Gaps

| Gap | Impact | Resolution |
|-----|--------|------------|
| No real testimonials yet | Trust signals are placeholder | Collect from first 3–5 clients immediately |
| No case studies yet | Social proof is weak | Start documenting current projects now |
| No blog content yet | Zero organic authority | Start publishing Month 1 calendar ASAP |
| No lead magnets yet | No email capture mechanism | Create Automation Readiness Scorecard first |
| Competitor "Automation for Business" has near-identical positioning | Risk of looking like a copycat | Lean hard into founder story, documentation focus, and transparency as differentiators |

### Strategic Questions for Kurtis

1. **Which city are you based in?** This affects GBP, pSEO priority, and local SEO.
2. **What are your real numbers?** Clients served, hours saved, automations built — even rough figures help.
3. **Who are your best 3 clients?** We need testimonials and ideally one case study before launch.
4. **Are you comfortable with first-person copy?** The strategy uses "I" throughout — confirming this fits.
5. **What's your actual capacity?** Can you handle 8–12 audit calls per month while delivering projects?
6. **Would you consider migrating to Astro/Next.js now** rather than later? It would give you SEO from day one instead of retrofitting.
7. **Do you have any existing email list?** Even a small list would accelerate the content flywheel.
8. **What's your LinkedIn following?** This affects the social distribution strategy.
