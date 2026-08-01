import { ButtonLink, Grain } from "@/components/ui";
import { contact, telHref } from "@/lib/site";

export function CtaBand({
  eyebrow = "Next step",
  title = "Let's size\nyour project.",
  body = "Tell us your feedstock, your site and your timeline. We will come back with an honest read on scale, capex and the carbon upside.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="grain relative overflow-hidden">
      {/* Flame gradient field, dialled down so the type stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(118deg, #133820 0%, #1d6636 46%, #248e44 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute -right-24 -bottom-40 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(243,118,33,0.55) 0%, rgba(243,118,33,0) 70%)",
        }}
        aria-hidden
      />
      <Grain />

      <div className="shell relative grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-28">
        <div className="lg:col-span-7" data-reveal>
          <p className="eyebrow text-flame-400">{eyebrow}</p>
          <h2 className="display text-cream-50 mt-6 text-4xl whitespace-pre-line sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>
        <div
          className="lg:col-span-5"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <p className="text-cream-50/80 text-lg leading-relaxed">{body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            <a
              href={telHref(contact.phones[0])}
              className="eyebrow text-cream-50/80 hover:text-flame-400 transition-colors"
            >
              or call {contact.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
