"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OfficinePreview() {
  const [activeFormula, setActiveFormula] = useState(0);

  const formulas = [
    {
      batch: "LOT N°01",
      title: "Formule 01 — Brume de Présence",
      notes: "Cèdre de l'Atlas, Néroli & Eau de rose de Damas",
      description:
        "Une brume aérienne créée pour préparer l'espace avant une méditation ou purifier le champ énergétique au sortir d'une journée dense.",
      aspect: "Sérénité immédiate",
      ritual: "Diffuser à 30 cm au-dessus de la tête les yeux clos.",
    },
    {
      batch: "LOT N°02",
      title: "Formule 02 — Huile d'Onction Lemniscate",
      notes: "Sésame biologique, Immortelle de Corse, Myrrhe & Camomille romaine",
      description:
        "Une huile solaire et chaleureuse formulée pour prolonger les bienfaits du massage Lemniscate aux creux des poignets et sur la poitrine.",
      aspect: "Réconfort & Ancrage",
      ritual: "Une goutte chauffée entre les paumes, puis respirée profondément.",
    },
    {
      batch: "LOT N°03",
      title: "Formule 03 — Élixir Subtil des Anges",
      notes: "Infusion florale solaire, alcool de grain pur & vibration cristalline",
      description:
        "Composition florale et vibratoire subtile élaborée selon les principes des quintessences végétales pour soutenir la clarté intérieure.",
      aspect: "Écoute du cœur",
      ritual: "Quelques gouttes sublinguales lors des moments de transition.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-limestone text-graphite rounded-[40px] sm:rounded-[56px] my-12 max-w-[1400px] mx-auto border border-graphite/10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto space-y-4">
          <SectionLabel category="Créations Botaniques">
            L’Officine des Anges
          </SectionLabel>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-graphite tracking-tight leading-tight">
            L’apothicaire sensible, <br />
            <span className="italic font-normal text-brass">
              entre parfum et rituel.
            </span>
          </h2>
          <p className="text-graphite/75 text-base sm:text-lg font-light leading-relaxed">
            Formulations en séries très limitées, façonnées à la main à partir d’essences botaniques pures, de macérats nobles et d’intentions de présence.
          </p>
        </Reveal>

        {/* Product Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (5 cols) */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-[36px] overflow-hidden bg-paper border border-graphite/15 shadow-xl shadow-graphite/5 group">
              <Image
                src="/assets/officine-bottle-01.jpg"
                alt="Flacon de L'Officine des Anges sur pierre calcaire"
                fill
                referrerPolicy="no-referrer"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-70" />

              {/* Minimalist label overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-paper">
                <span className="text-[10px] tracking-[0.22em] uppercase text-champagne block mb-1">
                  {formulas[activeFormula].batch}
                </span>
                <p className="font-editorial text-xl italic leading-tight">
                  {formulas[activeFormula].title}
                </p>
                <p className="text-xs text-mineral/80 mt-1 font-light">
                  {formulas[activeFormula].notes}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Formulas List / Selector (7 cols) */}
          <Reveal delay={0.15} className="lg:col-span-7 space-y-6">
            <div className="divide-y divide-graphite/15 border-y border-graphite/15">
              {formulas.map((item, index) => {
                const isSelected = activeFormula === index;
                return (
                  <button
                    key={item.batch}
                    onClick={() => setActiveFormula(index)}
                    className={`w-full text-left py-6 px-4 rounded-[20px] transition-all flex flex-col gap-2 ${
                      isSelected
                        ? "bg-paper/70 shadow-sm border border-graphite/10"
                        : "hover:bg-paper/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] tracking-[0.2em] uppercase font-mono text-brass font-medium">
                        {item.batch}
                      </span>
                      <span className="font-editorial italic text-xs text-graphite/50">
                        {item.aspect}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl text-graphite font-normal">
                      {item.title}
                    </h3>

                    <p className="text-xs text-graphite/60 font-mono tracking-wide">
                      Notes : {item.notes}
                    </p>

                    <p className="text-sm text-graphite/80 leading-relaxed font-light mt-1">
                      {item.description}
                    </p>

                    {isSelected && (
                      <div className="mt-2 pt-2 border-t border-graphite/10 text-xs text-brass font-medium">
                        Rituel d&apos;usage : {item.ritual}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-graphite/60 font-light">
                Chaque formule est préparée artisanalement sur commande ou remise lors des séances.
              </span>
              <Link
                href="/officine-des-anges"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-graphite hover:text-brass transition-colors"
              >
                <span>Découvrir l’Officine</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
