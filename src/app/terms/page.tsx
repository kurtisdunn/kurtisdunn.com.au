import type { Metadata } from "next"
import { SITE_URL, SITE_NAME, CONTACT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE_NAME}.`,
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-text-muted">Last updated: March 2026</p>

        <div className="mt-10 space-y-8 text-text-secondary">
          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Using This Site
            </h2>
            <p className="mt-3">
              By accessing kurtisdunn.com.au, you agree to use this site for
              lawful purposes only. You must not use this site in any way that
              breaches applicable law or infringes the rights of others.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this site — including text, graphics, and code — is
              the property of {SITE_NAME} unless otherwise stated. You may not
              reproduce, distribute, or republish any content without prior
              written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              No Warranties
            </h2>
            <p className="mt-3">
              This site is provided on an &ldquo;as is&rdquo; basis. I make no
              warranties — express or implied — regarding the accuracy,
              completeness, or fitness for purpose of any information on this
              site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              To the extent permitted by Australian law, {SITE_NAME} is not
              liable for any direct, indirect, or consequential loss arising from
              your use of this site or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Third-Party Links
            </h2>
            <p className="mt-3">
              This site may contain links to external websites. I am not
              responsible for the content or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of Australia. Any disputes
              will be subject to the jurisdiction of Australian courts.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-text-primary">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms? Contact me at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-primary hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
