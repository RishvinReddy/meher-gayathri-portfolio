import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Award, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  Calendar, 
  Trophy, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievementsData } from "@/content/achievements";

export const metadata: Metadata = {
  title: "Achievements, Leadership & CSR | Meher Gayatri Devi Tiwari",
  description: "Academic awards, commercial program leadership, youth conclave committee roles, and environmental CSR initiatives of Meher Gayatri Devi Tiwari.",
};

export default function AchievementsPage() {
  const categories = [
    "Academic & Technical",
    "Leadership & Professional",
    "Social Responsibility (CSR)",
    "Co-Curricular"
  ] as const;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Academic & Technical": <Award className="w-5 h-5 text-[#5B7260]" />,
    "Leadership & Professional": <TrendingUp className="w-5 h-5 text-[#5B7260]" />,
    "Social Responsibility (CSR)": <HeartHandshake className="w-5 h-5 text-[#5B7260]" />,
    "Co-Curricular": <Trophy className="w-5 h-5 text-[#5B7260]" />
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Recognitions & Service"
            title="Honors, Leadership & Social Impact"
            subtitle="Distinguished milestones across academic competitions, enterprise operations, youth leadership steering committees, and grassroots environmental advocacy."
          />

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 text-center space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
                25+
              </div>
              <div className="text-xs font-semibold text-[#5B7260]">
                Technical Accolades
              </div>
              <p className="text-[11px] text-[#7E8580]">
                Collegiate symposia & hackathons
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 text-center space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
                $50K+
              </div>
              <div className="text-xs font-semibold text-[#5B7260]">
                Conference Revenue
              </div>
              <p className="text-[11px] text-[#7E8580]">
                Generated in 3 months at Omics International
              </p>
            </div>

            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 text-center space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
                CSR & ERS
              </div>
              <div className="text-xs font-semibold text-[#5B7260]">
                Community Volunteer
              </div>
              <p className="text-[11px] text-[#7E8580]">
                Blue Cross of India & Walk for Water
              </p>
            </div>
          </div>
        </div>

        {/* Grouped by Category */}
        <div className="space-y-16">
          {categories.map((category) => {
            const items = achievementsData.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center space-x-3 border-b border-[#ECE6DC] pb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center">
                    {categoryIcons[category]}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
                      {category}
                    </h3>
                    <div className="text-xs text-[#7E8580]">
                      {items.length} Verified {items.length === 1 ? "Record" : "Records"}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 flex flex-col justify-between space-y-4 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          {item.highlight && (
                            <span className="font-mono font-medium px-2 py-0.5 rounded bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                              {item.highlight}
                            </span>
                          )}
                          {item.year && (
                            <span className="font-mono text-[#7E8580]">
                              {item.year}
                            </span>
                          )}
                        </div>

                        <h4 className="font-serif text-lg font-bold text-[#292D2A] leading-snug">
                          {item.title}
                        </h4>

                        {item.organization && (
                          <div className="text-xs font-semibold text-[#5B7260]">
                            {item.organization}
                          </div>
                        )}

                        <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#ECE6DC] text-[11px] text-[#7E8580] flex items-center justify-between">
                        <span>Verified Resume Milestone</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
