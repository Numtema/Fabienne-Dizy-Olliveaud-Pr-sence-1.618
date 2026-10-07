import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "meditation")!;

export const metadata = constructMetadata({
  title: "Méditation & Présence Guidée — Fabienne Dizy Olliveaud",
  description:
    "Séances d'immobilité attentive et de présence guidée pour apprendre à s'asseoir dans le calme, apaiser le mental et habiter pleinement son souffle.",
  path: "/meditation",
});

export default function MeditationPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Présence Attentive"
        title="Méditation guidée :"
        italicTitle="habiter le silence."
        description="Une invitation à suspendre le mode 'faire' pour redécouvrir la plénitude du mode 'être', sans recherche de performance ni d'esprit vide forcé."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Méditation", url: "/meditation" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-cabinet.jpg"
                alt="Espace de méditation au cabinet"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>L&apos;Approche</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              S’asseoir sans rien forcer
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              {practice.fullDescription.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-champagne">
              En individuel ou petit cercle
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-paper">
              Séance de Méditation & Présence
            </h3>
            <p className="text-xs text-mineral/70">
              Durée : {practice.practicalInfo.duree} · Au cabinet ou en visioconférence
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
