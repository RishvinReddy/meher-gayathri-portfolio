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
  description: string;
}

const PRIMARY_PAGES: NavLinkItem[] = [
  { name: "Home", href: "/", description: "Overview & featured work" },
  { name: "About", href: "/about", description: "Biography & career journey" },
  { name: "Research", href: "/research", description: "Cryptography & privacy" },
  { name: "Publications", href: "/publications", description: "Scholarly research archive" },
  { name: "Teaching", href: "/teaching", description: "Pedagogy & mentorship" },
  { name: "Projects", href: "/projects", description: "Verified technical systems" },
  { name: "Achievements", href: "/achievements", description: "Honors & collegiate awards" },
  { name: "Contact", href: "/contact", description: "Campus office & directory" },
];

const RESEARCH_DOMAINS: { name: string; href: string; tag: string }[] = [
  { name: "Information Security", href: "/research#information-security", tag: "Primary" },
  { name: "Blockchain & Smart Contracts", href: "/research#blockchain", tag: "Security" },
  { name: "Visual Cryptography", href: "/research#visual-cryptography", tag: "Encryption" },
  { name: "Cybersecurity Governance", href: "/research#cybersecurity-grc", tag: "GRC" },
  { name: "IoT Security & Privacy", href: "/research#iot-security", tag: "Protocols" },
  { name: "Publications Repository", href: "/publications", tag: "Archive" },
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
      className="relative bg-[#0F1110] text-[#F8F6F0] border-t border-white/10 mt-20 overflow-hidden z-10"
    >
      {/* Subtle Top Gradient Hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#849987]/50 to-transparent" />

      {/* Atmospheric Ambient Lighting Glow */}
      <div
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[250px] bg-[#5B7260]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ==================================================================== */}
        {/* UPPER SECTION: Authoritative Faculty Signature & Action Card        */}
        {/* ==================================================================== */}
        <div className="pt-12 sm:pt-14 pb-10 sm:pb-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Academic Signature Block (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Status & Verification Chip */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#A5B6A5]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#849987] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B7260]"></span>
                </span>
                <span className="font-medium tracking-wide">
                  Active Faculty &amp; Doctoral Researcher
                </span>
                <span className="text-white/20">|</span>
                <span className="text-[11px] font-mono text-[#CCD1CA]">IST (UTC+5:30)</span>
              </div>

              {/* Authoritative Name & Faculty Role */}
              <div className="flex items-center space-x-3.5">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#849987]/40 shrink-0 bg-white/5 shadow-xs">
                  <Image
                    src="/images/profile.jpg"
                    alt="Meher Gayatri Devi Tiwari"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8F6F0] leading-tight">
                    Meher Gayatri Devi Tiwari
                  </h2>
                  <p className="font-serif text-sm sm:text-base text-[#A5B6A5] font-medium mt-0.5">
                    Assistant Professor &amp; Information Security Researcher
                  </p>
                </div>
              </div>

              {/* Scholarly Overview */}
              <p className="text-xs sm:text-sm text-[#CCD1CA] leading-relaxed max-w-2xl font-normal">
                Conducting empirical research in Information Security, Cybersecurity Governance, Risk &amp; Compliance (GRC),
                Blockchain &amp; Smart Contract Security, and Visual Cryptography. Dedicated to university teaching,
                research mentorship, and academic service.
              </p>

              {/* Verified Institutional Strip */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs text-[#CCD1CA]">
                <a
                  href={profileData.contact.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#849987]/50 hover:bg-white/[0.08] transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0] group-hover:text-[#A5B6A5] transition-colors">
                    Woxsen University
                  </span>
                  <span className="text-[#ACB3AA] text-[11px]">· Assistant Professor</span>
                  <ExternalLink className="w-3 h-3 text-[#ACB3AA] opacity-70 group-hover:opacity-100" />
                </a>

                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-[#849987]/50 hover:bg-white/[0.08] transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0] group-hover:text-[#A5B6A5] transition-colors">
                    VIT Vellore
                  </span>
                  <span className="text-[#ACB3AA] text-[11px]">· Ph.D. Scholar</span>
                  <ExternalLink className="w-3 h-3 text-[#ACB3AA] opacity-70 group-hover:opacity-100" />
                </a>

                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-[#A5B6A5]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#849987]" />
                  <span>M.Tech (InfoSec) · B.Tech (IT)</span>
                </span>
              </div>

              {/* Direct Interactive Quick-Contact Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                {/* Email Chip with Copy UX */}
                <div className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/10 text-xs text-[#F8F6F0] pl-3 pr-1.5 py-1 space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="hover:text-[#A5B6A5] transition-colors text-xs font-mono"
                  >
                    {profileData.contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy Email address"
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
                    className="hover:text-[#A5B6A5] transition-colors text-xs font-mono"
                  >
                    {profileData.contact.phone}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    title="Copy Phone number"
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
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#849987]/50 hover:bg-white/10 text-xs text-[#F8F6F0] hover:text-[#A5B6A5] transition-colors"
                >
                  <LinkedInIcon className="w-3 h-3 text-[#A5B6A5]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>

            {/* Right Column: Academic Collaboration Glass Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 backdrop-blur-xs space-y-4 hover:border-[#849987]/40 transition-all duration-300">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest font-semibold text-[#A5B6A5]">
                    <Sparkles className="w-3 h-3 text-[#A5B6A5]" />
                    <span>Academic Inquiries</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F6F0]">
                    Initiate Scholarly Collaboration
                  </h3>
                  <p className="text-xs text-[#CCD1CA] leading-relaxed">
                    Open for inter-institutional research, journal peer review, faculty development keynotes, and student research mentorship.
                  </p>
                </div>

                <div className="space-y-2.5 pt-0.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-xl bg-[#F8F6F0] hover:bg-white text-[#0F1110] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
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

                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#ACB3AA]">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#A5B6A5]" />
                    <span>Official Response: Prompt</span>
                  </span>
                  <span className="text-[#A5B6A5] font-medium">Verified Channels Only</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================================== */}
        {/* MIDDLE SECTION: Balanced 4-Column Directory Grid (No Empty Void)     */}
        {/* ==================================================================== */}
        <div className="pt-10 sm:pt-12 pb-8 sm:pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Primary Website Directory (col 1 of 4) */}
          <div className="space-y-3">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F8F6F0] tracking-wide">
                Website Directory
              </h3>
              <p className="text-[11px] text-[#ACB3AA] mt-0.5">
                Primary routes across the portfolio
              </p>
            </div>

            <ul className="space-y-1 text-xs">
              {PRIMARY_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="group flex items-baseline justify-between py-1 px-1.5 -mx-1.5 rounded-md hover:bg-white/[0.04] transition-colors focus-visible:ring-2 focus-visible:ring-[#849987] focus-visible:outline-none"
                  >
                    <span className="text-[#F8F6F0] font-medium group-hover:text-[#A5B6A5] transition-colors text-xs sm:text-[13px]">
                      {page.name}
                    </span>
                    <span className="text-[11px] text-[#ACB3AA] font-normal group-hover:text-[#CCD1CA] transition-colors text-right">
                      {page.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Research Domains & Curated Dossier (col 2 of 4) */}
          <div className="space-y-3">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F8F6F0] tracking-wide">
                Research Domains
              </h3>
              <p className="text-[11px] text-[#ACB3AA] mt-0.5">
                Empirical investigation &amp; security
              </p>
            </div>

            <ul className="space-y-1 text-xs">
              {RESEARCH_DOMAINS.map((domain) => (
                <li key={domain.name}>
                  <Link
                    href={domain.href}
                    className="group flex items-baseline justify-between py-1 px-1.5 -mx-1.5 rounded-md hover:bg-white/[0.04] text-[#CCD1CA] hover:text-[#F8F6F0] transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#849987] group-hover:bg-[#A5B6A5] transition-colors shrink-0"></span>
                      <span className="group-hover:text-[#A5B6A5] transition-colors text-xs sm:text-[13px]">
                        {domain.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#ACB3AA] group-hover:text-[#CCD1CA] transition-colors shrink-0 ml-2">
                      {domain.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-white/[0.06]">
              <Link
                href="/publications"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors py-0.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#849987]" />
                <span>Publications Repository Dossier →</span>
              </Link>
            </div>
          </div>

          {/* Column 3: Verified Profiles & Credentials (col 3 of 4) */}
          <div className="space-y-3">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F8F6F0] tracking-wide">
                Verified Profiles
              </h3>
              <p className="text-[11px] text-[#ACB3AA] mt-0.5">
                Institutional &amp; scholarly links
              </p>
            </div>

            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 px-1.5 -mx-1.5 rounded-md hover:bg-white/[0.04] text-[#CCD1CA] hover:text-[#F8F6F0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                    <span className="group-hover:text-[#A5B6A5] transition-colors text-xs sm:text-[13px]">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#ACB3AA] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href={profileData.contact.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 px-1.5 -mx-1.5 rounded-md hover:bg-white/[0.04] text-[#CCD1CA] hover:text-[#F8F6F0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                    <span className="group-hover:text-[#A5B6A5] transition-colors text-xs sm:text-[13px]">Woxsen University</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#ACB3AA] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li>
                <a
                  href="https://vit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-1 px-1.5 -mx-1.5 rounded-md hover:bg-white/[0.04] text-[#CCD1CA] hover:text-[#F8F6F0] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                    <span className="group-hover:text-[#A5B6A5] transition-colors text-xs sm:text-[13px]">VIT Vellore Portal</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-[#ACB3AA] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li className="pt-1">
                <div className="py-1 px-1.5 text-xs text-[#ACB3AA] flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#849987] shrink-0" />
                  <span>Degrees: M.Tech (InfoSec) · B.Tech (IT)</span>
                </div>
              </li>

              <li>
                <div className="py-1 px-1.5 text-xs text-[#ACB3AA] flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#849987] shrink-0"></span>
                  <span>School of Technology, CSE Dept.</span>
                </div>
              </li>

              <li className="pt-2 border-t border-white/[0.06]">
                <Link
                  href="/#verification"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors py-0.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Fact Audit: 100% Verified Provenance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Office & Location (col 4 of 4) */}
          <div className="space-y-3">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-[#F8F6F0] tracking-wide">
                Campus &amp; Office
              </h3>
              <p className="text-[11px] text-[#ACB3AA] mt-0.5">
                Faculty office &amp; direct coordinates
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-[#CCD1CA]">
              {/* Campus Address */}
              <div className="flex items-start space-x-2 py-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <span className="font-medium text-[#F8F6F0] block">
                    School of Technology
                  </span>
                  <span className="text-[11px] text-[#ACB3AA] leading-relaxed block">
                    Woxsen University, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India
                  </span>
                </div>
              </div>

              {/* Consultation note */}
              <div className="flex items-start space-x-2 py-0.5">
                <Clock className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-xs">
                  <span className="font-medium text-[#F8F6F0] block">
                    Academic Consultation
                  </span>
                  <span className="text-[11px] text-[#ACB3AA] leading-relaxed block">
                    Available by appointment for students, scholars, and peer reviewers.
                  </span>
                </div>
              </div>

              {/* Direct email quick action */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center space-x-1.5 text-xs text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors py-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#849987]" />
                  <span>Send Direct Academic Email →</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* LOWER SECTION: Streamlined Baseline Legal & Back-to-Top Bar          */}
        {/* ==================================================================== */}
        <div className="py-6 border-t border-white/10 text-xs text-[#CCD1CA]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Copyright & Academic Provenance on Baseline */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1 text-center sm:text-left">
              <span className="text-[#F8F6F0] font-medium">
                © {currentYear} Meher Gayatri Devi Tiwari.
              </span>
              <span className="text-[#ACB3AA]">All academic rights reserved.</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="text-[11px] text-[#ACB3AA]">
                Assistant Professor, Woxsen University · Ph.D. Scholar, VIT
              </span>
            </div>

            {/* Back to Top Smooth Pill Button */}
            <div className="flex items-center space-x-3.5 shrink-0">
              <Link
                href="/contact"
                className="text-[11px] text-[#ACB3AA] hover:text-[#A5B6A5] transition-colors"
              >
                Campus Correspondence
              </Link>
              <span className="text-white/20">·</span>
              <button
                onClick={scrollToTop}
                type="button"
                aria-label="Back to top of page"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#A5B6A5] hover:text-[#F8F6F0] py-1.5 px-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#849987]/50 focus-visible:ring-2 focus-visible:ring-[#849987] transition-all shadow-xs group"
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
