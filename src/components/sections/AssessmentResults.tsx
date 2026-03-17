import { CheckCircle, Clock, Wrench, Calendar } from "@phosphor-icons/react/dist/ssr"
import { CtaButton } from "@/components/shared/CtaButton"
import type { AssessmentResult } from "@/app/api/assessment/route"
import { BOOKING_URL } from "@/lib/constants"

export function AssessmentResults({ result }: { result: AssessmentResult }) {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-8 rounded-xl bg-primary p-6 text-white sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-white/80" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-white/70">Your personalised automation plan</p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
              {result.headline}
            </h2>
          </div>
        </div>
        <p className="mt-4 text-base leading-relaxed text-white/85">{result.summary}</p>
        <p className="mt-3 text-sm text-white/60">
          A copy of this plan has been sent to your email.
        </p>
      </div>

      {/* Recommendations */}
      <div className="mb-8 space-y-5">
        <h3 className="font-heading text-lg font-semibold text-text-primary">
          Where I&apos;d start for your business
        </h3>

        {result.recommendations.map((rec, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="font-heading font-semibold text-text-primary">
                  {rec.title}
                </h4>

                <p className="mt-1.5 text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">The problem: </span>
                  {rec.problem}
                </p>

                <p className="mt-2 text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">What happens: </span>
                  {rec.solution}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {rec.impact}
                  </span>

                  {rec.tools.length > 0 && (
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Wrench className="h-3 w-3" aria-hidden="true" />
                      {rec.tools.join(" · ")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-base leading-relaxed text-text-secondary">
          {result.callToAction}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton
            href={BOOKING_URL}
            size="lg"
            ctaLocation="assessment-results"
          >
            <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            Book Your Free Audit
          </CtaButton>
          <p className="text-sm text-text-muted">
            30 minutes · Zero cost · No obligation
          </p>
        </div>
      </div>
    </div>
  )
}
