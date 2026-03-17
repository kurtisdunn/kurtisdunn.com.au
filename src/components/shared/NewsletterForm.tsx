"use client"

import { useState, type FormEvent } from "react"
import { trackFormSubmit } from "@/lib/analytics"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSending(true)

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer-newsletter" }),
      })
      trackFormSubmit("newsletter_signup")
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <p className="text-sm text-cta font-medium">
        You&apos;re in! Check your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        placeholder="you@business.com.au"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
        className="min-w-0 flex-1 rounded-md border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        disabled={sending}
        className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:opacity-50 cursor-pointer"
      >
        {sending ? "..." : "Join"}
      </button>
    </form>
  )
}
