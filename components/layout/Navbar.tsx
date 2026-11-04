"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F6F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D5]"
          : "bg-[#F8F6F0] border-b border-[#ECE6DC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#849987] rounded-sm py-1"
          >
            <div className="w-10 h-10 rounded border border-[#849987]/40 bg-[#FAF8F3] flex items-center justify-center text-[#292D2A] font-serif font-bold text-lg shadow-2xs group-hover:border-[#849987] group-hover:bg-[#EBF0EC] transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#292D2A] tracking-tight group-hover:text-[#5B7260] transition-colors">
                Meher Gayatri Devi Tiwari
              </span>
              <span className="text-xs text-[#575E59] tracking-wider uppercase font-medium">
                Cybersecurity · Academia · Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? "text-[#292D2A] bg-[#E8E1D5]/60 font-semibold border-b-2 border-[#849987]"
                      : "text-[#575E59] hover:text-[#292D2A] hover:bg-[#E8E1D5]/30"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#292D2A] bg-[#EBF0EC] hover:bg-[#DCE6DE] border border-[#CBD7CE] rounded transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#5B7260]" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-[#292D2A] hover:bg-[#E8E1D5]/60 focus:outline-none focus:ring-2 focus:ring-[#849987]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#E8E1D5] bg-[#FAF8F3] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="pb-2 mb-2 border-b border-[#E8E1D5] text-xs text-[#575E59] px-3">
            Academic Portfolio Directory
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#E8E1D5] text-[#292D2A] font-semibold"
                    : "text-[#575E59] hover:bg-[#E8E1D5]/40 hover:text-[#292D2A]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#E8E1D5] flex flex-col space-y-2">
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 w-full py-2.5 text-sm font-medium text-white bg-[#5B7260] hover:bg-[#4E6252] rounded shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send Professional Enquiry</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
