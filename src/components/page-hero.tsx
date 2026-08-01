import type { ReactNode } from "react";
import { AnantaaMark, Eyebrow, Grain } from "@/components/ui";

/**
 * Shared masthead for every inner page. Dark forest canvas, blueprint grid,
 * a single flame-lit corner and an oversized watermark glyph.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-forest-950 grain relative overflow-hidden">
      <Grain />
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(36,142,68,0.9) 0%, rgba(6,19,9,0) 68%)",
        }}
        aria-hidden
      />
      <AnantaaMark
        gradientId="page-hero-mark"
        className="pointer-events-none absolute -right-16 -bottom-24 w-[26rem] opacity-[0.06] lg:w-[34rem]"
      />

      <div className="shell relative pt-36 pb-20 lg:pt-52 lg:pb-28">
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          data-reveal
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          className="display text-cream-50 mt-7 max-w-4xl text-[2.75rem] sm:text-6xl lg:text-[4.75rem]"
        >
          {title}
        </h1>
        {lede && (
          <div
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            className="border-flame-500/60 mt-9 max-w-2xl border-l-2 pl-6"
          >
            <p className="text-cream-50/70 text-lg leading-relaxed lg:text-xl">
              {lede}
            </p>
          </div>
        )}
        {children && (
          <div
            data-reveal
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            className="mt-10"
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
