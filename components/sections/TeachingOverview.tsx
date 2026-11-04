import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { teachingData } from "@/content/teaching";

export default function TeachingOverview() {
  return (
    <section id="teaching" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Academic Pedagogy"
            title="Teaching & Mentorship"
            subtitle="Delivering undergraduate and postgraduate courses in Information Technology and Cybersecurity, guiding student projects and research activities, and supporting curriculum enrichment."
            className="mb-0"
          />

          <Link
            href="/teaching"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>View Teaching Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Documented Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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

              <div className="pt-3 border-t border-[#ECE6DC]">
                <ul className="space-y-1 text-xs text-[#3D4440]">
                  {pillar.documentedResponsibilities.slice(0, 2).map((resp, rIdx) => (
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

      </div>
    </section>
  );
}
