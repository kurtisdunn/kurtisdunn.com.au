import type { Metadata } from "next"
import { Envelope, Clock, MapPin } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { ContactForm } from "@/components/sections/ContactForm"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { SITE_URL, CONTACT, BOOKING_URL, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Kurtis Dunn",
  description:
    "Get in touch about business automation consulting. Based in Australia, working with SMBs nationwide. Book a free automation audit or send a message.",
  alternates: { canonical: `${SITE_URL}/contact` },
}

const CONTACT_FAQ = [
  {
    question: "How quickly do you respond?",
    answer:
      "Same business day for emails. Audit bookings are usually available within the week.",
  },
  {
    question: "Do you work with businesses outside Australia?",
    answer:
      "My focus is Australian SMBs, but I'm open to conversations with businesses in New Zealand and the wider APAC region.",
  },
  {
    question: "Is there a minimum project size?",
    answer:
      "No formal minimum. If the automation makes sense and the ROI is there, the project size doesn't matter.",
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Whether you&apos;ve got a specific project in mind or just want to
            ask a question, I&apos;m here. Based in Australia, working with SMBs
            nationwide.
          </p>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Send a Message
              </h2>
              <p className="mt-2 text-text-secondary">
                Got a question that doesn&apos;t need a call? Use the form below
                and I&apos;ll get back to you within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  Get Your Free Automation Plan
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Answer 4 quick questions and get a personalised plan emailed
                  to you. Takes 4 minutes. Or skip straight to booking a
                  30-minute audit call.
                </p>
                <CtaButton
                  href={ASSESSMENT_URL}
                  ctaLocation="contact-sidebar-primary"
                  className="mt-4"
                >
                  Get Your Free Plan
                </CtaButton>
                <a
                  href={BOOKING_URL}
                  className="mt-2 block text-center text-sm text-text-muted hover:text-primary transition-colors"
                >
                  Or book a 30-minute audit directly →
                </a>
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex gap-3">
                  <Envelope className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Business Hours</p>
                    <p className="text-sm text-text-secondary">{CONTACT.hours}</p>
                    <p className="text-sm text-text-muted">
                      I typically respond within a few hours during business
                      hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Based in Australia</p>
                    <p className="text-sm text-text-secondary">
                      I work with businesses across Australia — Sydney,
                      Melbourne, Brisbane, Perth, Adelaide, and everywhere in
                      between. All work is delivered remotely.
                    </p>
                    {CONTACT.abn && (
                      <p className="mt-1 text-sm text-text-muted">
                        ABN: {CONTACT.abn}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={CONTACT_FAQ} heading="Frequently Asked Questions" />

      <CtaBand
        headline="Not Sure What You Need Yet?"
        body="Answer 4 questions about your business and get a personalised automation plan — your top opportunities, time savings estimates, and what to tackle first. Free, no obligation."
        ctaLocation="contact-bottom"
      />
    </>
  )
}
