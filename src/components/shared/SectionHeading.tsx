import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  children: React.ReactNode
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  children,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-[40px] lg:leading-tight",
          align === "center" && "mx-auto max-w-3xl"
        )}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-text-secondary",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
