"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  ArrowUpRight,
  Copy,
  Check
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import PageNavigation from "@/components/ui/PageNavigation";
import { profileData } from "@/content/profile";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        
        {/* Page Header */}
        <PageHeader
          kicker="Academic Correspondence"
          title="Professional Contact & Inquiries"
          subtitle="Direct verified channels for research collaborations, student academic advising, guest lectures, and institutional correspondence."
          breadcrumbs={[{ label: "Contact" }]}
        />

        {/* 3 Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Card */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                Verified Direct Email
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] break-all">
                {profileData.contact.email}
              </h3>
              <p className="text-xs text-[#575E59] leading-relaxed">
                Preferred for scholarly communication, research manuscripts, and academic inquiries.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-lg bg-[#F8F6F0] border border-[#E2DBD0] text-[#292D2A] text-xs font-medium hover:bg-[#E8E1D5] transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#7E8580]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Institutional Office */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                Institutional Affiliation
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292D2A]">
                Woxsen University
              </h3>
              <p className="text-xs text-[#575E59] leading-relaxed">
                {profileData.contact.institutionAddress}
              </p>
            </div>

            <div className="pt-4">
              <a
                href={profileData.contact.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors w-full"
              >
                <span>Institutional Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
                Professional Network
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292D2A]">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[#575E59] leading-relaxed">
                Professional network updates, academic workshops, and cybersecurity community discussions.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors w-full"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Telephone & Correspondence Protocol */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-8 sm:p-10 space-y-6 max-w-5xl mx-auto">
          <div className="border-b border-[#ECE6DC] pb-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
              Academic Inquiry Protocol
            </h2>
            <p className="text-xs sm:text-sm text-[#575E59] mt-1">
              Guidelines to expedite responses for academic, student, and research correspondence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-1.5">
              <div className="font-semibold text-[#292D2A]">
                Student Project & Mentorship Inquiries
              </div>
              <p className="text-[#575E59] leading-relaxed">
                Students reaching out regarding project guidance or academic advising are requested to include their degree program, project domain, and proposed scope in the subject line.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-1.5">
              <div className="font-semibold text-[#292D2A]">
                Symposia & Review Requests
              </div>
              <p className="text-[#575E59] leading-relaxed">
                For conference session invitations, panel discussions, or manuscript review requests, please indicate the organizing institution, scheduling window, and domain alignment.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#ECE6DC] text-xs text-[#7E8580] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>Documented Telephone: {profileData.contact.phone}</span>
            <span>Typical Response Window: 1–2 Academic Business Days</span>
          </div>
        </div>

        {/* Page Navigation */}
        <PageNavigation
          prev={{ label: "Achievements", href: "/achievements", description: "Awards, leadership & CSR" }}
          next={{ label: "Home", href: "/", description: "Return to home page" }}
        />

      </div>
    </div>
  );
}
