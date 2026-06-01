"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  BadgeCheck,
  CheckCircle2,
  Award,
} from "lucide-react";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Certified Components",
    description:
      "Every product in our catalog meets IEC, CE, UL, and RoHS standards. We only stock from verified manufacturers and authorized distributors.",
    highlights: ["IEC 61131-3 compliant", "CE & UL certified", "RoHS compliant"],
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Direct partnerships with tier-1 automation manufacturers ensure product authenticity, competitive pricing, and no counterfeit risk.",
    highlights: ["Authorized distributor", "Original packaging", "Short lead times"],
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description:
      "Our team of certified automation engineers provides pre-sales specification support, wiring diagrams, and post-installation troubleshooting.",
    highlights: ["Free pre-sales consultation", "Wiring & config support", "On-site commissioning"],
  },
  {
    icon: ShieldCheck,
    title: "Industrial-Grade Quality",
    description:
      "Products are tested for industrial environments: wide temperature ranges, vibration resistance, IP65–IP68 ratings, and EMC shielding.",
    highlights: ["IP65–IP68 rated", "Wide temp range", "EMC shielded"],
  },
];

const certifications = [
  "ISO 9001:2015",
  "CE Marking",
  "UL Listed",
  "RoHS II",
  "ATEX Certified",
  "IECEx",
];

const metrics = [
  { value: "98.5%", label: "On-time delivery rate" },
  { value: "< 24hr", label: "Technical query response" },
  { value: "12 months", label: "Standard warranty" },
  { value: "0.02%", label: "Product defect rate" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">
            <Award className="h-3 w-3" />
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            The Standard Engineers and Procurement Teams Trust
          </h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            From component specification to delivery and after-sales support, we maintain the quality and reliability that industrial operations require.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="industrial-card p-7 flex gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{point.description}</p>
                  <ul className="space-y-1.5">
                    {point.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Metrics bar */}
        <div className="bg-blue-800 rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{m.value}</div>
              <div className="text-xs text-blue-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-4 w-4 text-blue-700" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
              Certifications &amp; Standards
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 bg-slate-50 text-slate-600 text-xs font-semibold rounded"
              >
                <BadgeCheck className="h-3.5 w-3.5 text-blue-600" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
