"use client";

import { useEffect, useState } from "react";

export function usePointerFine(): boolean {
  const [isFine, setIsFine] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const handler = (e: MediaQueryListEvent) => {
      setIsFine(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isFine;
}
