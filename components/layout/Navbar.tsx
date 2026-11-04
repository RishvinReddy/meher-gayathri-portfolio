"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Teaching", href: "/teaching" },
    { label: "Projects", href: "/projects" },
    { label: "Achievements", href: "/achievements" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full px-3 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pointer-events-none transition-all duration-300">
      {/* Floating Navigation Pill */}
      <div
        className={`pointer-events-auto w-full rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled
            ? "bg-[#FAF8F3]/92 backdrop-blur-md border border-[#DCD5C9] shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "bg-[#FAF8F3]/95 backdrop-blur-md border border-[#E2DBD0] shadow-sm"
        }`}
      >
        {/* Brand & Professional Identity inside Pill */}
        <Link
          href="/"
          className="group flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7260] rounded-full p-0.5"
          aria-label="Meher Gayatri Devi Tiwari Portfolio Home"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D5CCC0] shrink-0 bg-[#E8E1D5] shadow-xs">
            <Image
              src="/images/profile.jpg"
              alt="Meher Gayatri Devi Tiwari"
              fill
              sizes="32px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center space-x-1.5">
              <span className="font-serif text-sm sm:text-base font-bold text-[#292D2A] tracking-tight group-hover:text-[#5B7260] transition-colors leading-none">
                Meher Gayatri Devi Tiwari
              </span>
              <span className="hidden xl:inline text-[10px] uppercase tracking-wider font-semibold text-[#5B7260] bg-[#EBF0EC] px-2 py-0.5 rounded-full border border-[#CBD7CE]">
                Assistant Professor
              </span>
            </div>
            <span className="text-[10px] text-[#7E8580] tracking-wider uppercase font-medium mt-0.5 hidden sm:block">
              Information Security · VIT Ph.D. Scholar
            </span>
          </div>
        </Link>

        {/* Center Pill: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 p-1 bg-[#F0EDE6]/80 rounded-full border border-[#E5DFD4]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isActive
                    ? "text-[#F8F6F0] bg-[#292D2A] shadow-xs"
                    : "text-[#575E59] hover:text-[#292D2A] hover:bg-[#FAF8F3]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Desktop Contact Pill */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-[#292D2A] bg-[#EBF0EC] hover:bg-[#DEE7DF] border border-[#CBD7CE] rounded-full transition-all shadow-xs group"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5B7260] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-full text-[#292D2A] bg-[#F0EDE6] hover:bg-[#E8E1D5] border border-[#E5DFD4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#849987]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Floating Card beneath the Pill) */}
      {isOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 w-full rounded-3xl bg-[#FAF8F3]/98 backdrop-blur-lg border border-[#E2DBD0] p-4 shadow-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="pb-2 border-b border-[#E8E1D5] text-[10px] uppercase tracking-wider font-semibold text-[#7E8580] px-3 flex items-center justify-between">
            <span>Academic Directory</span>
            <span className="text-[#5B7260] font-mono text-[9px]">8 Sections</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-full text-xs font-semibold transition-colors text-center ${
                    isActive
                      ? "bg-[#292D2A] text-[#F8F6F0]"
                      : "bg-[#F0EDE6]/70 text-[#575E59] hover:bg-[#E8E1D5] hover:text-[#292D2A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#ECE6DC]">
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-1.5 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#292D2A] bg-[#EBF0EC] border border-[#CBD7CE] rounded-full hover:bg-[#DEE7DF] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#5B7260]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
