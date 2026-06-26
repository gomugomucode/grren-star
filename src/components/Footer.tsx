"use client";

import { Leaf, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import MapSection from "@/components/MapSection";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      return;
    }
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start mb-12">
          <div>
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-green-700 rounded">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">
                  {siteConfig.shortName}{" "}
                  <span className="text-green-400">Suppliers</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Entrance and home automation products with support from Butwal and delivery across Nepal.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={getTelLink()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700 hover:border-green-500 hover:text-green-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call to Order
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp to Order
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-10 pt-8 border-t border-slate-800">
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "About", href: "#about" },
                    { name: "Products", href: "#products" },
                    { name: "Services", href: "/services" },
                    { name: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className="text-slate-400 hover:text-green-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex gap-2">
                    <MapPin className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{siteConfig.address.full}</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <a href={getTelLink()} className="hover:text-green-400 transition-colors">
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-2 items-center">
                    <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-green-400 transition-colors break-all">
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <MapSection />
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed and developed by <a href="https://yarsabyte.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">YarsaByte.</a></p>
        </div>
      
      </div>
    </footer>
  );
}
