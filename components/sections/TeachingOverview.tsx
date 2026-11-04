import React from "react";
import Link from "next/link";
import { Users, BookOpen, GraduationCap, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { teachingData } from "@/content/teaching";

export default function TeachingOverview() {
  return (
    <section id="teaching" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            kicker="Academic Pedagogy"
            title="Teaching & Student Mentorship"
            subtitle="Fostering critical thinking, practical defense acumen, and research-led innovation across undergraduate and postgraduate computer science cohorts."
            className="mb-0"
          />

          <Link
            href="/teaching"
            className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-sm font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group shrink-0"
          >
            <span>Explore Courses & Syllabi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {teachingData.keyMetrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-5 text-center"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A]">
                {metric.value}
              </div>
              <div className="text-xs text-[#575E59] font-medium mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy & Mentorship Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Philosophy Statement (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl p-7 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#5B7260]">
              <GraduationCap className="w-4 h-4" />
              <span>Pedagogical Philosophy</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#292D2A] leading-snug">
              Bridging Rigorous Theory with Adversarial Reality
            </h3>
            <p className="text-sm text-[#575E59] leading-relaxed">
              {teachingData.philosophy}
            </p>
            <div className="pt-3 border-t border-[#ECE6DC] space-y-2">
              <div className="text-xs font-semibold text-[#292D2A]">
                Key Pedagogical Focus:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Experiential Labs", "Threat Modeling", "Curriculum Design", "Ethics & GRC"].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs px-2.5 py-0.5 rounded bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Courses Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {teachingData.courses.slice(0, 3).map((course, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-5 sm:p-6 transition-all"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg font-bold text-[#292D2A]">
                    {course.title}
                  </h4>
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    {course.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#575E59] mb-3">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {course.topics.slice(0, 2).map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-[#F4EFE6] text-[#3D4440] border border-[#E0D7C9]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
