"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  AlertCircle, 
  Layers, 
  ShieldCheck,
  Calendar,
  Filter
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  publicationsData, 
  publicationCategories, 
  publicationsNotice,
  Publication 
} from "@/content/publications";

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesCategory =
      selectedCategory === "All Categories" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyBibtex = (pub: Publication) => {
    const bibtex = `@article{${pub.id},\n  title={${pub.title}},\n  author={${pub.authors.join(" and ")}},\n  journal={${pub.venue}},\n  year={${pub.year}}${pub.doi ? `,\n  doi={${pub.doi}}` : ""}\n}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Scholarly Contributions"
            title="Publications & Academic Papers"
            subtitle="Peer-reviewed research manuscripts, conference proceedings, and technical reports in Blockchain, Visual Cryptography, and Information Security."
          />

          {/* Academic Transparency Alert */}
          <div className="mt-8 p-6 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="font-semibold text-[#292D2A] flex items-center space-x-2">
                <span>Academic Fidelity & Citation Ingestion Notice</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                  Verified Policy
                </span>
              </div>
              <p className="text-[#575E59]">
                In accordance with academic publishing ethics, papers are indexed only upon confirmation of final DOI identifiers and publisher metadata. If you are an editor, co-author, or reviewer seeking preprints or citation verification, please direct requests to the correspondence address.
              </p>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FAF8F3] p-4 rounded-xl border border-[#E8E1D5]">
          {/* Category Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-[#7E8580] shrink-0 hidden sm:inline" />
            {publicationCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#292D2A] text-white"
                    : "bg-[#F8F6F0] text-[#575E59] hover:bg-[#E8E1D5] hover:text-[#292D2A] border border-[#E2DBD0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7E8580] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by title, author, venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#F8F6F0] border border-[#E2DBD0] text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#849987]"
            />
          </div>
        </div>

        {/* Publications List or Clean Academic State */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <article
                key={pub.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-8 space-y-4 transition-all"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    {pub.type} · {pub.year}
                  </span>
                  <span className="text-xs text-[#7E8580] font-medium">
                    {pub.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                  {pub.title}
                </h3>

                <p className="text-sm font-medium text-[#5B7260]">
                  {pub.authors.join(", ")}
                </p>

                <p className="text-xs sm:text-sm text-[#575E59] italic">
                  {pub.venue}
                </p>

                {pub.abstract && (
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed pt-2 border-t border-[#ECE6DC]">
                    {pub.abstract}
                  </p>
                )}

                <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-3">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5B7260] font-semibold hover:underline flex items-center space-x-1"
                      >
                        <span>DOI: {pub.doi}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyBibtex(pub)}
                    type="button"
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded bg-[#F8F6F0] border border-[#E2DBD0] hover:bg-[#E8E1D5] text-[#292D2A] text-xs font-medium transition-colors"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>BibTeX Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7E8580]" />
                        <span>Export BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Clean, Dignified Academic Empty / Ingestion State */
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <BookOpen className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-[#5B7260] uppercase tracking-wider">
                {publicationsNotice.status}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Scholarly Papers & Research Dissemination
              </h3>
              <p className="text-sm text-[#575E59] max-w-xl mx-auto leading-relaxed">
                {publicationsNotice.message}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E2DBD0] text-left text-xs space-y-2 max-w-lg mx-auto">
              <div className="font-semibold text-[#292D2A] flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-[#849987]" />
                <span>Verified Research Publication Topics:</span>
              </div>
              <ul className="space-y-1 text-[#575E59] list-disc list-inside">
                {publicationsNotice.researchFields.map((field, i) => (
                  <li key={i}>{field}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-xs text-[#7E8580]">
              To incorporate upcoming publication DOI links or co-authored preprints, please contact Meher ma&apos;am at{" "}
              <a href="mailto:mehergayatri17@gmail.com" className="text-[#5B7260] underline">
                mehergayatri17@gmail.com
              </a>.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

