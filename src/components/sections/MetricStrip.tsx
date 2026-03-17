import { ShieldCheck } from "@phosphor-icons/react/dist/ssr"

const METRICS = [
  { value: "150+", label: "Workflows automated" },
  { value: "10–20 hrs", label: "Saved per client, per week" },
  { value: "50+", label: "Australian SMBs served" },
  { value: "4.9/5", label: "Average client rating" },
]

const AWS_CERTS = [
  "Solutions Architect",
  "DevOps Engineer",
  "Security Specialist",
]

export function MetricStrip() {
  return (
    <section className="border-y border-border bg-surface-alt py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{m.label}</p>
            </div>
          ))}
        </div>

        {/* AWS Cert badges */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-5">
          {AWS_CERTS.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-text-secondary"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-primary" weight="fill" aria-hidden="true" />
              AWS Certified {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
