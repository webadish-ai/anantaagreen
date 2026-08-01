import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Eyebrow, Grain, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The CBG process explained — anaerobic digestion in CSTR or plug flow digesters, H₂S removal, and CO₂ upgrading by water scrubbing, PSA or membrane separation, through to 250 bar compression.",
  alternates: { canonical: "/technology" },
};

const stages = [
  {
    index: "01",
    title: "Feedstock Reception & Preparation",
    body: "Incoming biomass is weighed, screened for contaminants and characterised for total solids, volatile solids and, where relevant, carbon-to-nitrogen ratio. Fibrous material is shredded to reduce particle size and increase the surface area available to the microbial population. Slurry is made up to a target solids concentration so the digester receives a consistent feed rather than a variable one.",
    spec: "Target 8–12% total solids for wet digestion",
  },
  {
    index: "02",
    title: "Anaerobic Digestion",
    body: "The prepared feed enters a digester — a CSTR or a plug flow reactor, chosen against the feedstock — where, in the absence of oxygen, four microbial stages run in sequence: hydrolysis, acidogenesis, acetogenesis and methanogenesis. Temperature, mixing and organic loading rate are held stable because methanogens are the slowest and most sensitive population in the chain, and everything downstream depends on them.",
    spec: "Mesophilic 35–40°C · 25–40 day hydraulic retention",
  },
  {
    index: "03",
    title: "Hydrogen Sulphide Removal",
    body: "Raw biogas carries hydrogen sulphide, which is corrosive to compressors, engines and pipework and poisons downstream adsorbents. It is removed biologically through controlled micro-aeration or biotrickling, and polished with iron-oxide media or activated carbon. This step protects every asset that follows it and is not somewhere to economise.",
    spec: "Reduce H₂S to single-digit ppm before upgrading",
  },
  {
    index: "04",
    title: "Drying & Conditioning",
    body: "Gas leaving the digester is saturated with water vapour. Moisture is knocked out by cooling and condensation, then reduced further by chillers or adsorption drying. Dry gas prevents acid formation, protects adsorbent beds and membranes, and keeps water out of the high-pressure system.",
    spec: "Chilling and adsorption drying to a low dew point",
  },
  {
    index: "05",
    title: "CO₂ Upgrading",
    body: "Carbon dioxide is separated from methane to lift the gas from roughly 55–65% methane to above 90%, the point at which it becomes a vehicle-grade and grid-injectable fuel. Three routes are in common use — water scrubbing, pressure swing adsorption and membrane separation — and the right one depends on scale, utilities, and the tolerance for methane slip.",
    spec: "Upgrade to >90% CH₄, per IS 16087 for CBG",
  },
  {
    index: "06",
    title: "Compression, Storage & Dispatch",
    body: "Upgraded gas is compressed in stages and filled into a cascade for cylinder loading, or metered into a city gas distribution network where a connection exists. Digestate leaves the other end of the plant as fermented organic manure — solid and liquid — for return to the catchment that supplied the feedstock.",
    spec: "Cascade filling at approximately 200–250 bar",
  },
];

const digesterTypes = [
  {
    name: "CSTR Digester",
    principle:
      "A continuously stirred tank reactor holds a homogeneous, mechanically or gas-mixed slurry at wet solids concentration, giving the microbial population uniform conditions throughout the tank.",
    bestFor: [
      "Liquid and mixed organic feedstock",
      "Press mud, spent wash, food and market waste",
      "Sites needing steady, well-characterised throughput",
    ],
  },
  {
    name: "Plug Flow Digester",
    principle:
      "Feed moves in sequence along an elongated, largely unmixed vessel — a dry fermentation process suited to high-solids material that a CSTR cannot pump or stir efficiently.",
    bestFor: [
      "Agricultural residue and crop waste",
      "Segregated organic fraction of municipal solid waste",
      "Feedstock too fibrous or dry for wet digestion",
    ],
  },
];

