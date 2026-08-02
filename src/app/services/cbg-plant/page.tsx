import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  CreamFeature,
  OtherServices,
  ScopeGrid,
} from "@/components/service-sections";
import { ArrowLink, ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { jsonLdScriptProps } from "@/lib/json-ld";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "CBG Plant",
  description:
    "Compressed Bio-Gas plant development by Anantaa Green Energy — feedstock strategy, process design, EPC delivery, commissioning and long-run operations for CBG projects in India.",
  path: "/services/cbg-plant",
  keywords: ["CBG plant manufacturer India", "compressed bio-gas plant EPC", "CBG plant development Gujarat"],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Compressed Bio-Gas (CBG) Plant Development",
  name: "CBG Plant Development",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IN",
  url: `${site.url}/services/cbg-plant`,
  description:
    "Feedstock survey, process design, EPC delivery, commissioning and long-run operations for Compressed Bio-Gas plants.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    { "@type": "ListItem", position: 3, name: "CBG Plant", item: `${site.url}/services/cbg-plant` },
  ],
};

const scope = [
  {
    title: "Feasibility & Feedstock Survey",
    body: "Mapping what is actually available inside a viable haulage radius, season by season, and pricing it honestly before anything is designed.",
  },
  {
    title: "Process Design & Engineering",
    body: "Digester sizing, retention time, loading rate and upgrading route selected against the specific feedstock mix — not a catalogue configuration.",
  },
  {
    title: "Licensing & Statutory Approvals",
    body: "Consents to establish and operate, explosives and PESO clearances, environmental compliance and the coordination that keeps them on the critical path.",
  },
  {
    title: "Financial Structuring Support",
    body: "Bankable project reports, capex and opex models, subsidy positioning and support through lender technical due diligence.",
  },
  {
    title: "EPC Delivery",
    body: "Civil works, mechanical erection, gas systems, electrical and instrumentation, delivered under a single point of accountability.",
  },
  {
    title: "Commissioning & Operations",
    body: "Digester seeding and stabilisation, performance testing against guarantees, operator training, and ongoing O&M for the assets we run.",
  },
];

const feedstocks = [
  "Agricultural residue — paddy straw, cotton stalk, bagasse",
  "Press mud and spent wash from sugar mills",
  "Napier grass and dedicated energy crops",
  "Cattle dung and poultry litter",
  "Food, market and canteen waste",
  "Segregated organic fraction of municipal solid waste",
];

const plantEquipment = [
  {
    title: "CSTR Digester",
    body: "Continuously stirred tank reactor for liquid and mixed organic feedstock — press mud, spent wash, food and market waste — held at wet solids concentration for uniform digestion.",
  },
  {
    title: "Plug Flow Digester",
    body: "Dry fermentation reactor for high-solids feedstock — agricultural residue and segregated municipal organics — that a CSTR cannot pump or stir efficiently.",
  },
  {
    title: "H₂S Removal System",
    body: "Biological or media-based desulphurisation that strips hydrogen sulphide before it reaches compressors, adsorbents or membranes downstream.",
  },
  {
    title: "Water Scrubber",
    body: "CO₂ upgrading by pressurised water contact — no chemical or adsorbent consumables, tolerant of residual H₂S.",
  },
  {
    title: "PSA Purification Plant",
    body: "Pressure swing adsorption on a carbon molecular sieve, cycling multiple columns for continuous output in a compact footprint.",
  },
  {
    title: "Membrane Biogas Separation",
    body: "Hollow-fibre membrane cascades for modular, low-maintenance CO₂ separation with minimal moving parts.",
  },
  {
    title: "Gas Holder & Flare",
    body: "Buffer storage to decouple production from upgrading, with an enclosed flare for safe disposal during upset or maintenance.",
  },
  {
    title: "Compression & Cascade",
    body: "Multi-stage compression to around 250 bar, filled into a cylinder cascade or metered into a city gas distribution network.",
  },
];

