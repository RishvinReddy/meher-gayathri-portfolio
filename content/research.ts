export interface ResearchThemeItem {
  id: string;
  num: string;
  title: string;
  badge: string;
  description: string;
  documentedFocus: string[];
  problemArea: string;
  relevance: string;
  relatedProjects: {
    id: string;
    title: string;
    year: string;
  }[];
  scholarlyScope: string;
}

export interface ResearchMethodology {
  title: string;
  category: string;
  description: string;
  documentedApplications: string[];
}

export interface ResearchDomain {
  id: string;
  title: string;
  badge: string;
  focus: string;
  problemArea: string;
  relevance: string;
  relatedProjects: string[];
}

/**
 * 5 Consolidated Scholarly Research Themes
 * Grounded strictly in documented competencies from the resume:
 * Information Security, Cybersecurity GRC, Blockchain, Privacy, IoT Security,
 * Visual Cryptography, and Secure Online Voting Systems.
 */
export const consolidatedThemes: ResearchThemeItem[] = [
  {
    id: "infosec-governance",
    num: "01",
    title: "Information Security and Cybersecurity Governance",
    badge: "Disciplinary Foundation & GRC",
    description: "Investigating foundational defensive security principles, enterprise cybersecurity risk management, compliance awareness, and organizational resilience against emerging threat vectors.",
    documentedFocus: [
      "Information security principles and enterprise threat surface analysis",
      "Cybersecurity Governance, Risk Management & Compliance (GRC)",
      "Vulnerability assessment, policy compliance, and security audit readiness",
      "Organizational resilience and workforce security awareness"
    ],
    problemArea: "Bridging the critical gap between technical vulnerability mitigation and high-level organizational risk governance, compliance mandates, and defensive posture.",
    relevance: "Essential for establishing proactive security frameworks, regulatory compliance, and resilient computing systems across academic and enterprise infrastructures.",
    relatedProjects: [
      {
        id: "malicious-pdf-detection",
        title: "Malicious PDF File Detection",
        year: "2019"
      }
    ],
    scholarlyScope: "Encompasses curriculum delivery at Woxsen University and enterprise security governance frameworks."
  },
  {
    id: "blockchain-security",
    num: "02",
    title: "Blockchain and Smart Contract Security",
    badge: "Decentralized Systems & Consensus",
    description: "Examining decentralized architectures, consensus reliability, smart contract security, and cryptographic verification on tamper-evident distributed ledgers.",
    documentedFocus: [
      "Distributed ledger architectures and cryptographic consensus mechanisms",
      "Smart contract development and vulnerability analysis (Ethereum & Hyperledger)",
      "Immutable transaction auditing and verifiable decentralized state transition",
      "Decentralized identity verification protocols"
    ],
    problemArea: "Vulnerabilities in decentralized logic execution, consensus trust assumptions, and irreversible state changes on distributed ledgers.",
    relevance: "Enables tamper-resistant, verifiable, and transparent architectures for digital governance, verifiable credentials, and decentralized applications.",
    relatedProjects: [
      {
        id: "secure-voting-blockchain-visual-cryptography",
        title: "Secure Online Voting Using Blockchain and Visual Cryptography",
        year: "2021"
      }
    ],
    scholarlyScope: "Core component of doctoral research and postgraduate curriculum development."
  },
  {
    id: "privacy-data-protection",
    num: "03",
    title: "Privacy and Data Protection",
    badge: "Confidentiality & Secrecy Protocols",
    description: "Developing techniques and architectural models ensuring data confidentiality, user anonymity, and cryptographic privacy preservation in multi-tenant and distributed platforms.",
    documentedFocus: [
      "Privacy-preserving computation and credential protection",
      "Confidential data exchange in untrusted environments",
      "User identity anonymization and unlinkable interaction protocols",
      "Regulatory alignment with global data privacy principles"
    ],
    problemArea: "Unauthorized exposure of user identity, communication eavesdropping, and inadequate privacy controls in distributed digital environments.",
    relevance: "Critical for safeguarding user fundamental rights, maintaining user trust, and complying with stringent statutory data protection standards.",
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
    scholarlyScope: "Intersects doctoral dissertation inquiries and applied cryptography research."
  },
  {
    id: "iot-security",
    num: "04",
    title: "IoT Security and Distributed Access Control",
    badge: "Constrained & Edge Architectures",
    description: "Exploring access control frameworks, lightweight authentication protocols, and threat mitigation models tailored for resource-constrained IoT nodes communicating with distributed cloud services.",
    documentedFocus: [
      "Identity-based access control (IBAC) frameworks for distributed services",
      "Resource-constrained device authentication protocols",
      "End-to-end security pipelines from IoT edge sensors to distributed cloud storage",
      "Access policy enforcement across heterogeneous connected devices"
    ],
    problemArea: "Severe computational limitations, lack of unified identity management, and expansive perimeter vulnerabilities in distributed edge-to-cloud deployments.",
    relevance: "Provides scalable security architectures as billions of heterogeneous edge sensors integrate into distributed cloud backends.",
    relatedProjects: [
      {
        id: "identity-access-control-iot-cloud",
        title: "Identity-Based Access Control Framework for Distributed Cloud Services in IoT",
        year: "2018"
      }
    ],
    scholarlyScope: "Published in peer-reviewed venue and integrated into cloud & IoT coursework."
  },
  {
    id: "visual-cryptography-voting",
    num: "05",
    title: "Visual Cryptography and Secure Voting Systems",
    badge: "Doctoral Focus & Optical Verification",
    description: "Investigating secret sharing schemes and optical cryptography protocols where encrypted shares are evaluated and reconstructed visually without relying on complex, vulnerable client-side electronic software.",
    documentedFocus: [
      "$(k, n)$-Threshold secret sharing and optical share decomposition",
      "Human visual system (HVS) decoding without algorithmic computation",
      "Verifiable electronic voting mechanisms ensuring ballot secrecy",
      "Dual-layer verification combining visual shares with distributed ledger immutability"
    ],
    problemArea: "Resolving the fundamental tension in electronic voting: ensuring end-to-end voter verification and tamper-evidence while strictly preserving ballot secrecy and preventing coercion.",
    relevance: "Offers information-theoretic security guarantees and transparent, human-verifiable ballot inspection for democratic civic governance.",
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
    scholarlyScope: "Primary focus of Ph.D. research at Vellore Institute of Technology (VIT)."
  }
];

