import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  FolderGit2, 
  CheckCircle2, 
  Lock, 
  Layers, 
  Cpu, 
  Eye, 
  Binary, 
  Compass, 
  Network, 
  Mail, 
  FileText,
  ExternalLink,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { generateRouteMetadata } from "@/config/seo";
import PageHeader from "@/components/ui/PageHeader";
import { consolidatedThemes, researchMethodologies } from "@/content/research";
import { projectsData } from "@/content/projects";
import { publicationsNotice } from "@/content/publications";
import { profileData } from "@/content/profile";

export const metadata: Metadata = generateRouteMetadata("/research");

export default function ResearchPage() {
  // Verified research projects
  const verifiedProjects = projectsData;

  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: RESEARCH HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Research & Scholarship"
            title="Advancing Information Security, Cryptography & Decentralized Systems"
            subtitle="The scholarly agenda of Meher Gayatri Devi Tiwari — investigating applied cryptography, blockchain architectures, visual cryptography schemes, IoT security, and enterprise risk governance."
          />

          {/* Academic Trajectory & Institutional Framing Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                At the intersection of empirical computing and formal information security, Meher ma&apos;am&apos;s research
                addresses the challenge of constructing verifiable, privacy-preserving digital architectures.
                Her scholarly work investigates how cryptographic primitives, distributed consensus, and visual secret sharing
                can guarantee tamper-evidence and confidential data integrity without relying on vulnerable centralized authorities.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] text-[#292D2A] font-medium shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-[#5B7260]" />
                  <span>Ph.D. Scholar, Vellore Institute of Technology (VIT)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] text-[#292D2A] font-medium shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#5B7260]" />
                  <span>Assistant Professor, Woxsen University</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>5+ Years Academic &amp; Research Exposure</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
                <a
                  href="#themes"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Explore Research Themes</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/publications"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Publications Repository</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Academic Biography →</span>
                </Link>
              </div>
            </div>

            {/* Right Quick Jump Navigation Panel (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Research Directory
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Page Navigation &amp; Section Index
                </h3>
              </div>

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" aria-label="Research page section index">
                <a
                  href="#overview"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>1. Intellectual Agenda</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#themes"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>2. Core Themes (01–05)</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#projects"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>3. Verified Projects</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#methodology"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>4. Methodologies</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#publications"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>5. Published Works</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>

                <a
                  href="#collaboration"
                  className="p-2.5 rounded-lg bg-[#F8F6F0] hover:bg-[#EBF0EC] text-[#3D4440] hover:text-[#292D2A] border border-[#E8E1D5] transition-all flex items-center justify-between group"
                >
                  <span>6. Scholarly Inquiries</span>
                  <span className="text-[#849987] font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </nav>

              <div className="pt-2 text-[11px] text-[#7E8580] leading-relaxed border-t border-[#ECE6DC]">
                Notice: Research interests, verified technical implementations, and published papers are cataloged separately to maintain rigorous academic fidelity.
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: RESEARCH OVERVIEW & INTELLECTUAL AGENDA
        ========================================================================= */}
        <section id="overview" className="scroll-mt-24 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span>Theoretical Framework &amp; Focus</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
              Intellectual Agenda &amp; Disciplinary Synthesis
            </h2>
            <p className="text-base sm:text-lg text-[#575E59] max-w-4xl leading-relaxed">
              Her scholarship operates across three complementary layers: theoretical cryptographic primitives,
              distributed ledger architectures, and enterprise governance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Pillar 1: Cryptographic Primitives */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-7 space-y-4 shadow-2xs hover:border-[#849987] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                  Pillar I · Cryptography
                </span>
                <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                  Optical &amp; Visual Cryptography
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Investigating $(k, n)$-threshold secret sharing where confidential records are optically decomposed.
                Reconstruction occurs via the human visual system (HVS), providing information-theoretic secrecy without algorithmic exposure.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#5B7260] border-t border-[#ECE6DC]">
                Focus: Ballot Secrecy &amp; Secret Sharing
              </div>
            </div>

            {/* Pillar 2: Decentralized Ledger Systems */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-7 space-y-4 shadow-2xs hover:border-[#849987] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                  Pillar II · Decentralization
                </span>
                <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                  Blockchain &amp; Smart Contracts
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Exploring distributed consensus and smart contract security on Ethereum and Hyperledger platforms to construct
                immutable, non-repudiable transaction logs for electronic elections and decentralized access control.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#5B7260] border-t border-[#ECE6DC]">
                Focus: Verifiable Consensus &amp; Auditability
              </div>
            </div>

            {/* Pillar 3: Governance & IoT */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-7 space-y-4 shadow-2xs hover:border-[#849987] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                  Pillar III · Governance &amp; Edge
                </span>
                <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                  Cybersecurity GRC &amp; IoT Security
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                Bridging technical vulnerability identification (malware heuristics, RSA analysis) with enterprise
                cybersecurity governance, risk management frameworks, and identity-based access control for edge IoT nodes.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#5B7260] border-t border-[#ECE6DC]">
                Focus: Enterprise Risk &amp; Distributed Edge
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION C: 5 CONSOLIDATED RESEARCH THEMES
        ========================================================================= */}
        <section id="themes" className="scroll-mt-24 space-y-10">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>Scholarly Taxonomy</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Core Research Themes
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                The five primary thematic areas documented in Meher Gayatri Devi Tiwari&apos;s academic portfolio,
                spanning foundational security, decentralized protocols, and optical cryptography.
              </p>
            </div>

            <div className="text-xs font-mono text-[#7E8580] bg-[#FAF8F3] px-3 py-1.5 rounded-lg border border-[#E2DBD0] shrink-0">
              5 Documented Themes · 100% Fact-Verified
            </div>
          </div>

          {/* Theme Articles Stack */}
          <div className="space-y-10 lg:space-y-12">
            {consolidatedThemes.map((theme) => (
              <article
                key={theme.id}
                id={theme.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-10 lg:p-12 space-y-8 transition-all shadow-sm scroll-mt-28"
              >
                {/* Theme Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-[#ECE6DC] pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#292D2A] text-[#F8F6F0]">
                        THEME {theme.num}
                      </span>
                      <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                        {theme.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#292D2A] tracking-tight">
                      {theme.title}
                    </h3>
                  </div>

                  <span className="text-xs text-[#7E8580] font-mono shrink-0 pt-1">
                    {theme.scholarlyScope}
                  </span>
                </div>

                {/* Evidence-Based Narrative Description */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                    Scholarly Description &amp; Scope
                  </span>
                  <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed max-w-4xl font-normal">
                    {theme.description}
                  </p>
                </div>

                {/* Documented Focus Points */}
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                    Documented Inquiries &amp; Competencies
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {theme.documentedFocus.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] text-xs sm:text-sm text-[#4A514C]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#5B7260] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem Area & Societal/Academic Relevance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="bg-[#F8F6F0] p-6 rounded-2xl border border-[#E8E1D5] space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#7E8580]">
                      <Compass className="w-3.5 h-3.5 text-[#5B7260]" />
                      <span>The Scholarly Challenge / Problem Area</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                      {theme.problemArea}
                    </p>
                  </div>

                  <div className="bg-[#F8F6F0] p-6 rounded-2xl border border-[#E8E1D5] space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#7E8580]">
                      <Network className="w-3.5 h-3.5 text-[#5B7260]" />
                      <span>Academic &amp; Practical Relevance</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                      {theme.relevance}
                    </p>
                  </div>
                </div>

                {/* Related Verified Projects (if any) */}
                {theme.relatedProjects.length > 0 && (
                  <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-[#7E8580]">
                      Related Verified Project(s):
                    </span>
                    {theme.relatedProjects.map((proj) => (
                      <Link
                        key={proj.id}
                        href="/projects"
                        className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#FAF8F3] hover:bg-[#EBF0EC] text-xs font-medium text-[#292D2A] border border-[#D5CCC0] transition-colors group"
                      >
                        <FolderGit2 className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span>{proj.title}</span>
                        <span className="font-mono text-[10px] text-[#7E8580]">({proj.year})</span>
                        <ArrowRight className="w-3 h-3 text-[#849987] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION D: DOCUMENTED RESEARCH PROJECTS
        ========================================================================= */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>Applied Technical Research</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Verified Research Projects
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                Applied systems and engineering prototypes documented in the curriculum vitae.
                These represent completed, documented technical implementations distinct from theoretical hypotheses.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Explore Projects Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {verifiedProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all shadow-2xs hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-[#7E8580] border-b border-[#ECE6DC] pb-3">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] font-medium">
                      {proj.domains[0]}
                    </span>
                    <span className="font-mono font-semibold text-[#292D2A]">
                      {proj.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.verifiedTags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#575E59] border border-[#E2DBD0]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION E: RESEARCH METHODOLOGY & TECHNICAL APPROACH
        ========================================================================= */}
        <section id="methodology" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span>Scientific Rigor &amp; Tools</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
              Research Methodologies &amp; Technical Foundations
            </h2>
            <p className="text-sm sm:text-base text-[#575E59] max-w-4xl leading-relaxed">
              Documented technical methods and scientific toolchains utilized across Meher ma&apos;am&apos;s academic career.
              In adherence to strict fact fidelity, no speculative laboratory apparatus or unverified experimental metrics are claimed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {researchMethodologies.map((method, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-7 space-y-4 shadow-2xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8580] border-b border-[#ECE6DC] pb-2.5">
                    <span>METHOD 0{idx + 1}</span>
                    <span className="font-semibold text-[#5B7260]">{method.category}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                    {method.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {method.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE6DC] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                    Documented Applications:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {method.documentedApplications.map((app, aIdx) => (
                      <span key={aIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#3D4440] border border-[#E0D7C9]">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION F: PUBLICATIONS & SCHOLARLY DISSEMINATION
        ========================================================================= */}
        <section id="publications" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#ECE6DC] pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  <BookOpen className="w-4 h-4" />
                  <span>Scholarly Dissemination</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                  Peer-Reviewed Publications &amp; Conference Contributions
                </h2>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  Meher Gayatri Devi Tiwari is an author of peer-reviewed research papers published in reputable academic journals
                  and international conferences across Blockchain, Visual Cryptography, Privacy, and IoT Security.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/publications"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Open Publications Repository</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Academic Synchronization Disclosure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 bg-[#F8F6F0] border border-[#E8E1D5] rounded-2xl p-6 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                  Repository Ingestion Protocol
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Strict Academic Fact Fidelity
                </h3>
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  In accordance with formal academic standards, citations, co-authors, and DOIs are integrated directly upon author verification.
                  We refrain from generating synthetic DOIs, speculative citation counts, or unverified publisher links.
                </p>
                <div className="pt-2 text-[11px] font-mono text-[#7E8580] border-t border-[#ECE6DC]">
                  Status: {publicationsNotice.status}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                  Documented Publication Fields in Ingestion:
                </span>
                <div className="space-y-2.5">
                  {publicationsNotice.researchFields.map((field, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] text-xs sm:text-sm text-[#3D4440] flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2.5">
                        <FileText className="w-4 h-4 text-[#5B7260] shrink-0" />
                        <span className="font-medium">{field}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#7E8580] shrink-0">Indexed</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION G: RESEARCH COLLABORATION
        ========================================================================= */}
        <section id="collaboration" className="scroll-mt-24 space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <Network className="w-4 h-4" />
                <span>Academic Collaboration</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Scholarly Inquiry &amp; Inter-Institutional Partnerships
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                Meher Gayatri Devi Tiwari welcomes academic collaboration with faculty members, doctoral scholars,
                independent researchers, and industry specialists interested in applied cryptography, decentralized systems, and risk governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  Joint Publications
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Collaborative authorship for peer-reviewed journal articles, conference papers, and book chapters in Visual Cryptography and Blockchain.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  Colloquia &amp; Keynotes
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Invited technical talks, guest lectures, and symposium presentations on Cybersecurity Governance, Smart Contract Security, and Privacy.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                <span className="font-serif text-lg font-bold text-[#292D2A] block">
                  Student Mentorship
                </span>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Co-supervising undergraduate and postgraduate capstone dissertations, research papers, and technical hackathon projects.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#ECE6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#7E8580] text-center sm:text-left">
                Institutional Base: School of Technology, Woxsen University, Hyderabad, Telangana, India.
              </div>

              <div className="flex items-center space-x-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Initiate Correspondence</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5]" />
                </Link>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
