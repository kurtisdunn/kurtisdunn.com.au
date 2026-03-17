import { CtaButton } from "@/components/shared/CtaButton"
import { ASSESSMENT_URL } from "@/lib/constants"

type CtaBandProps = {
  headline?: string
  body?: string
  buttonText?: string
  href?: string
  supportingText?: string
  ctaLocation?: string
}

export function CtaBand({
  headline = "Ready to Get Your Week Back?",
  body = "Start with your free personalised automation plan. Answer 4 questions about your business and get specific recommendations — what to automate first, estimated time savings, all emailed to you. No cost. No obligation.",
  buttonText = "Get Your Free Automation Plan",
  href = ASSESSMENT_URL,
  supportingText = "Takes 4 minutes · Free · Personalised plan emailed to you",
  ctaLocation = "bottom-cta",
}: CtaBandProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-white/85">{body}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <CtaButton
            href={href}
            size="lg"
            variant="primary"
            ctaLocation={ctaLocation}
            className="bg-white text-primary hover:bg-white/90 hover:shadow-lg"
          >
            {buttonText}
          </CtaButton>
          <p className="text-sm text-white/70">{supportingText}</p>
        </div>
      </div>
    </section>
  )
}
