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
  title: "Agroforestry",
  description:
    "Agroforestry programmes by Anantaa Green Energy — species selection, farmer aggregation and plantation design to strengthen biodiversity and CBG biomass supply.",
  path: "/services/agro-forestry",
  keywords: ["agroforestry India", "plantation programme Gujarat", "biomass supply chain"],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agroforestry Programme Development",
  name: "Agroforestry",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IN",
  url: `${site.url}/services/agro-forestry`,
  description:
    "Land and soil assessment, species selection, plantation design and farmer aggregation for agroforestry programmes that strengthen biomass supply.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    { "@type": "ListItem", position: 3, name: "Agroforestry", item: `${site.url}/services/agro-forestry` },
  ],
};

const scope = [
  {
    title: "Land, Soil & Water Assessment",
    body: "We understand the land before planting — soil, water availability, climate, rainfall, and existing land conditions.",
  },
  {
    title: "Right Species, Right Land",
    body: "We select species based on the land's potential, the client's objectives, market opportunity, and the intended use of the biomass.",
  },
  {
    title: "Plantation Planning",
    body: "We create practical plantation layouts — dedicated blocks, boundary plantations, or mixed cultivation — designed to make the best use of available land.",
  },
  {
    title: "Farmer Partnerships",
    body: "Where farmer participation is part of the model, we help build grower networks with clear terms, support, and structured procurement arrangements.",
  },
  {
    title: "Harvest & Supply Planning",
    body: "Plantation and harvesting cycles are planned to create a steady and reliable supply instead of depending on one large seasonal harvest.",
  },
  {
    title: "Biomass Integration",
    body: "Where plantations are aligned with downstream applications, we ensure a direct and dependable flow of biomass from field to end use.",
  },
];

const plantationCategories = [
  {
    title: "Commercial Fruits",
    species: [
      "Mango, Pomegranate",
      "Guava, Citrus, Dates",
      "Custard Apple, Dragon Fruit",
      "Banana, Coconut",
      "Apple Ber, Chikoo",
    ],
  },
  {
    title: "Long-Term Timber",
    species: [
      "Teak",
      "Sandalwood",
      "Shisham",
      "Eucalyptus",
      "Desi Babool, Mahuda",
    ],
  },
  {
    title: "Medicinal & Herbal Plants",
    species: [
      "Ashwagandha, Aloe Vera",
      "Shatavari",
      "Drumstick (Saragvo), Amla",
      "Ardusa, Khair",
      "Arjun, Bael, Kanchan",
    ],
  },
  {
    title: "Protected & Greenhouse Crops",
    species: [
      "Exotic Vegetables",
      "Specialty Flowers",
      "Premium Fruits",
      "Medicinal Herbs",
      "Exotic Mushrooms",
    ],
  },
  {
    title: "Biodiversity & Green Cover",
    species: ["Neem", "Peepal", "Banyan", "Bamboo", "Ashoka"],
  },
];

const benefits = [
  {
    index: "01",
    title: "Reliable feedstock",
    body: "Purpose-grown biomass creates a more dependable supply for CBG projects, reducing reliance on unpredictable seasonal residue markets.",
  },
  {
    index: "02",
    title: "Productive land",
    body: "Suitable marginal or underutilised land can be brought into productive use through carefully selected plantation programmes.",
  },
  {
    index: "03",
    title: "Additional farmer income",
    body: "Farmers can create an additional income stream through biomass, fruit, timber, or other plantation outputs — depending on the model.",
  },
  {
    index: "04",
    title: "Environmental value",
    body: "Well-planned plantations can support soil health, biodiversity, water retention, and carbon sequestration, creating environmental value alongside economic returns.",
  },
];

