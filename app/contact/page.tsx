import React from "react";
import type { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  ArrowUpRight,
  Send
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact & Professional Enquiries | Meher Gayatri Devi Tiwari",
  description: "Academic correspondence, student office hours, research collaboration inquiries, and official institutional contact details.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="border-b border-[#ECE6DC] pb-12">
          <SectionHeading
            kicker="Academic Correspondence"
            title="Professional Contact & Office Hours"
            subtitle="Connect for research collaborations, conference invitations, syllabus advisory, postgraduate mentorship, or institutional queries."
          />
        </div>

        {/* 3 Main Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Direct Email
            </div>
            <h3 className="font-serif text-xl font-bold text-[#292D2A] break-all">
              {profileData.contact.email}
            </h3>
            <p className="text-xs text-[#575E59] leading-relaxed">
              Direct inbox for academic inquiries, manuscript evaluations, and formal consultations.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Institutional Campus Office */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Campus Office
            </div>
            <h3 className="font-serif text-xl font-bold text-[#292D2A]">
              Woxsen University
            </h3>
            <p className="text-xs text-[#575E59] leading-relaxed">
              School of Technology, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India.
            </p>
            <div className="pt-2">
              <a
                href={profileData.contact.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors"
              >
                <span>Institutional Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Network */}
          <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-2xl p-8 text-center space-y-4 transition-all">
            <div className="w-14 h-14 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <LinkedInIcon className="w-6 h-6" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Professional Profile
            </div>
            <h3 className="font-serif text-xl font-bold text-[#292D2A]">
              LinkedIn Network
            </h3>
            <p className="text-xs text-[#575E59] leading-relaxed">
              Active professional updates regarding research symposia, cybersecurity workshops, and academic milestones.
            </p>
            <div className="pt-2">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Detailed Collaboration Guidelines */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-8 sm:p-10 space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-[#ECE6DC] pb-4">
            <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
              Academic Inquiry Protocols
            </h3>
            <p className="text-xs sm:text-sm text-[#575E59] mt-1">
              Guidelines to expedite responses for diverse academic and research engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
              <div className="font-bold text-[#292D2A] flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#5B7260]" />
                <span>Prospective Research & Capstones</span>
              </div>
              <p className="text-[#575E59] leading-relaxed">
                Students seeking capstone project guidance or research supervision are requested to provide a brief proposal outlining their proposed research question, preliminary literature survey, and applied tech stack.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
              <div className="font-bold text-[#292D2A] flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#5B7260]" />
                <span>Guest Lectures & Panel Inquiries</span>
              </div>
              <p className="text-[#575E59] leading-relaxed">
                For conference invitations, panel participation, or cybersecurity awareness webinars, please indicate the target audience, session duration, topic focus (Visual Cryptography, GRC, or Blockchain), and scheduling windows.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#ECE6DC] text-xs text-[#7E8580] flex items-center justify-between flex-wrap gap-2">
            <span>Verified Primary Telephone: {profileData.contact.phone}</span>
            <span>Typical Response Window: 1–2 Academic Business Days</span>
          </div>
        </div>

      </div>
    </div>
  );
}
