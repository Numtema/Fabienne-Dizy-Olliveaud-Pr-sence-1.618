import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = constructMetadata({
  title: "L’Officine des Anges — Fabienne Dizy Olliveaud",
  description:
    "L'apothicaire sensible de Présence 1.618 : brumes de présence, huiles d'onction et élixirs subtils confectionnés à la main à partir d'essences botaniques nobles.",
  path: "/officine-des-anges",
});

export default function OfficinePage() {
  const products = [
    {
      code: "F-01",
      name: "Brume de Présence",
      classification: "Aérosol atmosphérique & aurique",
      composition: "Hydrolat pur de Rose de Damas, Bois de Cèdre de l'Atlas, Néroli, Bergamote sans bergaptène.",
      intention: "Instaurer le silence mental avant un temps de soin, clarifier l'atmosphère d'une pièce ou se recentrer en quelques secondes.",
      rituel: "Vaporiser 2 à 3 nuages au-dessus de la tête et inspirer lentement les yeux clos.",
      volume: "Flacon verre ambré 100 ml",
      image: "/assets/officine-bottle-01.jpg",
    },
    {
      code: "F-02",
      name: "Huile d’Onction Lemniscate",
      classification: "Huile de soin & d’ancrage",
      composition: "Huile de Sésame désodorisée vierge bio, Immortelle de Corse, Myrrhe sauvage, Camomille matricaire.",
      intention: "Prolonger les bénéfices du massage en huit, réchauffer la zone du plexus et ancrer les sensations dans le corps.",
      rituel: "Déposer une goutte sur la face interne des poignets, frotter doucement et respirer profondément.",
      volume: "Flacon compte-gouttes verre lourd 30 ml",
      image: "/assets/officine-bottle-02.jpg",
    },
    {
      code: "F-03",
      name: "Élixir Subtil Florale",
      classification: "Macérat solaire & vibration",
      composition: "Infusion solaire de fleurs sauvages, eau de source de montagne, pointe d'armagnac biologique stabilisant.",
      intention: "Soutenir la traversée des passages émotionnels denses avec délicatesse et confiance renouvelée.",
      rituel: "4 gouttes sous la langue matin et soir pendant un cycle lunaire.",
      volume: "Flacon pipette verre teinté 20 ml",
      image: "/assets/officine-bottle-01.jpg",
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        label="Laboratoire Artisanal"
        title="L’Officine des Anges :"
        italicTitle="l’apothicaire sensible."
        description="Une collection de formulations végétales et vibratoires conçues en séries très limitées pour accompagner vos rituels d’équilibre au quotidien."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "L’Officine des Anges", url: "/officine-des-anges" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Ethos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/officine-bottle-01.jpg"
                alt="Flacon d'apothicaire de L'Officine des Anges sur pierre"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 space-y-6">
            <SectionLabel>L&apos;Esprit de l&apos;Officine</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight leading-tight">
              Entre maison de parfum et atelier de soin
            </h2>
            <div className="space-y-4 text-graphite/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                L&apos;Officine des Anges est née de l&apos;envie de prolonger chez soi l&apos;atmosphère de recueillement vécue lors des séances. Chaque formule est pensée comme une passerelle olfactive vers le calme.
              </p>
              <p>
                Nous refusons tout procédé industriel, conservateur de synthèse ou arôme artificiel. Les plantes sont cueillies ou distillées par des artisans producteurs respectueux de la terre, puis assemblées goutte à goutte dans notre atelier.
              </p>
              <p>
                Chaque flacon est étiqueté à la main et préparé en résonance avec son intention.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Catalog of Formulas */}
        <div className="space-y-12">
          <div>
            <SectionLabel>Le Répertoire Botanique</SectionLabel>
            <h3 className="font-editorial text-3xl sm:text-4xl text-graphite mt-2">
              Les Formules Signatures
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, idx) => (
              <Reveal
                key={p.code}
                delay={idx * 0.1}
                className="p-8 rounded-[36px] bg-paper border border-graphite/10 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-limestone">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-mono font-medium text-brass">
                      {p.code}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-graphite/50 font-medium">
                      {p.classification}
                    </p>
                    <h4 className="font-editorial text-2xl text-graphite mt-0.5">
                      {p.name}
                    </h4>
                  </div>

                  <p className="text-xs text-graphite/70 font-light leading-relaxed">
                    {p.intention}
                  </p>

                  <div className="pt-2 border-t border-graphite/10 text-xs text-graphite/60 space-y-1">
                    <p><span className="font-medium text-graphite">Notes :</span> {p.composition}</p>
                    <p><span className="font-medium text-graphite">Conditionnement :</span> {p.volume}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-graphite/10 text-xs text-brass font-medium">
                  Rituel : {p.rituel}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Acquisition note & contact */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-limestone border border-graphite/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase text-brass font-medium">
              Commande & confection personnalisée
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Commander une formule de L’Officine
            </h3>
            <p className="text-graphite/70 text-sm max-w-xl font-light">
              Les formules sont remises en main propre au cabinet lors des rendez-vous ou confectionnées sur demande après échange par message.
            </p>
          </div>

          <PrimaryButton href="/contact">
            Faire une demande
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
