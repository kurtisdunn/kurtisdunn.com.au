# Programmatic SEO Plan — kurtisdunn.com.au

## Opportunity

Australian SMB owners search for automation help using two natural patterns:

1. **Industry × Location:** "business automation for tradies in Brisbane"
2. **Use Case:** "automate invoicing for small business"

Neither major competitor (Osher Digital, Automation for Business) has dedicated pages for these long-tail queries. This is a first-mover opportunity in a low-competition space.

---

## Playbook 1: Industry × Location Pages

### URL Pattern
`/automation/{industry}-{location}`

### Examples
- `/automation/trades-brisbane`
- `/automation/accountants-sydney`
- `/automation/healthcare-melbourne`
- `/automation/professional-services-perth`
- `/automation/property-adelaide`
- `/automation/legal-gold-coast`

### Variables

**Industries (6):**

| Slug | Display Name | Parent Page |
|------|-------------|-------------|
| `trades` | Trades & Field Service | `/industries/trades` |
| `accountants` | Accountants & Finance | `/industries/accounting-finance` |
| `professional-services` | Professional Services | `/industries/professional-services` |
| `healthcare` | Healthcare & Allied Health | `/industries/healthcare` |
| `property` | Property & Real Estate | `/industries/property-real-estate` |
| `legal` | Legal Practices | `/industries/legal` |

**Locations (8):**

| Slug | Display Name | State |
|------|-------------|-------|
| `sydney` | Sydney | NSW |
| `melbourne` | Melbourne | VIC |
| `brisbane` | Brisbane | QLD |
| `perth` | Perth | WA |
| `adelaide` | Adelaide | SA |
| `gold-coast` | Gold Coast | QLD |
| `canberra` | Canberra | ACT |
| `newcastle` | Newcastle | NSW |

**Total pages: 6 × 8 = 48**

### Template Structure

```
Title: Business Automation for {Industry} in {Location} | Kurtis Dunn
Meta: Automation consulting for {location} {industry} businesses. Save 10–20
      hours a week with workflow automation, AI tools and system integrations.
      Free audit available.
H1: Business Automation for {Industry} in {Location}
URL: /automation/{industry-slug}-{location-slug}
```

**Page sections:**

#### Section 1: Location-Specific Intro (Unique per page — 100–150 words)
This is the critical uniqueness layer. Each page must have a genuinely different opening paragraph that references:
- The local business environment (e.g., "Brisbane's trades sector is booming, but growth brings admin headaches")
- A local reference or data point (e.g., ABS data on industry employment in that city/state)
- A specific challenge faced by that industry in that location

**Uniqueness strategy:** Write these manually. 48 paragraphs × 100 words = ~4,800 words of unique content. This is a one-time investment that prevents thin content flags.

#### Section 2: Industry Pain Points (Shared per industry — 6 variants)
Pulled from the parent industry page but condensed. Same content for all locations within an industry.

Example for trades:
- Manual quoting eating your evenings
- Double-entry across job management and accounting
- Chasing invoices instead of chasing leads
- Team coordination via text messages and memory

#### Section 3: What We Automate (Shared per industry — 6 variants)
Specific workflows relevant to that industry:

Example for accountants:
- Client onboarding (engagement letters, ATO auth, Xero setup)
- Document collection (automated reminders, client portal)
- Reconciliation (auto-categorisation, exception flagging)
- Reporting (auto-generated monthly financials)

#### Section 4: Local Results/Proof (Unique or semi-unique)
If a case study exists for that industry × location combo, feature it. Otherwise:
- Industry-matched testimonial (from any location)
- Generic result metrics for that industry
- "Working with {industry} businesses across Australia, including {location}"

#### Section 5: Tools We Integrate (Shared per industry)
Logo grid of industry-relevant tools:
- Trades: ServiceM8, Tradify, Fergus, Xero, MYOB
- Accountants: Xero, MYOB, Karbon, Dext, Hubdoc
- Professional services: HubSpot, Monday, Harvest, Xero
- Healthcare: Cliniko, Halaxy, Xero, Google Workspace
- Property: PropertyMe, Console Cloud, Xero
- Legal: LEAP, Smokeball, Xero, NetDocuments

#### Section 6: FAQ (2–3 Qs, semi-unique per page)
Mix of industry-specific and location-specific FAQs:
- "Do you work with {industry} businesses in {location}?" → "Yes. I work remotely with businesses across Australia, including {location}. All meetings are via video call."
- "How much does automation cost for a {industry} business?" → Industry-specific pricing guidance
- One genuinely unique Q based on local context

