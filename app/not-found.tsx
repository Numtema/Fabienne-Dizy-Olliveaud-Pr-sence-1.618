import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="max-w-md space-y-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brass font-medium">
          404 · Écart de trajectoire
        </span>

        {/* Small static line per spec #76 */}
        <div className="w-24 h-[1px] bg-champagne mx-auto my-2" />

        <h1 className="font-editorial text-4xl sm:text-5xl text-graphite tracking-tight leading-tight">
          Cette trajectoire <br />
          <span className="italic font-normal text-brass">
            ne mène nulle part.
          </span>
        </h1>

        <p className="text-graphite/70 text-sm font-light leading-relaxed">
          La page que vous recherchez a peut-être changé de rythme ou n’existe plus. Revenez tranquillement au point de départ.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 h-13 px-8 rounded-full bg-graphite text-paper text-xs font-semibold uppercase tracking-wider hover:bg-ink transition-colors shadow-md"
          >
            <span>Retour à l’accueil</span>
            <ArrowUpRight size={14} className="text-champagne" />
          </Link>
        </div>
      </div>
    </div>
  );
}
