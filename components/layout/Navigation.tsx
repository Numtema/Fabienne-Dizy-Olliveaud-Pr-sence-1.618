"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { mainNavItems, practicesSubNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MobileMenu } from "./MobileMenu";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPratiquesOpen, setIsPratiquesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 24px threshold per spec #23
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterPratiques = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsPratiquesOpen(true);
  };

  const handleMouseLeavePratiques = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPratiquesOpen(false);
    }, 180);
  };

  return (
    <>
      <header className="fixed top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.div
          animate={{
            height: isScrolled ? 58 : 64,
            paddingTop: isScrolled ? 6 : 10,
            paddingBottom: isScrolled ? 6 : 10,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto relative w-full max-w-[1220px] rounded-full px-5 md:px-7 flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? "mineral-glass-strong shadow-xl shadow-graphite/5 border border-white/70"
              : "mineral-glass border border-white/40 shadow-sm"
          }`}
        >
          {/* ZONE 1: BRAND */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 rounded-full py-1 pr-2"
          >
            <div className="flex flex-col">
              <span className="font-editorial text-[19px] md:text-[21px] tracking-tight text-graphite leading-tight font-medium hover:text-brass transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-brass font-medium leading-none mt-0.5">
                {siteConfig.territory}
              </span>
            </div>
          </Link>

          {/* ZONE 2: DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.href === "/pratiques") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={handleMouseEnterPratiques}
                    onMouseLeave={handleMouseLeavePratiques}
                  >
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center gap-1 px-3 py-1.5 text-[13px] tracking-[0.02em] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 rounded-full ${
                        isActive ? "text-brass" : "text-graphite/85 hover:text-graphite"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          isPratiquesOpen ? "rotate-180 text-brass" : "text-graphite/40"
                        }`}
                        aria-hidden="true"
                      />
                      {isActive && (
                        <motion.span
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-champagne rounded-full"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>

                    {/* PRATIQUES MEGA MENU PER SPEC #24 */}
                    <AnimatePresence>
                      {isPratiquesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] rounded-[32px] mineral-glass-strong border border-white/70 p-6 shadow-2xl shadow-graphite/10"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            {/* Column 1: Recevoir */}
                            <div>
                              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brass mb-3.5 pb-1 border-b border-graphite/10">
                                Recevoir
                              </p>
                              <div className="space-y-3">
                                {practicesSubNav.recevoir.map((p) => (
                                  <Link
                                    key={p.href}
                                    href={p.href}
                                    onClick={() => setIsPratiquesOpen(false)}
                                    className="block group"
                                  >
                                    <div className="font-editorial text-base text-graphite group-hover:text-brass transition-colors font-medium">
                                      {p.label}
                                    </div>
                                    <p className="text-[11px] text-graphite/60 leading-relaxed mt-0.5 line-clamp-2">
                                      {p.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Column 2: Ralentir / Explorer */}
                            <div>
                              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-brass mb-3.5 pb-1 border-b border-graphite/10">
                                Ralentir / Explorer
                              </p>
                              <div className="space-y-3">
                                {practicesSubNav.ralentir.slice(0, 3).map((p) => (
                                  <Link
                                    key={p.href}
                                    href={p.href}
                                    onClick={() => setIsPratiquesOpen(false)}
                                    className="block group"
                                  >
                                    <div className="font-editorial text-base text-graphite group-hover:text-brass transition-colors font-medium">
                                      {p.label}
                                    </div>
                                    <p className="text-[11px] text-graphite/60 leading-relaxed mt-0.5 line-clamp-2">
                                      {p.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Bottom Contextual Link */}
                          <div className="mt-5 pt-3.5 border-t border-graphite/10 flex items-center justify-between text-xs">
                            <span className="font-editorial italic text-graphite/60">
                              L&apos;écoute du geste continu
                            </span>
                            <Link
                              href="/pratiques"
                              onClick={() => setIsPratiquesOpen(false)}
                              className="font-medium text-brass hover:text-graphite transition-colors inline-flex items-center gap-1"
                            >
                              <span>Toutes les pratiques</span>
                              <ArrowUpRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-[13px] tracking-[0.02em] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 rounded-full ${
                    isActive ? "text-brass" : "text-graphite/85 hover:text-graphite"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-champagne rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS */}
          <div className="flex items-center gap-2">
            <Link
              href="/prendre-rendez-vous"
              className="hidden sm:inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-graphite text-paper text-xs font-medium tracking-[0.03em] hover:bg-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 shadow-sm"
            >
              <span>Prendre rendez-vous</span>
              <ArrowUpRight size={13} className="text-champagne" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              aria-label="Ouvrir le menu de navigation"
              aria-controls="mobile-menu-dialog"
              className="lg:hidden w-10 h-10 rounded-full border border-graphite/15 flex items-center justify-center text-graphite hover:border-graphite/35 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60"
            >
              <Menu size={18} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
