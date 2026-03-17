import type { Metadata } from "next"
import { User, LockOpen, Lightbulb } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaBand } from "@/components/sections/CtaBand"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Kurtis Dunn — Automation Consultant & AWS Solutions Architect",
  description:
    "I'm Kurtis, a business automation consultant and AWS Certified Solutions Architect, DevOps Engineer, and Security Specialist based in Australia. I help small businesses automate what software can handle — and build the tools that don't exist yet.",
  alternates: { canonical: `${SITE_URL}/about` },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kurtis Dunn",
  url: `${SITE_URL}/about`,
  jobTitle: "Business Automation Consultant & AWS Solutions Architect",
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Solutions Architect",
      credentialCategory: "Professional Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified DevOps Engineer",
      credentialCategory: "Professional Certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Security Specialist",
      credentialCategory: "Professional Certification",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
}

const HOW_I_WORK = [
  {
    icon: User,
    title: "I work alone, on purpose.",
    description:
      "No account managers. No project coordinators. No \"let me check with the team.\" When you hire me, you talk to me, and I do the work. That means faster decisions, fewer miscommunications, and someone who actually knows your business from the first call to the last handover.",
  },
  {
    icon: LockOpen,
    title: "I don't lock you in.",
    description:
      "Every automation I build runs on tools you control. Every application is deployed to your own AWS account. Everything is documented so anyone can maintain it. If you decide to bring someone else in later, they'll be able to pick up right where I left off. That's by design.",
  },
  {
    icon: Lightbulb,
    title: "I recommend the simplest thing that works.",
    description:
      "Sometimes that's a $3,000 workflow automation. Sometimes it's a purpose-built application on AWS. I'll tell you which one makes sense — and I'll tell you if neither does. The best solution is the one your team actually uses.",
  },
]

const VALUES = [
  {
    title: "Your time is your most valuable asset.",
    description:
      "Every hour spent on repetitive admin is an hour you can't spend on clients, strategy, or your family. Automation gives you that hour back.",
  },
  {
    title: "Technology should serve the business, not the other way around.",
    description:
      "I don't recommend tools because they're trendy. I recommend them because they solve your specific problem in the simplest way possible.",
  },
  {
    title: "If your team can't maintain it, I haven't finished.",
    description:
      "A system that only the builder can manage isn't a system — it's a dependency. Everything I build comes with documentation and training.",
  },
  {
    title: "Security isn't optional.",
    description:
      "Most small businesses are one data breach away from a serious problem. As an AWS Certified Security Specialist, I treat security as a default — not a premium add-on.",
  },
]

const CERTS = [
  "AWS Certified Solutions Architect",
  "AWS Certified DevOps Engineer",
  "AWS Certified Security Specialist",
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            G&apos;day — I&apos;m Kurtis
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            I&apos;m a business automation consultant and AWS-certified architect
            based in Australia. I help small businesses stop doing manually what
            software can handle automatically — and build the tools that
            don&apos;t exist yet when off-the-shelf isn&apos;t enough.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CERTS.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">Why I Do This</SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              I spent years watching smart business owners — tradies,
              accountants, practice managers — drown in admin that had no
              business being done by a human.
            </p>
            <p>
              The same invoice entered three times. The same onboarding
              checklist copied by hand for every new client. The same report
              rebuilt from scratch every week.
            </p>
            <p>
              These aren&apos;t hard problems to solve. They just need someone
              who understands both the tech and the business well enough to
              connect the two.
            </p>
            <p>
              For most businesses, that means connecting the tools they already
              have and automating the handoffs — using Power Automate, n8n, and
              Make. For some, it means building something purpose-built from
              scratch — securely, on AWS or Cloudflare, and designed to last.
              And now, it means layering in AI: using Gemini by Google and
              Claude by Anthropic to build automations that don&apos;t just
              move data, but understand it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">What You Can Expect</SectionHeading>
          <div className="space-y-8">
            {HOW_I_WORK.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="h-6 w-6 shrink-0 text-primary mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">What I Believe</SectionHeading>
          <div className="space-y-8">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {v.title}
                </h3>
                <p className="mt-2 text-text-secondary">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Want to See What's Possible for Your Business?"
        body="Start with the free automation plan. Answer 4 questions about how you operate and get a specific, AI-generated list of what to automate first — with time savings estimates. Free, no obligation."
        ctaLocation="about-bottom"
      />
    </>
  )
}
