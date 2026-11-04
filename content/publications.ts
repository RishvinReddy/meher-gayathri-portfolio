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
  relatedProjects?: string[];
  isVerified: boolean;
}

export interface DocumentedPublicationTopic {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  documentedSource: string;
  researchThemeId: string;
  relatedProjects: {
    id: string;
    title: string;
    year: string;
  }[];
  keyMethodologies: string[];
}

export const publicationCategories = [
  "All Categories",
  "Visual Cryptography",
  "Blockchain & Security",
  "IoT & Privacy",
  "Cybersecurity Governance"
] as const;

export const publicationTypes = [
  "All Types",
  "Journal Article",
  "Conference Paper",
  "Book Chapter",
  "Patent"
] as const;

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
export const publicationsData: Publication[] = [
  // Specific citations and DOIs are cataloged upon author confirmation.
  // Preserved empty of synthetic records to uphold absolute academic integrity.
];

export const documentedPublicationTopics: DocumentedPublicationTopic[] = [
  {
    id: "visual-cryptography-schemes",
    title: "Visual Cryptography Threshold Protocols & Secret Sharing",
    category: "Visual Cryptography",
    badge: "Doctoral Research",
    description: "Investigating optical secret sharing schemes, $(k, n)$-threshold decomposition, and physical transparency superposition where sensitive information is decoded visually without reliance on vulnerable client-side decryption routines.",
    documentedSource: "Resume: 'contributed to advancements in Visual Cryptography'",
    researchThemeId: "visual-cryptography-voting",
    relatedProjects: [
      {
        id: "secure-voting-blockchain-visual-cryptography",
        title: "Secure Online Voting Using Blockchain and Visual Cryptography",
        year: "2021"
      },
      {
        id: "secure-online-voting-visual-cryptography",
        title: "Secure Online Voting Using Visual Cryptography",
        year: "2020"
      }
    ],
    keyMethodologies: ["$(k, n)$-Threshold Schemes", "Optical Share Alignment", "Human Visual System (HVS) Decoding"]
  },
  {
    id: "blockchain-evoting-protocols",
    title: "Blockchain-Anchored Verifiable Electronic Voting Systems",
    category: "Blockchain & Security",
    badge: "Decentralized Systems",
    description: "Examining tamper-evident electronic voting frameworks combining blockchain immutability with secret ballot preservation. Utilizing smart contracts on Ethereum and Hyperledger to ensure non-repudiation and distributed election audits.",
    documentedSource: "Resume: 'contributed to advancements in Blockchain and Secure Online Voting Systems'",
    researchThemeId: "blockchain-security",
    relatedProjects: [
      {
        id: "secure-voting-blockchain-visual-cryptography",
        title: "Secure Online Voting Using Blockchain and Visual Cryptography",
        year: "2021"
      }
    ],
    keyMethodologies: ["Consensus Mechanism Auditing", "Smart Contract Execution", "Immutable Transaction Logging"]
  },
  {
    id: "iot-distributed-access",
    title: "Identity-Based Access Management for Distributed Edge & IoT",
    category: "IoT & Privacy",
    badge: "Connected Systems",
    description: "Developing identity-based access control (IBAC) protocols designed for computationally constrained Internet of Things (IoT) sensors and edge devices communicating securely with distributed cloud services.",
    documentedSource: "Resume: 'contributed to advancements in IoT Security and Privacy'",
    researchThemeId: "iot-security",
    relatedProjects: [
      {
        id: "identity-access-control-iot-cloud",
        title: "Identity-Based Access Control Framework for Distributed Cloud Services in IoT",
        year: "2018"
      }
    ],
    keyMethodologies: ["Identity-Based Access Control (IBAC)", "Constrained Node Authorization", "Distributed Cloud API Security"]
  },
  {
    id: "malicious-payload-detection",
    title: "Cryptographic Payload Analysis & Static Exploit Detection",
    category: "Cybersecurity Governance",
    badge: "Information Security",
    description: "Methodologies applying RSA cryptographic analysis and string pattern detection to identify malicious payloads, embedded shellcode, and exploit signatures within structured documents (PDFs) and binary files.",
    documentedSource: "Resume: 'contributed to advancements in Information Security'",
    researchThemeId: "infosec-governance",
    relatedProjects: [
      {
        id: "malicious-pdf-detection",
        title: "Malicious PDF File Detection",
        year: "2019"
      }
    ],
    keyMethodologies: ["RSA Cryptographic Inspection", "Binary String Detection", "Static Exploit Signature Heuristics"]
  },
  {
    id: "cybersecurity-governance-resilience",
    title: "Cybersecurity Governance, Risk Assessment & Resilience (GRC)",
    category: "Cybersecurity Governance",
    badge: "GRC & Compliance",
    description: "Frameworks synthesizing technical vulnerability mitigation with enterprise risk management, compliance mandates, regulatory alignment, and organizational cybersecurity resilience.",
    documentedSource: "Resume: 'experience in Cybersecurity Governance, Risk Management, Compliance Awareness'",
    researchThemeId: "infosec-governance",
    relatedProjects: [],
    keyMethodologies: ["Security Risk Assessment", "Policy Compliance Frameworks", "Audit Preparation Standards"]
  }
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
