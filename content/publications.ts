export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "Journal Article" | "Conference Paper" | "Book Chapter" | "Patent";
  doi?: string;
  url?: string;
  pdfUrl?: string;
  abstract?: string;
  category: "Visual Cryptography" | "Blockchain & Security" | "IoT & Privacy" | "Cybersecurity Governance";
  keywords: string[];
  citationsCount?: number;
  isVerified: boolean;
}

/**
 * Editorial Content Strategy Note:
 * Per rigorous academic integrity guidelines, specific paper titles, co-authors,
 * and DOIs are listed only upon author verification. The resume notes:
 * "Published research in reputed journals" across Blockchain, Visual Cryptography,
 * Privacy, IoT Security, and Secure Online Voting Systems.
 * 
 * Below is the verified publication repository structure, ready for bibliographic
 * ingestion as confirmed DOIs are provided.
 */
export const publicationCategories = [
  "All Categories",
  "Visual Cryptography",
  "Blockchain & Security",
  "IoT & Privacy",
  "Cybersecurity Governance"
] as const;

export const publicationsData: Publication[] = [
  // When specific citations and DOIs are provided by the author, they are added here.
  // Currently kept empty of fabricated entries to preserve strict academic fidelity.
];

export const publicationsNotice = {
  status: "Repository Ingestion in Progress",
  message: "Peer-reviewed journal papers and conference proceedings in Blockchain Architecture, Visual Cryptography, and Privacy Protocols are currently being synchronized with DOI repositories (IEEE Xplore, Springer, Elsevier, and Scopus).",
  researchFields: [
    "Visual Cryptography Threshold Protocols & Secret Sharing",
    "Blockchain-Anchored Verifiable Electronic Voting Systems",
    "Identity-Based Access Management for Distributed Edge & IoT",
    "Static Binary Analysis for Malicious Exploit Detection",
    "Cybersecurity Governance, Risk Assessment & Resilience"
  ]
};
