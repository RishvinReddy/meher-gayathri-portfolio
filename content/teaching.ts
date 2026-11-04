export interface TeachingArea {
  title: string;
  scope: string;
  description: string;
  documentedResponsibilities: string[];
}

export const teachingData = {
  overview: "Accomplished educator and mentor with 5+ years of teaching experience in higher education, successfully delivering undergraduate and postgraduate courses, guiding student projects and research activities, developing curricula, and promoting innovation-driven learning in Information Technology and Cybersecurity.",
  
  corePillars: [
    {
      title: "Undergraduate & Postgraduate Instruction",
      scope: "Higher Education Degree Programs",
      description: "Delivering core and specialized subject instruction in Information Technology, Cybersecurity, and Empirical Research Methodologies across undergraduate and postgraduate student cohorts.",
      documentedResponsibilities: [
        "Facilitating students in Information Technology and Cybersecurity subject domains.",
        "Teaching Information Technology, Cybersecurity, and Research subjects.",
        "Promoting innovation-driven learning practices in classroom and laboratory settings."
      ]
    },
    {
      title: "Student Projects & Research Guidance",
      scope: "Academic Project Mentorship",
      description: "Supervising academic and research activities, mentoring student teams through technical project implementation, and encouraging research-oriented problem solving.",
      documentedResponsibilities: [
        "Guiding research activities and student academic projects.",
        "Supervising academic and research activities.",
        "Enhancing student engagement through research-oriented learning."
      ]
    },
    {
      title: "Curriculum Enrichment & Academic Planning",
      scope: "Institutional Academic Development",
      description: "Contributing to academic coordination, departmental planning, and curriculum modernization initiatives aligned with institutional academic objectives.",
      documentedResponsibilities: [
        "Supporting academic planning and curriculum initiatives.",
        "Contributing to curriculum development and academic coordination.",
        "Supporting institutional academic objectives and student development initiatives."
      ]
    }
  ] as TeachingArea[],

  documentedInstitutions: [
    {
      institution: "Woxsen University, India",
      role: "Assistant Professor",
      period: "July 2024 – Present",
      focus: "Undergraduate and postgraduate instruction in Information Technology and Cybersecurity; guiding student projects and research; curriculum enrichment."
    },
    {
      institution: "Vellore Institute of Technology (VIT), India",
      role: "Assistant Professor Junior (Fellowship)",
      period: "September 2020 – Present",
      focus: "Teaching Information Technology, Cybersecurity, and Research subjects; supervising academic activities; student development and curriculum coordination."
    }
  ]
};
