import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Business Automation for Trades & Field Service",
  description:
    "Automate quoting, job management, invoicing, and reporting for Australian trades businesses. Stop double-handling data. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/industries/trades` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Trades & Field Service",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "10–15 hours saved per week on admin across the team",
  "Invoices sent same-day instead of a week late",
  "Zero double-entry — information entered once, flows everywhere",
  "Faster quoting — from hours to minutes",
  "Fewer errors — no more wrong amounts or missing details",
  "Happier team — less paperwork, more actual work",
]

const AUTOMATION_FLOWS = [
  {
    title: "Quoting",
    description:
      "A lead comes in → a quote is auto-generated from your pricing template → sent to the customer for approval → accepted quotes automatically create a job in your management system.",
  },
  {
    title: "Job Management",
    description:
      "Job created → team notified with all details → site photos uploaded and attached to the job record → completion triggers an invoice → job marked complete across all systems.",
  },
  {
    title: "Invoicing",
    description:
      "Job completed → invoice auto-generated in Xero (or MYOB, or whatever you use) → sent to the client → payment reminders sent automatically if unpaid after 7, 14, 21 days.",
  },
  {
    title: "Supplier Orders",
    description:
      "Job approved → materials list generated → purchase order sent to your preferred supplier → delivery tracked and matched to the job.",
  },
  {
    title: "Reporting",
    description:
      "All job data flows into a live dashboard — jobs in progress, revenue this month, outstanding invoices, team utilisation. Updated automatically. No Friday afternoon scramble.",
  },
]

const FAQ = [
  {
    question: "Do I need to change my current tools?",
    answer:
      "Usually not. I work with whatever you're already using — ServiceM8, Tradify, Fergus, Xero, MYOB, Google Workspace. The goal is to connect what you have, not replace it.",
  },
  {
    question: "My team isn't tech-savvy. Will they cope?",
    answer:
      "Yes. The automations run in the background — your team keeps using the tools they already know. The only difference is less manual work.",
  },
  {
    question: "How long does it take to set up?",
    answer: "Most trades automation projects take 2–4 weeks from go to live.",
  },
]

export default function TradesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Business Automation for Trades &amp; Field Service
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Quoting, job management, invoicing, supplier orders — automated.
            Built for Australian trades businesses with 5–50 staff who are tired
            of double-handling everything.
          </p>
          <div className="mt-8">
            <CtaButton href={BOOKING_URL} size="lg" ctaLocation="trades-hero">
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            The Admin Is Killing Your Margins
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              You got into the trades to do the work — not to spend your
              evenings copying job details from emails into spreadsheets, chasing
              suppliers for ETAs, or manually generating invoices at 10pm.
            </p>
            <p>
              But as you&apos;ve grown, the admin has grown faster. Every new
              job means:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Manually quoting from a template (again)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Entering the same job details into 2–3 different systems</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Chasing the team for site photos and completion notes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Following up on unpaid invoices that should have gone out days
                  ago
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Building the same weekly report your accountant asks for every
                  Friday
                </span>
              </li>
            </ul>
            <p>
              Your admin staff are doing the same repetitive work on repeat.
              Your margin is shrinking because you need more admin to support
              more jobs — even though the admin itself hasn&apos;t changed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for a Trades Business
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
            What Trades Businesses Get From Automation
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
        heading="A Few Questions Tradies Usually Ask"
      />

      <CtaBand
        headline="Let's Find Where Your Business Is Losing Time"
        body="Answer 4 questions about your trades business and get a personalised automation plan emailed to you — specific workflows, time savings estimates, and what to tackle first. Free."
        ctaLocation="trades-bottom"
      />
    </>
  )
}
