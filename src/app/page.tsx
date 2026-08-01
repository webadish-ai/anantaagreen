import Link from "next/link";
import type { Metadata } from "next";
import { services, site } from "@/lib/site";
import {
  AnantaaMark,
  ArrowLink,
  ButtonLink,
  Eyebrow,
  Grain,
  SectionHeading,
  TickRule,
} from "@/components/ui";
import { ProcessSpine } from "@/components/process-spine";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const scope = [
  "Compressed Bio-Gas",
  "Carbon Credits",
  "Agroforestry",
  "EPC Delivery",
  "Feasibility & Consulting",
  "Plant Operations",
];

const marketFacts = [
  {
    figure: "5,000",
    unit: "plants by 2023",
    label: "SATAT target",
    note: "The Sustainable Alternative Towards Affordable Transportation programme set an original national ambition of 5,000 CBG plants. The wider build-out remains a long-term opportunity.",
  },
  {
    figure: "5%",
    unit: "by FY2028-29",
    label: "CBG Blending Obligation",
    note: "A phased blending mandate for CNG and PNG converts bio-gas from an option into a regulated requirement for city gas distributors.",
  },
  {
    figure: "2070",
    unit: "net zero",
    label: "National commitment",
    note: "India's net-zero pledge underwrites decades of demand for verified carbon reductions and displaced fossil fuel.",
  },
];

