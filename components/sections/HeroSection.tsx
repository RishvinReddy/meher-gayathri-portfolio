import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, MapPin } from "lucide-react";
import { profileData } from "@/content/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#ECE6DC] bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Academic & Professional Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Professional Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="h-px w-6 bg-[#849987]"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                Academic Portfolio
              </span>
            </div>

            {/* Primary Visual Focal Point: Name & Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292D2A] leading-[1.1]">
                Meher Gayatri Devi Tiwari
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-[#5B7260] font-medium leading-snug">
                Academic Researcher & Assistant Professor in Information Security
              </p>
            </div>

            {/* Concise Supporting Editorial Copy */}
            <p className="text-base sm:text-lg text-[#575E59] leading-relaxed max-w-2xl font-normal">
              Exploring information security, cybersecurity governance, blockchain, privacy, and secure systems through empirical research, university teaching, and academic mentorship.
            </p>

            {/* Refined Academic Identity Panel */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] space-y-2.5 max-w-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#3D4440] gap-2 border-b border-[#ECE6DC] pb-2.5">
                <div>
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-[10px] block">
                    Current Position
                  </span>
                  <span className="font-semibold text-[#292D2A] text-xs sm:text-sm">
                    Assistant Professor, School of Technology
                  </span>
                  <span className="text-[#5B7260] font-medium block">
                    Woxsen University, India
                  </span>
                </div>
                <div className="sm:text-right">
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-[10px] block">
                    Research Affiliation
                  </span>
                  <span className="font-semibold text-[#292D2A] text-xs sm:text-sm">
                    Ph.D. Scholar (Pursuing)
                  </span>
                  <span className="text-[#5B7260] font-medium block">
                    Vellore Institute of Technology (VIT), India
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-[#7E8580] gap-2 pt-0.5">
                <span className="flex items-center space-x-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Degrees: M.Tech (InfoSec) · B.Tech (IT)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-[#849987]" />
                  <span>Hyderabad, India</span>
                </span>
              </div>
            </div>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
              <Link
                href="/research"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] font-medium text-xs uppercase tracking-wider transition-all shadow-2xs group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/publications"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] font-medium text-xs uppercase tracking-wider transition-all shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Publications</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
              >
                <span>Full Biography →</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Prominent Professional Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Refined Academic Framing */}
              <div className="relative p-3 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-sm">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-[#D5CCC0] bg-[#EBF0EC]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Professional portrait of Meher Gayatri Devi Tiwari"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-top"
                    priority
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
