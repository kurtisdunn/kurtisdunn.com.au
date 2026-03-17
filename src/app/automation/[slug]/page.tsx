import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, ASSESSMENT_URL } from "@/lib/constants"
import { PSEO_INDUSTRIES } from "@/data/pseo/industries"
import type { PseoIndustry } from "@/data/pseo/industries"
import { PSEO_LOCATIONS } from "@/data/pseo/locations"
import type { PseoLocation } from "@/data/pseo/locations"
import { PSEO_USE_CASES } from "@/data/pseo/use-cases"
import type { PseoUseCase } from "@/data/pseo/use-cases"
import type { FaqItem } from "@/data/faq"

type PageProps = {
  params: Promise<{ slug: string }>
}

function resolveSlug(slug: string): {
  type: "industry-location"
  industry: PseoIndustry
  location: PseoLocation
} | {
  type: "use-case"
  useCase: PseoUseCase
} | null {
  // Try to match industry-location pattern
  const location = PSEO_LOCATIONS.find((l) => slug.endsWith(`-${l.slug}`))
  if (location) {
    const industrySlug = slug.replace(`-${location.slug}`, "")
    const industry = PSEO_INDUSTRIES.find((i) => i.slug === industrySlug)
    if (industry) {
      return { type: "industry-location", industry, location }
    }
  }

  // Otherwise check use cases
  const useCase = PSEO_USE_CASES.find((uc) => uc.slug === slug)
  if (useCase) {
    return { type: "use-case", useCase }
  }

  return null
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []

  // Industry × Location combinations
  for (const industry of PSEO_INDUSTRIES) {
    for (const location of PSEO_LOCATIONS) {
      params.push({ slug: `${industry.slug}-${location.slug}` })
    }
  }

  // Use-case pages
  for (const useCase of PSEO_USE_CASES) {
    params.push({ slug: useCase.slug })
  }

  return params
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resolved = resolveSlug(slug)

  if (!resolved) {
    return { title: "Not Found" }
  }

  if (resolved.type === "industry-location") {
    const { industry, location } = resolved
    const title = `Business Automation for ${industry.name} in ${location.name} | ${SITE_NAME}`
    const description = `Automate quoting, invoicing, job management, and reporting for ${industry.name.toLowerCase()} businesses in ${location.name}. Save 10+ hours per week on admin.`
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${SITE_URL}/automation/${slug}`,
        siteName: SITE_NAME,
        type: "website",
      },
      alternates: {
        canonical: `${SITE_URL}/automation/${slug}`,
      },
    }
  }

  const { useCase } = resolved
  const title = `Automate ${useCase.title} \u2014 Save Hours Every Week | ${SITE_NAME}`
  const description = `Automate ${useCase.title.toLowerCase()} for your small business. ${useCase.hoursSaved} saved. Tools: ${useCase.tools.slice(0, 3).join(", ")}.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/automation/${slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    alternates: {
      canonical: `${SITE_URL}/automation/${slug}`,
    },
  }
}

function IndustryLocationPage({
  industry,
  location,
}: {
  industry: PseoIndustry
  location: PseoLocation
}) {
  const intro = location.intros[industry.slug] || ""

  const faqItems: FaqItem[] = [
    ...industry.faq,
    {
      question: `Do you work with ${industry.name.toLowerCase()} businesses in ${location.name}?`,
      answer: `Yes. I work remotely with businesses across Australia, including ${location.name}. All projects are delivered via video calls and screen sharing \u2014 so you get the same level of service regardless of location.`,
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Business Automation for ${industry.name}`,
    description: `Workflow automation consulting for ${industry.name.toLowerCase()} businesses in ${location.name}, ${location.state}.`,
    provider: {
      "@type": "Person",
      name: "Kurtis Dunn",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "State",
        name: location.state,
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    },
    serviceType: "Business Automation Consulting",
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
            Business Automation for {industry.name} in {location.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            {intro}
          </p>
          <div className="mt-8">
            <Link
              href={ASSESSMENT_URL}
              className="inline-flex items-center justify-center rounded-md bg-cta px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:-translate-y-px active:translate-y-0"
            >
              Get Your Free Automation Plan
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Takes 4 minutes &middot; Free &middot; Personalised plan emailed to you
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            The Admin Problem for {location.name} {industry.name} Businesses
          </SectionHeading>
          <ul className="space-y-4">
            {industry.painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Automations */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What We Automate
          </SectionHeading>
          <ol className="space-y-8">
            {industry.automations.map((auto, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {auto.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{auto.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Results */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Typical Results
          </SectionHeading>
          <ul className="space-y-4">
            {industry.results.map((result, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-text-secondary"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
                <span className="text-lg">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Tools We Work With
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            {industry.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion items={faqItems} heading="Frequently Asked Questions" />

      {/* CTA */}
      <CtaBand
        headline={`Ready to Automate Your ${location.name} ${industry.name} Business?`}
        body="Start with your free personalised automation plan. Answer 4 questions about your business and get specific recommendations — what to automate first, estimated time savings, all emailed to you."
        buttonText="Get Your Free Automation Plan"
        href={ASSESSMENT_URL}
        ctaLocation={`pseo-${industry.slug}-${location.slug}`}
      />
    </>
  )
}

function UseCasePage({ useCase }: { useCase: PseoUseCase }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${useCase.title} Automation`,
    description: useCase.problem.slice(0, 200),
    provider: {
      "@type": "Person",
      name: "Kurtis Dunn",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Business Automation Consulting",
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl lg:leading-tight">
            Automate {useCase.title} &mdash; Save Hours Every Week
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Crosshair: <strong>{useCase.hoursSaved}</strong> saved.
            Based on typical results across Australian SMBs.
          </p>
          <div className="mt-8">
            <Link
              href={ASSESSMENT_URL}
              className="inline-flex items-center justify-center rounded-md bg-cta px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:-translate-y-px active:translate-y-0"
            >
              Get Your Free Automation Plan
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Takes 4 minutes &middot; Free &middot; Personalised plan emailed to you
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            The Problem
          </SectionHeading>
          <p className="text-lg leading-relaxed text-text-secondary">
            {useCase.problem}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            How It Works
          </SectionHeading>
          <ol className="space-y-8">
            {useCase.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Most Common In
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCase.industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="rounded-lg border border-border bg-white p-5 transition-all hover:border-primary hover:shadow-md"
              >
                <span className="font-heading text-base font-semibold text-text-primary">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Tools We Use
          </SectionHeading>
          <div className="flex flex-wrap gap-3">
            {useCase.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Callout */}
      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white p-8 text-center">
            <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
              {useCase.hoursSaved}
            </p>
            <p className="mt-2 text-text-secondary">
              Based on typical results across Australian SMBs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion items={useCase.faq} heading="Frequently Asked Questions" />

      {/* CTA */}
      <CtaBand
        headline={`Ready to Automate ${useCase.title}?`}
        body="Start with your free personalised automation plan. Answer 4 questions about your business and get specific recommendations — what to automate first, estimated time savings, all emailed to you."
        buttonText="Get Your Free Automation Plan"
        href={ASSESSMENT_URL}
        ctaLocation={`pseo-${useCase.slug}`}
      />
    </>
  )
}

export default async function AutomationPage({ params }: PageProps) {
  const { slug } = await params
  const resolved = resolveSlug(slug)

  if (!resolved) {
    notFound()
  }

  if (resolved.type === "industry-location") {
    return (
      <IndustryLocationPage
        industry={resolved.industry}
        location={resolved.location}
      />
    )
  }

  return <UseCasePage useCase={resolved.useCase} />
}
