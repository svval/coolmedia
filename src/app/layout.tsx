import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { company } from "@/content/site";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : company.url,
  ),
  title: {
    default: "Cool Media | Gaziantep Dijital Reklam ve Tasarım Ajansı",
    template: "%s | Cool Media",
  },
  description:
    "Gaziantep reklam ajansı Cool Media ile markanızı büyütün. Sosyal medya yönetimi, web tasarım, fotoğraf, video prodüksiyon, açık hava reklamcılığı ve promosyon ürünler.",
  keywords: [
    "Gaziantep reklam ajansı",
    "Gaziantep sosyal medya yönetimi",
    "Gaziantep web tasarım",
    "dijital pazarlama",
    "Cool Media",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Cool Media",
  },
  twitter: { card: "summary_large_image", site: "@coolmediatr" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  url: company.url,
  email: company.email,
  telephone: company.phone,
  foundingDate: String(company.founded),
  slogan: company.slogan,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pancarlı, 58112 Sk. No: 2/1",
    addressLocality: "Şehitkamil",
    addressRegion: "Gaziantep",
    postalCode: "27000",
    addressCountry: "TR",
  },
  sameAs: company.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${urbanist.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
