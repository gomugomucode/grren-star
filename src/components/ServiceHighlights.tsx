"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/services";

interface ServiceHighlightsProps {
  hideHeading?: boolean;
  heading?: string;
  subtext?: string;
}

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
  hidden: { opacity: 0, y: 30 },
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {servicePages.map((service) => {
            return (
              <motion.article 
                key={service.slug} 
                variants={item}
                className="group relative overflow-hidden rounded-3xl h-[400px] flex flex-col justify-end isolate shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="absolute inset-0 object-cover z-[-2] transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 z-[-1] bg-green-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-200/80 leading-relaxed mb-6 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group/link"
                  >
                    Explore solution
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

