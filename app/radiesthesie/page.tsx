import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "radiesthesie")!;

export const metadata = constructMetadata({
  title: "Radiesthésie & Écoute Vibratoire — Fabienne Dizy Olliveaud",
  description:
    "Pratique du pendule et lecture sensible des fréquences vibratoires pour dresser un bilan énergétique, éclairer les choix de vie et harmoniser les lieux.",
  path: "/radiesthesie",
});

export default function RadiesthesiePage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Écoute Vibratoire"
        title="Radiesthésie au pendule :"
        italicTitle="interroger le champ subtil."
        description="Une approche rigoureuse et sensorielle qui utilise le pendule comme prolongement de la perception pour clarifier les axes de vie et déceler les déséquilibres."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Radiesthésie", url: "/radiesthesie" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-pendulum.jpg"
                alt="Pendule artisanal en laiton au cabinet"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>Le Résonateur</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              Un instrument d’amplification sensible
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              {practice.fullDescription.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Champs d'application */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-limestone border border-graphite/10 space-y-8">
          <div>
            <SectionLabel>Applications</SectionLabel>
            <h3 className="font-editorial text-3xl text-graphite mt-2">
              Que peut-on explorer en séance ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[28px] bg-paper border border-graphite/10 space-y-2">
              <p className="font-editorial text-xl text-graphite">Bilan de vitalité</p>
              <p className="text-xs text-graphite/70 leading-relaxed font-light">
                Mesure du taux vibratoire sur échelle de Bovis et détection des baisses d’énergie des centres vitaux.
              </p>
            </div>
            <div className="p-6 rounded-[28px] bg-paper border border-graphite/10 space-y-2">
              <p className="font-editorial text-xl text-graphite">Orientation & Choix</p>
              <p className="text-xs text-graphite/70 leading-relaxed font-light">
                Clarification des résistances intérieures face à une transition personnelle ou professionnelle.
              </p>
            </div>
            <div className="p-6 rounded-[28px] bg-paper border border-graphite/10 space-y-2">
              <p className="font-editorial text-xl text-graphite">Harmonisation d’espaces</p>
              <p className="text-xs text-graphite/70 leading-relaxed font-light">
                Détection des mémoires résiduelles d’un lieu de vie et conseils de rééquilibrage vibratoire.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-champagne">
              Consultation au cabinet ou sur plan
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-paper">
              Séance de Radiesthésie
            </h3>
            <p className="text-xs text-mineral/70">
              Durée : {practice.practicalInfo.duree} · Restitution orale et synthèse vibratoire
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
              Poser une question
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
