import { Quotes } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { TESTIMONIALS } from "@/data/testimonials"

export function TestimonialCarousel() {
  return (
    <section className="bg-surface-alt py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>What Clients Say</SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-lg border border-border bg-white p-6"
            >
              <Quotes
                className="h-6 w-6 text-primary/30"
                aria-hidden="true"
              />
              <p className="mt-3 text-text-secondary leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold text-text-primary">
                  {t.name}
                </p>
                <p className="text-sm text-text-muted">
                  {t.title}, {t.company}, {t.city}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
