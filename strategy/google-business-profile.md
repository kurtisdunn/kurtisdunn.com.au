# Google Business Profile — Setup Copy
# kurtisdunn.com.au

*Copy ready to paste into Google Business Profile. Fill in items marked [FILL IN].*

---

## 1. Basic Info

**Business name:** Kurtis Dunn — Business Automation Consulting

**Primary category:** Business Management Consultant

**Secondary categories:**
- Computer Consultant
- IT Consultant

**Website:** https://kurtisdunn.com.au

**Phone:** [FILL IN]

**Address / Service area:**
- If operating from home: set as a service-area business (hide address)
- Service area: Australia (or list states: NSW, VIC, QLD, WA, SA, ACT, TAS, NT)

**Business location (city/state):** [FILL IN — needed for local SEO]

**ABN:** [FILL IN]

---

## 2. Hours

Monday – Friday: 9:00 am – 5:00 pm
Saturday: Closed
Sunday: Closed

*Note: Add a special hours note — "Available by appointment outside these hours."*

---

## 3. Business Description

*(750 character max. Copy-paste this exactly.)*

> I help Australian small businesses stop losing 10+ hours a week to repetitive admin. As a business automation consultant and AWS Certified Solutions Architect, I connect the tools you already use — Xero, job management software, CRMs — so data flows automatically instead of being entered by hand.
>
> Projects start with a free Personalised Automation Plan: answer 4 questions about your business and get a specific list of what to automate first, with time savings estimates, emailed to you free.
>
> Founder-led. No lock-in. Fully documented. Australian-based.

*(~590 characters — within limit)*

---

## 4. Services

*(Each service: name + short description. Max 120 chars per description.)*

**Free Automation Audit**
Free 30-minute call to map your processes and identify where time is being lost. No obligation.

**Workflow Automation**
Connect Xero, CRM, and job management tools so data flows automatically. No more double entry. From $2,000.

**AI Automations & Chatbots**
AI-powered automations for enquiries, document summaries, and lead triage. Built on Claude by Anthropic.

**Reporting & Dashboards**
Live dashboards that replace your weekly spreadsheet rebuild. Revenue, jobs, and invoices — always current.

**Custom Application Development**
Purpose-built web apps on AWS — internal tools, client portals, and integrations. From $15,000.

**Ongoing Automation Support**
Monthly retainer for monitoring, fixes, and new workflows as your business evolves. From $500/month.

---

## 5. Attributes

Check these where available in your GBP dashboard:

- [x] Online appointments
- [x] Online estimates
- [x] Service guarantee (implied — "no lock-in, you own everything")
- [x] Identifies as Australian-owned

---

## 6. Q&A — Pre-seed these yourself

*(Post these as questions from your own account, then answer them. They appear in the Q&A section and are indexed by Google.)*

---

**Q: What is a business automation consultant?**
A: A business automation consultant maps your current manual processes and implements software solutions that handle them automatically. For most small businesses this means connecting tools like Xero, CRMs, and job management software using platforms like Zapier or Make — so data flows between systems without anyone entering it manually. For businesses with unique workflows, it can mean building custom software from scratch.

---

**Q: How much does business automation cost in Australia?**
A: Most workflow automation projects fall between $2,000 and $10,000 depending on complexity. Custom application development on AWS starts from $15,000 for purpose-built tools. All projects are scoped and fixed-price — no hourly billing. Most projects pay for themselves within 6–8 weeks through staff time savings.

---

**Q: Do you work with businesses outside your city?**
A: Yes — 100% remote delivery. I work with businesses across Australia: Sydney, Melbourne, Brisbane, Perth, Adelaide, and everywhere in between. All projects are delivered remotely with video calls, screen sharing, and shared documentation. Being onshore and in AEST hours means I'm available during your business day.

---

**Q: What tools and software do you work with?**
A: I work with the tools most Australian SMBs already use: Xero, MYOB, QuickBooks, HubSpot, ServiceM8, Tradify, Deputy, Simpro, Google Workspace, Microsoft 365, and more. For automation platforms I use Zapier and Make (formerly Integromat). For custom builds I use AWS (I'm a Certified Solutions Architect and DevOps Engineer).

---

**Q: Are you AWS certified?**
A: Yes — I hold three AWS certifications: AWS Certified Solutions Architect, AWS Certified DevOps Engineer, and AWS Certified Security Specialist. These credentials mean the applications I build are properly architected, deployed securely, and built to scale. For sensitive industries like healthcare, legal, and finance, I offer private deployments within your own AWS environment.

---

**Q: How long does a business automation project take?**
A: Most workflow automation projects take 2–4 weeks from audit to handover. Custom application development projects typically run 6–16 weeks depending on scope. Every project starts with a scoping call so you get a clear timeline upfront — no surprises.

---

**Q: What industries do you work with?**
A: My focus is Australian service businesses with 5–50 staff: trades and construction, professional services, accounting and bookkeeping, healthcare, property management, and legal practices. These industries share the same core problem — growing admin that scales faster than revenue — and tend to see the biggest returns from automation.

---

**Q: How do I get started?**
A: The easiest first step is the free Personalised Automation Plan at kurtisdunn.com.au/assessment. Answer 4 questions about your business and get a specific list of what to automate first — with time savings estimates — emailed to you for free. If you'd rather talk first, book a free 30-minute audit call at kurtisdunn.com.au/book-audit.

---

## 7. First GBP Post (Welcome / Introductory)

**Post type:** What's new

**Photo:** Professional headshot or logo

**Copy:**

> If your team is spending hours a week entering the same data into different systems, chasing overdue invoices by hand, or rebuilding the same report every Friday — that's time a computer should be doing.
>
> I'm Kurtis, a business automation consultant based in Australia. I help small businesses connect the tools they already use so everything flows automatically — from quote to invoice, from new client to onboarding checklist, from job completion to payment follow-up.
>
> Start with a free Personalised Automation Plan: 4 questions, AI-generated recommendations, emailed to you free.

**Button:** Book online → https://kurtisdunn.com.au/assessment

---

## 8. Photos Checklist

Upload these to maximise profile completeness:

- [ ] **Logo** — square crop of the kurtisdunn.com.au logo/wordmark
- [ ] **Cover photo** — wide banner (1332 x 750px recommended), clean branded visual
- [ ] **Profile photo** — professional headshot
- [ ] **At work** — screenshot of a dashboard, automation workflow diagram, or tools in use
- [ ] **Team photo** — solo headshot works fine for a solo operator

---

## 9. Schema to verify in codebase

The following `LocalBusiness` schema should be added/verified in `src/app/layout.tsx` once city/ABN/phone are confirmed:

```json
{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "name": "Kurtis Dunn — Business Automation Consulting",
  "url": "https://kurtisdunn.com.au",
  "email": "kurtis@kurtisdunn.com.au",
  "telephone": "[FILL IN]",
  "areaServed": { "@type": "Country", "name": "Australia" },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU",
    "addressRegion": "[STATE]",
    "addressLocality": "[CITY]"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "hasCredential": [
    "AWS Certified Solutions Architect",
    "AWS Certified DevOps Engineer",
    "AWS Certified Security Specialist"
  ]
}
```

---

*Last updated: 2026-03-16*
