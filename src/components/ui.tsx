import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------------------------------------- brand mark */

/**
 * The Anantaa "A" peak, inlined so its fill and opacity can be driven by CSS.
 * Used as an oversized watermark glyph on section backgrounds.
 */
export function AnantaaMark({
  className,
  gradientId = "anantaa-mark",
}: {
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 423.65 379.12"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="82.29"
          y1="26.1"
          x2="256.7"
          y2="439.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f37621" />
          <stop offset="1" stopColor="#f8bc3e" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M377.48,379.12H293.77v-80.7a78.31,78.31,0,0,0-78.32-78.31H134.76v80.7a78.3,78.3,0,0,0,78.31,78.31H46.21c-35.55,0-57.7-38.42-40-69.2L171.92,23C189.65-7.68,234-7.68,251.77,23l165.6,286.89C435.18,340.7,413,379.12,377.48,379.12Z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------- eyebrow */

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === "dark" ? "text-green-200" : "text-ink-500"
      } ${className}`}
    >
      <span
        aria-hidden
        className="from-flame-500 to-flame-400 inline-block h-[7px] w-[7px] rotate-45 bg-linear-to-br"
      />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ headings */

export function SectionHeading({
  children,
  tone = "dark",
  className = "",
  as: As = "h2",
  ...rest
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
} & ComponentProps<"h2">) {
  return (
    <As
      className={`display text-4xl sm:text-5xl lg:text-[3.6rem] ${
        tone === "dark" ? "text-cream-50" : "text-ink-900"
      } ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}

/* ------------------------------------------------------------------- buttons */

type ButtonVariant = "flame" | "outline" | "solid";

const buttonBase =
  "eyebrow inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5";

const buttonVariants: Record<ButtonVariant, string> = {
  flame:
    "from-flame-500 to-flame-400 text-forest-950 bg-linear-to-r shadow-[0_10px_30px_-12px_rgba(243,118,33,0.75)] hover:shadow-[0_16px_38px_-12px_rgba(243,118,33,0.9)]",
  outline:
    "border border-cream-50/25 text-cream-50 hover:border-flame-400 hover:text-flame-400",
  solid: "bg-forest-900 text-cream-50 hover:bg-forest-800",
};

export function ButtonLink({
  href,
  children,
  variant = "flame",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Text link with a rule that draws itself on hover. */
export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group eyebrow inline-flex items-center gap-3 ${
        tone === "dark"
          ? "text-cream-50 hover:text-flame-400"
          : "text-ink-900 hover:text-flame-600"
      } transition-colors duration-300 ${className}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="bg-flame-500 absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 ease-out group-hover:w-full"
        />
      </span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------- layout */

/** Thin horizontal rule with a flame tick at the left, matching the schematics. */
export function TickRule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-0" aria-hidden>
      <span className="bg-flame-500 h-px w-10" />
      <span
        className={`h-px flex-1 ${tone === "dark" ? "bg-cream-50/12" : "bg-ink-900/12"}`}
      />
    </div>
  );
}

/** Big index numeral used to number services and process stages. */
export function IndexNumeral({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`font-mono text-xs tracking-[0.2em] ${
        tone === "dark" ? "text-flame-400" : "text-flame-600"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/** Film-grain overlay. Absolutely positioned — parent needs `relative`. */
export function Grain() {
  return <span className="grain-layer" aria-hidden />;
}
