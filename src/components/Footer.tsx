"use client";

import { DoorOpen, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-green-700 rounded">
                <DoorOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Silver Green <span className="text-green-400">Automations</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Entrance automation and home automation company in Coimbatore, Tamil Nadu.
              Seamless integration of technology with day-to-day living for homes and factories.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Reviews", href: "#reviews" },
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
                <span>
                  Sf.No.170, Shiva Nagar, Kalapatti,
                  Coimbatore – 641048, Tamil Nadu
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a href="tel:+919787766455" className="hover:text-green-400 transition-colors">
                  +91 97877 66455
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <a
                  href="mailto:info@silvergreenautomations.in"
                  className="hover:text-green-400 transition-colors"
                >
                  info@silvergreenautomations.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Silver Green Automations. All Rights Reserved.</p>
          <p>Entrance &amp; Home Automation · Coimbatore, India</p>
        </div>
      </div>
    </footer>
  );
}
