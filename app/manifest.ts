import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.territory}`,
    short_name: "Présence 1.618",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#111314",
    theme_color: "#F3F0E9",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
