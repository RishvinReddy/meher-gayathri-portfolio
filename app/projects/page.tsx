"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  FolderGit2, 
  Calendar, 
  Search, 
  Filter, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Lock, 
  Eye, 
  Cpu, 
  Binary, 
  Compass, 
  Mail, 
  ExternalLink,
  Code2
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { projectsData, projectCategories, Project } from "@/content/projects";
import { profileData } from "@/content/profile";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  // Featured project (the 2021 dual-layer voting system)
  const featuredProject = useMemo(() => {
    return projectsData.find((p) => p.featured) || projectsData[0];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All Projects" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.domains.some((d) => d.toLowerCase().includes(q)) ||
        project.technicalMethods.some((m) => m.toLowerCase().includes(q)) ||
        project.year.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== "All Projects" || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedCategory("All Projects");
    setSearchQuery("");
  };

  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: PROJECTS HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Academic & Technical Systems"
            title="Verified Academic Projects & Systems Engineering"
            subtitle="The verified technical implementations documented in Meher Gayatri Devi Tiwari's curriculum vitae — bridging empirical software prototypes with applied cryptography, blockchain distributed ledgers, IoT security, and defensive analysis."
            breadcrumbs={[{ label: "Projects" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Column: Academic Framing (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                Academic projects serve as the empirical validation of theoretical research in Information Security.
                Each system documented below represents verified technical work executed during her academic career,
                tackling concrete security challenges such as end-to-end ballot secrecy in electronic voting,
                decentralized access control for IoT edge nodes, and static exploit pattern detection.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#292D2A]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <FolderGit2 className="w-4 h-4 text-[#5B7260]" />
                  <span>5 Documented Technical Projects</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <Calendar className="w-4 h-4 text-[#5B7260]" />
                  <span>Documented Timeline: 2018–2021</span>
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
                  <span>Featured Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#collection"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>All 5 Projects</span>
                </a>

                <Link
                  href="/research"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Research Themes →</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Directory Navigation Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Projects Directory
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Section Index &amp; Navigation
                </h3>
              </div>

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" aria-label="Projects section index">
                <a
                  href="#featured"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>1. Featured System (2021)</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#discovery"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>2. Project Search &amp; Filter</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#collection"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>3. Complete Collection</span>
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
                  <span>5. Technical Inquiries &amp; Collaboration</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </nav>

              <div className="pt-2 text-[11px] text-[#7E8580] leading-relaxed border-t border-[#ECE6DC]">
                Integrity Note: In strict compliance with academic standards, speculative source repositories or unverified live deployments are not linked.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: FEATURED PROJECT SPOTLIGHT
        ========================================================================= */}
        <section id="featured" className="scroll-mt-24 space-y-6">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
            <span className="h-px w-6 bg-[#849987]"></span>
            <span>Flagship Research Implementation</span>
          </div>

          <div className="bg-[#FAF8F3] border border-[#E2DBD0] hover:border-[#849987] rounded-3xl p-8 sm:p-12 lg:p-14 space-y-8 shadow-sm transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#292D2A] text-[#F8F6F0]">
                      FEATURED PROJECT
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {featuredProject.year}
                    </span>
                    <span className="text-xs font-mono text-[#7E8580]">
                      {featuredProject.domains.join(" · ")}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292D2A] tracking-tight leading-[1.12]">
                    {featuredProject.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                  {featuredProject.summary}
                </p>

                {/* Scholarly Context Callout */}
                <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                    Scholarly Significance &amp; Problem Solved:
                  </span>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {featuredProject.scholarlyContext}
                  </p>
                </div>

                {/* Technical Methods */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                    Documented Methods &amp; Architectural Focus:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technicalMethods.map((method, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs px-3 py-1 rounded-lg bg-[#FAF8F3] text-[#292D2A] border border-[#D5CCC0] font-medium shadow-2xs"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-[#ECE6DC]">
                  <Link
                    href={`/research#${featuredProject.researchThemeId}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs group"
                  >
                    <span>View Connected Research Theme</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`mailto:${profileData.contact.email}?subject=Inquiry%20regarding%20${encodeURIComponent(featuredProject.title)}`}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
                    <span>Inquire About System</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Architectural Highlights Card (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-4">
                  <div className="border-b border-[#ECE6DC] pb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                      Systems Architecture
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                      Dual-Layer Security Architecture
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs text-[#575E59]">
                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Layer 1: Optical Ballot Secrecy</span>
                      </span>
                      <p>
                        Visual cryptography secret sharing schemes divide sensitive voter ballots into randomized transparency shares decoded through physical overlay.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Layer 2: Immutable Distributed Ledger</span>
                      </span>
                      <p>
                        Blockchain consensus mechanisms log verification transactions into an append-only, tamper-resistant ledger ensuring verifiable election auditing.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-1">
                      <span className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>Source Provenance</span>
                      </span>
                      <p>
                        {featuredProject.documentedSource}. Serves as foundational research for her ongoing doctoral dissertation at VIT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C: PROJECT DISCOVERY & FILTER CONTROLS
        ========================================================================= */}
        <section id="discovery" className="scroll-mt-24 space-y-6">
          <div className="border-b border-[#ECE6DC] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] font-mono block">
                Technical Discovery
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Search &amp; Filter Verified Projects
              </h2>
            </div>

            <div className="text-xs text-[#7E8580] font-mono">
              Showing {filteredProjects.length} of {projectsData.length} documented systems
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
                  placeholder="Search by project title, domain, technology, or keyword..."
                  aria-label="Search projects"
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
                    Filter by technical domain below
                  </span>
                )}
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
              <span className="text-xs font-medium text-[#7E8580] shrink-0 mr-1 flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Domain:</span>
              </span>
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#292D2A] text-[#F8F6F0] shadow-2xs"
                      : "bg-[#F8F6F0] text-[#575E59] hover:bg-[#E8E1D5] hover:text-[#292D2A] border border-[#E2DBD0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION D: COMPLETE PROJECT COLLECTION
        ========================================================================= */}
        <section id="collection" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-4 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Project Archive &amp; Technical Systems
            </h2>
            <span className="text-xs font-mono text-[#7E8580]">
              Ordered by Documented Year
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="space-y-6">
              {filteredProjects.map((project, idx) => (
                <article
                  key={project.id}
                  id={project.id}
                  className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-10 space-y-6 transition-all shadow-2xs scroll-mt-28"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-[#ECE6DC] pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#292D2A] text-[#F8F6F0]">
                          PROJECT 0{idx + 1}
                        </span>
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                          {project.year}
                        </span>
                        <span className="text-xs font-mono text-[#7E8580]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5 self-start sm:self-auto shrink-0">
                      {project.domains.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#F8F6F0] text-[#4A514C] border border-[#E2DBD0]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Summary & Scholarly Context */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    <div className="lg:col-span-7 space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                          Technical Summary
                        </span>
                        <p className="text-sm sm:text-base text-[#3D4440] leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
                          Documented Technical Methods:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technicalMethods.map((method, mIdx) => (
                            <span
                              key={mIdx}
                              className="text-xs px-2.5 py-1 rounded-md bg-[#F8F6F0] text-[#292D2A] border border-[#E2DBD0]"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#F8F6F0] p-5 rounded-2xl border border-[#E8E1D5] space-y-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                        Scholarly Role &amp; Significance:
                      </span>
                      <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                        {project.scholarlyContext}
                      </p>

                      <div className="pt-2 text-[11px] font-mono text-[#7E8580] border-t border-[#ECE6DC] flex items-center justify-between">
                        <span>Research Connection:</span>
                        <Link
                          href={`/research#${project.researchThemeId}`}
                          className="font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1"
                        >
                          <span>{project.researchThemeTitle}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Footer Info */}
                  <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center justify-between text-xs text-[#7E8580] gap-2">
                    <span className="italic">{project.documentedSource}</span>
                    <a
                      href={`mailto:${profileData.contact.email}?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}`}
                      className="font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1"
                    >
                      <span>Inquire About Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
                No Projects Match Your Search
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                No verified technical projects match &ldquo;{searchQuery}&rdquo; within &ldquo;{selectedCategory}&rdquo;.
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
            SECTION E: PROVENANCE & ACADEMIC VERIFICATION DISCLOSURE
        ========================================================================= */}
        <section id="provenance" className="scroll-mt-24 space-y-6">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                  Academic Integrity Standard
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                  Verified Projects Provenance &amp; Attribution
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed max-w-4xl">
                  In strict compliance with academic standards, each project listed on this page corresponds directly to verified work documented in Meher Gayatri Devi Tiwari&apos;s curriculum vitae.
                  No speculative source repositories, unconfirmed outcome metrics, fabricated client testimonials, or speculative live deployments have been invented.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#ECE6DC] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#575E59]">
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Source Verification:</span>
                <p>Derived directly from the official curriculum vitae under the Projects section (2018–2021).</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Research Delineation:</span>
                <p>Clearly distinguished from speculative doctoral hypotheses and general teaching assignments.</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Fact Audit Record:</span>
                <Link
                  href="/#verification"
                  className="text-[#5B7260] hover:text-[#292D2A] font-semibold underline underline-offset-2"
                >
                  View complete institutional verification checklist →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION F: ACADEMIC INQUIRIES & COLLABORATION
        ========================================================================= */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#ECE6DC] pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  <Mail className="w-4 h-4" />
                  <span>Technical Correspondence</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                  Inquire About Systems Engineering &amp; Implementations
                </h2>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  Academic peers, postgraduate students, and research collaborators interested in technical details,
                  architectural specifications, or joint engineering investigations are invited to connect directly.
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
                  href={`mailto:${profileData.contact.email}?subject=Technical%20Inquiry%20regarding%20Academic%20Projects`}
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
                <span className="font-semibold text-[#292D2A] block">Related Scholarship:</span>
                <Link href="/research" className="text-[#5B7260] hover:text-[#292D2A] font-medium underline">
                  Explore connected research themes and doctoral focus →
                </Link>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Student Capstone Mentorship:</span>
                <Link href="/teaching#mentorship" className="text-[#5B7260] hover:text-[#292D2A] font-medium underline">
                  Review student capstone guidance protocols →
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
              label: "Teaching",
              href: "/teaching",
              description: "University pedagogy, courses & student mentorship"
            }}
            next={{
              label: "Achievements",
              href: "/achievements",
              description: "Academic honors, collegiate awards & CSR leadership"
            }}
          />
        </div>

      </div>
    </div>
  );
}
