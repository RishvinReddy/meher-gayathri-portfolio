import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Award, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { achievementsData } from "@/content/achievements";

export const metadata: Metadata = {
  title: "Achievements, Leadership & CSR | Meher Gayatri Devi Tiwari",
  description: "Academic recognitions, leadership positions, commercial program achievements, and environmental & social responsibility initiatives of Meher Gayatri Devi Tiwari.",
};

export default function AchievementsPage() {
  const categories = [
    "Academic & Technical",
    "Leadership & Professional",
    "ERS / CSR & Volunteering",
    "Cultural & Sports"
  ] as const;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Academic & Technical": <Award className="w-5 h-5 text-[#5B7260]" />,
    "Leadership & Professional": <TrendingUp className="w-5 h-5 text-[#5B7260]" />,
    "ERS / CSR & Volunteering": <HeartHandshake className="w-5 h-5 text-[#5B7260]" />,
    "Cultural & Sports": <Trophy className="w-5 h-5 text-[#5B7260]" />
  };

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Recognitions & Service"
          title="Achievements & Leadership"
          subtitle="Documented honors, student leadership positions, commercial program management milestones, and environmental and social responsibility (ERS/CSR) initiatives."
          breadcrumbs={[{ label: "Achievements" }]}
        />

        {/* 3 Overview Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 text-center space-y-1.5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
              25+
            </div>
            <div className="text-xs font-semibold text-[#5B7260]">
              Collegiate Recognitions
            </div>
            <p className="text-xs text-[#7E8580]">
              Technical events and project exhibitions
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 text-center space-y-1.5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
              $50K+
            </div>
            <div className="text-xs font-semibold text-[#5B7260]">
              Company Revenue Milestone
            </div>
            <p className="text-xs text-[#7E8580]">
              Generated within 3 months at Omics International
            </p>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 text-center space-y-1.5">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
              ERS / CSR
            </div>
            <div className="text-xs font-semibold text-[#5B7260]">
              Community Advocacy
            </div>
            <p className="text-xs text-[#7E8580]">
              Blue Cross of India & Walk for Water Chennai
            </p>
          </div>
        </div>

        {/* Categorized Achievements Collection */}
        <div className="space-y-12">
          {categories.map((category) => {
            const items = achievementsData.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="space-y-6">
                <div className="flex items-center space-x-3 border-b border-[#ECE6DC] pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center">
                    {categoryIcons[category]}
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#292D2A]">
                      {category}
                    </h2>
                    <div className="text-xs text-[#7E8580]">
                      {items.length} Documented {items.length === 1 ? "Record" : "Records"}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          {item.period && (
                            <span className="font-mono text-[#7E8580]">
                              {item.period}
                            </span>
                          )}
                          <span className="font-mono text-[11px] text-[#5B7260] bg-[#EBF0EC] px-2 py-0.5 rounded-full border border-[#CBD7CE]">
                            Verified
                          </span>
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
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "Projects", href: "/projects", description: "5 verified technical projects" }}
          next={{ label: "Contact", href: "/contact", description: "Professional enquiries" }}
        />

      </div>
    </div>
  );
}
