"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  AlertCircle,
  Filter,
  Mail,
  ArrowRight
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { 
  publicationsData, 
  publicationCategories, 
  publicationsNotice,
  Publication 
} from "@/content/publications";

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publicationsData.filter((pub) => {
    const matchesCategory =
      selectedCategory === "All Categories" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Scholarly Records"
          title="Scholarly Publications"
          subtitle="Scholarly articles, conference proceedings, and research manuscripts authored in reputable academic journals across Blockchain, Visual Cryptography, Privacy, and IoT Security."
          breadcrumbs={[{ label: "Publications" }]}
        />

        {/* Academic Verification & Integrity Box */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <div className="font-serif text-lg font-bold text-[#292D2A]">
                Academic Publication Policy & Verification
              </div>
              <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed max-w-3xl">
                The resume states that Meher ma&apos;am has &ldquo;authored publications in reputed journals and contributed to advancements in Blockchain, Visual Cryptography, Privacy, IoT Security, and Secure Online Voting Systems.&rdquo; In compliance with strict academic integrity, specific bibliographic entries, co-authors, and DOIs are displayed only upon author verification to ensure zero fabricated citation records.
              </p>
            </div>
          </div>
        </div>

        {/* Polished Empty State / Repository Ingestion State */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F3] p-4 rounded-xl border border-[#E8E1D5]">
              <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto">
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
            </div>

            {filteredPublications.map((pub) => (
              <article
                key={pub.id}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-8 space-y-3 transition-all"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    {pub.type} · {pub.year}
                  </span>
                  <span className="text-[#7E8580]">{pub.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#292D2A]">
                  {pub.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B7260] font-medium">
                  {pub.authors.join(", ")}
                </p>
                <p className="text-xs text-[#575E59] italic">{pub.venue}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-8 sm:p-14 text-center space-y-6 max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <BookOpen className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-[#5B7260] uppercase tracking-wider">
                {publicationsNotice.status}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Publication Records Being Verified
              </h2>
              <p className="text-sm text-[#575E59] max-w-xl mx-auto leading-relaxed">
                Specific paper titles, journal volume identifiers, and direct DOI links are currently being confirmed from author records. They will be indexed here once verified.
              </p>
            </div>

            {/* Documented Publication Topics */}
            <div className="p-5 rounded-xl bg-[#F8F6F0] border border-[#E2DBD0] text-left text-xs space-y-3 max-w-xl mx-auto">
              <div className="font-semibold text-[#292D2A] flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#5B7260]" />
                <span>Documented Publication Topics from Curriculum Vitae:</span>
              </div>
              <ul className="space-y-1.5 text-[#575E59] list-disc list-inside">
                {publicationsNotice.researchFields.map((field, i) => (
                  <li key={i}>{field}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-xs text-[#7E8580]">
              To provide publication DOIs or request preprints, please contact Meher ma&apos;am at{" "}
              <a href="mailto:mehergayatri17@gmail.com" className="text-[#5B7260] font-medium underline">
                mehergayatri17@gmail.com
              </a>.
            </div>
          </div>
        )}

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "Research", href: "/research", description: "Research domains & inquiry" }}
          next={{ label: "Teaching", href: "/teaching", description: "Pedagogy & mentorship" }}
        />

      </div>
    </div>
  );
}
