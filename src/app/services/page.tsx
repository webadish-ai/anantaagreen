import Link from "next/link";
import { services } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Eyebrow, SectionHeading } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Compressed Bio-Gas plants, carbon-credit origination and agroforestry — Anantaa Green Energy's services from feasibility through EPC delivery and operations.",
  path: "/services",
  keywords: ["CBG plant services", "carbon credit services India", "agroforestry services"],
});

const detail: Record<string, string[]> = {
  "cbg-plant": [
    "Feedstock Assessment & Biomass Planning",
    "Plant Design & Engineering",
    "EPC Execution & Commissioning",
    "Operations, Maintenance (O&M) & Technical Support",
  ],
  "carbon-credits": [
    "Project Eligibility & Carbon Assessment",
    "Methodology, Documentation & MRV Support",
    "Carbon Credit Trading & Market Access",
    "Offtake Strategy & Monetisation",
  ],
  "agro-forestry": [
    "Land, Soil & Water Assessment",
    "Species Selection & Plantation Design",
    "Farmer Partnerships & Aggregation",
    "Biomass Planning & Harvest Management",
  ],
};

const model = [
  {
    title: "EPC",
    body: "From design to commissioning. Engineering, procurement, construction, commissioning, and project delivery through one accountable partner.",
  },
  {
    title: "Project Development",
    body: "Turning opportunities into viable projects. From feasibility and feedstock assessment to project structuring, planning, and development, we help build the foundation for successful projects.",
  },
  {
    title: "Carbon Credit",
    body: "Turning impact into opportunity. Carbon project development, documentation, verification support, credit issuance, trading, and monetisation.",
  },
  {
    title: "Operations",
    body: "We don't just hand over the keys. Long-term operations, maintenance, performance management, and technical support to keep projects delivering value.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Services & Specialisations"
        title={
          <>
            Three services.{" "}
            <span className="flame-text">One sustainable vision.</span>
          </>
        }
        lede="We help develop the plant, design the evidence for eligible carbon projects, and strengthen the biomass supply chain. Each capability can stand alone — together they help close the loop."
      />

      {/* Alternating service rows */}
      <section className="bg-forest-950 relative overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative py-8 lg:py-12">
          {services.map((service) => (
            <div
              key={service.slug}
              data-reveal
              className="border-cream-50/12 grid gap-8 border-b py-16 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              <div className="lg:col-span-5">
                <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                  {service.index}
                </span>
                <h2 className="display text-cream-50 mt-5 text-4xl lg:text-6xl">
                  {service.title}
                </h2>
                <p className="eyebrow text-cream-50/40 mt-4">{service.short}</p>
              </div>

              <div className="lg:col-span-4">
                <p className="text-cream-50/70 text-lg leading-relaxed">
                  {service.summary}
                </p>
                <Link
                  href={service.href}
                  className="eyebrow text-flame-400 group mt-7 inline-flex items-center gap-3"
                >
                  <span className="relative">
                    Full detail
                    <span
                      aria-hidden
                      className="bg-flame-500 absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                    />
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <ul className="lg:col-span-3">
                {detail[service.slug].map((item, j) => (
                  <li
                    key={item}
                    className={`text-cream-50/55 flex gap-3 py-3 text-[0.92rem] leading-relaxed ${
                      j > 0 ? "border-cream-50/10 border-t" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="bg-flame-500 mt-2 h-[5px] w-[5px] shrink-0 rotate-45"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Business model strip */}
      <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div data-reveal>
              <Eyebrow tone="light">How we are engaged</Eyebrow>
            </div>
            <SectionHeading tone="light" className="mt-6" data-reveal>
              Four ways to work
              <br />
              with us.
            </SectionHeading>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {model.map((m, i) => (
              <div
                key={m.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="border-ink-900/12 border-t pt-6"
              >
                <h3 className="display text-ink-900 text-2xl">{m.title}</h3>
                <p className="text-ink-700 mt-3 text-[0.95rem] leading-relaxed">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Scoping"
        title={"Which of the three\ndo you need first?"}
        body="Most conversations start with one capability and end up using two. Tell us where you are and we will tell you honestly what the sequence should be."
      />
    </>
  );
}
