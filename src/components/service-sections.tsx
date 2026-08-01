import Link from "next/link";
import { services } from "@/lib/site";
import { Eyebrow, SectionHeading } from "@/components/ui";

/* ------------------------------------------------------- scope of work grid */

export function ScopeGrid({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-forest-950 relative overflow-hidden">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <div className="shell relative py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div data-reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <SectionHeading className="mt-6" data-reveal>
              {heading}
            </SectionHeading>
          </div>
          {intro && (
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">{intro}</p>
            </div>
          )}
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              className="border-cream-50/12 border-t pt-6"
            >
              <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-cream-50 mt-4 text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-cream-50/60 mt-3 text-[0.97rem] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- cream feature */

export function CreamFeature({
  eyebrow,
  heading,
  children,
  aside,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  aside?: { label: string; items: string[] };
}) {
  return (
    <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
      <div className="blueprint-light absolute inset-0 opacity-70" aria-hidden />
      <div className="shell relative grid gap-14 py-24 lg:grid-cols-12 lg:gap-20 lg:py-32">
        <div className="lg:col-span-7">
          <div data-reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </div>
          <SectionHeading tone="light" className="mt-6" data-reveal>
            {heading}
          </SectionHeading>
          <div
            className="prose-anantaa mt-8 max-w-2xl text-[1.05rem]"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            {children}
          </div>
        </div>

        {aside && (
          <aside
            className="lg:col-span-5"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <div className="border-ink-900/12 bg-cream-100/60 rounded-2xl border p-7 lg:sticky lg:top-32">
              <p className="eyebrow text-flame-600">{aside.label}</p>
              <ul className="mt-5 space-y-0">
                {aside.items.map((item, i) => (
                  <li
                    key={item}
                    className={`text-ink-700 flex gap-3 py-3 text-[0.95rem] leading-relaxed ${
                      i > 0 ? "border-ink-900/10 border-t" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="bg-flame-500 mt-2.5 h-[6px] w-[6px] shrink-0 rotate-45"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- cross-linking */

export function OtherServices({ current }: { current: string }) {
  const rest = services.filter((s) => s.slug !== current);

  return (
    <section className="bg-forest-900 border-cream-50/8 border-t">
      <div className="shell py-16 lg:py-20">
        <Eyebrow>Continue</Eyebrow>
        <div className="mt-8 grid gap-px sm:grid-cols-2">
          {rest.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group border-cream-50/10 hover:bg-forest-850 flex items-center justify-between gap-6 rounded-2xl border p-7 transition-colors"
            >
              <div>
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {s.index}
                </span>
                <h3 className="display text-cream-50 group-hover:text-flame-400 mt-3 text-2xl transition-colors">
                  {s.title}
                </h3>
                <p className="text-cream-50/50 mt-1 text-sm">{s.short}</p>
              </div>
              <span
                aria-hidden
                className="text-flame-400 text-2xl transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
