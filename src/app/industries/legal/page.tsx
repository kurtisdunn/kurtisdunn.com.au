import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automation for Law Firms & Legal Practices",
  description:
    "Automate client intake, document assembly, matter management, and billing for Australian law firms. Your hourly rate is too high for data entry.",
  alternates: { canonical: `${SITE_URL}/industries/legal` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Law Firms & Legal Practices",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "5–10 hours saved per fee earner per week on non-billable admin",
  "Client intake completed before the first meeting — not during it",
  "Standard documents drafted in minutes, not hours",
  "Billing leakage reduced — time captured and invoiced that used to fall through",
  "Fewer missed deadlines with automated matter tracking",
  "Clients feel better looked after — faster communication, fewer gaps",
]

const AUTOMATION_FLOWS = [
  {
    title: "Client Intake",
    description:
      "Enquiry received → conflict check triggered → intake questionnaire sent to prospective client → responses auto-populated into your matter management system → engagement letter generated and sent for e-signature → retainer collected. All before the first substantive meeting.",
  },
  {
    title: "Document Assembly",
    description:
      "Matter details entered once → standard documents auto-populated with client and matter information → drafted documents sent for solicitor review → approved and dispatched to client or counterparty. No more manual find-and-replace.",
  },
  {
    title: "Matter Management",
    description:
      "Matter opened → task list created from your standard workflow → key dates set and tracked → deadline reminders sent to the responsible solicitor → status updates sent to the client at defined milestones — without anyone having to remember to send them.",
  },
  {
    title: "Time & Billing",
    description:
      "Time entries auto-suggested from emails, calls, and calendar events → draft bills generated at billing cycle → sent for partner review → approved bills dispatched to clients → payment tracked and overdue accounts followed up automatically.",
  },
  {
    title: "Compliance & Trust",
    description:
      "Trust accounting reconciliations triggered on schedule → compliance deadlines tracked and flagged → CPD records updated → file reviews prompted. The administrative side of compliance, handled without manual tracking.",
  },
]

const FAQ = [
  {
    question: "Which practice management software do you work with?",
    answer:
      "I integrate with the most common Australian legal platforms — LEAP, Actionstep, InfoTrack, Smokeball, Practice Evolve, and others. The goal is to connect what you already have and make it work harder.",
  },
  {
    question: "How do you handle client confidentiality?",
    answer:
      "Every automation is built with confidentiality in mind. Client data only flows between systems your firm already controls. I don't use consumer-grade tools for legal data, and nothing is shared externally without your explicit sign-off.",
  },
  {
    question: "We're a small firm. Is this worth it?",
    answer:
      "Even a firm of 3–5 solicitors can reclaim 5–10 hours a week per person. At your billing rate, that's meaningful revenue or time back. The audit will tell you whether the ROI makes sense for your practice.",
  },
  {
    question: "What about the tasks that really do need a lawyer's judgement?",
    answer:
      "That's exactly the point. Automation handles the mechanical, repeatable tasks — so your qualified people spend their time on work that actually requires legal expertise. The judgement stays with the lawyer. The admin doesn't have to.",
  },
]

export default function LegalPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automation for Law Firms &amp; Legal Practices
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Client intake, document assembly, matter management, billing —
            because your hourly rate is too high for data entry. Built for
            Australian law firms with 2–50 fee earners.
          </p>
          <div className="mt-8">
            <CtaButton href={BOOKING_URL} size="lg" ctaLocation="legal-hero">
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Your Fee Earners Are Doing $50/hr Work at $500/hr
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              In most law firms I speak with, solicitors and paralegals spend
              20–30% of their week on tasks that don&apos;t require legal
              training. They&apos;re entering client details into systems,
              manually populating standard documents, chasing clients for
              information, and managing email threads that could be automated.
            </p>
            <p>
              That time is either written off as non-billable — reducing your
              recovery rate — or billed to clients who start to question the
              value. Either way, it&apos;s a problem.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Client intake done manually in the first meeting instead of
                  before it
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Standard documents built from scratch or copy-pasted from
                  previous files
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Matter deadlines tracked in a shared calendar or, worse, in
                  someone&apos;s head
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Time entries missed or forgotten — billing leakage that adds up
                  across the team
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Clients chased for outstanding information with individual
                  emails
                </span>
              </li>
            </ul>
            <p>
              None of these are legal problems. They&apos;re process problems —
              and process problems are exactly what automation is for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for a Law Firm
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
          <SectionHeading align="left">What Law Firms Get</SectionHeading>
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

      <FaqAccordion items={FAQ} heading="Common Questions From Law Firms" />

      <CtaBand
        headline="Less Admin. More Law."
        body="Answer 4 questions about your firm and get a personalised automation plan — the workflows costing you the most time, specific to legal practice, and prioritised by impact. Free."
        ctaLocation="legal-bottom"
      />
    </>
  )
}
