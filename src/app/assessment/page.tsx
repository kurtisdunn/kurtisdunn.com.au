import type { Metadata } from "next"
import { AssessmentPageClient } from "@/components/sections/AssessmentPageClient"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Free Personalised Automation Plan for Your Business",
  description:
    "Answer 4 questions about your business and get a free AI-generated automation plan — your top opportunities, time savings estimates, and what to tackle first. AI-powered. Sent to your email instantly.",
  alternates: { canonical: `${SITE_URL}/assessment` },
}

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Free · Takes about 4 minutes · No obligation
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Get Your Personalised Automation Plan
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Tell me how your business runs. I&apos;ll generate a specific plan —
            your top automation opportunities, estimated time savings per week,
            and a prioritised list of what to tackle first. AI-powered. Free, and sent straight to your email.
          </p>
        </div>
      </section>

      <section className="bg-surface-alt pb-20 pt-2 sm:pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <AssessmentPageClient />
        </div>
      </section>
    </>
  )
}