const upgradingRoutes = [
  {
    name: "Water Scrubbing",
    principle:
      "CO₂ is far more soluble in water than methane under pressure. Gas is contacted with water counter-current in a packed column; CO₂ dissolves and is stripped off in a flash and regeneration stage.",
    strengths: [
      "No chemicals or adsorbent consumables",
      "Tolerant of residual H₂S",
      "Well proven at medium and large scale",
    ],
    tradeoffs: [
      "Significant water and power demand",
      "Larger physical footprint",
    ],
  },
  {
    name: "Pressure Swing Adsorption",
    principle:
      "CO₂ is adsorbed onto a carbon molecular sieve at elevated pressure and released when the pressure is dropped. Multiple columns cycle in sequence so the output stream is continuous.",
    strengths: [
      "Compact footprint",
      "No water requirement",
      "Fast response to load changes",
    ],
    tradeoffs: [
      "Requires thoroughly dried, H₂S-free feed gas",
      "Adsorbent replacement over the asset life",
    ],
  },
  {
    name: "Membrane Separation",
    principle:
      "Hollow-fibre polymeric membranes let CO₂ permeate faster than methane. Staging the modules and recycling the permeate keeps methane losses down while reaching the required purity.",
    strengths: [
      "Modular and readily expandable",
      "No water or chemical consumption",
      "Low moving-part count and maintenance",
    ],
    tradeoffs: [
      "Sensitive to contaminants and condensate",
      "Multi-stage design needed to limit slip",
    ],
  },
];

