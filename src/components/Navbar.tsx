"use client";

import { useState, useEffect } from "react";
import { Gate, Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-green-900 text-green-100 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+919787766455" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" />
              +91 97877 66455
            </a>
            <span>Kalapatti, Coimbatore · Tamil Nadu</span>
          </div>
          <a
            href="mailto:info@silvergreenautomations.in"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="h-3 w-3" />
            info@silvergreenautomations.in
          </a>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        } border-b border-slate-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center gap-2.5 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="p-1.5 bg-green-700 rounded">
                <Gate className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-slate-900 tracking-tight">
                  Silver Green
                </span>
                <span className="block text-[10px] text-green-700 font-semibold uppercase tracking-widest">
                  Automations
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-green-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="btn-primary text-sm"
              >
                Contact Us
              </a>
            </div>

            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block text-sm font-medium text-slate-700 hover:text-green-700 py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <a
                  href="tel:+919787766455"
                  className="block text-sm text-green-700 font-semibold py-1"
                >
                  Call: +91 97877 66455
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="btn-primary w-full text-center text-sm mt-3"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
