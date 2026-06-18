"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  idPrefix?: string;
}

export function Accordion({ items, className, idPrefix = "accordion" }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className={cn("w-full divide-y divide-brand-muted/20", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="py-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-panel-${index}`}
              id={`${idPrefix}-trigger-${index}`}
              className="flex min-h-12 w-full items-center justify-between gap-4 rounded-lg text-left"
            >
              <span className="min-w-0 flex-1 font-serif text-xl font-semibold leading-snug text-brand-dark">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn("h-5 w-5 flex-shrink-0 text-brand-accent transition-transform", isOpen && "rotate-180")}
              />
            </button>
            <div
              id={`${idPrefix}-panel-${index}`}
              role="region"
              aria-labelledby={`${idPrefix}-trigger-${index}`}
              hidden={!isOpen}
              className="pt-4 leading-relaxed text-brand-muted"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
