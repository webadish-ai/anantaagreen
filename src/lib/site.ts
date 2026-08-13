export const site = {
  name: "Anantaa Green Energy LLP",
  shortName: "Anantaa Green Energy",
  tagline: "Infinite Energy, Sustainable Future",
  url: "https://anantaagreenenergy.com",
  description:
    "Anantaa Green Energy develops Compressed Bio-Gas plants, carbon-credit projects and agroforestry programmes across India.",
  founded: "Ahmedabad, Gujarat, India",
} as const;

export const contact = {
  phones: ["+91 98241 04594", "+91 89808 06009", "+91 96876 17171"],
  email: "info@anantaagreenenergy.com",
  address: {
    line1: "A1-906, Palladium",
    line2: "Near Vodafone House, Corporate Road",
    line3: "Prahladnagar, Ahmedabad – 380 015",
    line4: "Gujarat, India",
  },
  /** Business name + address, so the embed resolves to the actual Place listing (not just a coordinate). */
  mapQuery:
    "Anantaa Green Energy LLP, A1-906 Palladium, Corporate Road, Prahladnagar, Ahmedabad, Gujarat 380015",
  /** Verified pin for the "Anantaa Green Energy LLP" Google Business listing. */
  mapCoords: { lat: 22.9990104, lng: 72.5016128 },
  /** Share link to the same listing, for the "Open in Google Maps" / directions CTA. */
  mapShareUrl: "https://maps.app.goo.gl/mT2uy7DijfKb9WdKA",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram";
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/anantaa-green-energy/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/anantaagreenenergy/",
    icon: "instagram",
  },
];

/** Strips spaces so a phone string can be used in a tel: href. */
export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

/** Builds a wa.me link from an "+91 xxxxx xxxxx" phone string, with an optional prefilled message. */
export const waHref = (phone: string, message?: string) => {
  const digits = phone.replace(/[^\d]/g, "");
  return message
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${digits}`;
};

export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
};

/**
 * Titles are written out in full — the card prints the title directly above
 * the bio, so an appended abbreviation repeats what the reader just read.
 * Each bio states what the person is accountable for without restating the
 * title, and opens on a distinct verb so the grid does not read repetitively.
 */
export const leadership: LeadershipMember[] = [
  {
    name: "Vaishali Shah",
    title: "Director",
    bio: "Sets the sustainability agenda and builds the long-term partnerships that carry projects from intent to delivery.",
  },
  {
    name: "Apeksha Bhagwagar",
    title: "Director",
    bio: "Oversees business development and operational delivery across the CBG, carbon credit and agroforestry verticals.",
  },
  {
    name: "Neel Patel",
    title: "Director",
    bio: "Guides corporate strategy and market expansion, and the long-term view of where the business invests next.",
  },
  {
    name: "Brijesh Bhagwagar",
    title: "Business Development Executive",
    bio: "Identifies new project opportunities and builds the client relationships behind a growing pipeline.",
  },
  {
    name: "Preet Patel",
    title: "Chief Marketing Officer",
    bio: "Leads brand, positioning and market outreach, and the partnerships that open new territory for the business.",
  },
  {
    name: "Himanshu Shah",
    title: "Chief Operating Officer",
    bio: "Turns strategy into operating discipline, holding execution standards across the project portfolio.",
  },
];

export type NavChild = {
  label: string;
  href: string;
  blurb: string;
  /** One further level only — e.g. CBG Plant's own Technology sub-page. */
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Our Story",
        href: "/about",
        blurb: "Who we are, our vision and mission",
      },
      {
        label: "Our Team",
        href: "/about#leadership",
        blurb: "The directors and officers behind Anantaa",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "CBG Plant",
        href: "/services/cbg-plant",
        blurb: "Compressed Bio-Gas plants, concept to commissioning",
        children: [
          {
            label: "CBG Technology",
            href: "/services/cbg-plant/technology",
            blurb: "The six-stage process, digesters and core equipment",
          },
        ],
      },
      {
        label: "Carbon Credits",
        href: "/services/carbon-credits",
        blurb: "Origination, verification and monetisation",
      },
      {
        label: "Agroforestry",
        href: "/services/agro-forestry",
        blurb: "Biomass supply chains and biodiversity",
      },
    ],
  },
  { label: "Investors", href: "/investors" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "cbg-plant",
    index: "01",
    title: "CBG Plant",
    short: "Compressed Bio-Gas",
    summary:
      "We develop end-to-end Compressed Bio-Gas (CBG) projects — from feedstock planning and engineering to EPC execution, commissioning, and long-term operational support.",
    href: "/services/cbg-plant",
  },
  {
    slug: "carbon-credits",
    index: "02",
    title: "Carbon Credits",
    short: "Origination & monetisation",
    summary:
      "From project development to carbon credit trading, we help businesses unlock the commercial potential of verified climate action.",
    href: "/services/carbon-credits",
  },
  {
    slug: "agro-forestry",
    index: "03",
    title: "Agroforestry",
    short: "Biomass & biodiversity",
    summary:
      "Growing more than trees. From plantation planning to harvest, we build systems designed to create value for both people and the environment.",
    href: "/services/agro-forestry",
  },
];

/** The CBG process line — used by the animated schematic on the home page. */
export const processStages = [
  {
    id: "feedstock",
    index: "01",
    title: "Feedstock Intake",
    note: "Agri residue · press mud · napier · cattle dung · MSW organics",
  },
  {
    id: "pretreatment",
    index: "02",
    title: "Pre-treatment",
    note: "Shredding, slurry preparation and consistency control",
  },
  {
    id: "digestion",
    index: "03",
    title: "Anaerobic Digestion",
    note: "CSTR digesters, mesophilic regime, 25–40 day retention",
  },
  {
    id: "cleanup",
    index: "04",
    title: "Gas Clean-up",
    note: "H₂S removal, moisture knock-out, siloxane polishing",
  },
  {
    id: "upgrading",
    index: "05",
    title: "CO₂ Upgrading",
    note: "Water scrubbing · PSA · membrane separation to >90% CH₄",
  },
  {
    id: "dispatch",
    index: "06",
    title: "Compression & Dispatch",
    note: "Cascade filling to 250 bar, cylinders and city gas grid",
  },
] as const;

export const coProducts = [
  {
    title: "Organic Fertiliser",
    note: "Solid and liquid FOM/LFOM returned to the fields that supplied the feedstock.",
  },
  {
    title: "Verified Carbon Credits",
    note: "Avoided methane and displaced fossil fuel, converted into tradable instruments.",
  },
] as const;
