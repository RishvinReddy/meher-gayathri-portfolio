import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Calendar, 
  Layers, 
  ShieldCheck, 
  FolderGit2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { projectsData } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects & Technical Systems | Meher Gayatri Devi Tiwari",
  description: "Verified academic and technical projects documented in the curriculum vitae of Meher Gayatri Devi Tiwari.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Verified Systems"
          title="Academic & Technical Projects"
          subtitle="The five projects documented in the curriculum vitae, spanning blockchain e-voting, visual cryptography, IoT access control, malware detection, and computer vision."
          breadcrumbs={[{ label: "Projects" }]}
        />

        {/* Provenance Disclosure */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8 flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-[#292D2A]">
              Verified Projects Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed max-w-3xl">
              Each project listed below corresponds strictly to verified work documented in Meher ma&apos;am&apos;s curriculum vitae. In adherence to academic integrity principles, no unverified repository links, speculative system architectures, or unconfirmed outcomes have been introduced.
            </p>
          </div>
        </div>

        {/* Project Cards (Restrained, Easy-to-Scan Layout) */}
        <div className="space-y-6">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              id={project.id}
              className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 sm:p-8 space-y-4 transition-all scroll-mt-28"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#ECE6DC] pb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    Project 0{idx + 1}
                  </span>
                  <div className="flex items-center space-x-1 font-mono text-xs font-semibold text-[#292D2A] bg-[#F4EFE6] px-2.5 py-0.5 rounded border border-[#E0D7C9]">
                    <Calendar className="w-3.5 h-3.5 text-[#849987]" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-0">
                  {project.verifiedTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#F8F6F0] text-[#3D4440] border border-[#E2DBD0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#7E8580]">
                <span>Documented in Resume under Projects</span>
                <CheckCircle2 className="w-4 h-4 text-[#5B7260]" />
              </div>
            </article>
          ))}
        </div>

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "Teaching", href: "/teaching", description: "Pedagogy & courses" }}
          next={{ label: "Achievements", href: "/achievements", description: "Awards, leadership & CSR" }}
        />

      </div>
    </div>
  );
}
