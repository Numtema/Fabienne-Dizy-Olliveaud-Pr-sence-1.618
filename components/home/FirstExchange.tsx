"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";
import { Check, Mail, MapPin, Calendar } from "lucide-react";

export function FirstExchange() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Massage Lemniscate",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "prepared" | "error">("idle");
  const [mailtoUrl, setMailtoUrl] = useState<string>("");

  const topics = [
    "Massage Lemniscate",
    "Soin Énergétique",
    "Radiesthésie au pendule",
    "Aromathérapie subtile",
    "L’Officine des Anges",
    "Atelier / Formation",
    "Autre demande",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Per spec #46: Real adapter interface and documented mailto/service connector
    // without fake simulation. Prepares verified mailto query so user can transmit directly.
    const subject = encodeURIComponent(`Premier échange — ${formData.topic} (${formData.name})`);
    const body = encodeURIComponent(
      `Nom complet: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone || "Non renseigné"}\n` +
      `Sujet: ${formData.topic}\n\n` +
      `Message:\n${formData.message}`
    );

    const generatedLink = `mailto:${siteConfig.email || "contact@presence1618.com"}?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedLink);
    setStatus("prepared");
  };

  return (
    <section id="contact" className="relative py-12 px-2 sm:px-4 lg:px-6">
      <div className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[56px] lg:rounded-[64px] bg-ink text-paper overflow-hidden px-6 sm:px-10 lg:px-16 py-20 sm:py-28 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14 space-y-3">
            <SectionLabel category="Présence 1.618" light>
              Prise de contact
            </SectionLabel>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-paper tracking-tight leading-tight">
              Un premier <br />
              <span className="italic font-normal text-champagne">
                échange.
              </span>
            </h2>
            <p className="text-mineral/70 text-base max-w-xl font-light">
              Partagez-moi quelques mots sur votre situation ou votre intention. Nous prendrons le temps d’ajuster la proposition à votre rythme.
            </p>
          </div>

          {/* 38.2% / 61.8% Desktop Split per spec #43 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* 38.2% Left Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="font-editorial text-2xl text-paper">
                  Fabienne Dizy Olliveaud
                </p>
                <p className="text-xs tracking-widest uppercase text-champagne">
                  {siteConfig.territory}
                </p>
                <p className="text-sm text-mineral/70 leading-relaxed font-light pt-2">
                  Chaque prise de rendez-vous est précédée d’une écoute attentive pour définir le cadre le plus sécurisant et bénéfique.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-mineral/80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-paper">Lieu de consultation</p>
                    <p className="text-xs text-mineral/60 mt-0.5">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-paper">Disponibilité</p>
                    <p className="text-xs text-mineral/60 mt-0.5">
                      Du lundi au samedi sur réservation préalable
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-champagne shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-paper">Transmission</p>
                    <p className="text-xs text-mineral/60 mt-0.5">
                      Échange par message ou pré-réservation en ligne
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-[24px] bg-white/5 border border-white/10 text-xs text-mineral/60 leading-relaxed font-light">
                <p>
                  <span className="text-paper font-medium">Confidentialité & déontologie :</span> Vos coordonnées et échanges restent strictement confidentiels et ne sont transmis à aucun tiers.
                </p>
              </div>
            </div>

            {/* 61.8% Right Rounded Form per spec #44 & #45 */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nom complet */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-medium tracking-wider uppercase text-mineral/70 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Éléonore Martin"
                      className="w-full h-14 px-5 rounded-[22px] bg-white/10 border border-white/15 text-paper placeholder:text-mineral/40 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-medium tracking-wider uppercase text-mineral/70 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@domaine.fr"
                      className="w-full h-14 px-5 rounded-[22px] bg-white/10 border border-white/15 text-paper placeholder:text-mineral/40 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-xs font-medium tracking-wider uppercase text-mineral/70 mb-2"
                  >
                    Téléphone (pour convenir du créneau)
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 00 00 00 00"
                    className="w-full h-14 px-5 rounded-[22px] bg-white/10 border border-white/15 text-paper placeholder:text-mineral/40 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:border-transparent transition-all"
                  />
                </div>

                {/* Sujet de l'échange */}
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-mineral/70 mb-2.5">
                    Je souhaite échanger à propos de :
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic: t })}
                        className={`text-xs px-4 py-2 rounded-full border transition-all ${
                          formData.topic === t
                            ? "bg-champagne text-ink border-champagne font-medium"
                            : "bg-white/5 border-white/15 text-mineral/80 hover:bg-white/10"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-medium tracking-wider uppercase text-mineral/70 mb-2"
                  >
                    Votre message ou vos disponibilités souhaitées *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Partagez-moi quelques mots sur vos sensations, vos besoins ou vos préférences de jours et horaires..."
                    className="w-full p-5 rounded-[26px] bg-white/10 border border-white/15 text-paper placeholder:text-mineral/40 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/70 focus-visible:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submission status or direct transmission */}
                {status === "prepared" ? (
                  <div className="p-6 rounded-[24px] bg-champagne/15 border border-champagne/30 text-paper space-y-3">
                    <div className="flex items-center gap-2 text-champagne text-sm font-semibold">
                      <Check size={18} />
                      <span>Votre demande a été structurée avec succès</span>
                    </div>
                    <p className="text-xs text-mineral/80 leading-relaxed">
                      Cliquez ci-dessous pour transmettre directement votre message via votre messagerie préférée à Fabienne.
                    </p>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-champagne text-ink text-xs font-semibold tracking-wider uppercase hover:bg-paper transition-colors"
                    >
                      Transmettre mon message
                    </a>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto h-14 px-9 rounded-full bg-champagne text-ink font-medium text-sm tracking-wide hover:bg-paper transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      Initier l&apos;échange
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
