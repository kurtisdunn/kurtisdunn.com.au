import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automation for Healthcare & Allied Health",
  description:
    "Automate patient intake, appointment reminders, referrals, and compliance for Australian healthcare and allied health practices. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/industries/healthcare` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Business Automation for Healthcare & Allied Health",
  areaServed: { "@type": "Country", name: "Australia" },
}

const RESULTS = [
  "10+ hours saved per week on admin across reception and clinical staff",
  "No-show rates reduced with automated appointment reminders",
  "Patient intake completed before the appointment — not during it",
  "Referral letters generated and sent in seconds, not hours",
  "Compliance documentation handled automatically",
  "More time with patients, less time on paperwork",
]

const AUTOMATION_FLOWS = [
  {
    title: "Patient Intake",
    description:
      "Appointment booked → intake forms sent automatically → patient completes forms online before attending → details pre-populated in your practice management system → clinician sees everything before the consult starts.",
  },
  {
    title: "Appointment Reminders",
    description:
      "Appointment scheduled → confirmation sent immediately → reminder sent 48 hours before → same-day reminder with arrival instructions. Patients confirm or reschedule without calling the front desk.",
  },
  {
    title: "Referrals",
    description:
      "Referral needed → letter auto-drafted with patient details and clinical notes → sent to the receiving practitioner → tracked until acknowledged. No dictation backlogs, no missing fax numbers.",
  },
  {
    title: "Billing & Medicare",
    description:
      "Consult complete → invoice auto-generated → Medicare/private health claim lodged automatically → payment reconciled against expected fees. Gaps and outstanding balances flagged without manual chasing.",
  },
  {
    title: "Compliance & Recalls",
    description:
      "Care plans tracked against review dates → recall reminders sent automatically → chronic disease management schedules maintained → compliance reports generated for accreditation without manual compilation.",
  },
]

const FAQ = [
  {
    question: "Will this work with our practice management software?",
    answer:
      "Almost certainly. I integrate with the most common Australian healthcare platforms — Best Practice, Medical Director, Cliniko, Nookal, Halaxy, Genie, and others. The goal is to connect what you already have.",
  },
  {
    question: "How do you handle patient privacy?",
    answer:
      "All automations are built to comply with the Australian Privacy Act and APP guidelines. Patient data only flows between systems you already authorise. Nothing goes to a third party without your explicit sign-off.",
  },
  {
    question: "We're a small practice. Is this worth it for us?",
    answer:
      "Absolutely. Even a solo GP or a three-person allied health clinic can reclaim 5–10 hours a week. The audit will tell you whether the numbers stack up for your specific situation.",
  },
]

export default function HealthcarePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automation for Healthcare &amp; Allied Health
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Patient intake, reminders, referrals, compliance — automated without
            losing the human touch. Built for Australian healthcare and allied
            health practices with 2–50 staff.
          </p>
          <div className="mt-8">
            <CtaButton
              href={BOOKING_URL}
              size="lg"
              ctaLocation="healthcare-hero"
            >
              Book Your Free Automation Audit
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Your Clinical Staff Are Doing Admin. That&apos;s the Problem.
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              In most practices I work with, the most expensive people on the
              payroll spend a significant chunk of their day on tasks that
              have nothing to do with patient care.
            </p>
            <p>
              The front desk is chasing no-shows, re-entering patient details
              from paper forms, manually generating referral letters, and
              tracking compliance deadlines in a spreadsheet. Clinical staff are
              dictating notes that could be templated. Billing staff are
              reconciling Medicare claims line by line.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Intake forms filled in by hand, then re-keyed into your system
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Appointment reminders sent manually — or not sent at all, and
                  patients no-show
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Referral letters taking hours to draft and dispatch
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Chronic disease recalls and care plan reviews tracked in a
                  spreadsheet someone has to check manually
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>
                  Billing and Medicare reconciliation done row by row
                </span>
              </li>
            </ul>
            <p>
              Every one of these is solvable. The automation handles the
              routine. Your team handles the people.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automation Looks Like for a Healthcare Practice
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
            What Healthcare Practices Get
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
        heading="Common Questions From Healthcare Practices"
      />

      <CtaBand
        headline="More Time With Patients. Less Time on Admin."
        body="Answer 4 questions about your practice and get a personalised automation plan — specific to healthcare workflows, privacy-compliant, and prioritised by impact. Free."
        ctaLocation="healthcare-bottom"
      />
    </>
  )
}
