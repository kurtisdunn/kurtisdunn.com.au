import { SectionHeading } from "@/components/shared/SectionHeading"

const PAIN_POINTS = [
  {
    day: "Monday",
    text: "Manually entering job details from emails into your system",
  },
  {
    day: "Tuesday",
    text: "Chasing invoices that should have gone out last week",
  },
  {
    day: "Wednesday",
    text: "Building the same report you built last Wednesday",
  },
  {
    day: "Thursday",
    text: "Onboarding a new client with the same 14 steps as the last one",
  },
  {
    day: "Friday",
    text: "Wondering why you hired good people but they're all doing data entry",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading align="left">Sound Familiar?</SectionHeading>

          <p className="text-lg text-text-secondary">
            You opened this business to do the work you&apos;re good at — not to
            copy-paste data between spreadsheets at 9pm.
          </p>
          <p className="mt-4 text-lg text-text-secondary">
            But somewhere along the way, the admin took over. Your week looks
            something like this:
          </p>

          <ul className="mt-8 space-y-4">
            {PAIN_POINTS.map((p) => (
              <li key={p.day} className="flex gap-3">
                <span className="shrink-0 font-heading text-sm font-semibold text-primary w-24">
                  {p.day}:
                </span>
                <span className="text-text-secondary">{p.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-lg font-medium text-text-primary">
            Every hour spent on repetitive admin is an hour not spent on clients,
            growth, or getting home at a reasonable time.
          </p>
        </div>
      </div>
    </section>
  )
}
