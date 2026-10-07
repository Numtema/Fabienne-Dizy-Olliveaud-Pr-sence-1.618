import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "energetique")!;

export const metadata = constructMetadata({
  title: "Soin Énergétique & LaHoChi — Fabienne Dizy Olliveaud",
  description:
    "Harmonisation énergétique globale par apposition des mains, LaHoChi et Reiki pour dissoudre les tensions, rééquilibrer les flux et retrouver la paix intérieure.",
  path: "/energetique",
});

export default function EnergetiquePage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Soin Énergétique"
        title="Harmonisation globale &"
        italicTitle="dépose des charges subtiles."
        description="Une séance d’apposition des mains et d’écoute vibratoire pour relancer ce qui était figé, apaiser les surcharges émotionnelles et restaurer la clarté."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Soin Énergétique", url: "/energetique" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[1.618/1] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-hands.jpg"
                alt="Apposition des mains et soin énergétique"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>L&apos;Intention</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              Laisser le corps se réorganiser à son propre rythme
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              {practice.fullDescription.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Focus on approaches: LaHoChi & Reiki */}
        <div id="approches" className="p-8 sm:p-12 rounded-[40px] bg-limestone border border-graphite/10 space-y-8">
          <div>
            <SectionLabel>Méthodes mobilisées</SectionLabel>
            <h3 className="font-editorial text-3xl text-graphite mt-2">
              LaHoChi, Reiki & écoute intuitive
            </h3>
            <p className="text-graphite/70 text-sm max-w-2xl mt-1 font-light">
              Selon votre état et votre sensibilité, le soin s’appuie sur différentes traditions d’apposition des mains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-[28px] bg-paper border border-graphite/10 space-y-3">
              <h4 className="font-editorial text-2xl text-graphite">Le LaHoChi</h4>
              <p className="text-graphite/75 text-sm leading-relaxed font-light">
                Une fréquence de lumière très douce et enveloppante, reconnue pour sa capacité à restructurer les corps subtils, dissoudre les blocages et procurer une relaxation immédiate.
              </p>
            </div>
            <div className="p-6 rounded-[28px] bg-paper border border-graphite/10 space-y-3">
              <h4 className="font-editorial text-2xl text-graphite">L’Harmonisation des Chakras</h4>
              <p className="text-graphite/75 text-sm leading-relaxed font-light">
                Un travail minutieux sur les principaux centres énergétiques le long de la colonne, favorisant l’ancrage à la terre et l’ouverture sereine du cœur et de l’esprit.
              </p>
            </div>
          </div>
        </div>

        {/* Pour qui & déroulement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal className="p-8 sm:p-10 rounded-[36px] bg-paper border border-graphite/10 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Quand envisager un soin énergétique ?
            </h3>
            <ul className="space-y-3 text-graphite/80 text-sm leading-relaxed font-light">
              {practice.pourQui.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-editorial text-brass text-lg leading-none">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="p-8 sm:p-10 rounded-[36px] bg-paper border border-graphite/10 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Déroulement pratique
            </h3>
            <ol className="space-y-3 text-graphite/80 text-sm leading-relaxed font-light">
              {practice.deroulement.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-brass mt-0.5">0{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-champagne">
              En cabinet ou à distance
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-paper">
              Réserver votre Soin Énergétique
            </h3>
            <p className="text-xs text-mineral/70">
              Durée : {practice.practicalInfo.duree} · Possibilité de soin à distance sur photographie
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="/prendre-rendez-vous">
              Prendre rendez-vous
            </PrimaryButton>
            <SecondaryButton
              href="/contact"
              className="text-paper border-white/20 hover:border-white/40"
            >
              Échanger au préalable
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
