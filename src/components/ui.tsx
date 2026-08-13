import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { SocialLink } from "@/lib/site";

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

/* ------------------------------------------------------------------- social */

const socialIconPaths: Record<SocialLink["icon"], string> = {
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  instagram:
    "M12 0C8.74 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 3.252.148 4.771 1.691 4.919 4.919.055 1.264.07 1.645.07 4.85 0 3.204-.015 3.586-.07 4.85-.148 3.225-1.664 4.771-4.919 4.919-1.265.055-1.645.07-4.85.07-3.204 0-3.585-.015-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.055-1.264-.07-1.645-.07-4.85 0-3.204.015-3.585.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.264-.055 1.645-.07 4.849-.07zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
};

/** Circular outline icon button for LinkedIn/Instagram, matching the WhatsApp button treatment on Contact. */
export function SocialIconLink({
  social,
  className = "",
}: {
  social: SocialLink;
  className?: string;
}) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      title={social.label}
      className={`border-cream-50/20 text-cream-50/70 hover:border-flame-400 hover:text-flame-400 flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d={socialIconPaths[social.icon]} />
      </svg>
    </a>
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
