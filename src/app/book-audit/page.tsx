import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, BOOKING_EMBED_URL, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Book Your Free 30-Minute Automation Audit",
  description:
    "Book a free 30-minute automation audit. I'll identify where your business is losing time to manual work and show you what to automate first. No cost, no obligation.",
  alternates: { canonical: `${SITE_URL}/book-audit` },
}

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Free 30-Minute Automation Audit",
  description:
    "A free consultation to identify where your business is losing time to manual work and recommend what to automate first.",
  organizer: {
    "@type": "Person",
    name: "Kurtis Dunn",
    url: SITE_URL,
  },
  isAccessibleForFree: true,
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
}

const WHAT_YOU_GET = [
  {
    title: "A clear map of where you're losing time",
    description:
      "I'll ask you a few questions about how your business runs day-to-day. Between us, we'll identify the 3–5 tasks that are costing you the most hours every week.",
  },
  {
    title: "A priority list of what to automate first",
    description:
      "Not everything should be automated at once. I'll tell you which 2–3 automations would give you the biggest return for the least effort.",
  },
  {
    title: "A rough idea of cost and timeline",
    description:
      "No formal quote (that comes later if you want one) — but you'll leave knowing whether we're talking days or weeks, and hundreds or thousands.",
  },
  {
    title: "An honest opinion on whether automation even makes sense for you",
    description:
      "If your business isn't ready for automation, or if the ROI isn't there, I'll tell you. I'd rather give you a useful 30 minutes than waste both our time.",
  },
]

const WHO_ITS_FOR = [
  "Business owners who know they're wasting time on admin but don't know where to start",
  "Ops managers who are drowning in manual processes and need a second opinion",
  "Growing teams (5–50 staff) where the admin is scaling faster than the revenue",
  "Service businesses — trades, professional services, accounting, healthcare, property, legal",
]

const AUDIT_FAQ = [
  {
    question: "Is this actually free?",
    answer:
      "Yes. No credit card. No hidden fees. No follow-up invoice. It's a genuine 30-minute conversation where I show you what's possible. If you want to work together after that, great. If not, you still walk away with a useful action plan.",
  },
  {
    question: "Should I complete the automation plan first?",
    answer:
      "If you have 4 minutes, yes. Complete the free automation plan at /assessment and I'll review your answers before we meet — so we skip the basics and spend the full 30 minutes on what matters.",
  },
  {
    question: "Will you try to sell me something?",
    answer:
      "I'll tell you what I'd recommend and roughly what it would cost. But there's no hard sell. Most people who book an audit end up working with me because the value is obvious — not because I pressured them.",
  },
  {
    question: "I'm not technical — will I understand what you're talking about?",
    answer:
      "Absolutely. I explain everything in plain English. If I use a word you don't know, tell me and I'll rephrase. My job is to make this simple, not impressive.",
  },
  {
    question: "What do I need to prepare?",
    answer:
      "Nothing. Just show up and be ready to talk about how your business runs day-to-day. If you've done the automation plan, even better — I'll have already started thinking about your situation.",
  },
  {
    question: "What happens after the call?",
    answer:
      "If you want to move forward, I'll send you a proposal with a fixed price, clear scope, and timeline. If you don't, no worries — the audit insights are yours to keep.",
  },
]

export default function BookAuditPage() {
  return (
    <>
      <JsonLd data={eventSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
                Your Free 30-Minute Automation Audit
              </h1>
              <p className="mt-6 text-xl text-text-secondary">
                In one focused call, I&apos;ll identify exactly where your
                business is losing time to manual work — and show you what to
                automate first. No cost. No obligation. No sales pitch.
              </p>
              <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-text-primary">
                  Get more from the call
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  Complete the free automation plan first. I&apos;ll review your
                  answers before we meet so we can spend the full 30 minutes on
                  specifics.
                </p>
                <CtaButton
                  href={ASSESSMENT_URL}
                  size="default"
                  ctaLocation="book-audit-pre-cta"
                  className="mt-3"
                >
                  Get Your Free Automation Plan First
                </CtaButton>
              </div>
              <div className="mt-6">
                <CtaButton href="#booking" size="lg" ctaLocation="book-audit-hero">
                  Or Book Your Audit Now
                </CtaButton>
                <p className="mt-2 text-sm text-text-muted">
                  Choose a time that works. Takes 30 seconds.
                </p>
              </div>
            </div>

            <div
              id="booking"
              className="overflow-hidden rounded-lg border border-border bg-white"
            >
              <iframe
                src={BOOKING_EMBED_URL}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book your free 30-minute automation audit"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>What Happens in the Audit</SectionHeading>
          <p className="mb-8 text-center text-lg text-text-secondary">
            This isn&apos;t a sales call. It&apos;s a working session. Here&apos;s
            what you&apos;ll walk away with:
          </p>
          <div className="space-y-6">
            {WHAT_YOU_GET.map((item, i) => (
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>This Audit Is Built For</SectionHeading>
          <ul className="space-y-3">
            {WHO_ITS_FOR.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle
                  className="h-5 w-5 shrink-0 text-cta mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-text-secondary">
            If you&apos;ve ever thought &ldquo;there has to be a better way to
            do this,&rdquo; there probably is. Let&apos;s find it.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={AUDIT_FAQ}
        heading="A Few Things You Might Be Wondering"
      />

      <TestimonialCarousel />

      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            30 Minutes Could Save You 15 Hours a Week
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Pick a time below. I&apos;ll ask a few questions about how your
            business runs, and you&apos;ll leave with a clear picture of where to
            start.
          </p>
          <div className="mt-8">
            <CtaButton
              href="#booking"
              size="lg"
              ctaLocation="book-audit-bottom"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-lg"
            >
              Book Your Free Audit Now
            </CtaButton>
            <p className="mt-2 text-sm text-white/70">
              Available this week. Morning and afternoon slots.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
