import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Workflow Automation for Australian Small Businesses",
  description:
    "Automate the repetitive handoffs slowing your business down — form submissions, invoicing, follow-ups, onboarding, and reporting. $2K–$10K. Book a free automation audit.",
  alternates: { canonical: `${SITE_URL}/services/workflow-automation` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Workflow Automation for Small Businesses",
  areaServed: { "@type": "Country", name: "Australia" },
}

const AUTOMATION_FLOWS = [
  {
    title: "Form Submission → Job Created",
    description:
      "A customer fills in a form on your website — a job card is automatically created in your management system with all the details attached. No copy-pasting.",
  },
  {
    title: "Job Complete → Invoice Sent",
    description:
      "The moment a job is marked complete, an invoice is generated in Xero or MYOB and sent to the client. Same-day invoicing, every time.",
  },
  {
    title: "Payment Overdue → Reminder Sent",
    description:
      "Unpaid invoices trigger automatic follow-up emails at 7, 14, and 21 days. Polite, consistent, and no one on your team has to chase.",
  },
  {
    title: "New Client → Onboarding Sequence Triggered",
    description:
      "A new client signs up and automatically receives your welcome email, intake form, and any documents they need — without anyone hitting send.",
  },
  {
    title: "Weekly Data → Report Auto-Generated",
    description:
      "Every Monday morning, a summary of last week&apos;s jobs, revenue, and outstanding invoices lands in your inbox. Built automatically from your live data.",
  },
]

const RESULTS = [
  "10–15 hours/week saved on admin",
  "Same-day invoicing — no more week-late invoices",
  "Zero double-entry — data entered once, flows everywhere",
  "Faster onboarding for new clients",
  "Fewer missed follow-ups on overdue payments",
  "Staff focused on clients, not data entry",
]

const FAQ = [
  {
    question: "What tools do you work with?",
    answer:
      "Xero, MYOB, HubSpot, ServiceM8, Tradify, Google Workspace, Power Automate, n8n, Make, and more. If your tool has an API, I can connect it.",
  },
  {
    question: "How long does it take?",
    answer:
      "2–4 weeks is typical for a workflow automation project. Simple single-step automations can be live in under a week.",
  },
  {
    question: "Do I need to change my current software?",
    answer:
      "No. The whole point is to connect what you already have. I work with your existing tools and make them talk to each other.",
  },
]

export default function WorkflowAutomationPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Workflow Automation for Australian Small Businesses
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Stop copying data between systems, sending manual follow-ups, and
            rebuilding the same reports every week. Connect your tools so the
            work does itself. $2,000 – $10,000.
          </p>
          <div className="mt-8">
            <CtaButton href={ASSESSMENT_URL} size="lg" ctaLocation="workflow-automation-hero">
              Get Your Free Automation Plan
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Every New Client Means More Admin, Not More Revenue
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Your team is spending hours on repetitive handoffs — copying data
              between systems, sending manual follow-ups, rebuilding the same
              reports. Every new client or job means more admin work, but the
              admin itself hasn&apos;t changed.
            </p>
            <p>The same tasks, repeated every day:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Copying form submissions into your job management system</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Manually creating invoices after every completed job</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Chasing overdue payments one by one</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Sending the same onboarding emails to every new client</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Pulling numbers from three systems to build one report</span>
              </li>
            </ul>
            <p>
              These tasks don&apos;t need judgement — they need to happen the
              same way, every time. That&apos;s exactly what automation does.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Workflow Automation Looks Like
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
            What You Get From Workflow Automation
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
        heading="Common Questions About Workflow Automation"
      />

      <CtaBand
        headline="Let&apos;s Find the Workflows Eating Your Week"
        body="Answer 4 questions about your business and get a personalised automation plan emailed to you — specific workflows, time savings estimates, and what to tackle first. Free."
        ctaLocation="workflow-automation-bottom"
      />
    </>
  )
}
