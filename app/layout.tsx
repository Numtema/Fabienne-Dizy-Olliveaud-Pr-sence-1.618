import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import {
  generateWebSiteSchema,
  generatePersonSchema,
  sanitizeJsonLd,
} from "@/lib/jsonld";

const fontInstrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.territory} · ${siteConfig.signature}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.territory}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} — ${siteConfig.territory}`,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: `${siteConfig.url}/assets/fabienne-hero-poster.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} · ${siteConfig.signature}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.territory}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/assets/fabienne-hero-poster.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = generateWebSiteSchema();
  const personSchema = generatePersonSchema();

  return (
    <html
      lang="fr"
      className={`${fontInstrument.variable} ${fontInter.variable}`}
    >
      <head>
        {/* Schema.org WebSite & Person Structured Data per spec #56 & #57 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(personSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#111314] text-graphite font-sans antialiased selection:bg-champagne/30 selection:text-graphite"
      >
        <MotionProvider>
          <div className="relative min-h-screen flex flex-col bg-paper text-graphite overflow-x-hidden">
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}

