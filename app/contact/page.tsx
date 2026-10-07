import React from "react";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { FirstExchange } from "@/components/home/FirstExchange";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = constructMetadata({
  title: "Contact & Premier Échange — Fabienne Dizy Olliveaud",
  description:
    "Prenez contact avec Fabienne Dizy Olliveaud pour échanger sur vos besoins, poser vos questions ou convenir d'une première séance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Échange Bienveillant"
        title="Prendre contact avec"
        italicTitle="Fabienne."
        description="Que vous ayez une question précise ou le souhait d'échanger avant de réserver une séance, cet espace vous est ouvert."
        crumbs={[{ name: "Contact", url: "/contact" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-16">
        {/* Quick cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[32px] bg-paper border border-graphite/10 space-y-3">
            <MapPin className="text-brass" size={22} />
            <h2 className="font-editorial text-2xl text-graphite">Lieu de Consultation</h2>
            <p className="text-xs text-graphite/70 font-light leading-relaxed">
              {siteConfig.address}
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-paper border border-graphite/10 space-y-3">
            <Clock className="text-brass" size={22} />
            <h2 className="font-editorial text-2xl text-graphite">Créneaux de Soin</h2>
            <p className="text-xs text-graphite/70 font-light leading-relaxed">
              Du lundi au samedi sur réservation préalable. Séance individuelle espacée pour votre tranquillité.
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-paper border border-graphite/10 space-y-3">
            <Mail className="text-brass" size={22} />
            <h2 className="font-editorial text-2xl text-graphite">Accompagnement à distance</h2>
            <p className="text-xs text-graphite/70 font-light leading-relaxed">
              Disponible pour les soins énergétiques et bilans de radiesthésie sur rendez-vous visio ou téléphonique.
            </p>
          </div>
        </div>

        {/* Embedded full exchange component */}
        <div className="-mx-2 sm:-mx-4 lg:-mx-6">
          <FirstExchange />
        </div>
      </div>
    </div>
  );
}
