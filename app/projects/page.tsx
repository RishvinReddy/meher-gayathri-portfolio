import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Blocks, 
  FileCode, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/content/projects";

export const metadata: Metadata = {
  title: "Verified Projects & Prototypes | Meher Gayatri Devi Tiwari",
  description: "Detailed system architectures and cryptographic prototypes in blockchain e-voting, visual cryptography, IoT access control, and malware detection.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Applied Systems & Engineering"
            title="Verified Technical & Research Projects"
            subtitle="Engineered systems, architectural prototypes, and security implementations documented in Meher Gayatri Devi Tiwari's academic curriculum vitae."
          />

          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] mt-6 flex items-center space-x-3 text-xs text-[#575E59]">
            <ShieldCheck className="w-5 h-5 text-[#5B7260] shrink-0" />
            <div>
              <strong className="font-semibold text-[#292D2A]">Strict Content Provenance: </strong>
              All 5 featured projects correspond directly to verified research implementations and degree capstone investigations. No fabricated repositories or claims.
            </div>
          </div>
        </div>

        {/* Detailed Projects List */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-10 space-y-8 transition-all scroll-mt-28"
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-[#ECE6DC] pb-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#7E8580] font-mono">
                      Project 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A] leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="flex items-center space-x-1 font-mono text-sm font-semibold text-[#292D2A] bg-[#F4EFE6] px-3 py-1 rounded border border-[#E8E1D5]">
                    <Calendar className="w-3.5 h-3.5 text-[#849987]" />
                    <span>{project.year}</span>
                  </span>
                  <span className="text-xs font-medium text-[#3B5340] px-2.5 py-1 rounded bg-[#EBF0EC] border border-[#CBD7CE]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed">
                {project.summary}
              </p>

              {/* Problem & Approach Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Problem Statement */}
                <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#E8E1D5] space-y-3">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#7E8580]">
                    <AlertTriangle className="w-4 h-4 text-[#A87432]" />
                    <span>Problem Statement & Vulnerability</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Security Outcomes */}
                <div className="bg-[#F8F6F0] p-6 rounded-xl border border-[#E8E1D5] space-y-3">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-bold text-[#7E8580]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7260]" />
                    <span>Security Outcomes & Contribution</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#575E59]">
                    {project.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B7260] shrink-0 mt-1.5"></span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Detailed Technical Architecture Steps */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider font-bold text-[#7E8580]">
                  Architectural & Cryptographic Approach
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.technicalApproach.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-[#F8F6F0] border border-[#ECE6DC] text-xs text-[#3D4440] flex items-start space-x-2.5"
                    >
                      <span className="font-mono text-[#5B7260] font-bold shrink-0">
                        0{sIdx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Technologies Applied */}
              <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-[#7E8580] mr-2">
                    Technologies:
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8F6F0] text-[#292D2A] border border-[#E2DBD0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-[#7E8580] font-mono">
                  Affiliation: VIT / Academic Research Portfolio
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
