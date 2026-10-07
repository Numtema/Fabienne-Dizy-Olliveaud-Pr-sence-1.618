import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/config/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { siteConfig } from "@/config/site";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = constructMetadata({
  title: "À propos — Fabienne Dizy Olliveaud",
  description:
    "Découvrez le parcours de Fabienne Dizy Olliveaud, la genèse de Présence 1.618 et sa philosophie d'écoute et de soin.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <div className="pb-24">
      <PageHeader
        label="Fabienne Dizy Olliveaud"
        title="L’écoute du vivant,"
        italicTitle="le temps retrouvé."
        description="Une présence attentive pour accompagner les transitions, apaiser le système nerveux et réconcilier le corps avec son propre rythme."
        crumbs={[{ name: "À propos", url: "/a-propos" }]}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 space-y-24">
        {/* Golden Ratio Section 1: Portrait & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden bg-limestone border border-graphite/10 shadow-xl shadow-graphite/5">
              <Image
                src="/assets/fabienne-portrait.jpg"
                alt="Portrait de Fabienne Dizy Olliveaud"
                fill
                priority
                referrerPolicy="no-referrer"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 space-y-6">
            <SectionLabel>Genèse</SectionLabel>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight leading-tight">
              Pourquoi Présence 1.618 ?
            </h2>
            <div className="space-y-4 text-graphite/80 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <span className="font-editorial italic text-brass text-xl">1.618</span> est le nombre d&apos;or, la proportion harmonique que la nature dessine dans la spirale des coquillages, le déploiement des feuilles de fougère et la pulsation même du cœur humain.
              </p>
              <p>
                Dans ma pratique, ce chiffre n&apos;est ni une formule mathématique rigide ni une promesse ésotérique : c&apos;est un rappel constant de notre droit inaliénable à l&apos;harmonie. Quand le rythme moderne nous précipite dans la fragmentation et l&apos;urgence, le soin devient le lieu où l&apos;on réapprend à respirer selon sa juste proportion.
              </p>
              <p>
                Être en « Présence », c&apos;est offrir un temps où rien n&apos;a besoin d&apos;être précipité. Les mains écoutent avant d&apos;agir, le pendule mesure sans juger, et les essences végétales rappellent la mémoire du calme originel.
              </p>
            </div>
          </Reveal>
        </div>

        {/* The 3 Pillars of Practice */}
        <div className="py-16 border-y border-graphite/10">
          <SectionLabel category="Éthique" className="mb-8">
            Les Trois Principes Directeurs
          </SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Reveal delay={0.05} className="space-y-3">
              <p className="font-editorial text-3xl text-brass font-normal">01.</p>
              <h3 className="font-editorial text-2xl text-graphite">L’Écoute Inconditionnelle</h3>
              <p className="text-graphite/70 text-sm leading-relaxed font-light">
                Aucun corps ne ressemble à un autre. Je vous reçois sans schéma préconçu, en prêtant une oreille attentive à ce que les mots disent et à ce que le silence révèle.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="space-y-3">
              <p className="font-editorial text-3xl text-brass font-normal">02.</p>
              <h3 className="font-editorial text-2xl text-graphite">La Continuité du Geste</h3>
              <p className="text-graphite/70 text-sm leading-relaxed font-light">
                À travers le massage Lemniscate et le soin énergétique, le geste ne rompt jamais le contact. C’est cette continuité rassurante qui autorise le système nerveux à désactiver ses réflexes de défense.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="space-y-3">
              <p className="font-editorial text-3xl text-brass font-normal">03.</p>
              <h3 className="font-editorial text-2xl text-graphite">L’Autonomie de la Personne</h3>
              <p className="text-graphite/70 text-sm leading-relaxed font-light">
                Un soin réussi ne crée pas de dépendance : il redonne à la personne les clés de sa propre boussole intérieure et le goût de prendre soin de son équilibre.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cabinet atmosphere banner */}
        <div className="relative rounded-[40px] overflow-hidden bg-limestone p-8 sm:p-14 border border-graphite/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-editorial text-3xl sm:text-4xl text-graphite">
              Le Cabinet — Un sanctuaire de douceur
            </h3>
            <p className="text-graphite/75 text-base leading-relaxed font-light">
              Matières naturelles, lumière feutrée, odeur subtile des huiles biologiques et température douce. Chaque détail du lieu est pensé pour faire baisser la vigilance mentale dès le seuil franchi.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <PrimaryButton href="/prendre-rendez-vous">
                Prendre rendez-vous
              </PrimaryButton>
              <SecondaryButton href="/pratiques">
                Découvrir les pratiques
              </SecondaryButton>
            </div>
          </div>
          <div className="lg:col-span-4 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-md">
            <Image
              src="/assets/fabienne-cabinet.jpg"
              alt="Atmosphère douce du cabinet de consultation"
              fill
              referrerPolicy="no-referrer"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
