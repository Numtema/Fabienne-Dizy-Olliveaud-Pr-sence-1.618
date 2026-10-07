"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { FAQItem } from "@/content/faq";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`divide-y divide-graphite/10 border-y border-graphite/10 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id} className="py-5 md:py-6 group transition-colors">
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 rounded-lg py-1"
              >
                <span className="font-editorial text-xl md:text-2xl lg:text-[26px] text-graphite font-normal group-hover:text-brass transition-colors">
                  <span className="text-xs font-sans text-graphite/40 mr-4 font-normal tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 w-8 h-8 rounded-full border border-graphite/15 flex items-center justify-center text-graphite/70 group-hover:border-graphite/35 transition-colors"
                  aria-hidden="true"
                >
                  <Plus size={15} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 pl-8 md:pl-10 pr-6 text-graphite/80 text-[15px] md:text-base leading-relaxed max-w-3xl">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
