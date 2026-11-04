export interface TeachingPillar {
  title: string;
  scope: string;
  description: string;
  documentedResponsibilities: string[];
  pedagogicalOutcome: string;
}

export interface InstructionalCompetency {
  domain: string;
  academicLevel: string;
  focusAreas: string[];
  description: string;
  relevantTools: string[];
}

export interface TeachingAppointment {
  institution: string;
  location: string;
  role: string;
  period: string;
  appointmentType: string;
  focus: string;
  responsibilities: string[];
  achievements: string[];
  verificationNote?: string;
}

export interface MentorshipPillar {
  title: string;
  targetGroup: string;
  description: string;
  documentedActivities: string[];
}

export const teachingData = {
  overview: "Accomplished educator and mentor with 5+ years of university teaching experience in higher education, successfully delivering undergraduate and postgraduate courses, guiding student projects and research activities, developing curricula, and promoting innovation-driven learning in Information Technology and Cybersecurity.",
  
  philosophyStatement: "Meher Gayatri Devi Tiwari's instructional philosophy centers on research-oriented pedagogy, bridging rigorous theoretical concepts with practical security implementation. By fostering critical thinking, continuous inquiry, and active technical problem-solving, she prepares undergraduate and postgraduate students to analyze complex cybersecurity landscapes with professional accountability and technical resilience.",

  corePillars: [
    {
      title: "Undergraduate & Postgraduate Instruction",
      scope: "Higher Education Degree Programs",
      description: "Delivering core and specialized subject instruction in Information Technology, Cybersecurity, and Empirical Research Methodologies across undergraduate and postgraduate student cohorts.",
      documentedResponsibilities: [
        "Facilitating students in Information Technology and Cybersecurity subject domains.",
        "Teaching Information Technology, Cybersecurity, and Research subjects.",
        "Promoting innovation-driven learning practices in classroom and laboratory settings."
      ],
      pedagogicalOutcome: "Fosters foundational conceptual rigor, technical problem-solving, and professional security awareness."
    },
    {
      title: "Student Projects & Research Guidance",
      scope: "Academic Project Mentorship",
      description: "Supervising academic and research activities, mentoring student teams through technical project implementation, and encouraging research-oriented problem solving.",
      documentedResponsibilities: [
        "Guiding research activities and student academic projects.",
        "Supervising academic and research activities across student cohorts.",
        "Enhancing student engagement through research-oriented learning."
      ],
      pedagogicalOutcome: "Enables students to transition from textbook comprehension to original system design and analytical defense."
    },
    {
      title: "Curriculum Enrichment & Academic Planning",
      scope: "Institutional Academic Development",
      description: "Contributing to academic coordination, departmental planning, and curriculum modernization initiatives aligned with institutional academic objectives.",
      documentedResponsibilities: [
        "Supporting academic planning and curriculum initiatives.",
        "Contributing to curriculum development and academic coordination.",
        "Supporting institutional academic objectives and student development initiatives."
      ],
      pedagogicalOutcome: "Maintains contemporary syllabus alignment with evolving industrial security standards and regulatory frameworks."
    }
  ] as TeachingPillar[],

  instructionalCompetencies: [
    {
      domain: "Information Security & Network Defense",
      academicLevel: "Undergraduate & Postgraduate",
      description: "Foundational and advanced defensive computing: cryptographic mechanisms, perimeter security, network traffic inspection, threat surface identification, and information security audit principles.",
      focusAreas: [
        "Defensive security architectures & perimeter controls",
        "Cryptographic methods & data integrity verification",
        "Information security audit standards & readiness",
        "Network security inspection and threat modeling"
      ],
      relevantTools: ["Wireshark", "Cisco Packet Tracer", "Fortinet", "SOC / SIEM Awareness"]
    },
    {
      domain: "Cybersecurity Governance & Risk Management (GRC)",
      academicLevel: "Undergraduate & Postgraduate",
      description: "Enterprise cybersecurity policy alignment, risk assessment methodologies, compliance standards, vulnerability mitigation planning, and organizational cybersecurity resilience.",
      focusAreas: [
        "Enterprise cybersecurity risk assessment",
        "Compliance awareness & regulatory frameworks",
        "Vulnerability management & mitigation strategies",
        "Organizational security governance & policy formulation"
      ],
      relevantTools: ["Information Security Audit", "Risk Matrices", "Policy Alignment"]
    },
    {
      domain: "Blockchain Architecture & Smart Contracts",
      academicLevel: "Specialized Elective / Advanced UG & PG",
      description: "Decentralized computing concepts, distributed ledger immutability, consensus protocols, and smart contract security analysis on Ethereum and Hyperledger platforms.",
      focusAreas: [
        "Distributed ledger fundamentals & consensus mechanisms",
        "Smart contract architecture & execution models",
        "Decentralized application (DApp) system design",
        "Security vulnerabilities in distributed logic"
      ],
      relevantTools: ["Ethereum", "Solidity", "Ganache", "Hyperledger", "MetaMask"]
    },
    {
      domain: "Research Methodologies & Technical Tools",
      academicLevel: "Postgraduate & Advanced UG",
      description: "Scholarly research execution, systematic literature review methods, scientific paper authoring using LaTeX, bibliographic citation management, and empirical data analysis.",
      focusAreas: [
        "Systematic literature review & analytical synthesis",
        "Scientific manuscript authoring & layout using LaTeX",
        "Reference management & citation standards with Mendeley",
        "Empirical research design & data validation"
      ],
      relevantTools: ["LaTeX", "Mendeley", "Literature Review Protocols", "Python"]
    },
    {
      domain: "Prompt Engineering & Emerging AI in Computing",
      academicLevel: "Contemporary Technical Competency",
      description: "Integrating modern generative AI tools and prompt engineering methodologies into computer science education, enhancing student productivity, code debugging, and technical exploration.",
      focusAreas: [
        "Prompt engineering principles for technical workflows",
        "AI-assisted code analysis and debugging protocols",
        "Ethical considerations in generative AI utilization",
        "Productivity augmentation in computing coursework"
      ],
      relevantTools: ["Prompt Engineering", "DebugCode", "BetterScan", "AI Tools in Education"]
    }
  ] as InstructionalCompetency[],

  documentedInstitutions: [
    {
      institution: "Woxsen University",
      location: "Hyderabad, Telangana, India",
      role: "Assistant Professor",
      period: "July 2024 – Present",
      appointmentType: "Full-Time Faculty Appointment",
      focus: "Undergraduate and postgraduate instruction in Information Technology and Cybersecurity; guiding student projects and research; curriculum enrichment.",
      responsibilities: [
        "Facilitating undergraduate and postgraduate students in Information Technology and Cybersecurity subject domains.",
        "Guiding research activities and student academic capstone projects.",
        "Supporting departmental academic planning and curriculum enrichment initiatives.",
        "Promoting innovation-driven and research-oriented learning practices in instructional delivery."
      ],
      achievements: [
        "Successfully mentored and guided student academic projects through completion.",
        "Enhanced student engagement through research-oriented classroom learning.",
        "Contributed actively to departmental curriculum enrichment initiatives."
      ]
    },
    {
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, Tamil Nadu, India",
      role: "Assistant Professor Junior (Fellowship)",
      period: "September 2020 – Present",
      appointmentType: "Academic Fellowship & Instruction",
      verificationNote: "Documented as Sept 2020 – Present on the curriculum vitae. This coexists with the Woxsen appointment (July 2024 – Present) and is noted in the institutional verification record for author confirmation regarding fellowship transition.",
      focus: "Teaching Information Technology, Cybersecurity, and Research subjects; supervising academic activities; student development and curriculum coordination.",
      responsibilities: [
        "Teaching Information Technology, Cybersecurity, and Research subjects across degree programs.",
        "Supervising student academic and research activities in computing laboratories.",
        "Coordinating student development initiatives and departmental academic objectives.",
        "Supporting institutional academic programs and student mentorship."
      ],
      achievements: [
        "Successfully taught and mentored undergraduate and postgraduate students across multiple cohorts.",
        "Guided student research activities and technical projects.",
        "Contributed to curriculum development and institutional academic coordination."
      ]
    }
  ] as TeachingAppointment[],

  mentorshipPillars: [
    {
      title: "Undergraduate Capstone Project Guidance",
      targetGroup: "B.Tech Students in IT & Cybersecurity",
      description: "Guiding final-year undergraduate students through the end-to-end engineering lifecycle: selecting research-grounded problem statements, architecting defensive software prototypes, and defending technical solutions.",
      documentedActivities: [
        "Problem statement formulation and scope definition",
        "System architecture planning and toolchain selection",
        "Technical implementation supervision and milestone reviews",
        "Project documentation and academic viva defense preparation"
      ]
    },
    {
      title: "Postgraduate Research Supervision",
      targetGroup: "M.Tech Students & Research Scholars",
      description: "Mentoring postgraduate cohorts in rigorous literature reviews, empirical security testing, research methodology design, and scientific paper drafting in Information Security and Cryptography.",
      documentedActivities: [
        "Literature review synthesis and research gap identification",
        "Methodology structuring in applied cryptography and blockchain",
        "LaTeX manuscript preparation and bibliographic citations",
        "Guidance on research ethics and plagiarism awareness"
      ]
    },
    {
      title: "Technical Competition & Hackathon Mentorship",
      targetGroup: "Collegiate Innovation Teams",
      description: "Leveraging her personal background of 25+ collegiate awards in technical symposia and project exhibitions to coach student teams in rapid prototyping, technical presentation, and competitive excellence.",
      documentedActivities: [
        "Idea validation and innovation pitch structuring",
        "Rapid prototyping and defensive architecture demonstration",
        "Technical communication and panel presentation coaching",
        "Team collaboration and project coordination"
      ]
    }
  ] as MentorshipPillar[]
};
