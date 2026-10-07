import React from "react";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonialsList } from "@/content/testimonials";
import { PrimaryButton } from "@/components/ui/Buttons";

export const metadata = constructMetadata({
  title: "Témoignages — Fabienne Dizy Olliveaud",
  description:
    "Découvrez les retours d'expérience et témoignages vérifiés des personnes accompagnées par Fabienne Dizy Olliveaud.",
  path: "/temoignages",
});

export default function TemoignagesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Paroles de Confiance"
        title="Ce que les personnes"
        italicTitle="ont vécu en séance."
        description="Une sélection de témoignages recueillis à la suite de séances de massage Lemniscate, soins énergétiques et consultations personnalisées."
        crumbs={[{ name: "Témoignages", url: "/temoignages" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 0.1}
              className="p-8 sm:p-10 rounded-[40px] bg-paper border border-graphite/10 flex flex-col justify-between space-y-8 shadow-sm"
            >
              <div>
                <span className="font-editorial text-5xl text-champagne block leading-none mb-4 select-none">
                  “
                </span>
                <p className="font-editorial text-2xl text-graphite leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-graphite/10 flex items-end justify-between text-xs">
                <div>
                  <p className="font-medium text-graphite text-sm">
                    {item.author}
                  </p>
                  <p className="text-graphite/50 text-[11px] mt-0.5">
                    {item.context}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] tracking-wider uppercase text-brass font-medium">
                    {item.source}
                  </p>
                  {item.rating && (
                    <p className="text-[11px] text-graphite/60 font-mono mt-0.5">
                      {item.rating}
                    </p>
                  )}
                  {item.date && (
                    <p className="text-[10px] text-graphite/40 mt-0.5">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 space-y-4 max-w-xl mx-auto">
          <SectionLabel>Votre Chemin</SectionLabel>
          <h2 className="font-editorial text-3xl sm:text-4xl text-graphite">
            Prêt(e) à vivre votre propre expérience ?
          </h2>
          <p className="text-graphite/70 text-sm font-light">
            Chaque rencontre est unique. Convenons ensemble du moment propice pour votre premier rendez-vous.
          </p>
          <div className="pt-2">
            <PrimaryButton href="/prendre-rendez-vous">
              Prendre rendez-vous
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
