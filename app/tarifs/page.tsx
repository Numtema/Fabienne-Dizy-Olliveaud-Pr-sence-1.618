import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check } from "lucide-react";

export const metadata = constructMetadata({
  title: "Tarifs & Modalités — Fabienne Dizy Olliveaud",
  description:
    "Consultez les modalités d'accompagnement, durées de séances et cadre déontologique des soins proposés par Fabienne Dizy Olliveaud.",
  path: "/tarifs",
});

export default function TarifsPage() {
  const options = [
    {
      title: "Soin Énergétique & Harmonisation",
      duration: "1h à 1h15",
      type: "Cabinet ou à distance",
      description: "Bilan des flux énergétiques, apposition des mains, LaHoChi et intégration.",
      included: [
        "Échange préalable d'écoute",
        "Harmonisation globale des centres vitaux",
        "Temps de repos et de dépose",
        "Pistes d'ancrage post-séance",
      ],
      note: "Tarif communiqué sur simple demande ou lors de la prise de contact",
    },
    {
      title: "Massage Lemniscate Signature",
      duration: "1h15 à 1h30",
      type: "Exclusivement au cabinet",
      description: "Le massage continu en huit (∞) aux huiles végétales tièdes biologiques.",
      featured: true,
      included: [
        "Accueil et boisson tiède apaisante",
        "Massage enveloppant continu sans rupture",
        "Huiles biologiques formulées avec douceur",
        "Phase d'intégration sous tissu doux",
      ],
      note: "Séance sur réservation préalable uniquement",
    },
    {
      title: "Radiesthésie & Bilan Vibratoire",
      duration: "45 min à 1h",
      type: "Cabinet ou à distance",
      description: "Mesure de la vitalité au pendule, cadrans Bovis et clarification d'axes de vie.",
      included: [
        "Définition précise de la demande",
        "Mesure sur cadrans de radiesthésie",
        "Synthèse et conseils d'harmonisation",
        "Recommandation de synergies botaniques",
      ],
      note: "Possibilité de bilan sur support photographique",
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        label="Clarté & Engagement"
        title="Tarifs & Modalités"
        italicTitle="d’accompagnement."
        description="Une pratique fondée sur la transparence, le respect du temps consacré à chacun et un cadre sécurisant pour votre démarche."
        crumbs={[{ name: "Tarifs", url: "/tarifs" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Grille des séances */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.1}
              className={`p-8 sm:p-10 rounded-[40px] flex flex-col justify-between space-y-8 ${
                item.featured
                  ? "bg-ink text-paper shadow-2xl border border-champagne/30"
                  : "bg-paper text-graphite border border-graphite/10 shadow-sm"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs">
                  <span className={item.featured ? "text-champagne font-medium" : "text-brass font-medium"}>
                    {item.type}
                  </span>
                  <span className={item.featured ? "text-mineral/60" : "text-graphite/50"}>
                    {item.duration}
                  </span>
                </div>

                <div>
                  <h2 className="font-editorial text-2xl sm:text-3xl leading-snug">
                    {item.title}
                  </h2>
                  <p className={`text-xs mt-2 font-light leading-relaxed ${item.featured ? "text-mineral/80" : "text-graphite/70"}`}>
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-3 pt-2 text-xs">
                  {item.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={14} className={item.featured ? "text-champagne shrink-0 mt-0.5" : "text-brass shrink-0 mt-0.5"} />
                      <span className={item.featured ? "text-mineral/80 font-light" : "text-graphite/75 font-light"}>
                        {inc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <p className={`text-xs font-light ${item.featured ? "text-mineral/60" : "text-graphite/50"}`}>
                  {item.note}
                </p>
                <Link
                  href="/prendre-rendez-vous"
                  className={`w-full h-12 rounded-full flex items-center justify-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                    item.featured
                      ? "bg-champagne text-ink hover:bg-paper"
                      : "bg-graphite text-paper hover:bg-ink"
                  }`}
                >
                  Choisir cette séance
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Politique & Cadre */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-limestone border border-graphite/10 space-y-6">
          <SectionLabel>Éthique & Respect du Temps</SectionLabel>
          <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
            Modalités pratiques & politique d&apos;annulation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-graphite/75 font-light leading-relaxed">
            <p>
              <strong className="text-graphite font-medium block mb-1">Ponctualité et accueil :</strong>
              Chaque créneau est espacé d&apos;au moins 30 minutes afin que vous ne croisiez personne et puissiez repartir sans précipitation. Merci de vous présenter à l&apos;heure convenue.
            </p>
            <p>
              <strong className="text-graphite font-medium block mb-1">Délai d&apos;annulation :</strong>
              En cas d&apos;imprévu, nous vous remercions de bien vouloir prévenir au moins 48 heures à l&apos;avance afin que ce créneau puisse être proposé à une personne en attente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
