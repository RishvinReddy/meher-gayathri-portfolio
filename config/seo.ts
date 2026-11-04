/**
 * MEHER GAYATRI DEVI TIWARI — PUBLIC SEO & METADATA ARCHITECTURE
 * ==============================================================
 * This module is the single source of truth for all PUBLIC metadata,
 * Open Graph cards, Twitter metadata, Schema.org JSON-LD, sitemap, and robots.
 * 
 * IDENTITY ISOLATION GUARANTEE:
 * - Represents exclusively Meher Gayatri Devi Tiwari's academic profile.
 * - Sourced strictly from verified academic credentials at Woxsen University and VIT.
 * - Completely isolated from any builder/developer reference profiles.
 * - Private telephone numbers and residential addresses are strictly excluded.
 */

import type { Metadata } from "next";

/**
 * Normalizes and resolves the canonical production site origin.
 * Evaluates NEXT_PUBLIC_SITE_URL, ensures protocol, strips trailing slashes,
 * and defaults safely to the canonical academic domain if unset or malformed.
 */
export function getCanonicalOrigin(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && typeof envUrl === "string" && envUrl.trim() !== "") {
    const trimmed = envUrl.trim().replace(/\/+$/, "");
    try {
      const parsed = new URL(trimmed);
      return parsed.origin;
    } catch {
      try {
        const parsed = new URL(`https://${trimmed}`);
        return parsed.origin;
      } catch {
        // Fallback on invalid URL
      }
    }
  }
  return "https://mehergayatritiwari.academic";
}

export const CANONICAL_ORIGIN = getCanonicalOrigin();

/**
 * Public academic identity and verified affiliations.
 * Contains only details approved for public metadata and search engines.
 * Private telephone and residential addresses are strictly excluded for privacy.
 */
export const PUBLIC_ACADEMIC_IDENTITY = {
  name: "Meher Gayatri Devi Tiwari",
  jobTitle: "Assistant Professor",
  institution: "Woxsen University",
  institutionUrl: "https://woxsen.edu.in",
  institutionLocation: "Hyderabad, Telangana, India",
  doctoralAffiliation: "Vellore Institute of Technology (VIT)",
  doctoralUrl: "https://vit.ac.in",
  degrees: ["M.Tech in Information Security", "B.Tech in Information Technology"],
  publicEmail: "mehergayatri17@gmail.com",
  linkedin: "https://www.linkedin.com/in/meher-gayatri-devi-tiwari",
  researchDomains: [
    "Information Security",
    "Cybersecurity Governance",
    "Risk Management & Compliance (GRC)",
    "Blockchain Security",
    "Visual Cryptography",
    "IoT Security & Privacy Protocols",
  ],
} as const;

export interface RouteMetadataConfig {
  path: string;
  title: string;
  description: string;
  ogType: "website" | "profile";
  searchPhrases: readonly string[];
  priority: number;
  changeFrequency: "weekly" | "monthly";
  lastModified: string;
}

/**
 * Concrete route metadata map for every public page in the portfolio.
 * Sourced strictly from verified page content.
 */
