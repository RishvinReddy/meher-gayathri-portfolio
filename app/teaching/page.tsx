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
  School
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { teachingData } from "@/content/teaching";

export const metadata: Metadata = {
  title: "Teaching & Academic Mentorship | Meher Gayatri Devi Tiwari",
  description: "Documented university teaching experience, student project supervision, and curriculum development at Woxsen University and Vellore Institute of Technology.",
};

export default function TeachingPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Academic Pedagogy"
          title="Teaching & Mentorship"
          subtitle="Over 5 years of university teaching experience delivering undergraduate and postgraduate courses, guiding student projects and research activities, and contributing to curriculum development."
          breadcrumbs={[{ label: "Teaching" }]}
        />

        {/* Teaching Overview Box */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#5B7260]">
            Pedagogical Commitment
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
            Accomplished Educator & Mentor
          </h2>
          <p className="text-sm sm:text-base text-[#575E59] leading-relaxed max-w-4xl">
            {teachingData.overview}
          </p>
        </div>

        {/* Core Documented Pillars */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
            Core Pedagogical Responsibilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachingData.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between transition-all"
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

                <div className="pt-3 border-t border-[#ECE6DC] space-y-1.5">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580]">
                    Documented Scope
                  </div>
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

        {/* Documented Institutional Experience */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
            Documented Teaching Appointments
          </h2>

          <div className="space-y-6">
            {teachingData.documentedInstitutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-8 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#ECE6DC] pb-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#5B7260]">
                      {item.institution}
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "Publications", href: "/publications", description: "Scholarly publications notice" }}
          next={{ label: "Projects", href: "/projects", description: "5 verified research projects" }}
        />

      </div>
    </div>
  );
}
