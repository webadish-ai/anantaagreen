"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Renders nothing. Watches every [data-reveal] element on the page and flips it
 * to data-reveal="shown" as it enters the viewport. CSS handles the transition,
 * so if JS never runs the content simply stays visible (see globals.css).
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.setAttribute("data-reveal", "shown"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal", "shown");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );

    nodes.forEach((n) => {
      // Anything already on screen at mount reveals immediately.
      if (n.getBoundingClientRect().top < window.innerHeight) {
        n.setAttribute("data-reveal", "shown");
      } else {
        observer.observe(n);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
