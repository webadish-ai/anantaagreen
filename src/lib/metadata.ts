import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Builds consistent per-page metadata, including OpenGraph and Twitter.
 *
 * Next merges metadata per top-level key, not per-field — a page that sets
 * its own `openGraph` object entirely replaces the root layout's, rather
 * than filling in just the title/description. Every page must therefore
 * supply a complete openGraph/twitter object, which is what this helper is
 * for: pass the page's own title/description once, get correct <title>,
 * canonical, OG and Twitter tags out of it.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  /** Short page title — the site-wide "· Anantaa Green Energy" suffix is added automatically. */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/about" or "/services/cbg-plant". */
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} · ${site.shortName}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
