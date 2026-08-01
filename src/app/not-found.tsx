import { AnantaaMark, ButtonLink, Eyebrow, Grain } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-forest-950 grain relative flex min-h-[70svh] items-center overflow-hidden">
      <Grain />
      <div className="blueprint absolute inset-0 opacity-50" aria-hidden />
      <AnantaaMark
        gradientId="notfound-mark"
        className="pointer-events-none absolute -right-20 -bottom-24 w-[26rem] opacity-[0.06]"
      />

      <div className="shell relative py-32">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="display text-cream-50 mt-7 max-w-3xl text-5xl lg:text-7xl">
          This page is not
          <br />
          <span className="flame-text">on the plot plan.</span>
        </h1>
        <p className="text-cream-50/65 mt-8 max-w-lg text-lg leading-relaxed">
          The link may be out of date, or the page may have moved. Everything we
          build is one click away from the pages below.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/services" variant="outline">
            View Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
