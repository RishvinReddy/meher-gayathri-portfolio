import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  HelpCircle, 
  Lightbulb,
  CheckCircle2,
  FolderGit2
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { researchThemes } from "@/content/research";

export const metadata: Metadata = {
  title: "Research Interests & Themes | Meher Gayatri Devi Tiwari",
  description: "Structured research domains: Information Security, Cybersecurity Governance & Risk Management, Blockchain, Privacy, IoT Security, Visual Cryptography, and Online Voting.",
};

export default function ResearchPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Research Program"
          title="Research Interests & Domains"
          subtitle="Documented scholarly research areas spanning information security, risk governance, cryptographic protocols, blockchain architectures, and privacy-preserving systems."
          breadcrumbs={[{ label: "Research" }]}
        />

        {/* Academic Overview Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] space-y-3">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#5B7260]">
            Scholarly Focus
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
            Research-Focused Scholar & Ph.D. Candidate
          </h2>
          <p className="text-sm sm:text-base text-[#575E59] leading-relaxed max-w-4xl">
            With 5+ years of research exposure, her scholarly work centers on advancing Information Security, Cybersecurity Governance, Risk Management (GRC), Blockchain & Smart Contract Security, Visual Cryptography, Privacy, IoT Security, and Secure Online Voting Systems.
          </p>
        </div>

        {/* Structured Research Themes Collection */}
        <div className="space-y-10">
          {researchThemes.map((theme, idx) => (
            <article
              key={theme.id}
              id={theme.id}
              className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-10 space-y-6 transition-all scroll-mt-28"
            >
              {/* Theme Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 border-b border-[#ECE6DC] pb-5">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {theme.badge}
                    </span>
                    <span className="text-xs font-mono text-[#7E8580]">
                      Domain 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                    {theme.title}
                  </h3>
                </div>
              </div>

              {/* Research Focus */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                  Research Focus
                </div>
                <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed">
                  {theme.focus}
                </p>
              </div>

              {/* Problem Area & Relevance Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#F8F6F0] p-5 rounded-xl border border-[#E8E1D5] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7E8580]">
                    Problem Area
                  </div>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {theme.problemArea}
                  </p>
                </div>

                <div className="bg-[#F8F6F0] p-5 rounded-xl border border-[#E8E1D5] space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#7E8580]">
                    Relevance
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
                    Related Verified Project:
                  </span>
                  {theme.relatedProjects.map((projTitle) => (
                    <Link
                      key={projTitle}
                      href="/projects"
                      className="inline-flex items-center space-x-1 px-3 py-1 rounded-md bg-[#F4EFE6] hover:bg-[#E8E1D5] text-xs font-medium text-[#292D2A] border border-[#E0D7C9] transition-colors"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-[#5B7260]" />
                      <span>{projTitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "About", href: "/about", description: "Biography & credentials" }}
          next={{ label: "Publications", href: "/publications", description: "Scholarly publication records" }}
        />

      </div>
    </div>
  );
}
