export interface Project {
  id: string;
  title: string;
  year: string;
  domains: string[];
  summary: string;
  verifiedTags: string[];
  category: "All Projects" | "Visual Cryptography" | "Blockchain" | "IoT & Cloud" | "Malware Analysis" | "Computer Vision";
  technicalMethods: string[];
  researchThemeId: string;
  researchThemeTitle: string;
  scholarlyContext: string;
  documentedSource: string;
  featured?: boolean;
}

export const projectCategories = [
  "All Projects",
  "Visual Cryptography",
  "Blockchain",
  "IoT & Cloud",
  "Malware Analysis",
  "Computer Vision"
] as const;

export const projectsData: Project[] = [
  {
    id: "secure-voting-blockchain-visual-cryptography",
    title: "Secure Online Voting Using Blockchain and Visual Cryptography",
    year: "2021",
    domains: ["Blockchain", "Visual Cryptography"],
    summary: "Research and engineering project investigating verifiable electronic voting mechanisms through the dual integration of blockchain distributed ledger technology and visual cryptography secret sharing.",
    verifiedTags: ["Blockchain", "Visual Cryptography"],
    category: "Blockchain",
    technicalMethods: [
      "Visual Cryptography Secret Sharing",
      "Blockchain Distributed Ledger Immutability",
      "Tamper-Evident Ballot Verification",
      "Decentralized Consensus Protocols"
    ],
    researchThemeId: "visual-cryptography-voting",
    researchThemeTitle: "Visual Cryptography & Secure Voting Systems",
    scholarlyContext: "Addresses the fundamental tension in electronic voting by combining optical secret sharing for ballot secrecy with immutable distributed ledger transactions for non-repudiable election tallying.",
    documentedSource: "Curriculum Vitae: Projects (2021)",
    featured: true
  },
  {
    id: "secure-online-voting-visual-cryptography",
    title: "Secure Online Voting Using Visual Cryptography",
    year: "2020",
    domains: ["Visual Cryptography", "Web Designing"],
    summary: "System design exploring visual cryptography algorithms applied to secure online ballot decomposition, transparency distribution, and web-based voter interface design.",
    verifiedTags: ["Visual Cryptography", "Web Designing"],
    category: "Visual Cryptography",
    technicalMethods: [
      "$(k, n)$-Threshold Secret Sharing",
      "Optical Share Decomposition",
      "Human Visual System (HVS) Decoding",
      "Web-Based Verification Interface"
    ],
    researchThemeId: "visual-cryptography-voting",
    researchThemeTitle: "Visual Cryptography & Secure Voting Systems",
    scholarlyContext: "Investigates information-theoretic security where encrypted ballot shares can be verified optically without relying on vulnerable client-side electronic software or decryption keys.",
    documentedSource: "Curriculum Vitae: Projects (2020)",
    featured: false
  },
  {
    id: "identity-access-control-iot-cloud",
    title: "Identity-Based Access Control Framework for Distributed Cloud Services in IoT",
    year: "2018",
    domains: ["Cloud Computing", "IoT"],
    summary: "Architectural security framework linking identity-based access control (IBAC) with distributed cloud endpoints to provide scalable, policy-driven authorization for resource-constrained IoT devices.",
    verifiedTags: ["Cloud Computing", "IoT"],
    category: "IoT & Cloud",
    technicalMethods: [
      "Identity-Based Access Control (IBAC)",
      "Distributed Cloud API Security",
      "Resource-Constrained Device Authorization",
      "End-to-End Threat Surface Reduction"
    ],
    researchThemeId: "iot-security",
    researchThemeTitle: "IoT Security & Distributed Access Control",
    scholarlyContext: "Addresses authorization overhead and perimeter security challenges when heterogeneous edge sensors communicate with distributed, multi-tenant cloud storage infrastructures.",
    documentedSource: "Curriculum Vitae: Projects (2018)",
    featured: false
  },
  {
    id: "malicious-pdf-detection",
    title: "Malicious PDF File Detection",
    year: "2019",
    domains: ["RSA", "String Detection"],
    summary: "Defensive inspection methodology applying RSA cryptographic principles and string detection heuristics to identify malicious portable document format (PDF) files and embedded exploit payloads.",
    verifiedTags: ["RSA", "String Detection"],
    category: "Malware Analysis",
    technicalMethods: [
      "RSA Cryptographic Inspection",
      "Binary String Pattern Matching",
      "Static Exploit Signature Heuristics",
      "Document Stream Anomaly Analysis"
    ],
    researchThemeId: "infosec-governance",
    researchThemeTitle: "Information Security & Cybersecurity Governance",
    scholarlyContext: "Explores static analysis heuristics to detect suspicious payload patterns and embedded code structures within complex document formats prior to runtime execution.",
    documentedSource: "Curriculum Vitae: Projects (2019)",
    featured: false
  },
  {
    id: "traffic-density-detection-mobile-alert",
    title: "Traffic Density Detection Using Mobile Alert System",
    year: "2018",
    domains: ["Python", "Image Processing"],
    summary: "Automated traffic monitoring prototype applying computer vision and digital image processing algorithms in Python to calculate road density metrics and dispatch automated mobile notifications.",
    verifiedTags: ["Python", "Image Processing"],
    category: "Computer Vision",
    technicalMethods: [
      "Python Matrix Operations",
      "Digital Image Processing Filters",
      "Pixel-Level Feature Extraction",
      "Automated Mobile Notification Protocol"
    ],
    researchThemeId: "infosec-governance",
    researchThemeTitle: "Applied Computing & Empirical Analysis",
    scholarlyContext: "Demonstrates practical algorithmic implementation, processing spatial image matrices to evaluate density anomalies and trigger automated, event-driven communications.",
    documentedSource: "Curriculum Vitae: Projects (2018)",
    featured: false
  }
];
