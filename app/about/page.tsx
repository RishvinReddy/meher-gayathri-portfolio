import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  HeartHandshake, 
  Award,
  Terminal,
  Cpu,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export const metadata: Metadata = {
  title: "About Meher Gayatri Devi Tiwari | Academic Biography & Credentials",
  description: "Academic biography, research scholar background, appointments at Woxsen University & VIT, education credentials, and technical skills matrix.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Academic Biography"
            title="Curriculum Vitae & Professional Background"
            subtitle="Educator, doctoral researcher, and cybersecurity governance specialist dedicated to rigorous information security research and experiential computer science instruction."
          />

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5]">
              <div className="text-xs uppercase tracking-wider text-[#7E8580] font-semibold">Active Role</div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] mt-1">Assistant Professor</div>
              <div className="text-xs text-[#5B7260]">Woxsen University</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5]">
              <div className="text-xs uppercase tracking-wider text-[#7E8580] font-semibold">Doctoral Focus</div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] mt-1">Ph.D. Scholar</div>
              <div className="text-xs text-[#5B7260]">Vellore Inst. of Technology</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5]">
              <div className="text-xs uppercase tracking-wider text-[#7E8580] font-semibold">Experience</div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] mt-1">5+ Years</div>
              <div className="text-xs text-[#5B7260]">Teaching & Research</div>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5]">
              <div className="text-xs uppercase tracking-wider text-[#7E8580] font-semibold">Honors</div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] mt-1">25+ Recognitions</div>
              <div className="text-xs text-[#5B7260]">Technical Symposia</div>
            </div>
          </div>
        </div>

        {/* Narrative Biography Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl p-6 space-y-4">
              <div className="w-16 h-16 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center font-serif text-3xl font-bold text-[#292D2A]">
                MG
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
                  Meher Gayatri Devi Tiwari
                </h3>
                <p className="text-xs text-[#575E59] font-medium mt-0.5">
                  Assistant Professor & Information Security Researcher
                </p>
              </div>
              <div className="border-t border-[#ECE6DC] pt-3 space-y-2 text-xs text-[#575E59]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#849987] shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#5B7260] shrink-0" />
                  <span>Verified Resume Profile</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-2.5 px-4 rounded bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Request Full CV / Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-[#3D4440] leading-relaxed text-base sm:text-lg">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
              Research-Led Pedagogy & Resilient Cyber Governance
            </h3>
            {profileData.bio.full.map((paragraph, idx) => (
              <p key={idx} className="text-[#575E59]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Education Credentials */}
        <section className="space-y-8">
          <SectionHeading
            kicker="Academic Foundations"
            title="Formal Degrees & Qualifications"
            subtitle="Higher education pedigree in computer science, information security, and cryptographic engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#E8E1D5] text-[#292D2A]">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#292D2A]">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-semibold text-[#5B7260]">
                    {edu.field}
                  </div>
                  <div className="text-sm font-medium text-[#292D2A]">
                    {edu.institution}, {edu.country}
                  </div>
                </div>

                {edu.notes && (
                  <p className="text-xs text-[#575E59] border-t border-[#ECE6DC] pt-3">
                    {edu.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Complete Professional Appointments */}
        <section className="space-y-8">
          <SectionHeading
            kicker="Career Milestones"
            title="Institutional & Research Appointments"
            subtitle="Full professional timeline detailing teaching portfolios, research supervision, and administrative accomplishments."
          />

          <div className="space-y-6">
            {profileData.appointments.map((apt, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 sm:p-8 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-[#ECE6DC] pb-4">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#292D2A]">
                      {apt.role}
                    </h4>
                    <div className="text-sm font-semibold text-[#5B7260]">
                      {apt.institution} {apt.department ? `· ${apt.department}` : ""}
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 rounded text-xs font-mono font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                      {apt.period}
                    </span>
                    <div className="text-xs text-[#7E8580] mt-1">{apt.location}</div>
                  </div>
                </div>

                {apt.verificationNote && (
                  <div className="p-3 rounded-lg bg-[#FAF2E6] border border-[#E8D6BF] text-xs text-[#7A5A2B]">
                    <strong>Verification Note: </strong>
                    {apt.verificationNote}
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                    Key Responsibilities & Scope
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[#575E59] list-disc list-inside">
                    {apt.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {apt.achievements.length > 0 && (
                  <div className="pt-3 border-t border-[#ECE6DC] space-y-1.5">
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                      Key Achievements
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {apt.achievements.map((ach, aIdx) => (
                        <div
                          key={aIdx}
                          className="text-xs text-[#3D4440] bg-[#F4EFE6] px-3 py-1.5 rounded border border-[#E0D7C9]"
                        >
                          {ach}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internships & Early Professional Formative Experience */}
        <section className="space-y-6">
          <SectionHeading
            kicker="Formative Practical Training"
            title="Industry Internships & Operations"
            subtitle="Hands-on early engineering internships spanning web engineering, enterprise portal development, and international operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.internships.map((intern, iIdx) => (
              <div
                key={iIdx}
                className="p-5 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-medium text-[#7E8580]">
                    {intern.period}
                  </div>
                  <h5 className="font-serif text-base font-bold text-[#292D2A] mt-1">
                    {intern.role}
                  </h5>
                  <div className="text-xs font-semibold text-[#5B7260]">
                    {intern.organization}
                  </div>
                  <p className="text-xs text-[#575E59] mt-2">
                    {intern.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#7E8580] border-t border-[#ECE6DC]">
                  {intern.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section className="space-y-8">
          <SectionHeading
            kicker="Technical Competencies"
            title="IT & Cybersecurity Forte"
            subtitle="Domain tools, security operations platforms, programming languages, and cryptographic frameworks applied in research and coursework."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cybersecurity */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-[#292D2A] border-b border-[#ECE6DC] pb-2">
                <ShieldCheck className="w-4 h-4 text-[#5B7260]" />
                <span>Cybersecurity & Information Security</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.technicalSkills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Blockchain */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-[#292D2A] border-b border-[#ECE6DC] pb-2">
                <Cpu className="w-4 h-4 text-[#5B7260]" />
                <span>Blockchain & Decentralized Tech</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.technicalSkills.blockchain.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Research */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-[#292D2A] border-b border-[#ECE6DC] pb-2">
                <Terminal className="w-4 h-4 text-[#5B7260]" />
                <span>Prompt Engineering & Scholarly Research Tools</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.technicalSkills.aiAndTools.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Development & Data */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] rounded-xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm font-bold text-[#292D2A] border-b border-[#ECE6DC] pb-2">
                <Briefcase className="w-4 h-4 text-[#5B7260]" />
                <span>Development, Data Analytics & Visualization</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {profileData.technicalSkills.dataAndDevelopment.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded bg-[#F8F6F0] border border-[#E2DBD0] text-[#3D4440]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
