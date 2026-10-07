"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Orientation() {
  const paths = [
    {
      id: "recevoir",
      tag: "RECEVOIR",
      title: "Se déposer & accueillir",
      description:
        "Laisser les mains et l'énergie délier les nœuds de fatigue, sans rien avoir à faire ni à prouver.",
      links: [
        { label: "Soin Énergétique", href: "/energetique" },
        { label: "Massage Lemniscate", href: "/massage-lemniscate" },
      ],
      image: "/assets/fabienne-hands.jpg",
      spanClass: "lg:col-span-3",
    },
    {
      id: "ralentir",
      tag: "RALENTIR",
      title: "Retrouver le rythme naturel",
      description:
        "Apaiser le système nerveux par la continuité du geste, le souffle guidé et les quintessences botaniques.",
      links: [
        { label: "Massage Lemniscate", href: "/massage-lemniscate" },
        { label: "Aromathérapie subtile", href: "/aromatherapie" },
        { label: "Méditation & Présence", href: "/meditation" },
      ],
      image: "/assets/fabienne-massage-lemniscate.jpg",
      spanClass: "lg:col-span-5", // 1.618 ratio emphasis
    },
    {
      id: "explorer",
      tag: "EXPLORER",
      title: "Éclairer & transmettre",
      description:
        "Interroger le champ vibratoire au pendule, s'initier aux rituels et découvrir les créations de L'Officine.",
      links: [
        { label: "Radiesthésie au pendule", href: "/radiesthesie" },
        { label: "L'Officine des Anges", href: "/officine-des-anges" },
        { label: "Ateliers & Formations", href: "/ateliers-formations" },
      ],
      image: "/assets/fabienne-pendulum.jpg",
      spanClass: "lg:col-span-4",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
        <SectionLabel>Orientation</SectionLabel>
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-graphite tracking-tight">
          De quoi avez-vous besoin <br />
          <span className="italic font-normal text-brass">aujourd’hui ?</span>
        </h2>
        <p className="text-graphite/70 text-base font-light">
          Trois intentions pour vous orienter vers l’accompagnement le plus juste pour votre état présent.
        </p>
      </Reveal>

      {/* Asymmetric 3-column composition per spec #28 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch">
        {paths.map((path, idx) => (
          <Reveal
            key={path.id}
            delay={idx * 0.1}
            className={`${path.spanClass} flex flex-col justify-between rounded-[36px] md:rounded-[44px] overflow-hidden border border-graphite/10 bg-paper p-7 sm:p-9 group transition-all duration-300 hover:border-brass/40 shadow-sm`}
          >
            <div>
              {/* Image with restrained hover per spec #29 */}
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-7 bg-limestone">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.025] transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Tag & Title */}
              <p className="text-[11px] tracking-[0.24em] uppercase text-brass font-medium mb-2">
                {path.tag}
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl text-graphite leading-tight mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {path.title}
              </h3>
              <p className="text-graphite/70 text-sm leading-relaxed mb-6 font-light">
                {path.description}
              </p>
            </div>

            {/* Links list */}
            <div className="pt-6 border-t border-graphite/10 space-y-2.5">
              {path.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between text-xs sm:text-sm font-medium text-graphite/85 hover:text-brass py-1 transition-colors group/link"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-brass/70 group-hover/link:text-brass transition-colors"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
