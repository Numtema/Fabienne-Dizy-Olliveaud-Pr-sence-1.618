import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practicesList } from "@/content/practices";

const practice = practicesList.find((p) => p.slug === "ateliers-formations")!;

export const metadata = constructMetadata({
  title: "Ateliers & Formations — Fabienne Dizy Olliveaud",
  description:
    "Transmissions en petits groupes : initiation à la radiesthésie au pendule, ressenti énergétique des mains et rituels d'ancrage pour cultiver son autonomie.",
  path: "/ateliers-formations",
});

export default function AteliersPage() {
  const ateliers = [
    {
      title: "Initiation à la Radiesthésie & Maniement du Pendule",
      format: "1 journée (7 heures)",
      participants: "4 à 6 personnes maximum",
      programme: [
        "Comprendre le fonctionnement neuromusculaire et vibratoire du pendule",
        "Nettoyage énergétique, convention mentale et neutralité d’intention",
        "Utilisation des biomètres et cadrans d'analyse",
        "Exercices pratiques d'évaluation de la vitalité",
      ],
      materiel: "Pendule en laiton et livret de cadrans remis à chaque participant",
    },
    {
      title: "L'Écoute du Corps & le Geste de Présence",
      format: "Demi-journée (3h30)",
      participants: "4 à 8 personnes",
      programme: [
        "Éveil des perceptions tactiles au creux des mains",
        "Initiation au bercement en huit et au tracé continu",
        "Rituels olfactifs avec les brumes de l'Officine pour poser le calme",
        "Pratiques en binôme dans la bienveillance réciproque",
      ],
      materiel: "Huile de soin végétale biologique incluse",
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        label="Transmission"
        title="Ateliers & Formations :"
        italicTitle="développer sa sensibilité."
        description="Des temps de transmission intimes et bienveillants pour apprendre à écouter son ressenti, manier le pendule avec rigueur et intégrer des rituels fiables."
        crumbs={[
          { name: "Pratiques", url: "/pratiques" },
          { name: "Ateliers & Formations", url: "/ateliers-formations" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[1.618/1] rounded-[44px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-hero-poster.jpg"
                alt="Transmission et ateliers de pratique"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
            <SectionLabel>Pédagogie</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl text-graphite tracking-tight leading-tight">
              L’autonomie au cœur de la transmission
            </h2>
            <div className="space-y-4 text-graphite/80 text-base leading-relaxed font-light">
              <p>
                Chacun porte en soi une intuition et une sensibilité innée. Mon rôle au cours de ces ateliers n&apos;est pas de créer des dogmes, mais de vous apporter un cadre clair, sécurisant et démystifié.
              </p>
              <p>
                En petit effectif, nous prenons le temps d&apos;expérimenter, de vérifier nos ressentis et de poser toutes les questions sans complexe.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Modules List */}
        <div className="space-y-8">
          <SectionLabel>Programmes Actuels</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ateliers.map((atelier) => (
              <div
                key={atelier.title}
                className="p-8 sm:p-10 rounded-[36px] bg-paper border border-graphite/10 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-brass font-medium">
                    <span>{atelier.format}</span>
                    <span className="text-graphite/50">{atelier.participants}</span>
                  </div>

                  <h3 className="font-editorial text-2xl text-graphite">
                    {atelier.title}
                  </h3>

                  <ul className="space-y-2 text-xs sm:text-sm text-graphite/75 font-light">
                    {atelier.programme.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brass">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-graphite/10 text-xs text-graphite/60 font-light">
                  {atelier.materiel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-[40px] bg-limestone border border-graphite/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-editorial text-2xl sm:text-3xl text-graphite">
              Connaître les prochaines dates d’atelier
            </h3>
            <p className="text-graphite/70 text-sm max-w-xl font-light">
              Les sessions sont programmées par petits groupes tout au long de l’année. Contactez-moi pour être informé(e) du calendrier des prochaines transmissions.
            </p>
          </div>

          <PrimaryButton href="/contact">
            Demander les dates
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
