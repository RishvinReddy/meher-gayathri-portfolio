"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  GraduationCap, 
  School, 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check, 
  BookOpen, 
  Layers, 
  FolderGit2, 
  FileText,
  Compass,
  MessageSquare
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import { profileData } from "@/content/profile";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const academicTopics = [
    {
      title: "Research Inquiry & Collaboration",
      description: "Scholarly discussions regarding Visual Cryptography, Blockchain Security, IoT Access Control, or Privacy Protocols.",
      subject: "Research Inquiry / Academic Collaboration",
      actionLabel: "Email regarding Research"
    },
    {
      title: "Student Advising & Capstone Mentorship",
      description: "Undergraduate and postgraduate students seeking project guidance, thesis supervision, or research methodology advice.",
      subject: "Student Advising / Project Mentorship Inquiry",
      actionLabel: "Email regarding Mentorship"
    },
    {
      title: "Academic Colloquia & Guest Lectures",
      description: "Invitations for conference sessions, symposium panels, technical seminars, or guest lectures on Cybersecurity Governance.",
      subject: "Academic Colloquium / Symposium Invitation",
      actionLabel: "Email regarding Colloquia"
    },
    {
      title: "Institutional & Departmental Matters",
      description: "Official institutional correspondence, academic coordination, curriculum review, or departmental planning.",
      subject: "Institutional / Departmental Inquiry",
      actionLabel: "Email regarding Institutional Matters"
    }
  ];

  return (
    <div className="py-10 sm:py-14 lg:py-20 bg-[#F8F6F0]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 lg:space-y-24">
        
        {/* =========================================================================
            SECTION A: CONTACT HERO
        ========================================================================= */}
        <section className="border-b border-[#ECE6DC] pb-12 lg:pb-16 space-y-8">
          <PageHeader
            kicker="Academic Correspondence"
            title="Academic Inquiries & Institutional Contact"
            subtitle="Direct communication channels for scholarly research collaborations, student academic advising, symposium invitations, and institutional matters with Meher Gayatri Devi Tiwari."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            
            {/* Left Column: Academic Introduction (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-base sm:text-lg text-[#3D4440] leading-relaxed font-normal">
                Meher Gayatri Devi Tiwari welcomes academic and professional correspondence from researchers,
                faculty peers, postgraduate scholars, undergraduate students, and conference organizers.
                Whether you are seeking research collaboration in applied cryptography, student project guidance,
                or institutional engagement, please utilize the verified direct channels below.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#292D2A]">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <School className="w-4 h-4 text-[#5B7260]" />
                  <span>Assistant Professor, School of Technology, Woxsen University</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF8F3] border border-[#E2DBD0] font-medium shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-[#5B7260]" />
                  <span>Ph.D. Scholar, Vellore Institute of Technology (VIT)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5B7260]" />
                  <span>Verified Institutional Records</span>
                </span>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A5B6A5]" />
                  <span>Compose Direct Email</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A5B6A5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#channels"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#EBF0EC] hover:bg-[#DEE7DF] text-[#292D2A] border border-[#CBD7CE] text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>All Contact Channels</span>
                </a>

                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40 transition-colors"
                >
                  <span>Faculty Biography →</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Institutional Verification Strip (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="border-b border-[#ECE6DC] pb-3 space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] block font-mono">
                  Official Communication Standard
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292D2A]">
                  Direct Academic Correspondence
                </h3>
              </div>

              <p className="text-xs text-[#575E59] leading-relaxed">
                In strict compliance with academic transparency, all correspondence is conducted directly via verified institutional email and confirmed professional portals.
                No third-party lead capture systems or artificial form aggregators are utilized.
              </p>

              <div className="pt-2 text-[11px] font-mono text-[#7E8580] border-t border-[#ECE6DC] flex items-center justify-between">
                <span>Verified Faculty Email:</span>
                <span className="font-semibold text-[#292D2A]">{profileData.contact.email}</span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION B: PRIMARY VERIFIED CONTACT CHANNELS
        ========================================================================= */}
        <section id="channels" className="scroll-mt-24 space-y-8">
          <div className="border-b border-[#ECE6DC] pb-4 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] font-mono block">
                Direct Channels
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Primary Contact Information
              </h2>
            </div>

            <span className="text-xs font-mono text-[#7E8580]">
              Verified Source Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Verified Email */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-8 space-y-5 flex flex-col justify-between transition-all shadow-2xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <Mail className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7E8580] block">
                    Verified Academic Email
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] break-all leading-snug">
                    {profileData.contact.email}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  Primary channel for research paper discussions, peer reviews, student project advising, and institutional correspondence.
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECE6DC] space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-white text-xs font-semibold uppercase tracking-wider transition-colors w-full sm:w-auto"
                  >
                    <span>Compose Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A5B6A5]" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-[#F8F6F0] border border-[#D5CCC0] text-[#292D2A] text-xs font-medium hover:bg-[#E8E1D5] transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span className="text-[#5B7260] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7E8580]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <div aria-live="polite" className="text-[11px] font-mono text-[#7E8580]">
                  {copiedEmail && "Email address copied to clipboard."}
                </div>
              </div>
            </div>

            {/* Card 2: Documented Telephone */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-8 space-y-5 flex flex-col justify-between transition-all shadow-2xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <Phone className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7E8580] block">
                    Documented Telephone
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] leading-snug">
                    {profileData.contact.phone}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  Documented contact number for academic conference coordination, departmental inquiries, and urgent professional matters.
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECE6DC] space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-white text-xs font-semibold uppercase tracking-wider transition-colors w-full sm:w-auto"
                  >
                    <span>Call Telephone</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A5B6A5]" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-[#F8F6F0] border border-[#D5CCC0] text-[#292D2A] text-xs font-medium hover:bg-[#E8E1D5] transition-colors"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5B7260]" />
                        <span className="text-[#5B7260] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7E8580]" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
                <div aria-live="polite" className="text-[11px] font-mono text-[#7E8580]">
                  {copiedPhone && "Phone number copied to clipboard."}
                </div>
              </div>
            </div>

            {/* Card 3: Professional Network */}
            <div className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-8 space-y-5 flex flex-col justify-between transition-all shadow-2xs">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center text-[#5B7260]">
                  <LinkedInIcon className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7E8580] block">
                    Professional Network
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A] leading-snug">
                    LinkedIn Profile
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#575E59] leading-relaxed">
                  Connect for professional updates, academic seminar announcements, and cybersecurity community discussions.
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECE6DC]">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#EBF0EC] border border-[#CBD7CE] text-[#3B5340] text-xs font-semibold uppercase tracking-wider hover:bg-[#DEE7DF] transition-colors w-full"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION C: ACADEMIC CONTACT TOPICS & PRE-FORMATTED DIRECT TRIGGERS
        ========================================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#ECE6DC] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B7260] font-mono block">
                Inquiry Routing
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Academic Contact Topics
              </h2>
            </div>

            <p className="text-xs text-[#7E8580] max-w-sm">
              Clicking an inquiry topic prepares a direct email with pre-filled academic subject headers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {academicTopics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] rounded-3xl p-7 sm:p-8 space-y-5 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#7E8580] border-b border-[#ECE6DC] pb-3">
                    <span>TOPIC 0{idx + 1}</span>
                    <span className="text-[#5B7260] font-semibold">Academic Inquiries</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE6DC]">
                  <a
                    href={`mailto:${profileData.contact.email}?subject=${encodeURIComponent(topic.subject)}`}
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors group"
                  >
                    <span>{topic.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION D: INSTITUTIONAL AFFILIATION & CAMPUS BASE
        ========================================================================= */}
        <section className="space-y-8">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#5B7260]">
                <MapPin className="w-4 h-4" />
                <span>Campus Location &amp; Affiliation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292D2A] tracking-tight">
                Institutional Base &amp; Academic Affiliations
              </h2>
              <p className="text-sm sm:text-base text-[#575E59] leading-relaxed">
                Faculty appointment and doctoral research affiliations across recognized higher education institutions in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              
              {/* Affiliation 1: Woxsen University */}
              <div className="p-7 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-4">
                <div className="flex items-center justify-between border-b border-[#ECE6DC] pb-3 text-xs">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    Current Faculty Appointment
                  </span>
                  <span className="font-mono text-[#7E8580]">July 2024–Present</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
                    Woxsen University
                  </h3>
                  <div className="text-sm font-semibold text-[#5B7260]">
                    Assistant Professor · School of Technology
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                  Campus Address: {profileData.contact.institutionAddress}
                </p>

                <div className="pt-2">
                  <a
                    href={profileData.contact.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                  >
                    <span>Visit Woxsen University Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Affiliation 2: VIT Vellore */}
              <div className="p-7 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-4">
                <div className="flex items-center justify-between border-b border-[#ECE6DC] pb-3 text-xs">
                  <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                    Doctoral Research Affiliation
                  </span>
                  <span className="font-mono text-[#7E8580]">Sept 2020–Present</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#292D2A]">
                    Vellore Institute of Technology
                  </h3>
                  <div className="text-sm font-semibold text-[#5B7260]">
                    Ph.D. Research Scholar in Information Security
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A514C] leading-relaxed">
                  Campus: Vellore Institute of Technology (VIT), Katpadi, Vellore, Tamil Nadu 632014, India.
                </p>

                <div className="pt-2">
                  <a
                    href="https://vit.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#5B7260] hover:text-[#292D2A] transition-colors"
                  >
                    <span>Visit VIT Institutional Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION E: ACADEMIC INQUIRY PROTOCOL
        ========================================================================= */}
        <section className="space-y-6">
          <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="border-b border-[#ECE6DC] pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5B7260] font-semibold block">
                Correspondence Protocol
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#292D2A]">
                Guidelines for Academic Correspondence
              </h2>
              <p className="text-xs sm:text-sm text-[#575E59] mt-1">
                To facilitate effective scholarly communication, please follow these academic standards when writing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                <span className="font-semibold text-[#292D2A] block">
                  Student Project &amp; Mentorship Inquiries:
                </span>
                <p className="text-[#575E59] leading-relaxed">
                  Students seeking project supervision or academic advice are requested to state their degree program, course level, technical area of interest, and proposed scope in the opening message.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F6F0] border border-[#E8E1D5] space-y-2">
                <span className="font-semibold text-[#292D2A] block">
                  Conference &amp; Review Requests:
                </span>
                <p className="text-[#575E59] leading-relaxed">
                  For symposium speaking invitations or paper review requests, please indicate the organizing institution, scheduling window, and domain alignment (e.g. Cryptography, Blockchain, GRC).
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ECE6DC] text-xs text-[#7E8580] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span>Primary Correspondence: mehergayatri17@gmail.com</span>
              <Link href="/#verification" className="text-[#5B7260] hover:text-[#292D2A] font-medium underline">
                View institutional verification charter →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION F: RELATED PORTFOLIO DIRECTORY
        ========================================================================= */}
        <section className="space-y-6">
          <div className="border-b border-[#ECE6DC] pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7E8580] font-semibold block">
              Related Academic Sections
            </span>
            <h3 className="font-serif text-lg font-bold text-[#292D2A]">
              Explore Other Portfolio Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/research"
              className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-1.5 group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-[#7E8580]">
                <span className="font-mono text-[#5B7260]">01. Research</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                Research Agenda
              </div>
              <p className="text-xs text-[#575E59]">
                5 core themes across visual cryptography and blockchain.
              </p>
            </Link>

            <Link
              href="/publications"
              className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-1.5 group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-[#7E8580]">
                <span className="font-mono text-[#5B7260]">02. Publications</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                Scholarly Repository
              </div>
              <p className="text-xs text-[#575E59]">
                Published works notice and documented inquiry topics.
              </p>
            </Link>

            <Link
              href="/teaching"
              className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-1.5 group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-[#7E8580]">
                <span className="font-mono text-[#5B7260]">03. Teaching</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                Teaching &amp; Mentorship
              </div>
              <p className="text-xs text-[#575E59]">
                Instructional competencies and capstone guidance.
              </p>
            </Link>

            <Link
              href="/projects"
              className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all space-y-1.5 group shadow-2xs"
            >
              <div className="flex items-center justify-between text-xs text-[#7E8580]">
                <span className="font-mono text-[#5B7260]">04. Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#849987] group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
                Verified Systems
              </div>
              <p className="text-xs text-[#575E59]">
                5 engineering projects documented from curriculum vitae.
              </p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
