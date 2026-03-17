"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { List, X } from "@phosphor-icons/react"
import { NAV_ITEMS, BOOKING_URL } from "@/lib/constants"
import { CtaButton } from "@/components/shared/CtaButton"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-logo text-primary">Kurtis Dunn</span>
          <span className="text-[11px] font-body font-medium tracking-wide text-text-muted">Business Automation</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-text-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton
            href={BOOKING_URL}
            size="default"
            ctaLocation="header"
            className="ml-3"
          >
            Book Free Audit
          </CtaButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:text-primary md:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-3 text-lg font-medium transition-colors",
                  pathname === item.href
                    ? "bg-surface-alt text-primary"
                    : "text-text-primary hover:bg-surface-alt"
                )}
              >
                {item.label}
              </Link>
            ))}
            <CtaButton
              href={BOOKING_URL}
              size="lg"
              ctaLocation="mobile-menu"
              className="mt-4"
            >
              Book Your Free Automation Audit
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
