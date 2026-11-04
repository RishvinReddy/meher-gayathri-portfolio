"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const primaryNav = [
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F6F0]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D5]"
          : "bg-[#F8F6F0] border-b border-[#ECE6DC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark with Portrait Thumbnail */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7260] rounded-lg py-1"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#849987] bg-[#EBF0EC] shrink-0 shadow-2xs group-hover:ring-2 group-hover:ring-[#849987]/60 transition-all">
              <Image
                src="/images/profile.jpg"
                alt="Meher Gayatri Devi Tiwari"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#292D2A] tracking-tight group-hover:text-[#5B7260] transition-colors leading-tight">
                Meher Gayatri Devi Tiwari
              </span>
              <span className="text-[11px] text-[#575E59] tracking-wider uppercase font-medium mt-0.5">
                Cybersecurity · Academia · Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {primaryNav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? "text-[#292D2A] bg-[#E8E1D5] border border-[#D5CCC0] shadow-2xs"
                      : "text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/40"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Secondary Action */}
          <div className="hidden xl:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#292D2A] bg-[#EBF0EC] hover:bg-[#DEE7DF] border border-[#CBD7CE] rounded-lg transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#292D2A] bg-[#FAF8F3] border border-[#E8E1D5] hover:bg-[#E8E1D5] focus:outline-none focus:ring-2 focus:ring-[#849987]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Strictly Light-Theme) */}
      {isOpen && (
        <div className="xl:hidden border-b border-[#E8E1D5] bg-[#FAF8F3] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-2 mb-2 border-b border-[#E8E1D5] text-[11px] uppercase tracking-wider font-semibold text-[#7E8580] px-3">
            Academic Portfolio Directory
          </div>
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#E8E1D5] text-[#292D2A] font-semibold border-l-4 border-[#5B7260]"
                    : "text-[#575E59] hover:bg-[#E8E1D5]/40 hover:text-[#292D2A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#ECE6DC]">
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#292D2A] bg-[#EBF0EC] border border-[#CBD7CE] rounded-lg shadow-2xs hover:bg-[#DEE7DF] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
              <span>Send Professional Inquiry</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
