import { processStages, coProducts } from "@/lib/site";
import { ArrowLink, Eyebrow, SectionHeading } from "@/components/ui";

/**
 * The signature element: a vertical process schematic of the CBG line, with a
 * dashed "gas flow" animating down the spine. Pure CSS — no JS, no layout shift.
 */
export function ProcessSpine() {
  return (
    <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
      <div
        className="blueprint-light absolute inset-0 opacity-70"
        aria-hidden
      />

      <div className="shell relative grid gap-16 py-24 lg:grid-cols-12 lg:gap-20 lg:py-32">
        {/* Sticky column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div data-reveal>
              <Eyebrow tone="light">The Process Line</Eyebrow>
            </div>
            <SectionHeading tone="light" className="mt-6" data-reveal>
              From field residue to
              <br />
              <span className="flame-text">road-ready fuel.</span>
            </SectionHeading>
            <div className="prose-anantaa mt-8 max-w-lg text-[1.05rem]" data-reveal>
              <p>
                A Compressed Bio-Gas plant is not one machine — it is a chain of
                six dependent stages, and the economics live in how well they are
                matched to each other and to the feedstock available within a
                sensible haulage radius.
              </p>
              <p>
                We design that chain first and specify equipment second. It is
                the difference between a plant that runs at nameplate and one
                that never does.
              </p>
            </div>
            <div className="mt-8" data-reveal>
              <ArrowLink href="/technology" tone="light">
                Explore the technology
              </ArrowLink>
            </div>
          </div>
        </div>

        {/* Spine */}
        <div className="relative lg:col-span-7">
          <div className="relative pl-10 sm:pl-14">
            {/* static rail */}
            <span
              aria-hidden
              className="bg-ink-900/10 absolute top-2 bottom-2 left-[7px] w-px sm:left-[11px]"
            />
            {/* animated gas flow */}
            <span
              aria-hidden
              className="animate-flow-y absolute top-2 bottom-2 left-[6px] w-[3px] sm:left-[10px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #f37621 0 9px, transparent 9px 28px)",
                backgroundSize: "3px 28px",
                opacity: 0.85,
              }}
            />

            {processStages.map((stage, i) => (
              <div
                key={stage.id}
                className="relative pb-11 last:pb-0"
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                {/* node */}
                <span
                  aria-hidden
                  className="bg-cream-50 border-flame-500 absolute top-1.5 -left-10 h-4 w-4 rounded-full border-2 sm:-left-14 sm:h-6 sm:w-6"
                />
                <span
                  aria-hidden
                  className="bg-flame-500 absolute top-[15px] -left-[31px] h-1.5 w-1.5 rounded-full sm:top-[18px] sm:-left-[45px]"
                />

                <p className="text-flame-600 font-mono text-[0.7rem] tracking-[0.2em]">
                  {stage.index}
                </p>
                <h3 className="display text-ink-900 mt-1.5 text-2xl sm:text-3xl">
                  {stage.title}
                </h3>
                <p className="text-ink-500 mt-2 max-w-md font-mono text-[0.8rem] leading-relaxed">
                  {stage.note}
                </p>
              </div>
            ))}
          </div>

          {/* Co-products branch off the end of the line */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:pl-14">
            {coProducts.map((p, i) => (
              <div
                key={p.title}
                className="border-ink-900/12 bg-cream-100/70 rounded-xl border p-6"
                data-reveal
                style={
                  { "--reveal-delay": `${140 + i * 90}ms` } as React.CSSProperties
                }
              >
                <p className="eyebrow text-flame-600">Co-product</p>
                <h3 className="display text-ink-900 mt-3 text-xl">{p.title}</h3>
                <p className="text-ink-500 mt-2 text-[0.95rem] leading-relaxed">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
