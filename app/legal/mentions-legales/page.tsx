import React from "react";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Mentions Légales — Fabienne Dizy Olliveaud",
  description: "Mentions légales, identification et cadre juridique du site Présence 1.618.",
  path: "/legal/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Informations Juridiques"
        title="Mentions"
        italicTitle="Légales."
        crumbs={[{ name: "Mentions Légales", url: "/legal/mentions-legales" }]}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-10 text-graphite/80 text-sm leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">1. Éditeur du site</h2>
          <p>
            Le présent site internet est édité par : <br />
            <strong>{siteConfig.name}</strong> <br />
            Enseigne commerciale : {siteConfig.territory} <br />
            Activité : Praticienne en soins de bien-être, massage de relaxation et harmonisation énergétique.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">2. Hébergement</h2>
          <p>
            Le site est hébergé sur les infrastructures Cloud sécurisées de Google Cloud Platform (Europe-West).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">3. Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus graphiques, photographies, textes et l’objet interactif SignatureLine sont la propriété exclusive de Fabienne Dizy Olliveaud ou de leurs auteurs respectifs. Toute reproduction, représentation ou diffusion sans accord préalable écrit est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">4. Cadre de pratique & Non-substitut médical</h2>
          <p>
            {siteConfig.disclaimer}
          </p>
        </section>
      </div>
    </div>
  );
}
