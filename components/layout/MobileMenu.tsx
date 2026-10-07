"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { mainNavItems, practicesSubNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll while menu is open per spec #26
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key per spec #26
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation principale"
          initial={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 90% 40px)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 90% 40px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-paper text-graphite flex flex-col justify-between overflow-y-auto px-6 py-7 md:hidden"
        >
          {/* Static Lemniscate background silhouette per spec #26 */}
          <div
            className="absolute -right-20 top-1/3 w-96 h-96 opacity-[0.04] pointer-events-none select-none"
            aria-hidden="true"
          >
            <svg viewBox="0 0 400 200" fill="none" className="w-full h-full stroke-graphite" strokeWidth="2">
              <path d="M 50 100 C 50 40, 150 40, 200 100 C 250 160, 350 160, 350 100 C 350 40, 250 40, 200 100 C 150 160, 50 160, 50 100 Z" />
            </svg>
          </div>

          {/* Top bar with brand & close button */}
          <div className="relative flex items-center justify-between border-b border-graphite/10 pb-5">
            <div>
              <p className="font-editorial text-xl tracking-tight text-graphite">
                {siteConfig.name}
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-brass font-medium">
                {siteConfig.territory}
              </p>
            </div>

            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="w-11 h-11 rounded-full border border-graphite/15 flex items-center justify-center text-graphite hover:border-graphite/35 transition-colors focus-visible:ring-2 focus-visible:ring-champagne/60 focus-visible:outline-none"
            >
              <X size={18} />
            </button>
          </div>

          {/* Main navigation list */}
          <nav className="relative my-auto py-8 space-y-4">
            {mainNavItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block font-editorial text-3xl md:text-4xl transition-colors ${
                      isActive ? "text-brass italic" : "text-graphite hover:text-brass"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Quick practices tags */}
            <div className="pt-6 border-t border-graphite/10">
              <p className="text-[11px] tracking-[0.18em] uppercase text-graphite/50 mb-3 font-medium">
                Parcours directs
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-graphite/75">
                {[...practicesSubNav.recevoir, ...practicesSubNav.ralentir].map((practice) => (
                  <Link
                    key={practice.href}
                    href={practice.href}
                    onClick={onClose}
                    className="hover:text-brass transition-colors underline-offset-4 hover:underline"
                  >
                    {practice.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Bottom actions & signature */}
          <div className="relative pt-6 border-t border-graphite/10 space-y-4">
            <Link
              href="/prendre-rendez-vous"
              onClick={onClose}
              className="w-full h-13 rounded-full bg-graphite text-paper text-sm font-medium flex items-center justify-center gap-2 hover:bg-ink transition-colors shadow-md"
            >
              <span>Prendre rendez-vous</span>
              <ArrowUpRight size={16} className="text-champagne" />
            </Link>

            <div className="flex items-center justify-between text-xs text-graphite/60 pt-2">
              <span className="font-editorial italic text-sm">{siteConfig.signature}</span>
              <Link href="/contact" onClick={onClose} className="hover:text-graphite transition-colors">
                Contact & échange
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
