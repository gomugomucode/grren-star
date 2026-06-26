"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Cpu, DoorOpen, Webhook, Home, ArrowRight } from "lucide-react";

interface ServiceHighlightsProps {
  hideHeading?: boolean;
  heading?: string;
  subtext?: string;
}

import { servicePages } from "@/lib/services";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function ServiceHighlights({
  hideHeading = false,
  heading = "Pioneering Automation Solutions",
  subtext = "Discover our comprehensive suite of intelligent automation services engineered for performance, security, and convenience.",
}: ServiceHighlightsProps) {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!hideHeading && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100/80 border border-green-200 text-xs font-bold text-green-800 mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              {heading}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {subtext}
            </p>
          </motion.div>
        )}

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {servicePages.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article 
                key={service.slug} 
                variants={item}
                className="group relative p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full industrial-card"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border border-green-200 group-hover:scale-110 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-500">
                  <Icon className="w-7 h-7 text-green-700 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
                  {service.description}
                </p>
                
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors group/link"
                >
                  Explore solution
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
