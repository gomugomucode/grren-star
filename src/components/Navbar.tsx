"use client";

import { useState, useEffect } from "react";
import { Cpu, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Pain Points", href: "#problem" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative p-2 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
              <Cpu className="h-6 w-6" />
              <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full -z-10" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Synapse<span className="text-indigo-400 font-medium">Automations</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-300 hover:text-indigo-400 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#audit-form"
              onClick={(e) => handleScrollTo(e, "#audit-form")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
            >
              <span className="relative px-5 py-2 transition-all duration-75 bg-gray-950 rounded-md group-hover:bg-opacity-0">
                Book Free Audit
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-header border-t border-gray-800/50 shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? "opacity-100 scale-y-100 py-6" : "opacity-0 scale-y-0 pointer-events-none h-0"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block text-gray-300 hover:text-indigo-400 text-base font-medium transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800/80">
            <a
              href="#audit-form"
              onClick={(e) => handleScrollTo(e, "#audit-form")}
              className="block w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/10"
            >
              Book Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
