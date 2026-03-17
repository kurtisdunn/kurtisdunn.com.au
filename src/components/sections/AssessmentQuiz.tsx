"use client"

import { useState } from "react"
import {
  Check,
  ArrowLeft,
  ArrowRight,
  CircleNotch,
  UserCheck,
  Buildings,
  GearSix,
  Clock,
  Lightning,
  Crosshair,
  Wrench,
  Briefcase,
  Calculator,
  Heart,
  Building,
  Scales,
  Question,
} from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { trackAssessmentStep, trackAssessmentComplete } from "@/lib/analytics"
import type { AssessmentPayload } from "@/app/api/assessment/route"

// ─── Section config ───────────────────────────────────────────────────────────

const SECTIONS = [
  { id: "contact", title: "About You", icon: UserCheck, description: "Let's start with the basics" },
  { id: "business", title: "Your Business", icon: Buildings, description: "Industry, team size and experience" },
  { id: "operations", title: "Daily Operations", icon: GearSix, description: "Where your time actually goes" },
  { id: "timewasters", title: "Time Wasters", icon: Clock, description: "The specific situations slowing you down" },
  { id: "technology", title: "Tools & Tech", icon: Lightning, description: "Your current software stack" },
  { id: "goals", title: "Goals", icon: Crosshair, description: "What you want to achieve" },
] as const

// ─── Form state ───────────────────────────────────────────────────────────────

type FormData = Omit<AssessmentPayload, never>

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  businessName: "",
  biggestPainDescription: "",
  industry: "",
  teamSize: "",
  businessAge: "",
  timeConsumingTasks: [],
  biggestBottleneck: "",
  taskTracking: "",
  processConsistency: "",
  timeWasterSituations: [],
  adminHours: "",
  currentTools: [],
  currentAutomation: [],
  businessGoals: [],
  extraTimeUse: "",
}

// ─── Reusable input primitives ────────────────────────────────────────────────

const fieldCls =
  "block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

const errorFieldCls =
  "block w-full rounded-md border border-red-400 bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-text-primary"
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 text-xs text-red-600" role="alert">
      {message}
    </p>
  )
}

// ─── Radio card ───────────────────────────────────────────────────────────────

function RadioCard({
  value,
  label,
  selected,
  onSelect,
}: {
  value: string
  label: string
  selected: boolean
  onSelect: (v: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border p-3.5 text-left text-sm transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        selected
          ? "border-primary bg-primary/5 text-text-primary"
          : "border-border bg-white text-text-secondary hover:border-primary/40 hover:bg-primary/[0.02]",
      )}
    >
      <div
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-primary bg-primary" : "border-input",
        )}
      >
        {selected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
      </div>
      <span className="leading-snug">{label}</span>
    </button>
  )
}

// ─── Checkbox card ────────────────────────────────────────────────────────────

function CheckboxCard({
  value,
  label,
  checked,
  onToggle,
}: {
  value: string
  label: string
  checked: boolean
  onToggle: (v: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(value)}
      aria-pressed={checked}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border p-3.5 text-left text-sm transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        checked
          ? "border-primary bg-primary/5 text-text-primary"
          : "border-border bg-white text-text-secondary hover:border-primary/40 hover:bg-primary/[0.02]",
      )}
    >
      <div
        className={cn(
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-colors",
          checked ? "border-primary bg-primary" : "border-input",
        )}
      >
        {checked && <Check className="h-2.5 w-2.5 text-white" aria-hidden="true" />}
      </div>
      <span className="leading-snug">{label}</span>
    </button>
  )
}

// ─── Industry icon cards ──────────────────────────────────────────────────────

