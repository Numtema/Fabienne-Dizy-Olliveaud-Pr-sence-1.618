"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SignatureLine } from "@/components/motion/SignatureLine";

export function Hero() {
  return (
    <section className="relative w-full pt-2 sm:pt-3 px-2 sm:px-3 lg:px-4">
      {/* Sculpted Outer Shell per spec #09 & #18 */}
      <div className="relative min-h-[calc(100dvh-16px)] sm:min-h-[calc(100dvh-24px)] rounded-[28px] sm:rounded-[40px] md:rounded-[52px] lg:rounded-[56px] overflow-hidden bg-ink text-paper flex flex-col justify-between shadow-2xl shadow-black/40">
        {/* Real photographic background with restrained natural grading */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/fabienne-hero-poster.jpg"
            alt="Présence 1.618 — Les mains bienveillantes et le lin naturel au cabinet de Fabienne"
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center scale-[1.02] filter brightness-[0.72] contrast-[1.05]"
            sizes="100vw"
          />

          {/* Measured soft mineral scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-ink/60" />
        </div>

        {/* Top spacer for floating navigation clearance */}
        <div className="relative z-10 pt-28 md:pt-36 px-6 sm:px-10 lg:px-16 flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <span className="text-[11px] sm:text-xs tracking-[0.26em] uppercase font-medium text-champagne">
              {siteConfig.name}
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-mineral/60">
              {siteConfig.territory}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex flex-col text-right text-xs text-mineral/70 max-w-[220px]"
          >
            <span className="font-editorial italic text-base text-paper">
              {siteConfig.signature}
            </span>
            <span className="text-[11px] text-mineral/50 mt-0.5">
              Énergétique · Massage · Accompagnement
            </span>
          </motion.div>
        </div>

        {/* Center / Asymmetrical Primary Typography */}
        <div className="relative z-10 my-auto px-6 sm:px-10 lg:px-16 py-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-champagne/90 font-medium">
              Praticienne holistique
            </p>

            {/* Main Title per spec #19 */}
            <h1 className="text-paper tracking-[-0.035em] leading-[0.92] select-none">
              <span className="block font-sans font-light text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] tracking-tight text-paper/95 uppercase">
                Le Mouvement
              </span>
              <span className="block font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[6.8rem] xl:text-[7.8rem] text-champagne mt-1 md:-mt-2">
                vers l’équilibre.
              </span>
            </h1>

            {/* Microcopy & secondary line */}
            <p className="text-mineral/80 text-base sm:text-lg md:text-xl font-light max-w-xl pt-2 leading-relaxed">
              {siteConfig.secondaryLine} Un espace pour écouter les corps, fluidifier les énergies et réaligner le rythme intérieur.
            </p>

            {/* CTAs */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/prendre-rendez-vous">
                Prendre rendez-vous
              </PrimaryButton>
              <SecondaryButton
                href="/a-propos"
                className="text-paper border-white/20 hover:border-white/40 hover:bg-white/10"
              >
                Découvrir mon approche
              </SecondaryButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive SignatureLine & Scroll cue */}
        <div className="relative z-10 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16">
          {/* Central Interactive Signature Line (Phase 1 to Phase 3 morph) */}
          <div className="w-full">
            <SignatureLine variant="hero" height={110} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mineral/50 pt-2 border-t border-white/10">
            <span>Présence 1.618 — Cabinet & à distance</span>
            <span className="font-editorial italic text-xs sm:text-sm text-mineral/70">
              Faire défiler pour laisser le mouvement se déposer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
