"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { practicesList } from "@/content/practices";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PracticesEditorial() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto space-y-28 md:space-y-36">
      {/* Chapter Title */}
      <Reveal className="text-center max-w-2xl mx-auto space-y-4">
        <SectionLabel>Le Répertoire</SectionLabel>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-graphite tracking-tight">
          Les Pratiques <br />
          <span className="italic font-normal text-brass">
            d’écoute et de soin.
          </span>
        </h2>
        <p className="text-graphite/70 text-base font-light">
          Six expressions complémentaires pour accompagner chaque personne selon sa sensibilité, son énergie et son intention.
        </p>
      </Reveal>

      {/* Alternating Practices per spec #31 */}
      <div className="space-y-28 md:space-y-36">
        {practicesList.map((practice, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={practice.slug}
              id={practice.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Column */}
              <Reveal
                className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative aspect-[1.618/1] rounded-[36px] md:rounded-[48px] overflow-hidden bg-limestone border border-graphite/10 shadow-lg shadow-graphite/5 group">
                  <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover object-center filter grayscale-[22%] group-hover:grayscale-0 group-hover:scale-[1.025] transition-all duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/20 via-transparent to-transparent pointer-events-none" />

                  {/* Number watermark badge */}
                  <div className="absolute top-6 left-6 font-editorial text-3xl text-paper/85 drop-shadow-sm select-none">
                    {practice.number}
                  </div>
                </div>
              </Reveal>

              {/* Copy Column */}
              <Reveal
                delay={0.15}
                className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-xl text-brass font-normal">
                    {practice.number}
                  </span>
                  <span className="text-graphite/30">/</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-graphite/60 font-medium">
                    {practice.pathCategory}
                  </span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl text-graphite leading-tight tracking-tight">
                  {practice.title}
                </h3>

                <p className="font-editorial italic text-lg text-brass/90">
                  {practice.subtitle}
                </p>

                <p className="text-graphite/80 text-base leading-relaxed font-light">
                  {practice.shortDescription}
                </p>

                {/* Intention statement */}
                <div className="p-5 rounded-[24px] bg-paper border border-graphite/10 text-xs sm:text-sm text-graphite/75 leading-relaxed">
                  <span className="font-semibold text-graphite block mb-1">Intention :</span>
                  {practice.intention}
                </div>

                {/* Practical details snippet */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-graphite/60 pt-1">
                  {practice.practicalInfo.duree && (
                    <span>Durée : {practice.practicalInfo.duree}</span>
                  )}
                  {practice.practicalInfo.lieu && (
                    <span>Lieu : {practice.practicalInfo.lieu}</span>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={`/${practice.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-brass transition-colors py-1 group/btn"
                  >
                    <span>Découvrir cette pratique</span>
                    <ArrowUpRight
                      size={15}
                      className="text-brass group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </Link>

                  <span className="text-graphite/20">·</span>

                  <Link
                    href="/prendre-rendez-vous"
                    className="text-xs text-graphite/60 hover:text-graphite transition-colors underline-offset-4 hover:underline"
                  >
                    Prendre rendez-vous
                  </Link>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
