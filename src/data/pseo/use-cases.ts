export type PseoUseCase = {
  slug: string
  title: string
  keyword: string
  problem: string
  steps: { title: string; description: string }[]
  industries: { name: string; href: string }[]
  tools: string[]
  hoursSaved: string
  faq: { question: string; answer: string }[]
}

export const PSEO_USE_CASES: PseoUseCase[] = [
  {
    slug: "invoice-processing",
    title: "Invoice Processing",
    keyword: "automate invoicing small business",
    problem:
      "Most small businesses send invoices manually. Someone finishes a job or delivers a service, then later — sometimes days later — someone else types up an invoice in Xero or MYOB. By the time it goes out, the client has moved on and payment takes even longer. Late invoicing is the single biggest cash flow killer for Australian SMBs. It is not a billing problem. It is a workflow problem. The job is done, the data exists, but nobody has connected the completion trigger to the invoice generation. Meanwhile, follow-up reminders are sporadic at best. Some clients get chased, others do not. The result is inconsistent cash flow, wasted admin time, and a growing pile of aged receivables that nobody has time to chase properly.",
    steps: [
      {
        title: "Trigger",
        description:
          "Job marked complete, appointment finished, or milestone reached in your existing system.",
      },
      {
        title: "Invoice Generated",
        description:
          "Line items, rates, and client details pulled automatically. Invoice created in Xero or MYOB without manual entry.",
      },
      {
        title: "Sent Automatically",
        description:
          "Invoice emailed to the client immediately with payment link included.",
      },
      {
        title: "Follow-Up Scheduled",
        description:
          "Automated reminders sent at 7, 14, and 21 days if unpaid. Escalation alert to you if still outstanding.",
      },
    ],
    industries: [
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
    ],
    tools: ["Xero", "MYOB", "Stripe", "ServiceM8", "Cliniko"],
    hoursSaved: "3\u20135 hours per week",
    faq: [
      {
        question: "Will automated invoices look professional?",
        answer:
          "Yes. They use your existing Xero or MYOB templates with your branding, ABN, and payment details. The only difference is they go out immediately instead of sitting in a to-do pile.",
      },
      {
        question: "Can I review invoices before they send?",
        answer:
          "Absolutely. You can set up an approval step where invoices are drafted and you get a notification to review before sending. Most clients start with approval on and turn it off once they trust the automation.",
      },
    ],
  },
  {
    slug: "appointment-scheduling",
    title: "Appointment Scheduling",
    keyword: "automate appointment booking",
    problem:
      "Booking appointments should be simple, but for most small businesses it is a multi-step manual process. A client calls or emails, someone checks availability, confirms a time, sends a calendar invite, maybe a reminder closer to the date. Multiply that by 20 or 30 appointments a week and you have a part-time job just managing the schedule. No-shows make it worse — a missed appointment is lost revenue, and most businesses do not have automated reminders to reduce them. The front desk ends up spending hours on the phone confirming appointments that could be handled by a system. And when a client does not show up, there is no automatic follow-up to rebook. The whole process leaks time and money at every step.",
    steps: [
      {
        title: "Client Books Online",
        description:
          "Client selects a time from your real-time availability via a booking link or website widget.",
      },
      {
        title: "Confirmation Sent",
        description:
          "Automatic confirmation email and calendar invite sent to both client and practitioner.",
      },
      {
        title: "Reminders Triggered",
        description:
          "SMS or email reminders sent at 48 hours and 2 hours before the appointment.",
      },
      {
        title: "No-Show Follow-Up",
        description:
          "If the client does not attend, an automatic rebooking prompt is sent within the hour.",
      },
      {
        title: "Post-Appointment",
        description:
          "Follow-up email or feedback request sent after the appointment, with rebooking link included.",
      },
    ],
    industries: [
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    tools: ["Cliniko", "Halaxy", "Calendly", "Google Calendar", "Twilio"],
    hoursSaved: "4\u20136 hours per week",
    faq: [
      {
        question: "Will this work with my existing practice management system?",
        answer:
          "Yes. I integrate with Cliniko, Halaxy, Nookal, and most other systems that have an API or support platforms like Make and n8n. Your team keeps using the same software — the automation handles the scheduling workflow around it.",
      },
      {
        question: "Can clients still book by phone?",
        answer:
          "Of course. Online booking is an additional channel, not a replacement. Phone bookings still go into the same system, and the reminders and follow-ups apply to all appointments regardless of how they were booked.",
      },
    ],
  },
  {
    slug: "job-management",
    title: "Job Management",
    keyword: "job management automation",
    problem:
      "For trades and field service businesses, managing jobs is the core of the operation — but it is often the messiest part. Jobs get created from quotes, assigned to teams via text message, updated by phone call, and closed out whenever someone remembers. Photos sit on phones, notes live in heads, and the office only finds out a job is done when the tradesperson asks when the invoice is going out. This lack of visibility creates real problems. Double-ups happen. Jobs fall through the cracks. Clients call for updates and nobody has an answer. The business owner ends up being the bottleneck for every piece of information because no system connects the dots between quoting, scheduling, execution, and invoicing.",
    steps: [
      {
        title: "Job Created",
        description:
          "Quote accepted or work order raised — job auto-created with all details from the quote or request.",
      },
      {
        title: "Team Notified",
        description:
          "Assigned team member gets a notification with job details, location, client info, and any special notes.",
      },
      {
        title: "On-Site Updates",
        description:
          "Photos, notes, and status updates captured on mobile and attached to the job record automatically.",
      },
      {
        title: "Job Completed",
        description:
          "Job marked done on-site, triggering invoice generation and client notification in one step.",
      },
    ],
    industries: [
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Property & Real Estate", href: "/industries/property" },
    ],
    tools: ["ServiceM8", "Tradify", "Fergus", "Simpro", "Xero"],
    hoursSaved: "5\u201310 hours per week",
    faq: [
      {
        question: "Do my team need to use a new app?",
        answer:
          "Usually not. Most job management tools like ServiceM8 and Tradify already have mobile apps your team can use. The automation happens behind the scenes — connecting these tools to your accounting and communication systems.",
      },
      {
        question: "Can this handle multiple crews and job types?",
        answer:
          "Yes. Automations can route different job types to different crews, apply different pricing templates, and trigger different follow-up workflows. The system adapts to how your business actually operates.",
      },
    ],
  },
  {
    slug: "client-onboarding",
    title: "Client Onboarding",
    keyword: "automate client onboarding",
    problem:
      "Onboarding a new client should be the start of a great relationship. Instead, it is usually a scramble of manual tasks — sending engagement letters, collecting ID documents, setting up accounts in multiple systems, and sending welcome information. For accounting firms, it means ATO authorisations, Xero access, and practice management setup. For professional services, it means CRM entries, project creation, and team introductions. Every step is manual, every step gets delayed, and the client&apos;s first impression is waiting. The worst part is that onboarding is almost identical for every client. The same documents, the same setup, the same emails — done manually every single time. It is the definition of work that should be automated.",
    steps: [
      {
        title: "Engagement Signed",
        description:
          "Client signs the engagement letter or contract electronically, triggering the onboarding workflow.",
      },
      {
        title: "Accounts Created",
        description:
          "Client record auto-created in your CRM, accounting software, and project management tool.",
      },
      {
        title: "Documents Collected",
        description:
          "Automated request sent for required documents with a secure upload link. Reminders if incomplete.",
      },
      {
        title: "Welcome Pack Sent",
        description:
          "Branded welcome email with key contacts, next steps, and any relevant guides sent automatically.",
      },
      {
        title: "Team Notified",
        description:
          "Internal notification to the assigned team with client details and project brief ready to go.",
      },
    ],
    industries: [
      { name: "Accountants & Bookkeepers", href: "/industries/accounting" },
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Legal Practices", href: "/industries/legal" },
    ],
    tools: ["HubSpot", "Karbon", "Xero", "DocuSign", "Google Workspace"],
    hoursSaved: "2\u20134 hours per client",
    faq: [
      {
        question: "How long does it take to set up an onboarding automation?",
        answer:
          "Most onboarding automations are built and tested within 1\u20132 weeks. The biggest time investment is mapping your current process so we can replicate it accurately, then improving the steps that do not make sense.",
      },
      {
        question: "Can I customise the onboarding for different client types?",
        answer:
          "Yes. You can have different onboarding flows for different service types. An audit client gets different documents and setup steps than a bookkeeping client, and the automation handles the routing.",
      },
    ],
  },
  {
    slug: "quoting",
    title: "Quoting",
    keyword: "automate quoting process",
    problem:
      "Getting quotes out quickly wins work. But for most small businesses, quoting is a manual process that happens after hours. A lead comes in, someone gathers requirements, looks up pricing, assembles a quote document, and sends it through. By the time it reaches the client, a competitor has already responded. Slow quoting is not just an admin problem — it is a revenue problem. Every day a quote sits unsent is a day the client might go elsewhere. And when quotes are manual, they are inconsistent. Different staff quote different prices for the same work. Margins slip because someone forgot to include a line item. Follow-up on sent quotes is sporadic because nobody tracks which ones are outstanding.",
    steps: [
      {
        title: "Lead Captured",
        description:
          "Enquiry comes in via form, email, or phone — details captured and logged automatically.",
      },
      {
        title: "Quote Generated",
        description:
          "Template populated with standard pricing, line items adjusted based on requirements, quote document created.",
      },
      {
        title: "Sent for Approval",
        description:
          "Quote emailed to client with electronic acceptance. You get notified when they open it.",
      },
      {
        title: "Accepted \u2192 Job Created",
        description:
          "Client accepts, job auto-created in your system with all details from the quote carried over.",
      },
    ],
    industries: [
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    tools: ["ServiceM8", "Tradify", "HubSpot", "PandaDoc", "Xero"],
    hoursSaved: "3\u20136 hours per week",
    faq: [
      {
        question: "Can automated quotes handle variable pricing?",
        answer:
          "Yes. You set up pricing rules and templates, and the automation applies them based on the job type, size, or other variables. Complex quotes can still be reviewed before sending \u2014 the automation handles the assembly, not the pricing decisions.",
      },
      {
        question: "What if I need to customise each quote?",
        answer:
          "The automation creates a draft based on your templates and pricing. You can edit anything before it goes out. Over time, most businesses find they need to edit less and less as the templates get refined.",
      },
    ],
  },
  {
    slug: "payroll",
    title: "Payroll Processing",
    keyword: "automate payroll small business",
    problem:
      "Payroll in a small business is stressful. It has to be right, it has to be on time, and it involves pulling data from multiple places — timesheets, leave records, award rates, super calculations. Most small businesses do this manually or semi-manually, with someone spending hours each pay cycle collecting timesheets, checking hours, calculating pay, and processing the run. Mistakes are expensive — underpayments create compliance risk, overpayments are hard to recover, and the ATO does not care that you are a small business when it comes to STP reporting. The problem is not that payroll is complex. It is that the data needed for payroll lives in different systems and someone has to manually bring it all together every cycle.",
    steps: [
      {
        title: "Timesheets Collected",
        description:
          "Hours automatically pulled from your time tracking or rostering system at the end of each pay period.",
      },
      {
        title: "Pay Calculated",
        description:
          "Hours matched to award rates, leave balances checked, allowances and deductions applied automatically.",
      },
      {
        title: "Review and Approve",
        description:
          "Pay run summary presented for review. Flag any anomalies before processing.",
      },
      {
        title: "Processed and Reported",
        description:
          "Pay processed, payslips distributed, super calculated, and STP reported — all in one step.",
      },
    ],
    industries: [
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
      { name: "Property & Real Estate", href: "/industries/property" },
    ],
    tools: ["Xero", "MYOB", "KeyPay", "Deputy", "Employment Hero"],
    hoursSaved: "2\u20134 hours per pay cycle",
    faq: [
      {
        question: "Can this handle different award rates and conditions?",
        answer:
          "Yes. Modern payroll tools like KeyPay and Employment Hero have award interpretation built in. The automation ensures timesheet data flows into these systems accurately so the calculations are correct every time.",
      },
      {
        question: "Is automated payroll compliant with Australian regulations?",
        answer:
          "The payroll platforms I integrate with are designed for Australian compliance — STP, super guarantee, award interpretation. The automation connects your data sources to these platforms. The compliance engine is theirs; I make sure the data gets there correctly.",
      },
    ],
  },
  {
    slug: "document-management",
    title: "Document Management",
    keyword: "document management automation",
    problem:
      "Documents are everywhere — email attachments, shared drives, desktop folders, practice management systems, and sometimes still in paper filing cabinets. When someone needs to find a document, they search three or four places before they find it, if they find it at all. Version control is another headache. Which version of the contract is current? Did the client sign the updated terms or the old ones? Nobody is quite sure. For compliance-heavy industries like accounting and legal, poor document management is not just inefficient — it is a risk. Audit trails are incomplete, documents are misfiled, and finding the right version of the right document for the right client takes far longer than it should.",
    steps: [
      {
        title: "Document Received",
        description:
          "Document arrives via email, upload, or scan — automatically captured and identified.",
      },
      {
        title: "Auto-Filed",
        description:
          "Filed to the correct client or matter folder based on content, sender, or metadata.",
      },
      {
        title: "Version Controlled",
        description:
          "Previous versions preserved automatically. Current version clearly identified.",
      },
      {
        title: "Searchable",
        description:
          "All documents indexed and searchable by content, client, date, or document type.",
      },
    ],
    industries: [
      { name: "Legal Practices", href: "/industries/legal" },
      { name: "Accountants & Bookkeepers", href: "/industries/accounting" },
      { name: "Property & Real Estate", href: "/industries/property" },
    ],
    tools: ["Google Workspace", "NetDocuments", "Dext", "Hubdoc", "SharePoint"],
    hoursSaved: "3\u20135 hours per week",
    faq: [
      {
        question: "Can this work with documents we already have?",
        answer:
          "Yes. Migration of existing documents into an organised structure is part of the setup process. We establish the filing rules and then apply them to both existing and incoming documents.",
      },
      {
        question: "How does auto-filing know where to put documents?",
        answer:
          "Filing rules are based on sender, subject line, document type, and content. For example, an invoice from a specific supplier always goes to that supplier\u2019s folder. Client documents are matched by email address or client number.",
      },
    ],
  },
  {
    slug: "lead-follow-up",
    title: "Lead Follow-Up",
    keyword: "automate lead follow up",
    problem:
      "Leads come in and then nothing happens. Not because the business does not want them — but because everyone is busy doing the actual work. A website enquiry sits in an inbox for two days. A phone message gets written on a sticky note that falls behind the desk. A referral is mentioned in passing and never formally followed up. Studies show that responding to a lead within five minutes makes you 21 times more likely to convert them. But most small businesses take hours or days. By then, the prospect has either gone elsewhere or forgotten they enquired. The solution is not working harder or checking email more often. It is automating the follow-up so every lead gets an immediate response and a structured sequence until they convert or opt out.",
    steps: [
      {
        title: "Lead Captured",
        description:
          "Enquiry from website, email, phone, or referral is logged in your CRM automatically.",
      },
      {
        title: "Instant Response",
        description:
          "Personalised acknowledgment email sent within minutes with next steps and booking link.",
      },
      {
        title: "Follow-Up Sequence",
        description:
          "If no response, automated follow-ups sent at day 2, day 5, and day 10 with increasing value.",
      },
      {
        title: "Task Created",
        description:
          "If automated follow-ups do not convert, a task is created for personal outreach with full context.",
      },
    ],
    industries: [
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Property & Real Estate", href: "/industries/property" },
    ],
    tools: ["HubSpot", "Mailchimp", "ActiveCampaign", "Google Workspace"],
    hoursSaved: "2\u20134 hours per week",
    faq: [
      {
        question: "Will automated follow-ups feel impersonal?",
        answer:
          "Not if they are written well. Each email is personalised with the lead\u2019s name, enquiry details, and relevant information. They read like a personal email, not a marketing blast. Most leads cannot tell the difference.",
      },
      {
        question: "Can I see which leads are being followed up?",
        answer:
          "Yes. Your CRM shows every lead, where they are in the follow-up sequence, and what actions they have taken (opened emails, clicked links, booked a call). Full visibility without manual tracking.",
      },
    ],
  },
  {
    slug: "reporting",
    title: "Business Reporting",
    keyword: "automated reporting small business",
    problem:
      "Every business owner wants to know how the business is going. But getting that information usually means waiting until the end of the month, then spending hours pulling data from different systems and assembling it into something useful. Revenue from accounting software, job data from the operations tool, leads from the CRM, team hours from the time tracker — all in different places, all requiring manual export and manipulation. By the time the report is ready, the data is already old. Decisions are made on last month&apos;s numbers instead of today&apos;s reality. And if the person who usually compiles the report is away, nobody gets a report at all. The information exists in your systems right now. The problem is that nobody has connected it into a single view that updates itself.",
    steps: [
      {
        title: "Data Sources Connected",
        description:
          "Accounting, CRM, project management, and operations tools linked to a central dashboard.",
      },
      {
        title: "Metrics Defined",
        description:
          "Key numbers identified — revenue, pipeline, utilisation, outstanding invoices, whatever matters to your business.",
      },
      {
        title: "Dashboard Built",
        description:
          "Live dashboard that updates in real time. No manual data entry or export required.",
      },
      {
        title: "Reports Scheduled",
        description:
          "Weekly or monthly summary reports auto-generated and emailed to you and your team.",
      },
    ],
    industries: [
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Accountants & Bookkeepers", href: "/industries/accounting" },
    ],
    tools: ["Xero", "Google Sheets", "Looker Studio", "HubSpot", "Power BI"],
    hoursSaved: "3\u20136 hours per week",
    faq: [
      {
        question: "What tools do you use for dashboards?",
        answer:
          "It depends on your existing stack. Google Sheets and Looker Studio work well for most SMBs and are free. For more complex needs, Power BI or custom dashboards are options. I recommend the simplest tool that gets the job done.",
      },
      {
        question: "Can I get reports on my phone?",
        answer:
          "Yes. Most dashboard tools have mobile apps or responsive web views. Scheduled reports can also be sent to your email so you can check numbers on the go without logging into anything.",
      },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory Management",
    keyword: "automate inventory tracking",
    problem:
      "Inventory problems usually show up at the worst time — a customer orders something you thought you had in stock, or a job gets delayed because materials were not ordered in time. Most small businesses track inventory manually or not at all. Stock counts happen when someone remembers, reorder points are based on gut feel, and the gap between what the system says and what is actually on the shelf grows wider over time. Overstocking ties up cash. Understocking loses sales. Both are symptoms of not having real-time visibility into what you have, what you need, and when you need it. The data to solve this already exists in your sales and purchasing systems — it just needs to be connected.",
    steps: [
      {
        title: "Stock Levels Tracked",
        description:
          "Real-time stock counts updated automatically as sales, jobs, and purchase orders are processed.",
      },
      {
        title: "Reorder Alerts",
        description:
          "When stock hits a defined threshold, an automatic alert is triggered or a purchase order drafted.",
      },
      {
        title: "Purchase Orders Automated",
        description:
          "Reorder creates a PO with preferred supplier details and sends it for approval or directly to the supplier.",
      },
      {
        title: "Reporting",
        description:
          "Stock turnover, value on hand, and reorder history visible in a live dashboard.",
      },
    ],
    industries: [
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
    ],
    tools: ["Xero", "MYOB", "Cin7", "Dear Inventory", "Unleashed"],
    hoursSaved: "2\u20134 hours per week",
    faq: [
      {
        question: "Can this work for service businesses, not just retail?",
        answer:
          "Yes. Trades businesses need to track materials and parts. Healthcare practices track consumables and supplies. The principles are the same — track what you have, alert when you are low, automate the reorder.",
      },
      {
        question: "Do I need a barcode scanning system?",
        answer:
          "Not necessarily. For many small businesses, automated tracking based on sales and purchase data is sufficient. Barcode scanning adds accuracy for businesses with high SKU counts, but it is not a requirement.",
      },
    ],
  },
  {
    slug: "compliance",
    title: "Compliance Reporting",
    keyword: "compliance automation",
    problem:
      "Compliance deadlines do not care that you are busy. BAS lodgements, licence renewals, safety certifications, insurance expiries, regulatory filings — they all have dates, and missing them has consequences. Most small businesses track compliance in a combination of calendar reminders, spreadsheets, and memory. It works until it does not. A renewal gets missed because the person who usually handles it was on leave. A filing deadline passes because the reminder was set for the wrong date. A licence expires and nobody notices until a client asks for proof of currency. The irony is that compliance tasks are almost always predictable and repetitive — which makes them perfect for automation. The dates are known, the actions are standard, and the consequences of missing them are real.",
    steps: [
      {
        title: "Deadlines Mapped",
        description:
          "All compliance obligations catalogued with due dates, responsible parties, and required actions.",
      },
      {
        title: "Reminders Automated",
        description:
          "Notifications sent at defined intervals before each deadline — 90, 60, 30, and 7 days out.",
      },
      {
        title: "Escalation Rules",
        description:
          "If a deadline is approaching and the task is not marked complete, it escalates to a senior person automatically.",
      },
      {
        title: "Audit Trail",
        description:
          "Every action logged with timestamps. Full history of what was done, when, and by whom.",
      },
    ],
    industries: [
      { name: "Legal Practices", href: "/industries/legal" },
      { name: "Accountants & Bookkeepers", href: "/industries/accounting" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
    ],
    tools: ["Karbon", "Google Workspace", "Asana", "Monday.com", "Xero"],
    hoursSaved: "2\u20133 hours per week",
    faq: [
      {
        question: "Can this handle different compliance requirements for different clients?",
        answer:
          "Yes. Each client or entity can have its own compliance calendar with different obligations, deadlines, and responsible staff. The automation manages them all and surfaces what needs attention.",
      },
      {
        question: "What if our compliance requirements change?",
        answer:
          "Compliance calendars are easy to update. Adding a new obligation, changing a deadline, or adjusting reminder intervals takes minutes. The system is built to be maintained, not just set up once.",
      },
    ],
  },
  {
    slug: "email-automation",
    title: "Email Communication",
    keyword: "email automation small business",
    problem:
      "Small businesses send the same emails over and over. Appointment confirmations, welcome messages, follow-ups after meetings, payment reminders, project updates, review requests. Each one is typed individually or copy-pasted from an old email with the details changed. It works, but it is slow, inconsistent, and error-prone. Someone forgets to send the follow-up. Someone sends the wrong template. A client name is misspelled because it was copied from the wrong email. The cumulative time spent on repetitive emails adds up to hours every week — hours that could be spent on actual work. These are not marketing emails. They are operational emails that are part of your business workflow. And because they are predictable and triggered by events, they are straightforward to automate.",
    steps: [
      {
        title: "Trigger Identified",
        description:
          "An event occurs — appointment booked, job completed, invoice sent, client onboarded — that should trigger an email.",
      },
      {
        title: "Template Selected",
        description:
          "The right template is chosen based on the trigger type. Client details are populated automatically.",
      },
      {
        title: "Email Sent",
        description:
          "Personalised email sent from your business address. Looks and reads like a personal email.",
      },
      {
        title: "Tracking",
        description:
          "Opens, clicks, and replies tracked so you know which communications are landing.",
      },
    ],
    industries: [
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
      { name: "Property & Real Estate", href: "/industries/property" },
    ],
    tools: ["Google Workspace", "Mailchimp", "ActiveCampaign", "HubSpot"],
    hoursSaved: "3\u20135 hours per week",
    faq: [
      {
        question: "Will clients know the emails are automated?",
        answer:
          "No. Automated operational emails are sent from your regular business email address, using your normal tone and style. They are personalised with the client\u2019s name and relevant details. To the recipient, they look like any other email from your team.",
      },
      {
        question: "Can I still send manual emails when I need to?",
        answer:
          "Of course. Automation handles the predictable, repetitive emails. You still send personal emails whenever a situation calls for a human touch. The two work alongside each other.",
      },
    ],
  },
  {
    slug: "data-entry",
    title: "Data Entry",
    keyword: "automate data entry",
    problem:
      "Data entry is the task nobody wants to do but everyone has to. Client details typed into the CRM. Invoice data entered into the accounting system. Job information copied from an email into the project management tool. The same information typed into two, three, or four different systems because none of them talk to each other. It is not just tedious — it is expensive. Data entry errors cause invoicing mistakes, wrong addresses on job sheets, misspelled client names in proposals, and compliance issues when records do not match. Every minute spent on data entry is a minute not spent on revenue-generating work. And because it is boring, it gets rushed and mistakes multiply. The fix is connecting your systems so data entered once flows everywhere it needs to go.",
    steps: [
      {
        title: "Single Entry Point",
        description:
          "Data is entered once — in a form, email, or your primary system — and captured at the source.",
      },
      {
        title: "Auto-Populated",
        description:
          "Connected systems receive the data automatically. CRM, accounting, project management — all updated from one entry.",
      },
      {
        title: "Validation",
        description:
          "Data checked against existing records. Duplicates flagged, missing fields highlighted, formats standardised.",
      },
      {
        title: "Error Reduction",
        description:
          "Manual re-entry eliminated. One source of truth across all systems.",
      },
    ],
    industries: [
      { name: "Accountants & Bookkeepers", href: "/industries/accounting" },
      { name: "Legal Practices", href: "/industries/legal" },
      { name: "Healthcare & Allied Health", href: "/industries/healthcare" },
    ],
    tools: ["Power Automate", "n8n", "Make", "Xero", "HubSpot", "Google Workspace"],
    hoursSaved: "5\u201310 hours per week",
    faq: [
      {
        question: "Which systems can you connect?",
        answer:
          "Most modern business tools have APIs or support integration platforms like Power Automate, n8n, and Make. If your software has a way to get data in and out, I can likely connect it. Common integrations include Xero, HubSpot, Google Workspace, and most practice management systems.",
      },
      {
        question: "What about data that comes in via email or PDF?",
        answer:
          "Tools like Dext and Hubdoc can extract data from emailed documents and PDFs. For more complex extraction, I use AI-powered parsing that can read invoices, forms, and documents and push the data into your systems.",
      },
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    keyword: "automate customer support small business",
    problem:
      "Small businesses handle customer support the same way they handle everything else — someone stops what they are doing to answer the phone, reply to an email, or respond to a message. There is no ticket system, no tracking, no way to know if a customer issue was actually resolved or just acknowledged. Repeat questions eat up time. The same five questions get answered individually, over and over, every week. When a customer follows up on an existing issue, nobody can find the original conversation. If the person who spoke to them last is out, the customer has to start from scratch. Support does not need to be a full-time job to be done well. Most small business support queries are predictable and can be handled with smart automation — instant acknowledgments, self-service answers, and proper tracking so nothing gets lost.",
    steps: [
      {
        title: "Query Received",
        description:
          "Customer enquiry via email, form, or chat is captured and logged automatically with a reference number.",
      },
      {
        title: "Instant Acknowledgment",
        description:
          "Automatic reply confirms receipt with expected response time and relevant self-service links.",
      },
      {
        title: "Smart Routing",
        description:
          "Query categorised and routed to the right person based on type, urgency, and team availability.",
      },
      {
        title: "Resolution Tracked",
        description:
          "Full conversation history maintained. Follow-up prompts if the issue is not resolved within the SLA.",
      },
      {
        title: "Feedback Collected",
        description:
          "After resolution, a brief satisfaction check is sent automatically.",
      },
    ],
    industries: [
      { name: "Property & Real Estate", href: "/industries/property" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    tools: ["Freshdesk", "Zendesk", "HubSpot", "Google Workspace", "Intercom"],
    hoursSaved: "3\u20135 hours per week",
    faq: [
      {
        question: "Do I need a full help desk system?",
        answer:
          "Not necessarily. For many small businesses, a shared inbox with automated tagging, routing, and templates is enough. Full help desk software makes sense when you have multiple support staff or complex SLA requirements.",
      },
      {
        question: "Can automation handle complex support queries?",
        answer:
          "Automation handles the predictable parts — acknowledgment, routing, follow-up. Complex issues still go to a real person, but they arrive with full context and history so the response is faster and better informed.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    keyword: "project management automation",
    problem:
      "Project management in a small business is often just a shared to-do list — if that. Tasks are assigned in meetings, tracked in someone&apos;s head, and updated via status emails that nobody reads. When a project has multiple stages, handoffs between team members rely on someone remembering to pass the baton. Deadlines slip because the next person in the chain did not know it was their turn. Status reports are compiled manually by asking everyone where they are up to, which takes time and produces information that is already out of date. For businesses running multiple projects simultaneously, the lack of visibility is a real problem. You do not know which projects are on track, which are behind, and where the bottlenecks are — until it is too late to fix them.",
    steps: [
      {
        title: "Project Created",
        description:
          "Deal closed or engagement signed — project auto-created with tasks, milestones, and team assignments from a template.",
      },
      {
        title: "Task Notifications",
        description:
          "When a task is due or a predecessor is completed, the assigned person is notified automatically.",
      },
      {
        title: "Status Updates",
        description:
          "Progress tracked automatically based on task completion. No manual status reports needed.",
      },
      {
        title: "Client Visibility",
        description:
          "Clients receive auto-updates at key milestones so they always know where their project stands.",
      },
      {
        title: "Reporting",
        description:
          "Portfolio view showing all active projects, their status, upcoming deadlines, and resource allocation.",
      },
    ],
    industries: [
      { name: "Professional Services", href: "/industries/professional-services" },
      { name: "Trades & Field Service", href: "/industries/trades" },
      { name: "Legal Practices", href: "/industries/legal" },
    ],
    tools: ["Monday.com", "Asana", "ClickUp", "Google Workspace", "HubSpot"],
    hoursSaved: "3\u20135 hours per week",
    faq: [
      {
        question: "Which project management tool do you recommend?",
        answer:
          "It depends on your team size, workflow complexity, and what you are already using. Monday.com and Asana work well for most SMBs. If you already have a tool, I will usually build on that rather than introduce something new.",
      },
      {
        question: "Can this work for both internal and client-facing projects?",
        answer:
          "Yes. Internal projects and client projects can run in the same system with different visibility settings. Clients see their project updates without seeing your internal notes, tasks, or other projects.",
      },
    ],
  },
]
