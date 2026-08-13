import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CreamFeature } from "@/components/service-sections";
import { AnantaaMark, Eyebrow, Grain, SectionHeading } from "@/components/ui";
import { contact, leadership, telHref } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
}

export const metadata = pageMetadata({
  title: "About",
  description:
    "Anantaa Green Energy LLP is an Ahmedabad-based green energy company developing CBG plants, carbon-credit projects and agroforestry programmes across India.",
  path: "/about",
  keywords: ["about Anantaa Green Energy", "green energy company Ahmedabad", "CBG company India"],
});

const principles = [
  {
    index: "01",
    title: "Built for tomorrow, not just today",
    body: "Every project is designed to deliver long-term value, with solutions that are scalable, repeatable, and ready to grow with changing energy needs.",
  },
  {
    index: "02",
    title: "Sustainability comes first",
    body: "We believe clean energy should never come at the cost of the environment. Responsible development is the foundation of every project we undertake.",
  },
  {
    index: "03",
    title: "Trust through transparency",
    body: "We value honest conversations over unrealistic promises. Every recommendation is backed by clear analysis, practical planning, and measurable outcomes.",
  },
  {
    index: "04",
    title: "Partners beyond the project",
    body: "Our commitment doesn't end with delivery. We work alongside our clients to ensure every project continues to perform, evolve, and create value for years to come.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Anantaa Green Energy"
        title={
          <>
            Creating value through{" "}
            <span className="flame-text">sustainable innovation.</span>
          </>
        }
        lede="We are committed to developing scalable renewable energy solutions that accelerate India's transition to a low-carbon economy through CBG Plants, Agroforestry, and Carbon Credit initiatives."
      />

      <CreamFeature
        eyebrow="Who we are"
        heading={
          <>
            We build energy
            <br />
            infrastructure that
            <br />
            has to pay for itself.
          </>
        }
        aside={{
          label: "At a glance",
          items: [
            "Green Energy & Sustainability Solutions",
            "Ahmedabad, Gujarat, India",
            "Compressed Bio-Gas (CBG) Projects",
            "Carbon Credit Development",
            "Agroforestry & Biomass Supply",
            "EPC, Consulting & Project Development",
          ],
        }}
      >
        <p>
          At Anantaa Green Energy, we believe sustainability is more than an
          environmental responsibility — it&apos;s an opportunity to create
          lasting value. We develop integrated solutions across Compressed
          Bio-Gas (CBG) Plants, Agroforestry, and Carbon Credits, helping
          transform natural resources into clean energy, environmental impact,
          and sustainable growth.
        </p>
        <p>
          <strong>Every project begins with one principle: build what lasts.</strong>{" "}
          From responsible feedstock planning and efficient project development
          to measurable carbon reductions, we focus on solutions that are
          practical, scalable, and designed for long-term success.
        </p>
        <p>
          As India accelerates its clean energy transition, we are committed to
          delivering projects that support businesses, empower communities, and
          contribute to a low-carbon future. By combining innovation, technical
          expertise, and strategic partnerships, we aim to build infrastructure
          that creates value for generations — not just for today.
        </p>
        <p>
          Anantaa is still early in its journey. We are focused on building the
          first partnerships carefully, documenting our assumptions clearly and
          assembling the technical and delivery capability needed to grow
          responsibly.
        </p>
      </CreamFeature>

      {/* Vision & Mission */}
      <section className="bg-forest-950 grain relative overflow-hidden">
        <Grain />
        <div className="blueprint absolute inset-0 opacity-50" aria-hidden />
        <AnantaaMark
          gradientId="about-mark"
          className="pointer-events-none absolute -bottom-32 -left-24 w-[28rem] opacity-[0.05]"
        />

        <div className="shell relative py-24 lg:py-32">
          <div data-reveal>
            <Eyebrow>Vision &amp; Mission</Eyebrow>
          </div>
          <SectionHeading className="mt-6 max-w-3xl" data-reveal>
            Driving sustainable
            <br />
            energy forward.
          </SectionHeading>

          <div className="mt-16 grid gap-px lg:grid-cols-2">
            <div
              className="border-cream-50/12 bg-forest-900/40 rounded-2xl border p-9 lg:p-12"
              data-reveal
            >
              <p className="eyebrow text-flame-400">Vision</p>
              <p className="text-cream-50 mt-7 text-xl leading-relaxed lg:text-2xl">
                Sustainability that delivers more than environmental impact —
                creating long-term value, energy security, and meaningful
                progress for every stakeholder.
              </p>
            </div>

            <div
              className="border-cream-50/12 bg-forest-900/40 rounded-2xl border p-9 lg:p-12"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              <p className="eyebrow text-flame-400">Mission</p>
              <p className="text-cream-50 mt-7 text-xl leading-relaxed lg:text-2xl">
                Transforming ideas into sustainable energy solutions through
                innovation, responsible development, and long-term partnerships
                that benefit businesses, communities, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-cream-100 text-ink-900 relative overflow-hidden">
        <div
          className="blueprint-light absolute inset-0 opacity-70"
          aria-hidden
        />
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow tone="light">How we work</Eyebrow>
              </div>
              <SectionHeading tone="light" className="mt-6" data-reveal>
                Four commitments we
                <br />
                are willing to be held to.
              </SectionHeading>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-12">
            {principles.map((p, i) => (
              <div
                key={p.index}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-ink-900/12 border-t pt-7"
              >
                <span className="text-flame-600 font-mono text-xs tracking-[0.2em]">
                  {p.index}
                </span>
                <h3 className="display text-ink-900 mt-4 text-2xl lg:text-3xl">
                  {p.title}
                </h3>
                <p className="text-ink-700 mt-4 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section id="leadership" className="bg-forest-950 grain relative overflow-hidden">
        <Grain />
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div data-reveal>
              <Eyebrow>Our Leadership</Eyebrow>
            </div>
            <SectionHeading className="mt-6" data-reveal>
              The people
              <br />
              behind the plants.
            </SectionHeading>
          </div>

          <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, i) => (
              <div
                key={member.name}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="border-cream-50/12 bg-forest-900/40 rounded-2xl border p-7 lg:p-8"
              >
                <span
                  aria-hidden
                  className="from-flame-500 to-flame-400 display flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br text-lg text-forest-950"
                >
                  {initials(member.name)}
                </span>
                <h3 className="display text-cream-50 mt-6 text-2xl">
                  {member.name}
                </h3>
                <p className="eyebrow text-flame-400 mt-2">{member.title}</p>
                <p className="text-cream-50/60 mt-4 text-[0.95rem] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-forest-900 relative overflow-hidden">
        <div className="shell relative py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div data-reveal>
                <Eyebrow>Connect With Us</Eyebrow>
              </div>
              <SectionHeading className="mt-6 text-4xl lg:text-5xl!" data-reveal>
                Let&apos;s build the
                <br />
                future together.
              </SectionHeading>
              <p className="text-cream-50/65 mt-7 leading-relaxed" data-reveal>
                Every successful project begins with a meaningful conversation.
                Whether you&apos;re exploring CBG, Agroforestry, or Carbon Credit
                opportunities, our team is here to understand your vision and
                help turn it into reality.
              </p>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="border-cream-50/12 bg-forest-850/50 rounded-2xl border p-8 lg:p-10">
                <p className="eyebrow text-flame-400">Leadership contact</p>
                <h3 className="display text-cream-50 mt-6 text-3xl lg:text-4xl">
                  Preet A Patel
                </h3>
                <p className="eyebrow text-cream-50/50 mt-3">
                  Chief Marketing Officer
                </p>
                <div className="border-cream-50/10 mt-8 border-t pt-6">
                  <a
                    href={telHref(contact.phones[2])}
                    className="text-cream-50/70 hover:text-flame-400 block font-mono text-sm transition-colors"
                  >
                    {contact.phones[2]}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-cream-50/70 hover:text-flame-400 mt-2 block font-mono text-sm break-all transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div
                className="border-cream-50/12 bg-forest-850/50 mt-4 rounded-2xl border p-8 lg:p-10"
                data-reveal
                style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
              >
                <p className="eyebrow text-flame-400">Registered office</p>
                <address className="text-cream-50/70 mt-6 leading-relaxed not-italic">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.line3}
                  <br />
                  {contact.address.line4}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Get in touch"
        title={"Every great project begins\nwith a simple conversation."}
        body="Whether you have land, feedstock, a project idea, or simply questions, we're here to help you explore the possibilities with practical guidance and honest advice."
      />
    </>
  );
}
