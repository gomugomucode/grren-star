"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Award, Users } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Founded", value: "2017" },
  { icon: MapPin, label: "Location", value: "Coimbatore, TN" },
  { icon: Award, label: "Specialization", value: "Entrance Automation" },
  { icon: Users, label: "Coverage", value: "All Tamil Nadu" },
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
              About Silver Green Automations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver Green Automations is an entrance automation and home automation company
              established with the dedication to achieve seamless integration of technology
              with day-to-day living in every home and factory — creating a lifestyle totally
              unique to each individual and family.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our willingness to understand every client&apos;s specific requirement, combined
              with our team&apos;s expertise, makes us the obvious choice for smart home and
              entrance automation seekers across Tamil Nadu.
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
                <div
                  key={item.label}
                  className="industrial-card p-6 text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.label}</div>
                </div>
              );
            })}

            <div className="col-span-2 industrial-card p-6 bg-green-50 border-green-200">
              <h3 className="font-bold text-slate-800 mb-2">Our Expertise</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gate fabrication &amp; automation, rolling shutter fabrication &amp; automation,
                glass door automation, boom barriers, and complete home automation solutions
                using premium Italian DITEC motors and European-standard components.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
