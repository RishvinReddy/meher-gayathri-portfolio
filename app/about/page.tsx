import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  HeartHandshake, 
  Award,
  Terminal,
  Cpu,
  ArrowRight,
  BookOpen,
  Mail,
  AlertCircle,
  Layers,
  Users,
  Compass
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { profileData } from "@/content/profile";

export const metadata: Metadata = {
  title: "About Meher Gayatri Devi Tiwari | Academic Profile & Biography",
  description: "Academic profile, qualifications, professional experience, research interests, and teaching background of Meher Gayatri Devi Tiwari, Assistant Professor at Woxsen University.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION 1: ABOUT HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16">
          <PageHeader
            kicker="Academic Biography"
            title="Meher Gayatri Devi Tiwari"
            subtitle="Cybersecurity Governance & Risk Professional · Assistant Professor at Woxsen University · Ph.D. Research Scholar at Vellore Institute of Technology"
            breadcrumbs={[{ label: "About" }]}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Card */}
            <div className="lg:col-span-4">
              <div className="relative bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 text-center space-y-5 shadow-sm">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-2xl overflow-hidden border-2 border-[#849987] shadow-sm bg-[#EBF0EC]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Meher Gayatri Devi Tiwari"
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                    Meher Gayatri Devi Tiwari
                  </h2>
                  <p className="text-xs font-semibold text-[#5B7260]">
                    Assistant Professor · Woxsen University
                  </p>
                  <p className="text-xs text-[#7E8580]">
                    Ph.D. Scholar · Vellore Institute of Technology
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC] flex items-center justify-center space-x-2 text-xs text-[#575E59]">
                  <MapPin className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Concise Introduction & Quick Navigation */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] inline-block text-xs font-semibold uppercase tracking-wider text-[#3B5340]">
                Profile Summary
              </div>

              <p className="font-serif text-xl sm:text-2xl text-[#292D2A] leading-relaxed">
                {profileData.summary.lead}
              </p>

              <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                Her professional identity bridges university education, doctoral research, and practical risk governance. Through a commitment to experiential instruction and empirical scholarship, she works to prepare future technologists and strengthen organizational cybersecurity resilience.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <Link
                  href="/research"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
                >
                  <span>Explore Research Interests</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#849987]" />
                </Link>

                <Link
                  href="/publications"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#292D2A] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>View Publications Repository</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs font-medium text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Professional Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROFESSIONAL BIOGRAPHY
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 02
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
            Professional Biography
          </h2>

          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-8 sm:p-10 space-y-6 text-[#3D4440] text-base sm:text-lg leading-relaxed">
            {profileData.summary.bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-[#575E59]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: ACADEMIC QUALIFICATIONS
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 03
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
            Academic Qualifications
          </h2>
          <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
            Formal degrees in Information Security and Information Technology documented in the curriculum vitae.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#E8E1D5] text-[#292D2A]">
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
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 04
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
            Professional & Academic Experience
          </h2>
          <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
            Career appointments as documented in the curriculum vitae.
          </p>

          <div className="space-y-6 pt-2">
            {profileData.appointments.map((apt, idx) => (
              <article
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-8 space-y-4"
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
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {apt.period}
                    </span>
                    <div className="text-xs text-[#7E8580] mt-1">{apt.location}</div>
                  </div>
                </div>

                {/* Verification note for overlapping dates */}
                {apt.verificationNote && (
                  <div className="p-3.5 rounded-xl bg-[#FAF2E6] border border-[#E8D6BF] text-xs text-[#7A5A2B] flex items-start space-x-2.5">
                    <AlertCircle className="w-4 h-4 text-[#A87432] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">Documented Date Note: </strong>
                      {apt.verificationNote}
                    </div>
                  </div>
                )}

                {/* Documented Responsibilities */}
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

                {/* Major Achievements */}
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

          {/* Internships subsection */}
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
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 05
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
                Research Interests
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
                Structured collection of research domains documented in the curriculum vitae.
              </p>
            </div>
            <Link
              href="/research"
              className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] flex items-center space-x-1 shrink-0"
            >
              <span>Full Research Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {profileData.researchAreas.map((area, aIdx) => (
              <div
                key={area.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 space-y-3 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#7E8580]">0{aIdx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#849987]"></span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: TEACHING AND MENTORSHIP
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 06
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
                Teaching & Mentorship
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
                Documented university teaching experience, student guidance, and curriculum enrichment.
              </p>
            </div>
            <Link
              href="/teaching"
              className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] flex items-center space-x-1 shrink-0"
            >
              <span>Dedicated Teaching Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                UG & PG Course Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Over 5 years of university teaching experience delivering undergraduate and postgraduate courses in Information Technology and Cybersecurity subjects.
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                Student Project Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Supervising academic and research activities, guiding student projects, and promoting research-oriented learning and innovation-driven practices.
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                Curriculum Development
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Supporting academic planning, departmental curriculum initiatives, and institutional academic coordination to modernize technical education.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: TECHNICAL EXPERTISE
        ========================================================================= */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 07
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
            Technical Expertise & IT Forte
          </h2>
          <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
            Documented technical competencies, tools, and platforms listed in the curriculum vitae.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {/* Cybersecurity */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Cybersecurity & Information Security
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Blockchain */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Blockchain & Smart Contracts
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.blockchain.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Prompt Engineering & AI */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Prompt Engineering & AI Tools
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.promptEngineeringAndAi.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Research Tools */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Research & Academic Tools
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.researchTools.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.dataAndAnalytics.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development & Computing */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B7260] border-b border-[#ECE6DC] pb-2">
                Development & Computing
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {profileData.technicalSkills.developmentAndComputing.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
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
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="h-px w-5 bg-[#849987]"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Section 08
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A]">
                Leadership & Community Contributions
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-2xl">
                Documented professional contributions, student leadership roles, and environmental & social responsibility initiatives.
              </p>
            </div>
            <Link
              href="/achievements"
              className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] flex items-center space-x-1 shrink-0"
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {profileData.leadershipAndCsr.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 space-y-3 flex flex-col justify-between"
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
            SECTION 9: ABOUT PAGE CLOSING & TRANSITIONS
        ========================================================================= */}
        <section className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              Continue Exploring
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Explore Academic & Professional Portfolio
            </h2>
            <p className="text-sm text-[#575E59]">
              Navigate to deeper sections of the portfolio to review research themes, verified project architectures, teaching responsibilities, or initiate professional contact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link
              href="/research"
              className="group p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-2"
            >
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors flex items-center justify-between">
                <span>Research</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-[#575E59]">
                Structured exploration of 7 core research domains.
              </p>
            </Link>

            <Link
              href="/publications"
              className="group p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-2"
            >
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors flex items-center justify-between">
                <span>Publications</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-[#575E59]">
                Scholarly publication repository and verification notice.
              </p>
            </Link>

            <Link
              href="/teaching"
              className="group p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-2"
            >
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors flex items-center justify-between">
                <span>Teaching</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-[#575E59]">
                Pedagogy, course delivery, and student project supervision.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-2"
            >
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors flex items-center justify-between">
                <span>Contact</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-[#575E59]">
                Professional email, LinkedIn, and correspondence guidelines.
              </p>
            </Link>
          </div>
        </section>

        {/* Page Bottom Navigation */}
        <PageNavigation
          prev={{ label: "Home", href: "/", description: "Portfolio overview & introduction" }}
          next={{ label: "Research", href: "/research", description: "Core research themes & domains" }}
        />

      </div>
    </div>
  );
}
