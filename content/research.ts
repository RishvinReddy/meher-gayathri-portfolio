export interface ResearchTheme {
  id: string;
  title: string;
  badge: string;
  overview: string;
  keyProblems: string[];
  investigations: string[];
  impact: string;
}

export const researchThemes: ResearchTheme[] = [
  {
    id: "visual-cryptography",
    title: "Visual Cryptography & Optical Secret Sharing",
    badge: "Core Doctoral Focus",
    overview: "Investigating threshold visual secret sharing (VSS) schemes where sensitive optical information is split into transparent shares. Decoding is achieved through the physical superposition of shares utilizing the human visual system (HVS), completely removing reliance on electronic computational decryption devices at the verification endpoint.",
    keyProblems: [
      "Overcoming pixel expansion ratios and contrast degradation inherent in traditional Naor-Shamir schemes.",
      "Developing non-expansible color and grayscale visual cryptographic protocols.",
      "Mitigating alignment jitter and cheater attacks in multi-party secret recovery."
    ],
    investigations: [
      "Application of (2,2) and (k,n) visual threshold models to end-to-end verifiable electronic voting ballots.",
      "Dual-layer optical authentication for multi-factor identity verification in zero-trust environments.",
      "Combining visual shares with distributed immutable ledger state proofs."
    ],
    impact: "Provides unconditional, information-theoretic security that remains resistant to quantum computing decryption attacks, as the secret reconstruction requires zero computational algorithmic processing."
  },
  {
    id: "blockchain-e-voting",
    title: "Blockchain-Anchored Verifiable E-Voting Systems",
    badge: "Applied Security",
    overview: "Architecting decentralized voting infrastructures that guarantee both individual and universal verifiability while strictly preserving secret ballot anonymity and preventing coercive vote-buying attacks.",
    keyProblems: [
      "Resolving the fundamental cryptographic tension between absolute ballot secrecy and public tally auditability.",
      "Preventing coercers from demanding verifiable proof of how a voter cast their specific ballot.",
      "Ensuring high-throughput consensus on distributed ledgers without compromising decentralization."
    ],
    investigations: [
      "Smart contract-mediated voter eligibility validation utilizing blind signatures and zero-knowledge checkpoints.",
      "Decentralized tally aggregation executing on private Ethereum and Hyperledger EVM environments.",
      "Hybrid integration of visual cryptographic physical receipts to allow receipt-freeness."
    ],
    impact: "Democratizes auditable civic elections and organizational governance through cryptographically verifiable, tamper-evident digital voting."
  },
  {
    id: "iot-privacy-cloud",
    title: "Identity-Based Access Control in Distributed Cloud-IoT",
    badge: "Distributed Systems",
    overview: "Formulating lightweight, attribute- and identity-centric access control models tailored for heterogeneous edge sensing nodes and multi-tenant distributed cloud infrastructure.",
    keyProblems: [
      "High computational complexity and energy drain of traditional PKI X.509 certificate chains on microcontrollers.",
      "Dynamic policy enforcement across distributed, intermittent edge gateways.",
      "Guarding against node impersonation and eavesdropping in low-power wireless personal area networks (6LoWPAN)."
    ],
    investigations: [
      "Identity-Based Encryption (IBE) utilizing physical node identifiers as public keys to eliminate certificate stores.",
      "Policy enforcement points (PEP) and policy decision points (PDP) co-located at edge cloud boundaries.",
      "Lightweight mutual challenge-response authentication minimizing handshake packet volume."
    ],
    impact: "Enables secure, scalable integration of millions of autonomous edge devices into cloud ecosystems without latency degradation."
  },
  {
    id: "grc-threat-governance",
    title: "Cybersecurity Governance, Risk Management & Compliance (GRC)",
    badge: "Governance & Strategy",
    overview: "Translating technical cryptographic and system vulnerabilities into quantifiable enterprise risk matrices, fostering organizational resilience and proactive compliance management.",
    keyProblems: [
      "Bridging the disconnect between low-level technical vulnerability data and executive decision-making.",
      "Rapidly adapting security postures to evolving international compliance mandates (ISO 27001, GDPR, NIST CSF).",
      "Human factor vulnerabilities and security awareness blind spots within institutional settings."
    ],
    investigations: [
      "Frameworks for continuous risk monitoring within Security Operations Centers (SOC) using SIEM analytics.",
      "Malware analysis heuristics and static string inspection routines for preemptive exploit mitigation.",
      "Curriculum strategies for training non-technical stakeholders in cybersecurity hygiene and threat awareness."
    ],
    impact: "Strengthens institutional defenses through holistic, human-centered governance, proactive auditing, and structured compliance frameworks."
  }
];

