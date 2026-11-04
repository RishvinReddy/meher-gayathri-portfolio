import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F3] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Featured Academic Work"
            title="Verified Projects & Systems"
            subtitle="Selected research and engineering projects documented in the curriculum vitae across blockchain e-voting, visual cryptography, and distributed access control."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="mt-6 md:mt-0 inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] uppercase tracking-wider transition-colors shrink-0"
          >
            <span>All 5 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all hover:-translate-y-0.5 hover:shadow-2xs"
            >
              <div className="space-y-3.5">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-[#7E8580] border-b border-[#ECE6DC] pb-3">
                  <span className="font-mono font-medium text-[11px] px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    {project.domains.join(" · ")}
                  </span>
                  <span className="font-mono text-xs text-[#292D2A] font-semibold flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-[#849987]" />
                    <span>{project.year}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-xl font-bold text-[#292D2A] tracking-tight leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-[#ECE6DC] flex items-center justify-between">
                <span className="text-[11px] text-[#7E8580] font-mono">
                  Verified Project
                </span>
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Scholarly Publication Preview Banner */}
        <div className="mt-8 p-6 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7E8580]">
              Scholarly Dissemination
            </span>
            <h4 className="font-serif text-lg font-bold text-[#292D2A]">
              Reputed Journal Publications & Preprints
            </h4>
            <p className="text-xs text-[#575E59]">
              Documented publications in Blockchain, Visual Cryptography, Privacy, and IoT Security.
            </p>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-xs font-semibold text-[#292D2A] hover:bg-[#DEE7DF] transition-colors shrink-0"
          >
            <span>View Publications Notice</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#5B7260]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
