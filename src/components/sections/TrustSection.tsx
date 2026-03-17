import { User, MapPin, LockOpen, Key, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"

const TRUST_POINTS = [
  {
    icon: User,
    title: "Founder-Led, Start to Finish",
    description:
      "No agency hand-offs. No junior staff learning on your dime. When you hire me, you get me — from the first call to the final handover.",
  },
  {
    icon: MapPin,
    title: "Australian-Based, Australian-Focused",
    description:
      "I'm based in Australia, working Australian business hours, understanding Australian business problems. Your data stays onshore. Your calls don't happen at midnight.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First by Default",
    description:
      "As an AWS Certified Security Specialist, I build with security baked in — not bolted on. For sensitive industries, I offer private deployments where your data stays within your own infrastructure and never touches a third-party server.",
  },
  {
    icon: LockOpen,
    title: "No Lock-In, No Proprietary Nonsense",
    description:
      "Everything I build uses mainstream tools — Power Automate, n8n, Make, Xero, HubSpot, Monday, whatever fits your business. If we stop working together, your automations keep running. I document everything so your team (or anyone else) can maintain it.",
  },
  {
    icon: Key,
    title: "You Own Everything",
    description:
      "No retainers you can't cancel. No systems only I can access. No vendor lock-in. Your automations, your accounts, your data.",
  },
]

export function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>Why Businesses Choose to Work With Me</SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2">
          {TRUST_POINTS.map((tp) => (
            <div key={tp.title} className="flex gap-4">
              <tp.icon
                className="h-6 w-6 shrink-0 text-primary mt-1"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {tp.title}
                </h3>
                <p className="mt-2 text-text-secondary">{tp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
