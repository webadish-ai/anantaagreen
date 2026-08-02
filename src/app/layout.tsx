import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Chatbot } from "@/components/chatbot";
import { site, contact } from "@/lib/site";
import { jsonLdScriptProps } from "@/lib/json-ld";

const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "CBG plant",
    "Compressed Bio Gas",
    "biogas plant manufacturer India",
    "carbon credits",
    "agroforestry",
    "green energy Ahmedabad",
    "renewable energy Gujarat",
    "Anantaa Green Energy",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2213",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  // Dual-typed so this satisfies both generic Organization consumers and
  // local-search / map-pack surfaces that look for LocalBusiness specifically.
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/brand/logo-full-color.svg`,
  image: `${site.url}/brand/logo-full-color.svg`,
  description: site.description,
  slogan: site.tagline,
  email: contact.email,
  telephone: contact.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  // Verified coordinates for the Anantaa Green Energy LLP Google Business listing.
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.mapCoords.lat,
    longitude: contact.mapCoords.lng,
  },
  hasMap: contact.mapShareUrl,
  areaServed: "IN",
  knowsAbout: [
    "Compressed Bio-Gas",
    "Carbon Credits",
    "Agroforestry",
    "Renewable energy EPC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${familjen.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="bg-forest-950 flex min-h-full flex-col">
        <script {...jsonLdScriptProps(organizationJsonLd)} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-flame-500 focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Reveal />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Chatbot />
      </body>
    </html>
  );
}
