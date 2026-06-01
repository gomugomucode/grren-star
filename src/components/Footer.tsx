"use client";

import { Cpu, Mail, Phone } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Synapse<span className="text-indigo-400 font-medium">Automations</span>
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              We design and construct next-generation digital systems that automate operational friction, database syncs, and qualifying customer engagement pipelines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#problem"
                  onClick={(e) => handleScrollTo(e, "#problem")}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  Pain Points
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleScrollTo(e, "#process")}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  onClick={(e) => handleScrollTo(e, "#results")}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  Metrics Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleScrollTo(e, "#pricing")}
                  className="text-gray-500 hover:text-indigo-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-indigo-400" />
                <a href="mailto:contact@synapseautomations.com" className="hover:text-indigo-400 transition-colors">
                  contact@synapseautomations.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-indigo-400" />
                <a href="tel:+15551234567" className="hover:text-indigo-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="leading-relaxed">
                Silicon Valley Office:<br />
                100 Pine Street, Suite 1200<br />
                San Francisco, CA 94111
              </li>
            </ul>
          </div>

          {/* Call To Action Block */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Ready to automate?</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Stop losing margins to copy-paste tasks. Let's trace your revenue leaks.
            </p>
            <a
              href="#audit-form"
              onClick={(e) => handleScrollTo(e, "#audit-form")}
              className="inline-flex items-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-lg transition-colors shadow shadow-indigo-500/10"
            >
              Request Free Audit
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Synapse Automations Inc. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
