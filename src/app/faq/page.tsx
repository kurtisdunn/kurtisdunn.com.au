import type { Metadata } from "next"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL } from "@/lib/constants"
import type { FaqItem } from "@/data/faq"

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Business Automation & AI",
  description:
    "Answers to common questions about business automation, costs, timelines, security, and how it works for Australian small businesses.",
  alternates: { canonical: `${SITE_URL}/faq` },
}

const gettingStarted: FaqItem[] = [
  {
    question: "What is the Personalised Automation Plan?",
    answer:
      "It\u2019s a free AI-generated report specific to your business. Answer a few questions about how you operate, and you\u2019ll get your top automation opportunities with time savings estimates. It\u2019s built using Gemini by Google and emailed to you. Takes about 4 minutes.",
  },
  {
    question: "What happens in the 30-minute audit call?",
    answer:
      "If you completed the automation plan, I review your answers before we meet. We confirm priorities, talk through approach, and you leave with a clear action plan.",
  },
  {
    question: "How do I know if my business needs automation?",
    answer:
      "If your team is spending hours on repetitive tasks \u2014 entering the same data into multiple systems, sending manual follow-ups, rebuilding reports \u2014 automation will save you time and money. Most businesses with 5\u201350 staff have at least 10 hours a week of automatable work.",
  },
  {
    question: "Do I need to prepare anything before the audit?",
    answer:
      "If you complete the Personalised Automation Plan first, I\u2019ll have reviewed your answers before we talk \u2014 makes the call much more productive. Otherwise, just bring a rough idea of your biggest time sinks.",
  },
]

const costTimeline: FaqItem[] = [
  {
    question: "How much does automation cost?",
    answer:
      "Most projects run $2,000 \u2013 $10,000. Simple automations at the lower end, multi-system workflows higher. Fixed price after the audit \u2014 no surprises.",
  },
  {
    question: "What about building a custom application?",
    answer:
      "Custom builds are $15,000 \u2013 $80,000+ depending on scope. They make sense when off-the-shelf tools genuinely don\u2019t fit. I\u2019m an AWS Certified Solutions Architect, DevOps Engineer, and Security Specialist.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Single automation: 1\u20132 weeks. Full workflow overhaul: 3\u20136 weeks. Custom application: 6\u201316 weeks depending on scope. You get a timeline in the proposal.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. Every project is fixed-price with a clear scope. Ongoing support retainers are month-to-month \u2014 cancel any time.",
  },
]

const technical: FaqItem[] = [
  {
    question: "What tools do you work with?",
    answer:
      "Xero, MYOB, QuickBooks, HubSpot, ServiceM8, Tradify, Fergus, Simpro, Deputy, Google Workspace, Microsoft 365, and more. For automation I use Power Automate, n8n, and Make. For AI, Gemini by Google and Claude by Anthropic. For custom builds, AWS or Cloudflare. I\u2019m also a full-stack developer with experience in Node.js, PHP, Java, and Python.",
  },
  {
    question: "Do I need to change my current software?",
    answer:
      "Usually not. The goal is to connect what you already have, not replace it. If a tool genuinely isn\u2019t fit for purpose, I\u2019ll tell you \u2014 but that\u2019s the exception.",
  },
  {
    question: "Will automation replace my staff?",
    answer:
      "No. Automation handles the repetitive tasks your staff shouldn\u2019t be doing \u2014 so they can focus on work that actually needs a human. Most clients redeploy saved hours into client-facing or revenue-generating work.",
  },
  {
    question: "What if I\u2019m not technical?",
    answer:
      "That\u2019s fine \u2014 most of my clients aren\u2019t. I build everything, document it in plain English, and train your team.",
  },
]

const securityData: FaqItem[] = [
  {
    question: "Is my data secure?",
    answer:
      "Yes. As an AWS Certified Security Specialist, security is built into everything I do. For sensitive industries (healthcare, legal, finance), I offer private deployments where your data stays within your own AWS environment.",
  },
  {
    question: "What AI do you use and is it safe?",
    answer:
      "I use Gemini by Google and Claude by Anthropic \u2014 whichever fits the task best. For businesses that need it, I deploy AI within your own private infrastructure so your data never passes through third-party servers.",
  },
  {
    question: "Do I own everything you build?",
    answer:
      "Yes. Code, documentation, automations, accounts \u2014 it\u2019s all yours. If you want to move on, everything is documented for the next person to pick up.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "For automation projects, data stays in the tools you already use (Xero, CRM, etc.) \u2014 I just connect them. For custom applications, I deploy on AWS infrastructure in the region of your choice, including Australian data centres.",
  },
]

const allFaqs = [...gettingStarted, ...costTimeline, ...technical, ...securityData]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know about business automation, what it
            costs, and how it works.
          </p>
        </div>
      </section>

      <FaqAccordion items={gettingStarted} heading="Getting Started" />
      <FaqAccordion items={costTimeline} heading="Cost & Timeline" />
      <FaqAccordion items={technical} heading="Technical Questions" />
      <FaqAccordion items={securityData} heading="Security & Data" />

      <CtaBand
        headline="Still Have Questions?"
        body="Start with the free automation plan or book a 30-minute call &mdash; happy to answer anything."
        ctaLocation="faq-bottom"
      />
    </>
  )
}
