"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      // Update scrolled state for styling
      setScrolled(currentScrollY > 20);
      
      // Hide/Show logic with a small threshold (e.g., 10px) to prevent scroll jitter
      if (currentScrollY > 100) {
        if (scrollDelta > 10) {
          // Scrolling down
          setHidden(true);
        } else if (scrollDelta < -10) {
          // Scrolling up
          setHidden(false);
        }
      } else {
        // Always show at the very top
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHashOnly = href.startsWith("#");
    const isRootHash = href.startsWith("/") && href.includes("#");

    if (!isHashOnly && !isRootHash) {
      return; // let next/link handle it
    }

    if (isRootHash && window.location.pathname !== "/") {
      return; // let next/link handle it
    }

    e.preventDefault();
    setIsOpen(false);

    const hash = isHashOnly ? href : `#${href.split("#")[1]}`;
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
          hidden 
            ? "-translate-y-full opacity-0" 
            : "translate-y-0 opacity-100"
        } ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm py-3" 
            : "bg-white border-b border-slate-200/40 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 interactive group pl-2"
          >
            <div className="flex items-center justify-center rounded-full overflow-hidden bg-white shadow-sm ring-1 ring-slate-100">
              <Image
                src="/nav_logo.webp"
                alt={`${siteConfig.shortName} logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className={`leading-tight transition-opacity duration-300 ${scrolled ? "hidden sm:block" : "block"}`}>
              <span className="block text-base font-bold text-slate-900 tracking-tight group-hover:text-green-700 transition-colors">
                {siteConfig.shortName}
              </span>
              <span className="block text-[9px] text-green-700 font-bold uppercase tracking-widest">
                Suppliers
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e as any, link.href)}
                className="text-base font-bold text-slate-600 hover:text-green-700 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 pr-2">
            <a
              href={getTelLink()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 hover:text-green-700 bg-white hover:bg-green-50 border border-slate-200 rounded-full transition-all shadow-sm"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-green-700 border border-transparent rounded-full transition-all shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden p-2 mr-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-0 z-40 pt-20 pb-8 px-6 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl rounded-b-3xl"
            >
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e as any, link.href)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="block text-xl font-bold text-slate-800 hover:text-green-700 py-3 border-b border-slate-100 last:border-b-0"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
              <div className="pt-4 space-y-3">
                <a
                  href={getTelLink()}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1fb855] rounded-xl transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
