export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  domains: string[];
  summary: string;
  problemStatement: string;
  technicalApproach: string[];
  keyOutcomes: string[];
  technologies: string[];
  status: "Completed Research" | "Peer-Reviewed Architecture";
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "secure-voting-blockchain-visual-cryptography",
    title: "Secure Online Voting Using Blockchain and Visual Cryptography",
    year: "2021",
    category: "Blockchain & Cryptographic Systems",
    domains: ["Blockchain", "Visual Cryptography", "E-Voting Security", "Decentralized Systems"],
    summary: "A dual-layer security architecture combining Ethereum-based smart contract immutability with Naor-Shamir visual cryptography to achieve end-to-end verifiable, coercive-resistant electronic elections.",
    problemStatement: "Conventional electronic voting systems suffer from single points of failure, lack of verifiable ballot secrecy, and susceptibility to server-side manipulation or coercer verification.",
    technicalApproach: [
      "Designed a split-key ballot generation mechanism using k-out-of-n visual cryptography, decomposing voter authentication tokens into optical shares.",
      "Integrated decentralized Ethereum smart contracts to ledger immutable voter eligibility tokens and anonymous vote receipts.",
      "Enabled optical physical share stacking for credential recovery without exposing the underlying voter identification during audit trials.",
      "Implemented zero-knowledge verification checkpoints to protect voter privacy while guaranteeing individual and universal tally verifiability."
    ],
    keyOutcomes: [
      "Eliminated central authority vote tampering through cryptographic distributed consensus.",
      "Ensured ballot secret preservation even in adversarial or untrusted client workstation environments.",
      "Achieved instantaneous mathematical verification of election tallies with cryptographic tamper evidence."
    ],
    technologies: ["Ethereum", "Solidity", "Visual Cryptography", "Ganache", "MetaMask", "Smart Contracts", "Python"],
    status: "Completed Research",
    isFeatured: true
  },
  {
    id: "secure-online-voting-visual-cryptography",
    title: "Secure Online Voting Using Visual Cryptography",
    year: "2020",
    category: "Visual Cryptography & Web Security",
    domains: ["Visual Cryptography", "Secret Sharing", "Web Security", "Authentication"],
    summary: "A lightweight secret sharing framework utilizing visual cryptography threshold schemes to ensure secret ballot confidentiality without computational overhead during verification.",
    problemStatement: "Voters requiring accessible, verifiable online ballot casting face severe risks of screen-capture malware, shoulder-surfing, and compromised client-side cryptographic key stores.",
    technicalApproach: [
      "Implemented a 2-out-of-2 visual secret sharing (VSS) algorithm decomposing voter credentials into two transparent noise-like shares.",
      "Stored one encrypted share on the remote authentication server while delivering the second share to the registered voter via out-of-band communication.",
      "Facilitated visual credential reconstruction through human visual perception upon physical/digital overlay, removing reliance on complex client decryption software.",
      "Architected a secured web interface implementing stringent session tokenization and anti-replay safeguards."
    ],
    keyOutcomes: [
      "Resistant to cryptographic brute-force attacks due to the unconditional information-theoretic security of visual sharing schemes.",
      "Zero computational requirement for visual decryption by the human verifier.",
      "Enhanced voter trust through intuitive, tangible ballot privacy validation."
    ],
    technologies: ["Visual Cryptography", "Web Security", "HTML5/CSS3", "JavaScript", "Python", "Cryptographic Protocols"],
    status: "Completed Research",
    isFeatured: true
  },
  {
    id: "identity-access-control-iot-cloud",
    title: "Identity-Based Access Control Framework for Distributed Cloud Services in IoT",
    year: "2018",
    category: "Cloud & IoT Security",
    domains: ["Cloud Computing", "Internet of Things (IoT)", "Access Control", "Identity Management"],
    summary: "A fine-grained, identity-centric access control and authorization architecture engineered for heterogeneous, resource-constrained IoT nodes communicating with distributed multi-cloud services.",
    problemStatement: "Pervasive IoT sensor networks generate high-velocity telemetry across distributed cloud boundaries, where legacy PKI certificate exchanges induce prohibitive computational and bandwidth overhead on edge microcontrollers.",
    technicalApproach: [
      "Engineered an Identity-Based Cryptography (IBC) paradigm utilizing unique sensor node identifiers (e.g., MAC/IPv6 addresses) as public cryptographic keys.",
      "Formulated role- and attribute-based dynamic policy enforcement points (PEP) situated at distributed cloud gateway nodes.",
      "Constructed mutual lightweight challenge-response authentication minimizing handshake latency and packet overhead across resource-constrained edge devices.",
      "Evaluated resilience against impersonation, man-in-the-middle (MitM), replay, and unauthorized service privilege escalation."
    ],
    keyOutcomes: [
      "Eliminated the requirement for heavy X.509 certificate validation and revocation lookups on microcontrollers.",
      "Significantly lowered latency in multi-cloud IoT telemetry ingestion while maintaining strict zero-trust boundaries.",
      "Scalable authorization management capable of federating thousands of concurrent IoT endpoints."
    ],
    technologies: ["Cloud Computing", "IoT Protocols", "Identity-Based Encryption", "Python", "Distributed Systems", "Network Simulation"],
    status: "Completed Research",
    isFeatured: true
  },
  {
    id: "malicious-pdf-detection",
    title: "Malicious PDF File Detection Using String Analysis and RSA Encryption",
    year: "2019",
    category: "Malware Analysis & Forensics",
    domains: ["Malware Detection", "RSA Cryptography", "String Detection", "Digital Forensics"],
    summary: "A static and cryptographic inspection framework detecting embedded exploit payloads, obfuscated JavaScript, and malicious object streams within portable document format (PDF) binaries.",
    problemStatement: "PDF files are frequently weaponized as spear-phishing attack vectors, housing evasive heap-spray scripts, shellcode, and malicious URI triggers concealed within complex indirect object streams.",
    technicalApproach: [
      "Parsed PDF internal cross-reference tables and dictionary structures to isolate suspicious objects (`/JavaScript`, `/Launch`, `/EmbeddedFile`, `/OpenAction`).",
      "Constructed heuristic regex and string entropy analysis routines to uncover obfuscated hexadecimal, octal, and FlateDecode streams.",
      "Integrated an RSA cryptographic signature validation layer to verify the integrity and provenance of vetted enterprise document workflows.",
      "Generated detailed forensic audit reports classifying risk probability and payload signature indicators."
    ],
    keyOutcomes: [
      "Rapid pre-execution classification of malicious PDF documents prior to sandboxed detonation.",
      "High detection accuracy against obfuscated JavaScript exploits commonly utilized in enterprise spear-phishing campaigns.",
      "Reduced endpoint vulnerability through proactive automated file quarantine."
    ],
    technologies: ["RSA Cryptography", "String Detection Algorithms", "Python", "Malware Forensics", "Static File Analysis"],
    status: "Completed Research",
    isFeatured: false
  },
  {
    id: "traffic-density-detection-mobile-alert",
    title: "Traffic Density Detection Using Computer Vision and Mobile Alert System",
    year: "2018",
    category: "Computer Vision & Edge Systems",
    domains: ["Computer Vision", "Image Processing", "Intelligent Transportation", "Mobile Systems"],
    summary: "An automated intelligent transportation management pipeline applying digital image processing and morphological contour analysis to calculate real-time vehicular congestion, linked with a low-latency mobile notification alert dispatcher.",
    problemStatement: "Urban intersections and emergency corridors experience critical transit delays due to static timer-based traffic signaling unable to adapt to sudden vehicular density fluctuations.",
    technicalApproach: [
      "Developed a background subtraction and edge-detection computer vision algorithm in Python to isolate moving vehicular boundaries from highway feeds.",
      "Computed real-time pixel density ratios and vehicular contour counts against benchmark road capacity parameters.",
      "Classified roadway conditions dynamically across low, moderate, and critical congestion tiers.",
      "Programmed an automated mobile dispatch integration alerting commuters and emergency responders via cellular alert protocols."
    ],
    keyOutcomes: [
      "Demonstrated reliable vehicular count accuracy across varying daylight and ambient lighting conditions.",
      "Provided actionable real-time telemetry capable of interfacing with adaptive traffic light signaling systems.",
      "Reduced commuter delay through preemptive cellular route advisory alerts."
    ],
    technologies: ["Python", "OpenCV / Image Processing", "Edge Detection", "Mobile Alert APIs", "Simulink / MATLAB"],
    status: "Completed Research",
    isFeatured: false
  }
];

