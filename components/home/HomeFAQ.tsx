"use client";

import React from "react";
import { faqList } from "@/content/faq";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { generateFAQSchema, sanitizeJsonLd } from "@/lib/jsonld";

export function HomeFAQ() {
  const faqSchema = generateFAQSchema(faqList);

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto">
      {/* Schema.org FAQPage per spec #60 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(faqSchema) }}
      />

      <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <SectionLabel>Éclaircissements</SectionLabel>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight">
          Questions fréquentes & <br />
          <span className="italic font-normal text-brass">cadre de pratique.</span>
        </h2>
        <p className="text-graphite/70 text-base font-light">
          Quelques repères simples pour aborder votre venue au cabinet avec clarté et tranquillité.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <FAQAccordion items={faqList} />
      </Reveal>
    </section>
  );
}
