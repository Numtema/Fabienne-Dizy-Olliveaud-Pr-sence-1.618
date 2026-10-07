"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = true,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 h-[54px] px-8 rounded-full",
        "bg-graphite text-paper text-[13px] md:text-sm font-medium tracking-[0.04em]",
        "border border-white/10 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20",
        "transition-colors duration-300 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="text-champagne transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus-visible:outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="focus-visible:outline-none">
      {content}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full",
        "bg-transparent text-graphite text-[13px] md:text-sm font-medium tracking-[0.04em]",
        "border border-graphite/20 hover:border-graphite/40 hover:bg-graphite/5",
        "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus-visible:outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="focus-visible:outline-none">
      {content}
    </button>
  );
}

export function GlassButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = true,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full",
        "mineral-glass text-graphite text-[13px] md:text-sm font-medium tracking-[0.04em]",
        "hover:bg-white/45 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus-visible:outline-none">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="focus-visible:outline-none">
      {content}
    </button>
  );
}
