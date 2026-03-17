import type { Metadata } from "next"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CtaButton } from "@/components/shared/CtaButton"
import { CtaBand } from "@/components/sections/CtaBand"
import { FaqAccordion } from "@/components/sections/FaqAccordion"
import { JsonLd } from "@/components/shared/JsonLd"
import { SITE_URL, SITE_NAME, ASSESSMENT_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "AI Automations & Chatbots for Business",
  description:
    "AI-powered workflows that read emails, answer customer questions, extract data from documents, and qualify leads — 24/7. Built on Gemini by Google and Claude by Anthropic. $3K–$15K.",
  alternates: { canonical: `${SITE_URL}/services/ai-automations` },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  serviceType: "AI Automations & Chatbots for Business",
  areaServed: { "@type": "Country", name: "Australia" },
}

const AUTOMATION_FLOWS = [
  {
    title: "Enquiry → AI Reads, Classifies, Routes or Responds",
    description:
      "A customer enquiry comes in by email or web form. AI reads the message, understands what they need, and either responds directly or routes it to the right person with full context.",
  },
  {
    title: "Document Received → AI Extracts Key Data",
    description:
      "An invoice, application, or form arrives. AI reads the document, pulls out the relevant information, and enters it into your system — in seconds, not hours.",
  },
  {
    title: "New Lead → AI Qualifies and Scores",
    description:
      "A new lead hits your CRM. AI reviews their details, scores them based on your criteria, and flags the best ones so your team focuses on the leads most likely to convert.",
  },
  {
    title: "Support Question → AI Answers 24/7",
    description:
      "A customer asks a question at 11pm. AI answers from your knowledge base — product details, pricing, policies, how-to guides — accurately and instantly, every time.",
  },
  {
    title: "Meeting Notes → AI Summarises and Creates Action Items",
    description:
      "A call or meeting finishes. AI generates a clean summary with action items, assigns them to the right people, and sends the notes to everyone who needs them.",
  },
]

const RESULTS = [
  "24/7 customer response — no more missed enquiries",
  "90%+ of routine enquiries handled automatically",
  "Leads pre-qualified before your team touches them",
  "Documents processed in seconds, not hours",
  "Consistent quality — no bad days, no forgotten follow-ups",
]

const FAQ = [
  {
    question: "What AI do you use?",
    answer:
      "Gemini by Google and Claude by Anthropic — I pick whichever fits the task best. Gemini integrates seamlessly with Google Workspace. Claude excels at nuanced business communication and complex reasoning. Both are reliable, safe, and purpose-built for business tasks.",
  },
  {
    question: "Is my data safe with AI?",
    answer:
      "Yes. As an AWS Certified Security Specialist, security is built into everything I deliver. For sensitive industries like healthcare, legal, and finance, I offer private deployments where your data stays within your own AWS environment and never passes through third-party servers.",
  },
  {
    question: "Can AI really handle our customer enquiries?",
    answer:
      "For routine questions — yes, and it does it well. Product details, pricing, opening hours, how-to guides, policy questions. Complex or sensitive enquiries get escalated to your team automatically, with full context attached so nothing is lost.",
  },
]

export default function AiAutomationsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            AI Automations &amp; Chatbots for Business
          </h1>
          <p className="mt-6 text-xl text-text-secondary">
            Tasks that need understanding, not just moving data. AI that reads
            emails, answers customers, extracts information from documents, and
            qualifies leads — around the clock. $3,000 – $15,000.
          </p>
          <div className="mt-8">
            <CtaButton href={ASSESSMENT_URL} size="lg" ctaLocation="ai-automations-hero">
              Get Your Free Automation Plan
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            Too Complex for Simple Automation, Too Repetitive for a Human
          </SectionHeading>
          <div className="space-y-4 text-lg text-text-secondary">
            <p>
              Some tasks need more than just moving data from A to B. They need
              understanding — reading an email and deciding what to do with it,
              answering a customer question accurately, pulling the right numbers
              from a messy document.
            </p>
            <p>
              These tasks are too complex for simple if-this-then-that
              automation, but too repetitive to justify paying someone to do them
              all day:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Reading incoming emails and routing them to the right person</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Answering the same customer questions over and over</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Extracting information from invoices, applications, or forms</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Qualifying leads before your sales team gets involved</span>
              </li>
              <li className="flex gap-2">
                <span className="text-text-muted">—</span>
                <span>Summarising meetings and creating action items</span>
              </li>
            </ul>
            <p>
              AI handles these tasks with consistent quality, 24/7 — and
              escalates to your team when something genuinely needs a human.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What AI Automation Looks Like in Practice
          </SectionHeading>
          <div className="space-y-8">
            {AUTOMATION_FLOWS.map((flow, i) => (
              <div key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white font-heading">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {flow.title}
                  </h3>
                  <p className="mt-1 text-text-secondary">{flow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left">
            What AI Automation Delivers
          </SectionHeading>
          <ul className="space-y-3">
            {RESULTS.map((result) => (
              <li key={result} className="flex gap-3">
                <CheckCircle
                  className="h-5 w-5 shrink-0 text-cta mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-text-secondary">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        items={FAQ}
        heading="Common Questions About AI Automation"
      />

      <CtaBand
        headline="See How AI Could Work in Your Business"
        body="Answer 4 questions about your business and get a personalised automation plan emailed to you — including where AI can save you the most time. Free."
        ctaLocation="ai-automations-bottom"
      />
    </>
  )
}
