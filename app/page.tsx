import React from "react";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Orientation } from "@/components/home/Orientation";
import { LemniscateExperience } from "@/components/home/LemniscateExperience";
import { PracticesEditorial } from "@/components/home/PracticesEditorial";
import { OfficinePreview } from "@/components/home/OfficinePreview";
import { Process } from "@/components/home/Process";
import { QuoteInterlude } from "@/components/home/QuoteInterlude";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { FirstExchange } from "@/components/home/FirstExchange";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 01. Hero with initial oscillation & large typography */}
      <Hero />

      {/* 02. Introduction to Fabienne & ethos (Golden ratio 38.2 / 61.8) */}
      <Introduction />

      {/* 03. Orientation — 3 paths: Recevoir, Ralentir, Explorer */}
      <Orientation />

      {/* 04. Lemniscate Experience — The infinite continuous movement */}
      <LemniscateExperience />

      {/* 05. Alternating Editorial Practices */}
      <PracticesEditorial />

      {/* 06. L'Officine des Anges — Botanical formulas & apothecary */}
      <OfficinePreview />

      {/* 07. Sticky Process — 4 steps of the accompanied journey */}
      <Process />

      {/* 08. Typographic Breathing Interlude */}
      <QuoteInterlude />

      {/* 09. Real Verified Testimonials */}
      <Testimonials />

      {/* 10. Frequently Asked Questions & Deontology */}
      <HomeFAQ />

      {/* 11. First Exchange & Booking Invitation */}
      <FirstExchange />
    </div>
  );
}