const differentiators = [
  {
    index: "01",
    title: "Built to scale, not to demo",
    body: "Every project is designed as a repeatable unit. Feedstock catchment, process configuration and offtake are specified so the second plant is faster and cheaper than the first.",
  },
  {
    index: "02",
    title: "Positioned in high-growth sectors",
    body: "Bioenergy, carbon markets and agroforestry sit where policy, capital and demand meet in India. We are building our capabilities around projects where those three conditions overlap.",
  },
  {
    index: "03",
    title: "Value, modelled honestly",
    body: "We want projects that can create long-term value while contributing positively to the environment and society. Returns and impact should be modelled together, with assumptions visible.",
  },
  {
    index: "04",
    title: "A model built to diversify",
    body: "EPC services, consulting, eligible carbon projects and—over time—direct project operations. The aim is to build complementary revenue streams as the business and project pipeline mature.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================================================== HERO */}
      <section className="bg-forest-950 grain relative flex min-h-[92svh] items-end overflow-hidden">
        <Grain />
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden />

        {/* Flame-lit horizon behind the mark */}
        <div
          className="animate-breathe absolute -top-32 -right-20 h-[46rem] w-[46rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(36,142,68,0.85) 0%, rgba(6,19,9,0) 70%)",
          }}
          aria-hidden
        />
        <div
          className="absolute right-[8%] bottom-[-14rem] h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(243,118,33,0.45) 0%, rgba(6,19,9,0) 70%)",
          }}
          aria-hidden
        />
        <AnantaaMark
          gradientId="hero-mark"
          className="pointer-events-none absolute -top-10 -right-28 w-[30rem] opacity-[0.07] lg:right-[4%] lg:w-[42rem]"
        />

        <div className="shell relative w-full pt-40 pb-16 lg:pt-52 lg:pb-24">
          <div data-reveal>
            <Eyebrow>
              Ahmedabad · India — CBG · Carbon Credits · Agroforestry
            </Eyebrow>
          </div>

          <h1
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="display text-cream-50 mt-8 max-w-5xl text-[2.75rem] sm:text-6xl lg:text-[5.25rem]"
          >
            The energy is already in the field.{" "}
            <span className="flame-text">
              We build the plant that unlocks it.
            </span>
          </h1>

          <div
            data-reveal
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end"
          >
            <p className="text-cream-50/70 max-w-xl text-lg leading-relaxed lg:col-span-6 lg:text-xl">
              Anantaa Green Energy develops Compressed Bio-Gas plants, carbon-credit
              projects and agroforestry programmes — practical infrastructure
              designed to create long-term value for project partners, investors
              and the land it sits on.
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:col-span-6 lg:justify-end">
              <ButtonLink href="/services">See What We Do</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Start a Project Conversation
              </ButtonLink>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
            className="mt-16"
          >
            <TickRule />
          </div>
        </div>
      </section>

      {/* ================================================== SCOPE MARQUEE */}
      <section
        className="bg-forest-900 border-cream-50/8 overflow-hidden border-y py-5"
        aria-hidden
      >
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {scope.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="eyebrow text-cream-50/45 flex items-center"
                >
                  <span className="px-8">{item}</span>
                  <span className="from-flame-500 to-flame-400 inline-block h-[6px] w-[6px] rotate-45 bg-linear-to-br" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== CAPABILITIES */}
      <section className="bg-forest-950 relative overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />

        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Core Services &amp; Specialisations</Eyebrow>
              </div>
              <SectionHeading className="mt-6" data-reveal>
                Three capabilities that
                <br />
                compound on each other.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                A plantation feeds a digester. A digester displaces diesel. The
                displacement becomes a credit. Run separately they are three
                businesses; run together they are one system with three revenue
                lines.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={service.href}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                className="group border-cream-50/10 bg-forest-900/40 hover:bg-forest-900 relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 lg:p-10"
              >
                {/* flame wash on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-24 h-48 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(243,118,33,0.35) 0%, rgba(243,118,33,0) 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <span className="text-flame-400 font-mono text-xs tracking-[0.2em]">
                      {service.index}
                    </span>
                    <span className="eyebrow text-cream-50/35">
                      {service.short}
                    </span>
                  </div>
                  <h3 className="display text-cream-50 group-hover:text-flame-400 mt-8 text-3xl transition-colors duration-300 lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-cream-50/60 mt-5 leading-relaxed">
                    {service.summary}
                  </p>
                </div>
                <span className="eyebrow text-cream-50/50 group-hover:text-flame-400 relative mt-10 inline-flex items-center gap-3 transition-colors">
                  Read more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== PROCESS */}
      <ProcessSpine />

      {/* ================================================== MARKET */}
      <section className="bg-forest-900 grain relative overflow-hidden">
        <Grain />
        <div
          className="absolute -bottom-40 -left-32 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(36,142,68,0.9) 0%, rgba(11,34,19,0) 70%)",
          }}
          aria-hidden
        />

        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div data-reveal>
              <Eyebrow>Market Opportunity</Eyebrow>
            </div>
            <SectionHeading className="mt-6" data-reveal>
              The policy is written.
              <br />
              The capacity is not built.
            </SectionHeading>
            <div className="prose-dark mt-8 text-lg" data-reveal>
              <p>
                India is creating new demand for renewable gas, biomass, and
                measurable emissions reductions. For a young company, the
                opportunity is not to claim a finished track record; it is to
                build the right project relationships, technical discipline and
                delivery partners from the beginning.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px sm:grid-cols-3">
            {marketFacts.map((fact, i) => (
              <div
                key={fact.label}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                className="border-cream-50/10 bg-forest-850/50 rounded-2xl border p-8"
              >
                <p className="eyebrow text-flame-400">{fact.label}</p>
                <p className="display text-cream-50 mt-6 text-5xl lg:text-6xl">
                  {fact.figure}
                </p>
                <p className="text-cream-50/45 mt-2 font-mono text-[0.72rem] tracking-[0.18em] uppercase">
                  {fact.unit}
                </p>
                <p className="text-cream-50/60 mt-5 text-[0.95rem] leading-relaxed">
                  {fact.note}
                </p>
              </div>
            ))}
          </div>

          <p className="text-cream-50/30 mt-8 font-mono text-[0.7rem] leading-relaxed">
            Figures reflect published Government of India policy targets and are
            included for sector context, not as a representation of company
            performance or a forecast of returns.
          </p>
        </div>
      </section>

      {/* ================================================== WHY US */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div className="blueprint-light absolute inset-0 opacity-70" aria-hidden />

        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow tone="light">Why Anantaa</Eyebrow>
              </div>
              <SectionHeading tone="light" className="mt-6" data-reveal>
                A partner that has to live
                <br />
                with the plant afterwards.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-ink-700 leading-relaxed">
                We are building an engineering-led business around development,
                delivery and long-term operations. As a new company, our priority
                is to earn trust project by project.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-12">
            {differentiators.map((item, i) => (
              <div
                key={item.index}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-ink-900/12 border-t pt-7"
              >
                <span className="text-flame-600 font-mono text-xs tracking-[0.2em]">
                  {item.index}
                </span>
                <h3 className="display text-ink-900 mt-4 text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <p className="text-ink-700 mt-4 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16" data-reveal>
            <ArrowLink href="/investors" tone="light">
              See the business model
            </ArrowLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with what you have"
        title={"Have feedstock, land\nor a project idea?"}
        body="Tell us what you have and where you are in the process. We will help you identify the right next step, even if that step is an early feasibility review."
      />
    </>
  );
}
