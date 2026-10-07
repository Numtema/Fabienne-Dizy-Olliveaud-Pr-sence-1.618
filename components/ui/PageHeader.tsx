import React from "react";
import { Breadcrumbs, BreadcrumbCrumb } from "./Breadcrumbs";
import { SectionLabel } from "./SectionLabel";

interface PageHeaderProps {
  label?: string;
  category?: string;
  title: string;
  italicTitle?: string;
  description?: string;
  crumbs?: BreadcrumbCrumb[];
  className?: string;
}

export function PageHeader({
  label,
  category = "Présence 1.618",
  title,
  italicTitle,
  description,
  crumbs,
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`pt-32 md:pt-40 pb-16 md:pb-20 border-b border-graphite/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-6">
        {crumbs && crumbs.length > 0 && (
          <div className="mb-2">
            <Breadcrumbs items={crumbs} />
          </div>
        )}

        {label && (
          <SectionLabel category={category}>
            {label}
          </SectionLabel>
        )}

        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-graphite tracking-tight leading-[1.05] max-w-4xl">
          {title}{" "}
          {italicTitle && (
            <span className="italic font-normal text-brass block sm:inline">
              {italicTitle}
            </span>
          )}
        </h1>

        {description && (
          <p className="text-graphite/75 text-base sm:text-xl font-light leading-relaxed max-w-2xl pt-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
