"use client";

import { motion } from "framer-motion";
import { Building, Briefcase, Factory, Home, Hotel, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const clients: { name: string; icon: LucideIcon }[] = [
  { name: "Residential Villas", icon: Home },
  { name: "Commercial Complexes", icon: Building },
  { name: "Industrial Units", icon: Factory },
  { name: "Shopping Malls", icon: Briefcase },
  { name: "Hotels & Resorts", icon: Hotel },
  { name: "Hospitals", icon: Stethoscope },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">Trusted By</div>
          <h2 className="text-3xl font-bold text-slate-900">Our Valuable Clients</h2>
          <p className="text-slate-500 mt-3 text-sm">
            Serving residential, commercial, and industrial clients across Tamil Nadu with
            reliable entrance and home automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="industrial-card p-5 flex flex-col items-center justify-center text-center gap-3 min-h-[120px]"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-600 leading-snug">
                  {client.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
