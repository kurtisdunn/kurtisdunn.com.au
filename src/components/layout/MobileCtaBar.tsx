"use client"

import { usePathname } from "next/navigation"
import { CtaButton } from "@/components/shared/CtaButton"
import { BOOKING_URL } from "@/lib/constants"

export function MobileCtaBar() {
  const pathname = usePathname()

  if (pathname === "/book-audit" || pathname.startsWith("/book-audit/")) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white p-3 md:hidden">
      <CtaButton
        href={BOOKING_URL}
        size="lg"
        ctaLocation="mobile-sticky-bar"
        className="w-full"
      >
        Book Free Audit
      </CtaButton>
    </div>
  )
}
