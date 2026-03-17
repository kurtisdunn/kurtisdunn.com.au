import { Clock, ShieldCheck, TrendUp } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"

const BENEFITS = [
  {
    icon: Clock,
    title: "Get Your Week Back",
    description:
      "The average client saves 10–20 hours a week. That's a job that currently takes a person half a day — running automatically in the background while your team does something more useful.",
  },
  {
    icon: ShieldCheck,
    title: "The Right Thing Happens Every Time",
    description:
      "Manual handoffs mean things get missed. Automation means the invoice goes out, the follow-up sends, and the record updates — without anyone having to remember to do it.",
  },
  {
    icon: TrendUp,
    title: "Grow Without the Admin Growing With You",
    description:
      "Taking on 10 more clients shouldn't mean 10 more hours of admin a week. Once the process is automated, the volume doesn't matter. The system handles it.",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>
          What If the Boring Stuff Just... Happened?
        </SectionHeading>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-text-secondary">
          Not robots replacing your team. Just software handling the tasks that
          don&apos;t need a human — so your team can focus on the work that does.
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-lg bg-white p-6 shadow-sm border border-border"
            >
              <b.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {b.title}
              </h3>
              <p className="mt-2 text-text-secondary">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
