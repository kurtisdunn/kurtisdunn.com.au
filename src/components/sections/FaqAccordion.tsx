"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { CaretDown } from "@phosphor-icons/react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/data/faq"

type FaqAccordionProps = {
  items: FaqItem[]
  heading?: string
}

export function FaqAccordion({
  items,
  heading = "Questions You Probably Have",
}: FaqAccordionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>{heading}</SectionHeading>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {items.map((item, i) => (
            <Accordion.Item
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-white overflow-hidden"
            >
              <Accordion.Trigger
                className={cn(
                  "flex w-full items-center justify-between px-5 py-4 text-left font-heading text-base font-semibold text-text-primary transition-colors hover:text-primary cursor-pointer",
                  "group"
                )}
              >
                {item.question}
                <CaretDown
                  className="h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-5 pb-4 text-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
