"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  Filter, 
  Mail, 
  ArrowRight, 
  Copy, 
  Check, 
  Layers, 
  FolderGit2, 
  Sparkles, 
  X, 
  GraduationCap, 
  Clock,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { 
  publicationsData, 
  publicationCategories, 
  publicationTypes,
  publicationsNotice,
  documentedPublicationTopics,
  Publication 
} from "@/content/publications";
import { profileData } from "@/content/profile";

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filtered publications list
  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesCategory =
        selectedCategory === "All Categories" || pub.category === selectedCategory;
      const matchesType =
        selectedType === "All Types" || pub.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.authors.some((a) => a.toLowerCase().includes(q)) ||
        pub.venue.toLowerCase().includes(q) ||
        (pub.keywords && pub.keywords.some((k) => k.toLowerCase().includes(q)));

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== "All Categories" ||
    selectedType !== "All Types" ||
    searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedType("All Types");
    setSearchQuery("");
  };

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors.join(", ")} (${pub.year}). ${pub.title}. ${pub.venue}.${pub.doi ? ` https://doi.org/${pub.doi}` : ""}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleExpand = (id: string) => {
    setExpandedPubId(expandedPubId === id ? null : id);
  };

  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: PUBLICATIONS HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Publications & Scholarship"
            title="Scholarly Publications & Research Output"
            subtitle="Peer-reviewed journal contributions, conference proceedings, and scholarly manuscripts authored by Meher Gayatri Devi Tiwari across Information Security, Cryptography, Blockchain, and Privacy."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Column: Scholarly Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                Disseminating rigorous empirical and theoretical research in reputed international journals and conferences.
                Her published contributions investigate secret ballot preservation in electronic voting, threshold visual cryptography,
                identity-based access management for Internet of Things (IoT) edge nodes, and cryptographic exploit detection.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#292D2A]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-[#5B7260]" />
                  <span>Ph.D. Scholar, Vellore Institute of Technology</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#5B7260]" />
                  <span>Assistant Professor, Woxsen University</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Reputed Peer-Reviewed Venues</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
                <a
                  href="#topics"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <span>Documented Research Topics</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#protocol"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Ingestion Protocol</span>
                </a>

                <Link
                  href="/research"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Research Program →</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Fact Integrity Strip (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Academic Transparency Standard
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Zero-Fabrication Citation Policy
                </h3>
              </div>

              <p className="text-xs text-[#575E59] leading-relaxed">
                The curriculum vitae documents that Meher ma&apos;am has authored publications in reputed journals
                across Blockchain, Visual Cryptography, Privacy, and IoT Security. In strict accordance with academic ethics,
                bibliographic DOIs, page numbers, and direct publisher links are displayed only upon author confirmation.
              </p>

              <div className="pt-2 text-[11px] font-mono text-[#7E8580] border-t border-[#ECE6DC] flex items-center justify-between">
                <span>Repository Status:</span>
                <span className="text-[#3B5340] font-semibold">{publicationsNotice.status}</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: PUBLICATION DISCOVERY & SEARCH CONTROLS
        ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-[#ECE6DC] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] font-mono block">
                Repository Search &amp; Filtering
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Discover Scholarly Contributions
              </h2>
            </div>

            <div className="text-xs text-[#7E8580] font-mono">
              Showing {filteredPublications.length} indexed {filteredPublications.length === 1 ? "record" : "records"}
            </div>
          </div>

          {/* Search Bar & Dropdowns */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-4 sm:p-6 space-y-4 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
              
              {/* Search input (7 cols) */}
              <div className="md:col-span-7 relative">
                <Search className="w-4 h-4 text-[#7E8580] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by publication title, author, venue, or keyword..."
                  aria-label="Search publications"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F6F0] border border-[#D5CCC0] text-xs sm:text-sm text-[#292D2A] placeholder-[#7E8580] focus:outline-none focus:ring-2 focus:ring-[#849987] focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    type="button"
                    aria-label="Clear search query"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7E8580] hover:text-[#292D2A] p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Type dropdown (5 cols) */}
              <div className="md:col-span-5 flex items-center gap-2">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  aria-label="Filter by publication format"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#F8F6F0] border border-[#D5CCC0] text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#849987] transition-all"
                >
                  {publicationTypes.map((type) => (
                    <option key={type} value={type}>
                      Format: {type}
                    </option>
                  ))}
                </select>

                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    type="button"
                    className="shrink-0 px-3 py-2.5 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#CBD7CE]"
                  >
                    Reset
                  </button>
                )}
              </div>

            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
              <span className="text-xs font-medium text-[#7E8580] shrink-0 mr-1 flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Domain:</span>
              </span>
              {publicationCategories.map((cat) => (
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
            SECTION C & D: PUBLICATION LIST / EXPANDABLE DETAILS OR EMPTY STATE
        ========================================================================= */}
        <section className="space-y-6">
          {filteredPublications.length > 0 ? (
            <div className="space-y-4">
              {filteredPublications.map((pub, idx) => {
                const isExpanded = expandedPubId === pub.id;
                const isCopied = copiedId === pub.id;

                return (
                  <article
                    key={pub.id}
                    className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-8 space-y-4 transition-all shadow-2xs"
                  >
                    {/* Top Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECE6DC] pb-3 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono font-bold text-[#292D2A]">
                          [PUB {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] font-mono font-medium">
                          {pub.type}
                        </span>
                        <span className="text-[#7E8580] font-mono">
                          {pub.year}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-[#5B7260] font-medium">
                        {pub.category}
                      </span>
                    </div>

                    {/* Primary Visual Anchor: Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] leading-snug">
                      {pub.title}
                    </h3>

                    {/* Bibliographic Details: Authors & Venue */}
                    <div className="space-y-1 text-xs sm:text-sm text-[#4A514C]">
                      <div>
                        <span className="font-medium">Authors: </span>
                        <span>
                          {pub.authors.map((author, aIdx) => (
                            <span
                              key={aIdx}
                              className={
                                author.includes("Meher") || author.includes("Tiwari")
                                  ? "font-bold text-[#292D2A] underline underline-offset-2"
                                  : ""
                              }
                            >
                              {author}
                              {aIdx < pub.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </span>
                      </div>

                      <div className="text-xs text-[#575E59] italic pt-0.5">
                        Published in: {pub.venue} ({pub.year})
                      </div>
                    </div>

                    {/* Action Toolbar */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#ECE6DC]">
                      <div className="flex flex-wrap items-center gap-2">
                        {pub.abstract && (
                          <button
                            onClick={() => toggleExpand(pub.id)}
                            type="button"
                            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F8F6F0] hover:bg-[#E8E1D5] text-xs font-medium text-[#292D2A] border border-[#D5CCC0] transition-colors"
                          >
                            <span>{isExpanded ? "Hide Abstract" : "Read Abstract"}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}

                        <button
                          onClick={() => handleCopyCitation(pub)}
                          type="button"
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F8F6F0] hover:bg-[#E8E1D5] text-xs font-medium text-[#292D2A] border border-[#D5CCC0] transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#5B7260]" />
                              <span className="text-[#5B7260] font-semibold">Citation Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#7E8580]" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`mailto:${profileData.contact.email}?subject=Preprint%20Request:%20${encodeURIComponent(pub.title)}`}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#F8F6F0] hover:bg-[#E8E1D5] text-xs font-medium text-[#292D2A] border border-[#D5CCC0] transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#7E8580]" />
                          <span>Request Preprint</span>
                        </a>
                      </div>

                      {pub.doi && (
                        <a
                          href={pub.url || `https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                        >
                          <span>DOI: {pub.doi}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                    {/* Expandable Abstract Drawer */}
                    {isExpanded && pub.abstract && (
                      <div className="mt-4 p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-3">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] block font-mono">
                          Abstract
                        </span>
                        <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                          {pub.abstract}
                        </p>

                        {pub.keywords && pub.keywords.length > 0 && (
                          <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-[#ECE6DC]">
                            <span className="text-xs text-[#7E8580] font-medium mr-1">
                              Keywords:
                            </span>
                            {pub.keywords.map((kw, kIdx) => (
                              <span
                                key={kIdx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#FAF8F3] text-[#575E59] border border-[#E2DBD0]"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : hasActiveFilters ? (
            /* Empty State for Search Filter query */
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-3xl p-10 sm:p-14 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                No Publications Found
              </h3>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                No indexed publication records match your query &ldquo;{searchQuery}&rdquo; within the selected filters.
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
          ) : (
            /* Institutional Ingestion Registry Box */
            <div id="protocol" className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-[#ECE6DC] pb-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#5B7260]">
                    <Clock className="w-4 h-4" />
                    <span>{publicationsNotice.status}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                    Scholarly Repository &amp; DOI Synchronization
                  </h3>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {publicationsNotice.message}
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-4 rounded-xl border border-[#E8E1D5] text-xs space-y-1.5 shrink-0 sm:max-w-xs">
                  <span className="font-semibold text-[#292D2A] block">Bibliographic Standard:</span>
                  <span className="text-[#575E59] block leading-relaxed">
                    Direct author confirmation before indexing to prevent synthetic citations.
                  </span>
                </div>
              </div>

              {/* Publication Topics Summary Grid */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider font-semibold text-[#7E8580]">
                  5 Documented Research Domains Being Indexed:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {publicationsNotice.researchFields.map((field, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] flex items-start space-x-3"
                    >
                      <FileText className="w-4 h-4 text-[#5B7260] shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-xs font-semibold text-[#292D2A] block leading-snug">
                          {field}
                        </span>
                        <span className="text-[11px] font-mono text-[#7E8580]">
                          Author-Verified Domain
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#ECE6DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8580]">
                <span>
                  Are you an editor, reviewer, or co-author? For publication DOIs or preprints, contact the author office.
                </span>
                <a
                  href={`mailto:${profileData.contact.email}?subject=Scholarly%20Publication%20Verification`}
                  className="font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1 shrink-0"
                >
                  <span>Submit Verified Record</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION E: DOCUMENTED PUBLICATION DOSSIER (CURRICULUM VITAE SOURCE)
        ========================================================================= */}
        <section id="topics" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <span className="h-px w-6 bg-[#849987]"></span>
                <span>Curriculum Vitae Research Output</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Documented Publication Inquiries
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] max-w-3xl leading-relaxed">
                The five verified research dissemination fields documented in Meher Gayatri Devi Tiwari&apos;s curriculum vitae.
                Each topic is tied to verified academic projects and established research themes.
              </p>
            </div>

            <Link
              href="/research"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Explore Research Themes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentedPublicationTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-9 space-y-6 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECE6DC] pb-3 text-xs">
                    <span className="font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {topic.badge}
                    </span>
                    <span className="text-[#7E8580] font-mono text-[11px]">
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] leading-snug">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                    {topic.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7E8580] block font-semibold">
                      Key Technical Methodologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.keyMethodologies.map((method, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4EFE6] text-[#3D4440] border border-[#E0D7C9]"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ECE6DC] space-y-3">
                  {topic.relatedProjects.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[#7E8580] font-semibold">
                        Related Project:
                      </span>
                      {topic.relatedProjects.map((p) => (
                        <Link
                          key={p.id}
                          href="/projects"
                          className="inline-flex items-center space-x-1 text-xs text-[#292D2A] hover:text-[#5B7260] font-medium underline underline-offset-2"
                        >
                          <FolderGit2 className="w-3.5 h-3.5 text-[#5B7260]" />
                          <span>{p.title} ({p.year})</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-[#7E8580] pt-1">
                    <span className="italic text-[11px]">{topic.documentedSource}</span>
                    <Link
                      href={`/research#${topic.researchThemeId}`}
                      className="font-semibold text-[#5B7260] hover:text-[#292D2A] inline-flex items-center space-x-1"
                    >
                      <span>View Theme</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION F: SCHOLARLY RESOURCES & INSTITUTIONAL REPOSITORIES
        ========================================================================= */}
        <section className="space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <Layers className="w-4 h-4" />
                <span>Verified Scholarly Profiles</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Institutional Portals &amp; Profiles
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                Connect with Meher Gayatri Devi Tiwari&apos;s verified institutional profiles, academic faculty directories, and professional networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Resource 1: Woxsen Faculty */}
              <a
                href={profileData.contact.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-3 group shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs text-[#7E8580]">
                  <span className="font-mono uppercase font-semibold text-[#5B7260]">Faculty Directory</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7E8580] group-hover:text-[#292D2A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                  Woxsen University
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Official academic profile at the School of Technology, Woxsen University, Hyderabad.
                </p>
              </a>

              {/* Resource 2: VIT Doctoral */}
              <a
                href="https://vit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-3 group shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs text-[#7E8580]">
                  <span className="font-mono uppercase font-semibold text-[#5B7260]">Doctoral Research</span>
                  <ArrowUpRight className="w-4 h-4 text-[#7E8580] group-hover:text-[#292D2A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                  Vellore Institute of Technology
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Doctoral research scholar portal at Vellore Institute of Technology (VIT), Vellore, India.
                </p>
              </a>

              {/* Resource 3: Fact Audit */}
              <Link
                href="/#verification"
                className="p-6 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-3 group shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs text-[#7E8580]">
                  <span className="font-mono uppercase font-semibold text-[#5B7260]">Editorial Transparency</span>
                  <ArrowRight className="w-4 h-4 text-[#7E8580] group-hover:text-[#292D2A] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                  Fact Audit &amp; Integrity Charter
                </h3>
                <p className="text-xs text-[#575E59] leading-relaxed">
                  Review the source-grounded verification record for all academic claims, degrees, and career dates.
                </p>
              </Link>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION G: ACADEMIC CONTACT & PREPRINT PROTOCOL
        ========================================================================= */}
        <section className="space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-[#ECE6DC] pb-8">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                  <Mail className="w-4 h-4" />
                  <span>Preprints &amp; Inquiries</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                  Request Preprints &amp; Scholarly Correspondence
                </h2>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  Researchers, conference chairs, and journal reviewers may request preprints or full-text manuscript PDFs
                  by contacting Meher Gayatri Devi Tiwari directly.
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
                  href={`mailto:${profileData.contact.email}?subject=Scholarly%20Preprint%20Request`}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white/60 hover:bg-white text-[#292D2A] border border-[#D5CCC0] text-xs font-semibold transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#575E59]">
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Faculty Office:</span>
                <span>
                  School of Technology, Woxsen University, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India.
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-[#292D2A] block">Turnaround Protocol:</span>
                <span>
                  Academic manuscript requests and peer inquiries are typically addressed within 2 business days.
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
