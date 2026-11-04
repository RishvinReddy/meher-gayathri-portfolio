import React from "react";
import Link from "next/link";
import { Award, HeartHandshake, Users, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievementsData } from "@/content/achievements";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#FAF8F3] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Honors & Leadership"
            title="Achievements & Social Responsibility"
            subtitle="Documented milestones across academic competitions, enterprise conference administration, institutional leadership, and community service."
            className="mb-0"
          />

          <Link
            href="/achievements"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>View All Recognitions & Initiatives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Main Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: 25+ Awards */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#5B7260] tracking-wider uppercase">
              Academic Recognitions
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
              25+ Collegiate Awards
            </h3>
            <p className="text-sm text-[#575E59] leading-relaxed">
              Consistently recognized across university-level technical symposia, coding hackathons, project exhibitions, and innovation competitions.
            </p>
            <div className="pt-2 text-xs text-[#7E8580] border-t border-[#ECE6DC]">
              Competitions · Exhibitions · Innovation
            </div>
          </div>

          {/* Pillar 2: Professional & Commercial Impact */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#5B7260] tracking-wider uppercase">
              Executive Achievement
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
              $50K+ Revenue Generated
            </h3>
            <p className="text-sm text-[#575E59] leading-relaxed">
              Achieved as Program Manager at Omics International within 3 months, orchestrating international scientific conferences and academic journal marketing.
            </p>
            <div className="pt-2 text-xs text-[#7E8580] border-t border-[#ECE6DC]">
              Omics International · Program Management
            </div>
          </div>

          {/* Pillar 3: CSR & Leadership */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] rounded-xl p-6 sm:p-7 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-bold text-[#5B7260] tracking-wider uppercase">
              Social Advocacy (ERS/CSR)
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
              Community & Sustainability
            </h3>
            <p className="text-sm text-[#575E59] leading-relaxed">
              Active volunteering for animal welfare (Blue Cross of India), water resource conservation (Walk for Water), and youth leadership conventions.
            </p>
            <div className="pt-2 text-xs text-[#7E8580] border-t border-[#ECE6DC]">
              Blue Cross · Walk for Water · Youth Conclave
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
