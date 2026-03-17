export type FaqItem = {
  question: string
  answer: string
}

export const HOMEPAGE_FAQ: FaqItem[] = [
  {
    question: "What is the Personalised Automation Plan?",
    answer:
      "It's a free AI-generated report specific to your business. Answer a few questions about how you operate, and I'll generate your top automation opportunities — with time savings estimates, tool recommendations, and a prioritised list of what to tackle first. AI-powered and sent to your email. Takes about 4 minutes.",
  },
  {
    question: "What happens in the 30-minute audit call?",
    answer:
      "If you've completed the automation plan, I'll have already reviewed your answers before we talk — so we skip the basics and go straight to what matters. We'll confirm the priorities, talk through how to approach them, and you'll leave with a clear action plan. If you're booking directly, I'll guide the conversation from scratch.",
  },
  {
    question: "How much does automation cost?",
    answer:
      "Most automation projects run between $2,000 and $10,000. Simple jobs — like making a form submission create a job card and trigger a confirmation email — sit at the lower end. More involved projects with multiple tools and steps sit higher. I'll give you a fixed price after the audit so there are no surprises.",
  },
  {
    question: "What about building a custom application?",
    answer:
      "Custom builds are a different scope — typically $15,000 to $80,000+ depending on what's needed. They make sense when off-the-shelf tools genuinely don't fit how your business works, or when you need a secure, client-facing product on your own infrastructure. I'm an AWS Certified Solutions Architect, DevOps Engineer, and Security Specialist.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. As an AWS Certified Security Specialist, security is built into everything I do — not added as an afterthought. For sensitive industries (healthcare, legal, finance), I offer private deployments where your data stays within your own AWS environment and never passes through third-party servers.",
  },
  {
    question: "Will automation replace my staff?",
    answer:
      "No. Automation handles the repetitive tasks your staff shouldn't be doing — so they can focus on work that actually needs a human. Most clients redeploy saved hours into client-facing or revenue-generating work.",
  },
  {
    question: "What if I'm not technical?",
    answer:
      "That's fine — most of my clients aren't. I build everything, document it in plain English, and train your team. If a system requires a computer science degree to maintain, I've done my job wrong.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A single automation: 1–2 weeks. A full workflow overhaul: 3–6 weeks. A custom application: 6–16 weeks depending on scope. I'll give you a timeline in the proposal.",
  },
]
