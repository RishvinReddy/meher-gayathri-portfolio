"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Clock, ArrowUpRight, Copy, Check } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <SectionHeading
          kicker="Scholarly & Professional Enquiries"
          title="Connect with Meher ma'am"
          subtitle="Available for research collaborations in cryptography, student academic advising, guest lectures, and institutional correspondence."
          align="center"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-6">
          
          {/* Email Card */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 text-center space-y-3.5 transition-all hover:-translate-y-1 hover:shadow-xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580]">
                Direct Academic Email
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A] break-all">
                {profileData.contact.email}
              </div>
              <p className="text-xs text-[#575E59]">
                Preferred for scholarly communication, research manuscripts, and academic inquiries.
              </p>
            </div>
            
            <div className="pt-3 flex items-center justify-center gap-2">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg bg-[#FAF8F3] border border-[#E0D7C9] text-[#292D2A] text-xs font-medium hover:bg-[#E8E1D5] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#7E8580]" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Institutional Contact */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 text-center space-y-3.5 transition-all hover:-translate-y-1 hover:shadow-xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580]">
                Institutional Chair
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A]">
                Woxsen University
              </div>
              <p className="text-xs text-[#575E59]">
                School of Technology, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India.
              </p>
            </div>
            <div className="pt-3">
              <a
                href={profileData.contact.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors w-full justify-center"
              >
                <span>Institutional Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Network */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-6 text-center space-y-3.5 transition-all hover:-translate-y-1 hover:shadow-xs flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-[#7E8580]">
                Professional Profile
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A]">
                LinkedIn Network
              </div>
              <p className="text-xs text-[#575E59]">
                Professional network updates, academic workshops, and cybersecurity community discussions.
              </p>
            </div>
            <div className="pt-3">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors w-full justify-center"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Academic Collaboration Protocol Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] text-center text-xs text-[#575E59] space-y-1">
          <div className="font-semibold text-[#292D2A] flex items-center justify-center space-x-1.5">
            <Clock className="w-4 h-4 text-[#849987]" />
            <span>Academic Collaboration Protocol</span>
          </div>
          <p>
            For student recommendation requests, capstone project proposals, or conference session invitations, please state the academic institution, proposed timeline, and research alignment in the email subject line.
          </p>
        </div>

      </div>
    </section>
  );
}
