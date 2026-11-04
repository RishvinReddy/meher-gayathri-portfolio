import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, MapPin, CheckCircle2, ShieldCheck, User } from "lucide-react";
import { profileData } from "@/content/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#ECE6DC] overflow-hidden bg-gradient-to-b from-[#FAF8F3] to-[#F8F6F0]">
      {/* Editorial delicate background watermark */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none select-none font-serif text-[280px] leading-none text-[#849987] font-bold -mr-20 -mt-20 overflow-hidden"
        aria-hidden="true"
      >
        Ψ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Editorial Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Kicker Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] text-xs font-semibold text-[#3B5340] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#5B7260]"></span>
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
            <p className="text-base sm:text-lg text-[#575E59] leading-relaxed max-w-2xl font-normal">
              Cybersecurity, academia, and research professional focused on Information Security, Cybersecurity Governance, Risk Management (GRC), Blockchain & Smart Contract Security, and Visual Cryptography through empirical research, teaching, and mentorship.
            </p>

            {/* Key Research Area Pills */}
            <div className="pt-1">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-2.5">
                Core Research Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Information Security",
                  "Blockchain Security",
                  "Visual Cryptography",
                  "Privacy Protocols",
                  "IoT Security",
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

            {/* Action Buttons (Strictly Light Theme) */}
            <div className="pt-3 flex flex-wrap gap-3 sm:gap-4 items-center">
              <Link
                href="/research"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] font-medium text-xs uppercase tracking-wider transition-all shadow-2xs group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/publications"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] font-medium text-xs uppercase tracking-wider transition-all shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Publications</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-lg hover:bg-[#E8E1D5]/40 text-[#575E59] hover:text-[#292D2A] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Biography</span>
              </Link>
            </div>
          </div>

          {/* Academic Profile Card Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Header with Portrait and Verified Status */}
              <div className="flex items-start justify-between border-b border-[#ECE6DC] pb-5">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#849987] shadow-sm shrink-0 bg-[#EBF0EC]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Meher Gayatri Devi Tiwari"
                      fill
                      sizes="(max-width: 640px) 64px, 80px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] leading-snug">
                      Meher Gayatri Devi Tiwari
                    </h2>
                    <p className="text-xs text-[#575E59]">
                      M.Tech (InfoSec) · Ph.D. Scholar
                    </p>
                    <p className="text-[11px] text-[#5B7260] font-semibold mt-0.5">
                      Assistant Professor · Woxsen University
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#EBF0EC] text-[11px] font-semibold text-[#3B5340] border border-[#CBD7CE] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Documented Academic Positions Snapshot */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1">
                    Current Academic Chair
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3EFE8] border border-[#E4DDD0] space-y-1">
                    <div className="font-semibold text-xs sm:text-sm text-[#292D2A]">
                      Assistant Professor
                    </div>
                    <div className="text-xs text-[#4E5650] font-medium">
                      School of Technology, Woxsen University
                    </div>
                    <div className="flex items-center space-x-1 text-[11px] text-[#7E8580] pt-0.5">
                      <MapPin className="w-3 h-3 text-[#849987]" />
                      <span>Hyderabad, Telangana, India · July 2024–Present</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] mb-1">
                    Doctoral Research & Fellowship
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F3EFE8] border border-[#E4DDD0] space-y-1">
                    <div className="font-semibold text-xs sm:text-sm text-[#292D2A]">
                      Ph.D. in Information Security (Pursuing)
                    </div>
                    <div className="text-xs text-[#4E5650] font-medium">
                      Vellore Institute of Technology (VIT), India
                    </div>
                    <div className="text-[11px] text-[#7E8580]">
                      Assistant Professor Junior (Fellowship) · Sept 2020–Present
                    </div>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] text-center">
                    <div className="text-[11px] text-[#7E8580]">Experience</div>
                    <div className="font-serif text-lg font-bold text-[#292D2A]">5+ Years</div>
                    <div className="text-[10px] text-[#575E59]">Teaching & Research</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] text-center">
                    <div className="text-[11px] text-[#7E8580]">Accolades</div>
                    <div className="font-serif text-lg font-bold text-[#292D2A]">25+</div>
                    <div className="text-[10px] text-[#575E59]">Awards & Honors</div>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2 border-t border-[#ECE6DC] flex items-center justify-between text-xs">
                <span className="text-[#575E59] font-medium truncate max-w-[180px]">
                  {profileData.contact.email}
                </span>
                <Link
                  href="/about"
                  className="font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                >
                  Full Biography →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
