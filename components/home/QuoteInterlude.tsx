import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function QuoteInterlude() {
  return (
    <section className="relative py-28 sm:py-40 px-6 sm:px-12 text-center max-w-5xl mx-auto overflow-hidden">
      <Reveal className="space-y-6">
        <span className="text-[10px] tracking-[0.3em] uppercase text-brass/70 font-medium">
          Silence & Respiration
        </span>

        <p className="font-editorial text-3xl sm:text-5xl md:text-6xl text-graphite font-normal tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Il ne s’agit pas d’aller plus vite. <br className="hidden sm:inline" />
          <span className="italic font-light text-brass">
            Il s’agit parfois d’écouter autrement.
          </span>
        </p>

        <p className="text-xs tracking-[0.2em] uppercase text-graphite/40 font-light pt-2">
          Présence 1.618
        </p>
      </Reveal>
    </section>
  );
}
