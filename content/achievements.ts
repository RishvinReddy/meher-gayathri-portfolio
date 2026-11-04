export interface AchievementItem {
  id: string;
  title: string;
  category: "Academic & Technical" | "Leadership & Professional" | "ERS / CSR & Volunteering" | "Cultural & Sports";
  period?: string;
  organization?: string;
  description: string;
  sourceProvenance: string;
  sourceNote?: string;
  featured?: boolean;
  academicConnection?: {
    label: string;
    href: string;
  };
}

export const achievementCategories = [
  "All Records",
  "Academic & Technical",
  "Leadership & Professional",
  "ERS / CSR & Volunteering",
  "Cultural & Sports"
] as const;

export const achievementsData: AchievementItem[] = [
  {
    id: "collegiate-recognitions",
    title: "25+ College-Level Recognitions in Technical Events & Project Exhibitions",
    category: "Academic & Technical",
    organization: "Collegiate & Inter-University Technical Symposia",
    description: "Earned more than 25 recognitions across collegiate technical competitions, hackathons, and project exhibitions during university studies, demonstrating consistent problem-solving proficiency.",
    sourceProvenance: "Curriculum Vitae: Achievements",
    sourceNote: "Documented in Resume under Achievements.",
    featured: true,
    academicConnection: {
      label: "Informs student hackathon mentorship on Teaching page",
      href: "/teaching#mentorship"
    }
  },
  {
    id: "omics-revenue",
    title: "Generated Company Revenue Exceeding $50,000 within Three Months at Omics International",
    category: "Leadership & Professional",
    period: "Feb 2018 – May 2018",
    organization: "Omics International, India",
    description: "As Program Manager managing scientific conferences, journal-related activities, SEO, digital marketing, and international stakeholder communications, generated organizational revenue exceeding $50,000 within three months.",
    sourceProvenance: "Curriculum Vitae: Achievements & Work Experience",
    sourceNote: "Documented in Resume under Work Experience (Omics International) & Achievements.",
    featured: false,
    academicConnection: {
      label: "View Program Manager appointment on About page",
      href: "/about#experience"
    }
  },
  {
    id: "tech-club-vp",
    title: "Vice President Marketing — Tech Club, SRM University",
    category: "Leadership & Professional",
    organization: "Tech Club, SRM Institute of Science and Technology",
    description: "Elected to student technical leadership, directing marketing strategies, campus outreach, technical event coordination, and inter-collegiate student participation.",
    sourceProvenance: "Curriculum Vitae: Achievements",
    sourceNote: "Documented in Resume under Achievements.",
    featured: false,
    academicConnection: {
      label: "Undergraduate degree details on About page",
      href: "/about#education"
    }
  },
  {
    id: "youth-conclave",
    title: "Committee Member — Indian Youth Conclave, Chennai",
    category: "Leadership & Professional",
    organization: "Indian Youth Conclave, Chennai",
    description: "Served on the organizing committee for the Indian Youth Conclave, coordinating speaker panels, student delegations, and collegiate leadership discussions in Chennai.",
    sourceProvenance: "Curriculum Vitae: Achievements",
    sourceNote: "Documented in Resume under Achievements.",
    featured: false
  },
  {
    id: "erudite-member",
    title: "Member — ERUDITE Academic & Student Forum",
    category: "Leadership & Professional",
    organization: "ERUDITE",
    description: "Active member of ERUDITE, participating in intellectual seminars, technical peer discussions, and academic forums.",
    sourceProvenance: "Curriculum Vitae: Achievements",
    sourceNote: "Documented in Resume under Achievements.",
    featured: false
  },
  {
    id: "laughguru-growth",
    title: "Contributed to 2% Business Growth at LaughGuru",
    category: "Leadership & Professional",
    period: "Feb 2015 – Apr 2015",
    organization: "LaughGuru (Remote Internship)",
    description: "Supported sales operations and educational marketing initiatives during undergraduate internship, contributing directly to a 2% business growth milestone.",
    sourceProvenance: "Curriculum Vitae: Internship Achievements",
    sourceNote: "Documented in Resume under Internship Achievements.",
    featured: false
  },
  {
    id: "blue-cross-volunteer",
    title: "Volunteer — Blue Cross of India (2017)",
    category: "ERS / CSR & Volunteering",
    period: "2017",
    organization: "Blue Cross of India",
    description: "Participated in community animal welfare, rehabilitation logistics, and humane education awareness drives in Chennai.",
    sourceProvenance: "Curriculum Vitae: ERS / CSR & Volunteering",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering.",
    featured: false
  },
  {
    id: "walk-for-water",
    title: "Volunteer — Walk for Water, Chennai (2017)",
    category: "ERS / CSR & Volunteering",
    period: "2017",
    organization: "Walk for Water, Chennai",
    description: "Volunteered in public awareness advocacy emphasizing clean water conservation, sustainable resource management, and community sanitation.",
    sourceProvenance: "Curriculum Vitae: ERS / CSR & Volunteering",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering.",
    featured: false
  },
  {
    id: "sustainability-initiatives",
    title: "Organized Sustainability and Ethics Initiatives",
    category: "ERS / CSR & Volunteering",
    description: "Organized sustainability and ethics initiatives, led community awareness programs, and collaborated with cross-functional stakeholders to execute social responsibility projects.",
    sourceProvenance: "Curriculum Vitae: ERS / CSR & Volunteering",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering.",
    featured: false
  },
  {
    id: "stringz-fest",
    title: "Second Position — Carroms, STRINGZ Cultural Fest (2015 & 2016)",
    category: "Cultural & Sports",
    period: "2015 & 2016",
    organization: "STRINGZ Cultural Fest",
    description: "Awarded Second Position in Carroms across two consecutive annual editions (2015 and 2016) of the STRINGZ Inter-Collegiate Cultural Festival.",
    sourceProvenance: "Curriculum Vitae: Achievements",
    sourceNote: "Documented in Resume under Achievements.",
    featured: false
  }
];
