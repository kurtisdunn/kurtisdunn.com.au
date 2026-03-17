import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Automated Reporting & Live Dashboards",
  description:
    "Stop rebuilding the same report every Monday. Live dashboards and automated reports that pull from Xero, MYOB, and your job management tools. $2K–$8K.",
  alternates: { canonical: `${SITE_URL}/services/reporting-dashboards` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "Automated Reporting & Live Dashboards",
  areaServed: { "@type": "Country", name: "Australia" },
}

const AUTOMATION_FLOWS = [
  {
    title: "Financial Data → Auto-Pulled Into Dashboard",
    description:
      "Revenue, expenses, profit margins — pulled directly from Xero or MYOB and displayed in a live dashboard. No spreadsheets, no manual exports.",
  },
  {
    title: "Job Data → Live Status Board",
    description:
      "Every job&apos;s status — in progress, complete, invoiced, paid — visible at a glance. Updated automatically as your team works.",
  },
  {
    title: "Overdue Invoices → Flagged With Ageing Breakdown",
    description:
      "Outstanding invoices surface automatically with a clear ageing breakdown — 7 days, 14 days, 30+ days. No digging through Xero to find who hasn&apos;t paid.",
  },
  {
    title: "Team Utilisation → Tracked and Visualised",
    description:
      "See who&apos;s busy, who&apos;s available, and where capacity sits — without asking your team to fill in timesheets.",
  },
  {
    title: "Weekly/Monthly Reports → Auto-Generated and Emailed",
    description:
      "Stakeholder reports are compiled from live data and delivered to the right inboxes on schedule. No one has to build them.",
  },
]

const RESULTS = [
  "Reports that update themselves — no rebuilding every week",
  "Always-current financial visibility",
  "No more Friday afternoon report scramble",
  "Overdue invoices spotted immediately, not weeks later",
  "Decisions based on today\u2019s data, not last week\u2019s",
]

const FAQ = [
  {
    question: "What tools can you pull data from?",
    answer:
      "Anything with an API — Xero, MYOB, QuickBooks, ServiceM8, HubSpot, Google Sheets, Tradify, and more. If your tool stores the data, I can pull it into a dashboard.",
  },
  {
    question: "Do I need special software to view dashboards?",
    answer:
      "No. Dashboards are browser-based and work on any device — desktop, tablet, or phone. Just open a link.",
  },
  {
    question: "Can I customise what I see?",
    answer:
      "Yes. Dashboards are built around the metrics that matter to your business. You tell me what numbers you check every week, and I&apos;ll make sure they&apos;re front and centre.",
  },
]

export default function ReportingDashboardsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Automated Reporting &amp; Live Dashboards
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Stop rebuilding the same report every Monday morning. Get live
            dashboards and automated reports that pull from your existing tools
            and update themselves. $2,000 – $8,000.
          </p>
          <div className="mt-8">
            <CtaButton href={ASSESSMENT_URL} size="lg" ctaLocation="reporting-dashboards-hero">
              Get Your Free Automation Plan
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Your Reports Are Outdated Before They&apos;re Finished
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Every Monday morning someone rebuilds a report from scratch.
              Pulling numbers from Xero, cross-referencing job management,
              checking outstanding invoices. It takes hours, it&apos;s always
              slightly wrong, and by Wednesday it&apos;s already outdated.
            </p>
            <p>The same cycle, every week:</p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Exporting CSVs from two or three different systems</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Copy-pasting numbers into a spreadsheet template</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Manually checking which invoices are overdue</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Asking the team for updates on job progress</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Formatting and emailing the report to stakeholders</span>
              </li>
            </ul>
            <p>
              By the time the report is done, the numbers have already changed.
              You&apos;re making decisions on stale data — and wasting hours
              producing it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automated Reporting Looks Like
          </SectionHeading>
          <div className="space-y-8">
            {AUTOMATION_FLOWS.map((flow, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {flow.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What Automated Reporting Delivers
          </SectionHeading>
          <ul className="space-y-3">
            {RESULTS.map((result) => (
              <li key={result} className="flex gap-3">
                <CheckCircle
                  className="h-5 w-5 shrink-0 text-cta mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-text-secondary">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        items={FAQ}
        heading="Common Questions About Reporting & Dashboards"
      />

      <CtaBand
        headline="Stop Rebuilding Reports — Start Reading Them"
        body="Answer 4 questions about your business and get a personalised automation plan emailed to you — including how to automate the reporting that&apos;s eating your week. Free."
        ctaLocation="reporting-dashboards-bottom"
      />
    </>
  )
}