const INDUSTRIES = [
  { value: "Trades & Field Service", icon: Wrench },
  { value: "Professional Services", icon: Briefcase },
  { value: "Accounting & Finance", icon: Calculator },
  { value: "Healthcare & Allied Health", icon: Heart },
  { value: "Property & Real Estate", icon: Building },
  { value: "Legal", icon: Scales },
  { value: "Other", icon: Question },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({
  current,
  total,
}: {
  current: number
  total: number
}) {
  const pct = Math.round(((current) / total) * 100)
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs text-text-muted">
        <span>
          Step {current} of {total}
        </span>
        <span>{pct}% complete</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border">
        <div
          className="h-1.5 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({
  index,
  name,
  description,
  Icon,
}: {
  index: number
  name: string
  description: string
  Icon: React.ElementType
}) {
  return (
    <div className="mb-6 flex items-start gap-4 rounded-lg border border-border bg-surface-alt p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Section {index + 1} of {SECTIONS.length}
        </p>
        <h2 className="font-heading text-lg font-semibold text-text-primary">
          {name}
        </h2>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

type QuizState = "form" | "submitting" | "done"

export function AssessmentQuiz() {
  const [section, setSection] = useState(0)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [quizState, setQuizState] = useState<QuizState>("form")
  const [apiError, setApiError] = useState<string | null>(null)

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  const clearError = (key: keyof FormData) =>
    setErrors((e) => ({ ...e, [key]: undefined }))

  // ── Validation per section ──────────────────────────────────────────────

  function validateSection(idx: number): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {}

    if (idx === 0) {
      if (!form.name.trim()) errs.name = "Please enter your name"
      if (!form.email.trim()) errs.email = "Please enter your email"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
        errs.email = "That doesn't look like an email address"
      if (!form.businessName.trim()) errs.businessName = "Please enter your business name"
    }

    if (idx === 1) {
      if (!form.industry) errs.industry = "Please select an industry"
      if (!form.teamSize) errs.teamSize = "Please select your team size"
      if (!form.businessAge) errs.businessAge = "Please select how long you've been in business"
    }

    if (idx === 2) {
      if (form.timeConsumingTasks.length === 0)
        errs.timeConsumingTasks = "Please select at least one"
      if (!form.processConsistency) errs.processConsistency = "Please rate your process consistency"
      if (!form.taskTracking) errs.taskTracking = "Please select how you track tasks"
    }

    if (idx === 3) {
      if (!form.adminHours) errs.adminHours = "Please select an option"
    }

    if (idx === 4) {
      if (form.currentTools.length === 0) errs.currentTools = "Please select at least one"
    }

    if (idx === 5) {
      if (form.businessGoals.length === 0) errs.businessGoals = "Please select at least one"
      if (!form.extraTimeUse) errs.extraTimeUse = "Please select an option"
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleNext() {
    if (!validateSection(section)) return
    trackAssessmentStep(section + 1, `section_${SECTIONS[section].id}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setSection((s) => s + 1)
  }

  function handleBack() {
    setSection((s) => Math.max(0, s - 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleSubmit() {
    if (!validateSection(section)) return

    trackAssessmentComplete(form.industry, form.teamSize, form.timeConsumingTasks[0] ?? "")
    setQuizState("submitting")
    setApiError(null)

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? `Server error ${res.status}`)
      }

      setQuizState("done")
    } catch (err) {
      console.error("[assessment] submit error:", err)
      setApiError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      )
      setQuizState("form")
    }
  }

  if (quizState === "done") {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 py-12 text-center animate-in fade-in duration-300">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cta/10">
          <Check className="h-7 w-7 text-cta" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-text-primary">
          Thank you, {form.name.split(" ")[0]}!
        </h2>
        <p className="max-w-md text-text-secondary">
          Your personalised automation plan is being generated and will be sent
          to <strong className="text-text-primary">{form.email}</strong> within
          the next few minutes.
        </p>
        <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-5 py-3">
          <p className="text-sm text-text-secondary">
            Want to get started sooner?{" "}
            <a
              href="/book-audit"
              className="font-semibold text-primary hover:underline"
            >
              Book your free 30-minute audit
            </a>
          </p>
        </div>
      </div>
    )
  }

  if (quizState === "submitting") {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 py-12 text-center">
        <CircleNotch className="h-10 w-10 animate-spin text-primary" aria-hidden="true" />
        <p className="font-heading text-lg font-semibold text-text-primary">
          Submitting your assessment...
        </p>
      </div>
    )
  }

  const s = SECTIONS[section]
  const SectionIcon = s.icon

  return (
    <div>
      <ProgressBar current={section + 1} total={SECTIONS.length} />
      <SectionHeader
        index={section}
        name={s.title}
        description={s.description}
        Icon={SectionIcon}
      />

      {apiError && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {apiError}{" "}
          <button
            type="button"
            className="font-medium underline hover:no-underline cursor-pointer"
            onClick={() => setApiError(null)}
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="space-y-6">
        {/* ── Section 0: Contact ──────────────────────────────────────── */}
        {section === 0 && (
          <>
            <div>
              <Label htmlFor="name" required>Your name</Label>
              <input
                id="name"
                type="text"
                autoComplete="given-name"
                placeholder="e.g. Sarah Chen"
                value={form.name}
                onChange={(e) => { set("name", e.target.value); clearError("name") }}
                className={errors.name ? errorFieldCls : fieldCls}
              />
              <FieldError message={errors.name} />
            </div>

            <div>
              <Label htmlFor="email" required>Email address</Label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@business.com.au"
                value={form.email}
                onChange={(e) => { set("email", e.target.value); clearError("email") }}
                className={errors.email ? errorFieldCls : fieldCls}
              />
              <FieldError message={errors.email} />
            </div>

            <div>
              <Label htmlFor="businessName" required>Business name</Label>
              <input
                id="businessName"
                type="text"
                autoComplete="organization"
                placeholder="e.g. Smith Plumbing"
                value={form.businessName}
                onChange={(e) => { set("businessName", e.target.value); clearError("businessName") }}
                className={errors.businessName ? errorFieldCls : fieldCls}
              />
              <FieldError message={errors.businessName} />
            </div>

            <div>
              <Label htmlFor="biggestPainDescription">
                What&apos;s your biggest time-waster right now? (Optional)
              </Label>
              <textarea
                id="biggestPainDescription"
                rows={3}
                placeholder="e.g. Every Monday morning I spend 2 hours copying job details from emails into our system..."
                value={form.biggestPainDescription}
                onChange={(e) => set("biggestPainDescription", e.target.value)}
                className={cn(fieldCls, "resize-y")}
              />
              <p className="mt-1 text-xs text-text-muted">
                Even a rough description helps generate better recommendations.
              </p>
            </div>
          </>
        )}

        {/* ── Section 1: Business ─────────────────────────────────────── */}
        {section === 1 && (
          <>
            <div>
              <Label required>What industry is your business in?</Label>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {INDUSTRIES.map(({ value, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => { set("industry", value); clearError("industry") }}
                    aria-pressed={form.industry === value}
                    className={cn(
                      "flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-lg border p-3 text-center text-xs font-medium transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      form.industry === value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-white text-text-secondary hover:border-primary/40",
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="leading-tight">{value}</span>
                  </button>
                ))}
              </div>
              <FieldError message={errors.industry} />
            </div>

            <div>
              <Label required>How many people work in your business?</Label>
              <div className="space-y-2">
                {["1–5", "6–20", "21–50", "51+"].map((v) => (
                  <RadioCard
                    key={v}
                    value={v}
                    label={v}
                    selected={form.teamSize === v}
                    onSelect={(val) => { set("teamSize", val); clearError("teamSize") }}
                  />
                ))}
              </div>
              <FieldError message={errors.teamSize} />
            </div>

            <div>
              <Label required>How long have you been in business?</Label>
              <div className="space-y-2">
                {[
                  { value: "Less than 1 year", label: "Less than 1 year" },
                  { value: "1–5 years", label: "1–5 years" },
                  { value: "6–10 years", label: "6–10 years" },
                  { value: "More than 10 years", label: "More than 10 years" },
                ].map(({ value, label }) => (
                  <RadioCard
                    key={value}
                    value={value}
                    label={label}
                    selected={form.businessAge === value}
                    onSelect={(val) => { set("businessAge", val); clearError("businessAge") }}
                  />
                ))}
              </div>
              <FieldError message={errors.businessAge} />
            </div>
          </>
        )}

        {/* ── Section 2: Operations ───────────────────────────────────── */}
        {section === 2 && (
          <>
            <div>
              <Label required>Which tasks take up most of your time each week?</Label>
              <p className="mb-3 text-xs text-text-muted">Select all that apply.</p>
              <div className="space-y-2">
                {[
                  "Managing inventory or orders",
                  "Invoicing and billing",
                  "Scheduling appointments or calendar management",
                  "Responding to customer enquiries",
                  "Marketing (social posts, email campaigns)",
                  "Data entry or record-keeping",
                  "Payroll or team management",
                  "Quoting and proposals",
                ].map((task) => (
                  <CheckboxCard
                    key={task}
                    value={task}
                    label={task}
                    checked={form.timeConsumingTasks.includes(task)}
                    onToggle={(v) => {
                      set("timeConsumingTasks", toggle(form.timeConsumingTasks, v))
                      clearError("timeConsumingTasks")
                    }}
                  />
                ))}
              </div>
              <FieldError message={errors.timeConsumingTasks} />
            </div>

            <div>
              <Label htmlFor="biggestBottleneck">
                What&apos;s the biggest bottleneck in your workflow? (Optional)
              </Label>
              <textarea
                id="biggestBottleneck"
                rows={3}
                placeholder="e.g. We have to manually enter the same job details into three different systems every time..."
                value={form.biggestBottleneck}
                onChange={(e) => set("biggestBottleneck", e.target.value)}
                className={cn(fieldCls, "resize-y")}
              />
            </div>

            <div>
              <Label required>How do you currently track tasks and deadlines?</Label>
              <div className="space-y-2">
                {[
                  { value: "Paper or notebooks", label: "Paper or notebooks" },
                  { value: "Spreadsheets (Excel, Google Sheets)", label: "Spreadsheets (Excel, Google Sheets)" },
                  { value: "Digital tool (Trello, Asana, Monday, etc.)", label: "Digital tool (Trello, Asana, Monday, etc.)" },
                  { value: "Mental notes / memory", label: "Mental notes / memory" },
                ].map(({ value, label }) => (
                  <RadioCard
                    key={value}
                    value={value}
                    label={label}
                    selected={form.taskTracking === value}
                    onSelect={(val) => { set("taskTracking", val); clearError("taskTracking") }}
                  />
                ))}
              </div>
              <FieldError message={errors.taskTracking} />
            </div>

            <div>
              <Label required>
                How consistent and documented are your daily processes? (1 = ad hoc, 5 = fully documented)
              </Label>
              <div className="flex gap-2">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => { set("processConsistency", n); clearError("processConsistency") }}
                    aria-pressed={form.processConsistency === n}
                    className={cn(
                      "flex h-11 flex-1 items-center justify-center rounded-lg border font-heading font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      form.processConsistency === n
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-white text-text-secondary hover:border-primary/40",
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs text-text-muted">
                <span>Ad hoc</span>
                <span>Fully documented</span>
              </div>
              <FieldError message={errors.processConsistency} />
            </div>
          </>
        )}

        {/* ── Section 3: Time wasters ─────────────────────────────────── */}
        {section === 3 && (
          <>
            <div>
              <Label>Which of these situations do you experience? (Select all that apply)</Label>
              <div className="space-y-2">
                {[
                  "Forgetting to follow up with customers or leads on time",
                  "Entering the same information into multiple systems",
                  "Spending hours manually creating reports, invoices, or summaries",
                  "Missing or double-booking appointments",
                  "Chasing late payments or billing reminders",
                  "None of these — we handle them smoothly",
                ].map((situation) => (
                  <CheckboxCard
                    key={situation}
                    value={situation}
                    label={situation}
                    checked={form.timeWasterSituations.includes(situation)}
                    onToggle={(v) => set("timeWasterSituations", toggle(form.timeWasterSituations, v))}
                  />
                ))}
              </div>
            </div>

            <div>
              <Label required>
                How many hours per week does your team spend on repetitive admin?
              </Label>
              <p className="mb-3 text-xs text-text-muted">Emails, data entry, manual reporting, etc.</p>
              <div className="space-y-2">
                {[
                  { value: "Less than 5 hours", label: "Less than 5 hours" },
                  { value: "5–10 hours", label: "5–10 hours" },
                  { value: "10–20 hours", label: "10–20 hours" },
                  { value: "More than 20 hours", label: "More than 20 hours" },
                ].map(({ value, label }) => (
                  <RadioCard
                    key={value}
                    value={value}
                    label={label}
                    selected={form.adminHours === value}
                    onSelect={(val) => { set("adminHours", val); clearError("adminHours") }}
                  />
                ))}
              </div>
              <FieldError message={errors.adminHours} />
            </div>
          </>
        )}

        {/* ── Section 4: Technology ───────────────────────────────────── */}
        {section === 4 && (
          <>
            <div>
              <Label required>Which tools does your team use regularly?</Label>
              <p className="mb-3 text-xs text-text-muted">Select all that apply.</p>
              <div className="space-y-2">
                {[
                  "Email & calendar (Gmail, Outlook)",
                  "Spreadsheets (Excel, Google Sheets)",
                  "Accounting software (Xero, MYOB, QuickBooks)",
                  "CRM (HubSpot, Salesforce, Pipedrive)",
                  "Project management (Trello, Asana, Monday.com)",
                  "Scheduling / booking (Calendly, Cal.com)",
                  "Job management (ServiceM8, Tradify, Fergus)",
                  "Practice management (Karbon, GreatSoft, Practice Evolve)",
                  "None of the above — mostly manual",
                ].map((tool) => (
                  <CheckboxCard
                    key={tool}
                    value={tool}
                    label={tool}
                    checked={form.currentTools.includes(tool)}
                    onToggle={(v) => {
                      set("currentTools", toggle(form.currentTools, v))
                      clearError("currentTools")
                    }}
                  />
                ))}
              </div>
              <FieldError message={errors.currentTools} />
            </div>

            <div>
              <Label>Do you currently use any automation tools? (Select all that apply)</Label>
              <p className="mb-3 text-xs text-text-muted">It&apos;s fine if none — just lets me know where to start.</p>
              <div className="space-y-2">
                {[
                  "Zapier",
                  "Make (Integromat)",
                  "Microsoft Power Automate",
                  "Built-in automations in existing tools",
                  "Custom scripts or code",
                  "None",
                ].map((item) => (
                  <CheckboxCard
                    key={item}
                    value={item}
                    label={item}
                    checked={form.currentAutomation.includes(item)}
                    onToggle={(v) => set("currentAutomation", toggle(form.currentAutomation, v))}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Section 5: Goals ────────────────────────────────────────── */}
        {section === 5 && (
          <>
            <div>
              <Label required>What are you most hoping automation will help you achieve?</Label>
              <p className="mb-3 text-xs text-text-muted">Select all that apply.</p>
              <div className="space-y-2">
                {[
                  "Save time — get hours back every week",
                  "Scale without hiring more admin staff",
                  "Reduce errors and improve quality",
                  "Improve customer experience and response times",
                  "Get better visibility into how the business is performing",
                  "Stop relying on one person who holds all the knowledge",
                ].map((goal) => (
                  <CheckboxCard
                    key={goal}
                    value={goal}
                    label={goal}
                    checked={form.businessGoals.includes(goal)}
                    onToggle={(v) => {
                      set("businessGoals", toggle(form.businessGoals, v))
                      clearError("businessGoals")
                    }}
                  />
                ))}
              </div>
              <FieldError message={errors.businessGoals} />
            </div>

            <div>
              <Label required>
                If you got 10 hours a week back, what would you do with them?
              </Label>
              <div className="space-y-2">
                {[
                  { value: "Spend more time with clients", label: "Spend more time with clients and grow revenue" },
                  { value: "Work on the business, not just in it", label: "Work on the business — strategy, growth, improvement" },
                  { value: "Reduce stress and work more reasonable hours", label: "Reduce stress and work more reasonable hours" },
                  { value: "Delay or avoid hiring", label: "Delay or avoid hiring another person" },
                ].map(({ value, label }) => (
                  <RadioCard
                    key={value}
                    value={value}
                    label={label}
                    selected={form.extraTimeUse === value}
                    onSelect={(val) => { set("extraTimeUse", val); clearError("extraTimeUse") }}
                  />
                ))}
              </div>
              <FieldError message={errors.extraTimeUse} />
            </div>
          </>
        )}
      </div>

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {section > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
        ) : (
          <div />
        )}

        {section < SECTIONS.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-primary-light hover:shadow-md hover:-translate-y-px active:translate-y-0 cursor-pointer"
          >
            Continue
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:-translate-y-px active:translate-y-0 cursor-pointer"
          >
            Generate My Plan
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
