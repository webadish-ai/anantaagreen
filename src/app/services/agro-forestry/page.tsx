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
    body: "Understanding what a parcel can actually carry — soil profile, rainfall, irrigation access and degradation history — before any species is committed to.",
  },
  {
    title: "Species Selection",
    body: "Matching fast-rotation biomass species to site conditions, farmer economics and the calorific and moisture profile the plant needs.",
  },
  {
    title: "Plantation Design",
    body: "Block, boundary or intercropped layouts that raise biomass yield without displacing the food crop the land already supports.",
  },
  {
    title: "Farmer Aggregation",
    body: "Building the grower network — contract farming terms, buy-back assurance and extension support that make participation worth a farmer's risk.",
  },
  {
    title: "Harvest Cycle Planning",
    body: "Staggering rotations across the catchment so biomass arrives continuously rather than in a glut the plant cannot store.",
  },
  {
    title: "Feedstock Integration",
    body: "Linking plantation output directly to digester demand, closing the loop between the land and the plant it supplies.",
  },
];

const species = [
  "Bajra Napier hybrid — high-yield fodder and energy grass",
  "Bamboo — fast rotation, strong root binding on marginal land",
  "Subabul (Leucaena) — nitrogen fixing, coppices readily",
  "Melia dubia — rapid growth, timber and biomass dual value",
  "Casuarina — tolerant of poor and coastal soils",
];

const plantationCategories = [
  {
    title: "Commercial Fruits",
    species: [
      "Mango, Pomegranate",
      "Guava, Citrus, Date",
      "Custard Apple, Dragon Fruit",
      "Banana, Coconut",
      "Apple Ber, Chiku",
    ],
  },
  {
    title: "Long-Term Timber",
    species: [
      "Teakwood (Sagwan)",
      "Red & White Sandalwood",
      "Shisham (Rosewood)",
      "Nilgiri (Eucalyptus)",
      "Desi Babool, Mahuda",
    ],
  },
  {
    title: "Medicinal Plants",
    species: [
      "Ashwagandha, Aloe Vera",
      "Shatavari, Saragvo",
      "Amla, Ardusa, Khadir",
      "Arjuna, Bael, Kanchnar",
    ],
  },
  {
    title: "Greenhouse Crops",
    species: [
      "Exotic vegetables",
      "Specialty flowers",
      "Premium fruits",
      "Medicinal herbs",
      "Exotic mushrooms",
    ],
  },
  {
    title: "Oxygen Producers",
    species: [
      "Neem (Azadirachta)",
      "Peepal (sacred fig)",
      "Banyan",
      "Bamboo varieties",
      "Ashoka tree",
    ],
  },
];

const benefits = [
  {
    index: "01",
    title: "Feedstock security",
    body: "A plant dependent on spot-market residue is a plant exposed to every price spike and bad season. Dedicated plantation acreage converts that exposure into a contracted supply base.",
  },
  {
    index: "02",
    title: "Land brought back",
    body: "Degraded and marginal land that will not carry a reliable food crop can carry biomass — putting idle acreage into productive use without competing for prime farmland.",
  },
  {
    index: "03",
    title: "Income the farmer keeps",
    body: "Trees and energy grasses provide a second income stream on the same holding, on a different calendar to the main crop, with assured offtake behind it.",
  },
  {
    index: "04",
    title: "Biodiversity and carbon",
    body: "Mixed plantation improves soil structure, water retention and habitat, while standing biomass and soil carbon build a sequestration case that supports the carbon programme.",
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
            Agroforestry,{" "}
            <span className="flame-text">
              where the supply chain starts.
            </span>
          </>
        }
        lede="Developing agroforestry programmes that support biodiversity, farmer livelihoods and more resilient biomass supply for CBG projects."
      >
        <ButtonLink href="/contact">Discuss a Plantation Programme</ButtonLink>
      </PageHero>

      <CreamFeature
        eyebrow="What it is"
        heading={
          <>
            Trees and crops on
            <br />
            the same hectare.
          </>
        }
        aside={{ label: "Fast-rotation feedstock species", items: species }}
      >
        <p>
          Agro forestry means deliberately growing woody perennials alongside
          agriculture — as boundary rows, intercropped blocks or dedicated stands
          on land that food crops cannot use reliably.
        </p>
        <p>
          <strong>
            For a bio-energy company it is not a side programme, it is upstream
            infrastructure.
          </strong>{" "}
          A digester needs a predictable tonnage arriving every week at a
          predictable moisture content. Agricultural residue alone is seasonal and
          contested. Planted biomass is the part of the supply curve you can
          actually control.
        </p>
        <p>
          The environmental case and the commercial case point the same
          direction here, which is rare enough to be worth building a business
          around: more standing biomass, more soil carbon, better water
          retention, more resilient farmer income — and a plant that runs.
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
                Plantation
                <br />
                diversity.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                A plantation programme designed around a single species is a
                monoculture with a different name. We mix categories against
                what the site and the client&apos;s goals actually call for.
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
        </div>
      </section>

      <ScopeGrid
        eyebrow="Scope of Work"
        heading={
          <>
            From soil survey
            <br />
            to standing crop.
          </>
        }
        intro="Plantation programmes fail on agronomy and on trust. We work on both — the right species for the site, and terms a farmer can afford to believe in."
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
              One programme,
              <br />
              four returns.
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
        eyebrow="Agro forestry enquiry"
        title={"Have land, or\nhave farmers?"}
        body="Whether you hold acreage looking for a use or a grower network looking for assured offtake, the conversation starts the same way — what will grow there, and who buys it."
      />
    </>
  );
}
