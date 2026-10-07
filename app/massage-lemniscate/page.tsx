import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SignatureLine } from "@/components/motion/SignatureLine";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "massage-lemniscate")!;

export const metadata = constructMetadata({
  title: "Massage Lemniscate — Fabienne Dizy Olliveaud",
  description:
    "Découvrez le massage Lemniscate : mouvement en huit continu reliant le corps sans rupture, apaisant le système nerveux et réunifiant la conscience corporelle.",
  path: "/massage-lemniscate",
});

export default function MassageLemniscatePage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Soin Signature"
        title="Massage Lemniscate :"
        italicTitle="le geste infini."
        description="Inspiré par le chiffre huit (∞), ce massage rythmique enveloppant utilise un tracé continu sans aucune rupture de contact pour ramener le corps vers son unité."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Massage Lemniscate", url: "/massage-lemniscate" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Visual & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[1.618/1] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-massage-lemniscate.jpg"
                alt="Massage Lemniscate et geste continu"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>Le Rythme</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              Une réunification profonde de l’être
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              {practice.fullDescription.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Dynamic Lemniscate Animated Section */}
        <div className="py-12 border-y border-graphite/10 text-center space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-brass font-medium">
            Le Tracé du Huit
          </p>
          <p className="font-editorial italic text-2xl sm:text-3xl text-graphite max-w-xl mx-auto">
            « Relier les polarités, apaiser la veille cérébrale, faire circuler le souffle. »
          </p>
          <div className="py-4">
            <SignatureLine variant="lemniscate-scene" height={130} />
          </div>
        </div>

        {/* Pour qui & Déroulement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal className="p-8 sm:p-10 rounded-[36px] bg-paper border border-graphite/10 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Pour qui s’adresse ce massage ?
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
              Le déroulement de la séance
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

        {/* Practical summary & CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-champagne">
              Modalités de la séance
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-paper">
              Séance de Massage Lemniscate
            </h3>
            <p className="text-xs text-mineral/70">
              Durée : {practice.practicalInfo.duree} · Lieu : {practice.practicalInfo.lieu}
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
