import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Ongoing Automation Support & Maintenance",
  description:
    "Keep your automations running as your business evolves. Monthly health checks, updates, new workflow additions, and priority support. From $500/month.",
  alternates: { canonical: `${SITE_URL}/services/ongoing-support` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Ongoing Automation Support & Maintenance",
  areaServed: { "@type": "Country", name: "Australia" },
}

const SUPPORT_ITEMS = [
  {
    title: "Monthly Health Check",
    description:
      "I review all active automations and fix anything that&apos;s drifted. Broken connections, failed runs, edge cases — caught and resolved before they become problems.",
  },
  {
    title: "Updates When Your Tools Change",
    description:
      "APIs update, features change, vendors deprecate endpoints. When your tools change, I update your automations so they keep working without interruption.",
  },
  {
    title: "New Automation Additions",
    description:
      "As your business grows, your automations should too. New workflows, new integrations, new steps added to existing flows — without starting from scratch.",
  },
  {
    title: "Priority Support",
    description:
      "When something breaks, it gets fixed fast. Priority response times mean you&apos;re not waiting days for a resolution.",
  },
  {
    title: "Documentation Updates",
    description:
      "Every change is reflected in your plain-English documentation. Your team always knows how things work and what to expect.",
  },
]

const RESULTS = [
  "Automations that keep working as your business evolves",
  "Faster fixes when something breaks",
  "New workflows added without starting from scratch",
  "Documentation always current and accurate",
  "One point of contact for everything automation-related",
]

const FAQ = [
  {
    question: "What does the monthly retainer include?",
    answer:
      "Health checks, fixes, updates, new workflow additions, and priority support. The exact scope depends on the plan, but every retainer includes proactive monitoring — I catch issues before you notice them.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No lock-in contracts. If you want to stop, you keep everything I&apos;ve built and all your documentation. I&apos;ll do a clean handover so nothing is left hanging.",
  },
  {
    question: "What if I only need help occasionally?",
    answer:
      "I offer ad-hoc support at an hourly rate for businesses that don&apos;t need monthly coverage. Good for stable automations that only need attention a few times a year.",
  },
]

export default function OngoingSupportPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Ongoing Automation Support &amp; Maintenance
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Automations aren&apos;t set-and-forget. Keep everything running,
            updated, and growing with your business. From $500/month.
          </p>
          <div className="mt-8">
            <CtaButton href={ASSESSMENT_URL} size="lg" ctaLocation="ongoing-support-hero">
              Get Your Free Automation Plan
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Working Automations Slowly Break Without Maintenance
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Automations aren&apos;t set-and-forget. Tools update their APIs,
              your business changes how it operates, new staff need training, and
              edge cases surface that weren&apos;t covered in the original build.
            </p>
            <p>Without ongoing support, things drift:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>An API update breaks a connection and no one notices for weeks</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Your process changes but the automation still runs the old way</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>New staff don&apos;t know how the automations work or what triggers what</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Edge cases create errors that pile up quietly in the background</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>You want to add a new workflow but don&apos;t know where to start</span>
              </li>
            </ul>
            <p>
              Ongoing support means your automations evolve with your business
              instead of slowly becoming irrelevant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What&apos;s Included in Ongoing Support
          </SectionHeading>
          <div className="space-y-8">
            {SUPPORT_ITEMS.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Ongoing Support Gives You
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
        heading="Common Questions About Ongoing Support"
      />

      <CtaBand
        headline="Keep Your Automations Running Smoothly"
        body="Start with your free personalised automation plan. Answer 4 questions about your business and I&apos;ll show you what to automate first — and how to keep it all running. Free."
        ctaLocation="ongoing-support-bottom"
      />
    </>
  )
}
