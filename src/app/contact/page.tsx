import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { Eyebrow, Grain, SectionHeading } from "@/components/ui";
import { contact, site, telHref, waHref } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { jsonLdScriptProps } from "@/lib/json-ld";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Anantaa Green Energy LLP in Ahmedabad, Gujarat — for CBG plant development, carbon-credit projects, agroforestry and investment enquiries.",
  path: "/contact",
  keywords: ["contact Anantaa Green Energy", "CBG plant enquiry", "green energy consultation Ahmedabad"],
});

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.mapQuery,
)}&z=17&output=embed`;

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${site.url}/contact`,
  about: { "@type": "Organization", name: site.name, url: site.url },
};

export default function ContactPage() {
  return (
    <>
      <script {...jsonLdScriptProps(contactPageJsonLd)} />
      <PageHero
        eyebrow="Connect With Us"
        title={
          <>
            Tell us what you have.{" "}
            <span className="flame-text">We will tell you what it needs.</span>
          </>
        }
        lede="Connect with us to explore opportunities and to learn about our leadership team. Feedstock, land, capital or a question — all of it starts the same way."
      />

      {/* Form + details */}
      <section className="bg-forest-950 relative overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
        <div className="shell relative grid gap-14 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-7" data-reveal>
            <Eyebrow>Send an enquiry</Eyebrow>
            <h2 className="display text-cream-50 mt-6 mb-10 text-3xl lg:text-4xl">
              Start here.
            </h2>
            <EnquiryForm />
          </div>

          <aside
            className="lg:col-span-5"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div className="lg:sticky lg:top-32">
              <div className="border-cream-50/12 bg-forest-900/50 rounded-2xl border p-8">
                <p className="eyebrow text-flame-400">Call us</p>
                <ul className="mt-5 space-y-0">
                  {contact.phones.map((p, i) => (
                    <li
                      key={p}
                      className={i > 0 ? "border-cream-50/10 border-t" : ""}
                    >
                      <a
                        href={telHref(p)}
                        className="text-cream-50 hover:text-flame-400 block py-3 font-mono text-[0.95rem] transition-colors"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={waHref(
                    contact.phones[0],
                    "Hi Anantaa Green Energy, I'd like to discuss a project.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow mt-6 flex items-center justify-center gap-2.5 rounded-full border border-[#25D366]/40 py-3.5 text-[#25D366] transition-colors hover:bg-[#25D366]/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.08.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
                  </svg>
                  Chat on WhatsApp
                </a>

                <div className="border-cream-50/10 mt-6 border-t pt-6">
                  <p className="eyebrow text-flame-400">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-cream-50 hover:text-flame-400 mt-4 block font-mono text-[0.95rem] break-all transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="border-cream-50/10 mt-6 border-t pt-6">
                  <p className="eyebrow text-flame-400">Registered office</p>
                  <address className="text-cream-50/70 mt-4 leading-relaxed not-italic">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.line3}
                    <br />
                    {contact.address.line4}
                  </address>
                </div>

                <div className="border-cream-50/10 mt-6 border-t pt-6">
                  <p className="eyebrow text-flame-400">Web</p>
                  <a
                    href={site.url}
                    className="text-cream-50 hover:text-flame-400 mt-4 block font-mono text-[0.95rem] break-all transition-colors"
                  >
                    www.anantaagreenenergy.com
                  </a>
                </div>
              </div>

              <p className="text-cream-50/40 mt-6 text-sm leading-relaxed">
                For technical enquiries, including a feedstock description and
                approximate tonnage in your first message gets you a useful answer
                considerably faster.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-forest-900 grain relative overflow-hidden">
        <Grain />
        <div className="shell relative py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div data-reveal>
                <Eyebrow>Find us</Eyebrow>
              </div>
              <SectionHeading className="mt-6 text-4xl lg:text-5xl!" data-reveal>
                Prahladnagar,
                <br />
                Ahmedabad.
              </SectionHeading>
            </div>
            <div
              className="lg:col-span-5"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <p className="text-cream-50/65 leading-relaxed">
                Our office sits on Corporate Road in Prahladnagar. Visitors are
                welcome by appointment — please call ahead so the right person is
                in the building.
              </p>
            </div>
          </div>

          <div
            className="border-cream-50/12 mt-12 overflow-hidden rounded-2xl border"
            data-reveal
          >
            <iframe
              title="Anantaa Green Energy LLP office location, Prahladnagar, Ahmedabad"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full lg:h-[460px]"
            />
          </div>

          <a
            href={contact.mapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-cream-50/60 hover:text-flame-400 mt-6 inline-flex items-center gap-2.5 transition-colors"
            data-reveal
          >
            Open in Google Maps
            <span aria-hidden className="transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
