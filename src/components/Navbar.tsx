"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#categories" },
    { name: "Featured", href: "#featured" },
    { name: "Industries", href: "#industries" },
    { name: "Why Us", href: "#trust" },
    { name: "Contact", href: "#rfq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top info bar */}
      <div className="bg-blue-900 text-blue-100 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              +1 (800) 123-4567
            </span>
            <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
          </div>
          <span>support@apexautomation.com</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        } border-b border-slate-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="p-1.5 bg-blue-800 rounded">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-slate-900 tracking-tight">
                  Apex Automation
                </span>
                <span className="block text-[10px] text-blue-700 font-semibold uppercase tracking-widest">
                  &amp; Electronics
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#rfq"
                onClick={(e) => handleScrollTo(e, "#rfq")}
                className="btn-primary text-sm"
              >
                Request a Quote
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block text-sm font-medium text-slate-700 hover:text-blue-800 py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="#rfq"
                  onClick={(e) => handleScrollTo(e, "#rfq")}
                  className="btn-primary w-full text-center text-sm"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