const equipment = [
  {
    title: "CSTR / Plug Flow Digester",
    body: "Continuously stirred tank or plug flow reactor with mechanical or gas mixing, insulation and heating loop. Sized against organic loading rate and selected against feedstock, not volume alone.",
  },
  {
    title: "Desulphurisation System",
    body: "Biological and media-based H₂S removal with polishing, specified to the actual sulphur load of the feedstock rather than a nominal figure.",
  },
  {
    title: "Gas Holder & Flare",
    body: "Buffer storage to decouple production from upgrading, with an enclosed flare for safe disposal during upset or maintenance.",
  },
  {
    title: "Upgrading Skid",
    body: "Water scrubber, PSA train or membrane cascade, selected against scale, utilities and permissible methane slip.",
  },
  {
    title: "Compression & Cascade",
    body: "Multi-stage compression with intercooling, high-pressure storage cascade and dispensing or grid metering.",
  },
  {
    title: "Digestate Handling",
    body: "Separation into solid and liquid fractions, drying and packing for fermented organic manure sale.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Process Technology"
        title={
          <>
            Six stages.{" "}
            <span className="flame-text">
              Every one of them can sink the plant.
            </span>
          </>
        }
        lede="A CBG facility is a chain, and its output is set by its weakest link. This is how the chain works, what each stage is actually doing, and where the engineering decisions matter most."
      />

      {/* The chain */}
      <section className="bg-forest-950 relative overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative py-8 lg:py-12">
          {stages.map((stage) => (
            <article
              key={stage.index}
              data-reveal
              className="border-cream-50/12 grid gap-6 border-b py-14 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-16"
            >
              <div className="lg:col-span-4">
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {stage.index}
                </span>
                <h2 className="display text-cream-50 mt-4 text-3xl lg:text-4xl">
                  {stage.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-cream-50/70 text-lg leading-relaxed">
                  {stage.body}
                </p>
                <p className="border-flame-500/50 text-cream-50/45 mt-6 border-l-2 pl-4 font-mono text-[0.78rem] tracking-wide">
                  {stage.spec}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Digester technology */}
      <section className="bg-forest-900 grain relative overflow-hidden">
        <Grain />
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Stage 02 in detail</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                Two reactors.
                <br />
                One is right for you.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Wet feedstock and dry feedstock do not belong in the same tank.
                The choice between CSTR and plug flow is made against what is
                actually arriving at the gate, not house preference.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {digesterTypes.map((d, i) => (
              <div
                key={d.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="border-cream-50/12 bg-forest-850/50 rounded-2xl border p-7 lg:p-8"
              >
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-cream-50 mt-4 text-2xl">
                  {d.name}
                </h3>
                <p className="text-cream-50/65 mt-4 text-[0.95rem] leading-relaxed">
                  {d.principle}
                </p>
                <div className="border-cream-50/10 mt-6 border-t pt-5">
                  <p className="eyebrow text-flame-400">Best suited to</p>
                  <ul className="mt-3 space-y-2">
                    {d.bestFor.map((b) => (
                      <li
                        key={b}
                        className="text-cream-50/65 flex gap-2.5 text-[0.9rem] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="bg-flame-500 mt-2 h-[5px] w-[5px] shrink-0 rotate-45"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrading routes */}
      <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow tone="light">Stage 05 in detail</Eyebrow>
              </div>
              <SectionHeading tone="light" className="mt-6" data-reveal>
                Three ways to take
                <br />
                the CO₂ out.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-ink-700 leading-relaxed">
                There is no universally correct upgrading technology. There is
                only the one that suits your scale, your utilities and how much
                methane you can afford to lose out of the tail gas.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {upgradingRoutes.map((route, i) => (
              <div
                key={route.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="border-ink-900/12 bg-cream-100/60 flex flex-col rounded-2xl border p-7 lg:p-8"
              >
                <span className="text-flame-600 font-mono text-xs tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-ink-900 mt-4 text-2xl">
                  {route.name}
                </h3>
                <p className="text-ink-700 mt-4 text-[0.95rem] leading-relaxed">
                  {route.principle}
                </p>

                <div className="border-ink-900/10 mt-6 border-t pt-5">
                  <p className="eyebrow text-flame-600">Strengths</p>
                  <ul className="mt-3 space-y-2">
                    {route.strengths.map((s) => (
                      <li
                        key={s}
                        className="text-ink-700 flex gap-2.5 text-[0.9rem] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="bg-flame-500 mt-2 h-[5px] w-[5px] shrink-0 rotate-45"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-ink-900/10 mt-5 border-t pt-5">
                  <p className="eyebrow text-ink-500">Trade-offs</p>
                  <ul className="mt-3 space-y-2">
                    {route.tradeoffs.map((t) => (
                      <li
                        key={t}
                        className="text-ink-500 flex gap-2.5 text-[0.9rem] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="bg-ink-500/50 mt-2 h-[5px] w-[5px] shrink-0 rotate-45"
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink-500/70 mt-8 font-mono text-[0.7rem] leading-relaxed">
            Operating parameters quoted across this page are indicative industry
            ranges. Project figures are confirmed against feedstock
            characterisation and detailed engineering.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-forest-900 grain relative overflow-hidden">
        <Grain />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div data-reveal>
              <Eyebrow>Core Equipment</Eyebrow>
            </div>
            <SectionHeading className="mt-6" data-reveal>
              The package,
              <br />
              stage by stage.
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e, i) => (
              <div
                key={e.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="border-cream-50/12 border-t pt-6"
              >
                <h3 className="display text-cream-50 text-xl lg:text-2xl">
                  {e.title}
                </h3>
                <p className="text-cream-50/60 mt-3 text-[0.97rem] leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MSW special case */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative grid gap-14 py-24 lg:grid-cols-12 lg:gap-20 lg:py-32">
          <div className="lg:col-span-5">
            <div data-reveal>
              <Eyebrow tone="light">Special case</Eyebrow>
            </div>
            <SectionHeading tone="light" className="mt-6 text-4xl lg:text-5xl!" data-reveal>
              MSW-based
              <br />
              CBG plants.
            </SectionHeading>
          </div>
          <div className="prose-anantaa lg:col-span-7" data-reveal>
            <p>
              Municipal solid waste is the most politically attractive feedstock
              and the most operationally difficult. The organic fraction digests
              well; everything mixed in with it does not.
            </p>
            <p>
              <strong>
                Segregation quality at source is the single variable that decides
                whether an MSW plant works.
              </strong>{" "}
              Where segregation is unreliable, front-end separation has to be
              engineered heavily — and the digestate is harder to sell as manure,
              which removes a revenue line the wet-feedstock case depends on.
            </p>
            <p>
              We will build MSW-based plants, and we will tell you before we start
              exactly which municipal commitments the business case is resting
              on. It is a solvable problem, but not one to be optimistic about in
              a feasibility study.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Technical enquiry"
        title={"Want this applied\nto your feedstock?"}
        body="Send a feedstock description and an approximate tonnage. We will come back with an indicative technology route and the questions that need answering before it can be firmed up."
      />
    </>
  );
}
