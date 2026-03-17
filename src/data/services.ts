import { MagnifyingGlass, FlowArrow, Robot, ChartBar, Headset, Code } from "@phosphor-icons/react/dist/ssr"

export type Service = {
  title: string
  description: string
  href: string
  icon: typeof MagnifyingGlass
}

export const SERVICES: Service[] = [
  {
    title: "Automation Audit",
    description:
      "A free 30-minute call to identify where your business is losing time. I'll look at how you operate, find the two or three tasks eating your week, and tell you straight what to tackle first. You walk away with a plan — whether you work with me or not.",
    href: "/book-audit",
    icon: MagnifyingGlass,
  },
  {
    title: "Workflow Automation",
    description:
      "Customer fills in a form — job appears in your system. Job is done — invoice goes out. Payment overdue — reminder sends itself. I take the manual handoffs your team does every day and make them happen automatically, every time.",
    href: "/services/workflow-automation",
    icon: FlowArrow,
  },
  {
    title: "AI Automations & Chatbots",
    description:
      "Automations that don't just move data — they understand it. Built on Gemini by Google and Claude by Anthropic, I create AI-powered workflows that read incoming emails and route them, extract data from documents, draft responses, qualify leads, and answer customer questions around the clock.",
    href: "/services/ai-automations",
    icon: Robot,
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Stop rebuilding the same report every Monday morning. I'll connect your tools so the numbers you care about — jobs completed, revenue collected, outstanding invoices — update themselves and land in front of you automatically.",
    href: "/services/reporting-dashboards",
    icon: ChartBar,
  },
  {
    title: "Custom Application Development",
    description:
      "When off-the-shelf tools don't fit, I build something that does. Client portals, internal tools, booking systems, and operations dashboards — built and deployed on AWS by an AWS-certified Solutions Architect and Security Specialist. Private, secure, and scalable.",
    href: "/services#custom-build",
    icon: Code,
  },
  {
    title: "Ongoing Support",
    description:
      "Your business changes — your automations should too. I offer monthly check-ins to make sure everything's running, update workflows when your processes shift, and extend what's already working as your business grows.",
    href: "/services/ongoing-support",
    icon: Headset,
  },
]
