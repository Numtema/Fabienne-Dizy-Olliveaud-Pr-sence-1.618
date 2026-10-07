import { siteConfig } from "@/config/site";
import { FAQItem } from "@/content/faq";

/**
 * Sanitizes JSON-LD output against XSS via script tag injection
 * per specification #58
 */
export function sanitizeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.territory,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "fr-FR",
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Praticienne en soins énergétiques, massage Lemniscate et radiesthésie",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/assets/fabienne-portrait.jpg`,
    knowsAbout: [
      "Soins énergétiques",
      "Massage Lemniscate",
      "Radiesthésie vibratoire",
      "Aromathérapie subtile",
      "Méditation & Présence",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