#### Section 7: CTA
"Book your free 15-minute automation audit. I'll show you exactly where your {location} {industry} business is losing time."
[Book Your Free Audit]

### Uniqueness Scorecard

| Section | Unique Per | Content Type | Word Count |
|---------|-----------|-------------|:---:|
| Intro paragraph | Page (48 unique) | Hand-written | 100–150 |
| Pain points | Industry (6 variants) | Template | 150–200 |
| What we automate | Industry (6 variants) | Template | 200–300 |
| Local results | Page (unique where possible) | Mixed | 50–100 |
| Tools grid | Industry (6 variants) | Template | 50 |
| FAQ | Page (semi-unique) | Mixed | 100–150 |
| CTA | Page (variable-swapped) | Template | 30–50 |
| **Total per page** | | | **~700–1,000** |

**Unique content per page: ~40–50%** (intro + local results + FAQ). This is above the threshold for avoiding thin content penalties.

### Internal Linking

```
/industries/trades (parent)
├── /automation/trades-sydney
├── /automation/trades-melbourne
├── /automation/trades-brisbane
├── /automation/trades-perth
├── /automation/trades-adelaide
├── /automation/trades-gold-coast
├── /automation/trades-canberra
└── /automation/trades-newcastle
```

- Each pSEO page links to: its parent industry page, `/book-audit`, 2 related pSEO pages (same industry different city, or same city different industry)
- Parent industry pages link to top 3 location pages as "We work with {industry} businesses in {location}" links
- pSEO pages are NOT in main navigation — discovered via organic search and internal links only
- All pages included in XML sitemap

---

## Playbook 2: Use-Case Pages

### URL Pattern
`/automation/{use-case}`

### Pages (15)

| Slug | Title | Target Keyword |
|------|-------|---------------|
| `invoice-processing` | Automate Invoice Processing | automate invoicing small business |
| `appointment-scheduling` | Automate Appointment Scheduling | automate appointment booking |
| `job-management` | Automate Job Management | job management automation |
| `client-onboarding` | Automate Client Onboarding | automate client onboarding |
| `quoting` | Automate Your Quoting Process | automate quoting process |
| `payroll` | Automate Payroll Processing | automate payroll small business |
| `document-management` | Automate Document Management | document management automation |
| `lead-follow-up` | Automate Lead Follow-Up | automate lead follow up |
| `reporting` | Automate Business Reporting | automated reporting small business |
| `inventory` | Automate Inventory Management | automate inventory tracking |
| `compliance` | Automate Compliance Reporting | compliance automation |
| `email-automation` | Automate Email Communication | email automation small business |
| `data-entry` | Eliminate Manual Data Entry | automate data entry |
| `customer-support` | Automate Customer Support | automate customer support small business |
| `project-management` | Automate Project Management | project management automation |

### Template Structure

```
Title: Automate {Use Case} for Your Business | Kurtis Dunn
Meta: Stop doing {use case} manually. I'll set up automation that handles
      {use case} automatically — saving your team hours every week.
H1: Automate {Use Case} — Save Hours Every Week
URL: /automation/{use-case-slug}
```

**Page sections:**

#### Section 1: The Problem (Unique — 150–200 words)
Describe the specific pain of doing this task manually. Use real-world scenarios. Written by hand for each page.

Example for `data-entry`:
"Your team enters the same information into three different systems every day. A quote gets typed into your CRM, then into your accounting software, then into a spreadsheet your manager reviews on Fridays. One typo in the customer's address? It's now wrong in three places. This isn't a technology problem — it's a workflow problem. And it's solvable."

#### Section 2: How Automation Works for This Task (Unique — 200–300 words)
Step-by-step workflow showing the automated version. Specific to each use case.

#### Section 3: Which Industries Benefit Most (Template with variable content)
Cross-link to 2–3 relevant industry pages:
- "This is especially common in [trades] and [professional services] businesses"

#### Section 4: Tools Commonly Used (Semi-unique per use case)
Specific tools relevant to that workflow:
- Invoicing: Xero, MYOB, Stripe, Square
- Scheduling: Calendly, Cal.com, Acuity, Google Calendar
- Data entry: Zapier, Make, Power Automate

#### Section 5: Results (Template with variable data)
- "Businesses typically save X hours per week by automating {use case}"
- One relevant testimonial or case study reference

#### Section 6: CTA
"Ready to stop doing {use case} manually? Book a free 15-minute audit."
[Book Your Free Audit]

### Uniqueness Scorecard

