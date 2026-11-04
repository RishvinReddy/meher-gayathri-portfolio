import React from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, MapPin, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Academic Appointments (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              kicker="Academic Appointments"
              title="Professional & Teaching Experience"
              subtitle="Over 5 years across university instruction, curriculum enrichment, research mentorship, and program coordination."
              className="mb-8"
            />

            <div className="relative border-l-2 border-[#D4CBBC] ml-4 space-y-10 pl-6 sm:pl-8">
              {profileData.appointments.map((apt, index) => (
                <div key={index} className="relative group">
                  {/* Timeline bullet */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      apt.isCurrent
                        ? "bg-[#5B7260] border-[#F8F6F0] ring-4 ring-[#CBD7CE]"
                        : "bg-[#E8E1D5] border-[#575E59]"
                    }`}
                  />

                  <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 transition-all shadow-2xs space-y-3">
                    
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#ECE6DC] pb-3">
                      <div>
                        <span className="font-serif text-xl font-bold text-[#292D2A]">
                          {apt.role}
                        </span>
                        <div className="text-sm font-semibold text-[#5B7260]">
                          {apt.institution}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                          {apt.period}
                        </span>
                        <div className="text-xs text-[#7E8580] flex items-center justify-end space-x-1 mt-1">
                          <MapPin className="w-3 h-3 text-[#849987]" />
                          <span>{apt.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verification note if applicable */}
                    {apt.verificationNote && (
                      <div className="p-2.5 rounded bg-[#FAF2E6] border border-[#E8D6BF] text-xs text-[#7A5A2B] flex items-start space-x-2">
                        <AlertCircle className="w-4 h-4 text-[#A87432] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold">Verification Clarification: </strong>
                          {apt.verificationNote}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities list */}
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#575E59] list-disc list-outside pl-4">
                      {apt.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>

                    {/* Major achievements */}
                    {apt.achievements && apt.achievements.length > 0 && (
                      <div className="pt-3 border-t border-[#ECE6DC]">
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1.5">
                          Key Milestone
                        </div>
                        <div className="text-xs text-[#3D4440] font-medium bg-[#F4EFE6] px-3 py-2 rounded border border-[#E8E1D5]">
                          {apt.achievements[0]}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Credentials & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              kicker="Scholarly Credentials"
              title="Education & Degrees"
              subtitle="Formal engineering and research qualifications in Information Security and Information Technology."
              className="mb-8"
            />

            <div className="space-y-5">
              {profileData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-[#292D2A]">
                          {edu.degree}
                        </h4>
                        <div className="text-xs font-semibold text-[#5B7260]">
                          {edu.field}
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#E8E1D5] text-[#292D2A]">
                      {edu.status}
                    </span>
                  </div>

                  <div className="text-sm font-medium text-[#292D2A]">
                    {edu.institution}, {edu.country}
                  </div>

                  {edu.notes && (
                    <p className="text-xs text-[#575E59] leading-relaxed pt-1 border-t border-[#ECE6DC]">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Skills Callout */}
            <div className="p-6 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#292D2A] flex items-center justify-between">
                <span>Core Competencies</span>
                <Link href="/about" className="text-xs font-sans text-[#5B7260] hover:underline">
                  Full Matrix →
                </Link>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Information Security",
                  "Cybersecurity GRC",
                  "Blockchain & Smart Contracts",
                  "Visual Cryptography",
                  "Network Security",
                  "Malware Analysis",
                  "SIEM & SOC",
                  "Prompt Engineering",
                  "Curriculum Planning",
                  "Mendeley & LaTeX"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F4EFE6] border border-[#E0D7C9] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