/**
 * Documented Research Methodologies & Technical Foundations
 * Strictly based on tools and techniques documented in the resume.
 */
export const researchMethodologies: ResearchMethodology[] = [
  {
    title: "Optical Secret Sharing Schemes",
    category: "Visual Cryptography",
    description: "Decomposing sensitive graphical data into randomized visual transparency shares using $(k, n)$-threshold schemes. Verification is achieved by physical superposition, eliminating dependencies on vulnerable local decryption execution.",
    documentedApplications: ["Ballot secrecy preservation", "Visual credential verification", "Threshold secret reconstruction"]
  },
  {
    title: "Decentralized Ledger Verification",
    category: "Blockchain Protocols",
    description: "Designing verifiable, append-only state ledgers using Ethereum and Hyperledger frameworks. Utilizing consensus mechanisms and smart contract execution to guarantee non-repudiation and cryptographic auditability.",
    documentedApplications: ["E-voting transaction immutability", "Decentralized audit logging", "Smart contract security analysis"]
  },
  {
    title: "Cryptographic Heuristics & Static Analysis",
    category: "Information Security",
    description: "Applying RSA cryptographic principles, entropy assessment, and string detection algorithms to identify malicious payloads and embedded exploit signatures within document files and binary payloads.",
    documentedApplications: ["Malicious PDF file detection", "Cryptographic signature validation", "Static payload inspection"]
  },
  {
    title: "Identity-Based Access Management (IBAC)",
    category: "IoT & Distributed Cloud",
    description: "Architecting decentralized access control policies that map entity identities directly to cryptographic authorization capabilities, reducing overhead on resource-constrained embedded edge devices.",
    documentedApplications: ["Heterogeneous IoT node authorization", "Distributed cloud API security", "Least-privilege policy enforcement"]
  },
  {
    title: "Computer Vision & Matrix Transformations",
    category: "Image Processing & Analysis",
    description: "Utilizing Python-based matrix manipulation and digital image processing techniques for pixel-level feature extraction, optical share alignment, and automated spatial anomaly detection.",
    documentedApplications: ["Optical share alignment", "Traffic density calculation", "Spatial matrix manipulation"]
  }
];

