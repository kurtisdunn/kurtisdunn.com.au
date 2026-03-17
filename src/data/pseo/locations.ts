export type PseoLocation = {
  slug: string
  name: string
  state: string
  intros: Record<string, string>
}

export const PSEO_LOCATIONS: PseoLocation[] = [
  {
    slug: "sydney",
    name: "Sydney",
    state: "NSW",
    intros: {
      trades:
        "Sydney&apos;s residential and commercial construction pipeline keeps trades businesses flat out — but high operating costs mean every hour lost to admin hits harder than anywhere else. Between quoting, coordinating crews across sprawling suburbs, and keeping up with invoicing, most Sydney tradies are working evenings just to stay on top of paperwork. I help trades businesses across Sydney connect their job management, quoting, and accounting tools so the admin runs itself.",
      accountants:
        "Sydney accounting firms face a unique pressure: high staff costs, growing compliance requirements, and clients who expect real-time visibility. If your junior staff are spending their days on data entry instead of advisory work, that&apos;s a workflow problem — and it&apos;s fixable. I help Sydney firms automate onboarding, document collection, and reporting so your team can focus on the work that actually grows the practice.",
      "professional-services":
        "Professional services firms in Sydney compete on responsiveness and quality — but internal processes often lag behind client expectations. Proposals sit in drafts, time tracking is inconsistent, and billing gets delayed because nobody owns the invoicing step. I help Sydney consultancies, agencies, and advisory firms wire up their CRM, project management, and accounting tools so nothing falls through the gaps.",
      healthcare:
        "Sydney&apos;s allied health sector is growing fast, but most practices are still running intake, billing, and recalls manually. Patient expectations are higher here — they want online booking, digital forms, and timely communication. If your front desk is still printing intake forms and manually chasing no-shows, there&apos;s a better way. I help Sydney health practices automate the repetitive admin so practitioners can focus on patient care.",
      property:
        "Managing property in Sydney means high volumes, demanding owners, and tenants who expect fast responses. Most agencies are drowning in maintenance requests, manual reconciliation, and monthly reporting that takes days to compile. I help Sydney property managers connect their trust accounting, maintenance workflows, and owner reporting so the operational load doesn&apos;t scale linearly with the portfolio.",
      legal:
        "Sydney&apos;s legal market is competitive, and firms that can&apos;t move quickly lose work. But internally, most practices are still opening matters manually, tracking deadlines in diaries, and losing billable time to poor time capture. I help Sydney law firms automate matter intake, document filing, time recording, and client updates — so lawyers spend more time on billable work and less on administration.",
    },
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "VIC",
    intros: {
      trades:
        "Melbourne&apos;s trades sector runs at pace — from inner-city renovations to outer-suburban new builds, the work is there. But the paperwork hasn&apos;t kept up. Most Melbourne tradies are still quoting manually, coordinating via group texts, and doing their invoicing on Sunday nights. I help trades businesses across Melbourne automate the quoting-to-invoice pipeline so the office side of the business runs as smoothly as the tools side.",
      accountants:
        "Melbourne has one of the most competitive accounting markets in the country, with firms competing hard on service quality and turnaround. If your practice is still manually onboarding clients and compiling monthly reports, you&apos;re spending time on work that should be automated. I help Melbourne accounting firms connect their practice management, document collection, and reporting tools to free up capacity for higher-value advisory work.",
      "professional-services":
        "Melbourne&apos;s professional services sector — from marketing agencies to management consultants — runs on relationships and deadlines. But behind the scenes, most firms are held together with spreadsheets, scattered time logs, and manual invoicing. I help Melbourne professional services firms build automated workflows from proposal to payment, so the business operations match the quality of the client work.",
      healthcare:
        "Melbourne&apos;s allied health and GP practices face a familiar challenge: growing patient numbers, shrinking admin capacity, and systems that don&apos;t talk to each other. Appointment reminders, intake forms, billing, and recalls are all manual processes in most practices. I help Melbourne healthcare businesses automate these workflows so the clinical team can focus on patients instead of paperwork.",
      property:
        "Melbourne&apos;s rental market keeps property managers busy, with large portfolios and tight regulatory requirements around trust accounting and tenant rights. Most agencies are spending hours on maintenance coordination, lease renewals, and owner reporting that could be automated. I help Melbourne property management firms connect their systems so routine operations happen automatically and nothing slips through.",
      legal:
        "Melbourne&apos;s legal sector ranges from boutique suburban firms to large CBD practices, but the admin challenges are remarkably similar. Matter intake is slow, documents are scattered, time recording is inconsistent, and client updates depend on individual lawyers remembering. I help Melbourne law firms automate these internal processes so fee earners can focus on fee earning.",
    },
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "QLD",
    intros: {
      trades:
        "South-East Queensland&apos;s construction boom means more jobs, more crews, and more admin. Brisbane trades businesses are growing fast — but the quoting, job tracking, and invoicing hasn&apos;t kept up. Most are still running on spreadsheets and text messages. I help Brisbane tradies connect their existing tools so the paperwork handles itself and they can focus on winning and delivering work.",
      accountants:
        "Brisbane&apos;s accounting sector is growing alongside the city, with firms taking on more clients but struggling to scale their internal processes. Tax season still means weeks of chasing documents, and onboarding a new client can take half a day of manual setup. I help Brisbane accounting practices automate the repetitive work — onboarding, document collection, reconciliation, and reporting — so the team can handle growth without hiring for admin roles.",
      "professional-services":
        "Brisbane&apos;s professional services market has matured significantly, with firms competing on speed and client experience. But many are still assembling proposals manually, tracking time inconsistently, and billing late because the invoicing process is clunky. I help Brisbane professional services firms automate their proposal-to-payment workflow so they get paid faster and clients stay better informed.",
      healthcare:
        "Brisbane&apos;s health sector is expanding rapidly, particularly in allied health and specialist practices across the northern corridor and south side. Patient volumes are up, but admin processes haven&apos;t scaled. Most practices are still doing intake on paper, sending appointment reminders manually, and billing days after the appointment. I help Brisbane healthcare businesses automate these workflows so growth doesn&apos;t mean more admin staff.",
      property:
        "Brisbane&apos;s property market has seen significant growth, and property managers are feeling the pressure. More properties means more maintenance requests, more lease renewals, and more owner reporting — all done manually in most agencies. I help Brisbane property management businesses automate the routine operations so the team can manage a growing portfolio without burning out.",
      legal:
        "Brisbane&apos;s legal market is growing but still dominated by firms that run on manual processes. Opening a new matter takes multiple data entry steps, documents live in email inboxes, and compliance deadlines are tracked on calendars. I help Brisbane law firms connect their practice management, document, and billing systems so lawyers can focus on legal work instead of administrative overhead.",
    },
  },
  {
    slug: "perth",
    name: "Perth",
    state: "WA",
    intros: {
      trades:
        "Perth&apos;s trades businesses service vast distances — a single plumber or electrician might cover suburbs 50 kilometres apart in one day. That makes coordination critical, and manual scheduling and quoting even more costly. I help Perth trades businesses automate the office side so teams in the field aren&apos;t waiting on paperwork and invoices go out the same day the job is done.",
      accountants:
        "Perth&apos;s accounting firms often serve a mix of local SMBs and mining-adjacent businesses, each with different compliance requirements and reporting cycles. Juggling these manually wastes significant capacity. I help Perth accounting practices automate client onboarding, document workflows, and monthly reporting so the practice can take on more clients without proportionally increasing admin overhead.",
      "professional-services":
        "Perth&apos;s professional services sector serves industries from mining and resources to local government and small business. The challenge is consistent: proposals take too long, time tracking is manual, and invoicing gets delayed. I help Perth professional services firms build automated workflows that connect their CRM, project management, and billing tools so nothing falls behind.",
      healthcare:
        "Perth&apos;s healthcare practices — particularly in the growing northern suburbs and inner-city allied health hubs — are dealing with increasing patient volumes and admin that hasn&apos;t kept up. Appointment reminders, intake, billing, and recalls are still largely manual. I help Perth health practices automate these processes so clinical staff can see more patients without more paperwork.",
      property:
        "Perth&apos;s property management sector deals with unique challenges: large geographic spread, seasonal rental fluctuations, and a mix of residential and FIFO accommodation. Most agencies are still manually tracking maintenance, reconciling trust accounts, and compiling owner reports. I help Perth property managers automate these routine tasks so the team can focus on tenant relationships and portfolio growth.",
      legal:
        "Perth&apos;s legal practices, from family law to commercial and resources work, share common operational inefficiencies. Matter intake is manual, time capture is inconsistent, and documents end up scattered across email and shared drives. I help Perth law firms connect their practice management and billing tools so administrative tasks don&apos;t eat into billable hours.",
    },
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "SA",
    intros: {
      trades:
        "Adelaide&apos;s trades sector is steady and relationship-driven — repeat clients and word-of-mouth referrals are everything. But the businesses that grow are the ones that get quotes out fast and invoices paid on time. Most Adelaide tradies are still doing this manually. I help trades businesses across Adelaide automate quoting, job management, and invoicing so they can win more work without working more hours.",
      accountants:
        "Adelaide&apos;s accounting market is tight-knit, and firms compete on service quality and turnaround. The practices that are growing are the ones freeing up staff time from manual processes. If your team is still chasing documents via email and compiling reports by hand, that capacity is being wasted. I help Adelaide accounting firms automate the workflows that slow them down — onboarding, document collection, reconciliation, and client reporting.",
      "professional-services":
        "Adelaide&apos;s professional services firms — from engineering consultancies to marketing agencies — are often lean teams doing high-value work. But admin overhead still eats into margins. Proposals assembled from scratch, time tracked in spreadsheets, invoicing done in batches at month-end. I help Adelaide professional services businesses build automated workflows so the operational side matches the quality of the client delivery.",
      healthcare:
        "Adelaide&apos;s allied health sector has grown significantly, with new practices opening across the southern suburbs, the CBD, and the Adelaide Hills. But growth often comes with admin growing too — more patients means more intake forms, more billing, more recalls. I help Adelaide health practices automate these backend processes so the clinical team can see more patients without drowning in paperwork.",
      property:
        "Adelaide&apos;s rental market is active, and property managers are handling larger portfolios with the same-sized teams. Maintenance coordination, lease tracking, and owner reporting are the tasks that consume the most time — and they&apos;re all highly automatable. I help Adelaide property management agencies connect their systems so routine operations run automatically and the team can focus on service quality.",
      legal:
        "Adelaide&apos;s legal practices, from suburban family law to CBD commercial firms, share a common problem: too much admin per matter. Opening files, tracking deadlines, capturing time, and updating clients all happen manually in most firms. I help Adelaide law firms automate these repetitive processes so solicitors spend their time on legal work, not data entry.",
    },
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    state: "QLD",
    intros: {
      trades:
        "The Gold Coast&apos;s building and renovation market is relentless — new developments, strata maintenance, and residential renos keep trades businesses running seven days a week. But the admin side is often held together with duct tape and good intentions. I help Gold Coast tradies automate their quoting, scheduling, and invoicing so the business side keeps pace with the jobs side.",
      accountants:
        "Gold Coast accounting firms serve a diverse mix of tourism operators, property investors, and small businesses — each with different needs and deadlines. Managing this variety manually creates bottlenecks during peak periods. I help Gold Coast accounting practices automate onboarding, document collection, and client reporting so the practice can handle seasonal surges without the usual scramble.",
      "professional-services":
        "The Gold Coast&apos;s professional services sector has grown beyond its tourism roots, with a strong base of digital agencies, consultancies, and advisory firms. But many are still running proposals, time tracking, and invoicing on manual processes that worked when the team was smaller. I help Gold Coast professional services firms automate these workflows so they can scale without adding admin overhead.",
      healthcare:
        "The Gold Coast&apos;s healthcare sector is booming, driven by population growth and an ageing demographic. Allied health practices in particular are seeing patient volumes that outstrip their admin capacity. Appointment reminders, intake, billing, and recalls are mostly manual. I help Gold Coast health practices automate these processes so growth doesn&apos;t mean more time spent on admin.",
      property:
        "The Gold Coast property market combines high-density holiday rentals with residential portfolios, creating unique management challenges. Maintenance volumes are higher, tenant turnover is faster, and owner reporting needs to reflect complex income streams. I help Gold Coast property managers automate maintenance workflows, lease tracking, and owner statements so the team can manage more properties without more staff.",
      legal:
        "Gold Coast legal practices handle everything from conveyancing and property law to family matters and business disputes. The common thread is administrative overhead — matter intake, document management, and time capture all happen manually in most firms. I help Gold Coast law firms automate these operational tasks so the practice runs more efficiently and lawyers capture more billable time.",
    },
  },
  {
    slug: "canberra",
    name: "Canberra",
    state: "ACT",
    intros: {
      trades:
        "Canberra&apos;s trades sector works across government, commercial, and residential projects — often with stricter documentation and compliance requirements than other cities. Getting quotes out quickly and keeping paperwork audit-ready matters more here. I help Canberra trades businesses automate their quoting, job tracking, and invoicing workflows so compliance doesn&apos;t come at the cost of productivity.",
      accountants:
        "Canberra&apos;s accounting firms often serve a mix of government contractors, not-for-profits, and small businesses — each with distinct reporting and compliance needs. Managing these different client types manually creates unnecessary complexity. I help Canberra accounting practices automate their client workflows so the team can handle diverse requirements without duplicating effort across different processes.",
      "professional-services":
        "Canberra&apos;s professional services sector is heavily influenced by government work — proposals need to be precise, reporting thorough, and timelines tight. The admin burden per project is often higher than in other markets. I help Canberra consultancies and advisory firms automate proposals, time tracking, and project reporting so they can focus on delivering outcomes rather than managing spreadsheets.",
      healthcare:
        "Canberra&apos;s healthcare practices serve a well-informed patient base that expects a modern experience — online booking, digital intake, and timely communication. Practices that are still running manual processes risk falling behind. I help Canberra health practices automate appointments, intake, billing, and recalls so the patient experience matches what the community expects.",
      property:
        "Canberra&apos;s property market has its own rhythm — government relocations, lease structures unique to the ACT, and a tenant base that expects professional service. Most property managers are still handling maintenance, lease renewals, and trust accounting manually. I help Canberra property management firms automate these processes so the team can deliver consistent service across the portfolio.",
      legal:
        "Canberra&apos;s legal practices often work across government, regulatory, and commercial matters — with documentation and compliance requirements that demand precision. Manual matter intake and time capture are particularly costly here, where billable hours and deadlines are closely scrutinised. I help Canberra law firms automate the administrative side of practice so lawyers can focus on the substantive legal work.",
    },
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    state: "NSW",
    intros: {
      trades:
        "Newcastle&apos;s trades sector is thriving — a mix of new housing, commercial fitouts, and renovation work across the Hunter region keeps businesses busy. But many are still running the admin side like they did when they were a one-person operation. I help Newcastle tradies automate quoting, job management, and invoicing so the business can grow without the paperwork growing with it.",
      accountants:
        "Newcastle&apos;s accounting firms serve the Hunter region&apos;s diverse economy — from mining and manufacturing to hospitality and retail. Each industry has different cycles and compliance needs. I help Newcastle accounting practices automate the common workflows that consume time regardless of client type: onboarding, document chasing, reconciliation, and monthly reporting.",
      "professional-services":
        "Newcastle&apos;s professional services sector has grown significantly as the city attracts businesses that would have previously set up in Sydney. But with growth comes the usual scaling challenges — proposals, time tracking, and invoicing are still manual in many firms. I help Newcastle professional services businesses automate their internal operations so they can compete with larger city firms without the overhead.",
      healthcare:
        "Newcastle&apos;s health sector serves both the city and the broader Hunter region, with practices dealing with high volumes and patients travelling from surrounding areas. Efficient scheduling, intake, and billing matter even more when patients are coming from further afield. I help Newcastle health practices automate these processes so the practice runs smoothly for both local and regional patients.",
      property:
        "Newcastle&apos;s property market has seen strong growth, with rental demand increasing and portfolios expanding across the Hunter region. Property managers are handling more properties but the admin hasn&apos;t been automated to match. I help Newcastle property management firms connect their maintenance, leasing, and reporting tools so the team can manage growth without proportionally increasing admin time.",
      legal:
        "Newcastle&apos;s legal sector serves a growing regional economy, with practices handling everything from property and commercial work to family and criminal law. The admin challenges are the same as larger cities — manual matter intake, scattered documents, inconsistent time capture. I help Newcastle law firms automate these operational workflows so the practice can handle more matters without more admin staff.",
    },
  },
]
