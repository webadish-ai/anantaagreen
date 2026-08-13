import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CreamFeature } from "@/components/service-sections";
import { AnantaaMark, Eyebrow, Grain, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Investors",
  description:
    "Anantaa Green Energy's early-stage business model for CBG development, EPC, carbon-credit projects, consulting and long-term operations in India.",
  path: "/investors",
  keywords: ["green energy investment India", "CBG investment opportunity", "renewable energy investors Gujarat"],
});

const revenueStreams = [
  {
    index: "01",
    title: "EPC Services",
    tagline: "Build projects. Build capability.",
    body: "We deliver engineering, procurement, construction, and commissioning for project owners — creating revenue while expanding our execution experience.",
  },
  {
    index: "02",
    title: "Project Development",
    tagline: "Find the opportunity before the project begins.",
    body: "We support feasibility, feedstock assessment, technology planning, project structuring, and development — helping move promising ideas toward execution.",
  },
  {
    index: "03",
    title: "Carbon Credits",
    tagline: "Turn environmental impact into an additional value stream.",
    body: "We develop eligible carbon opportunities and support the journey from project assessment to verification, issuance, trading, and monetisation.",
  },
  {
    index: "04",
    title: "Project Operations",
    tagline: "Stay involved after the plant starts.",
    body: "Over time, we aim to operate selected projects directly, creating opportunities for recurring operational revenue and deeper control over project performance.",
  },
];

const marketFacts = [
  {
    figure: "5,000",
    unit: "CBG plants targeted",
    label: "SATAT",
    note: "SATAT's original national ambition was 5,000 CBG plants by 2023. The figure is useful as historical sector context, not as a current company target.",
  },
  {
    figure: "5%",
    unit: "blending by FY2028-29",
    label: "CBG Blending Obligation",
    note: "A phased obligation on CNG and PNG turns compressed bio-gas from a discretionary purchase into a regulated requirement for city gas distribution entities.",
  },
  {
    figure: "2070",
    unit: "net-zero commitment",
    label: "National target",
    note: "India's net-zero pledge, alongside the Carbon Credit Trading Scheme, underwrites long-horizon demand for verified emission reductions.",
  },
];