/**
 * Backward compatibility: original 7 research domains
 */
export const researchThemes: ResearchDomain[] = [
  {
    id: "information-security",
    title: "Information Security",
    badge: "Core Discipline",
    focus: "Principles, defensive mechanisms, and cryptographic methods that safeguard computing systems, networks, and organizational assets against unauthorized access and cyber threats.",
    problemArea: "Evolving attack vectors, network perimeter vulnerabilities, and data breaches across organizational digital infrastructure.",
    relevance: "Fundamental to building resilient computing systems and protecting sensitive information across enterprise and academic environments.",
    relatedProjects: ["Malicious PDF File Detection"]
  },
  {
    id: "cybersecurity-grc",
    title: "Cybersecurity Governance and Risk Management",
    badge: "Governance & Resilience",
    focus: "Assessing cybersecurity risks, establishing compliance frameworks, conducting security audits, and aligning technical safeguards with organizational policy and standards.",
    problemArea: "Bridging technical vulnerability management with organizational governance, compliance mandates, and risk mitigation strategies.",
    relevance: "Ensures organizations establish proactive resilience, compliance awareness, and systematic security governance.",
    relatedProjects: []
  },
  {
    id: "blockchain-security",
    title: "Blockchain and Smart Contract Security",
    badge: "Decentralized Systems",
    focus: "Investigating distributed ledger architectures, consensus mechanisms, smart contract development, and security protocols in blockchain platforms such as Ethereum and Hyperledger.",
    problemArea: "Vulnerabilities in decentralized logic, consensus reliability, and cryptographic verification on tamper-evident distributed ledgers.",
    relevance: "Provides immutable, verifiable, and transparent mechanisms for decentralized applications and identity verification.",
    relatedProjects: ["Secure Online Voting Using Blockchain and Visual Cryptography"]
  },
  {
    id: "privacy",
    title: "Privacy",
    badge: "Confidentiality & Secrecy",
    focus: "Techniques and frameworks ensuring data confidentiality, user privacy preservation, and secure access across multi-user environments.",
    problemArea: "Unauthorized exposure of user identity, communication interception, and inadequate privacy controls in distributed systems.",
    relevance: "Essential for maintaining trust and compliance with emerging privacy regulations across digital platforms.",
    relatedProjects: [
      "Secure Online Voting Using Blockchain and Visual Cryptography",
      "Secure Online Voting Using Visual Cryptography"
    ]
  },
  {
    id: "iot-security",
    title: "IoT Security",
    badge: "Connected Systems",
    focus: "Access control frameworks, authentication protocols, and security models tailored for Internet of Things (IoT) devices communicating with distributed cloud services.",
    problemArea: "Security limitations, identity management, and access control challenges in resource-constrained IoT nodes operating across distributed cloud environments.",
    relevance: "Addresses security requirements as billions of edge and IoT devices connect to shared cloud services.",
    relatedProjects: ["Identity-Based Access Control Framework for Distributed Cloud Services in IoT"]
  },
  {
    id: "visual-cryptography",
    title: "Visual Cryptography",
    badge: "Doctoral Focus",
    focus: "Secret sharing schemes and optical cryptography where secret information is divided into shares that can be decrypted visually without complex electronic computational processing.",
    problemArea: "Secure transmission and verification of secret ballots or credentials without relying on vulnerable client-side software.",
    relevance: "Offers information-theoretic security and human visual system decoding for authentication and secret verification.",
    relatedProjects: [
      "Secure Online Voting Using Blockchain and Visual Cryptography",
      "Secure Online Voting Using Visual Cryptography"
    ]
  },
  {
    id: "online-voting",
    title: "Secure Online Voting Systems",
    badge: "Applied Verification",
    focus: "Electronic voting models designed to preserve voter privacy and secret ballot integrity while ensuring verifiable election outcomes.",
    problemArea: "Balancing ballot secrecy with verifiable tallying and preventing tampering in online election systems.",
    relevance: "Critical for establishing integrity, trust, and tamper-resistance in digital governance and civic participation.",
    relatedProjects: [
      "Secure Online Voting Using Blockchain and Visual Cryptography",
      "Secure Online Voting Using Visual Cryptography"
    ]
  }
];
