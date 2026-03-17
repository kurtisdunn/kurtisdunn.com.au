import Link from "next/link"
import { SITE_NAME, CONTACT, BOOKING_URL } from "@/lib/constants"
import { NewsletterForm } from "@/components/shared/NewsletterForm"

const SERVICE_LINKS = [
  { label: "Automation Audit", href: "/services/automation-audit" },
  { label: "Workflow Automation", href: "/services/workflow-automation" },
  { label: "AI Automations & Chatbots", href: "/services/ai-automations" },
  { label: "Reporting & Dashboards", href: "/services/reporting-dashboards" },
  { label: "Ongoing Support", href: "/services/ongoing-support" },
]

const RESOURCE_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Free Automation Plan", href: "/assessment" },
]

const INDUSTRY_LINKS = [
  { label: "Trades & Field Service", href: "/industries/trades" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Accounting & Finance", href: "/industries/accounting" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Property & Real Estate", href: "/industries/property" },
  { label: "Legal", href: "/industries/legal" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-heading font-bold text-primary">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Business automation consulting for Australian SMBs. I help small businesses stop doing manually what software can handle automatically.
            </p>
            <p className="mt-3 text-xs text-text-muted">
              Australian-owned &amp; operated
            </p>
            {CONTACT.abn && (
              <p className="mt-1 text-xs text-text-muted">ABN: {CONTACT.abn}</p>
            )}
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-text-primary">Services</h3>
            <ul className="mt-3 space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-text-primary">Industries</h3>
            <ul className="mt-3 space-y-2">
              {INDUSTRY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-text-primary">Resources</h3>
            <ul className="mt-3 space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-sm font-semibold text-text-primary mt-6">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {CONTACT.email}
                </a>
              </li>
              {CONTACT.phone && (
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="transition-colors hover:text-primary"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
              )}
              <li>{CONTACT.hours}</li>
            </ul>
            <div className="mt-4">
              <Link
                href={BOOKING_URL}
                className="inline-flex items-center text-sm font-semibold text-cta transition-colors hover:text-cta-hover"
              >
                Book Your Free Audit &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-10 rounded-lg border border-border bg-surface-alt p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="sm:max-w-sm">
              <h3 className="font-heading text-sm font-semibold text-text-primary">
                Automation tips for Aussie businesses
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Join 500+ business owners getting practical tips on what to automate, which tools to use, and how to save 10+ hours a week.
              </p>
            </div>
            <div className="w-full sm:w-auto sm:min-w-[320px]">
              <NewsletterForm />
              <p className="mt-2 text-xs text-text-muted">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <nav className="flex gap-4" aria-label="Legal">
            <Link href="/privacy" className="text-xs text-text-muted transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted transition-colors hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
