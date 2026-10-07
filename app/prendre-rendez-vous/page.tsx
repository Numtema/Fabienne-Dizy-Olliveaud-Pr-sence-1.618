import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FirstExchange } from "@/components/home/FirstExchange";
import { ArrowUpRight, Sparkles, HeartHandshake, Compass } from "lucide-react";

export const metadata = constructMetadata({
  title: "Prendre Rendez-vous — Fabienne Dizy Olliveaud",
  description:
    "Réservez votre séance de massage Lemniscate, soin énergétique ou radiesthésie avec Fabienne Dizy Olliveaud au cabinet ou à distance.",
  path: "/prendre-rendez-vous",
});

export default function PrendreRendezVousPage() {
  const steps = [
    {
      icon: Compass,
      title: "1. Choisissez votre pratique",
      description: "Sélectionnez l’approche qui correspond le mieux à votre intention : massage Lemniscate, soin énergétique, radiesthésie ou conseil en aromathérapie.",
      link: { label: "Revoir les pratiques", href: "/pratiques" },
    },
    {
      icon: HeartHandshake,
      title: "2. Indiquez vos créneaux",
      description: "Remplissez le formulaire de premier contact avec vos préférences de jours et d'horaires. Je vous recontacte rapidement pour caler la date.",
      link: { label: "Accéder au formulaire", href: "#formulaire" },
    },
    {
      icon: Sparkles,
      title: "3. Venez vous déposer",
      description: "Le jour de la séance, venez en tenue confortable. Un temps de dépose vous attend sans aucune contrainte de performance.",
      link: { label: "Comment se déroule la séance", href: "/#deroulement" },
    },
  ];

  return (
    <div className="pb-24">
      <PageHeader
        label="Réservation & Guidance"
        title="Prendre rendez-vous"
        italicTitle="en toute sérénité."
        description="Chaque rencontre commence par une écoute attentive. Choisissez votre soin et partagez-moi vos disponibilités."
        crumbs={[{ name: "Prendre rendez-vous", url: "/prendre-rendez-vous" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-20">
        {/* 3 Step Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal
                key={step.title}
                delay={idx * 0.1}
                className="p-8 rounded-[36px] bg-paper border border-graphite/10 flex flex-col justify-between space-y-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-limestone flex items-center justify-center text-brass">
                    <Icon size={22} />
                  </div>
                  <h2 className="font-editorial text-2xl text-graphite">
                    {step.title}
                  </h2>
                  <p className="text-xs text-graphite/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <Link
                  href={step.link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brass hover:text-graphite transition-colors"
                >
                  <span>{step.link.label}</span>
                  <ArrowUpRight size={13} />
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Form Container */}
        <div id="formulaire" className="-mx-2 sm:-mx-4 lg:-mx-6">
          <FirstExchange />
        </div>
      </div>
    </div>
  );
}