const thesis = [
  {
    index: "01",
    title: "Built around emerging demand",
    body: "We operate in sectors supported by India's growing focus on renewable energy, cleaner fuels, sustainable agriculture, and emissions reduction.",
  },
  {
    index: "02",
    title: "Multiple value opportunities",
    body: "A well-designed project can create value across clean fuel, organic fertiliser, biomass, and carbon credits — creating more than one opportunity from the same ecosystem.",
  },
  {
    index: "03",
    title: "Building the biomass ecosystem",
    body: "Through agroforestry programmes and biomass sourcing partnerships, we aim to develop more reliable and sustainable feedstock networks for CBG projects over time.",
  },
  {
    index: "04",
    title: "Built to scale",
    body: "We focus on creating repeatable project models, strong partnerships, and disciplined execution so that every project builds capability for the next.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Model & Market"
        title={
          <>
            Building businesses that{" "}
            <span className="flame-text">
              compound beyond the first project.
            </span>
          </>
        }
        lede="Anantaa Green Energy is building an integrated platform across CBG, agroforestry, carbon credits, EPC, and project operations — creating multiple ways to participate in India's growing clean-energy economy."
      />

      {/* Revenue streams */}
      <section className="bg-forest-950 grain relative overflow-hidden">
        <Grain />
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <AnantaaMark
          gradientId="investors-mark"
          className="pointer-events-none absolute -right-20 -bottom-28 w-[28rem] opacity-[0.05]"
        />

        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Business Model</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                Four revenue streams.
                <br />
                One integrated business.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Anantaa is building a diversified model where each vertical
                supports the next. Some generate near-term service revenue, while
                others create longer-term opportunities and recurring value.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px sm:grid-cols-2">
            {revenueStreams.map((s, i) => (
              <div
                key={s.index}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties}
                className="border-cream-50/12 bg-forest-900/40 rounded-2xl border p-8 lg:p-10"
              >
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {s.index}
                </span>
                <h3 className="display text-cream-50 mt-5 text-2xl lg:text-3xl">
                  {s.title}
                </h3>
                <p className="text-flame-400 mt-3 leading-relaxed">
                  {s.tagline}
                </p>
                <p className="text-cream-50/60 mt-3 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center" data-reveal>
            <p className="eyebrow text-cream-50/50">The bigger picture</p>
            <p className="display text-cream-50 mt-5 text-2xl lg:text-3xl">
              Develop <span className="text-flame-400">→</span> Build{" "}
              <span className="text-flame-400">→</span> Operate{" "}
              <span className="text-flame-400">→</span> Monetise
            </p>
          </div>
        </div>
      </section>

      {/* Market opportunity */}
      <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div data-reveal>
              <Eyebrow tone="light">Market Opportunity</Eyebrow>
            </div>
            <SectionHeading tone="light" className="mt-6" data-reveal>
              A transition with
              <br />
              a legislated floor.
            </SectionHeading>
            <div className="prose-anantaa mt-8 text-lg" data-reveal>
              <p>
                The global shift toward sustainability and carbon neutrality has
                created significant demand for renewable energy and carbon credit
                solutions. India is emerging as a key player in this transition,
                offering opportunities across bioenergy, agroforestry and
                carbon credit sectors. Anantaa Green Energy is strategically
                positioned to capitalise on these trends.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {marketFacts.map((f, i) => (
              <div
                key={f.label}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="border-ink-900/12 bg-cream-100/60 rounded-2xl border p-8"
              >
                <p className="eyebrow text-flame-600">{f.label}</p>
                <p className="display text-ink-900 mt-6 text-5xl lg:text-6xl">
                  {f.figure}
                </p>
                <p className="text-ink-500 mt-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase">
                  {f.unit}
                </p>
                <p className="text-ink-700 mt-5 text-[0.95rem] leading-relaxed">
                  {f.note}
                </p>
              </div>
            ))}
          </div>

          <p className="text-ink-500/70 mt-8 font-mono text-[0.7rem] leading-relaxed">
            Figures reflect published Government of India policy targets for the
            compressed bio-gas and carbon markets. They describe the sector, not
            company performance, and are not a forecast of project returns.
          </p>
        </div>
      </section>

      {/* Investment thesis */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Why Choose Us</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                What the case
                <br />
                actually rests on.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Anantaa Green Energy is an early-stage company building its
                position in high-growth sectors. The investment case will depend
                on project selection, feedstock security, technology execution,
                approvals and disciplined capital deployment—not policy alone.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-12">
            {thesis.map((t, i) => (
              <div
                key={t.index}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-cream-50/12 border-t pt-7"
              >
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {t.index}
                </span>
                <h3 className="display text-cream-50 mt-4 text-2xl lg:text-3xl">
                  {t.title}
                </h3>
                <p className="text-cream-50/65 mt-4 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CreamFeature
        eyebrow="How we engage"
        heading={
          <>
            Straight numbers,
            <br />
            including the bad ones.
          </>
        }
        aside={{
          label: "What we will share",
          items: [
            "Feedstock & Supply — availability, sourcing plan, catchment, and contracting status",
            "Project Economics — detailed capex, opex, revenue assumptions, and project-level financials",
            "Technology — why a particular technology is selected and what alternatives were considered",
            "Approvals & Execution — current status, key requirements, timelines, and potential project risks",
            "Carbon Upside — carbon revenue assessed separately rather than being used to make the base project look stronger",
            "Key Risks & Sensitivities — the assumptions that matter most and the areas where uncertainty remains",
          ],
        }}
      >
        <p>
          Every opportunity should give an investor enough clarity to ask the
          right questions, challenge the assumptions, and make an informed
          decision.
        </p>
      </CreamFeature>

      <CtaBand
        eyebrow="Investor enquiry"
        title={"Want to understand\nthe opportunity?"}
        body="Whether you're exploring a project partnership, strategic opportunity, or investment, start with a conversation. We'll share our current projects, business model, available opportunities, and the assumptions behind them — including what we're still building and where the opportunity is developing."
      />
    </>
  );
}
