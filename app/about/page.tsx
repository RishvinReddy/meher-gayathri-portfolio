import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  BookOpen, 
  Mail, 
  AlertCircle, 
  Users, 
  Award,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import { profileData } from "@/content/profile";
import { achievementsData } from "@/content/achievements";
import { teachingData } from "@/content/teaching";

export const metadata: Metadata = {
  title: "About Meher Gayatri Devi Tiwari | Academic Biography & Credentials",
  description: "Academic biography, formal qualifications, university appointments at Woxsen and VIT, research interests in visual cryptography and blockchain, and pedagogical contributions of Meher Gayatri Devi Tiwari.",
};

export default function AboutPage() {
  const recognitionItems = achievementsData.filter(
    (item) => item.category === "Academic & Technical" || item.category === "Cultural & Sports" || item.id === "omics-revenue"
  );

  return (
    <div className="py-10 sm:py-14 lg:py-16 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION 1: ABOUT HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16">
          <PageHeader
            kicker="Academic Biography"
            title="About Meher Gayatri Devi Tiwari"
            subtitle="Assistant Professor in Information Technology & Cybersecurity at Woxsen University and Ph.D. Research Scholar at Vellore Institute of Technology."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Generous Professional Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg p-3.5 sm:p-4 rounded-3xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-sm">
                <div className="relative aspect-[4/5] min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] w-full rounded-2xl overflow-hidden border border-[#D5CCC0] bg-[#EBF0EC]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Meher Gayatri Devi Tiwari"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                    className="object-cover object-top"
                    priority
                    loading="eager"
                  />
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#7E8580]">
                  <span className="font-serif italic text-xs text-[#575E59]">
                    Meher Gayatri Devi Tiwari
                  </span>
                  <span className="text-[11px] font-mono text-[#849987]">
                    Woxsen University · VIT Ph.D. Scholar
                  </span>
                </div>
              </div>
            </div>

            {/* Biographical Overview & Direct Trajectory */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  Faculty Profile & Scholarship
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] leading-tight">
                  Advancing information security through empirical research and academic leadership.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#575E59] leading-relaxed font-normal">
                {profileData.summary.lead}
              </p>

              {/* Institutional Anchors */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                      Active Appointment
                    </span>
                    <span className="font-semibold text-sm text-[#292D2A]">
                      Assistant Professor
                    </span>
                    <span className="text-xs text-[#5B7260] block font-medium">
                      School of Technology, Woxsen University, India
                    </span>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                      Doctoral Affiliation
                    </span>
                    <span className="font-semibold text-sm text-[#292D2A]">
                      Ph.D. in Information Security (Pursuing)
                    </span>
                    <span className="text-xs text-[#5B7260] block font-medium">
                      Vellore Institute of Technology (VIT), India
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#ECE6DC] flex items-center space-x-1 text-[11px] text-[#7E8580]">
                  <MapPin className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Campus: Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-1 flex flex-wrap gap-3 items-center">
                <Link
                  href="/research"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#292D2A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3D4440] transition-colors shadow-2xs"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#849987]" />
                </Link>

                <Link
                  href="/publications"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider text-[#292D2A] hover:bg-[#DEE7DF] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Publications</span>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Direct Inquiries ↓</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROFESSIONAL BIOGRAPHY
        ========================================================================= */}
        <section id="biography" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 02
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Context / Section Focus */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A] leading-tight">
                Academic Background & Professional Trajectory
              </h2>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Combining higher education instruction, doctoral research in cryptographic secret sharing, and organizational risk management to strengthen computing defense.
              </p>
              
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-2 text-xs">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                  Core Dimensions
                </span>
                <ul className="space-y-1 text-[#3D4440]">
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B7260]"></span>
                    <span>University Teaching & Mentorship</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B7260]"></span>
                    <span>Information Security & Cryptography</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B7260]"></span>
                    <span>Cybersecurity Governance (GRC)</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B7260]"></span>
                    <span>Social Responsibility & Community Leadership</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Narrative Biography (Readable Editorial Typography) */}
            <div className="lg:col-span-8 bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-8 sm:p-10 space-y-6 text-[#3D4440] leading-relaxed">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed editorial-dropcap">
                {profileData.summary.bioParagraphs[0]}
              </p>
              <p className="text-base sm:text-lg text-[#575E59] leading-relaxed">
                {profileData.summary.bioParagraphs[1]}
              </p>
              <p className="text-base sm:text-lg text-[#575E59] leading-relaxed">
                {profileData.summary.bioParagraphs[2]}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: ACADEMIC JOURNEY (EDUCATION)
        ========================================================================= */}
        <section id="education" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 03
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Academic Qualifications
              </h2>
              <p className="text-sm text-[#575E59] max-w-2xl">
                Formal higher education degrees in Information Security and Information Technology documented in the curriculum vitae.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#7E8580]">DEGREE 0{idx + 1}</span>
                    <span className="font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#E8E1D5] text-[#292D2A]">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-[#5B7260]">
                    {edu.field}
                  </div>
                  <div className="text-sm font-medium text-[#292D2A]">
                    {edu.institution}, {edu.country}
                  </div>
                </div>

                {edu.notes && (
                  <div className="pt-3 border-t border-[#ECE6DC] text-xs text-[#575E59]">
                    {edu.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: PROFESSIONAL EXPERIENCE
        ========================================================================= */}
        <section id="experience" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 04
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Academic & Professional Appointments
              </h2>
              <p className="text-sm text-[#575E59] max-w-2xl">
                Documented career timeline spanning higher education instruction, academic administration, research, and program management.
              </p>
            </div>
          </div>

          {/* Timeline of Appointments */}
          <div className="space-y-6 pt-2">
            {profileData.appointments.map((apt, idx) => (
              <article
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-8 space-y-4 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#ECE6DC] pb-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                      {apt.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#5B7260]">
                      {apt.institution}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {apt.period}
                    </span>
                    <div className="text-xs text-[#7E8580] mt-1">{apt.location}</div>
                  </div>
                </div>

                {/* Date note if applicable */}
                {apt.verificationNote && (
                  <div className="p-3.5 rounded-lg bg-[#FAF2E6] border border-[#E8D6BF] text-xs text-[#7A5A2B] flex items-start space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-[#A87432] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Documented Date Note: </strong>
                      {apt.verificationNote}
                    </div>
                  </div>
                )}

                {/* Responsibilities list */}
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                    Documented Responsibilities
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#575E59] list-disc list-outside pl-5">
                    {apt.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Documented Achievements */}
                {apt.achievements && apt.achievements.length > 0 && (
                  <div className="pt-3 border-t border-[#ECE6DC] space-y-2">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                      Documented Achievements
                    </div>
                    <ul className="space-y-1 text-xs sm:text-sm text-[#3D4440]">
                      {apt.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Practical Internships Sub-Grid */}
          <div className="pt-4 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#292D2A]">
              Practical Internships
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profileData.internships.map((intern, iIdx) => (
                <div
                  key={iIdx}
                  className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1.5"
                >
                  <div className="text-xs font-mono font-semibold text-[#7E8580]">
                    {intern.period}
                  </div>
                  <div className="font-serif text-base font-bold text-[#292D2A]">
                    {intern.role}
                  </div>
                  <div className="text-xs font-semibold text-[#5B7260]">
                    {intern.organization}
                  </div>
                  <p className="text-xs text-[#575E59] pt-1">
                    {intern.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: RESEARCH INTERESTS
        ========================================================================= */}
        <section id="research-interests" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 05
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Research Interests & Inquiry
              </h2>
              <p className="text-sm text-[#575E59] max-w-2xl">
                Documented scholarly research domains spanning cryptography, blockchain architectures, privacy, and distributed IoT security.
              </p>
            </div>
            <Link
              href="/research"
              className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider flex items-center space-x-1 shrink-0"
            >
              <span>Full Research Agenda</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {profileData.researchAreas.map((area, aIdx) => (
              <div
                key={area.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 space-y-3 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7E8580] font-mono border-b border-[#ECE6DC] pb-2">
                    <span>DOMAIN 0{aIdx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#849987]"></span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC]">
                  <Link
                    href={`/research#${area.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-medium text-[#5B7260] hover:text-[#292D2A] transition-colors"
                  >
                    <span>Read Thematic Focus</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: TEACHING AND MENTORSHIP
        ========================================================================= */}
        <section id="teaching" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 06
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Teaching & Mentorship
              </h2>
              <p className="text-sm text-[#575E59] max-w-2xl">
                Dedicated university instruction, student project guidance, research supervision, and curriculum enrichment.
              </p>
            </div>
            <Link
              href="/teaching"
              className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider flex items-center space-x-1 shrink-0"
            >
              <span>Dedicated Teaching Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {teachingData.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#5B7260]">
                    {pillar.scope}
                  </div>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC]">
                  <ul className="space-y-1 text-xs text-[#3D4440]">
                    {pillar.documentedResponsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: TECHNICAL EXPERTISE (FORMAL PROFILE MATRIX)
        ========================================================================= */}
        <section id="expertise" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 07
            </span>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Technical Expertise & IT Forte
            </h2>
            <p className="text-sm text-[#575E59] max-w-2xl">
              Documented technical competencies and tools categorized from the curriculum vitae without arbitrary proficiency ratings.
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl divide-y divide-[#ECE6DC]">
            {/* Row 1: Cybersecurity */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Cybersecurity & Information Security
                </h3>
                <p className="text-xs text-[#7E8580]">
                  Core defensive protocols, audits, analysis, and network tools.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {profileData.technicalSkills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E0D7C9] text-[#292D2A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2: Blockchain */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Blockchain & Smart Contract Security
                </h3>
                <p className="text-xs text-[#7E8580]">
                  Decentralized frameworks, consensus environments, and contracts.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {profileData.technicalSkills.blockchain.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E0D7C9] text-[#292D2A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 3: Research & AI Tools */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Research & Academic Tools
                </h3>
                <p className="text-xs text-[#7E8580]">
                  Scholarly typesetting, citation managers, and prompt engineering tools.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {[...profileData.technicalSkills.researchTools, ...profileData.technicalSkills.promptEngineeringAndAi].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E0D7C9] text-[#292D2A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 4: Development & Computing */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Development & Computing
                </h3>
                <p className="text-xs text-[#7E8580]">
                  Programming languages, database management, and computing platforms.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {profileData.technicalSkills.developmentAndComputing.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E0D7C9] text-[#292D2A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 5: Data & Analytics */}
            <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Data & Analytics
                </h3>
                <p className="text-xs text-[#7E8580]">
                  Analytics, reporting dashboards, and visualization platforms.
                </p>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {profileData.technicalSkills.dataAndAnalytics.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E0D7C9] text-[#292D2A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: LEADERSHIP AND CONTRIBUTIONS
        ========================================================================= */}
        <section id="leadership" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 08
            </span>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Leadership, Social Responsibility & Community
            </h2>
            <p className="text-sm text-[#575E59] max-w-2xl">
              Documented institutional leadership positions, student engagement initiatives, and environmental & social responsibility (ERS/CSR) programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {profileData.leadershipAndCsr.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    {item.type}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#292D2A] pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#575E59]">
                    {item.organization}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#ECE6DC] text-[11px] text-[#7E8580] flex items-center justify-between">
                  <span>Documented in Resume</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: ACADEMIC RECOGNITION
        ========================================================================= */}
        <section id="recognition" className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 09
            </span>
          </div>

          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Academic & Professional Recognition
            </h2>
            <p className="text-sm text-[#575E59] max-w-2xl">
              Documented milestones across technical symposia, commercial program operations, and co-curricular achievements presented with academic restraint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {recognitionItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#292D2A] leading-snug">
                    {item.title}
                  </h3>
                  {item.organization && (
                    <div className="text-xs font-semibold text-[#5B7260]">
                      {item.organization}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.sourceNote && (
                  <div className="pt-3 border-t border-[#ECE6DC] text-[11px] text-[#7E8580] flex items-center justify-between">
                    <span>{item.sourceNote}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: PROFESSIONAL CONTACT & CLOSING
        ========================================================================= */}
        <section id="contact" className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Academic Inquiries & Collaboration
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Connect with Meher Gayatri Devi Tiwari
            </h2>
            <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
              Available for research consultations, invited lectures on visual cryptography and risk governance, postgraduate student mentorship, and academic committee advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {/* Email */}
            <div className="p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                Direct Email
              </span>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="font-serif text-base font-bold text-[#292D2A] hover:text-[#5B7260] break-all block transition-colors"
              >
                {profileData.contact.email}
              </a>
              <p className="text-xs text-[#575E59]">
                Primary inbox for academic correspondence.
              </p>
            </div>

            {/* Campus Office */}
            <div className="p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                Campus Location
              </span>
              <div className="font-serif text-base font-bold text-[#292D2A]">
                Woxsen University
              </div>
              <p className="text-xs text-[#575E59]">
                School of Technology, Hyderabad, Telangana, India.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] block">
                Professional Network
              </span>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base font-bold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#849987]" />
              </a>
              <p className="text-xs text-[#575E59]">
                Professional network and research updates.
              </p>
            </div>
          </div>

          {/* Cross-Site Navigation Links */}
          <div className="pt-6 border-t border-[#ECE6DC] flex flex-wrap gap-4 items-center justify-between text-xs">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/research"
                className="font-semibold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1"
              >
                <span>Research Agenda →</span>
              </Link>
              <span className="text-[#CBD7CE]">·</span>
              <Link
                href="/publications"
                className="font-semibold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1"
              >
                <span>Publications Repository →</span>
              </Link>
              <span className="text-[#CBD7CE]">·</span>
              <Link
                href="/teaching"
                className="font-semibold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1"
              >
                <span>Teaching & Courses →</span>
              </Link>
            </div>

            <span className="text-[#7E8580]">
              Verified Academic Biography · Academic Year 2024–2025
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
