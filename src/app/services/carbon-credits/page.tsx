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
    title: "Project Assessment",
    body: "We evaluate your project, its potential impact, and whether developing carbon credits makes practical and commercial sense.",
  },
  {
    title: "Baseline & Impact Assessment",
    body: "We establish the project's starting point and identify the emissions reductions or carbon removals that can potentially be measured.",
  },
  {
    title: "Methodology & Project Design",
    body: "We identify the appropriate carbon methodology and structure the project to meet the relevant requirements.",
  },
  {
    title: "Documentation",
    body: "We prepare and support the required project documents, monitoring plans, records, and supporting evidence.",
  },
  {
    title: "Monitoring, Reporting & Verification",
    body: "We help establish systems to measure and document project performance, creating the evidence required for independent verification.",
  },
  {
    title: "Issuance, Trading & Monetisation",
    body: "From verification and registry issuance to credit trading and offtake, we help turn eligible carbon credits into a market opportunity.",
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
  "Avoided Methane — preventing organic waste from releasing methane through uncontrolled decomposition",
  "Fossil Fuel Replacement — using CBG instead of conventional fossil fuels such as CNG or diesel",
  "Reduced Crop Burning — converting agricultural residue into productive use instead of open-field burning",
  "Carbon Sequestration — capturing and storing carbon through well-designed agroforestry projects",
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
        lede={
          <>
            Every project has the potential to do more than reduce emissions.
            With the right approach, measurable environmental impact can become a
            valuable carbon asset.
            <span className="mt-4 block">
              At Anantaa Green Energy, we identify opportunities where projects
              can avoid emissions, reduce fossil fuel use, or capture carbon —
              and help turn that impact into verified carbon credits.
            </span>
          </>
        }
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
            From carbon potential
            <br />
            to market-ready credits.
          </>
        }
        intro="Creating carbon credits requires more than identifying an emission reduction. We support the complete journey — from understanding whether a project qualifies to getting credits issued and finding the right market opportunity."
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
                Different markets.
                <br />
                Different buyers.
                <br />
                One thing matters: credibility.
              </h2>
            </div>
            <div className="prose-dark lg:col-span-7" data-reveal>
              <p>
                <strong>Voluntary Carbon Market</strong> — independent standards
                such as Verra&apos;s VCS and Gold Standard support projects that
                generate credits for organisations looking to address their
                emissions and sustainability goals. Credit value can vary based
                on the project, quality, vintage, verification, and market
                demand.
              </p>
              <p>
                <strong>India&apos;s Compliance Market</strong> — India is
                developing its domestic carbon market through the Carbon Credit
                Trading Scheme (CCTS). As this market evolves, eligible projects
                can potentially participate in a regulated system with defined
                participants, methodologies, and trading mechanisms.
              </p>
              <p>
                <strong>Our Approach</strong> — we assess each project against
                the applicable standards and market requirements and identify the
                most suitable route. Where a project can serve more than one
                market, we help preserve that flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OtherServices current="carbon-credits" />
      <CtaBand
        eyebrow="Unlock carbon value"
        title={"Your project could be worth\nmore than you think."}
        body="Tell us about your project, and we'll explore where its environmental impact could translate into measurable carbon value."
      />
    </>
  );
}
