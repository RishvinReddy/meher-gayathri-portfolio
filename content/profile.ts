export interface Education {
  degree: string;
  field: string;
  institution: string;
  country: string;
  status: string;
  notes?: string;
}

export interface Appointment {
  role: string;
  institution: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  verificationNote?: string;
}

export interface VerificationItem {
  category: string;
  item: string;
  documentedSource: string;
  status: "verified" | "pending-author-clarification";
  note: string;
}

export const profileData = {
  name: "Meher Gayatri Devi Tiwari",
  honorific: "Prof.",
  title: "Cybersecurity Governance & Risk Professional | Assistant Professor | Research Scholar",
  
  contact: {
    email: "mehergayatri17@gmail.com",
    phone: "+91 90031 47555",
    linkedin: "https://www.linkedin.com/in/meher-gayatri-devi-tiwari",
    location: "Hyderabad, India",
    institution: "Woxsen University",
    institutionAddress: "Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India",
    institutionUrl: "https://woxsen.edu.in",
  },

  summary: {
    lead: "Cybersecurity, academia, and research professional with 5+ years of experience in Information Security, Cybersecurity Governance, Risk Management, Compliance Awareness, Blockchain, and Prompt Engineering, combining academic excellence with practical expertise to strengthen organizational resilience.",
    bioParagraphs: [
      "Meher Gayatri Devi Tiwari is an Assistant Professor at Woxsen University and a Research Scholar pursuing her Ph.D. in Information Security at Vellore Institute of Technology (VIT). Her work spans Information Security, Cybersecurity Governance, Risk & Compliance (GRC), Blockchain & Smart Contract Security, and Visual Cryptography.",
      "With over five years of university teaching experience, she has delivered courses to undergraduate and postgraduate cohorts in Information Technology and Cybersecurity. Her pedagogical focus emphasizes research-oriented learning, guiding student capstone projects, and enriching academic curricula to align with modern technological challenges.",
      "In her research, she investigates advancements in Blockchain, Visual Cryptography, Privacy, IoT Security, and Secure Online Voting Systems, authoring publications in peer-reviewed journals. Alongside her academic roles, she has actively contributed to environmental and social responsibility (ERS/CSR) programs, student technical leadership, and international conference coordination."
    ]
  },

  researchAreas: [
    {
      id: "information-security",
      title: "Information Security",
      description: "Foundational and modern information security principles, threat mitigation, cryptographic algorithms, and defensive systems design."
    },
    {
      id: "cybersecurity-grc",
      title: "Cybersecurity Governance, Risk & Compliance (GRC)",
      description: "Enterprise cybersecurity risk management, compliance awareness, security audit practices, and organizational resilience."
    },
    {
      id: "blockchain-security",
      title: "Blockchain & Smart Contract Security",
      description: "Decentralized architectures, smart contract security, Ethereum, Hyperledger, and cryptographic consensus protocols."
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      description: "Privacy-preserving computation, confidential data protection, and secure communication protocols."
    },
    {
      id: "iot-security",
      title: "IoT Security",
      description: "Security mechanisms, access control frameworks, and threat models for connected Internet of Things devices and distributed cloud services."
    },
    {
      id: "visual-cryptography",
      title: "Visual Cryptography",
      description: "Secret sharing schemes and optical cryptography protocols enabling confidential information decomposition and visual reconstruction."
    },
    {
      id: "online-voting",
      title: "Secure Online Voting Systems",
      description: "Verifiable electronic voting mechanisms integrating blockchain immutability and visual cryptographic ballot secrecy."
    }
  ],

  education: [
    {
      degree: "Ph.D. in Information Security",
      field: "Information Security",
      institution: "Vellore Institute of Technology (VIT)",
      country: "India",
      status: "Pursuing",
      notes: "Doctoral research scholar in Information Security."
    },
    {
      degree: "M.Tech",
      field: "Information Security",
      institution: "Vellore Institute of Technology (VIT)",
      country: "India",
      status: "Completed",
      notes: "Master of Technology degree in Information Security."
    },
    {
      degree: "B.Tech",
      field: "Information Technology",
      institution: "SRM Institute of Science and Technology",
      country: "India",
      status: "Completed",
      notes: "Bachelor of Technology degree in Information Technology."
    }
  ] as Education[],

  appointments: [
    {
      role: "Assistant Professor",
      institution: "Woxsen University, India",
      location: "Hyderabad, India",
      period: "July 2024 – Present",
      responsibilities: [
        "Facilitating undergraduate and postgraduate students in Information Technology and Cybersecurity.",
        "Guiding research activities and student projects.",
        "Supporting academic planning and curriculum initiatives.",
        "Promoting innovation-driven learning practices."
      ],
      achievements: [
        "Successfully mentored and guided student academic projects.",
        "Enhanced student engagement through research-oriented learning.",
        "Contributed to curriculum enrichment initiatives."
      ]
    },
    {
      role: "Assistant Professor Junior (Fellowship)",
      institution: "Vellore Institute of Technology (VIT), India",
      location: "Vellore, India",
      period: "September 2020 – Present",
      verificationNote: "Documented as Sept 2020 – Present on the resume. This coexists with the Woxsen appointment (July 2024 – Present) and is flagged in the verification checklist for author confirmation regarding transition or fellowship status.",
      responsibilities: [
        "Teaching Information Technology, Cybersecurity, and Research subjects.",
        "Supervising academic and research activities.",
        "Coordinating student development initiatives.",
        "Supporting institutional academic objectives."
      ],
      achievements: [
        "Successfully taught and mentored undergraduate and postgraduate students.",
        "Guided student projects and research activities.",
        "Contributed to curriculum development and academic coordination."
      ]
    },
    {
      role: "Research Scholar",
      institution: "Vellore Institute of Technology (VIT), India",
      location: "Vellore, India",
      period: "Affiliated",
      responsibilities: [
        "Conducting research in Cybersecurity, Privacy, Blockchain, and Information Security.",
        "Performing literature surveys and analytical investigations.",
        "Publishing and presenting scholarly work."
      ],
      achievements: [
        "Conducted impactful cybersecurity research.",
        "Published research in reputed journals.",
        "Supported innovation and research initiatives."
      ]
    },
    {
      role: "Program Manager",
      institution: "Omics International, India",
      location: "Hyderabad, India",
      period: "February 2018 – May 2018",
      responsibilities: [
        "Managed conferences and journal-related activities.",
        "Executed SEO and digital marketing initiatives.",
        "Coordinated stakeholder communication."
      ],
      achievements: [
        "Generated revenue exceeding $50,000 within three months (company conference operations revenue)."
      ]
    }
  ] as Appointment[],

  internships: [
    {
      role: "Intern",
      organization: "UNIQ Technologies, India",
      period: "October 2017 – December 2017",
      scope: "Worked on Web Development and Animation technologies."
    },
    {
      role: "Intern",
      organization: "HCL Technologies, India",
      period: "November 2016 – January 2017",
      scope: "Designed customer-facing online portals and webpages."
    },
    {
      role: "Intern",
      organization: "PIL Kenya Private Limited, Kenya",
      period: "April 2015 – May 2015",
      scope: "Gained exposure to backend and frontend organizational operations."
    },
    {
      role: "Intern (Remote)",
      organization: "LaughGuru",
      period: "February 2015 – April 2015",
      scope: "Supported sales and marketing initiatives. Contributed to 2% business growth."
    }
  ],

  technicalSkills: {
    cybersecurity: [
      "Cybersecurity",
      "Information Security",
      "Cryptography",
      "Network Security",
      "Malware Analysis",
      "Security Operations Center (SOC)",
      "SIEM",
      "Fortinet",
      "Information Security Audit",
      "Wireshark",
      "Cisco Packet Tracer"
    ],
    blockchain: [
      "Ethereum",
      "Solidity",
      "Ganache",
      "Hyperledger",
      "MetaMask",
      "Smart Contracts"
    ],
    promptEngineeringAndAi: [
      "ChatGPT",
      "Midjourney",
      "Gamma",
      "BetterScan",
      "DebugCode",
      "50+ AI Tools"
    ],
    researchTools: [
      "Mendeley",
      "LaTeX",
      "Literature Review",
      "Research Analysis"
    ],
    dataAndAnalytics: [
      "Power BI",
      "Tableau",
      "Google Analytics",
      "Microsoft Clarity"
    ],
    developmentAndComputing: [
      "Python",
      "HTML",
      "CSS",
      "MySQL",
      "Docker",
      "Simulink",
      "Microsoft Office"
    ],
    designingTools: [
      "Canva",
      "Adobe Illustrator",
      "draw.io",
      "Lucidchart"
    ],
    marketing: [
      "SEO",
      "Digital Marketing"
    ]
  },

  leadershipAndCsr: [
    {
      title: "Committee Member",
      organization: "Indian Youth Conclave, Chennai",
      type: "Leadership"
    },
    {
      title: "Vice President Marketing",
      organization: "Tech Club, SRM University",
      type: "Leadership"
    },
    {
      title: "Member",
      organization: "ERUDITE",
      type: "Academic Forum"
    },
    {
      title: "Volunteer",
      organization: "Blue Cross of India (2017)",
      type: "ERS / CSR & Volunteering"
    },
    {
      title: "Volunteer",
      organization: "Walk for Water, Chennai (2017)",
      type: "ERS / CSR & Volunteering"
    },
    {
      title: "Sustainability & Ethics Initiatives",
      organization: "Organized awareness and community engagement programs",
      type: "ERS / CSR & Volunteering"
    }
  ],

  verificationChecklist: [
    {
      category: "Academic Appointments",
      item: "Assistant Professor, Woxsen University (July 2024 – Present)",
      documentedSource: "Resume: Work Experience",
      status: "verified",
      note: "Primary documented current university teaching position."
    },
    {
      category: "Academic Appointments",
      item: "Assistant Professor Junior (Fellowship), VIT (Sept 2020 – Present)",
      documentedSource: "Resume: Work Experience",
      status: "pending-author-clarification",
      note: "Resume lists both Woxsen (July 2024 – Present) and VIT Fellowship (Sept 2020 – Present) with 'Present'. Displayed accurately as stated in resume; pending author clarification on fellowship conclusion or transition."
    },
    {
      category: "Doctoral Status",
      item: "Ph.D. in Information Security (Pursuing), VIT, India",
      documentedSource: "Resume: Academia & Profile Summary",
      status: "verified",
      note: "Documented as active Ph.D. candidate in Information Security."
    },
    {
      category: "Publications",
      item: "Peer-reviewed journal paper titles, citations, and DOIs",
      documentedSource: "Resume: 'authored publications in reputed journals'",
      status: "pending-author-clarification",
      note: "Specific paper titles, co-authors, and DOIs are awaiting author provision; no unverified citations are fabricated."
    },
    {
      category: "Commercial Milestone",
      item: "Omics International Revenue Exceeding $50,000",
      documentedSource: "Resume: Work Experience (Omics International)",
      status: "verified",
      note: "Accurately noted as organizational conference/journal revenue generated during Program Manager tenure, not personal income."
    }
  ] as VerificationItem[]
};