export const ROUTE_METADATA_MAP: Record<string, RouteMetadataConfig> = {
  "/": {
    path: "/",
    title: "Meher Gayatri Devi Tiwari | Academic & Cybersecurity Portfolio",
    description:
      "Official academic portfolio of Meher Gayatri Devi Tiwari — Assistant Professor at Woxsen University and Ph.D. Scholar at VIT. Exploring Information Security, Cryptography, Blockchain, and Privacy.",
    ogType: "website",
    searchPhrases: [
      "Meher Gayatri Devi Tiwari",
      "Assistant Professor Woxsen University",
      "Information Security Researcher VIT",
      "Cybersecurity Governance GRC",
      "Blockchain Smart Contract Security",
    ],
    priority: 1.0,
    changeFrequency: "weekly",
    lastModified: "2026-11-04",
  },
  "/about": {
    path: "/about",
    title: "Academic Biography & Career",
    description:
      "Formal academic biography of Meher Gayatri Devi Tiwari, Assistant Professor at Woxsen University and Ph.D. Scholar at VIT. Details degrees, appointments, and technical expertise.",
    ogType: "profile",
    searchPhrases: [
      "Meher Gayatri Devi Tiwari biography",
      "Academic credentials MTech InfoSec",
      "Assistant Professor School of Technology Woxsen",
      "VIT Ph.D. Research Scholar Information Security",
      "Cybersecurity academic appointments",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/research": {
    path: "/research",
    title: "Research Specializations & Agendas",
    description:
      "Empirical research program of Meher Gayatri Devi Tiwari: applied cryptography, blockchain distributed systems, visual cryptography, and cybersecurity risk governance.",
    ogType: "website",
    searchPhrases: [
      "Visual cryptography research",
      "Blockchain distributed ledger security",
      "Cybersecurity Governance Risk and Compliance GRC",
      "IoT edge access control protocols",
      "Empirical information security research",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/publications": {
    path: "/publications",
    title: "Scholarly Publications Repository",
    description:
      "Peer-reviewed journal contributions, conference proceedings, and scholarly manuscripts authored by Meher Gayatri Devi Tiwari in Information Security and Cryptography.",
    ogType: "website",
    searchPhrases: [
      "Meher Gayatri Devi Tiwari publications",
      "Peer-reviewed cryptography research papers",
      "Electronic voting blockchain papers",
      "Threshold visual cryptography publications",
      "Information security conference proceedings",
    ],
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/teaching": {
    path: "/teaching",
    title: "Teaching Pedagogy & Student Mentorship",
    description:
      "University teaching portfolio of Meher Gayatri Devi Tiwari — 5+ years instructing undergraduate and postgraduate courses in Information Technology and supervising capstones.",
    ogType: "website",
    searchPhrases: [
      "Information technology university teaching",
      "Cybersecurity course pedagogy",
      "Undergraduate student capstone mentorship",
      "Woxsen University engineering courses",
      "Computer Science curriculum instruction",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/projects": {
    path: "/projects",
    title: "Verified Technical Systems & Projects",
    description:
      "Verified engineering and academic systems built by Meher Gayatri Devi Tiwari, spanning blockchain voting, visual cryptography, IoT security, and defensive malware analysis.",
    ogType: "website",
    searchPhrases: [
      "Secure online voting blockchain visual cryptography",
      "Identity-based access control IoT framework",
      "Malicious PDF file detection Python",
      "Traffic density mobile alert system",
      "Verified engineering prototypes Meher Gayatri",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/achievements": {
    path: "/achievements",
    title: "Academic Honors & Collegiate Accolades",
    description:
      "Documented technical honors, collegiate competition awards, program management achievements, and environmental leadership initiatives of Meher Gayatri Devi Tiwari.",
    ogType: "website",
    searchPhrases: [
      "Academic honors Meher Gayatri Devi Tiwari",
      "Collegiate technical symposium awards",
      "Institutional program management milestones",
      "Student technical leadership recognition",
      "Environmental and social responsibility initiatives",
    ],
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
  "/contact": {
    path: "/contact",
    title: "Academic Correspondence & Campus Directory",
    description:
      "Contact Meher Gayatri Devi Tiwari, Assistant Professor at Woxsen University and Ph.D. Scholar at VIT. Direct academic email, campus coordinates, and collaboration inquiry protocols.",
    ogType: "website",
    searchPhrases: [
      "Contact Meher Gayatri Devi Tiwari",
      "Woxsen University faculty office directory",
      "Academic collaboration inquiry protocol",
      "Research partnership information security",
      "Institutional peer review correspondence",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
    lastModified: "2026-11-04",
  },
};

/**
 * Generates page-specific Next.js Metadata for any registered route.
 * Includes graceful fallback for unmapped or missing routes.
 */
export function generateRouteMetadata(path: string): Metadata {
  const config = ROUTE_METADATA_MAP[path];
  const origin = getCanonicalOrigin();

  // Route discovery fallback for unmapped/missing routes
  if (!config) {
    return {
      title: "Academic Portfolio",
      description:
        "Official academic and research portfolio of Meher Gayatri Devi Tiwari, Assistant Professor at Woxsen University and Ph.D. Scholar at VIT.",
      alternates: {
        canonical: `${origin}${path}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const isRoot = config.path === "/";
  const canonicalUrl = isRoot ? origin : `${origin}${config.path}`;
  const fullTitle = isRoot ? config.title : `${config.title} | ${PUBLIC_ACADEMIC_IDENTITY.name}`;

  return {
    title: config.title,
    description: config.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: config.description,
      url: canonicalUrl,
      siteName: `${PUBLIC_ACADEMIC_IDENTITY.name} — Academic Portfolio`,
      locale: "en_US",
      type: config.ogType,
      images: [
        {
          url: `${origin}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${PUBLIC_ACADEMIC_IDENTITY.name} — Academic and Research Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: config.description,
      images: [`${origin}/images/og-image.jpg`],
    },
  };
}

/**
 * Generates Schema.org Person structured data.
 * Excludes private telephone and sensitive personal details.
 */
export function getPersonStructuredData() {
  const origin = getCanonicalOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/#person`,
    name: PUBLIC_ACADEMIC_IDENTITY.name,
    jobTitle: PUBLIC_ACADEMIC_IDENTITY.jobTitle,
    description:
      "Assistant Professor in Information Technology at Woxsen University and Ph.D. Research Scholar in Information Security at Vellore Institute of Technology (VIT).",
    url: origin,
    image: `${origin}/images/profile.jpg`,
    worksFor: {
      "@type": "EducationalOrganization",
      name: PUBLIC_ACADEMIC_IDENTITY.institution,
      url: PUBLIC_ACADEMIC_IDENTITY.institutionUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "502345",
        addressCountry: "IN",
      },
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: PUBLIC_ACADEMIC_IDENTITY.doctoralAffiliation,
        url: PUBLIC_ACADEMIC_IDENTITY.doctoralUrl,
      },
      {
        "@type": "EducationalOrganization",
        name: "SRM Institute of Science and Technology",
      },
    ],
    sameAs: [PUBLIC_ACADEMIC_IDENTITY.linkedin],
    knowsAbout: [...PUBLIC_ACADEMIC_IDENTITY.researchDomains],
    email: `mailto:${PUBLIC_ACADEMIC_IDENTITY.publicEmail}`,
  };
}

/**
 * Generates Schema.org WebSite structured data.
 */
export function getWebSiteStructuredData() {
  const origin = getCanonicalOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: `${PUBLIC_ACADEMIC_IDENTITY.name} — Academic Portfolio`,
    url: origin,
    description:
      "Official academic portfolio of Meher Gayatri Devi Tiwari, Assistant Professor at Woxsen University and Ph.D. Scholar at VIT.",
    author: {
      "@type": "Person",
      name: PUBLIC_ACADEMIC_IDENTITY.name,
      "@id": `${origin}/#person`,
    },
    inLanguage: "en-US",
  };
}

