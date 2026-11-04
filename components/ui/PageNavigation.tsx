import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavTarget {
  label: string;
  href: string;
  description?: string;
}

interface PageNavigationProps {
  prev?: NavTarget;
  next?: NavTarget;
  className?: string;
}

export default function PageNavigation({ prev, next, className = "" }: PageNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Page navigation"
      className={`border-t border-[#ECE6DC] pt-10 mt-16 sm:mt-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${className}`}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center space-x-3 p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all text-left max-w-sm"
        >
          <div className="w-9 h-9 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center shrink-0 group-hover:bg-[#DEE7DF] transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#5B7260] group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#7E8580] font-semibold">
              Previous Section
            </span>
            <span className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
              {prev.label}
            </span>
            {prev.description && (
              <span className="block text-xs text-[#575E59] truncate max-w-[200px]">
                {prev.description}
              </span>
            )}
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex items-center justify-between space-x-3 p-4 rounded-xl bg-[#FAF8F3] border border-[#E8E1D5] hover:border-[#849987] transition-all text-right max-w-sm sm:ml-auto"
        >
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-[#7E8580] font-semibold">
              Next Section
            </span>
            <span className="font-serif text-base font-bold text-[#292D2A] group-hover:text-[#5B7260] transition-colors">
              {next.label}
            </span>
            {next.description && (
              <span className="block text-xs text-[#575E59] truncate max-w-[200px]">
                {next.description}
              </span>
            )}
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#EBF0EC] border border-[#CBD7CE] flex items-center justify-center shrink-0 group-hover:bg-[#DEE7DF] transition-colors">
            <ArrowRight className="w-4 h-4 text-[#5B7260] group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}

