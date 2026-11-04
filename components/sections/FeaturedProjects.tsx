import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/content/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF8F3] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Applied Research & Prototyping"
            title="Verified Research Projects"
            subtitle="Engineered cryptographic prototypes, decentralized voting frameworks, and distributed access control models documented in verified academic portfolios."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>View All 5 Project Architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-[#575E59]">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE] font-medium">
                    <Layers className="w-3.5 h-3.5 text-[#5B7260]" />
                    <span>{project.category}</span>
                  </span>
                  <span className="font-mono font-semibold text-[#292D2A] flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#849987]" />
                    <span>{project.year}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#292D2A] tracking-tight leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#575E59] leading-relaxed">
                  {project.summary}
                </p>

                {/* Key outcomes bullet point */}
                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1.5">
                    Security Contribution
                  </div>
                  <div className="text-xs text-[#4F5651] bg-[#F4EFE6] p-3 rounded-lg border border-[#E8E1D5] flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B7260] shrink-0 mt-0.5" />
                    <span>{project.keyOutcomes[0]}</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-[#FAF8F3] text-[#3D4440] border border-[#E0D7C9]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] text-[#7E8580] py-0.5 px-1 font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 mt-6 border-t border-[#ECE6DC] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#3B5340]">Verified Resume Project</span>
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#292D2A] hover:text-[#5B7260] transition-colors"
                >
                  <span>Detailed Architecture</span>
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom banner for remaining projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.slice(3, 5).map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-lg bg-[#F8F6F0] border border-[#E8E1D5] flex items-start justify-between gap-4"
            >
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#7E8580] mb-1">
                  <span className="font-mono font-semibold text-[#292D2A]">{project.year}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                </div>
                <h4 className="font-serif text-base font-bold text-[#292D2A]">
                  {project.title}
                </h4>
                <p className="text-xs text-[#575E59] mt-1 line-clamp-2">
                  {project.summary}
                </p>
              </div>
              <Link
                href={`/projects#${project.id}`}
                className="shrink-0 p-2 rounded hover:bg-[#E8E1D5] text-[#5B7260] hover:text-[#292D2A] transition-colors"
                aria-label={`View details for ${project.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

