import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ExternalLink, ShieldCheck, BookOpen, GraduationCap, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F3] border-t border-[#E2DBD0] text-[#292D2A] mt-24">
      {/* Upper editorial banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identity & Scholar Statement */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#849987] bg-[#EBF0EC] shrink-0">
                <Image
                  src="/images/profile.jpg"
                  alt="Meher Gayatri Devi Tiwari"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-[#292D2A]">
                Meher Gayatri Devi Tiwari
              </span>
            </div>
            <p className="text-xs text-[#575E59] leading-relaxed">
              Assistant Professor at Woxsen University and Ph.D. Research Scholar at Vellore Institute of Technology (VIT). Dedicated to research in Information Security, Cryptography, Privacy, and Blockchain Systems.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 text-xs text-[#3B5340] bg-[#EBF0EC] px-2.5 py-1 rounded border border-[#CBD7CE] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                <span>Verified Academic Record</span>
              </span>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#575E59]">
              Academic Directory
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Biography & Qualifications
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Research Themes & Cryptography
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Scholarly Publications & Repositories
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Teaching & Capstone Mentorship
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Technical & Research Projects
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-[#575E59] hover:text-[#292D2A] transition-colors">
                  Honors, Awards & ERS/CSR
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Affiliations */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#575E59]">
              Academic Affiliations
            </h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded bg-[#F4EFE6] border border-[#E8E1D5]">
                <div className="font-semibold text-xs text-[#292D2A]">Woxsen University</div>
                <div className="text-xs text-[#575E59]">Assistant Professor</div>
                <div className="text-[11px] text-[#7E8580] mt-0.5">School of Technology · 2024–Present</div>
              </div>
              <div className="p-3 rounded bg-[#F4EFE6] border border-[#E8E1D5]">
                <div className="font-semibold text-xs text-[#292D2A]">Vellore Institute of Technology</div>
                <div className="text-xs text-[#575E59]">Ph.D. Research Scholar (Pursuing)</div>
                <div className="text-[11px] text-[#7E8580] mt-0.5">Information Security & Cryptography</div>
              </div>
            </div>
          </div>

          {/* Direct Professional Inquiries */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#575E59]">
              Professional Enquiries
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center space-x-2 text-[#575E59] hover:text-[#292D2A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5B7260] shrink-0" />
                <span className="truncate">{profileData.contact.email}</span>
              </a>
              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-[#575E59] hover:text-[#292D2A] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5B7260] shrink-0" />
                <span>{profileData.contact.phone}</span>
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#575E59] hover:text-[#292D2A] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#5B7260] shrink-0" />
                <span>LinkedIn Professional Profile</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 opacity-60" />
              </a>
              <div className="pt-2 text-xs text-[#7E8580]">
                Institutional Address: Woxsen University, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial bottom bar & Integrity Disclosure */}
      <div className="border-t border-[#E8E1D5] bg-[#EFE9DF] py-6 text-xs text-[#575E59]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} Meher Gayatri Devi Tiwari. All rights reserved.</span>
            <span className="hidden md:inline text-[#CBD7CE]">|</span>
            <span className="hidden md:inline">Academic Portfolio · Warm Editorial Standard</span>
          </div>

          <div className="flex items-center space-x-4 text-center">
            <Link href="/about#verification" className="hover:text-[#292D2A] underline underline-offset-2">
              Content Verification Status
            </Link>
            <span className="text-[#CBD7CE]">·</span>
            <Link href="/contact" className="hover:text-[#292D2A] underline underline-offset-2">
              Academic Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
