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
    title: "Scale is a design decision",
    body: "Infrastructure that cannot be repeated is a prototype. We specify projects so the learning from the first one compounds into the next, rather than being spent once.",
  },
  {
    index: "02",
    title: "Environmental integrity is not a trade-off",
    body: "A project that only works by cutting corners on emissions, effluent or land use is not a green project. We would rather lose the site than carry that.",
  },
  {
    index: "03",
    title: "Returns are modelled, not promised",
    body: "Investor value is stated in our mission for a reason. We show the assumptions behind a number and we say which of them we are least sure about.",
  },
  {
    index: "04",
    title: "We stay after handover",
    body: "Direct project operations are part of our business model. Knowing we may have to run the plant changes what we are willing to build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Anantaa Green Energy"
        title={
          <>
            Forward thinking,{" "}
            <span className="flame-text">from Ahmedabad outward.</span>
          </>
        }
        lede="A green energy and sustainability solutions company building the infrastructure India's clean energy transition needs — and holding it to the standard we would apply to our own balance sheet."
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
            "Green energy & sustainability solutions company",
            "Based in Ahmedabad, Gujarat, India",
            "Compressed Bio-Gas plant development",
            "Carbon credit origination and monetisation",
            "Agro forestry and biomass supply programmes",
            "EPC, consulting and direct project operations",
          ],
        }}
      >
        <p>
          Anantaa Green Energy is a forward-thinking green energy and
          sustainability solutions company based in Ahmedabad, Gujarat, India. We
          specialise in the development of Compressed Bio-Gas plants, carbon
          credit projects and agroforestry programmes.
        </p>
        <p>
          <strong>
            Our mission is to build scalable, environmentally responsible
            infrastructure that can create long-term value for project partners,
            investors and local communities.
          </strong>
        </p>
        <p>
          Those two halves of the sentence are not in tension, but they are not
          automatically aligned either. Making them align is the actual work:
          choosing sites where the feedstock is genuinely there, sizing plants to
          what the catchment can sustain rather than to what a subsidy would
          reward, and being willing to say no to projects that only look good on a
          slide.
        </p>
        <p>
          India is in the middle of a clean energy build-out that will run for
          decades. We would rather be a small, credible part of it for all of that
          time than a large one briefly.
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
                Become a leading force in India&apos;s clean energy transition,
                influencing global efforts towards a sustainable future while
                ensuring environmental integrity and economic viability for all
                stakeholders.
              </p>
            </div>

            <div
              className="border-cream-50/12 bg-forest-900/40 rounded-2xl border p-9 lg:p-12"
              data-reveal
              style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
            >
              <p className="eyebrow text-flame-400">Mission</p>
              <p className="text-cream-50 mt-7 text-xl leading-relaxed lg:text-2xl">
                Develop scalable, sustainable green energy projects that are
                commercially disciplined and contribute positively to the
                environment and society through responsible practices and
                technologies.
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
                Talk to the people
                <br />
                who decide.
              </SectionHeading>
              <p className="text-cream-50/65 mt-7 leading-relaxed" data-reveal>
                We are a small team by design, which means the person you speak to
                first is generally the person who will be on the project. Connect
                with us to explore opportunities and to meet the leadership team.
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
        title={"Bring us a site,\na question, or a doubt."}
        body="Early conversations cost nothing and save a great deal later. We are happy to give a view on a project we will not end up building."
      />
    </>
  );
}
