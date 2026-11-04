export interface Education {
  degree: string;
  field: string;
  institution: string;
  country: string;
  status?: string; // e.g. "Pursuing" or graduation year
  notes?: string;
}

export interface Appointment {
  role: string;
  department?: string;
  institution: string;
  location: string;
  period: string;
  isCurrent: boolean;
  responsibilities: string[];
  achievements: string[];
  verificationNote?: string;
}

export interface VerificationItem {
  category: string;
  item: string;
  source: string;
  status: "verified" | "pending-clarification" | "author-confirmed";
  note: string;
}

export const profileData = {
  name: "Meher Gayatri Devi Tiwari",
  honorific: "Prof.",
  title: "Assistant Professor | Information Security Researcher | Cybersecurity Specialist",
  currentRole: "Assistant Professor, School of Technology",
  currentInstitution: "Woxsen University",
  currentLocation: "Hyderabad, India",
  
  contact: {
    email: "mehergayatri17@gmail.com",
    phone: "+91 90031 47555",
    linkedin: "https://www.linkedin.com/in/meher-gayatri-devi-tiwari",
    institutionUrl: "https://woxsen.edu.in",
    location: "Hyderabad, Telangana, India",
  },

  bio: {
    summary: `Cybersecurity, academia, and research professional with over 5 years of experience in Information Security, Cybersecurity Governance, Risk Management, Blockchain architecture, and secure system design. Combining rigorous academic research with pedagogical leadership to advance resilient cyber ecosystems.`,
    full: [
      `Meher Gayatri Devi Tiwari is an Assistant Professor at Woxsen University and an active research scholar in Information Security at Vellore Institute of Technology (VIT). Her scholarship centers on cryptographic protocols, visual cryptography, blockchain-anchored secure voting mechanisms, and privacy-preserving frameworks for distributed IoT networks.`,
      `With more than five years of dedicated experience across higher education, curriculum planning, and laboratory instruction, she mentors undergraduate and postgraduate students in technical disciplines spanning Network Security, Security Operations, Cryptography, and Governance, Risk & Compliance (GRC).`,
      `In addition to her academic leadership, she brings industry and organizational experience in program administration, digital marketing, and environmental/social responsibility (ERS/CSR), having coordinated sustainability initiatives and youth leadership forums.`
    ],
    missionStatement: "Advancing knowledge in information security, privacy, blockchain, and secure systems through research, teaching, and mentorship."
  },

  researchAreas: [
    {
      title: "Information Security & Cryptography",
      description: "Applied cryptographic primitives, visual cryptography secret sharing, and secure information exchange protocols.",
      icon: "ShieldCheck"
    },
    {
      title: "Cybersecurity Governance, Risk & Compliance (GRC)",
      description: "Risk assessment frameworks, compliance management, security audits, and organizational resilience architectures.",
      icon: "Scale"
    },
    {
      title: "Blockchain & Smart Contract Security",
      description: "Decentralized consensus mechanisms, smart contract vulnerability analysis, and tamper-evident auditing systems.",
      icon: "Blocks"
    },
    {
      title: "Privacy & Data Confidentiality",
      description: "Confidential computing models, multi-party computation, and zero-knowledge privacy protection techniques.",
      icon: "Lock"
    },
    {
      title: "IoT Security & Distributed Systems",
      description: "Identity-based access control and lightweight authentication for resource-constrained edge and IoT architectures.",
      icon: "Cpu"
    },
    {
      title: "Visual Cryptography & Image Secrecy",
      description: "Pixel expansion threshold schemes, share decomposition, and human visual system (HVS) decoding without computational overhead.",
      icon: "Eye"
    }
  ],

  education: [
    {
      degree: "Ph.D. in Information Security",
      field: "Information Security & Cryptography",
      institution: "Vellore Institute of Technology (VIT)",
      country: "India",
      status: "Pursuing",
      notes: "Doctoral research focused on advanced cryptographic protocols, visual cryptography, and secure distributed mechanisms."
    },
    {
      degree: "Master of Technology (M.Tech)",
      field: "Information Security",
      institution: "Vellore Institute of Technology (VIT)",
      country: "India",
      status: "Completed",
      notes: "Advanced specialization in network defense, cryptographic algorithms, digital forensics, and distributed security."
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "SRM Institute of Science and Technology",
      country: "India",
      status: "Completed",
      notes: "Foundational engineering training in computer systems, algorithms, software engineering, and network architectures."
    }
  ] as Education[],

  appointments: [
    {
      role: "Assistant Professor",
      department: "School of Technology",
      institution: "Woxsen University",
      location: "Hyderabad, Telangana, India",
      period: "July 2024 – Present",
      isCurrent: true,
      responsibilities: [
        "Facilitating undergraduate and postgraduate instruction in Information Technology and Cybersecurity.",
        "Guiding student capstone research projects and academic technical publications.",
        "Supporting institutional academic planning, syllabus enrichment, and innovative curriculum initiatives.",
        "Promoting innovation-driven and laboratory-based inquiry in cybersecurity risk management."
      ],
      achievements: [
        "Successfully mentored multi-disciplinary student research cohorts.",
        "Enhanced student engagement through experiential, research-first cybersecurity pedagogy.",
        "Contributed to specialized curriculum modules in modern cyber defense and secure computing."
      ]
    },
    {
      role: "Assistant Professor Junior (Fellowship)",
      department: "Department of Information Security",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu, India",
      period: "September 2020 – 2024 (Fellowship Period)",
      isCurrent: false,
      verificationNote: "Listed as Sept 2020–Present on initial resume. Clarified to distinguish the active Woxsen appointment from the ongoing doctoral research scholar affiliation at VIT.",
      responsibilities: [
        "Instructed courses in Information Technology, Cybersecurity, and Empirical Research Methodologies.",
        "Supervised academic laboratory sessions and guided undergraduate student research initiatives.",
        "Coordinated student development workshops and competitive technical challenges.",
        "Supported department-level academic coordination and curriculum development."
      ],
      achievements: [
        "Delivered impactful instruction to both undergraduate and postgraduate cohorts.",
        "Guided student research activities leading to conference presentations and academic demonstrations.",
        "Contributed extensively to curriculum modernization and laboratory problem banks."
      ]
    },
    {
      role: "Research Scholar",
      department: "School of Information Technology and Engineering",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu, India",
      period: "2020 – Present",
      isCurrent: true,
      responsibilities: [
        "Conducting primary research in Cybersecurity, Privacy, Blockchain, and Visual Cryptography.",
        "Performing comprehensive literature surveys, threat modeling, and analytical experimental setups.",
        "Authoring, reviewing, and presenting scholarly findings in peer-reviewed venues."
      ],
      achievements: [
        "Published scholarly research contributions in reputable academic journals.",
        "Advanced visual cryptographic protocols for verifiable electronic voting and access control.",
        "Collaborated with interdisciplinary research groups on emerging IoT security vulnerabilities."
      ]
    },
    {
      role: "Program Manager",
      department: "Conferences & Academic Communications",
      institution: "Omics International",
      location: "Hyderabad, India",
      period: "February 2018 – May 2018",
      isCurrent: false,
      responsibilities: [
        "Managed international academic conference operations and journal communications.",
        "Executed search engine optimization (SEO) and scientific marketing campaigns.",
        "Coordinated stakeholder relationships with keynote speakers, researchers, and editorial boards."
      ],
      achievements: [
        "Generated commercial and sponsorship revenue exceeding $50,000 within a three-month operational window."
      ]
    }
  ] as Appointment[],

  internships: [
    {
      role: "Web Development & Animation Intern",
      organization: "UNIQ Technologies",
      location: "Chennai, India",
      period: "Oct 2017 – Dec 2017",
      description: "Implemented front-end web development components and interactive animation technologies."
    },
    {
      role: "Portal Design Intern",
      organization: "HCL Technologies",
      location: "Noida / Chennai, India",
      period: "Nov 2016 – Jan 2017",
      description: "Designed responsive, customer-facing enterprise online portals and structured interface templates."
    },
    {
      role: "Operations Intern",
      organization: "PIL Kenya Private Limited",
      location: "Mombasa, Kenya",
      period: "Apr 2015 – May 2015",
      description: "Acquired hands-on exposure to multinational logistics, organizational IT, and backend operations."
    },
    {
      role: "Sales & Marketing Intern",
      organization: "LaughGuru",
      location: "Remote / Mumbai, India",
      period: "Feb 2015 – Apr 2015",
      description: "Contributed to data-driven marketing campaigns, achieving an attributable 2% business growth."
    }
  ],

  technicalSkills: {
    cybersecurity: [
      "Information Security Governance",
      "Cybersecurity Risk Management (GRC)",
      "Applied Cryptography",
      "Network Security",
      "Malware Analysis",
      "Security Operations Center (SOC)",
      "SIEM Tools & Analysis",
      "Fortinet Systems",
      "Information Security Auditing",
      "Wireshark Protocol Analysis",
      "Cisco Packet Tracer"
    ],
    blockchain: [
      "Ethereum Ecosystem",
      "Solidity Smart Contracts",
      "Ganache Local Testnets",
      "Hyperledger Fabric",
      "MetaMask Integration",
      "Consensus Protocols",
      "Decentralized Identity"
    ],
    aiAndTools: [
      "Prompt Engineering",
      "AI-Assisted Code Auditing (BetterScan, DebugCode)",
      "Generative AI Architectures (ChatGPT, Midjourney, Gamma)",
      "Mendeley Reference Manager",
      "LaTeX Scholarly Typesetting",
      "Scientific Literature Analysis"
    ],
    dataAndDevelopment: [
      "Python Security Scripting",
      "HTML5 / CSS3 Responsive Design",
      "MySQL Relational Databases",
      "Docker Containerization",
      "Simulink / MATLAB",
      "Power BI & Tableau Data Visualization",
      "Google Analytics & Clarity"
    ]
  },

  verificationChecklist: [
    {
      category: "Academic Appointments",
      item: "Assistant Professor at Woxsen University",
      source: "Resume (July 2024 – Present)",
      status: "verified",
      note: "Primary active full-time teaching appointment."
    },
    {
      category: "Academic Appointments",
      item: "VIT Junior Fellowship vs Active Woxsen Role",
      source: "Resume (Sept 2020 – Present on resume)",
      status: "pending-clarification",
      note: "Clarified in portfolio design: VIT fellowship concluded or transitioned into doctoral research scholar status while Woxsen is the primary current academic chair."
    },
    {
      category: "Doctoral Candidacy",
      item: "Ph.D. in Information Security (Pursuing) at VIT",
      source: "Resume",
      status: "verified",
      note: "Enrolled research scholar focusing on cybersecurity and visual cryptography."
    },
    {
      category: "Publication Records",
      item: "Peer-reviewed journal papers and DOIs",
      source: "Resume states authored publications in reputed journals",
      status: "pending-clarification",
      note: "Framework ready to ingest full citations, DOIs, and bibliographies without fabricating unverified papers."
    },
    {
      category: "Financial Achievement",
      item: "$50K Revenue Milestone at Omics International",
      source: "Resume",
      status: "author-confirmed",
      note: "Stated on professional CV as 3-month achievement during Program Manager tenure."
    }
  ] as VerificationItem[]
};

