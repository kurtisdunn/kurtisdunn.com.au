import { Wrench, Briefcase, Calculator, Heart, Buildings, Scales } from "@phosphor-icons/react/dist/ssr"

export type Industry = {
  title: string
  description: string
  href: string
  linkText: string
  icon: typeof Wrench
}

export const INDUSTRIES: Industry[] = [
  {
    title: "Trades & Field Service",
    description:
      "Quoting, job management, invoicing — from the ute to the office, automated.",
    href: "/industries/trades",
    linkText: "See how it works for tradies",
    icon: Wrench,
  },
  {
    title: "Professional Services",
    description:
      "Client onboarding, time tracking, billing — less admin, more billable hours.",
    href: "/industries/professional-services",
    linkText: "See how it works for professional services",
    icon: Briefcase,
  },
  {
    title: "Accounting & Finance",
    description:
      "Document collection, reconciliation, reporting — the stuff your juniors shouldn't be doing manually.",
    href: "/industries/accounting",
    linkText: "See how it works for accountants",
    icon: Calculator,
  },
  {
    title: "Healthcare & Allied Health",
    description:
      "Patient intake, reminders, referrals, compliance — automated without losing the human touch.",
    href: "/industries/healthcare",
    linkText: "See how it works for healthcare",
    icon: Heart,
  },
  {
    title: "Property & Real Estate",
    description:
      "Tenant comms, maintenance requests, lease tracking, owner reports — on autopilot.",
    href: "/industries/property",
    linkText: "See how it works for property",
    icon: Buildings,
  },
  {
    title: "Legal",
    description:
      "Client intake, document assembly, matter management — because your hourly rate is too high for data entry.",
    href: "/industries/legal",
    linkText: "See how it works for legal",
    icon: Scales,
  },
]
