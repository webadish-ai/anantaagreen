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

export const leadership: LeadershipMember[] = [
  {
    name: "Vaishali Shah",
    title: "Director",
    bio: "Strategic leadership and sustainability initiatives, steering partnerships for green impact.",
  },
  {
    name: "Apeksha Bhagwagar",
    title: "Director",
    bio: "Driving business development and operational excellence across renewable verticals.",
  },
  {
    name: "Neel Patel",
    title: "Director",
    bio: "Corporate strategy, market expansion and long-term vision for clean energy growth.",
  },
  {
    name: "Brijesh Bhagwagar",
    title: "Business Development Executive (BDE)",
    bio: "Driving strategic business growth by identifying opportunities, building strong client relationships, and delivering sustainable revenue expansion.",
  },
  {
    name: "Preet Patel",
    title: "Chief Marketing Officer (CMO)",
    bio: "Visionary Chief Marketing Officer driving brand transformation, strategic partnerships, market expansion, and sustainable business growth.",
  },
  {
    name: "Himanshu Shah",
    title: "Chief Operating Officer (COO)",
    bio: "Visionary Chief Operating Officer driving operational excellence, strategic execution, organisational transformation, and sustainable business growth.",
  },
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb: string }[];
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
      {
        label: "CBG Technology",
        href: "/services/cbg-plant/technology",
        blurb: "The six-stage process, digesters and core equipment",
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
