import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { publicationsNotice } from "@/content/publications";

export default function PublicationsShowcase() {
  return (
    <section id="publications" className="py-20 lg:py-28 bg-[#FAF8F3] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Scholarly Publications"
            title="Publications & Dissemination"
            subtitle="Author of scholarly contributions in reputed journals across Blockchain, Visual Cryptography, Privacy Protocols, and IoT Security."
            className="mb-0"
          />

          <Link
            href="/publications"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>Browse Full Repository Notice</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Integrity Notice Box */}
        <div className="bg-[#F8F6F0] border border-[#E8E1D5] rounded-2xl p-8 lg:p-10 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
                  Scholarly Research Dissemination
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                  {publicationsNotice.status}
                </span>
              </div>
              <p className="text-sm text-[#575E59] leading-relaxed max-w-3xl">
                {publicationsNotice.message}
              </p>
            </div>
          </div>

          <div className="border-t border-[#ECE6DC] pt-6">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] mb-3">
              Documented Publication Domains from Curriculum Vitae
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {publicationsNotice.researchFields.map((field, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] text-xs text-[#3D4440] font-medium flex items-center space-x-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#849987] shrink-0"></span>
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Transparency Note */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] p-4 rounded-xl flex items-center justify-between flex-wrap gap-4 text-xs text-[#575E59]">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#5B7260] shrink-0" />
              <span>
                To uphold strict academic fidelity, individual titles and DOIs are indexed only upon direct confirmation.
              </span>
            </div>
            <Link
              href="/publications"
              className="font-semibold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1"
            >
              <span>Repository Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
