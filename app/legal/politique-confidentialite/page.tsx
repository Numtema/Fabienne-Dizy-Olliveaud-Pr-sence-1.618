import React from "react";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = constructMetadata({
  title: "Politique de Confidentialité — Fabienne Dizy Olliveaud",
  description: "Politique de protection des données personnelles et respect de votre vie privée.",
  path: "/legal/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Protection des Données"
        title="Politique de"
        italicTitle="Confidentialité."
        crumbs={[{ name: "Confidentialité", url: "/legal/politique-confidentialite" }]}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-10 text-graphite/80 text-sm leading-relaxed font-light">
        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">1. Collecte des données</h2>
          <p>
            Les seules données personnelles collectées sur ce site sont celles que vous transmettez volontairement lors de l’envoi d’un message ou d’une demande de rendez-vous (nom, adresse email, numéro de téléphone, message).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">2. Utilisation des données</h2>
          <p>
            Ces informations sont exclusivement destinées à Fabienne Dizy Olliveaud dans le but de répondre à votre demande et d’organiser votre séance. Elles ne sont ni cédées, ni louées, ni partagées avec des tiers à des fins commerciales.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">3. Durée de conservation</h2>
          <p>
            Vos données sont conservées le temps nécessaire à notre échange et sont supprimées sur simple demande de votre part.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-editorial text-2xl text-graphite">4. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles sur simple demande via notre formulaire de contact.
          </p>
        </section>
      </div>
    </div>
  );
}
