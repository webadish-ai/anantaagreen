/**
 * Knowledge base for the site chatbot. No LLM is involved — visitor
 * questions are fuzzy-matched (via Fuse.js, see chatbot.tsx) against the
 * `questions` trigger phrases below, and the matching `answer` is returned
 * verbatim. Nothing here is generated at request time, so there is nothing
 * to hallucinate.
 *
 * IMPORTANT — keep this in sync with the live pages. Whenever page copy in
 * src/app/**\/page.tsx changes (especially after a client content review),
 * update the relevant answer(s) here too. This file is the chatbot's entire
 * knowledge — it will confidently repeat whatever is written below even
 * after the real page has moved on.
 */

import Fuse from "fuse.js";
import { contact, leadership, site } from "@/lib/site";

export type FaqEntry = {
  id: string;
  /** Well-formed question shown on the public /faq page and used in FAQPage schema. */
  displayQuestion: string;
  /** Phrases a fuzzy search should match against — include natural variants. */
  questions: string[];
  answer: string;
  links?: { label: string; href: string }[];
};

export const faq: FaqEntry[] = [
  {
    id: "who-are-you",
    displayQuestion: "Who is Anantaa Green Energy?",
    questions: [
      "who are you",
      "what is anantaa green energy",
      "what does anantaa do",
      "tell me about the company",
      "about the company",
      "what is this company",
      "who is anantaa",
      "who is anantaa green energy",
      "what does your company do",
      "company overview",
      "tell me about anantaa",
    ],
    answer:
      "Anantaa Green Energy LLP is a forward-thinking green energy and sustainability solutions company based in Ahmedabad, Gujarat, India. We develop Compressed Bio-Gas (CBG) plants, carbon-credit projects and agroforestry programmes across India.",
    links: [{ label: "About us", href: "/about" }],
  },
  {
    id: "services-overview",
    displayQuestion: "What services do you offer?",
    questions: [
      "what services do you offer",
      "what do you do",
      "what services",
      "your services",
      "what can you help with",
      "what do you provide",
      "services you provide",
      "what kind of work do you do",
      "list of services",
    ],
    answer:
      "We work across three connected capabilities: CBG (Compressed Bio-Gas) plant development, carbon-credit project screening and monetisation, and agroforestry programmes. Each can stand alone, but together they close the loop from biomass to fuel to verified carbon credit.",
    links: [{ label: "See all services", href: "/services" }],
  },
  {
    id: "cbg-explainer",
    displayQuestion: "What is CBG (Compressed Bio-Gas)?",
    questions: [
      "what is cbg",
      "what is compressed bio-gas",
      "what is compressed biogas",
      "how does cbg work",
      "cbg plant",
      "what is compressed bio gas",
      "explain cbg",
      "tell me about cbg",
      "what is biogas",
    ],
    answer:
      "Compressed Bio-Gas (CBG) is biogas — produced when organic matter breaks down without oxygen — that has been cleaned and upgraded to above 90% methane, then compressed to around 250 bar. At that point it's functionally interchangeable with CNG. We handle the whole journey: feedstock survey, process design, EPC delivery, commissioning and long-run operations.",
    links: [{ label: "CBG Plant service", href: "/services/cbg-plant" }, { label: "How the process works", href: "/services/cbg-plant/technology" }],
  },
  {
    id: "cbg-feedstock",
    displayQuestion: "What feedstock do you use for CBG?",
    questions: [
      "what feedstock do you use",
      "what materials for cbg",
      "what waste can be used",
      "feedstock types",
      "what feedstock do you accept",
      "what raw materials do you use",
      "what can be turned into cbg",
    ],
    answer:
      "We work with agricultural residue (paddy straw, cotton stalk, bagasse), press mud and spent wash from sugar mills, Napier grass and energy crops, cattle dung and poultry litter, food and market waste, and the segregated organic fraction of municipal solid waste.",
    links: [{ label: "CBG Plant service", href: "/services/cbg-plant" }],
  },
  {
    id: "carbon-credits",
    displayQuestion: "What are carbon credits?",
    questions: [
      "what are carbon credits",
      "carbon credit services",
      "how do carbon credits work",
      "do you sell carbon credits",
      "what are carbon credits exactly",
      "explain carbon credits",
      "tell me about carbon credits",
      "carbon credit projects",
    ],
    answer:
      "We screen, develop and support monetisation of eligible carbon-credit projects — from methane avoided at a CBG plant to biomass and soil carbon sequestered through agroforestry. This includes eligibility screening, baseline assessment, methodology selection, documentation and monitoring support through to issuance and offtake. Carbon revenue is always positioned as upside, never guaranteed.",
    links: [{ label: "Carbon Credits service", href: "/services/carbon-credits" }],
  },
  {
    id: "agroforestry",
    displayQuestion: "What is agroforestry?",
    questions: [
      "what is agroforestry",
      "agro forestry services",
      "plantation programme",
      "what plants do you grow",
      "what species do you plant",
      "tell me about agroforestry",
      "explain agroforestry",
      "what is agro forestry",
    ],
    answer:
      "Agroforestry means deliberately growing woody perennials alongside agriculture — as boundary rows, intercropped blocks or dedicated stands. For us it's upstream infrastructure: it strengthens biomass supply for CBG plants and, depending on the site, can also include commercial fruit, long-term timber, medicinal plants and more.",
    links: [{ label: "Agroforestry service", href: "/services/agro-forestry" }],
  },
  {
    id: "technology",
    displayQuestion: "What technology do you use?",
    questions: [
      "what technology do you use",
      "cstr or plug flow",
      "how does the digester work",
      "what is the process",
      "technology used",
      "what tech do you use for digestion",
      "what technology do you use for cbg",
      "how does the process work",
    ],
    answer:
      "Our plants use CSTR (continuously stirred tank) or plug flow digesters depending on the feedstock, followed by H₂S removal, drying, CO₂ upgrading (water scrubbing, pressure swing adsorption, or membrane separation) and compression to around 250 bar. The right combination depends on scale, feedstock and utilities.",
    links: [{ label: "Full process explained", href: "/services/cbg-plant/technology" }],
  },
  {
    id: "location",
    displayQuestion: "Where are you located?",
    questions: [
      "where are you located",
      "office address",
      "where is your office",
      "location",
      "address",
      "where is your office located",
      "your address",
      "what city are you in",
      "where are you based",
    ],
    answer: `Our registered office is at ${contact.address.line1}, ${contact.address.line2}, ${contact.address.line3}, ${contact.address.line4}. Visitors are welcome by appointment.`,
    links: [{ label: "Find us", href: "/contact" }],
  },
  {
    id: "contact-info",
    displayQuestion: "How can I contact you?",
    questions: [
      "how can i contact you",
      "phone number",
      "email address",
      "how to reach you",
      "contact details",
      "whatsapp",
      "how can i get in touch with you",
      "how do i contact you",
      "phone number please",
      "your email",
      "your phone number",
    ],
    answer: `You can reach us at ${contact.phones[0]} or by email at ${contact.email}. There's also a WhatsApp chat option on our Contact page, or you can send an enquiry directly through the form there.`,
    links: [{ label: "Contact page", href: "/contact" }],
  },
  {
    id: "leadership",
    displayQuestion: "Who is on your leadership team?",
    questions: [
      "who is on your team",
      "who runs the company",
      "leadership",
      "who is the ceo",
      "management team",
      "founders",
      "who's on the leadership team",
      "who leads the company",
      "who are the directors",
      "who owns the company",
    ],
    answer: `Our leadership team includes ${leadership
      .map((l) => `${l.name} (${l.title})`)
      .join(", ")}.`,
    links: [{ label: "Meet the team", href: "/about#leadership" }],
  },
  {
    id: "investors",
    displayQuestion: "How can I invest or partner with you?",
    questions: [
      "how can i invest",
      "investment opportunities",
      "are you looking for investors",
      "business model",
      "revenue model",
      "can i invest in your company",
      "how do i become an investor",
      "investing in anantaa",
    ],
    answer:
      "We're building a diversified business model around EPC services, green-project consulting, eligible carbon projects and, over time, direct project operations. For prospective partnerships and current opportunities, please get in touch — we'll share what's currently available.",
    links: [{ label: "Investors", href: "/investors" }],
  },
  {
    id: "careers",
    displayQuestion: "Are you hiring?",
    questions: [
      "are you hiring",
      "job openings",
      "careers",
      "work with you",
      "internship",
      "are there any job openings",
      "do you have vacancies",
      "do you have any vacancies",
      "job vacancy",
    ],
    answer:
      "We don't have a public careers listing right now. If you'd like to reach out about opportunities, send us a message through the contact page and we'll get back to you.",
    links: [{ label: "Contact us", href: "/contact" }],
  },
  {
    id: "pricing",
    displayQuestion: "How much does a CBG plant cost?",
    questions: [
      "how much does it cost",
      "pricing",
      "what is the price",
      "cost of a cbg plant",
      "what does a plant cost",
      "how much does a cbg plant cost",
      "what is your pricing",
    ],
    answer:
      "Cost depends entirely on feedstock, scale and site specifics, so we don't publish fixed pricing. Share your feedstock type, tonnage and location through the contact form and we'll come back with an honest read on scale and cost.",
    links: [{ label: "Start a conversation", href: "/contact" }],
  },
];

