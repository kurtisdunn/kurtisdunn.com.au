import type { Metadata } from "next"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaBand } from "@/components/sections/CtaBand"
import { INDUSTRIES } from "@/data/industries"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Business automation for trades, professional services, accounting, healthcare, property, and legal. Built for Australian SMBs.",
  alternates: { canonical: `${SITE_URL}/industries` },
}

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Built for Businesses Like Yours
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            I work with Australian service businesses — the kind where admin
            grows faster than revenue. If your team spends more time on
            paperwork than the actual work, we should talk.
          </p>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>Choose Your Industry</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <industry.icon
                  className="h-8 w-8 text-primary"
                  aria-hidden="true"
                />
                <h2 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {industry.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {industry.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {industry.linkText}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Not Sure Which Category Fits?"
        body="Answer 4 questions about your business and get a personalised automation plan — specific recommendations, time savings estimates, free. Works for any service business."
        ctaLocation="industries-bottom"
      />
    </>
  )
}
