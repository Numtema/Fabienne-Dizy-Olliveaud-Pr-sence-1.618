"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerLinks } from "@/config/navigation";
import { SignatureLine } from "@/components/motion/SignatureLine";

export function Footer() {
  return (
    <footer className="relative bg-ink text-mineral pt-20 md:pt-28 pb-12 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-champagne/10 via-transparent to-transparent pointer-events-none blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Editorial Wordmark Section */}
        <div className="pb-14 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-champagne font-medium mb-3">
                {siteConfig.territory}
              </p>
              <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-paper leading-[0.9]">
                Fabienne <br className="hidden sm:inline" />
                <span className="italic font-light text-champagne">Dizy Olliveaud</span>
              </h2>
            </div>

            <div className="max-w-xs text-mineral/70 text-sm leading-relaxed">
              <p className="font-editorial italic text-lg text-paper mb-1">
                {siteConfig.signature}
              </p>
              <p className="text-xs text-mineral/50">
                {siteConfig.secondaryLine}
              </p>
            </div>
          </div>

          {/* Settling Signature Line - Phase 5 per spec #49 */}
          <div className="my-8 opacity-80">
            <SignatureLine variant="footer" height={100} />
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-b border-white/10 text-sm">
          {/* Col 1: Navigation */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-medium mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-mineral/70">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Pratiques */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-medium mb-4">
              Pratiques
            </h3>
            <ul className="space-y-2.5 text-mineral/70">
              {footerLinks.practices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explorer */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-medium mb-4">
              Explorer
            </h3>
            <ul className="space-y-2.5 text-mineral/70">
              {footerLinks.explorer.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Informations & Cadre */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-champagne font-medium mb-4">
              Informations
            </h3>
            <ul className="space-y-2.5 text-mineral/70">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-paper transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-xs text-mineral/50 block pt-1">
                  Sur rendez-vous uniquement
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer per spec #52 */}
        <div className="py-8 text-[11px] leading-relaxed text-mineral/50 max-w-4xl border-b border-white/5">
          <p>{siteConfig.disclaimer}</p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mineral/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.territory}. Tous droits réservés.
          </p>
          <p className="font-editorial italic text-mineral/60">
            {siteConfig.signature}
          </p>
        </div>
      </div>
    </footer>
  );
}
