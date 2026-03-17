import type { Metadata } from "next"
import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME} — how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: March 2026</p>

        <div className="mt-10 space-y-8 text-text-secondary">
          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Who We Are
            </h2>
            <p className="mt-3">
              {SITE_NAME} (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo;)
              is a business automation consulting service based in Australia.
              This privacy policy explains how I collect, use, and protect
              personal information in accordance with the Australian Privacy Act
              1988 and the Australian Privacy Principles (APPs).
            </p>
            <p className="mt-3">
              For any privacy-related enquiries, contact me at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-primary hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Information I Collect
            </h2>
            <p className="mt-3">
              I collect personal information only when you voluntarily provide
              it — for example, when you:
            </p>
            <ul className="mt-3 space-y-1 pl-5 list-disc">
              <li>Book an automation audit via a scheduling tool</li>
              <li>Submit a contact form enquiry</li>
              <li>Send an email directly</li>
            </ul>
            <p className="mt-3">
              The information collected typically includes your name, email
              address, business name, and the content of your enquiry.
            </p>
            <p className="mt-3">
              I also collect non-personal analytics data (page views, session
              duration, referral source) via Google Analytics to understand how
              visitors use this site. This data is aggregated and does not
              identify individuals.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              How I Use Your Information
            </h2>
            <p className="mt-3">
              Personal information is used solely to respond to your enquiry,
              deliver services you&apos;ve engaged me for, and communicate about
              your project. I do not sell, rent, or share your personal
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Data Storage & Security
            </h2>
            <p className="mt-3">
              Your information is stored in standard business tools (email,
              scheduling software, project management platforms) with appropriate
              security controls. I take reasonable steps to protect personal
              information from misuse, loss, unauthorised access, and disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Your Rights
            </h2>
            <p className="mt-3">
              Under the Australian Privacy Act, you have the right to access,
              correct, or request deletion of personal information I hold about
              you. To exercise these rights, contact me at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-primary hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Changes to This Policy
            </h2>
            <p className="mt-3">
              I may update this policy from time to time. Material changes will
              be noted with an updated &ldquo;Last updated&rdquo; date at the
              top of this page.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
