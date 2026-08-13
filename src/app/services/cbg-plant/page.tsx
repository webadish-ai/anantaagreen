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
  "Agricultural Residues",
  "Press Mud",
  "Napier Grass & Energy Crops",
  "Cattle Dung & Poultry Litter",
  "Food & Market Waste",
  "Municipal Organic Waste",
];

/**
 * Short orientation for the service page. The stage-by-stage process, the
 * digester comparison and the full equipment list live on the dedicated
 * technology page so they are documented in exactly one place.
 */
const technologyHighlights = [
  {
    label: "Digestion",
    title: "CSTR or Plug Flow",
    body: "The digester is selected against the feedstock — a continuously stirred tank for wet, pumpable material, or a plug flow reactor for higher-solids and fibrous material that a CSTR cannot pump or stir efficiently.",
  },
  {
    label: "Cleaning & upgrading",
    title: "H₂S removal to CBG",
    body: "Desulphurisation protects everything downstream, then CO₂ is separated by water scrubbing, pressure swing adsorption or membranes before the gas is compressed for cascade filling or grid injection.",
  },
];

const outputs = [
  {
    label: "Primary product",
    value: "Compressed Bio-Gas",
    note: "Clean, upgraded renewable gas produced from organic feedstock and supplied for CNG-equivalent applications or eligible gas-grid injection.",
  },
  {
    label: "Co-product",
    value: "Organic Fertiliser",
    note: "The nutrient-rich material left after biogas production can be processed into FOM and LFOM, creating useful organic fertiliser for agricultural use.",
  },
  {
    label: "Co-product",
    value: "Carbon Credits",
    note: "Eligible projects can convert verified emission reductions into carbon credits, creating an additional opportunity to monetise environmental impact.",
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
            From feedstock to fuel.{" "}
            <span className="flame-text">One partner.</span>
          </>
        }
        lede="From feedstock assessment and technology selection to EPC, commissioning and operations, we take projects from concept to commercially viable production."
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
          Agricultural residues, press mud, Napier grass, cattle dung, food waste
          and other organic materials can become more than waste — they can
          become a source of renewable gas.
        </p>
        <p>
          Through anaerobic digestion, organic matter is converted into biogas.
          That gas is then cleaned, upgraded, and compressed to produce
          Compressed Bio-Gas with methane content suitable for CNG-equivalent
          applications.
        </p>
        <p>
          But technology is only one part of the equation.{" "}
          <strong>The real question is: does the feedstock work?</strong>
        </p>
        <p>
          A commercially viable CBG plant depends on reliable volumes, consistent
          quality, seasonal availability, sensible transport distances, and a
          secure offtake strategy. That&apos;s where we begin.
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
                Technology &amp;
                <br />
                equipment.
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

          <div className="mt-14 grid gap-px sm:grid-cols-2">
            {technologyHighlights.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={
                  { "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties
                }
                className="border-cream-50/12 bg-forest-850/50 rounded-2xl border p-7 lg:p-8"
              >
                <p className="eyebrow text-flame-400">{item.label}</p>
                <h3 className="display text-cream-50 mt-5 text-2xl">
                  {item.title}
                </h3>
                <p className="text-cream-50/60 mt-4 text-[0.95rem] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14" data-reveal>
            <ArrowLink href="/services/cbg-plant/technology">
              See the full process, digesters and core equipment
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
        body="Tell us what you have — type, quantity, location, and availability. We'll help you understand its potential, the right plant size and technology, and whether a CBG project makes commercial sense."
      />
    </>
  );
}
