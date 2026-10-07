"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, useReducedMotion } from "motion/react";
import { usePointerFine } from "@/hooks/usePointerFine";

interface SignatureLineProps {
  className?: string;
  variant?: "hero" | "lemniscate-scene" | "footer" | "divider";
  height?: number;
}

function generateStaticLemniscate(height: number): string {
  const width = 800;
  const centerY = height / 2;
  const scaleX = 260;
  const scaleY = 46;
  let d = "";
  const steps = 100;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const sinT = Math.sin(t);
    const cosT = Math.cos(t);
    const denom = 1 + sinT * sinT;
    const x = width / 2 + (scaleX * cosT) / denom;
    const y = centerY + (scaleY * sinT * cosT) / denom;
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

export function SignatureLine({
  className = "",
  variant = "hero",
  height = 140,
}: SignatureLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [pathData, setPathData] = useState<string>(() => generateStaticLemniscate(height));
  const isFinePointer = usePointerFine();

  // Mouse offset (max 12px per spec #16)
  const mouseOffset = useRef({ x: 0, y: 0 });
  const targetMouseOffset = useRef({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      // Clamped to 12px max influence
      targetMouseOffset.current = {
        x: Math.max(-12, Math.min(12, relX * 12)),
        y: Math.max(-12, Math.min(12, relY * 12)),
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isFinePointer, prefersReducedMotion]);

  useEffect(() => {
    // If reduced motion is requested, do not run animation loop
    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId: number;
    let startTime = performance.now();

    const renderFrame = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = smoothProgress.get();

      // Smooth mouse lerp
      mouseOffset.current.x += (targetMouseOffset.current.x - mouseOffset.current.x) * 0.08;
      mouseOffset.current.y += (targetMouseOffset.current.y - mouseOffset.current.y) * 0.08;

      const width = 800;
      const centerY = height / 2 + mouseOffset.current.y * 0.5;

      let d = "";
      const steps = 120;

      if (variant === "footer") {
        // Phase 5: settled, nearly still peaceful trace
        const scaleX = 280;
        const scaleY = 32;
        const gentleBreathe = Math.sin(elapsed * 0.8) * 2;

        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2;
          const sinT = Math.sin(t);
          const cosT = Math.cos(t);
          const denom = 1 + sinT * sinT;
          const x = width / 2 + (scaleX * cosT) / denom;
          const y = centerY + ((scaleY + gentleBreathe) * sinT * cosT) / denom;
          d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
        }
      } else if (variant === "lemniscate-scene") {
        // Pure continuous Lemniscate in motion
        const scaleX = 320;
        const scaleY = 56;
        const breathe = Math.sin(elapsed * 1.2) * 5;

        for (let i = 0; i <= steps; i++) {
          const t = (i / steps) * Math.PI * 2;
          const sinT = Math.sin(t);
          const cosT = Math.cos(t);
          const denom = 1 + sinT * sinT;
          const x = width / 2 + (scaleX * cosT) / denom;
          const y = centerY + ((scaleY + breathe) * sinT * cosT) / denom;
          d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
        }
      } else {
        // Dynamic Hero -> Lemniscate morph based on scroll progress
        // 0.00 - 0.15: Wave oscillation (pendulum trace)
        // 0.15 - 0.35: Amplitude damping & trajectory curvature
        // 0.35 - 0.70: Emergence of the full Lemniscate
        // 0.70+: Settling into balance
        const p = Math.min(1, Math.max(0, progress * 2.8));

        // Sine wave params
        const wavePeriod = 3.6; // ~3.6s period per spec #16
        const wavePhase = (elapsed / wavePeriod) * Math.PI * 2;
        const waveAmp = (1 - p * 0.75) * 32;

        // Lemniscate scale
        const lemScaleX = 280;
        const lemScaleY = 50;

        for (let i = 0; i <= steps; i++) {
          const u = i / steps; // 0 to 1
          // Wave point
          const waveX = 60 + u * (width - 120);
          const waveY =
            centerY +
            Math.sin(u * Math.PI * 3 + wavePhase) * waveAmp +
            mouseOffset.current.y * Math.sin(u * Math.PI);

          // Lemniscate point
          const t = u * Math.PI * 2;
          const sinT = Math.sin(t);
          const cosT = Math.cos(t);
          const denom = 1 + sinT * sinT;
          const lemX = width / 2 + (lemScaleX * cosT) / denom;
          const lemY = centerY + (lemScaleY * sinT * cosT) / denom;

          // Interpolation based on progress p
          // Below 0.20: predominantly wave
          // Above 0.40: predominantly lemniscate
          const blend = Math.max(0, Math.min(1, (p - 0.12) / 0.35));
          const smoothBlend = blend * blend * (3 - 2 * blend); // smoothstep

          const currentX = waveX * (1 - smoothBlend) + lemX * smoothBlend;
          const currentY = waveY * (1 - smoothBlend) + lemY * smoothBlend;

          d += i === 0 ? `M ${currentX.toFixed(2)} ${currentY.toFixed(2)}` : ` L ${currentX.toFixed(2)} ${currentY.toFixed(2)}`;
        }
      }

      setPathData(d);
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    animationFrameId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [variant, height, isFinePointer, prefersReducedMotion, smoothProgress]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex items-center justify-center overflow-visible select-none pointer-events-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 800 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[840px] overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="signatureGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#927B57" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#B6A17C" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#FAF8F3" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#B6A17C" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#927B57" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="signatureSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F998E" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#8F998E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8F998E" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Delicate subtle shadow / echo line */}
        {pathData && (
          <path
            d={pathData}
            stroke="url(#signatureSecondary)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
        )}

        {/* Primary signature line (1.2px desktop, 1.0px mobile per spec #15) */}
        {pathData && (
          <path
            d={pathData}
            stroke="url(#signatureGlow)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}
