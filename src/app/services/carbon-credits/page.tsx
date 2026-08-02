import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  CreamFeature,
  OtherServices,
  ScopeGrid,
} from "@/components/service-sections";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { jsonLdScriptProps } from "@/lib/json-ld";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Carbon Credits",
  description:
    "Carbon-credit project screening, documentation and verification support by Anantaa Green Energy for CBG, methane-avoidance and agroforestry activities.",
  path: "/services/carbon-credits",
  keywords: ["carbon credit projects India", "carbon credit origination", "carbon credit consulting"],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Carbon Credit Project Development",
  name: "Carbon Credits",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IN",
  url: `${site.url}/services/carbon-credits`,
  description:
    "Eligibility screening, baseline assessment, methodology selection, documentation and monitoring support through to issuance and offtake for eligible carbon-credit projects.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    { "@type": "ListItem", position: 3, name: "Carbon Credits", item: `${site.url}/services/carbon-credits` },
  ],
};

const scope = [
  {
    title: "Eligibility Screening",
    body: "An early, unsentimental read on whether a project can generate credits at a volume worth the transaction cost of certifying it.",
  },
  {
    title: "Baseline Assessment",
    body: "Establishing what would have happened without the project — the counterfactual that every credit is ultimately measured against.",
  },
  {
    title: "Methodology Selection",
    body: "Choosing the approved methodology that fits the activity, and structuring the project boundary so it stays fitting for the full crediting period.",
  },
  {
    title: "Documentation Support",
    body: "Project design documents, monitoring plans and the evidence trail that validation bodies will actually ask to see.",
  },
  {
    title: "Monitoring & MRV",
    body: "Instrumentation, data capture and reporting discipline built into plant operations from day one, rather than reconstructed later.",
  },
  {
    title: "Issuance & Offtake",
    body: "Coordination with verification bodies and registries through to issuance, then a sale strategy suited to the buyer profile for that credit type.",
  },
];

const emissionScopes = [
  {
    index: "Scope 1",
    title: "Direct emissions",
    body: "From sources a company owns or controls — fuel burned on-site, company vehicles, process emissions. Usually the first target for reduction because it is the most within a buyer's own control.",
  },
  {
    index: "Scope 2",
    title: "Purchased energy",
    body: "Emissions from the electricity, steam or heat a company buys. Addressed through efficiency and renewable power purchase, well ahead of any credit purchase.",
  },
  {
    index: "Scope 3",
    title: "Value chain emissions",
    body: "Everything upstream and downstream — suppliers, logistics, product use. Usually the largest share of a company's footprint and the slowest to eliminate through operational change alone.",
  },
];

const sources = [
  "Methane avoided from residue that would otherwise decompose uncontrolled",
  "Fossil fuel displaced when CBG substitutes for CNG or diesel",
  "Open-field crop residue burning avoided within the feedstock catchment",
  "Biomass and soil carbon sequestered through agroforestry plantations",
];

export default function CarbonCreditsPage() {
  return (
    <>
      <script {...jsonLdScriptProps(serviceJsonLd)} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
      <PageHero
        eyebrow="Service 02 — Carbon Markets"
        title={
          <>
            Carbon credits,{" "}
            <span className="flame-text">earned before they are sold.</span>
          </>
        }
        lede="Generating and monetising carbon credits for environmental impact — building the measurement discipline into the project from the start, because a credit is only worth what its evidence can defend."
      >
        <ButtonLink href="/contact">Assess a Carbon Project</ButtonLink>
      </PageHero>

      <CreamFeature
        eyebrow="What it is"
        heading={
          <>
            A credit is a claim.
            <br />
            Its value is the proof.
          </>
        }
        aside={{
          label: "Where our credits come from",
          items: sources,
        }}
      >
        <p>
          A carbon credit generally represents one metric tonne of verified
          carbon-dioxide-equivalent reduction or removal, subject to the relevant
          methodology and registry. Buyers are ultimately paying for evidence that
          the result is real, additional and not counted twice.
        </p>
        <p>
          <strong>
            Which is why credit quality is decided in the design phase, not at
            the point of sale.
          </strong>{" "}
          Meters that were never installed cannot be retrofitted into a monitoring
          record. A project boundary drawn loosely at the start becomes a
          discount at verification.
        </p>
        <p>
            We treat carbon as engineering rather than paperwork — while being
            clear that eligibility, issuance and pricing are not guaranteed. For
            many CBG projects, potential carbon revenue should be modelled as
            upside to a business that already works on fuel and fertiliser alone.
        </p>
      </CreamFeature>

      <ScopeGrid
        eyebrow="Scope of Work"
        heading={
          <>
            From eligibility screen
            <br />
            to issued instrument.
          </>
        }
        intro="Carbon certification is a long, evidence-heavy process with several points where a weak decision made early becomes expensive later. We work the sequence in order."
        items={scope}
      />

      {/* Why buyers are in the market */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow tone="light">Why buyers are in the market</Eyebrow>
              </div>
              <SectionHeading tone="light" className="mt-6" data-reveal>
                Credits close the gap
                <br />
                reduction can&apos;t.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-ink-700 leading-relaxed">
                Corporate net-zero commitments are built around three
                categories of emissions. Understanding them explains why a
                buyer is in the market for a credit at all.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {emissionScopes.map((s, i) => (
              <div
                key={s.index}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                className="border-ink-900/12 bg-cream-50/60 rounded-2xl border p-7 lg:p-8"
              >
                <span className="eyebrow text-flame-600">{s.index}</span>
                <h3 className="display text-ink-900 mt-4 text-2xl">
                  {s.title}
                </h3>
                <p className="text-ink-700 mt-4 text-[0.95rem] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-ink-700 mt-10 max-w-3xl leading-relaxed">
            Even the most committed decarbonisation pathway leaves a residual
            — emissions no operational change can remove in time. A verified
            credit funds an equivalent tonne of reduction elsewhere, which is
            why methane avoided and fossil fuel displaced by a CBG plant, or
            carbon sequestered by an agroforestry programme, may have a buyer on
            the other end of it.
          </p>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p
                className="eyebrow text-green-200 flex items-center gap-3"
                data-reveal
              >
                <span
                  aria-hidden
                  className="from-flame-500 to-flame-400 inline-block h-[7px] w-[7px] rotate-45 bg-linear-to-br"
                />
                The standards landscape
              </p>
              <h2 className="display text-cream-50 mt-6 text-4xl lg:text-5xl" data-reveal>
                Two markets,
                <br />
                different buyers.
              </h2>
            </div>
            <div className="prose-dark lg:col-span-7" data-reveal>
              <p>
                <strong>Voluntary markets</strong> — administered by independent
                standards such as Verra&apos;s VCS and the Gold Standard — serve
                corporates buying reductions against their own targets. Pricing is
                driven by project type, vintage and the credibility of the story
                behind the tonne.
              </p>
              <p>
                <strong>India&apos;s compliance market</strong> is arriving through
                the Carbon Credit Trading Scheme, established under the Energy
                Conservation Act, with obligated entities and a domestic
                registry. It changes who the buyer is and how the price is set.
              </p>
              <p>
                We keep projects positioned for both where the methodology allows
                it, and we say so plainly when it does not. Registry rules and
                eligibility criteria move; any project-specific position is
                confirmed against the standard in force at the time of
                registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OtherServices current="carbon-credits" />
      <CtaBand
        eyebrow="Carbon enquiry"
        title={"Is there a credit\nin your project?"}
        body="Send us the activity, the scale and the timeline. We will tell you whether it is creditable, roughly what volume to expect, and whether the certification cost is worth carrying."
      />
    </>
  );
}
