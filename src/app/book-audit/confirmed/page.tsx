import type { Metadata } from "next"
import { CheckCircle, Calendar, Clock, Envelope } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { SITE_URL, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Audit Booked — You're Confirmed",
  description: "Your free automation audit is booked. Here's what to expect next.",
  alternates: { canonical: `${SITE_URL}/book-audit/confirmed` },
  robots: { index: false, follow: false },
}

const NEXT_STEPS = [
  {
    icon: Calendar,
    title: "Check your calendar invite",
    description:
      "A confirmation has been sent to your email with a calendar invite. Add it to your calendar now so it doesn't slip through.",
  },
  {
    icon: Clock,
    title: "Show up ready to talk",
    description:
      "No preparation needed. Just be ready to walk me through how your business runs day-to-day. I'll guide the conversation.",
  },
  {
    icon: Envelope,
    title: "Questions before the call?",
    description: `Email me at ${CONTACT.email} and I'll get back to you same business day.`,
  },
]

export default function BookAuditConfirmedPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <CheckCircle
              className="h-16 w-16 text-cta"
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-6 font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            You&apos;re Booked
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Your free 30-minute automation audit is confirmed. A calendar invite
            is on its way to your inbox now.
          </p>
          <p className="mt-4 text-lg text-text-secondary">
            I&apos;m looking forward to talking through your business and
            showing you where you can get time back.
          </p>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            What Happens Next
          </h2>
          <div className="mt-8 space-y-8">
            {NEXT_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4">
                <step.icon
                  className="h-6 w-6 shrink-0 text-primary mt-0.5"
                  aria-hidden="true"
                />
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            While You Wait
          </h2>
          <p className="mt-4 text-text-secondary">
            Get a feel for how I work and what I can help with.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              See My Services
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary"
            >
              About Kurtis
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
