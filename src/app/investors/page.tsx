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
    body: "Engineering, procurement and construction delivered for third-party owners. Contracted margin, defined scope, and the mechanism through which we build project experience without holding every asset.",
  },
  {
    index: "02",
    title: "Green Project Consulting",
    body: "Feasibility studies, feedstock strategy, technology selection and technical due diligence. Low capital intensity, and it puts us in front of projects long before they are financed.",
  },
  {
    index: "03",
    title: "Carbon Credit Monetisation",
    body: "Screening and development of eligible carbon projects, with verification support and eventual sale where the methodology and registry allow it.",
  },
  {
    index: "04",
    title: "Direct Project Operations",
    body: "A longer-term pathway to owning and operating selected plants. This is the most capital-intensive stream and will be developed carefully as opportunities mature.",
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
    title: "Policy demand, not sentiment demand",
    body: "The offtake case rests on a blending obligation and a national programme, not on voluntary corporate goodwill. Regulated demand is slower to arrive and far harder to withdraw.",
  },
  {
    index: "02",
    title: "Three uncorrelated revenue lines per asset",
    body: "Fuel, fertiliser and carbon respond to different markets. A single plant carries a diversification that most infrastructure of this size does not.",
  },
  {
    index: "03",
    title: "Feedstock owned upstream",
    body: "Agro forestry converts the largest input risk in bio-energy — biomass availability and price — from a market exposure into a contracted supply base.",
  },
  {
    index: "04",
    title: "Repeatability over spectacle",
    body: "Standardised plant configurations across a catchment beat one large bespoke facility on capital efficiency, delivery risk and time to revenue.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Model & Market"
        title={
          <>
            Built for returns{" "}
            <span className="flame-text">that outlast the subsidy.</span>
          </>
        }
        lede="Anantaa Green Energy is building a diversified business model around EPC services, green-project consulting, eligible carbon projects and, over time, direct project operations."
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
                Four streams,
                <br />
                one balance sheet.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Each stream has a different capital profile and a different
                horizon. Held together, they mean a slow year in one does not
                stop the business in the others.
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
                <p className="text-cream-50/60 mt-4 leading-relaxed">{s.body}</p>
              </div>
            ))}
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
            "Feedstock catchment study and contracting status",
            "Capex and opex build-up with named assumptions",
            "Technology selection rationale and alternatives considered",
            "Statutory approval status and critical path",
            "Carbon revenue treated separately from the base case",
            "The assumptions we are least confident about",
          ],
        }}
      >
        <p>
          We would rather have a shorter conversation with a well-informed
          investor than a long one with an enthusiastic one. Every project we
          bring forward is presented with its sensitivities visible.
        </p>
        <p>
          <strong>
            Carbon revenue is always modelled as upside, never as the base case.
          </strong>{" "}
          Credit prices move, methodologies get revised and registries change
          their rules. A project that only clears its hurdle rate with carbon
          included is a project we will tell you not to fund.
        </p>
        <p>
          If a site does not work, we would rather say so at the study stage than
          discover it at commissioning. That position has cost us work before and
          will again.
        </p>
      </CreamFeature>

      <CtaBand
        eyebrow="Investor enquiry"
        title={"Request a\nproject briefing."}
        body="For prospective partnerships, project opportunities and the assumptions behind them, get in touch. We will share what is currently available and where the business is still building its pipeline."
      />
    </>
  );
}
