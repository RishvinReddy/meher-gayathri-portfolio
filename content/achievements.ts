export interface AchievementItem {
  id: string;
  title: string;
  category: "Academic & Technical" | "Leadership & Professional" | "Social Responsibility (CSR)" | "Co-Curricular";
  year?: string;
  organization?: string;
  description: string;
  highlight?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "tech-recognitions",
    title: "25+ College-Level Recognitions in Technical Events & Project Exhibitions",
    category: "Academic & Technical",
    organization: "Collegiate & Inter-University Technical Symposia",
    description: "Awarded over 25 distinct accolades across competitive technical symposiums, coding challenges, project exhibitions, and innovation hackathons throughout academic tenures.",
    highlight: "25+ Awards"
  },
  {
    id: "omics-revenue",
    title: "Program Management & International Conference Commercial Milestone",
    category: "Leadership & Professional",
    year: "2018",
    organization: "Omics International",
    description: "Directed international scientific conference operations, journal marketing, and author/delegate communications, generating commercial sponsorship and registration revenue exceeding $50,000 within a 3-month operational window.",
    highlight: "$50K+ Revenue Generated"
  },
  {
    id: "indian-youth-conclave",
    title: "Committee Member — Indian Youth Conclave",
    category: "Leadership & Professional",
    organization: "Indian Youth Conclave, Chennai Chapter",
    description: "Served on the executive steering committee coordinating regional youth leadership conventions, speaker curation, youth entrepreneurship sessions, and cross-institutional delegate engagement.",
    highlight: "Executive Committee"
  },
  {
    id: "tech-club-vp",
    title: "Vice President Marketing — Tech Club",
    category: "Leadership & Professional",
    organization: "SRM Institute of Science and Technology",
    description: "Headed strategic outreach, corporate partnerships, and campus-wide communications for the university's premier technology association, driving record attendance across technical symposiums.",
    highlight: "VP Marketing"
  },
  {
    id: "erudite-membership",
    title: "Active Member — ERUDITE Literary & Intellectual Forum",
    category: "Leadership & Professional",
    organization: "ERUDITE",
    description: "Contributed to academic discourse, debate moderation, and intellectual forums promoting critical thinking, policy analysis, and multidisciplinary student dialogues.",
    highlight: "Forum Member"
  },
  {
    id: "blue-cross-csr",
    title: "Animal Welfare & Rehabilitation Volunteer",
    category: "Social Responsibility (CSR)",
    year: "2017",
    organization: "Blue Cross of India",
    description: "Volunteered in rescue logistics, veterinary care support, and public outreach drives advocating for animal rights, ethical treatment, and community shelter assistance.",
    highlight: "Animal Welfare Advocacy"
  },
  {
    id: "walk-for-water",
    title: "Community Water Conservation Campaigner",
    category: "Social Responsibility (CSR)",
    year: "2017",
    organization: "Walk for Water Campaign, Chennai",
    description: "Mobilized citizen participation and educational workshops focused on rainwater harvesting, ground-water replenishment, and sustainable urban watershed stewardship in water-stressed regions.",
    highlight: "Resource Sustainability"
  },
  {
    id: "sustainability-ethics",
    title: "Institutional ERS & Ethics Initiatives Coordinator",
    category: "Social Responsibility (CSR)",
    organization: "Academic Institutions & Youth Groups",
    description: "Organized ethical computing roundtables and environmental sustainability drives, fostering student awareness regarding e-waste lifecycle management, data privacy ethics, and corporate social accountability.",
    highlight: "Ethics & Sustainability"
  },
  {
    id: "stringz-fest",
    title: "Inter-Collegiate Sports Merit — Carroms Runner-Up",
    category: "Co-Curricular",
    year: "2015 & 2016",
    organization: "STRINGZ Cultural & Sports Festival",
    description: "Secured Second Position consecutively in 2015 and 2016 in the competitive indoor games championship.",
    highlight: "Second Position (2015 & 2016)"
  }
];