const outputs = [
  {
    label: "Primary product",
    value: "Compressed Bio-Gas",
    note: "Upgraded to above 90% methane and compressed for cylinder cascade or city gas grid injection. Chemically interchangeable with CNG.",
  },
  {
    label: "Co-product",
    value: "Fermented Organic Manure",
    note: "Solid FOM and liquid LFOM, separated and dried on-site — a saleable soil amendment and organic fertiliser that returns nutrients to the same catchment that supplied the feedstock, cutting the farmer's dependence on chemical fertiliser.",
  },
  {
    label: "Co-product",
    value: "Carbon Credits",
    note: "Avoided methane release and displaced fossil fuel, quantified and verified into tradable instruments.",
  },
];

export default function CbgPlantPage() {
  return (
    <>
      <script {...jsonLdScriptProps(serviceJsonLd)} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
      <PageHero
        eyebrow="Service 01 — Compressed Bio-Gas"
        title={
          <>
            CBG Plants,{" "}
            <span className="flame-text">designed around the feedstock.</span>
          </>
        }
        lede="Developing scalable Compressed Bio-Gas facilities for sustainability — from the first feedstock survey through to a plant running at nameplate with people trained to keep it there."
      >
        <ButtonLink href="/contact">Discuss a CBG Project</ButtonLink>
      </PageHero>

      <CreamFeature
        eyebrow="What it is"
        heading={
          <>
            Biogas becomes a fuel
            <br />
            when you take the CO₂ out.
          </>
        }
        aside={{ label: "Feedstocks we work with", items: feedstocks }}
      >
        <p>
          Organic matter breaking down without oxygen produces biogas — roughly
          55–65% methane, the rest largely carbon dioxide. That raw gas will burn,
          but it will not move a truck and it cannot enter a pipeline.
        </p>
        <p>
          <strong>
            Compressed Bio-Gas is what you get after that gas is cleaned and
            upgraded.
          </strong>{" "}
          Hydrogen sulphide and moisture are stripped out, the CO₂ is separated by
          water scrubbing, pressure swing adsorption or membranes, and the
          resulting stream — above 90% methane — is compressed to around 250 bar.
        </p>
        <p>
          At that point it is functionally CNG, made from residue that was
          otherwise burned in a field or left to rot. That is the whole
          proposition, and it only works if the feedstock behind it is real,
          contracted and close enough to haul.
        </p>
      </CreamFeature>

      <ScopeGrid
        eyebrow="Scope of Work"
        heading={
          <>
            Concept to commissioning,
            <br />
            and then the years after.
          </>
        }
        intro="Anyone can supply equipment. The difficult part is the sequence — approvals that gate construction, feedstock contracts that gate financing, and a design that has to survive both."
        items={scope}
      />

      {/* Equipment & technology */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>What&apos;s in the plant</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                Equipment &amp;
                <br />
                technology.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Every CBG plant we deliver is built from the same set of
                systems — the choices are which digester and which upgrading
                route fit the feedstock, not whether the system exists.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {plantEquipment.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 4) * 90}ms` } as React.CSSProperties
                }
                className="border-cream-50/12 border-t pt-6"
              >
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-cream-50 mt-4 text-xl">
                  {item.title}
                </h3>
                <p className="text-cream-50/60 mt-3 text-[0.92rem] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14" data-reveal>
            <ArrowLink href="/technology">
              How the whole process line fits together
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <p className="eyebrow text-ink-500 flex items-center gap-3" data-reveal>
            <span
              aria-hidden
              className="from-flame-500 to-flame-400 inline-block h-[7px] w-[7px] rotate-45 bg-linear-to-br"
            />
            Three revenue lines out of one plant
          </p>

          <div className="mt-12 space-y-0">
            {outputs.map((o, i) => (
              <div
                key={o.value}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-ink-900/12 grid gap-6 border-t py-9 lg:grid-cols-12 lg:gap-12"
              >
                <p className="eyebrow text-flame-600 lg:col-span-3">{o.label}</p>
                <h3 className="display text-ink-900 text-3xl lg:col-span-4 lg:text-4xl">
                  {o.value}
                </h3>
                <p className="text-ink-700 leading-relaxed lg:col-span-5">
                  {o.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherServices current="cbg-plant" />
      <CtaBand
        eyebrow="CBG enquiry"
        title={"Have feedstock?\nStart there."}
        body="Send us what you have — tonnage, type, seasonality and location. That single input decides plant size, technology route and whether the project is worth building at all."
      />
    </>
  );
}
