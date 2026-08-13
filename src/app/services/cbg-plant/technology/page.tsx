import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { ArrowLink, Eyebrow, Grain, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { jsonLdScriptProps } from "@/lib/json-ld";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "CBG Technology",
  description:
    "The CBG process explained — anaerobic digestion in CSTR or plug flow digesters, biogas cleaning and upgrading, through to compression, storage and dispatch.",
  path: "/services/cbg-plant/technology",
  keywords: ["CBG process technology", "CSTR digester", "plug flow digester", "biogas upgrading"],
});

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "CBG Plant",
      item: `${site.url}/services/cbg-plant`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "CBG Technology",
      item: `${site.url}/services/cbg-plant/technology`,
    },
  ],
};

const stages = [
  {
    index: "01",
    title: "Feedstock Preparation",
    body: "The process starts by preparing the incoming biomass — removing unwanted material, reducing its size, and creating the right mix for efficient digestion.",
    spec: "The goal: give the plant a consistent, high-quality feed",
  },
  {
    index: "02",
    title: "Anaerobic Digestion",
    body: "Prepared biomass enters the digester, where naturally occurring microorganisms break it down without oxygen and produce biogas.",
    spec: "The goal: maximise biogas production while keeping the process stable",
  },
  {
    index: "03",
    title: "Biogas Cleaning",
    body: "Raw biogas contains impurities such as hydrogen sulphide. These are removed to protect the equipment and prepare the gas for upgrading.",
    spec: "The goal: clean the gas before it moves further through the plant",
  },
  {
    index: "04",
    title: "Gas Drying & Conditioning",
    body: "Moisture is removed from the gas to protect downstream equipment and improve the quality and reliability of the final product.",
    spec: "The goal: deliver clean, dry gas ready for upgrading",
  },
  {
    index: "05",
    title: "Gas Upgrading",
    body: "Carbon dioxide is separated from the biogas, increasing the methane concentration and converting raw biogas into Compressed Bio-Gas suitable for CNG-equivalent applications.",
    spec: "The goal: produce high-quality renewable gas",
  },
  {
    index: "06",
    title: "Compression, Storage & Dispatch",
    body: "The upgraded gas is compressed and stored for transportation, cascade filling, or suitable gas-grid applications. The remaining digestate can be processed into organic fertiliser.",
    spec: "Cascade filling at approximately 200–250 bar",
  },
];

const digesterTypes = [
  {
    name: "CSTR Digester",
    tagline: "For wet and pumpable feedstock.",
    principle:
      "A continuously stirred system keeps the feedstock mixed and consistent, allowing microorganisms to work efficiently throughout the digester.",
    bestFor: [
      "Press mud & spent wash",
      "Food & market waste",
      "Cattle dung",
      "Other liquid or mixed organic feedstocks",
    ],
  },
  {
    name: "Plug Flow Digester",
    tagline: "For higher-solids and fibrous feedstock.",
    principle:
      "A plug flow system moves the material gradually through the digester, making it suitable for feedstocks that are too dry, fibrous, or difficult to mix in a conventional stirred tank.",
    bestFor: [
      "Agricultural residues",
      "Crop waste",
      "Napier grass & energy crops",
      "Suitable segregated organic waste",
    ],
  },
];

const equipment = [
  {
    title: "Digesters",
    tagline: "The heart of the plant.",
    body: "CSTR or Plug Flow digesters are selected based on the feedstock, plant capacity, and operating requirements.",
  },
  {
    title: "Biogas Cleaning",
    tagline: "Protecting the system.",
    body: "H₂S removal systems clean the raw biogas and protect compressors, upgrading equipment, and other downstream systems.",
  },
  {
    title: "Gas Holder & Flare",
    tagline: "Keeping production stable and safe.",
    body: "Gas storage provides a buffer between production and upgrading, while the flare safely handles excess gas when required.",
  },
  {
    title: "Gas Upgrading",
    tagline: "Turning biogas into CBG.",
    body: "Water scrubbers, PSA, membrane systems, or other suitable technologies separate unwanted gases and increase methane concentration.",
  },
  {
    title: "Compression & Storage",
    tagline: "Ready for the market.",
    body: "The upgraded gas is compressed and stored in high-pressure cascades for transportation, dispensing, or suitable gas-grid applications.",
  },
  {
    title: "Digestate Management",
    tagline: "Nothing valuable goes to waste.",
    body: "The remaining digestate can be separated, processed, dried, and converted into organic fertiliser products such as FOM and LFOM.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
      <PageHero
        eyebrow="CBG Plant — Process Technology"
        title={
          <>
            From waste to clean fuel —{" "}
            <span className="flame-text">six steps that make it work.</span>
          </>
        }
        lede="The journey from waste to clean fuel happens in stages. Get one wrong, and the entire plant feels it."
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
                The feedstock decides
                <br />
                the technology.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Not every feedstock behaves the same way. That&apos;s why we
                don&apos;t force every project into the same digester design. We
                select the system based on what you have, how it behaves, and
                what the plant needs to achieve.
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
                <p className="text-flame-400 mt-3 text-[0.95rem] leading-relaxed">
                  {d.tagline}
                </p>
                <p className="text-cream-50/65 mt-3 text-[0.95rem] leading-relaxed">
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
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-cream-50 mt-4 text-xl lg:text-2xl">
                  {e.title}
                </h3>
                <p className="text-flame-400/80 mt-3 text-[0.97rem] leading-relaxed">
                  {e.tagline}
                </p>
                <p className="text-cream-50/60 mt-2 text-[0.97rem] leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-900 border-cream-50/8 border-t">
        <div className="shell py-16 lg:py-20">
          <Eyebrow>Continue</Eyebrow>
          <div className="mt-8" data-reveal>
            <ArrowLink href="/services/cbg-plant">
              Back to CBG Plant — scope, delivery and outputs
            </ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Technical enquiry"
        title={"Let's find the right technology\nfor your feedstock."}
        body="Share your feedstock type, approximate quantity, and location with us. We'll help you explore the suitable process, technology, and plant configuration for your project."
      />
    </>
  );
}
