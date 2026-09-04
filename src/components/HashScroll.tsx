"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 80;

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      const top = window.scrollY + target.getBoundingClientRect().top - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, top), behavior: "auto" });

      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousBehavior;
      });
    };

    const frame = requestAnimationFrame(scrollToTarget);
    const settled = window.setTimeout(scrollToTarget, 600);
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settled);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, [pathname]);

  return null;
}
