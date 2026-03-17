export type PseoIndustry = {
  slug: string
  name: string
  parentPage: string
  painPoints: string[]
  automations: { title: string; description: string }[]
  tools: string[]
  results: string[]
  faq: { question: string; answer: string }[]
}

export const PSEO_INDUSTRIES: PseoIndustry[] = [
  {
    slug: "trades",
    name: "Trades & Field Service",
    parentPage: "/industries/trades",
    painPoints: [
      "Manual quoting eating evenings",
      "Double-entry across job management and accounting",
      "Chasing invoices instead of chasing leads",
      "Team coordination via texts and memory",
      "Friday afternoon report scramble",
    ],
    automations: [
      {
        title: "Quoting",
        description:
          "Lead comes in, auto-quote generated from templates, customer accepts, job created automatically.",
      },
      {
        title: "Job Management",
        description:
          "Job created, team notified with details, photos attached on-site, invoice triggered on completion.",
      },
      {
        title: "Invoicing",
        description:
          "Job marked done, Xero invoice generated and sent, auto-reminders at 7, 14, and 21 days.",
      },
      {
        title: "Supplier Orders",
        description:
          "Job approved, materials list extracted, purchase order sent to supplier automatically.",
      },
      {
        title: "Reporting",
        description:
          "Live dashboard showing jobs in progress, revenue, outstanding invoices, and team utilisation.",
      },
    ],
    tools: ["ServiceM8", "Tradify", "Fergus", "Simpro", "Xero", "MYOB"],
    results: [
      "10\u201315 hours per week saved on admin",
      "Same-day invoicing on every job",
      "Zero double-entry between systems",
      "Quotes out in minutes, not hours",
      "Fewer errors, happier team",
    ],
    faq: [
      {
        question: "Do I need to change my job management software?",
        answer:
          "No. I work with whatever you\u2019re already using \u2014 ServiceM8, Tradify, Fergus, Simpro, or even spreadsheets. The goal is to connect your existing tools so data flows between them without you having to type it twice.",
      },
      {
        question: "How do you handle on-site workflows?",
        answer:
          "Most trade automations are designed around what happens in the field. Job updates, photo uploads, and completion triggers all work from mobile devices. Your team doesn\u2019t need to learn new software \u2014 they keep using what they already know.",
      },
    ],
  },
  {
    slug: "accountants",
    name: "Accountants & Bookkeepers",
    parentPage: "/industries/accounting",
    painPoints: [
      "Manual client onboarding taking hours per client",
      "Chasing documents every tax season",
      "Reconciliation eating junior staff time",
      "Monthly reporting still manually compiled",
      "Practice management data siloed from accounting",
    ],
    automations: [
      {
        title: "Client Onboarding",
        description:
          "Client signs engagement letter, ATO authorisation triggered, Xero setup initiated, welcome pack sent automatically.",
      },
      {
        title: "Document Collection",
        description:
          "Automated reminders sent to clients, documents uploaded via portal, auto-filed to the right folder.",
      },
      {
        title: "Reconciliation",
        description:
          "Transactions auto-categorised based on rules, exceptions flagged, review queue presented to staff.",
      },
      {
        title: "Reporting",
        description:
          "Monthly financials auto-generated from live data, published to client portal or emailed directly.",
      },
      {
        title: "Workflow Routing",
        description:
          "Work items auto-assigned based on type, due date, and staff capacity. Nothing falls through the cracks.",
      },
    ],
    tools: ["Xero", "MYOB", "Karbon", "Dext", "Hubdoc", "FYI"],
    results: [
      "Client onboarding from hours to minutes",
      "80% fewer document-chasing emails",
      "Faster month-end close",
      "Staff focused on advisory, not data entry",
      "Happier, better-informed clients",
    ],
    faq: [
      {
        question: "Can you automate workflows inside Karbon?",
        answer:
          "Yes. Karbon has solid built-in automation, but most firms only use a fraction of it. I help you set up proper workflow templates, auto-assignments, and integrations with Xero, Dext, and your email so work flows through Karbon without manual shuffling.",
      },
      {
        question: "What about compliance and data security?",
        answer:
          "All automations are built with compliance in mind. Client data stays within your existing platforms \u2014 I\u2019m connecting tools, not moving data to new places. As an AWS Certified Security Specialist, I can also set up private environments for firms with stricter requirements.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    parentPage: "/industries/professional-services",
    painPoints: [
      "Proposals and SOWs manually assembled each time",
      "Time tracking across multiple clients is inconsistent",
      "Project handoffs that rely on memory",
      "Billing delays because invoices aren\u2019t generated promptly",
      "CRM data never quite up to date",
    ],
    automations: [
      {
        title: "Proposals",
        description:
          "Template populated with client details, sent for signature, signed proposal auto-creates project with tasks.",
      },
      {
        title: "Time Tracking",
        description:
          "Logged hours pulled into billing summary, invoice draft generated, ready for review and send.",
      },
      {
        title: "Client Communication",
        description:
          "Project milestones trigger auto-updates to clients with progress summaries and next steps.",
      },
      {
        title: "Invoicing",
        description:
          "Time entries aggregated, invoice generated in Xero, sent to client, follow-up reminders scheduled.",
      },
      {
        title: "Reporting",
        description:
          "Live dashboard covering utilisation rates, pipeline value, and revenue \u2014 updated in real time.",
      },
    ],
    tools: [
      "HubSpot",
      "Monday.com",
      "Harvest",
      "Toggl",
      "Xero",
      "Google Workspace",
    ],
    results: [
      "Proposals out same-day",
      "Accurate billing every time",
      "Clients always informed on progress",
      "Revenue visibility in real time",
      "Less admin overhead per project",
    ],
    faq: [
      {
        question: "Can you connect my CRM to my project management tool?",
        answer:
          "Yes. That\u2019s one of the most common automations I build. When a deal closes in HubSpot (or whatever you use), the project is auto-created in Monday.com, Asana, or your PM tool of choice \u2014 with tasks, timelines, and team assignments already set up.",
      },
      {
        question: "What if we use multiple tools for time tracking?",
        answer:
          "That\u2019s normal. I can pull time data from Harvest, Toggl, or even calendar events and consolidate it into a single billing view. The goal is accurate invoicing without chasing timesheets.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Allied Health",
    parentPage: "/industries/healthcare",
    painPoints: [
      "Appointment no-shows with no automated reminders",
      "Patient intake forms still on paper or PDF",
      "Billing delays between appointment and invoice",
      "Practitioner schedules managed manually",
      "Compliance documentation scattered across systems",
    ],
    automations: [
      {
        title: "Appointments",
        description:
          "Appointment booked, auto-reminder sent at 48 hours and 2 hours before, no-show follow-up triggered.",
      },
      {
        title: "Patient Intake",
        description:
          "Online form submitted, data flows into practice management system, practitioner notified before appointment.",
      },
      {
        title: "Billing",
        description:
          "Appointment completed, invoice generated with correct item numbers, sent to patient, payment follow-up scheduled.",
      },
      {
        title: "Recalls",
        description:
          "Treatment plan creates future recall dates, auto-reminder sent when due, rebooking prompt included.",
      },
      {
        title: "Reporting",
        description:
          "Live dashboard showing appointment volume, revenue, no-show rate, and practitioner utilisation.",
      },
    ],
    tools: ["Cliniko", "Halaxy", "Nookal", "Xero", "Google Workspace"],
    results: [
      "30\u201350% fewer no-shows",
      "Digital intake in minutes, not days",
      "Same-day billing after every appointment",
      "Automated recalls that actually work",
      "Compliance documents in one place",
    ],
    faq: [
      {
        question: "Is patient data safe with automation?",
        answer:
          "Yes. All automations run within your existing practice management system and accounting software. Patient data doesn\u2019t leave your platforms. For practices with strict requirements, I can build on private infrastructure where data never passes through third-party servers.",
      },
      {
        question: "Do you work with Medicare and health fund billing?",
        answer:
          "I connect your practice management system to your billing software so claims are generated accurately. The actual claiming process stays with your existing provider \u2014 I make sure the data gets there correctly and on time.",
      },
    ],
  },
  {
    slug: "property",
    name: "Property & Real Estate",
    parentPage: "/industries/property",
    painPoints: [
      "Maintenance requests logged via email and phone, tracked manually",
      "Lease renewals tracked in spreadsheets",
      "Tenant communication inconsistent across the team",
      "Trust accounting reconciliation is manual and time-consuming",
      "Owner reporting manually compiled every month",
    ],
    automations: [
      {
        title: "Maintenance",
        description:
          "Request submitted via portal, logged automatically, contractor notified, status updates sent to tenant throughout.",
      },
      {
        title: "Lease Management",
        description:
          "Renewal dates trigger auto-reminders at 90, 60, and 30 days out. Documents generated and sent for signature.",
      },
      {
        title: "Tenant Communication",
        description:
          "Key dates trigger auto-notifications \u2014 inspections, rent reviews, renewals \u2014 consistent across every property.",
      },
      {
        title: "Trust Accounting",
        description:
          "Transactions auto-reconciled against expected amounts, exceptions flagged for review immediately.",
      },
      {
        title: "Owner Reporting",
        description:
          "Monthly statements auto-generated from trust data, formatted, and emailed to owners on schedule.",
      },
    ],
    tools: ["PropertyMe", "Console Cloud", "Xero", "Google Workspace"],
    results: [
      "Maintenance tracked end-to-end automatically",
      "No missed lease renewals",
      "Consistent tenant communication on every property",
      "Faster trust accounting reconciliation",
      "Owner reports generated on autopilot",
    ],
    faq: [
      {
        question: "Can you integrate with PropertyMe?",
        answer:
          "Yes. PropertyMe is one of the most common platforms I work with for property management. I connect it to your accounting, communication, and reporting tools so data flows automatically instead of being re-entered.",
      },
      {
        question: "How do you handle trust accounting compliance?",
        answer:
          "I don\u2019t replace your trust accounting process \u2014 I automate the reconciliation and exception-flagging around it. Your team still reviews and approves, but the manual matching and checking is handled automatically.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Legal Practices",
    parentPage: "/industries/legal",
    painPoints: [
      "Matter intake still involves manual data entry across systems",
      "Document management across email, drives, and practice management",
      "Time recording inconsistent and often under-billed",
      "Compliance deadlines tracked in diaries or spreadsheets",
      "Client communication relies on individual lawyers remembering",
    ],
    automations: [
      {
        title: "Matter Intake",
        description:
          "New client enquiry triggers conflict check, engagement letter generated, matter opened, team assigned \u2014 all automatically.",
      },
      {
        title: "Document Management",
        description:
          "Documents auto-filed by matter number, version controlled, and searchable across the practice.",
      },
      {
        title: "Time Capture",
        description:
          "Calendar events and document work auto-generate time entries for billing review. Less leakage, more revenue.",
      },
      {
        title: "Compliance",
        description:
          "Key dates trigger auto-reminders at defined intervals. Missed deadlines escalate to senior staff automatically.",
      },
      {
        title: "Client Updates",
        description:
          "Milestones reached in a matter trigger auto-updates to the client with next steps outlined.",
      },
    ],
    tools: ["LEAP", "Smokeball", "Xero", "NetDocuments", "Google Workspace"],
    results: [
      "Faster matter opening \u2014 minutes, not hours",
      "Documents always findable and version-controlled",
      "More billable hours captured automatically",
      "Compliance dates never missed",
      "Clients always in the loop on their matter",
    ],
    faq: [
      {
        question: "Do you work with LEAP and Smokeball?",
        answer:
          "Yes. Both are common in Australian legal practices and both have integration capabilities I can leverage. I connect them to your accounting, document management, and communication tools so data flows without manual re-entry.",
      },
      {
        question: "How do you handle confidentiality requirements?",
        answer:
          "All automations run within your existing platforms. I don\u2019t move client data to new systems. For firms with strict requirements, I\u2019m an AWS Certified Security Specialist and can set up private infrastructure where data stays entirely within your control.",
      },
    ],
  },
]
