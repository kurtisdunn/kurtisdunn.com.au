import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_URL, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Free 30-Minute Automation Audit",
  description:
    "A free 30-minute call to identify where your business is losing time. Get a prioritised list of what to automate first — honest advice, no obligation.",
  alternates: { canonical: `${SITE_URL}/services/automation-audit` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Free Automation Audit",
  areaServed: { "@type": "Country", name: "Australia" },
}

const AUDIT_STEPS = [
  {
    title: "We Review How Your Business Currently Operates",
    description:
      "Tools, team structure, daily workflows, pain points. I need to understand how things actually work — not how they&apos;re supposed to work.",
  },
  {
    title: "I&apos;ve Already Reviewed Your Automation Plan",
    description:
      "If you completed the Personalised Automation Plan before booking, I&apos;ll have reviewed your answers ahead of time. That means we skip the basics and go straight to what matters.",
  },
  {
    title: "I Identify the 2–3 Workflows That Will Save the Most Time",
    description:
      "Not everything is worth automating. I find the specific tasks that are costing you the most hours and have the highest return on investment.",
  },
  {
    title: "You Get a Clear Priority List",
    description:
      "What to tackle first, second, third. A practical sequence based on impact, complexity, and what your business needs right now.",
  },
  {
    title: "Honest Assessment — What&apos;s Worth Automating and What Isn&apos;t",
    description:
      "I&apos;ll tell you straight if something isn&apos;t worth the investment. Not every problem needs automation, and I won&apos;t sell you something you don&apos;t need.",
  },
]

const RESULTS = [
  "Clear picture of where your time is going",
  "Prioritised list of what to automate first",
  "Honest assessment — no upselling what you don\u2019t need",
  "Enough information to brief any provider, not just me",
  "Free — no strings attached",
]

const FAQ = [
  {
    question: "Do I need to prepare anything?",
    answer:
      "If you complete the Personalised Automation Plan first, I&apos;ll review your answers before we meet — it makes the call much more productive. Otherwise, just bring a rough idea of your biggest time sinks and we&apos;ll work through it together.",
  },
  {
    question: "Is this a sales call?",
    answer:
      "No. You&apos;ll walk away with actionable recommendations whether you hire me or not. Most people leave with enough clarity to make a decision — some do it themselves, some brief another provider, and some work with me. All good.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the booking link below, or start with the free automation plan at kurtisdunn.com.au/assessment — it takes 4 minutes and gives me useful context before we meet.",
  },
]

export default function AutomationAuditPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Free 30-Minute Automation Audit
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            You know the admin is eating your time, but you don&apos;t know where
            to start. In 30 minutes, I&apos;ll identify the 2–3 workflows that
            will save you the most time and give you a clear priority list. Free,
            no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href={BOOKING_URL} size="lg" ctaLocation="automation-audit-hero">
              Book Your Free Audit
            </CtaButton>
            <span className="text-sm text-text-muted sm:ml-2">
              or{" "}
              <a
                href={ASSESSMENT_URL}
                className="text-primary underline hover:text-primary/80"
              >
                start with the automation plan
              </a>{" "}
              first
            </span>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            You Know There&apos;s a Problem — You Just Don&apos;t Know Where to Start
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              You know the admin is eating your time, but you don&apos;t know
              where to start. Should you automate invoicing first? Fix the
              quoting process? Connect your CRM? Without an expert eye,
              it&apos;s hard to prioritise — and easy to waste money on the wrong
              thing.
            </p>
            <p>The questions keep stacking up:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Which tasks are actually worth automating?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>What order should I do things in?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>How much will it cost, and is it worth it?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Do I need to change my current tools?</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>How do I avoid paying for something that doesn&apos;t work?</span>
              </li>
            </ul>
            <p>
              The audit exists to answer these questions — in 30 minutes, with
              no obligation and no cost.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Happens During the Audit
          </SectionHeading>
          <div className="space-y-8">
            {AUDIT_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What You Walk Away With
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
        heading="Common Questions About the Audit"
      />

      <CtaBand
        headline="Book Your Free 30-Minute Audit"
        body="Pick a time that works, and I&apos;ll walk you through exactly where your business is losing time — and what to do about it. No cost, no obligation."
        buttonText="Book Your Free Audit"
        href={BOOKING_URL}
        supportingText="30 minutes · Free · No obligation"
        ctaLocation="automation-audit-bottom"
      />
    </>
  )
}
