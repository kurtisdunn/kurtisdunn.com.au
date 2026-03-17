import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automation for Property & Real Estate",
  description:
    "Automate tenant communications, maintenance requests, lease tracking, and owner reports for Australian property managers. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/industries/property` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Property & Real Estate",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "10–15 hours saved per property manager per week",
  "Maintenance requests resolved faster with automatic tradesperson dispatch",
  "Lease renewals never missed — automated reminders at 90, 60, 30 days",
  "Owner reports sent on schedule without manual compilation",
  "Tenant arrears chased automatically — fewer awkward calls",
  "More properties managed per PM without extra headcount",
]

const AUTOMATION_FLOWS = [
  {
    title: "Tenant Communications",
    description:
      "Lease signed → welcome pack sent → move-in checklist issued → routine inspection reminders scheduled → lease expiry prompts triggered automatically. Every touchpoint handled without manual intervention.",
  },
  {
    title: "Maintenance Requests",
    description:
      "Tenant submits request → automatically triaged by urgency → preferred tradesperson notified → job booked → tenant updated on ETA → completion confirmed → invoice matched to property and owner → all documented.",
  },
  {
    title: "Lease Renewals & Arrears",
    description:
      "Lease expiry flagged at 90, 60, and 30 days → renewal offer sent to tenant → response tracked → if arrears occur, payment reminder sequence triggered automatically at 3, 7, and 14 days.",
  },
  {
    title: "Owner Reporting",
    description:
      "Monthly owner statements auto-generated from your trust accounting system → formatted to your template → emailed to each owner on schedule. No manual compilation, no missed reports.",
  },
  {
    title: "New Tenancy Onboarding",
    description:
      "Application approved → reference checks initiated → lease generated → bond lodged → condition report sent → key collection scheduled → property record updated. The entire onboarding flow, automated.",
  },
]

const FAQ = [
  {
    question: "Which property management software do you integrate with?",
    answer:
      "I work with the most common Australian platforms — PropertyMe, Console Cloud, Palace, Inspect Real Estate, MRI Software, and others. The goal is to connect what you already have, not replace it.",
  },
  {
    question: "Can this work for a small agency with a handful of properties?",
    answer:
      "Yes. Even managing 50–100 properties, the time savings are significant. The audit will tell you exactly which automations make sense for your portfolio size.",
  },
  {
    question: "What about compliance — bond lodgements, RTA forms, that sort of thing?",
    answer:
      "Compliance workflows are a great automation target. I can automate the generation and dispatch of standard forms, reminders for compliance deadlines, and documentation storage — while keeping you in control of the steps that genuinely need human review.",
  },
]

export default function PropertyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automation for Property &amp; Real Estate
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Tenant comms, maintenance requests, lease tracking, owner reports —
            on autopilot. Built for Australian property managers who are tired of
            manually chasing the same things every week.
          </p>
          <div className="mt-8">
            <CtaButton
              href={BOOKING_URL}
              size="lg"
              ctaLocation="property-hero"
            >
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Property Management Is 80% Admin. It Doesn&apos;t Have to Be.
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Every property manager I&apos;ve worked with says the same thing:
              they spend most of their day on communication, chasing, and
              paperwork — not on the relationship work that actually matters.
            </p>
            <p>
              The portfolio grows, the team grows, but the admin per property
              stays roughly the same. Eventually, you hit a ceiling — you can
              only manage so many properties per person before something drops.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Maintenance requests manually triaged and dispatched to
                  tradespeople
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Lease renewal reminders tracked in a spreadsheet — or missed
                  entirely
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Owner reports compiled manually from trust accounting data
                  every month
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Arrears chased with individual calls and emails rather than an
                  automated sequence
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  New tenancy onboarding done step by step, manually, every time
                </span>
              </li>
            </ul>
            <p>
              Automation doesn&apos;t replace the relationship side of property
              management. It handles the repetitive side — so your team can
              focus on the work that actually requires a person.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for a Property Manager
          </SectionHeading>
          <div className="space-y-8">
            {AUTOMATION_FLOWS.map((flow, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {flow.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Property Managers Get
          </SectionHeading>
          <ul className="space-y-3">
            {RESULTS.map((result) => (
              <li key={result} className="flex gap-3">
                <CheckCircle
                  className="h-5 w-5 shrink-0 text-cta mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-text-secondary">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        items={FAQ}
        heading="Common Questions From Property Managers"
      />

      <CtaBand
        headline="Manage More Properties. Do Less Admin."
        body="Answer 4 questions about your property business and get a personalised automation plan — where you're losing the most time and what to automate first. Free."
        ctaLocation="property-bottom"
      />
    </>
  )
}