export default function AgroForestryPage() {
  return (
    <>
      <script {...jsonLdScriptProps(serviceJsonLd)} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
      <PageHero
        eyebrow="Service 03 — Land & Biomass"
        title={
          <>
            Agroforestry that{" "}
            <span className="flame-text">grows more than trees.</span>
          </>
        }
        lede="We develop integrated agroforestry programmes that bring together productive land, stronger ecosystems, farmer opportunities, and reliable biomass supply — creating value today while building a sustainable resource for tomorrow."
      >
        <ButtonLink href="/contact">Discuss a Plantation Programme</ButtonLink>
      </PageHero>

      <CreamFeature
        eyebrow="What it is"
        heading={
          <>
            More than a plantation.
            <br />
            A sustainable resource system.
          </>
        }
      >
        <p>
          Agroforestry brings trees, crops, and productive plants together in a
          way that makes land work harder — while improving the health of the
          land around it.
        </p>
        <p>
          <strong>
            For us, agroforestry is also the starting point of a stronger biomass
            supply chain.
          </strong>{" "}
          By developing planned plantations, we can create a more reliable source
          of biomass for CBG projects while giving farmers an additional
          opportunity to generate long-term income.
        </p>
        <p>
          Where the land and the client&apos;s goals call for it, the same
          design discipline extends beyond feedstock species — to commercial
          fruit, long-term timber and medicinal plantings that diversify what
          a hectare can earn.
        </p>
      </CreamFeature>

      {/* Plantation diversity */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Sustainable Growth Model</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                One land.
                <br />
                Multiple possibilities.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Every piece of land is different. Instead of following a
                one-size-fits-all plantation model, we design the mix around
                soil, climate, water availability, land use, market demand, and
                the owner&apos;s goals.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {plantationCategories.map((cat, i) => (
              <div
                key={cat.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 5) * 80}ms` } as React.CSSProperties}
                className="border-cream-50/12 border-t pt-6"
              >
                <h3 className="display text-cream-50 text-xl">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.species.map((s) => (
                    <li
                      key={s}
                      className="text-cream-50/60 flex gap-2.5 text-[0.88rem] leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="bg-flame-500 mt-1.5 h-[5px] w-[5px] shrink-0 rotate-45"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-cream-50/12 mt-16 border-t pt-10"
            data-reveal
          >
            <h3 className="display text-cream-50 max-w-2xl text-2xl lg:text-3xl">
              Designed around your land. Built around your goals.
            </h3>
            <p className="text-cream-50/65 mt-5 max-w-3xl leading-relaxed">
              Whether the objective is biomass, farm income, timber, fruit
              production, carbon sequestration, biodiversity, or a combination of
              these, we help create a plantation strategy that makes the most of
              every acre.
            </p>
          </div>
        </div>
      </section>

      <ScopeGrid
        eyebrow="Scope of Work"
        heading={
          <>
            From land assessment to
            <br />
            reliable biomass supply.
          </>
        }
        intro="We don't simply plant trees. We design complete plantation programmes around the land, the people who cultivate it, and the long-term purpose of the plantation."
        items={scope}
      />

      {/* Benefits */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <p
              className="eyebrow text-ink-500 flex items-center gap-3"
              data-reveal
            >
              <span
                aria-hidden
                className="from-flame-500 to-flame-400 inline-block h-[7px] w-[7px] rotate-45 bg-linear-to-br"
              />
              Why it pays twice
            </p>
            <h2
              className="display text-ink-900 mt-6 text-4xl sm:text-5xl lg:text-[3.6rem]"
              data-reveal
            >
              One programme.
              <br />
              Multiple returns.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-12">
            {benefits.map((b, i) => (
              <div
                key={b.index}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-ink-900/12 border-t pt-7"
              >
                <span className="text-flame-600 font-mono text-xs tracking-[0.2em]">
                  {b.index}
                </span>
                <h3 className="display text-ink-900 mt-4 text-2xl lg:text-3xl">
                  {b.title}
                </h3>
                <p className="text-ink-700 mt-4 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherServices current="agro-forestry" />
      <CtaBand
        eyebrow="Agroforestry enquiry"
        title={"Have land? Have farmers?\nLet's grow something valuable."}
        body="Whether you have land to develop, farmers looking for a reliable market, or simply an idea for a plantation programme, let's explore what the opportunity could look like. We'll help you identify what can grow, how it can be developed, and where the output can create value."
      />
    </>
  );
}
