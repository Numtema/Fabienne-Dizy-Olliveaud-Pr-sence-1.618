"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SecondaryButton } from "@/components/ui/Buttons";
import { siteConfig } from "@/config/site";

export function Introduction() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Golden Ratio 38.2% / 61.8% Split per spec #27 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* 38.2% Col (lg:col-span-5): Fabienne's Portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] rounded-[36px] md:rounded-[44px] overflow-hidden shadow-2xl shadow-graphite/10 border border-graphite/10 bg-limestone group">
            <Image
              src="/assets/fabienne-portrait.jpg"
              alt="Fabienne Dizy Olliveaud — Praticienne holistique"
              fill
              referrerPolicy="no-referrer"
              className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Subtle light vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent opacity-60" />

            {/* In-scene caption */}
            <div className="absolute bottom-6 left-6 right-6 text-paper">
              <p className="font-editorial text-xl italic">{siteConfig.name}</p>
              <p className="text-[11px] tracking-widest uppercase text-champagne">
                Écoute & Présence
              </p>
            </div>
          </div>
        </Reveal>

        {/* 61.8% Col (lg:col-span-7): Editorial Story */}
        <Reveal delay={0.15} className="lg:col-span-7 space-y-7">
          <SectionLabel category="Fabienne Dizy Olliveaud">
            L&apos;Approche
          </SectionLabel>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-graphite leading-[1.05] tracking-tight">
            Un espace pour ralentir, <br />
            <span className="italic font-normal text-brass">
              écouter et ressentir.
            </span>
          </h2>

          <div className="space-y-5 text-graphite/80 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
            <p>
              Je crois profondément que le corps n&apos;est pas une machine à réparer dans l&apos;urgence, mais un organisme vivant doué d&apos;une mémoire sensible et d&apos;une capacité souveraine d&apos;autorégulation lorsqu&apos;on lui offre l&apos;espace adéquat.
            </p>
            <p>
              Au cabinet comme à distance, je ne propose pas de protocole standardisé. Chaque rencontre s&apos;ouvre par un silence attentif, un dialogue bienveillant et une observation des rythmes propres à votre histoire. Qu&apos;il s&apos;agisse de la continuité enveloppante du massage Lemniscate, de la clarté vibratoire de la radiesthésie ou du réconfort des essences botaniques, nous avançons à votre mesure.
            </p>
          </div>

          {/* Micro notes on ethos */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-graphite/10 text-xs">
            <div>
              <p className="font-editorial text-lg text-graphite font-normal">Douceur</p>
              <p className="text-graphite/60 mt-0.5">Le respect absolu des rythmes organiques</p>
            </div>
            <div>
              <p className="font-editorial text-lg text-graphite font-normal">Continuité</p>
              <p className="text-graphite/60 mt-0.5">Des gestes liés sans rupture brusque</p>
            </div>
            <div>
              <p className="font-editorial text-lg text-graphite font-normal">Présence</p>
              <p className="text-graphite/60 mt-0.5">Une attention entière et sans jugement</p>
            </div>
          </div>

          <div className="pt-3">
            <SecondaryButton href="/a-propos" showArrow>
              En savoir plus sur mon parcours
            </SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
