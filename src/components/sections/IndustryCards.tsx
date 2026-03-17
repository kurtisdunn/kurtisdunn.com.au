import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { INDUSTRIES } from "@/data/industries"

export function IndustryCards() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="I work with Australian service businesses — the kind where admin grows faster than revenue. If your team spends more time on paperwork than the actual work, we should talk."
        >
          Built for Businesses Like Yours
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:shadow-md hover:border-primary/30 cursor-pointer"
            >
              <ind.icon
                className="h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {ind.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary-light">
                {ind.linkText}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
