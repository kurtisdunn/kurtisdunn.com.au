"use client"

import { useState, type FormEvent } from "react"
import { Check } from "@phosphor-icons/react"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { ASSESSMENT_URL } from "@/lib/constants"
import { trackFormSubmit } from "@/lib/analytics"

const INDUSTRIES = [
  "Trades & Construction",
  "Professional Services",
  "Accounting & Bookkeeping",
  "Healthcare",
  "Property Management",
  "Legal",
  "Other",
]

const TEAM_SIZES = ["1–5", "6–10", "11–20", "21–50", "50+"]

function getTypicalProjectCost(teamSize: string): number {
  switch (teamSize) {
    case "1–5":
      return 3000
    case "6–10":
      return 5000
    case "11–20":
      return 7000
    case "21–50":
      return 10000
    case "50+":
      return 15000
    default:
      return 5000
  }
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export default function RoiCalculatorPage() {
  const [industry, setIndustry] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [hours, setHours] = useState("")
  const [hourlyCost, setHourlyCost] = useState("")
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const [emailSending, setEmailSending] = useState(false)

  const hoursNum = parseFloat(hours)
  const hourlyCostNum = parseFloat(hourlyCost)
  const showResults = hoursNum > 0 && hourlyCostNum > 0

  const automatable = hoursNum * 0.6
  const weeklySavings = automatable * hourlyCostNum
  const annualSavings = weeklySavings * 52
  const typicalProjectCost = getTypicalProjectCost(teamSize)
  const paybackWeeks = weeklySavings > 0 ? Math.ceil(typicalProjectCost / weeklySavings) : 0

  async function handleEmailResults(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setEmailSending(true)

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "roi-calculator",
          context: `Industry: ${industry || "N/A"}, Team: ${teamSize || "N/A"}, ${hours}h/wk admin @ $${hourlyCost}/h, Annual savings: ${formatCurrency(annualSavings)}, Payback: ${paybackWeeks} weeks`,
        }),
      })
      trackFormSubmit("roi_calculator_email")
      setEmailSent(true)
    } catch {
      setEmailSent(true)
    } finally {
      setEmailSending(false)
    }
  }

  const inputStyles =
    "w-full rounded-md border border-border bg-white px-3 py-2 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
  const labelStyles = "block text-sm font-medium text-text-primary mb-1.5"

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            How Much Is Manual Admin Costing Your Business?
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Enter your numbers below to see what automation could save you
            &mdash; weekly, monthly, and annually.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="industry" className={labelStyles}>
                  Industry
                </label>
                <select
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className={inputStyles}
                >
                  <option value="">Select your industry</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="teamSize" className={labelStyles}>
                  Team size
                </label>
                <select
                  id="teamSize"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className={inputStyles}
                >
                  <option value="">Select team size</option>
                  {TEAM_SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="hours" className={labelStyles}>
                  Hours spent on admin per week (whole team)
                </label>
                <input
                  id="hours"
                  type="number"
                  min="0"
                  placeholder="e.g. 20"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="hourlyCost" className={labelStyles}>
                  Average hourly cost of staff (AUD)
                </label>
                <input
                  id="hourlyCost"
                  type="number"
                  min="0"
                  placeholder="e.g. 45"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(e.target.value)}
                  className={inputStyles}
                />
              </div>
            </div>
          </div>

          {showResults && (
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-surface-alt p-6 text-center">
                  <p className="font-heading text-3xl font-bold text-primary">
                    {formatCurrency(weeklySavings)}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">per week</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-alt p-6 text-center">
                  <p className="font-heading text-3xl font-bold text-primary">
                    {formatCurrency(annualSavings)}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">per year</p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
                  <p className="font-heading text-3xl font-bold text-primary">
                    {paybackWeeks} {paybackWeeks === 1 ? "week" : "weeks"}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">payback period</p>
                </div>
              </div>

              <p className="mt-6 text-sm text-text-muted">
                Based on 60% of admin tasks being automatable &mdash; a
                conservative estimate for most businesses with 5&ndash;50 staff.
              </p>

              {/* Email capture */}
              <div className="mt-8 rounded-lg border border-border bg-surface-alt p-5">
                {emailSent ? (
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cta/10">
                      <Check className="h-4 w-4 text-cta" />
                    </div>
                    <p className="text-text-secondary">
                      Results sent! Check your inbox for your ROI breakdown
                      and tips on what to automate first.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-medium text-text-primary">
                      Want a copy of these results?
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      I&apos;ll email your ROI breakdown plus tips on where to
                      start.
                    </p>
                    <form
                      onSubmit={handleEmailResults}
                      className="mt-3 flex gap-2"
                    >
                      <input
                        type="email"
                        required
                        placeholder="you@business.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email address"
                        className="min-w-0 flex-1 rounded-md border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button
                        type="submit"
                        disabled={emailSending}
                        className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
                      >
                        {emailSending ? "Sending..." : "Email Me"}
                      </button>
                    </form>
                  </>
                )}
              </div>

              <div className="mt-8 text-center">
                <CtaButton
                  href={ASSESSMENT_URL}
                  size="lg"
                  ctaLocation="roi-calculator-results"
                >
                  Get Your Free Automation Plan
                </CtaButton>
                <p className="mt-3 text-sm text-text-secondary">
                  See exactly which tasks to automate first &mdash; personalised
                  to your business.
                </p>
              </div>
            </div>
          )}

          <p className="mt-10 text-sm text-text-muted">
            These estimates are based on typical results across 50+ Australian
            SMBs. Your actual savings depend on your specific workflows &mdash;
            the free automation plan will give you a more precise breakdown.
          </p>
        </div>
      </section>

      <CtaBand ctaLocation="roi-calculator-bottom" />
    </>
  )
}
