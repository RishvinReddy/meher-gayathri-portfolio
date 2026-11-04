import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 xl:pt-24 xl:pb-32 border-b border-[#ECE6DC] bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Academic & Professional Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 lg:space-y-8">
            
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center space-x-2.5">
              <span className="h-px w-8 bg-[#849987]"></span>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#5B7260]">
                Academic &amp; Research Portfolio
              </span>
            </div>

            {/* Primary Visual Focal Point: Grand Name & Title Hierarchy */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[66px] 2xl:text-[72px] font-bold tracking-tight text-[#292D2A] leading-[1.08]">
                <span className="inline-block">Meher Gayatri</span>{" "}
                <span className="inline-block">Devi Tiwari</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl lg:text-[26px] xl:text-[28px] text-[#5B7260] font-medium leading-snug">
                Academic Researcher &amp; Assistant Professor in Information Security
              </p>
            </div>

            {/* Concise Supporting Editorial Copy */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#575E59] leading-relaxed font-normal">
              Exploring information security, cybersecurity governance, blockchain, privacy, and secure systems through empirical research, university teaching, and academic mentorship.
            </p>

            {/* Prominent Academic Credentials Panel */}
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-xs space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 divide-y sm:divide-y-0 sm:divide-x divide-[#ECE6DC]">
                {/* Academic Appointment */}
                <div className="space-y-1.5">
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-xs block">
                    Academic Appointment
                  </span>
                  <div className="font-semibold text-[#292D2A] text-base sm:text-[17px] leading-snug">
                    Assistant Professor, School of Technology
                  </div>
                  <div className="text-[#5B7260] font-medium text-sm sm:text-[15px]">
                    Woxsen University, Hyderabad, India
                  </div>
                </div>

                {/* Doctoral Research Affiliation */}
                <div className="pt-4 sm:pt-0 sm:pl-7 space-y-1.5">
                  <span className="text-[#7E8580] uppercase tracking-wider font-semibold text-xs block">
                    Doctoral Research Affiliation
                  </span>
                  <div className="font-semibold text-[#292D2A] text-base sm:text-[17px] leading-snug">
                    Ph.D. Research Scholar (Pursuing)
                  </div>
                  <div className="text-[#5B7260] font-medium text-sm sm:text-[15px]">
                    Vellore Institute of Technology (VIT), India
                  </div>
                </div>
              </div>

              {/* Verified Metadata Strip */}
              <div className="pt-4 border-t border-[#ECE6DC] flex flex-wrap items-center justify-between gap-y-2.5 gap-x-5 text-xs sm:text-sm text-[#575E59]">
                <div className="inline-flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#5B7260] shrink-0" />
                  <span className="font-medium">Degrees: M.Tech (InfoSec) · B.Tech (IT)</span>
                </div>
                <div className="inline-flex items-center gap-2 text-[#7E8580]">
                  <MapPin className="w-4 h-4 text-[#849987] shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>

            {/* Primary, Secondary, & Tertiary Calls to Action */}
            <div className="pt-2 flex flex-wrap gap-3.5 sm:gap-4 items-center">
              {/* Primary Action: Explore Research */}
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#292D2A] hover:bg-[#1E211F] text-[#F8F6F0] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#292D2A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F0] group"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Action: Publications */}
              <Link
                href="/publications"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#FAF8F3] hover:bg-[#EBF0EC] text-[#292D2A] border border-[#CBD7CE] hover:border-[#849987] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-2xs hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7260] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F0]"
              >
                <BookOpen className="w-4 h-4 text-[#5B7260]" />
                <span>Publications</span>
              </Link>

              {/* Tertiary Action: Full Biography */}
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#ECE6DC]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7260] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F0]"
              >
                <span>Full Biography</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7E8580]" />
              </Link>
            </div>

          </div>

          {/* Right Column: Prominent, Grand Professional Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-[470px] lg:max-w-[490px] xl:max-w-[520px]">
              {/* Grand Museum Mat Card */}
              <div className="p-3.5 sm:p-4 lg:p-5 rounded-3xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-sm transition-all hover:shadow-md">
                {/* Generous aspect ratio framing the portrait majestically */}
                <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-[#EBF0EC] border border-[#ECE6DC] shadow-inner">
                  <Image
                    src="/images/profile.jpg"
                    alt="Professional portrait of Meher Gayatri Devi Tiwari, Assistant Professor and Information Security Researcher"
                    fill
                    sizes="(max-width: 640px) 380px, (max-width: 1024px) 470px, 520px"
                    className="object-cover object-top"
                    priority
                    loading="eager"
                  />
                </div>
                
                {/* Distinguished Scholarly Caption */}
                <div className="pt-3.5 pb-0.5 px-1.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-serif italic font-semibold text-base sm:text-lg text-[#292D2A]">
                    Meher Gayatri Devi Tiwari
                  </span>
                  <span className="text-xs sm:text-sm text-[#7E8580] font-medium">
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
