import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, GraduationCap, MapPin, Mail, Award, CheckCircle2 } from "lucide-react";
import { profileData } from "@/content/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#ECE6DC] overflow-hidden bg-gradient-to-b from-[#FAF8F3] to-[#F8F6F0]">
      {/* Decorative delicate watermark background */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none select-none font-serif text-[280px] leading-none text-[#849987] font-bold -mr-20 -mt-20 overflow-hidden"
        aria-hidden="true"
      >
        Ψ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Kicker */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] text-xs font-semibold text-[#3B5340] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#5B7260] animate-pulse"></span>
              <span>Academia · Research · Cybersecurity</span>
            </div>

            {/* Display Title */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292D2A] leading-[1.12]">
                Advancing knowledge in information security.
              </h1>
              <p className="text-sm font-semibold tracking-wide text-[#5B7260] uppercase pt-1">
                Meher Gayatri Devi Tiwari
              </p>
            </div>

            {/* Subtitle / Intro */}
            <p className="text-lg sm:text-xl text-[#575E59] leading-relaxed max-w-2xl font-normal">
              Academic researcher and cybersecurity professional focused on information security, privacy, blockchain architectures, visual cryptography, and secure distributed systems through empirical research, teaching, and mentorship.
            </p>

            {/* Key Research Area Pills */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580] mb-2.5">
                Core Research Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Information Security",
                  "Blockchain Security",
                  "Visual Cryptography",
                  "Privacy Protocols",
                  "IoT & Cloud Security",
                  "Cybersecurity GRC"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md bg-[#FAF8F3] border border-[#E0D7C9] text-[#3D4440]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 sm:gap-4 items-center">
              <Link
                href="/research"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] font-medium text-sm transition-all shadow-sm hover:shadow group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/publications"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] font-medium text-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#5B7260]" />
                <span>View Publications</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded hover:bg-[#E8E1D5]/40 text-[#575E59] hover:text-[#292D2A] text-sm font-medium transition-colors"
              >
                <span>Verified Projects (5)</span>
              </Link>
            </div>
          </div>

          {/* Academic Card / Visual Representation Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Header with Monogram and Verified Status */}
              <div className="flex items-start justify-between border-b border-[#E8E1D5] pb-5">
                <div className="flex items-center space-x-3.5">
                  <div className="w-14 h-14 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#292D2A] font-serif font-bold text-2xl shadow-inner">
                    MG
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-bold text-[#292D2A] leading-snug">
                      Meher Gayatri Devi Tiwari
                    </h2>
                    <p className="text-xs text-[#575E59]">
                      M.Tech (InfoSec) · Ph.D. Scholar
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-[#EBF0EC] text-[11px] font-semibold text-[#3B5340] border border-[#CBD7CE]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Current Position Snapshot */}
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1">
                    Current Academic Chair
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F3EFE8] border border-[#E4DDD0] space-y-1">
                    <div className="font-semibold text-sm text-[#292D2A]">
                      Assistant Professor
                    </div>
                    <div className="text-xs text-[#4E5650] font-medium">
                      School of Technology, Woxsen University
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-[#7E8580] pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#849987]" />
                      <span>Hyderabad, Telangana, India · July 2024–Present</span>
                    </div>
                  </div>
                </div>

                {/* Doctoral Scholar Affiliation */}
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1">
                    Doctoral Research Affiliation
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F3EFE8] border border-[#E4DDD0] space-y-1">
                    <div className="font-semibold text-sm text-[#292D2A]">
                      Ph.D. in Information Security (Pursuing)
                    </div>
                    <div className="text-xs text-[#4E5650] font-medium">
                      Vellore Institute of Technology (VIT), India
                    </div>
                    <div className="text-xs text-[#7E8580] pt-0.5">
                      Focus: Visual Cryptography, Blockchain, Distributed Security
                    </div>
                  </div>
                </div>

                {/* Quick Credentials Summary */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded bg-[#FAF8F3] border border-[#E8E1D5] text-center">
                    <div className="text-xs text-[#7E8580]">Experience</div>
                    <div className="font-serif text-base font-bold text-[#292D2A]">5+ Years</div>
                    <div className="text-[10px] text-[#575E59]">Teaching & Research</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#FAF8F3] border border-[#E8E1D5] text-center">
                    <div className="text-xs text-[#7E8580]">Accolades</div>
                    <div className="font-serif text-base font-bold text-[#292D2A]">25+</div>
                    <div className="text-[10px] text-[#575E59]">Awards & Honors</div>
                  </div>
                </div>

              </div>

              {/* Direct Card Footer Action */}
              <div className="pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-xs">
                <span className="text-[#575E59] flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-[#849987]" />
                  <span>mehergayatri17@gmail.com</span>
                </span>
                <Link
                  href="/about"
                  className="font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                >
                  Full Profile →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
