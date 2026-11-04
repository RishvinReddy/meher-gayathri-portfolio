import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Not Found",
  description: "The requested academic portfolio resource could not be located.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 bg-[#F8F6F0] min-h-[60vh] flex items-center justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center space-y-6 max-w-2xl">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF8F3] border border-[#E8E1D5] text-xs font-semibold uppercase tracking-wider text-[#5B7260]">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 · Route Not Found</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292D2A] tracking-tight">
          Academic Resource Not Located
        </h1>

        <p className="text-base sm:text-lg text-[#575E59] leading-relaxed max-w-xl mx-auto">
          The requested URL does not correspond to an established route in Meher Gayatri Devi Tiwari&apos;s academic portfolio. Please explore the verified primary directory.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#292D2A] hover:bg-[#3D4440] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Portfolio Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#FAF8F3] hover:bg-[#E8E1D5] text-[#292D2A] border border-[#E8E1D5] text-xs font-medium transition-all"
          >
            <span>Campus Directory</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

