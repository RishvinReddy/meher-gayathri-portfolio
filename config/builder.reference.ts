/**
 * BUILDER REFERENCE PROFILE — PRIVATE ARCHITECTURAL CONFIGURATION
 * ===============================================================
 * STRICT ISOLATION NOTICE:
 * This module contains builder reference data for Rishvin Reddy.
 * 
 * CRITICAL ARCHITECTURAL CONSTRAINTS:
 * 1. DO NOT import this file into any public route, layout, page, component,
 *    or public SEO module (e.g., config/seo.ts, app/**, components/**).
 * 2. DO NOT expose these URLs or identities in public metadata, JSON-LD,
 *    sitemaps, robots.txt, Open Graph, Twitter cards, or rendered HTML.
 * 3. This portfolio belongs exclusively to Meher Gayatri Devi Tiwari.
 *    Rishvin Reddy's profile is maintained strictly as an isolated developer/
 *    builder reference and is excluded from all runtime client bundles.
 */

export interface BuilderReferenceProfile {
  readonly name: string;
  readonly role: string;
  readonly links: {
    readonly portfolio: string;
    readonly labs: string;
    readonly github: string;
    readonly linkedin: string;
  };
  readonly notes: string;
}

export const BUILDER_REFERENCE_PROFILE: BuilderReferenceProfile = {
  name: "Rishvin Reddy",
  role: "Builder & Full-Stack System Architect",
  links: {
    portfolio: "https://rishvinreddy.vercel.app",
    labs: "https://rishvin-labs.vercel.app",
    github: "https://github.com/RishvinReddy",
    linkedin: "https://www.linkedin.com/in/rishvinreddy/",
  },
  notes:
    "Private developer reference configuration. Completely isolated from Meher Gayatri Devi Tiwari's public academic portfolio.",
} as const;

