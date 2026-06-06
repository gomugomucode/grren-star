"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Award, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  { icon: Building2, label: "Business", value: "Suppliers" },
  { icon: MapPin, label: "Location", value: siteConfig.address.city },
  { icon: Award, label: "Specialization", value: "Automation" },
  { icon: Users, label: "Coverage", value: siteConfig.coverage },
];

const usageAreas = [
  "Residential",
  "Commercial",
  "Industrial",
  "Mall",
  "Hospital",
  "Hotel",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label mb-4">About Us</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              About {siteConfig.name}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {siteConfig.name} is a trusted supplier of entrance automation and home
              automation systems in Nepal. We help homes, businesses, and factories integrate
              modern gate motors, barriers, shutters, and smart home systems with reliable
              products at competitive prices.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Order quickly by phone or WhatsApp — our team understands local requirements
              and delivers across {siteConfig.coverage.toLowerCase()} with dedicated support
              from {siteConfig.address.city}.
            </p>

            <div className="flex flex-wrap gap-2">
              {usageAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1 bg-green-50 border border-green-200 text-green-800 rounded-full font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="industrial-card p-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                </div>
              );
            })}

            <div className="col-span-2 industrial-card p-6 bg-green-50 border-green-200">
              <h3 className="font-bold text-slate-800 mb-2">How to Order</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Call {siteConfig.phoneDisplay} or message us on WhatsApp with your product
                name, quantity, and delivery location anywhere in Nepal. We supply gate motors,
                boom barriers, rolling shutters, and complete home automation kits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
