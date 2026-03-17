import Link from "next/link"
import {
  Wrench,
  Briefcase,
  Calculator,
  Heart,
  Building,
  Scales,
  Question,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr"
import { CtaButton } from "@/components/shared/CtaButton"
import { BOOKING_URL } from "@/lib/constants"

const INDUSTRIES = [
  { label: "Trades", icon: Wrench },
  { label: "Professional Services", icon: Briefcase },
  { label: "Accounting", icon: Calculator },
  { label: "Healthcare", icon: Heart },
  { label: "Property", icon: Building },
  { label: "Legal", icon: Scales },
  { label: "Other", icon: Question },
]

export function Hero() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Stop Losing 10+ Hours a Week to Work a Computer Should Be Doing
          </h1>
          <p className="mt-5 text-lg text-text-secondary sm:text-xl">
            I help Australian small businesses automate the admin that&apos;s
            eating your week — quoting, invoicing, onboarding, reporting,
            follow-ups. You keep running your business. I make it run smoother.
          </p>
        </div>

        {/* Industry teaser — starts the assessment funnel */}
        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-surface-alt p-6 sm:p-8">
          <p className="mb-4 text-center text-sm font-medium text-text-muted">
            What kind of business do you run?
          </p>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {INDUSTRIES.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href={`/assessment`}
                className="group flex flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-white p-3 text-center transition-all duration-150 hover:border-primary hover:bg-primary/5 hover:shadow-sm"
              >
                <Icon
                  className="h-5 w-5 text-primary transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium leading-tight text-text-secondary group-hover:text-text-primary">
                  {label}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-3 flex items-center justify-center gap-1 text-xs text-text-muted">
            Takes 4 minutes · Get a personalised automation plan emailed to you
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </p>
        </div>

        {/* Secondary direct-booking link */}
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span>or</span>
          </div>
          <CtaButton href={BOOKING_URL} size="lg" ctaLocation="hero-direct">
            Book Your Free Audit Directly
          </CtaButton>
          <p className="text-sm text-text-muted">
            30 minutes. Zero cost. No obligation.
          </p>
        </div>
      </div>
    </section>
  )
}
