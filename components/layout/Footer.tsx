import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, ArrowUpRight, ArrowRight, ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/content/profile";

interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

const PRIMARY_PAGES: NavLinkItem[] = [
  { name: "Home", href: "/", description: "Academic overview & featured work" },
  { name: "About", href: "/about", description: "Biography, qualifications & journey" },
  { name: "Research", href: "/research", description: "Domains, cryptography & privacy" },
  { name: "Publications", href: "/publications", description: "Scholarly works & review archive" },
  { name: "Teaching", href: "/teaching", description: "Pedagogy, courses & student mentorship" },
  { name: "Projects", href: "/projects", description: "Verified technical systems & prototypes" },
  { name: "Achievements", href: "/achievements", description: "Academic honors, awards & CSR leadership" },
  { name: "Contact", href: "/contact", description: "Institutional office & direct inquiries" },
];

const ACADEMIC_RESOURCES: NavLinkItem[] = [
  { name: "Research Specializations", href: "/research" },
  { name: "Doctoral Dissertation Focus", href: "/about#research-interests" },
  { name: "Scholarly Publications Repository", href: "/publications" },
  { name: "Pedagogy & Course Delivery", href: "/teaching" },
  { name: "Undergraduate & PG Mentorship", href: "/about#teaching" },
  { name: "Verified Technical Projects", href: "/projects" },
  { name: "Academic Journey & Degrees", href: "/about#education" },
  { name: "University Appointments Timeline", href: "/about#experience" },
  { name: "Technical Expertise Matrix", href: "/about#expertise" },
  { name: "Academic Honors & Milestones", href: "/about#recognition" },
  { name: "Institutional Verification Record", href: "/#verification" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#292D2A] text-[#F8F6F0] border-t border-[rgba(248,246,240,0.14)] mt-24 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ==================================================================== */}
        {/* UPPER SECTION: Professional Identity & Academic Call to Action       */}
        {/* ==================================================================== */}
        <div className="py-12 sm:py-16 border-b border-[rgba(248,246,240,0.14)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start justify-between">
            
            {/* Identity & Mission (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#A5B6A5] font-semibold">
                <span className="h-px w-6 bg-[#A5B6A5]"></span>
                <span>Academic & Research Portfolio</span>
              </div>

              <div className="space-y-1.5">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F8F6F0]">
                  Meher Gayatri Devi Tiwari
                </h2>
                <p className="font-serif text-base sm:text-lg text-[#A5B6A5] font-medium">
                  Assistant Professor & Information Security Researcher
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#C7C9C4] leading-relaxed max-w-2xl font-normal">
                Conducting empirical research in Information Security, Cybersecurity Governance, Risk &amp; Compliance (GRC),
                Blockchain &amp; Smart Contract Security, and Visual Cryptography. Dedicated to university teaching,
                undergraduate and postgraduate research mentorship, and academic service.
              </p>

              {/* Verified Institutional Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#C7C9C4]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white/5 border border-[rgba(248,246,240,0.12)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0]">Woxsen University</span>
                  <span className="text-[#9AA099]">· Assistant Professor (2024–Present)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white/5 border border-[rgba(248,246,240,0.12)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B6A5]"></span>
                  <span className="font-medium text-[#F8F6F0]">Vellore Institute of Technology</span>
                  <span className="text-[#9AA099]">· Ph.D. Scholar (2020–Present)</span>
                </span>
              </div>
            </div>

            {/* Academic Inquiry Action Block (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 border border-[rgba(248,246,240,0.12)] rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A5B6A5] block">
                  Academic Inquiries &amp; Collaboration
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#F8F6F0]">
                  Initiate Research or Teaching Collaboration
                </h3>
                <p className="text-xs text-[#C7C9C4] leading-relaxed">
                  Open for inter-institutional research, scholarly colloquia, peer review, guest lectures, and academic advisement.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg bg-[#F8F6F0] hover:bg-white text-[#292D2A] text-xs font-semibold uppercase tracking-wider transition-all focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none shadow-sm group"
                >
                  <span>Contact Office</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#292D2A] group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F8F6F0] border border-[rgba(248,246,240,0.14)] text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A5B6A5]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ==================================================================== */}
        {/* MIDDLE SECTION: Comprehensive Multi-Column Navigation Grid          */}
        {/* ==================================================================== */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Complete Website Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1 border-b border-[rgba(248,246,240,0.14)] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Website Directory
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                All primary routes across the academic portfolio
              </p>
            </div>

            <ul className="space-y-1.5 text-xs">
              {PRIMARY_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="group flex items-start justify-between py-1 px-2 -mx-2 rounded-md hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                  >
                    <div>
                      <span className="text-[#F8F6F0] font-medium group-hover:text-[#A5B6A5] transition-colors">
                        {page.name}
                      </span>
                      {page.description && (
                        <span className="block text-[11px] text-[#9AA099] font-normal">
                          {page.description}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#A5B6A5] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Academic & Research Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1 border-b border-[rgba(248,246,240,0.14)] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Academic Resources
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Curated scholarly topics &amp; verified records
              </p>
            </div>

            <ul className="space-y-2 text-xs">
              {ACADEMIC_RESOURCES.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center space-x-1.5 text-[#C7C9C4] hover:text-[#A5B6A5] transition-colors py-0.5 focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                  >
                    <span className="text-[#A5B6A5] text-[10px]">›</span>
                    <span>{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Affiliations & Profiles (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1 border-b border-[rgba(248,246,240,0.14)] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Verified Profiles
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Official institutional &amp; scholarly links
              </p>
            </div>

            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
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
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
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
                  className="flex items-center space-x-2 text-[#C7C9C4] hover:text-[#F8F6F0] transition-colors group focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                  <span className="group-hover:text-[#A5B6A5] transition-colors">VIT Vellore</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9AA099] opacity-70 group-hover:opacity-100" />
                </a>
              </li>

              <li className="pt-2">
                <Link
                  href="/#verification"
                  className="inline-flex items-center space-x-1.5 p-2 rounded-lg bg-white/5 border border-[rgba(248,246,240,0.12)] text-[11px] text-[#A5B6A5] hover:bg-white/10 transition-colors w-full"
                >
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Resume Fact Audit: 100% Verified</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-1 border-b border-[rgba(248,246,240,0.14)] pb-2.5">
              <h3 className="font-serif text-base font-semibold text-[#F8F6F0] tracking-wide">
                Campus &amp; Office
              </h3>
              <p className="text-[11px] text-[#9AA099]">
                Faculty office &amp; direct communication
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#C7C9C4]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A5B6A5] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-medium text-[#F8F6F0] block">School of Technology</span>
                  <span className="text-[11px] text-[#C7C9C4] leading-relaxed block">
                    Woxsen University, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="hover:text-[#A5B6A5] transition-colors break-all focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                >
                  {profileData.contact.email}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-3.5 h-3.5 text-[#A5B6A5] shrink-0" />
                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#A5B6A5] transition-colors focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
                >
                  {profileData.contact.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#9AA099] leading-relaxed border-t border-[rgba(248,246,240,0.10)]">
                Office Hours: By academic appointment. All student and research correspondence is answered promptly.
              </div>
            </div>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* LOWER SECTION: Restrained Copyright, Attribution & Back-to-Top      */}
        {/* ==================================================================== */}
        <div className="py-6 border-t border-[rgba(248,246,240,0.14)] text-xs text-[#C7C9C4]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright & Scholarly Attribution */}
            <div className="space-y-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
                <span className="text-[#F8F6F0] font-medium">
                  © {currentYear} Meher Gayatri Devi Tiwari.
                </span>
                <span className="text-[#9AA099]">All rights reserved.</span>
                <span className="hidden sm:inline text-[rgba(248,246,240,0.2)]">|</span>
                <span className="text-[11px] text-[#9AA099]">
                  Assistant Professor, Woxsen University · Ph.D. Research Scholar, VIT
                </span>
              </div>
              <p className="text-[11px] text-[#9AA099]">
                Warm Editorial Academic Identity · Exclusively light-themed pages with restrained charcoal footer.
              </p>
            </div>

            {/* Utility Links & Jump to Top */}
            <div className="flex items-center space-x-4 sm:space-x-5 text-[11px] shrink-0">
              <Link
                href="/about#experience"
                className="text-[#C7C9C4] hover:text-[#A5B6A5] transition-colors underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
              >
                Appointment Records
              </Link>
              <span className="text-[rgba(248,246,240,0.2)]">·</span>
              <Link
                href="/#verification"
                className="text-[#C7C9C4] hover:text-[#A5B6A5] transition-colors underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
              >
                Fact Verification
              </Link>
              <span className="text-[rgba(248,246,240,0.2)]">·</span>
              <a
                href="#top"
                aria-label="Back to top of page"
                className="inline-flex items-center space-x-1 text-[#A5B6A5] hover:text-[#F8F6F0] transition-colors py-1 px-2 rounded-md hover:bg-white/5 border border-[rgba(248,246,240,0.14)] focus-visible:ring-2 focus-visible:ring-[#A5B6A5] focus-visible:outline-none"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
