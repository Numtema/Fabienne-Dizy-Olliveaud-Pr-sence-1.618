import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "aromatherapie")!;

export const metadata = constructMetadata({
  title: "Aromathérapie Subtile & Olfaction — Fabienne Dizy Olliveaud",
  description:
    "L'usage sensible des essences végétales rares pour dialoguer avec la mémoire émotionnelle, apaiser le système limbique et restaurer la clarté.",
  path: "/aromatherapie",
});

export default function AromatherapiePage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Mémoire Végétale"
        title="Aromathérapie subtile :"
        italicTitle="le souffle des plantes."
        description="Par la voie olfactive et l’onction délicate, les quintessences botaniques soutiennent la libération des tensions émotionnelles sans passer par le filtre du mental."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Aromathérapie", url: "/aromatherapie" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[1.618/1] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-aromatherapy.jpg"
                alt="Flacons d'aromathérapie et plantes séchées"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>L&apos;Olfaction</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              L’accès direct au cœur de l’émotion
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              {practice.fullDescription.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* L'Officine link */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-limestone border border-graphite/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-brass font-medium">
              Prolonger l&apos;expérience
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Découvrir les formules de L’Officine des Anges
            </h3>
            <p className="text-graphite/70 text-sm max-w-xl font-light">
              Brumes de présence, huiles d’onction et synergies florales confectionnées artisanalement pour vos rituels quotidiens.
            </p>
          </div>

          <PrimaryButton href="/officine-des-anges">
            Visiter l’Officine
          </PrimaryButton>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-ink text-paper flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-champagne">
              Séance individuelle & formulation
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-paper">
              Consultation en Aromathérapie
            </h3>
            <p className="text-xs text-mineral/70">
              Durée : {practice.practicalInfo.duree} · Élaboration d’un flacon d’onction personnalisé
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
