import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function ResearchSummary() {
  const coreResearch = profileData.researchAreas.slice(0, 6);

  return (
    <section id="research" className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Research Areas"
            title="Scholarly Focus & Inquiry"
            subtitle="Core research domains documented in Meher Gayatri Devi Tiwari's academic portfolio, spanning cryptography, risk governance, and secure distributed architectures."
            className="mb-0"
          />

          <Link
            href="/research"
            className="mt-6 md:mt-0 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Complete Research Agenda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Structured Editorial Research Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreResearch.map((area, idx) => (
            <div
              key={area.id}
              className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all hover:-translate-y-0.5 hover:shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#7E8580] font-mono border-b border-[#ECE6DC] pb-2.5">
                  <span>AREA 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#849987]"></span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#292D2A] tracking-tight">
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
                  <span>Explore Themes</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
