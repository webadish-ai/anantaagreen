/**
 * Renders a JSON-LD payload as the props for a <script> tag, escaping "<" per
 * Next.js's own guidance (prevents the payload from being read as HTML if it
 * ever contains untrusted content). Every JSON-LD block in this codebase is
 * static/author-controlled, but this costs nothing and matches the documented
 * pattern — see node_modules/next/dist/docs/01-app/02-guides/json-ld.md.
 */
export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
