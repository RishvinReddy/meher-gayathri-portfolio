export interface Achievement {
  id: string;
  title: string;
  category: "Academic & Technical" | "Leadership & Professional" | "ERS / CSR & Volunteering" | "Cultural & Sports";
  period?: string;
  organization?: string;
  description: string;
  sourceNote?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "collegiate-recognitions",
    title: "25+ College-Level Recognitions in Technical Events & Project Exhibitions",
    category: "Academic & Technical",
    organization: "Collegiate & Inter-University Technical Competitions",
    description: "Earned more than 25 recognitions across technical events, project exhibitions, and collegiate technical symposiums throughout academic studies.",
    sourceNote: "Documented in Resume under Achievements."
  },
  {
    id: "omics-revenue",
    title: "Generated Revenue Exceeding $50,000 within Three Months at Omics International",
    category: "Leadership & Professional",
    period: "Feb 2018 – May 2018",
    organization: "Omics International, India",
    description: "As Program Manager managing scientific conferences, journal-related activities, SEO, digital marketing, and stakeholder communications, generated company revenue exceeding $50,000 within three months.",
    sourceNote: "Documented in Resume under Work Experience (Omics International) & Achievements."
  },
  {
    id: "youth-conclave",
    title: "Committee Member — Indian Youth Conclave, Chennai",
    category: "Leadership & Professional",
    organization: "Indian Youth Conclave, Chennai",
    description: "Contributed as a Committee Member in organizing and coordinating youth conclave initiatives and events in Chennai.",
    sourceNote: "Documented in Resume under Achievements."
  },
  {
    id: "tech-club-vp",
    title: "Vice President Marketing — Tech Club, SRM University",
    category: "Leadership & Professional",
    organization: "Tech Club, SRM Institute of Science and Technology",
    description: "Served as Vice President of Marketing for the Tech Club at SRM University, leading marketing initiatives, student engagement, and technical event outreach.",
    sourceNote: "Documented in Resume under Achievements."
  },
  {
    id: "erudite-member",
    title: "Member — ERUDITE",
    category: "Leadership & Professional",
    organization: "ERUDITE",
    description: "Active member of ERUDITE, participating in academic and student intellectual forums.",
    sourceNote: "Documented in Resume under Achievements."
  },
  {
    id: "blue-cross-volunteer",
    title: "Volunteer — Blue Cross of India (2017)",
    category: "ERS / CSR & Volunteering",
    period: "2017",
    organization: "Blue Cross of India",
    description: "Volunteered in community animal welfare, rehabilitation, and awareness programs.",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering."
  },
  {
    id: "walk-for-water",
    title: "Volunteer — Walk for Water, Chennai (2017)",
    category: "ERS / CSR & Volunteering",
    period: "2017",
    organization: "Walk for Water, Chennai",
    description: "Volunteered in public awareness campaigns advocating for clean water access and water resource conservation.",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering."
  },
  {
    id: "sustainability-initiatives",
    title: "Organized Sustainability and Ethics Initiatives",
    category: "ERS / CSR & Volunteering",
    description: "Organized sustainability and ethics initiatives, led awareness and community engagement programs, and collaborated with diverse stakeholders to execute projects.",
    sourceNote: "Documented in Resume under ERS / CSR & Volunteering."
  },
  {
    id: "stringz-fest",
    title: "Second Position — Carroms, STRINGZ Cultural Fest (2015 & 2016)",
    category: "Cultural & Sports",
    period: "2015 & 2016",
    organization: "STRINGZ Cultural Fest",
    description: "Achieved Second Position in Carroms at the STRINGZ Cultural Fest in two consecutive editions (2015 and 2016).",
    sourceNote: "Documented in Resume under Achievements."
  }
];
