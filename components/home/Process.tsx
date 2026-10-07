"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/Buttons";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Premier échange & écoute",
      description:
        "Par téléphone ou message, nous prenons quelques instants pour échanger sur ce qui motive votre démarche. Cet espace préalable permet de dissiper toute appréhension et de vous accueillir en confiance.",
      note: "Quelques minutes d'échange téléphonique sans engagement",
    },
    {
      number: "02",
      title: "Écouter votre besoin présent",
      description:
        "À votre arrivée au cabinet, nous prenons le temps de nous poser autour d'une infusion tiède. Nous faisons le point sur votre état physique, émotionnel et vos attentes particulières pour la séance.",
      note: "Un temps d'accueil respectueux de votre rythme",
    },
    {
      number: "03",
      title: "La séance & le geste",
      description:
        "Qu'il s'agisse de la continuité enveloppante du massage Lemniscate, de la précision du soin énergétique ou du travail au pendule, le soin se déroule dans une attention ininterrompue.",
      note: "Silence habité, huiles végétales tièdes, lumière tamisée",
    },
    {
      number: "04",
      title: "Temps d'intégration",
      description:
        "Nous ne coupons jamais brutalement la séance. Quelques minutes de repos sous un tissu doux vous permettent de revenir tranquillement à vos sensations, suivies de pistes simples pour prolonger le bien-être.",
      note: "Conseils d'ancrage, eau pure & rituel olfactif personnalisé",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* 12-Column Grid per spec #37 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Sticky Left Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-6">
            <SectionLabel>Le Déroulement</SectionLabel>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight leading-[1.05]">
              Comment se déroule <br />
              <span className="italic font-normal text-brass">
                un accompagnement ?
              </span>
            </h2>

            <p className="text-graphite/70 text-base leading-relaxed font-light">
              Chaque personne arrive avec son histoire, ses fatigues et sa sensibilité. Le cadre est toujours pensé pour offrir une sécurité maximale, de la prise de contact initiale jusqu’à l’intégration dans votre quotidien.
            </p>

            <div className="pt-4">
              <PrimaryButton href="/prendre-rendez-vous">
                Prendre rendez-vous
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* Steps Column (7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          {steps.map((step, idx) => (
            <Reveal
              key={step.number}
              delay={idx * 0.1}
              className="relative pb-12 border-b border-graphite/10 last:border-none"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-editorial text-4xl sm:text-5xl text-champagne/80 font-normal">
                  {step.number}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-graphite/50 font-medium">
                  Étape {idx + 1}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-graphite mb-3 font-normal">
                {step.title}
              </h3>

              <p className="text-graphite/75 text-base sm:text-lg leading-relaxed font-light mb-4">
                {step.description}
              </p>

              <div className="inline-block text-xs text-brass font-medium py-1 px-3 rounded-full bg-limestone/50">
                {step.note}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
