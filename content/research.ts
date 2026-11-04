export interface ResearchDomain {
  id: string;
  title: string;
  badge: string;
  focus: string;
  problemArea: string;
  relevance: string;
  relatedProjects: string[];
}

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
