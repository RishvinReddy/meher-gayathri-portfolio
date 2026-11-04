import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Eye, 
  Blocks, 
  Cpu, 
  Scale, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  Layers,
  HelpCircle,
  Lightbulb
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { researchThemes } from "@/content/research";

export const metadata: Metadata = {
  title: "Research Agenda & Cryptography | Meher Gayatri Devi Tiwari",
  description: "Doctoral research and scholarship in visual cryptography, blockchain e-voting verification, IoT access control, and cybersecurity governance.",
};

export default function ResearchPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "visual-cryptography": <Eye className="w-6 h-6 text-[#5B7260]" />,
    "blockchain-e-voting": <Blocks className="w-6 h-6 text-[#5B7260]" />,
    "iot-privacy-cloud": <Cpu className="w-6 h-6 text-[#5B7260]" />,
    "grc-threat-governance": <Scale className="w-6 h-6 text-[#5B7260]" />
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Research Program"
            title="Advancing Cryptographic & Decentralized Systems"
            subtitle="Investigating the intersection of information-theoretic secrecy, visual secret sharing schemes, immutable distributed ledgers, and privacy-preserving access control."
          />

          <div className="p-6 sm:p-8 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#5B7260]">
                Doctoral Research Agenda
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                Human Visual System (HVS) Cryptography & Quantum Resistance
              </h3>
              <p className="text-sm text-[#575E59] leading-relaxed">
                Her primary doctoral thesis work focuses on visual secret sharing protocols that decouple verification from computational decryption, preventing malicious client keystore theft while guaranteeing end-to-end election auditability.
              </p>
            </div>
            <Link
              href="/projects"
              className="px-5 py-3 rounded bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors shrink-0 flex items-center space-x-2"
            >
              <span>Explore Verified Prototypes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#849987]" />
            </Link>
          </div>
        </div>

        {/* Detailed Research Themes */}
        <div className="space-y-12">
          {researchThemes.map((theme, index) => (
            <article
              key={theme.id}
              id={theme.id}
              className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-2xl p-6 sm:p-10 space-y-8 scroll-mt-28"
            >
              {/* Theme Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-[#ECE6DC] pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center shrink-0">
                    {iconMap[theme.id] || <ShieldCheck className="w-6 h-6 text-[#5B7260]" />}
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] mb-2">
                      {theme.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                      {theme.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#7E8580] self-start">
                  Theme 0{index + 1}
                </div>
              </div>

              {/* Overview */}
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed">
                {theme.overview}
              </p>

              {/* Problems & Investigations 2-col Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                {/* Core Challenges */}
                <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#E2DBD0] space-y-3">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#7E8580]">
                    <HelpCircle className="w-4 h-4 text-[#849987]" />
                    <span>Fundamental Research Questions</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#575E59] list-disc list-outside pl-4">
                    {theme.keyProblems.map((prob, pIdx) => (
                      <li key={pIdx}>{prob}</li>
                    ))}
                  </ul>
                </div>

                {/* Theoretical Investigations */}
                <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#E2DBD0] space-y-3">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#7E8580]">
                    <Lightbulb className="w-4 h-4 text-[#5B7260]" />
                    <span>Methodological Approaches</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#575E59] list-disc list-outside pl-4">
                    {theme.investigations.map((inv, iIdx) => (
                      <li key={iIdx}>{inv}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="p-4 rounded-lg bg-[#EBF0EC]/60 border border-[#CBD7CE] flex items-start space-x-3 text-xs sm:text-sm text-[#2F4434]">
                <ShieldCheck className="w-5 h-5 text-[#5B7260] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Security Impact & Contribution: </strong>
                  {theme.impact}
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Call to Collaborate */}
        <section className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
            Research Collaboration & Peer Review
          </h3>
          <p className="text-sm text-[#575E59] leading-relaxed">
            Interested in joint research on visual cryptography threshold schemes, blockchain privacy benchmarks, or collaborative grant proposals?
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
            >
              <span>Initiate Research Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#849987]" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
