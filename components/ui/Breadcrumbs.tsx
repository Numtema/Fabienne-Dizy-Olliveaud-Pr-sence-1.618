import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { generateBreadcrumbSchema, sanitizeJsonLd } from "@/lib/jsonld";

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    ...items,
  ]);

  return (
    <nav aria-label="Fil d'Ariane" className={`text-xs ${className}`}>
      {/* Schema.org BreadcrumbList per spec #59 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(schema) }}
      />

      <ol className="flex items-center flex-wrap gap-1.5 text-graphite/60">
        <li>
          <Link href="/" className="hover:text-graphite transition-colors">
            Accueil
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-graphite/30" />
              {isLast ? (
                <span className="text-brass font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-graphite transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
