import React from "react";
import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  category?: string;
  className?: string;
  light?: boolean;
}

export function SectionLabel({
  children,
  category,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.22em] uppercase font-medium",
        light ? "text-mineral/70" : "text-brass",
        className
      )}
    >
      {category && (
        <>
          <span className="opacity-60">{category}</span>
          <span aria-hidden="true" className="opacity-40">·</span>
        </>
      )}
      <span>{children}</span>
    </div>
  );
}
