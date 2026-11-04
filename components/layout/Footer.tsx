"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Check,
  Copy,
  Clock,
  Sparkles,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/content/profile";

interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

const PRIMARY_PAGES: NavLinkItem[] = [
  { name: "Home", href: "/", description: "Overview, credentials & featured work" },
  { name: "About", href: "/about", description: "Biography, qualifications & journey" },
  { name: "Research", href: "/research", description: "Domains, cryptography & privacy" },
  { name: "Publications", href: "/publications", description: "Scholarly works & review archive" },
  { name: "Teaching", href: "/teaching", description: "Pedagogy, courses & student mentorship" },
  { name: "Projects", href: "/projects", description: "Verified technical systems & prototypes" },
  { name: "Achievements", href: "/achievements", description: "Honors, awards & collegiate accolades" },
  { name: "Contact", href: "/contact", description: "Campus office & academic correspondence" },
];

const RESEARCH_DOMAINS: { name: string; href: string; tag: string }[] = [
  { name: "Information Security", href: "/research#information-security", tag: "Primary Focus" },
  { name: "Blockchain & Smart Contracts", href: "/research#blockchain", tag: "Security Analysis" },
  { name: "Visual Cryptography", href: "/research#visual-cryptography", tag: "Image Encryption" },
  { name: "Cybersecurity Governance (GRC)", href: "/research#cybersecurity-grc", tag: "Risk Frameworks" },
  { name: "IoT Security & Privacy", href: "/research#iot-security", tag: "Network Protocols" },
  { name: "Publications Repository", href: "/publications", tag: "Scholarly Archive" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative bg-[#0F1110] text-[#F8F6F0] border-t border-white/[0.08] mt-24 overflow-hidden z-10"
    >
      {/* Subtle Top Gradient Hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#849987]/50 to-transparent" />

      {/* Atmospheric Ambient Lighting Glow */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[350px] bg-[#5B7260]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-[#849987]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ==================================================================== */}
        {/* UPPER SECTION: Authoritative Faculty Signature & Action Card        */}
        {/* ==================================================================== */}
        <div className="pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Academic Signature Block (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status & Verification Chip */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#A5B6A5] backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#849987] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B7260]"></span>
                </span>
                <span className="font-medium tracking-wide">
                  Active Faculty &amp; Doctoral Researcher
                </span>
                <span className="text-white/20">|</span>
                <span className="text-[11px] font-mono text-[#C7C9C4]">IST (UTC+5:30)</span>
              </div>

              {/* Authoritative Name & Faculty Role */}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#849987]/40 shrink-0 bg-white/5 shadow-sm">
                    <Image
                      src="/images/profile.jpg"
                      alt="Meher Gayatri Devi Tiwari"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8F6F0] leading-tight">
                      Meher Gayatri Devi Tiwari
                    </h2>
                    <p className="font-serif text-base sm:text-lg text-[#A5B6A5] font-medium mt-0.5">
                      Assistant Professor &amp; Information Security Researcher
                    </p>
                  </div>
                </div>
              </div>

              {/* Scholarly Overview */}
              <p className="text-xs sm:text-sm text-[#C7C9C4] leading-relaxed max-w-2xl font-normal">
                Conducting empirical research in Information Security, Cybersecurity Governance, Risk &amp; Compliance (GRC),
                Blockchain &amp; Smart Contract Security, and Visual Cryptography. Dedicated to higher-education teaching,
                undergraduate and postgraduate research mentorship, and inter-institutional collaboration.
              </p>

              {/* Verified Institutional Strip */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-[#C7C9C4]">
                <a
                  href={profileData.contact.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#849987]/50 hover:bg-white/[0.07] transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0] group-hover:text-[#A5B6A5] transition-colors">
                    Woxsen University
                  </span>
                  <span className="text-[#9AA099] text-[11px]">· Assistant Professor</span>
                  <ExternalLink className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>

                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#849987]/50 hover:bg-white/[0.07] transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0] group-hover:text-[#A5B6A5] transition-colors">
                    VIT Vellore
                  </span>
                  <span className="text-[#9AA099] text-[11px]">· Ph.D. Scholar</span>
                  <ExternalLink className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>

                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-[#A5B6A5]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#849987]" />
                  <span>M.Tech (InfoSec) · B.Tech (IT)</span>
                </span>
              </div>

              {/* Direct Interactive Quick-Contact Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {/* Email Chip with Copy UX */}
                <div className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#F8F6F0] pl-3 pr-1.5 py-1 space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="hover:text-[#A5B6A5] transition-colors text-[11px] sm:text-xs font-mono"
                  >
                    {profileData.contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy Email"
                    className="p-1 rounded-full hover:bg-white/10 text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Phone Chip with Copy UX */}
                <div className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#F8F6F0] pl-3 pr-1.5 py-1 space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <a
                    href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#A5B6A5] transition-colors text-[11px] sm:text-xs font-mono"
                  >
                    {profileData.contact.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    title="Copy Phone Number"
                    className="p-1 rounded-full hover:bg-white/10 text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* LinkedIn Chip */}
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#849987]/50 hover:bg-white/10 text-[11px] sm:text-xs text-[#F8F6F0] hover:text-[#A5B6A5] transition-colors"
                >
                  <LinkedInIcon className="w-3 h-3 text-[#A5B6A5]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>

            {/* Right Column: Academic Collaboration Glass Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-5 hover:border-[#849987]/40 transition-all duration-300">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#A5B6A5]">
                    <Sparkles className="w-3 h-3 text-[#A5B6A5]" />
                    <span>Academic Inquiries</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F6F0] leading-snug">
                    Initiate Scholarly Collaboration
                  </h3>
                  <p className="text-xs text-[#C7C9C4] leading-relaxed">
                    Open for inter-institutional research, journal peer review, faculty development keynotes, and undergraduate or postgraduate thesis guidance.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 w-full py-3 px-5 rounded-xl bg-[#F8F6F0] hover:bg-white text-[#0F1110] text-xs font-semibold uppercase tracking-wider transition-all shadow-md group"
                  >
                    <span>View Academic Inquiry Protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0F1110] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={`mailto:${profileData.contact.email}?subject=Academic%20Inquiry%20-%20Prof.%20Meher%20Gayatri`}
                    className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#F8F6F0] border border-white/10 text-xs font-medium transition-all group"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:scale-110 transition-transform" />
                    <span>Pre-composed Mail Dispatch</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#9AA099]">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#A5B6A5]" />
                    <span>Official Response Window: Prompt</span>
                  </span>
                  <span className="text-[#A5B6A5] font-medium">Verified Channels Only</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================================== */}
        {/* MIDDLE SECTION: 4-Column Academic Navigation & Discovery Grid        */}
        {/* ==================================================================== */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Primary Website Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1 border-b border-white/[0.08] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide flex items-center justify-between">
                <span>Website Directory</span>
                <span className="text-[10px] font-mono text-[#A5B6A5] uppercase tracking-wider">8 Primary Pages</span>
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Full portfolio routing with dedicated academic sections
              </p>
            </div>

            <ul className="space-y-1.5 text-xs">
              {PRIMARY_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="group flex items-start justify-between py-1.5 px-2.5 -mx-2.5 rounded-lg hover:bg-white/[0.04] transition-colors focus-visible:ring-2 focus-visible:ring-[#849987] focus-visible:outline-none"
                  >
                    <div>
                      <span className="text-[#F8F6F0] font-medium group-hover:text-[#A5B6A5] transition-colors">
                        {page.name}
                      </span>
                      {page.description && (
                        <span className="block text-[11px] text-[#9AA099] font-normal mt-0.5">
                          {page.description}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#A5B6A5] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Research Domains & Curated Dossier (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1 border-b border-white/[0.08] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide flex items-center justify-between">
                <span>Research Domains</span>
                <span className="text-[10px] font-mono text-[#A5B6A5] uppercase tracking-wider">Specializations</span>
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Empirical investigation &amp; security architectures
              </p>
            </div>

            <ul className="space-y-2 text-xs">
              {RESEARCH_DOMAINS.map((domain) => (
                <li key={domain.name}>
                  <Link
                    href={domain.href}
                    className="group flex items-center justify-between py-1 px-2 -mx-2 rounded-md hover:bg-white/[0.04] text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-1 h-1 rounded-full bg-[#849987] group-hover:bg-[#A5B6A5] transition-colors"></span>
                      <span className="group-hover:text-[#A5B6A5] transition-colors">{domain.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#7E8580] group-hover:text-[#A5B6A5] transition-colors">
                      {domain.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/[0.06]">
              <Link
                href="/publications"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#849987]" />
                <span>Explore Full Publications Dossier →</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Verified Affiliations & Institutional Profiles (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1 border-b border-white/[0.08] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Verified Profiles
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Official institutional profiles
              </p>
            </div>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group py-1"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <span className="group-hover:text-[#A5B6A5] transition-colors">LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href={profileData.contact.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group py-1"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <span className="group-hover:text-[#A5B6A5] transition-colors">Woxsen University</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group py-1"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <span className="group-hover:text-[#A5B6A5] transition-colors">VIT Vellore</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li className="pt-2">
                <Link
                  href="/#verification"
                  className="inline-flex items-center space-x-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-[#A5B6A5] hover:bg-white/[0.06] transition-colors w-full"
                >
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#849987]" />
                  <span>Resume Fact Audit: 100% Verified</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Office & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1 border-b border-white/[0.08] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Campus &amp; Office
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Faculty office &amp; campus directory
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-[#C7C9C4]">
              <div className="flex items-start space-x-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <MapPin className="w-4 h-4 text-[#A5B6A5] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-medium text-[#F8F6F0] block">
                    School of Technology
                  </span>
                  <span className="text-[11px] text-[#C7C9C4] leading-relaxed block">
                    Woxsen University, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-[11px] text-[#9AA099]">
                <div className="flex items-center space-x-1.5 text-[#A5B6A5] font-medium">
                  <Clock className="w-3 h-3" />
                  <span>Academic Consultation Hours</span>
                </div>
                <p className="leading-relaxed">
                  Scheduled by appointment for enrolled students, research scholars, and university committees.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* LOWER SECTION: Colophon, Copyright & Back-to-Top Pill                */}
        {/* ==================================================================== */}
        <div className="py-8 border-t border-white/[0.08] text-xs text-[#C7C9C4]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright & Academic Provenance */}
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2.5 gap-y-1">
                <span className="text-[#F8F6F0] font-medium">
                  © {currentYear} Meher Gayatri Devi Tiwari.
                </span>
                <span className="text-[#9AA099]">All academic rights reserved.</span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="text-[11px] text-[#9AA099]">
                  Assistant Professor, Woxsen University · Ph.D. Research Scholar, VIT
                </span>
              </div>
              <p className="text-[11px] text-[#7E8580]">
                Curated strictly under the Warm Editorial Academic design system with deep obsidian footer foundation.
              </p>
            </div>

            {/* Back to Top Smooth Pill Button */}
            <div className="flex items-center space-x-4 shrink-0">
              <Link
                href="/contact"
                className="text-[11px] text-[#C7C9C4] hover:text-[#A5B6A5] transition-colors"
              >
                Campus Correspondence
              </Link>
              <span className="text-white/20">·</span>
              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top of page"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#A5B6A5] hover:text-[#F8F6F0] py-2 px-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#849987]/50 transition-all shadow-xs group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#849987] group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
