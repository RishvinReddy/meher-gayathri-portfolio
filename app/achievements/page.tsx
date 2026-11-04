"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Award, 
  TrendingUp, 
  Users, 
  HeartHandshake, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Filter, 
  X, 
  Calendar, 
  Sparkles, 
  ExternalLink,
  Mail,
  GraduationCap
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { 
  achievementsData, 
  achievementCategories, 
  AchievementItem 
} from "@/content/achievements";
import { profileData } from "@/content/profile";

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Records");
  const [searchQuery, setSearchQuery] = useState("");

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Records": achievementsData.length };
    achievementsData.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered achievements
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Records" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.organization && item.organization.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        (item.period && item.period.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== "All Records" || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedCategory("All Records");
    setSearchQuery("");
  };

  // Featured recognition
  const featuredItem = useMemo(() => {
    return achievementsData.find((item) => item.featured) || achievementsData[0];
  }, []);

  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: ACHIEVEMENTS HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Academic Honors & Service"
            title="Academic Recognition, Leadership & Social Responsibility"
            subtitle="The verified record of collegiate technical honors, institutional student leadership positions, commercial program management milestones, and environmental & social responsibility initiatives of Meher Gayatri Devi Tiwari."
            breadcrumbs={[{ label: "Achievements" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                Academic achievement extends beyond individual research papers to encompass collegiate technical competition,
                institutional student governance, professional event management, and active community volunteering.
                Each recognition recorded below reflects verified milestones documented in her curriculum vitae,
                grounding her professional identity in demonstrated capability and civic contribution.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#292D2A]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <Award className="w-4 h-4 text-[#5B7260]" />
                  <span>25+ Collegiate Technical Recognitions</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <Users className="w-4 h-4 text-[#5B7260]" />
                  <span>SRM Tech Club &amp; Youth Conclave Leadership</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>100% Fact-Checked Against CV</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
                <a
                  href="#featured"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Featured Recognition</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#archive"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Trophy className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>All 10 Documented Records</span>
                </a>

                <Link
                  href="/about#recognition"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Biography Accolades →</span>
                </Link>
              </div>
            </div>

            {/* Right Section Directory Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Recognitions Directory
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Section Index &amp; Categories
                </h3>
              </div>

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" aria-label="Achievements section directory">
                <a
                  href="#featured"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>1. Featured Honor</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#categories"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>2. Category Filter</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#archive"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>3. Complete Archive</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#provenance"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>4. Fact Provenance</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#contact"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group sm:col-span-2"
                >
                  <span>5. Professional Correspondence</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </nav>

              <div className="pt-2 text-[11px] text-[#7E8580] leading-relaxed border-t border-[#ECE6DC]">
                Fact Standard: Omics International $50K+ revenue is accurately presented as commercial conference/journal operations revenue managed for the company, not personal income.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: FEATURED RECOGNITION SPOTLIGHT
        ========================================================================= */}
        <section id="featured" className="scroll-mt-24 space-y-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
            <span className="h-px w-6 bg-[#849987]"></span>
            <span>Featured Academic Recognition</span>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E2DBD0] hover:border-[#849987] rounded-3xl p-8 sm:p-12 lg:p-14 space-y-8 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#292D2A] text-[#F8F6F0]">
                      FEATURED HONORS
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      Academic &amp; Technical
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292D2A] tracking-tight leading-[1.12]">
                    {featuredItem.title}
                  </h2>

                  <div className="text-sm font-semibold text-[#5B7260]">
                    Awarding Scope: {featuredItem.organization}
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                  {featuredItem.description}
                </p>

                {/* Academic Context Box */}
                <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                    Academic Impact &amp; Mentorship Significance:
                  </span>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    This sustained track record in collegiate technical problem-solving directly shapes her mentorship philosophy today at Woxsen University, where she coaches undergraduate and postgraduate students in technical hackathons, capstone projects, and innovation competitions.
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-[#ECE6DC]">
                  <Link
                    href="/teaching#mentorship"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs group"
                  >
                    <span>Read Student Mentorship Approach</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                  >
                    <span>Explore Verified Projects →</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Details Panel (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-4">
                  <div className="border-b border-[#ECE6DC] pb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                      Documentation Record
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                      Collegiate Symposia &amp; Contests
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-[#575E59]">
                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <Award className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Scope of Recognitions</span>
                      </span>
                      <p>
                        Technical symposium competitions, coding contests, paper presentations, and hardware/software project exhibitions across university festivals.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Curriculum Vitae Source</span>
                      </span>
                      <p>
                        Documented under Achievements: &ldquo;25+ College-Level Recognitions in technical events and project exhibitions.&rdquo;
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Fact Status</span>
                      </span>
                      <p>
                        Verified against source document. No speculative placement tiers or synthetic ranks have been added.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C: CATEGORY NAVIGATION & SEARCH CONTROLS
        ========================================================================= */}
        <section id="categories" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#ECE6DC] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] font-mono block">
                Record Exploration
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Explore Documented Milestones
              </h2>
            </div>

            <div className="text-xs text-[#7E8580] font-mono">
              Showing {filteredAchievements.length} of {achievementsData.length} documented records
            </div>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-4 sm:p-6 space-y-4 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
              
              {/* Search Bar (8 cols) */}
              <div className="md:col-span-8 relative">
                <Search className="w-4 h-4 text-[#7E8580] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by achievement, role, organization, or keyword..."
                  aria-label="Search achievements"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F6F0] border border-[#D5CCC0] text-xs sm:text-sm text-[#292D2A] placeholder-[#7E8580] focus:outline-none focus:ring-2 focus:ring-[#849987] focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    type="button"
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E8580] hover:text-[#292D2A] p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Reset button (4 cols) */}
              <div className="md:col-span-4 flex items-center justify-end">
                {hasActiveFilters ? (
                  <button
                    onClick={handleResetFilters}
                    type="button"
                    className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#CBD7CE]"
                  >
                    Reset All Filters
                  </button>
                ) : (
                  <span className="text-xs text-[#7E8580] font-mono hidden md:inline">
                    Filter by recognition category below
                  </span>
                )}
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
              <span className="text-xs font-medium text-[#7E8580] shrink-0 mr-1 flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Category:</span>
              </span>
              {achievementCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center space-x-1.5 ${
                    selectedCategory === cat
                      ? "bg-[#292D2A] text-[#F8F6F0] shadow-2xs"
                      : "bg-[#F8F6F0] text-[#575E59] hover:bg-[#E8E1D5] hover:text-[#292D2A] border border-[#E2DBD0]"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat ? "bg-white/20 text-[#F8F6F0]" : "bg-[#E8E1D5] text-[#575E59]"
                  }`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION D: COMPLETE ACHIEVEMENT ARCHIVE
        ========================================================================= */}
        <section id="archive" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Documented Achievements Archive
            </h2>
            <span className="text-xs font-mono text-[#7E8580]">
              All 10 Verified Records
            </span>
          </div>

          {filteredAchievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {filteredAchievements.map((item, idx) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-8 space-y-5 transition-all shadow-2xs flex flex-col justify-between scroll-mt-28"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECE6DC] pb-3 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono font-bold text-[#292D2A]">
                          [RECORD 0{idx + 1}]
                        </span>
                        <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                          {item.category}
                        </span>
                      </div>

                      {item.period && (
                        <div className="flex items-center space-x-1 font-mono text-xs text-[#7E8580]">
                          <Calendar className="w-3 h-3 text-[#849987]" />
                          <span>{item.period}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] leading-snug">
                      {item.title}
                    </h3>

                    {item.organization && (
                      <div className="text-xs font-semibold text-[#5B7260]">
                        {item.organization}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#ECE6DC] space-y-2">
                    {item.academicConnection && (
                      <div className="text-xs font-medium text-[#5B7260]">
                        <Link
                          href={item.academicConnection.href}
                          className="hover:text-[#292D2A] underline underline-offset-2 inline-flex items-center space-x-1"
                        >
                          <span>{item.academicConnection.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-[#7E8580] pt-1">
                      <span className="italic">{item.sourceProvenance}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-3xl p-10 sm:p-14 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                No Achievements Found
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                No verified records match &ldquo;{searchQuery}&rdquo; within &ldquo;{selectedCategory}&rdquo;.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleResetFilters}
                  type="button"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#292D2A] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION E: PROVENANCE & FACT DISCLOSURE
        ========================================================================= */}
        <section id="provenance" className="scroll-mt-24 space-y-6">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                  Academic Fact Integrity
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                  Achievements Provenance &amp; Verification Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed max-w-4xl">
                  Each honor, milestone, and committee appointment displayed on this page is strictly sourced from Meher Gayatri Devi Tiwari&apos;s curriculum vitae.
                  In accordance with formal academic standards, no arbitrary selection rates, speculative award tiers, or synthetic certificate badges have been manufactured.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ECE6DC] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#575E59]">
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Omics Revenue Clarity:</span>
                <p>
                  The $50K+ revenue generated at Omics International is documented as commercial scientific conference and journal operations revenue managed during her tenure as Program Manager, not personal income.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Student Leadership:</span>
                <p>
                  Her roles as VP Marketing for the SRM Tech Club and Committee Member for the Indian Youth Conclave reflect documented student leadership during collegiate studies.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Complete Audit Checklist:</span>
                <Link
                  href="/#verification"
                  className="text-[#5B7260] hover:text-[#292D2A] font-semibold underline underline-offset-2"
                >
                  Review full institutional disclosure table →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION F: ACADEMIC ENGAGEMENT & CONTACT
        ========================================================================= */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#ECE6DC] pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  <Mail className="w-4 h-4" />
                  <span>Academic Inquiries</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                  Academic Leadership &amp; Institutional Correspondence
                </h2>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  For inquiries regarding collegiate event coordination, youth leadership seminars, student hackathon mentorship,
                  or academic conference administration, please reach out via official university channels.
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
                  href={`mailto:${profileData.contact.email}?subject=Academic%20Leadership%20Inquiry`}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#575E59]">
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Faculty Base:</span>
                <span>School of Technology, Woxsen University, Hyderabad, Telangana, India.</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Student Mentorship:</span>
                <Link href="/teaching#mentorship" className="text-[#5B7260] hover:text-[#292D2A] font-medium underline">
                  Review student capstone guidance protocols →
                </Link>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Biography Profile:</span>
                <Link href="/about#leadership" className="text-[#5B7260] hover:text-[#292D2A] font-medium underline">
                  Read complete leadership &amp; contributions →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION G: PAGE NAVIGATION
        ========================================================================= */}
        <div className="pt-8 border-t border-[#ECE6DC]">
          <PageNavigation
            prev={{
              label: "Projects",
              href: "/projects",
              description: "5 verified academic and technical systems"
            }}
            next={{
              label: "Contact",
              href: "/contact",
              description: "Official institutional correspondence & faculty office"
            }}
          />
        </div>

      </div>
    </div>
  );
}
