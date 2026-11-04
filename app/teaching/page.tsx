import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  School,
  Compass,
  Code2,
  Lock,
  Layers,
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Lightbulb,
  Cpu,
  FolderGit2
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { teachingData } from "@/content/teaching";
import { profileData } from "@/content/profile";

export const metadata: Metadata = {
  title: "Teaching & Academic Mentorship | Meher Gayatri Devi Tiwari",
  description: "University teaching portfolio, instructional competencies, student mentorship, and curriculum development at Woxsen University and Vellore Institute of Technology.",
};

export default function TeachingPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: TEACHING HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Teaching & Academic Practice"
            title="University Instruction, Student Mentorship & Academic Development"
            subtitle="The academic teaching portfolio of Meher Gayatri Devi Tiwari — over 5 years of higher education experience delivering undergraduate and postgraduate courses in Information Technology and Cybersecurity, supervising student capstone projects, and enriching academic curricula."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Column: Educational Persona (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                An accomplished educator and faculty member with more than five years of university instruction across undergraduate and postgraduate cohorts.
                Her pedagogical approach balances theoretical rigor in Information Security, Applied Cryptography, and Governance with practical, hands-on laboratory problem-solving and research-oriented learning.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#292D2A]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <School className="w-4 h-4 text-[#5B7260]" />
                  <span>Assistant Professor, Woxsen University (2024–Present)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-[#5B7260]" />
                  <span>Assistant Professor Junior (Fellowship), VIT (2020–Present)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>5+ Years Teaching in Higher Education</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
                <a
                  href="#philosophy"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Teaching Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#competencies"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Subject Competencies</span>
                </a>

                <Link
                  href="/about#teaching"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Faculty Biography →</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Section Directory & Anchor Navigation (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Instructional Directory
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Teaching Portfolio Navigation
                </h3>
              </div>

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" aria-label="Teaching portfolio section directory">
                <a
                  href="#philosophy"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>1. Teaching Philosophy</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#experience"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>2. Teaching Timeline</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#competencies"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>3. Subject Competencies</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#approach"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>4. Instructional Approach</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#mentorship"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>5. Student Mentorship</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#curriculum"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>6. Curriculum Contributions</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </nav>

              <div className="pt-2 text-[11px] text-[#7E8580] leading-relaxed border-t border-[#ECE6DC]">
                Documented Scope: Covers university instructional appointments at Woxsen University and Vellore Institute of Technology (VIT).
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: TEACHING PHILOSOPHY & PEDAGOGICAL VISION
        ========================================================================= */}
        <section id="philosophy" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span>Educational Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
              Pedagogical Vision &amp; Conceptual Depth
            </h2>
            <p className="text-base sm:text-lg text-[#575E59] max-w-4xl leading-relaxed">
              Synthesized from her documented instructional practice across degree programs, focusing on conceptual clarity,
              research-led inquiry, hands-on laboratory security tools, and compassionate student guidance.
            </p>
          </div>

          {/* Philosophy Statement Card */}
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
            <div className="max-w-4xl space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5B7260] block">
                Foundational Instructional Commitment
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#292D2A] leading-relaxed font-medium">
                &ldquo;{teachingData.philosophyStatement}&rdquo;
              </p>
              <p className="text-xs text-[#7E8580] font-mono">
                * Note: Synthesized directly from documented teaching responsibilities and academic activities from the curriculum vitae.
              </p>
            </div>

            <div className="pt-6 border-t border-[#ECE6DC] grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Research-Oriented Learning
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Engaging undergraduate and postgraduate students in scholarly literature analysis, systematic problem definition, and hypothesis testing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Practical Technical Scaffolding
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Structuring laboratory assignments that transition from foundational networking tools (Wireshark, Packet Tracer) to decentralized smart contract logic.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Governance &amp; Resilience
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Instilling an appreciation for organizational cybersecurity governance, compliance awareness (GRC), and ethical accountability in engineering practice.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C: TEACHING EXPERIENCE TIMELINE
        ========================================================================= */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>University Appointments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Academic Teaching Timeline
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                Documented faculty appointments across leading Indian universities, delivering degree-level instruction and project supervision.
              </p>
            </div>

            <span className="text-xs font-mono text-[#7E8580] bg-[#FAF8F3] px-3.5 py-1.5 rounded-lg border border-[#E2DBD0] shrink-0">
              Verified Employment Dates
            </span>
          </div>

          <div className="space-y-8">
            {teachingData.documentedInstitutions.map((apt, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-10 space-y-6 transition-all shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-[#ECE6DC] pb-6">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                        {apt.appointmentType}
                      </span>
                      <span className="text-xs font-mono text-[#7E8580]">{apt.location}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                      {apt.role}
                    </h3>

                    <div className="text-base font-semibold text-[#5B7260]">
                      {apt.institution}
                    </div>
                  </div>

                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-[#292D2A] text-[#F8F6F0] self-start sm:self-auto shrink-0 shadow-2xs">
                    {apt.period}
                  </span>
                </div>

                {/* Focus Scope */}
                <p className="text-sm sm:text-base text-[#3D4440] leading-relaxed">
                  {apt.focus}
                </p>

                {/* Responsibilities & Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                      Documented Instructional Responsibilities:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4A514C]">
                      {apt.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#5B7260] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                      Documented Pedagogical Achievements:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4A514C]">
                      {apt.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start space-x-2">
                          <Sparkles className="w-4 h-4 text-[#5B7260] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {apt.verificationNote && (
                  <div className="pt-2 text-[11px] font-mono text-[#7E8580] border-t border-[#ECE6DC]">
                    Verification Note: {apt.verificationNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION D: COURSES AND SUBJECT EXPERTISE
        ========================================================================= */}
        <section id="competencies" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>Curriculum Specializations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Instructional Subject Areas &amp; Academic Competencies
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                Documented subject competencies across undergraduate and postgraduate degree programs in Information Technology and Cybersecurity.
              </p>
            </div>

            <div className="text-xs font-mono text-[#7E8580] bg-[#FAF8F3] px-3.5 py-1.5 rounded-lg border border-[#E2DBD0] shrink-0">
              5 Documented Instructional Domains
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teachingData.instructionalCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 space-y-5 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs border-b border-[#ECE6DC] pb-3">
                    <span className="font-mono text-[11px] font-bold text-[#292D2A]">
                      [AREA 0{idx + 1}]
                    </span>
                    <span className="font-mono text-[11px] text-[#5B7260] font-medium px-2 py-0.5 rounded-md bg-[#EBF0EC] border border-[#CBD7CE]">
                      {comp.academicLevel}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#292D2A] leading-snug">
                    {comp.domain}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                      Documented Topics Covered:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#3D4440]">
                      {comp.focusAreas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-start space-x-1.5">
                          <span className="text-[#5B7260] font-mono text-[10px]">›</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ECE6DC] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                    Associated Toolchain:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.relevantTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#3D4440] border border-[#E0D7C9]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] text-xs text-[#575E59] leading-relaxed">
            <span className="font-semibold text-[#292D2A]">Curriculum Disclaimer: </span>
            The instructional domains above reflect verified faculty competencies and documented curriculum areas. In adherence to academic transparency, specific semester section numbers and institutional course codes are determined by departmental academic scheduling.
          </div>
        </section>

        {/* =========================================================================
            SECTION E: TEACHING & INSTRUCTIONAL APPROACH
        ========================================================================= */}
        <section id="approach" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span>Instructional Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
              Core Instructional Responsibilities &amp; Pillars
            </h2>
            <p className="text-base sm:text-lg text-[#575E59] max-w-4xl leading-relaxed">
              Her primary academic responsibilities operate across three institutional dimensions: classroom instruction,
              student project supervision, and departmental curriculum enrichment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachingData.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-8 space-y-5 flex flex-col justify-between transition-all shadow-2xs"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#5B7260] font-semibold uppercase tracking-wider block">
                      {pillar.scope}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#ECE6DC]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                      Documented Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#3D4440]">
                      {pillar.documentedResponsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC] text-xs font-mono text-[#5B7260]">
                  Outcome: {pillar.pedagogicalOutcome}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION F: STUDENT MENTORSHIP & PROJECT GUIDANCE
        ========================================================================= */}
        <section id="mentorship" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>Student Development</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Academic Mentorship &amp; Project Supervision
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                Supervising undergraduate and postgraduate students through capstone implementations, research paper preparation,
                and technical competition preparation.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Explore Verified Technical Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {teachingData.mentorshipPillars.map((mentor, mIdx) => (
              <div
                key={mIdx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 space-y-5 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs border-b border-[#ECE6DC] pb-3">
                    <span className="font-mono text-[11px] font-bold text-[#292D2A]">
                      [MENTORSHIP 0{mIdx + 1}]
                    </span>
                    <span className="font-mono text-[11px] text-[#5B7260] font-medium px-2 py-0.5 rounded-md bg-[#EBF0EC] border border-[#CBD7CE]">
                      {mentor.targetGroup}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#292D2A] leading-snug">
                    {mentor.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                    {mentor.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE6DC] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                    Documented Mentorship Activities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#3D4440]">
                    {mentor.documentedActivities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF8F3] border border-[#E2DBD0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-serif text-base font-bold text-[#292D2A] block">
                Looking to connect teaching with practical systems?
              </span>
              <p className="text-xs text-[#575E59]">
                Her own technical implementations in Visual Cryptography and Blockchain demonstrate the engineering rigor expected of student capstones.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shrink-0"
            >
              <span>View 5 Verified Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5]" />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SECTION G: CURRICULUM ENRICHMENT & ACADEMIC CONTRIBUTIONS
        ========================================================================= */}
        <section id="curriculum" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <Layers className="w-4 h-4" />
                <span>Institutional Academic Leadership</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Curriculum Enrichment &amp; Departmental Coordination
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                Contributing beyond individual course delivery through departmental planning, syllabus modernization,
                and student development program leadership at Woxsen University and Vellore Institute of Technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  Curriculum Modernization
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Supporting the incorporation of contemporary cybersecurity topics, smart contract security, and prompt engineering into technology coursework.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  Academic Coordination
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Coordinating student academic and research activities, student development initiatives, and departmental academic planning objectives.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2.5">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  ERS &amp; Social Responsibility
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Integrating ethics, sustainability awareness, and environmental social responsibility (ERS/CSR) principles into academic student life.
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center justify-between text-xs text-[#7E8580] gap-3">
              <span>
                Documented in CV: &ldquo;Supporting academic planning and curriculum initiatives; coordinating student development initiatives.&rdquo;
              </span>
              <Link
                href="/about#leadership"
                className="font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1"
              >
                <span>Read Institutional Leadership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION I: ACADEMIC INQUIRIES & STUDENT OFFICE HOURS
        ========================================================================= */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#ECE6DC] pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  <Mail className="w-4 h-4" />
                  <span>Academic Engagement</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                  Academic Correspondence &amp; Teaching Inquiries
                </h2>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  Students, research scholars, and academic peers seeking course advising, project collaboration,
                  or guest lecture inquiries are invited to connect directly through official university channels.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Contact Office</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`mailto:${profileData.contact.email}?subject=Teaching%20Inquiry%20/%20Student%20Mentorship`}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#575E59]">
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Faculty Appointment:</span>
                <span>
                  Assistant Professor, School of Technology, Woxsen University, Hyderabad, India.
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Student Advising:</span>
                <span>
                  Dedicated academic hours for capstone reviews and project supervision.
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Response Protocol:</span>
                <span>
                  All academic and student inquiries are acknowledged within two business days.
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
