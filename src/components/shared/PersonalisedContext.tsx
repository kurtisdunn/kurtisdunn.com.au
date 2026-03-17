"use client"

import { useEffect, useState } from "react"
import { CheckCircle } from "@phosphor-icons/react"

type AssessmentData = {
  industry: string
  teamSize: string
  pain: string
  name: string
}

const INDUSTRY_LABELS: Record<string, string> = {
  trades: "Trades & Field Service",
  "professional-services": "Professional Services",
  accounting: "Accounting & Finance",
  healthcare: "Healthcare & Allied Health",
  property: "Property & Real Estate",
  legal: "Legal",
  other: "Service Business",
}

const TEAM_SIZE_LABELS: Record<string, string> = {
  solo: "just you",
  "2-5": "2–5 people",
  "6-15": "6–15 people",
  "16-50": "16–50 people",
  "50+": "50+ people",
}

const PAIN_LABELS: Record<string, string> = {
  quoting: "quoting & proposals",
  invoicing: "invoicing & billing",
  onboarding: "client onboarding",
  "data-entry": "data entry & admin",
  reporting: "reporting",
  "follow-ups": "customer follow-ups",
}

const PAIN_AUTOMATIONS: Record<string, string[]> = {
  quoting: [
    "Auto-generate quotes from a template the moment a lead comes in",
    "Send for e-signature and auto-create a job on acceptance",
    "Notify your team immediately with all job details",
  ],
  invoicing: [
    "Auto-generate and send invoices the moment a job is marked complete",
    "Chase overdue invoices automatically at 7, 14, and 21 days",
    "Reconcile payments against your accounting system without manual entry",
  ],
  onboarding: [
    "Trigger the full onboarding sequence from a single client sign-off",
    "Auto-send intake forms, collect documents, and set up workspaces",
    "Notify every team member with exactly what they need to do",
  ],
  "data-entry": [
    "Enter information once and have it flow to every connected system",
    "Extract data from emails, forms, and documents automatically",
    "Eliminate spreadsheet reconciliation with live connected dashboards",
  ],
  reporting: [
    "Pull live data from all your tools into a single dashboard",
    "Auto-generate and send reports on a set schedule",
    "Flag anomalies and exceptions so you only review what matters",
  ],
  "follow-ups": [
    "Trigger personalised follow-up sequences automatically after key events",
    "Track every open touchpoint and escalate when no response is received",
    "Keep your CRM current without anyone manually updating it",
  ],
}

export function PersonalisedContext() {
  const [data, setData] = useState<AssessmentData | null>(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("kd_assessment")
      if (raw) {
        const parsed = JSON.parse(raw) as AssessmentData
        if (parsed.industry && parsed.teamSize && parsed.pain) {
          setData(parsed)
        }
      }
    } catch {
      // sessionStorage unavailable or data malformed — render nothing
    }
  }, [])

  if (!data) return null

  const industryLabel = INDUSTRY_LABELS[data.industry] ?? data.industry
  const teamLabel = TEAM_SIZE_LABELS[data.teamSize] ?? data.teamSize
  const painLabel = PAIN_LABELS[data.pain] ?? data.pain
  const automations = PAIN_AUTOMATIONS[data.pain] ?? []
  const firstName = data.name ? data.name.split(" ")[0] : null

  return (
    <div className="rounded-lg border border-primary/30 bg-primary/5 p-5">
      <p className="text-sm font-medium text-primary">
        {firstName ? `${firstName}, based` : "Based"} on your assessment:{" "}
        <span className="font-semibold">{industryLabel}</span> ·{" "}
        <span className="font-semibold">{teamLabel}</span> · biggest pain:{" "}
        <span className="font-semibold">{painLabel}</span>
      </p>
      {automations.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium uppercase tracking-wide text-primary/80">
            Top 3 automations I&apos;d look at for your business
          </p>
          <ul className="mt-2 space-y-1.5">
            {automations.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-text-secondary">
                <CheckCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-cta"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
