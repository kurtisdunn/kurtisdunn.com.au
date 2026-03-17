"use client"

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { X, ArrowRight, Check } from "@phosphor-icons/react"
import { ASSESSMENT_URL } from "@/lib/constants"
import { trackCtaClick, trackFormSubmit } from "@/lib/analytics"

const COOLDOWN_KEY = "kd_exit_popup_dismissed"
const COOLDOWN_DAYS = 14
const ARM_DELAY_MS = 5000
const SCROLL_THRESHOLD = 0.4

const EXCLUDED_PATHS = ["/assessment", "/book-audit"]

function isWithinCooldown(): boolean {
  if (typeof window === "undefined") return true
  const dismissed = localStorage.getItem(COOLDOWN_KEY)
  if (!dismissed) return false
  const elapsed = Date.now() - Number(dismissed)
  return elapsed < COOLDOWN_DAYS * 24 * 60 * 60 * 1000
}

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const armedRef = useRef(false)
  const triggeredRef = useRef(false)
  const pathname = usePathname()

  const dismiss = useCallback(() => {
    setVisible(false)
    localStorage.setItem(COOLDOWN_KEY, Date.now().toString())
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSending(true)

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent-popup" }),
      })
      trackFormSubmit("exit_intent_email")
      setSubmitted(true)
    } catch {
      // Still show success — don't block UX for logging failure
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  // ESC key handler
  useEffect(() => {
    if (!visible) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [visible, dismiss])

  // Trigger logic
  useEffect(() => {
    if (
      EXCLUDED_PATHS.some(
        (p) => pathname === p || pathname.startsWith(p + "/"),
      )
    ) {
      return
    }

    if (isWithinCooldown()) return

    const timer = setTimeout(() => {
      armedRef.current = true
    }, ARM_DELAY_MS)

    const show = () => {
      if (!armedRef.current || triggeredRef.current) return
      triggeredRef.current = true
      setVisible(true)
    }

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }

    let reachedThreshold = false
    let lastScrollY = 0

    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollRatio = docHeight > 0 ? scrollY / docHeight : 0

      if (scrollRatio >= SCROLL_THRESHOLD) {
        reachedThreshold = true
      }

      if (reachedThreshold && scrollY < lastScrollY) {
        show()
      }

      lastScrollY = scrollY
    }

    document.documentElement.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      document.documentElement.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Exit intent popup"
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 text-text-muted transition-colors hover:text-text-primary cursor-pointer"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="space-y-4 text-center py-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cta/10">
              <Check className="h-6 w-6 text-cta" />
            </div>
            <h2 className="font-heading text-xl font-bold text-text-primary">
              You&apos;re in!
            </h2>
            <p className="text-sm text-text-secondary">
              Check your inbox for automation tips. In the meantime:
            </p>
            <Link
              href={ASSESSMENT_URL}
              onClick={() =>
                trackCtaClick("Get My Free Plan", "exit-intent-popup-thankyou")
              }
              className="inline-flex items-center gap-2 rounded-lg bg-cta py-2.5 px-5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              Get Your Free Automation Plan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Before you go&hellip;
            </p>
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Get Free Automation Tips
            </h2>
            <p className="text-text-secondary">
              Join 500+ Australian business owners getting practical automation
              tips — what to automate, which tools to use, and how to save
              10+ hours a week.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="you@business.com.au"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={sending}
                className="rounded-lg bg-cta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover disabled:opacity-50 cursor-pointer"
              >
                {sending ? "..." : "Subscribe"}
              </button>
            </form>

            <div className="flex items-center justify-between">
              <p className="text-xs text-text-muted">
                No spam. Unsubscribe anytime.
              </p>
              <Link
                href={ASSESSMENT_URL}
                onClick={() =>
                  trackCtaClick("Get My Free Plan", "exit-intent-popup")
                }
                className="text-xs font-medium text-primary hover:underline"
              >
                Or get a free automation plan &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
