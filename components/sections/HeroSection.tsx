import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { profileData } from "@/content/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-28 border-b border-[#ECE6DC] bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Academic & Professional Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            
            {/* Small Professional Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                Academic Portfolio
              </span>
            </div>

            {/* Primary Visual Focal Point: Name & Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#292D2A] leading-[1.08]">
                Meher Gayatri Devi Tiwari
              </h1>
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#5B7260] font-medium leading-snug">
                Academic Researcher &amp; Assistant Professor in Information Security
              </p>
            </div>

            {/* Concise Supporting Editorial Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#575E59] leading-relaxed max-w-3xl font-normal">
              Exploring information security, cybersecurity governance, blockchain, privacy, and secure systems through empirical research, university teaching, and academic mentorship.
            </p>

            {/* Refined Academic Identity Panel */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-3 max-w-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#3D4440] gap-3 border-b border-[#ECE6DC] pb-3">
                <div>
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-[10px] block">
                    Current Position
                  </span>
                  <span className="font-semibold text-[#292D2A] text-sm sm:text-base">
                    Assistant Professor, School of Technology
                  </span>
                  <span className="text-[#5B7260] font-medium block text-xs sm:text-sm">
                    Woxsen University, India
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-[10px] block">
                    Research Affiliation
                  </span>
                  <span className="font-semibold text-[#292D2A] text-sm sm:text-base">
                    Ph.D. Scholar (Pursuing)
                  </span>
                  <span className="text-[#5B7260] font-medium block text-xs sm:text-sm">
                    Vellore Institute of Technology (VIT), India
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-[#7E8580] gap-2 pt-0.5">
                <span className="flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4 text-[#849987]" />
                  <span>Degrees: M.Tech (InfoSec) · B.Tech (IT)</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Hyderabad, Telangana, India</span>
                </span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
              <Link
                href="/research"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] font-medium text-xs uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/publications"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] font-medium text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Publications</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
              >
                <span>Full Biography →</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Prominent Professional Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Refined Academic Framing */}
              <div className="relative p-3.5 sm:p-4 rounded-3xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-sm">
                <div className="relative aspect-[4/5] min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full rounded-2xl overflow-hidden border border-[#D5CCC0] bg-[#EBF0EC]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Professional portrait of Meher Gayatri Devi Tiwari"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover object-top"
                    priority
                    loading="eager"
                  />
                </div>
                
                {/* Subtle caption */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#7E8580]">
                  <span className="font-serif italic text-xs text-[#575E59]">
                    Meher Gayatri Devi Tiwari
                  </span>
                  <span className="text-[11px] font-mono text-[#849987]">
                    Assistant Professor · VIT Ph.D. Scholar
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
