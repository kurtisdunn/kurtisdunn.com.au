"use client"

import { useState, type FormEvent } from "react"
import { trackFormSubmit } from "@/lib/analytics"

const ENQUIRY_TYPES = [
  "Automation Audit",
  "General Enquiry",
  "Ongoing Support",
  "Partnership/Media",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      enquiryType: (form.elements.namedItem("enquiry-type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to send")

      trackFormSubmit("contact")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again or email kurtis@kurtisdunn.com.au directly.")
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-cta/30 bg-cta/5 p-6 text-center">
        <p className="font-heading text-lg font-semibold text-text-primary">
          Message sent
        </p>
        <p className="mt-2 text-text-secondary">
          Thanks for reaching out. I&apos;ll get back to you within one business
          day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="block text-sm font-medium text-text-primary"
        >
          Business name
        </label>
        <input
          type="text"
          id="business"
          name="business"
          className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry-type"
          className="block text-sm font-medium text-text-primary"
        >
          What can I help with?
        </label>
        <select
          id="enquiry-type"
          name="enquiry-type"
          required
          className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
        >
          <option value="">Select one...</option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-input bg-white px-3 py-2.5 text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary resize-y"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-md bg-cta px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-cta-hover hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:-translate-y-px active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
