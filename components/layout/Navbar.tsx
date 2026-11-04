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
      {/* Floating Navigation Pill — Dark Obsidian surface matching the Footer */}
      <div
        className={`pointer-events-auto w-full rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between ${
          isScrolled
            ? "bg-[#0F1110]/95 backdrop-blur-md border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.35)]"
            : "bg-[#0F1110]/92 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        }`}
      >
        {/* Brand & Professional Identity inside Pill */}
        <Link
          href="/"
          className="group flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#849987] rounded-full p-0.5"
          aria-label="Meher Gayatri Devi Tiwari Portfolio Home"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0 bg-white/10 shadow-xs">
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
              <span className="font-serif text-sm sm:text-base font-bold text-[#F8F6F0] tracking-tight group-hover:text-[#A5B6A5] transition-colors leading-none">
                Meher Gayatri Devi Tiwari
              </span>
              <span className="hidden xl:inline text-[10px] uppercase tracking-wider font-semibold text-[#A5B6A5] bg-white/[0.08] px-2 py-0.5 rounded-full border border-white/10">
                Assistant Professor
              </span>
            </div>
            <span className="text-[10px] text-[#A2A9A4] tracking-wider uppercase font-medium mt-0.5 hidden sm:block">
              Information Security · VIT Ph.D. Scholar
            </span>
          </div>
        </Link>

        {/* Center Pill: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 p-1 bg-white/[0.06] rounded-full border border-white/10"
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
                    ? "text-[#0F1110] bg-[#F8F6F0] shadow-xs"
                    : "text-[#C2C9C4] hover:text-[#F8F6F0] hover:bg-white/10"
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
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold text-[#F8F6F0] bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 rounded-full transition-all shadow-xs group"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#849987] group-hover:text-[#A5B6A5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-full text-[#F8F6F0] bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-[#849987]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Floating Card beneath the Pill) */}
      {isOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 w-full rounded-3xl bg-[#0F1110]/98 backdrop-blur-lg border border-white/15 p-4 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 text-[#F8F6F0]">
          <div className="pb-2 border-b border-white/10 text-[10px] uppercase tracking-wider font-semibold text-[#A2A9A4] px-3 flex items-center justify-between">
            <span>Academic Directory</span>
            <span className="text-[#849987] font-mono text-[9px]">8 Sections</span>
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
                      ? "bg-[#F8F6F0] text-[#0F1110] shadow-xs"
                      : "bg-white/[0.06] text-[#C2C9C4] hover:bg-white/10 hover:text-[#F8F6F0] border border-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-1.5 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F6F0] bg-white/[0.08] border border-white/15 rounded-full hover:bg-white/[0.14] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#849987]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
