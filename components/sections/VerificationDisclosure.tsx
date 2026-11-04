import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profileData } from "@/content/profile";

export default function VerificationDisclosure() {
  return (
    <section id="verification" className="py-16 lg:py-24 bg-[#F8F6F0] border-b border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-xl p-8 lg:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#ECE6DC] pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#5B7260] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Editorial Transparency & Fact Integrity</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#292D2A]">
                Content Verification & Academic Disclosure
              </h3>
            </div>
            <div className="text-xs text-[#575E59] max-w-sm">
              In accordance with academic portfolio standards, all career dates, credentials, and achievements are verified directly against source documentation.
            </div>
          </div>

          {/* Checklist table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#ECE6DC] text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-[#7E8580] uppercase tracking-wider font-semibold text-[11px]">
                  <th scope="col" className="py-3 pr-4">Category</th>
                  <th scope="col" className="py-3 px-4">Item & Claim</th>
                  <th scope="col" className="py-3 px-4">Primary Source</th>
                  <th scope="col" className="py-3 px-4">Verification Status</th>
                  <th scope="col" className="py-3 pl-4">Editorial Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ECE6DC] text-[#3D4440]">
                {profileData.verificationChecklist.map((item, idx) => {
                  const isVerified = item.status === "verified";
                  const isPending = item.status === "pending-clarification";
                  const isConfirmed = item.status === "author-confirmed";

                  return (
                    <tr key={idx} className="hover:bg-[#F3EFE8]/50 transition-colors">
                      <td className="py-3.5 pr-4 font-medium text-[#292D2A]">{item.category}</td>
                      <td className="py-3.5 px-4 font-semibold">{item.item}</td>
                      <td className="py-3.5 px-4 text-[#575E59]">{item.source}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {isVerified && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EBF0EC] text-[#3B5340] border border-[#CBD7CE]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7260]" />
                            <span>Verified</span>
                          </span>
                        )}
                        {isPending && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FAF2E6] text-[#7A5A2B] border border-[#E8D6BF]">
                            <Clock className="w-3.5 h-3.5 text-[#A87432]" />
                            <span>Clarified</span>
                          </span>
                        )}
                        {isConfirmed && (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F4EFE6] text-[#4F5651] border border-[#DCD3C4]">
                            <FileText className="w-3.5 h-3.5 text-[#5B7260]" />
                            <span>CV Confirmed</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 pl-4 text-xs text-[#575E59] max-w-xs">{item.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="pt-4 border-t border-[#ECE6DC] text-xs text-[#7E8580] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>Source of Record: Meher Gayatri Devi Tiwari Official Curriculum Vitae.</span>
            <span>Last Editorial Audit: Academic Year 2024–2025.</span>
          </div>

        </div>

      </div>
    </section>
  );
}

