"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { trackCtaClick } from "@/lib/analytics"

type CtaButtonProps = {
  href?: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg"
  ctaLocation?: string
  className?: string
  type?: "button" | "submit"
  onClick?: () => void
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  ctaLocation = "unknown",
  className,
  type = "button",
  onClick,
}: CtaButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 cursor-pointer"

  const variants = {
    primary:
      "bg-cta text-white hover:bg-cta-hover hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)] hover:-translate-y-px active:translate-y-0",
    secondary:
      "bg-primary text-white hover:bg-primary-light hover:shadow-md hover:-translate-y-px active:translate-y-0",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  }

  const sizes = {
    default: "px-6 py-3 text-base h-11",
    lg: "px-8 py-4 text-lg h-[52px]",
  }

  const handleClick = () => {
    trackCtaClick(typeof children === "string" ? children : "CTA", ctaLocation)
    onClick?.()
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={handleClick}>
      {children}
    </button>
  )
}
