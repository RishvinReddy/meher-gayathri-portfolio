import React from "react";
import { Mail, Phone, MapPin, ExternalLink, ShieldAlert, Clock, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          kicker="Scholarly & Professional Enquiries"
          title="Connect with Meher ma'am"
          subtitle="Available for research collaborations in cryptography and blockchain security, guest lectures, curriculum advisory, and academic committee consultations."
          align="center"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Email Card */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 text-center space-y-3 transition-all hover:-translate-y-1 hover:shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Direct Academic Email
            </div>
            <div className="font-serif text-lg font-bold text-[#292D2A] break-all">
              {profileData.contact.email}
            </div>
            <p className="text-xs text-[#575E59]">
              Preferred channel for research manuscripts, advisory, and academic correspondence.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${profileData.contact.email}?subject=Academic%20Inquiry%20-%20Portfolio`}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded bg-[#292D2A] text-white text-xs font-semibold hover:bg-[#3D4440] transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Institutional Contact */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 text-center space-y-3 transition-all hover:-translate-y-1 hover:shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Campus Office
            </div>
            <div className="font-serif text-lg font-bold text-[#292D2A]">
              Woxsen University
            </div>
            <p className="text-xs text-[#575E59]">
              School of Technology, Kamkole, Sadasivpet, Hyderabad, Telangana 502345, India.
            </p>
            <div className="pt-2">
              <a
                href={profileData.contact.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors"
              >
                <span>Visit Institution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Network */}
          <div className="bg-[#F8F6F0] border border-[#E8E1D5] hover:border-[#849987] rounded-xl p-6 text-center space-y-3 transition-all hover:-translate-y-1 hover:shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260] mx-auto">
              <LinkedInIcon className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#7E8580]">
              Professional Network
            </div>
            <div className="font-serif text-lg font-bold text-[#292D2A]">
              LinkedIn Profile
            </div>
            <p className="text-xs text-[#575E59]">
              Connect for cybersecurity governance updates, research conferences, and industry-academia forums.
            </p>
            <div className="pt-2">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold hover:bg-[#DEE7DF] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Office Hours / Collaboration Note */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-xl bg-[#F8F6F0] border border-[#E8E1D5] text-center text-xs text-[#575E59] space-y-1">
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
