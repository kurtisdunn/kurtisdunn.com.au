import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automation for Professional Services Firms",
  description:
    "Automate client onboarding, time tracking, billing, and reporting for consultancies, agencies, and professional firms. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/industries/professional-services` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Professional Services",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "5–10 hours saved per team member, per week on non-billable admin",
  "Client onboarding in minutes instead of hours",
  "Billing cycles shortened — invoices out faster, cash in sooner",
  "Fewer dropped balls — automated follow-ups and reminders",
  "Better client experience — faster responses, smoother onboarding",
]

const AUTOMATION_FLOWS = [
  {
    title: "Client Onboarding",
    description:
      "New client signed → welcome email sent → project workspace created → intake form sent → documents collected → team assigned → kickoff meeting scheduled. All automatic.",
  },
  {
    title: "Time to Billing",
    description:
      "Time tracked → auto-categorised by project → draft invoice generated → sent for approval → dispatched to client → payment tracked. No reconciliation spreadsheet.",
  },
  {
    title: "Proposals & Scoping",
    description:
      "Client details entered once → proposal auto-populated from your template library → sent for e-signature → signed proposal triggers onboarding flow.",
  },
  {
    title: "Reporting",
    description:
      "Project data, time data, and financial data pulled into one live dashboard. Client status reports generated automatically. Partners see what they need without asking.",
  },
]

export default function ProfessionalServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automation for Professional Services Firms
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Client onboarding, time tracking, billing, reporting — streamlined
            for consultancies, agencies, and professional firms with 5–50 staff.
          </p>
          <div className="mt-8">
            <CtaButton
              href={BOOKING_URL}
              size="lg"
              ctaLocation="professional-services-hero"
            >
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Your Team Is Brilliant. Your Processes Aren&apos;t.
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              You&apos;ve hired smart, capable people — and they&apos;re
              spending a third of their week on admin that adds zero value to
              your clients.
            </p>
            <p>Here&apos;s what I see in most professional services firms:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Client onboarding takes 2–3 hours of manual setup per new
                  client — same steps, every time
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Time tracking data sits in one system, but billing runs from
                  another, and someone has to reconcile them manually
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Proposals are copy-pasted from the last one, with
                  find-and-replace for the client name
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Status reports are assembled by hand every week from three
                  different tools
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Follow-ups fall through the cracks because nobody owns the CRM
                </span>
              </li>
            </ul>
            <p>
              Every unbillable hour your team spends on admin is revenue
              you&apos;re leaving on the table.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for a Professional Services Firm
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
          <SectionHeading align="left">The Impact on Your Firm</SectionHeading>
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

      <CtaBand
        headline="Your Team's Time Is Too Valuable for Data Entry"
        body="Answer 4 questions about your firm and get a personalised automation plan emailed to you — where you're losing billable hours to admin and what to fix first. Free."
        ctaLocation="professional-services-bottom"
      />
    </>
  )
}
