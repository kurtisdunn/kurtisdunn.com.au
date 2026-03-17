import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automation for Accountants & Finance Teams",
  description:
    "Automate client onboarding, document collection, reconciliation, and reporting for Australian accounting firms. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/industries/accounting` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Accounting & Finance",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "15+ hours saved per week across the team on admin and chasing",
  "Client onboarding reduced from 2 hours to 10 minutes",
  "Document collection time cut by 80% — clients upload, not email",
  "Fewer compliance risks — automated deadline tracking",
  "Capacity to take on 20–30% more clients without hiring",
]

const AUTOMATION_FLOWS = [
  {
    title: "Client Onboarding",
    description:
      "New client signed → engagement letter sent for e-signature → ATO authorisation form generated → Xero/MYOB access requested → client folder created → document request list sent → welcome email with portal access. Triggered by one action.",
  },
  {
    title: "Document Collection",
    description:
      "Automated reminders sent at defined intervals → clients upload via a portal → documents auto-filed to the right folder → your team notified when everything's received. No more chasing emails.",
  },
  {
    title: "Reconciliation & Data Entry",
    description:
      "Bank feeds auto-categorised → receipt data extracted and matched → anomalies flagged for human review. Your team handles exceptions, not the routine.",
  },
  {
    title: "Reporting",
    description:
      "Monthly financial reports auto-generated from live data → formatted in your template → sent to clients on schedule. Compliance deadlines tracked and flagged automatically.",
  },
]

const FAQ = [
  {
    question: "Do you understand accounting workflows?",
    answer:
      "Yes. I've worked with multiple Australian accounting firms and understand the typical stack — Xero, MYOB, Practice Manager, GreatSoft, Karbon, Dext, Hubdoc, and the ATO integration layer.",
  },
  {
    question: "Will this work with our existing practice management software?",
    answer:
      "Almost certainly. I integrate with whatever you're already using. The goal is to connect your current tools, not replace them.",
  },
  {
    question: "Is client data secure?",
    answer:
      "All automations run through enterprise-grade platforms with bank-level encryption. Your client data doesn't pass through any system it shouldn't.",
  },
]

export default function AccountingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automation for Accountants &amp; Finance Teams
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Client onboarding, document collection, reconciliation, reporting —
            automated for Australian accounting firms and finance teams with
            5–50 staff.
          </p>
          <div className="mt-8">
            <CtaButton
              href={BOOKING_URL}
              size="lg"
              ctaLocation="accounting-hero"
            >
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Your Juniors Are Doing Work a Machine Should Handle
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Every accounting firm I&apos;ve worked with has the same problem:
              smart, qualified people spending half their day on tasks that
              don&apos;t require a qualification.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Client onboarding involves 10+ manual steps — engagement
                  letter, ATO authorisation, Xero setup, folder creation,
                  checklist completion
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Document collection means chasing clients with &ldquo;did you
                  send your bank statements?&rdquo; emails on repeat
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Data entry from receipts, invoices, and statements into your
                  practice management system
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  BAS and compliance reporting assembled manually from multiple
                  data sources
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Monthly client reports copy-pasted from templates with manual
                  number updates
                </span>
              </li>
            </ul>
            <p>
              Your capacity is capped not by talent, but by admin. Every new
              client adds more manual work. Hiring another junior just adds
              another person doing the same repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for an Accounting Firm
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
            What Accounting Firms Get
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
        heading="What Accountants Usually Ask"
      />

      <CtaBand
        headline="Stop Capping Your Capacity With Manual Admin"
        body="Answer 4 questions about your practice and get a personalised automation plan — the workflows costing your firm the most time and what to automate first. Free."
        ctaLocation="accounting-bottom"
      />
    </>
  )
}
