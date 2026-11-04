import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mehergayatritiwari.academic"),
  title: "Meher Gayatri Devi Tiwari | Academic & Cybersecurity Portfolio",
  description: "Academic Portfolio of Meher Gayatri Devi Tiwari — Assistant Professor at Woxsen University, Information Security Researcher, Cybersecurity & GRC Professional.",
  keywords: [
    "Meher Gayatri Devi Tiwari",
    "Cybersecurity Researcher",
    "Assistant Professor Woxsen University",
    "Information Security",
    "Blockchain Security",
    "Visual Cryptography",
    "IoT Security",
    "Privacy Protocols",
    "VIT Vellore"
  ],
  authors: [{ name: "Meher Gayatri Devi Tiwari" }],
  creator: "Meher Gayatri Devi Tiwari",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Meher Gayatri Devi Tiwari | Academic & Cybersecurity Portfolio",
    description: "Assistant Professor at Woxsen University & Information Security Researcher. Advancing knowledge in cybersecurity, privacy, blockchain, and visual cryptography.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meher Gayatri Devi Tiwari - Academic Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meher Gayatri Devi Tiwari | Academic & Cybersecurity Portfolio",
    description: "Assistant Professor at Woxsen University & Information Security Researcher.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F6F0] text-[#292D2A] min-h-screen flex flex-col font-sans selection:bg-[#CBD7CE] selection:text-[#292D2A] antialiased">
        {/* Academic top status banner (Warm, understated, light-only) */}
        <div className="bg-[#ECE6DC] text-[#4F5651] text-xs py-1.5 px-4 text-center border-b border-[#E0D7C9] font-medium tracking-wide">
          <span>Official Academic & Research Portfolio</span>
          <span className="mx-2 opacity-50">·</span>
          <span>Assistant Professor, Woxsen University</span>
          <span className="mx-2 opacity-50">·</span>
          <span className="text-[#3B5340] font-semibold">Ph.D. Scholar, VIT</span>
        </div>

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
