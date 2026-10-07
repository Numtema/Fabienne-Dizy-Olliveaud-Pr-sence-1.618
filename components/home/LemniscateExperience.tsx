"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SignatureLine } from "@/components/motion/SignatureLine";

export function LemniscateExperience() {
  return (
    <section className="relative py-8 px-2 sm:px-4 lg:px-6">
      {/* Sculpted Dark Graphite Container per spec #30 */}
      <div className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[56px] lg:rounded-[64px] bg-ink text-paper overflow-hidden px-6 sm:px-12 lg:px-20 py-24 sm:py-32 shadow-2xl">
        {/* Subtle background photography */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/assets/fabienne-massage-lemniscate.jpg"
            alt="Le tracé du massage Lemniscate"
            fill
            referrerPolicy="no-referrer"
            className="object-cover object-center filter blur-[1px]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <Reveal>
            <SectionLabel category="Présence 1.618" light>
              Le Geste Signature
            </SectionLabel>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-paper tracking-tight leading-[0.98]">
              Un geste continu. <br />
              <span className="italic font-normal text-champagne">
                Sans rupture.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="max-w-2xl mx-auto">
            <p className="text-mineral/80 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Le massage Lemniscate s&apos;articule autour du mouvement universel du huit infini (∞). Les mains ne quittent jamais le corps, reliant sans interruption les deux hémisphères corporels pour inviter le système nerveux à désarmer toute veille vigilante.
            </p>
          </Reveal>

          {/* Dedicated Lemniscate SignatureLine Scene */}
          <Reveal delay={0.3} className="py-8">
            <SignatureLine variant="lemniscate-scene" height={150} />
          </Reveal>

          <Reveal delay={0.4} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/massage-lemniscate"
              className="inline-flex items-center gap-2 h-13 px-8 rounded-full bg-champagne text-ink text-sm font-medium tracking-wide hover:bg-paper transition-colors duration-300 shadow-lg"
            >
              <span>Comprendre le massage Lemniscate</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/prendre-rendez-vous"
              className="text-mineral/70 hover:text-paper text-sm font-medium transition-colors underline-offset-4 hover:underline"
            >
              Réserver une séance de dépose
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
