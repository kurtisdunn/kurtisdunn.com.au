import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero"
import { MetricStrip } from "@/components/sections/MetricStrip"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { SolutionSection } from "@/components/sections/SolutionSection"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { IndustryCards } from "@/components/sections/IndustryCards"
import { BuildSection } from "@/components/sections/BuildSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { CtaBand } from "@/components/sections/CtaBand"
import { JsonLd } from "@/components/shared/JsonLd"
import { HOMEPAGE_FAQ } from "@/data/faq"
import { SITE_NAME, SITE_URL, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Business Automation Consulting for Australian SMBs",
  description:
    "I help Australian small businesses automate quoting, invoicing, onboarding, reporting and follow-ups. Save 10-20 hours a week. Book a free 15-minute automation audit.",
  alternates: { canonical: SITE_URL },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT.email,
  description:
    "Business automation consulting for Australian SMBs. Workflow design, AI chatbot setup, reporting dashboards, and ongoing support.",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: "Business Automation Consulting",
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <MetricStrip />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <IndustryCards />
      <BuildSection />
      <TrustSection />
      <TestimonialCarousel />
      <FaqAccordion items={HOMEPAGE_FAQ} />
      <CtaBand />
    </>
  )
}
