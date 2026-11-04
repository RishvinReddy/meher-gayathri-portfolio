export interface CourseDomain {
  title: string;
  level: "Undergraduate" | "Postgraduate" | "Undergraduate & Postgraduate";
  description: string;
  topics: string[];
  tools: string[];
}

export interface MentorshipArea {
  title: string;
  description: string;
  scope: string;
  outcomes: string[];
}

export const teachingData = {
  philosophy: `Teaching in cybersecurity and information technology must bridge foundational theoretical rigor with real-world adversarial awareness. My pedagogical philosophy emphasizes research-oriented inquiry, hands-on architectural problem-solving, and continuous alignment with modern governance and risk management principles. By mentoring students to question assumptions, audit system vulnerabilities, and build verifiable software, I prepare the next generation of engineers to defend critical digital infrastructure.`,

  keyMetrics: [
    { label: "Years of Academic Teaching", value: "5+" },
    { label: "Academic Levels Taught", value: "UG & PG" },
    { label: "Student Projects Guided", value: "30+" },
    { label: "Institutions of Service", value: "Woxsen & VIT" }
  ],

  courses: [
    {
      title: "Information Security & Cryptographic Systems",
      level: "Undergraduate & Postgraduate",
      description: "Foundational and advanced principles of symmetric/asymmetric encryption, cryptographic hashes, digital signatures, public key infrastructure (PKI), and visual cryptography secret sharing.",
      topics: [
        "Classical & Modern Cryptographic Algorithms (AES, RSA, ECC)",
        "Visual Cryptography Threshold Schemes & Image Secrecy",
        "Key Distribution & Authentication Protocols",
        "Zero-Knowledge Proofs & Identity Preservation"
      ],
      tools: ["Python Cryptography", "Wireshark", "OpenSSL"]
    },
    {
      title: "Cybersecurity Governance, Risk & Compliance (GRC)",
      level: "Undergraduate & Postgraduate",
      description: "Enterprise security architecture, risk assessment methodologies, regulatory frameworks (ISO/IEC 27001, NIST CSF), security policies, and organizational resilience planning.",
      topics: [
        "Threat Modeling & Risk Matrix Quantification",
        "Information Security Audit Protocols",
        "Security Operations Center (SOC) Workflows & SIEM Fundamentals",
        "Compliance Awareness & Incident Response Frameworks"
      ],
      tools: ["Risk Matrices", "Fortinet Security Fabric", "SIEM Dashboards"]
    },
    {
      title: "Network Security & Threat Analysis",
      level: "Undergraduate",
      description: "Inspection of packet topologies, firewall architectures, intrusion detection systems (IDS/IPS), network protocol vulnerabilities, and malware payload identification.",
      topics: [
        "TCP/IP Vulnerability Surface Analysis",
        "Packet Sniffing, Filtering & Deep Inspection",
        "Static Malware Analysis & Malicious File Obfuscation",
        "Defensive Network Topology Configuration"
      ],
      tools: ["Wireshark", "Cisco Packet Tracer", "Docker Security Labs"]
    },
    {
      title: "Blockchain Technologies & Decentralized Security",
      level: "Undergraduate & Postgraduate",
      description: "Decentralized consensus mechanisms, smart contract engineering in Solidity, cryptographic hashing, and distributed ledger auditing.",
      topics: [
        "Distributed Ledger Mechanics & Consensus Models",
        "Solidity Smart Contract Development & Reentrancy Vulnerability Auditing",
        "Decentralized E-Voting & Identity Architectures",
        "Gas Optimization & Cryptographic Verification"
      ],
      tools: ["Ethereum", "Solidity", "Ganache", "MetaMask"]
    },
    {
      title: "Research Methodologies & Scholarly Writing",
      level: "Postgraduate & Research Scholars",
      description: "Formulation of research hypotheses, systematic literature reviews, academic reference management, experimental reproducibility, and scholarly typesetting.",
      topics: [
        "Systematic Literature Survey Frameworks",
        "Citation Management & Bibliographic Standards",
        "LaTeX Typesetting for High-Impact Journals",
        "Academic Ethics & Plagiarism Avoidance"
      ],
      tools: ["LaTeX", "Mendeley", "Overleaf", "Research Databases"]
    }
  ] as CourseDomain[],

  mentorshipPillars: [
    {
      title: "Undergraduate Capstone Guidance",
      description: "Directing senior students through the complete lifecycle of computer science capstone projects, from problem definition and cryptographic threat modeling to functional prototyping and testing.",
      scope: "Final-year B.Tech engineering cohorts",
      outcomes: [
        "Guided prototypes in secure voting, IoT access control, and traffic density analysis.",
        "Facilitated participation in national-level technical project exhibitions and hackathons."
      ]
    },
    {
      title: "Postgraduate Research Supervision",
      description: "Co-mentoring master's degree scholars on specialized investigations into cryptographic secret sharing, blockchain governance, and cloud security frameworks.",
      scope: "M.Tech students and junior research scholars",
      outcomes: [
        "Formulated rigorous experimental testbeds for cryptographic performance benchmarking.",
        "Assisted students in drafting manuscript submissions for peer-reviewed technical symposia."
      ]
    },
    {
      title: "Curriculum Modernization & Lab Development",
      description: "Partnering with department curriculum committees to refresh syllabi, introducing real-world prompt engineering, SIEM analysis, and automated code review exercises.",
      scope: "Department-wide curriculum and laboratory frameworks",
      outcomes: [
        "Embedded contemporary AI auditing tools (BetterScan, DebugCode) into laboratory problem banks.",
        "Strengthened experiential, project-centric learning across core security subjects."
      ]
    }
  ] as MentorshipArea[]
};