| Section | Unique? | Word Count |
|---------|---------|:---:|
| Problem description | Fully unique (hand-written) | 150–200 |
| How automation works | Fully unique (hand-written) | 200–300 |
| Industries | Semi-unique (cross-links vary) | 50–80 |
| Tools | Semi-unique | 80–120 |
| Results | Template with variable data | 50–80 |
| CTA | Variable-swapped | 30 |
| **Total per page** | | **~600–800** |

**Unique content per page: ~70–80%.** These pages are substantially unique because each use case is genuinely different.

---

## Data Sources

### Location Data
- ABS (Australian Bureau of Statistics): Industry employment by region
- State government business registries: Number of businesses by type per city
- Local business associations: Quotes, statistics, references

### Industry Data
- ABS: Industry-specific employment and revenue data
- Industry publications: SmartCompany, Kochie's Business Builders
- Tool vendor data: Integration counts, usage statistics

### Storage Format
All data stored as structured JSON or YAML files in the repository:

```
/data/pSEO/
├── industries.json      # Industry metadata (name, slug, pain points, tools)
├── locations.json       # Location metadata (name, slug, state, local data)
├── use-cases.json       # Use case metadata (name, slug, description, tools)
├── intros/              # Unique intro paragraphs per page
│   ├── trades-sydney.md
│   ├── trades-melbourne.md
│   └── ...
└── faqs/                # Semi-unique FAQ content
    ├── trades.json
    ├── accountants.json
    └── ...
```

---

## Indexation Strategy

### Priority Tiers

| Tier | Pages | Indexation | Sitemap |
|------|-------|-----------|---------|
| **Tier 1** | Top 6 cities × 3 key industries (18 pages) | Index immediately | Primary sitemap |
| **Tier 2** | Remaining industry × location combos (30 pages) | Index after Tier 1 ranks | Secondary sitemap |
| **Tier 3** | Use-case pages (15 pages) | Index in parallel with Tier 1 | Primary sitemap |

### Rollout Schedule

| Phase | Timeline | Pages | Action |
|-------|---------|-------|--------|
| 1 | Month 2–3 | 18 (Tier 1 location pages) + 5 (top use cases) | Launch, submit to GSC |
| 2 | Month 4–5 | 30 (Tier 2 location pages) + 10 (remaining use cases) | Launch after Phase 1 indexed |
| 3 | Month 6+ | Monitor and expand | Add new cities or industries based on demand data |

---

## Avoiding Thin Content Penalties

### The Rules

1. **Every page must have at least 40% unique content** that isn't just variable-swapped
2. **No two pages should have identical body text** — even if the structure is the same
3. **Every page must genuinely answer a distinct query** — not just the same answer with a different city name
4. **Self-referencing canonical tags** on all pSEO pages
5. **Noindex pages with no search volume** — if a combination has zero demand, don't index it
6. **Monitor Google Search Console** for "Duplicate without user-selected canonical" and "Crawled but not indexed" signals

### Quality Gate
Before publishing any pSEO page, it must pass this checklist:
- [ ] Unique intro paragraph (hand-written, not generated from template)
- [ ] At least one piece of location-specific or use-case-specific data
- [ ] Internal links to at least 2 other relevant pages
- [ ] CTA relevant to the page context
- [ ] Page loads in < 3 seconds
- [ ] Title and meta description are unique
- [ ] Schema markup applied (LocalBusiness or Service)

---

## Technical Requirements

### SSG Requirement
These pages MUST be statically generated at build time (SSG). The current SPA architecture cannot support this. Options:

1. **Astro** (recommended): Excellent for content-heavy sites with some interactive islands
2. **Next.js**: SSG via `generateStaticParams()` — works well if future features need SSR
3. **Vite SSG plugin**: Minimal migration if staying with current stack, but limited

### Build Process
1. Read data files (`industries.json`, `locations.json`, `use-cases.json`)
2. Generate page for each valid combination
3. Inject unique intro content from `/data/pSEO/intros/`
4. Generate unique title tags and meta descriptions
5. Build internal links from related page data
6. Output static HTML files

### Performance
- Each pSEO page should be < 100KB total (HTML + CSS)
- No JavaScript required for content (progressive enhancement only)
- Images lazy-loaded, WebP format
- Critical CSS inlined

---

## Measurement

| Metric | Target (6 months) | Target (12 months) |
|--------|-------------------|---------------------|
| Pages indexed | 80%+ of published | 95%+ |
| Organic traffic from pSEO | 100–300 sessions/month | 500–1,500 sessions/month |
| Keyword rankings (top 20) | 20–40 keywords | 80–150 keywords |
| Audit bookings from pSEO | 1–3/month | 5–10/month |
| Bounce rate | < 65% | < 55% |
| Avg. time on page | > 45 seconds | > 60 seconds |
