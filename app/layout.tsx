import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const metadataBase = new URL(siteUrl);

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default:
      "Dottoressa Monica Mastrella | Psicologa e Psicoterapeuta ad Avezzano",
    template: "%s | Monica Mastrella",
  },
  description:
    "Psicologa e psicoterapeuta cognitivo-comportamentale ad Avezzano. Consulenze in studio e online. Percorsi per ansia, autostima, relazioni, traumi ed EMDR.",
  applicationName: "Monica Mastrella Psicologa",
  authors: [{ name: "Monica Mastrella" }],
  creator: "Monica Mastrella",
  publisher: "Monica Mastrella",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title:
      "Dottoressa Monica Mastrella | Psicologa e Psicoterapeuta ad Avezzano",
    description:
      "Consulenze in studio e online. Percorsi per ansia, autostima, relazioni, traumi ed EMDR.",
    siteName: "Monica Mastrella Psicologa",
    images: [
      {
        url: new URL("/hero.png", metadataBase),
        width: 1200,
        height: 630,
        alt: "Dottoressa Monica Mastrella, psicologa e psicoterapeuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dottoressa Monica Mastrella | Psicologa e Psicoterapeuta ad Avezzano",
    description:
      "Consulenze in studio e online. Percorsi per ansia, autostima, relazioni, traumi ed EMDR.",
    images: [new URL("/hero.png", metadataBase)],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Monica Mastrella",
      jobTitle: "Psicologa e Psicoterapeuta",
      image: new URL("/profilo_1.jpeg", metadataBase).toString(),
      email: "monicamastrella@hotmail.it",
      telephone: "3276504478",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via XX Settembre 74",
        addressLocality: "Avezzano",
        addressRegion: "Abruzzo",
        postalCode: "67051",
        addressCountry: "IT",
      },
      areaServed: ["Avezzano", "Online"],
      sameAs: [
        "https://www.instagram.com/momas_92?igsh=MWxhZWdldzc3YWo4Nw==",
        "https://www.facebook.com/share/181hsHPg6q/?mibextid=wwXIfr",
      ],
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${siteUrl}/#business`,
      name: "Monica Mastrella Psicologa e Psicoterapeuta",
      url: siteUrl,
      logo: new URL("/logo.svg", metadataBase).toString(),
      image: new URL("/profilo_1.jpeg", metadataBase).toString(),
      email: "monicamastrella@hotmail.it",
      telephone: "3276504478",
      taxID: "02108190667",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via XX Settembre 74",
        addressLocality: "Avezzano",
        addressRegion: "Abruzzo",
        postalCode: "67051",
        addressCountry: "IT",
      },
      areaServed: ["Avezzano", "Online"],
      sameAs: [
        "https://www.instagram.com/momas_92?igsh=MWxhZWdldzc3YWo4Nw==",
        "https://www.facebook.com/share/181hsHPg6q/?mibextid=wwXIfr",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${openSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
