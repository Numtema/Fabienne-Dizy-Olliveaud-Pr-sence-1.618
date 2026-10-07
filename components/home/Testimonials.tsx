"use client";

import React from "react";
import { motion } from "motion/react";
import { testimonialsList } from "@/content/testimonials";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <SectionLabel>Témoignages</SectionLabel>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight">
          Ce que les personnes <br />
          <span className="italic font-normal text-brass">ont ressenti.</span>
        </h2>
        <p className="text-graphite/70 text-base font-light">
          Retours d’expérience partagés avec authenticité à la suite de séances au cabinet.
        </p>
      </Reveal>

      {/* 3 Premium Panels per spec #39 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsList.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-[36px] md:rounded-[44px] bg-paper border border-graphite/10 shadow-sm"
            >
              <div>
                <span className="font-editorial text-4xl text-champagne block leading-none mb-4 select-none">
                  “
                </span>
                <p className="font-editorial text-xl sm:text-2xl text-graphite leading-snug font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-graphite/10 flex items-end justify-between text-xs">
                <div>
                  <p className="font-sans font-medium text-graphite text-sm">
                    {item.author}
                  </p>
                  <p className="text-graphite/50 text-[11px] mt-0.5">
                    {item.context}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] tracking-wider uppercase text-brass font-medium">
                    {item.source}
                  </p>
                  {item.rating && (
                    <p className="text-[11px] text-graphite/60 font-mono mt-0.5">
                      {item.rating}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
