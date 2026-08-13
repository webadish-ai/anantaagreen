import Image from "next/image";
import Link from "next/link";
import { contact, nav, services, site, socials, telHref } from "@/lib/site";
import { AnantaaMark, Grain, SocialIconLink } from "@/components/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 grain relative overflow-hidden">
      <Grain />

      {/* Oversized watermark glyph, bleeding off the bottom-right corner */}
      <AnantaaMark
        gradientId="footer-mark"
        className="pointer-events-none absolute -right-24 -bottom-32 w-[34rem] opacity-[0.045]"
      />

      {/* Tagline band */}
      <div className="border-cream-50/8 relative border-b">
        <div className="shell py-14 lg:py-20">
          <p className="display text-cream-50 text-[2.5rem] leading-[0.95] sm:text-6xl lg:text-7xl">
            Infinite Energy,
            <br />
            <span className="flame-text">Sustainable Future.</span>
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="shell relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Image
            src="/brand/logo-on-dark.svg"
            alt="Anantaa Green Energy LLP"
            width={398}
            height={96}
            unoptimized
            className="h-10 w-auto"
          />
          <p className="text-cream-50/55 mt-6 max-w-sm text-[0.98rem] leading-relaxed">
            A forward-thinking green energy and sustainability solutions company
            building Compressed Bio-Gas infrastructure, carbon credit programmes
            and agroforestry across India.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="eyebrow text-flame-400">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-50/65 hover:text-cream-50 text-[0.95rem] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow text-flame-400">Capabilities</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-cream-50/65 hover:text-cream-50 text-[0.95rem] transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services/cbg-plant/technology"
                className="text-cream-50/65 hover:text-cream-50 text-[0.95rem] transition-colors"
              >
                CBG Technology
              </Link>
            </li>
          </ul>
        </div>

        <address className="not-italic lg:col-span-3">
          <h2 className="eyebrow text-flame-400">Registered Office</h2>
          <p className="text-cream-50/65 mt-5 text-[0.95rem] leading-relaxed">
            {contact.address.line1}
            <br />
            {contact.address.line2}
            <br />
            {contact.address.line3}
            <br />
            {contact.address.line4}
          </p>
          <div className="mt-5 space-y-1.5">
            {contact.phones.map((p) => (
              <a
                key={p}
                href={telHref(p)}
                className="text-cream-50/65 hover:text-flame-400 block font-mono text-sm transition-colors"
              >
                {p}
              </a>
            ))}
            <a
              href={`mailto:${contact.email}`}
              className="text-cream-50/65 hover:text-flame-400 block font-mono text-sm break-all transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </address>
      </div>

      {/* Bottom bar */}
      <div className="border-cream-50/8 relative border-t">
        <div className="shell flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-cream-50/35">
            © {year} {site.name}
          </p>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <SocialIconLink key={s.label} social={s} className="h-9 w-9" />
            ))}
          </div>
          <p className="eyebrow text-cream-50/35">
            Ahmedabad · Gujarat · India
          </p>
        </div>
      </div>
    </footer>
  );
}
