import Link from "next/link"
import { ArrowRight, SquaresFour, UsersThree, Stack } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"

const EXAMPLES = [
  {
    icon: SquaresFour,
    title: "Internal operations tools",
    description:
      "A job management or operations dashboard built around how your business actually runs — not how a generic platform assumes it does.",
  },
  {
    icon: UsersThree,
    title: "Client-facing portals",
    description:
      "Let customers submit jobs, track progress, upload documents, and pay invoices — all on your brand, not a third-party platform.",
  },
  {
    icon: Stack,
    title: "Integration platforms",
    description:
      "When you have too many tools and no amount of Zapier will hold it together — a purpose-built hub with your own rules and logic.",
  },
]

export function BuildSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>When Off-the-Shelf Isn&apos;t Enough</SectionHeading>
          <p className="mb-12 text-lg text-text-secondary">
            Sometimes the right answer isn&apos;t automating what you have —
            it&apos;s building something designed specifically for how your
            business works. I design, build, and deploy custom web applications
            on AWS.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {EXAMPLES.map((ex) => (
            <div
              key={ex.title}
              className="rounded-lg border border-border bg-surface-alt p-6"
            >
              <ex.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-base font-semibold text-text-primary">
                {ex.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{ex.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-alt px-4 py-2 text-sm font-medium text-text-muted">
            AWS Certified Solutions Architect
            <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            AWS Certified DevOps Engineer
          </span>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/services#custom-build"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
          >
            See what a custom build involves
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
