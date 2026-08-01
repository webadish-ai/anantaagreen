# Anantaa Green Energy LLP — website

Marketing site for Anantaa Green Energy LLP (Ahmedabad, Gujarat).
Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Pages

| Route                      | Purpose                                               |
| -------------------------- | ----------------------------------------------------- |
| `/`                        | Home — positioning, capabilities, CBG process line    |
| `/about`                   | Company, vision & mission, principles, leadership     |
| `/services`                | Services index + how we are engaged                   |
| `/services/cbg-plant`      | Compressed Bio-Gas plant development                  |
| `/services/carbon-credits` | Carbon credit origination and monetisation            |
| `/services/agro-forestry`  | Agro forestry and biomass supply                      |
| `/technology`              | Six-stage CBG process, upgrading routes, equipment    |
| `/investors`               | Business model, market opportunity, investment thesis |
| `/contact`                 | Enquiry form, phone/email/address, map                |

`/sitemap.xml` and `/robots.txt` are generated from `src/lib/site.ts`.

## Editing content

Nearly all shared copy lives in **`src/lib/site.ts`** — company details, phone
numbers, address, navigation and the service list. Change it there and it
updates the header, footer, sitemap and structured data together.

Page-specific copy sits at the top of each `page.tsx` as plain arrays, so it can
be edited without touching layout code.

## Design system

Tokens are defined in `src/app/globals.css` under `@theme`:

- **Forest** `#061309`–`#1d6636` — the dark canvas
- **Green** `#248e44` — brand primary (from the logo)
- **Flame** `#f37621` → `#f8bc3e` — the logo's gradient, used only as an accent
- **Cream** `#fdfceb` — paper panels, taken from the brochure

Type: **Familjen Grotesk** (display) · **Newsreader** (body) · **JetBrains
Mono** (technical labels). All self-hosted through `next/font`.

Utilities worth knowing: `shell` (page gutter), `eyebrow` (mono label),
`display` (headline), `blueprint` / `blueprint-light` (hairline grid),
`grain` + `<Grain />` (film texture), `flame-text` (gradient text).

Sections alternate dark → cream to give the page rhythm. Scroll reveals use a
`data-reveal` attribute driven by `src/components/reveal.tsx`; content stays
visible if JavaScript fails, and animation is disabled under
`prefers-reduced-motion`.

## Logo assets

`public/brand/` holds the supplied SVGs. `logo-on-dark.svg` is generated from
`logo-white.svg` with the "A" peak recoloured to the brand gradient — that is
the variant used in the header and footer.

## Contact form

`src/app/contact/actions.ts` is a Server Action with server-side validation and
a honeypot field. Delivery goes through Resend when configured:

```
RESEND_API_KEY=...
ENQUIRY_FROM_EMAIL=website@anantaagreenenergy.com
ENQUIRY_TO_EMAIL=info@anantaagreenenergy.com
```

See `.env.example`. Until those are set the form validates normally but tells
the visitor to email or call instead of silently failing. To use a different
provider, replace the single `fetch` call in that file.

## Before going live

- [ ] Set the Resend environment variables so enquiries reach an inbox
- [ ] Add real project photography — the design currently uses no photographs
- [ ] Add an Open Graph image at `src/app/opengraph-image.png` (1200×630)
- [ ] Verify the policy figures on `/` and `/investors` (SATAT, CBG Blending
      Obligation, net-zero) against current government sources
- [ ] Confirm the leadership section on `/about` — only Preet A Patel (CMO) was
      supplied; add others as needed
- [ ] Point `anantaagreenenergy.com` at the deployment (currently a GoDaddy
      placeholder page)

## Deploying

Every route is statically prerendered, so any Node host works. On Vercel:
`vercel --prod`, then add the environment variables in project settings.
