"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

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
            <a href={getTelLink()} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" />
              {siteConfig.phoneDisplay}
            </a>
            <span>{siteConfig.address.full} · {siteConfig.coverage}</span>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="h-3 w-3" />
            {siteConfig.email}
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
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="flex items-center justify-center rounded-full overflow-hidden bg-green-700">
                <Image
                  src="/nav_logo.png"
                  alt={`${siteConfig.shortName} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-slate-900 tracking-tight">
                  {siteConfig.shortName}
                </span>
                <span className="block text-[10px] text-green-700 font-semibold uppercase tracking-widest">
                  Suppliers
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
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

            <div className="hidden md:flex items-center gap-2">
              <a
                href={getTelLink()}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-green-800 border border-green-700 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1fb855] rounded-lg transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
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
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={getTelLink()}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-green-800 border border-green-700 rounded-lg"
                >
                  <Phone className="h-4 w-4" />
                  Call to Order
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#25D366] rounded-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp to Order
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
