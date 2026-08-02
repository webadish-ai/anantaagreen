import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { jsonLdScriptProps } from "@/lib/json-ld";
import { faq } from "@/lib/chatbot-faq";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Anantaa Green Energy — CBG plants, carbon credits, agroforestry, technology, pricing and how to get in touch.",
  path: "/faq",
  keywords: [
    "CBG plant FAQ",
    "carbon credits questions",
    "Anantaa Green Energy questions",
    "compressed bio-gas explained",
  ],
});

// Rendered server-side as real page content — this is also what the site
// chatbot answers from (src/lib/chatbot-faq.ts). Marking it up as FAQPage
// schema is only valid because the same text is visible here, not hidden
// behind the chat widget's JavaScript.
const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((entry) => ({
    "@type": "Question",
    name: entry.displayQuestion,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqPageJsonLd)} />

      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Answers, before you
            <br />
            <span className="flame-text">have to ask twice.</span>
          </>
        }
        lede="The same knowledge base that runs the chat assistant in the corner of your screen — written out in full, in case you'd rather read than type."
      />

      <section className="bg-cream-50 text-ink-900 relative overflow-hidden">
        <div className="blueprint-light absolute inset-0 opacity-70" aria-hidden />
        <div className="shell relative py-20 lg:py-28">
          <div className="mx-auto max-w-3xl divide-y divide-ink-900/12">
            {faq.map((entry, i) => (
              <details
                key={entry.id}
                data-reveal
                style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <summary className="display flex cursor-pointer list-none items-start justify-between gap-6 text-xl text-ink-900 marker:content-none lg:text-2xl">
                  {entry.displayQuestion}
                  <span
                    aria-hidden
                    className="text-flame-600 mt-1 shrink-0 font-mono text-lg transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 max-w-2xl">
                  <p className="text-ink-700 leading-relaxed">{entry.answer}</p>
                  {entry.links && entry.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {entry.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="eyebrow text-flame-600 hover:text-flame-500 inline-flex items-center gap-2 transition-colors"
                        >
                          {link.label}
                          <span aria-hidden>→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>

          <p className="text-ink-500/70 mx-auto mt-14 max-w-3xl font-mono text-[0.7rem] leading-relaxed">
            Don&apos;t see your question? Ask the chat assistant in the corner of
            the screen, or{" "}
            <Link href="/contact" className="underline">
              send us a message
            </Link>{" "}
            directly — {site.shortName} replies within one working day.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Still deciding"
        title={"Ask us the one\nquestion this page missed."}
        body="Every project starts with a question nobody's written the answer to yet. Send it over and we'll give you a straight one back."
      />
    </>
  );
}
