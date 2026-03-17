import type { Metadata } from "next"
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaBand } from "@/components/sections/CtaBand"
import { CtaButton } from "@/components/shared/CtaButton"
import { JsonLd } from "@/components/shared/JsonLd"
import { SERVICES } from "@/data/services"
import { SITE_URL, SITE_NAME, BOOKING_URL, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Business Automation & Custom Application Development Services",
  description:
    "Workflow automation, AI assistants, reporting dashboards, and custom AWS application development for Australian SMBs. Built to last, documented to hand over.",
  alternates: { canonical: `${SITE_URL}/services` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
  },
  serviceType: "Business Automation & Application Development",
  areaServed: { "@type": "Country", name: "Australia" },
}

const AUTOMATION_PROCESS = [
  { step: "Audit", description: "We map your current processes and identify exactly where the time is being lost." },
  { step: "Proposal", description: "You get a fixed-price quote with a clear scope and timeline — no surprises." },
  { step: "Build", description: "I design and build your automations, testing at every step." },
  { step: "Document", description: "Every automation gets plain-English documentation your team can follow without me." },
  { step: "Handover", description: "I train your team, make sure everything works, and hand over all access." },
  { step: "Support", description: "Optional ongoing support to keep things running and evolving as your business changes." },
]

const BUILD_WHAT = [
  "Internal job management and operations tools",
  "Client-facing portals (job submission, progress tracking, payments)",
  "Custom booking and scheduling systems",
  "Business intelligence and reporting dashboards",
  "Integration platforms that connect your entire stack under one roof",
  "Admin tools that replace clunky spreadsheet-based processes",
]

const BUILD_PROCESS = [
  { step: "Discovery", description: "We talk through what you need, how your business works, and what existing tools you want to keep or replace." },
  { step: "Scope & Quotes", description: "I map out the application architecture and give you a fixed-price proposal with milestones and timeline." },
  { step: "Design", description: "I build the interface and flow before writing a line of production code — so you can give feedback early." },
  { step: "Build & Test", description: "Full-stack development on AWS, with regular demos so you see progress as it happens." },
  { step: "Deploy", description: "Production deployment on AWS infrastructure — secure, scalable, and set up properly from day one." },
  { step: "Handover & Support", description: "Full documentation, training, and access to everything. Optional ongoing support and hosting management." },
]

// Only show the automation services (not custom build) in the main grid
const AUTOMATION_SERVICES = SERVICES.filter((s) => s.title !== "Custom Application Development")

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Two Ways I Can Help Your Business Run Better
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Most businesses need one of two things: their existing tools
            connected and automated, or something purpose-built for how they
            work. I do both — and I&apos;ll tell you honestly which one makes
            sense for you.
          </p>
        </div>
      </section>

      {/* Automation services */}
      <section className="bg-surface-alt py-16 sm:py-20" id="automation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Workflow Automation
          </SectionHeading>
          <p className="mb-8 max-w-2xl text-lg text-text-secondary">
            Connect your existing tools so the manual handoffs happen
            automatically. Best fit for most businesses with 5–50 staff using
            standard software.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_SERVICES.map((svc) => (
              <div
                key={svc.title}
                id={svc.href.includes("#") ? svc.href.split("#")[1] : undefined}
                className="rounded-lg border border-border bg-white p-6"
              >
                <svc.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {svc.description}
                </p>
                <Link
                  href={svc.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>How Every Automation Project Works</SectionHeading>
          <ol className="space-y-6">
            {AUTOMATION_PROCESS.map((ps, i) => (
              <li key={ps.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {ps.step}
                  </h3>
                  <p className="mt-1 text-text-secondary">{ps.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <CtaButton href={ASSESSMENT_URL} size="lg" ctaLocation="services-automation-cta">
              Get Your Free Automation Plan
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Custom build section */}
      <section className="bg-surface-alt py-16 sm:py-20" id="custom-build">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                Custom Application Development
              </p>
              <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
                When Off-the-Shelf Tools Don&apos;t Fit
              </h2>
              <p className="mt-5 text-lg text-text-secondary">
                Some businesses have workflows that are genuinely unique. When
                no combination of Zapier and existing software will do the job,
                I build a purpose-built application from scratch — designed
                around how your business actually works, deployed on AWS
                infrastructure that scales with you.
              </p>
              <p className="mt-4 text-lg text-text-secondary">
                I&apos;m an AWS Certified Solutions Architect and AWS Certified
                DevOps Engineer. That means the applications I build aren&apos;t
                just functional — they&apos;re architected properly, deployed
                securely, and built to hand over.
              </p>

              <div className="mt-8">
                <CtaButton href="/contact" size="lg" ctaLocation="services-custom-build-cta">
                  Talk to Me About a Custom Build
                </CtaButton>
                <p className="mt-2 text-sm text-text-muted">
                  No commitment. I&apos;ll tell you if automation is a better fit.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  What I build
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {BUILD_WHAT.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cta mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm font-medium text-text-primary">
                  Typical budget range
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-primary">
                  $15,000 – $80,000+
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Scoped and fixed-price. No hourly billing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom build process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>How a Custom Build Works</SectionHeading>
          <ol className="space-y-6">
            {BUILD_PROCESS.map((ps, i) => (
              <li key={ps.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {ps.step}
                  </h3>
                  <p className="mt-1 text-text-secondary">{ps.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        headline="Not Sure Which Path Is Right for You?"
        body="Start with the free automation plan — 4 questions, personalised recommendations, free. Or book a 30-minute audit if you'd rather talk through it first."
        ctaLocation="services-bottom"
      />
    </>
  )
}
