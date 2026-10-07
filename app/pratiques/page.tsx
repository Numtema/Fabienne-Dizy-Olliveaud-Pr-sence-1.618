import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { practicesList } from "@/content/practices";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PrimaryButton } from "@/components/ui/Buttons";

export const metadata = constructMetadata({
  title: "Les Pratiques — Fabienne Dizy Olliveaud",
  description:
    "Explorer le répertoire de soins holistiques de Présence 1.618 : Soin Énergétique, Massage Lemniscate, Radiesthésie, Aromathérapie, Méditation et Ateliers.",
  path: "/pratiques",
});

export default function PratiquesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Répertoire des Soins"
        title="Six expressions pour"
        italicTitle="revenir à l’équilibre."
        description="Chaque pratique est un pont entre le corps, le souffle et la conscience. Découvrez nos approches pour choisir celle qui résonne avec votre intention du moment."
        crumbs={[{ name: "Pratiques", url: "/pratiques" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Intro Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 sm:p-10 rounded-[36px] bg-limestone border border-graphite/10">
          <div>
            <p className="font-editorial text-2xl text-graphite mb-2">Recevoir</p>
            <p className="text-graphite/70 text-sm leading-relaxed font-light">
              Pour dénouer les tensions physiques et laisser les mains rééquilibrer les flux d&apos;énergie.
            </p>
          </div>
          <div>
            <p className="font-editorial text-2xl text-graphite mb-2">Ralentir</p>
            <p className="text-graphite/70 text-sm leading-relaxed font-light">
              Pour réguler le système neurovégétatif, calmer la charge mentale et s&apos;ancrer dans le souffle.
            </p>
          </div>
          <div>
            <p className="font-editorial text-2xl text-graphite mb-2">Explorer</p>
            <p className="text-graphite/70 text-sm leading-relaxed font-light">
              Pour décoder les fréquences au pendule, s&apos;initier aux rituels et développer sa sensibilité.
            </p>
          </div>
        </div>

        {/* Practices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicesList.map((p, idx) => (
            <Reveal
              key={p.slug}
              delay={idx * 0.08}
              className="flex flex-col justify-between rounded-[36px] bg-paper border border-graphite/10 overflow-hidden p-7 shadow-sm hover:border-brass/40 transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6 bg-limestone">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 font-editorial text-xl text-paper bg-graphite/60 backdrop-blur-sm px-3 py-0.5 rounded-full">
                    {p.number}
                  </div>
                </div>

                <p className="text-[10px] tracking-[0.2em] uppercase text-brass font-medium mb-1.5">
                  {p.pathCategory}
                </p>

                <h2 className="font-editorial text-2xl sm:text-3xl text-graphite leading-tight mb-2">
                  {p.title}
                </h2>

                <p className="font-editorial italic text-sm text-brass/90 mb-3">
                  {p.subtitle}
                </p>

                <p className="text-graphite/75 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                  {p.shortDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-graphite/10 flex items-center justify-between">
                <span className="text-xs text-graphite/50 font-light">
                  {p.practicalInfo.duree || "Sur rendez-vous"}
                </span>

                <Link
                  href={`/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-graphite hover:text-brass transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-12 space-y-4">
          <p className="font-editorial italic text-2xl text-graphite">
            Vous hésitez sur la pratique la plus adaptée ?
          </p>
          <p className="text-graphite/70 text-sm max-w-md mx-auto">
            Nous en discutons simplement lors d’un premier échange téléphonique sans engagement.
          </p>
          <div className="pt-2">
            <PrimaryButton href="/contact">
              Échanger avec Fabienne
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
