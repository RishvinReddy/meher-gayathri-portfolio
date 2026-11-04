import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Terminal,
  Clock,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { teachingData } from "@/content/teaching";

export const metadata: Metadata = {
  title: "Teaching & Student Mentorship | Meher Gayatri Devi Tiwari",
  description: "Courses, syllabi, capstone mentorship, and pedagogical philosophy of Meher Gayatri Devi Tiwari at Woxsen University and VIT.",
};

export default function TeachingPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Academic Pedagogy"
            title="Teaching, Curriculum & Mentorship"
            subtitle="Delivering undergraduate and postgraduate coursework in Information Technology and Cybersecurity, fostering student inquiry and modern cyber defense capabilities."
          />

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {teachingData.keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-5 text-center"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
                  {metric.value}
                </div>
                <div className="text-xs text-[#575E59] font-medium mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <section className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#5B7260]">
            <GraduationCap className="w-4 h-4" />
            <span>Pedagogical Core</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
            Teaching Philosophy: From Defensive Principles to Adversarial Reality
          </h3>

          <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed">
            {teachingData.philosophy}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#ECE6DC]">
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-1">
              <div className="font-semibold text-xs text-[#292D2A]">Adversarial Threat Modeling</div>
              <p className="text-xs text-[#575E59]">Teaching students to audit systems from an attacker&apos;s perspective before engineering defensive postures.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-1">
              <div className="font-semibold text-xs text-[#292D2A]">Hands-On Security Laboratories</div>
              <p className="text-xs text-[#575E59]">Wireshark protocol packet captures, Fortinet firewall configurations, and smart contract debugging.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-1">
              <div className="font-semibold text-xs text-[#292D2A]">Ethical GRC & Compliance</div>
              <p className="text-xs text-[#575E59]">Instilling accountability, user privacy ethics, and corporate risk governance into engineering designs.</p>
            </div>
          </div>
        </section>

        {/* Detailed Course Catalog */}
        <section className="space-y-8">
          <SectionHeading
            kicker="Course Portfolio"
            title="University Courses & Instruction"
            subtitle="Curriculum subjects instructed across undergraduate (B.Tech) and postgraduate (M.Tech) degree programs."
          />

          <div className="space-y-6">
            {teachingData.courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-8 space-y-4 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#ECE6DC] pb-4">
                  <h4 className="font-serif text-2xl font-bold text-[#292D2A]">
                    {course.title}
                  </h4>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] self-start sm:self-auto">
                    {course.level}
                  </span>
                </div>

                <p className="text-sm text-[#575E59] leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#F8F6F0] p-4 rounded-lg border border-[#E8E1D5] space-y-2">
                    <div className="text-xs font-semibold text-[#7E8580] uppercase tracking-wider">
                      Core Syllabus Modules
                    </div>
                    <ul className="text-xs text-[#575E59] space-y-1.5 list-disc list-outside pl-4">
                      {course.topics.map((t, tIdx) => (
                        <li key={tIdx}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#F8F6F0] p-4 rounded-lg border border-[#E8E1D5] space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#7E8580] uppercase tracking-wider">
                        Applied Laboratory Tools
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {course.tools.map((tool, toolIdx) => (
                          <span
                            key={toolIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#FAF8F3] text-[#292D2A] border border-[#DCD3C4]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-[11px] text-[#7E8580] pt-3 border-t border-[#ECE6DC]">
                      Emphasizes reproducible code audits and live protocol diagnostics.
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Student Mentorship Pillars */}
        <section className="space-y-8">
          <SectionHeading
            kicker="Student Guidance"
            title="Mentorship & Capstone Supervision"
            subtitle="Guiding aspiring engineers from conceptual problem formulation to technical demonstrations and symposium presentations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachingData.mentorshipPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-medium text-[#5B7260]">
                    Pillar 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#292D2A]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#7E8580]">
                    Scope: {pillar.scope}
                  </p>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC] space-y-2">
                  <div className="text-[11px] font-semibold text-[#292D2A] uppercase tracking-wider">
                    Demonstrated Outcomes
                  </div>
                  <ul className="space-y-1 text-xs text-[#575E59]">
                    {pillar.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260] shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

