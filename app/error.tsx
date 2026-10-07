"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error internally if needed
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="max-w-md space-y-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-brass font-medium">
          Pause inattendue
        </span>

        <div className="w-24 h-[1px] bg-champagne mx-auto my-2" />

        <h1 className="font-editorial text-4xl sm:text-5xl text-graphite tracking-tight leading-tight">
          Un imprévu a suspendu <br />
          <span className="italic font-normal text-brass">
            le mouvement.
          </span>
        </h1>

        <p className="text-graphite/70 text-sm font-light leading-relaxed">
          Une difficulté momentanée est survenue lors du chargement de cette page. Vous pouvez réactualiser l’expérience ou retourner à l’accueil.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-graphite text-paper text-xs font-semibold uppercase tracking-wider hover:bg-ink transition-colors shadow-md"
          >
            <RotateCcw size={14} />
            <span>Réessayer</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-graphite/20 text-graphite text-xs font-semibold uppercase tracking-wider hover:bg-graphite/5 transition-colors"
          >
            <span>Accueil</span>
            <ArrowUpRight size={14} className="text-brass" />
          </Link>
        </div>
      </div>
    </div>
  );
}
