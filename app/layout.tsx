import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getCanonicalOrigin,
  getPersonStructuredData,
  getWebSiteStructuredData,
  PUBLIC_ACADEMIC_IDENTITY,
  generateRouteMetadata,
} from "@/config/seo";

const origin = getCanonicalOrigin();
const rootSeo = generateRouteMetadata("/");

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Meher Gayatri Devi Tiwari | Academic & Cybersecurity Portfolio",
    template: `%s | ${PUBLIC_ACADEMIC_IDENTITY.name}`,
  },
  description: rootSeo.description,
  alternates: {
    canonical: origin,
  },
  authors: [{ name: PUBLIC_ACADEMIC_IDENTITY.name, url: origin }],
  creator: PUBLIC_ACADEMIC_IDENTITY.name,
  publisher: PUBLIC_ACADEMIC_IDENTITY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: rootSeo.openGraph,
  twitter: rootSeo.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonStructuredData();
  const websiteSchema = getWebSiteStructuredData();

  return (
    <html lang="en" className="scroll-smooth light" data-scroll-behavior="smooth" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data: Person Schema (Verified Public Academic Details Only) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Structured Data: WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body id="top" className="bg-[#F8F6F0] text-[#292D2A] min-h-screen flex flex-col font-sans selection:bg-[#CBD7CE] selection:text-[#292D2A] antialiased">
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