export const chatbotIntro = `Hi, I'm the ${site.shortName} assistant. Ask me about our services, technology, or how to get in touch — I'll do my best to help.`;

export const suggestedQuestions = [
  "What services do you offer?",
  "What is Compressed Bio-Gas?",
  "How can I contact you?",
  "Where are you located?",
];

export const noMatchMessage =
  "I don't have a confident answer for that one — let me pass it to the team instead. Leave your name and email below and we'll follow up.";

// ---------------------------------------------------------------------------
// Matching. Two independent gates have to agree before an answer is shown:
//
// 1. A Fuse.js fuzzy-search score. Note: Fuse's own `threshold` option does
//    NOT reliably exclude poor matches when searching array-valued keys (a
//    documented-by-behaviour quirk, not a config mistake) — a nonsense query
//    like "do you sell pizza" can still come back scored against "do you
//    sell carbon credits" well outside the configured threshold. So the
//    score is re-checked by hand below (MAX_SCORE) rather than trusted.
// 2. A plain keyword-overlap check — the visitor's significant words must
//    share at least one term with the matched entry's own trigger phrases.
//    This is what actually kills "do you sell pizza": it fuzzy-scores
//    passably against a carbon-credits phrase on "do you sell" alone, but
//    shares no topic word with it.
//
// Together these keep answers to things the knowledge base actually covers,
// and route everything else to the lead-capture form instead of guessing.
// ---------------------------------------------------------------------------

