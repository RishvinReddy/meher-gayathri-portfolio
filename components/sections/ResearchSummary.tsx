import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Scale, 
  Blocks, 
  Lock, 
  Cpu, 
  Eye, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function ResearchSummary() {
  const iconMap: Record<string, React.ReactNode> = {
    "information-security": <ShieldCheck className="w-6 h-6 text-[#5B7260]" />,
    "cybersecurity-grc": <Scale className="w-6 h-6 text-[#5B7260]" />,
    "blockchain-security": <Blocks className="w-6 h-6 text-[#5B7260]" />,
    "privacy": <Lock className="w-6 h-6 text-[#5B7260]" />,
    "iot-security": <Cpu className="w-6 h-6 text-[#5B7260]" />,
    "visual-cryptography": <Eye className="w-6 h-6 text-[#5B7260]" />,
    "online-voting": <Blocks className="w-6 h-6 text-[#5B7260]" />
  };

  return (
    <section id="research" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Research Inquiry & Focus"
            title="Core Research Domains"
            subtitle="Bridging mathematical cryptography, decentralized architectures, and institutional governance to build tamper-evident, privacy-preserving digital infrastructures."
            className="mb-0"
          />

          <Link
            href="/research"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>View Detailed Methodology & Themes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {profileData.researchAreas.map((area, idx) => (
            <div
              key={area.title}
              className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center group-hover:bg-[#DEE7DF] transition-colors">
                    {iconMap[area.id] || <ShieldCheck className="w-6 h-6 text-[#5B7260]" />}
                  </div>
                  <span className="text-xs font-mono text-[#7E8580]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#292D2A] tracking-tight group-hover:text-[#5B7260] transition-colors">
                  {area.title}
                </h3>

                <p className="text-sm text-[#575E59] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#ECE6DC] flex items-center justify-between text-xs text-[#7E8580]">
                <span className="font-medium text-[#5B7260]">Peer Investigation</span>
                <Link
                  href={`/research#${area.id}`}
                  className="font-semibold text-[#292D2A] hover:text-[#5B7260] flex items-center space-x-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Research Quote / Paradigm Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-serif text-lg font-bold text-[#292D2A]">
              Human-Centric Cryptography & Zero-Computational Recovery
            </h4>
            <p className="text-sm text-[#575E59]">
              Her doctoral work in visual cryptography explores mechanisms where secret ballots and authentication credentials are optically reconstructed through human perception, creating quantum-immune security boundaries.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#292D2A] text-xs font-semibold text-white hover:bg-[#3D4440] transition-colors shrink-0"
          >
            <span>Read Research Agenda</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#849987]" />
          </Link>
        </div>

      </div>
    </section>
  );
}

