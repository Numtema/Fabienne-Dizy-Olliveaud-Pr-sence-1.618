import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModDate = new Date("2026-03-01T00:00:00.000Z");

  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/pratiques`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/massage-lemniscate`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/energetique`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/radiesthesie`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/aromatherapie`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/officine-des-anges`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/meditation`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/ateliers-formations`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/a-propos`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/prendre-rendez-vous`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tarifs`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/temoignages`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/legal/mentions-legales`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/legal/politique-confidentialite`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: lastModDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