const MAX_SCORE = 0.3;

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "am", "do", "does", "did", "you", "your",
  "yours", "i", "me", "my", "we", "us", "our", "of", "for", "to", "in", "on",
  "at", "how", "what", "who", "when", "where", "why", "which", "can", "could",
  "would", "should", "will", "shall", "please", "tell", "about", "this",
  "that", "with", "and", "or", "it", "its", "be", "have", "has", "had", "get",
  "got", "there", "here", "any",
]);

function significantWords(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOPWORDS.has(w)),
  );
}

const entryKeywords = new Map<string, Set<string>>(
  faq.map((entry) => [entry.id, significantWords(entry.questions.join(" "))]),
);

const fuse = new Fuse(faq, {
  keys: ["questions"],
  threshold: 0.4,
  ignoreLocation: true,
  includeScore: true,
});

export function findFaqAnswer(input: string): FaqEntry | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const results = fuse.search(trimmed);
  const top = results[0];
  if (!top || top.score === undefined || top.score > MAX_SCORE) return null;

  const queryWords = significantWords(trimmed);
  const entryWords = entryKeywords.get(top.item.id) ?? new Set<string>();
  const overlaps = [...queryWords].some((w) => entryWords.has(w));
  if (!overlaps) return null;

  return top.item;
}
