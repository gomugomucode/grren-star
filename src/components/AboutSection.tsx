"use client";


import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";

export default function AboutSection() {
  const points = [
    "Help choosing the right system",
    "Support before and after purchase",
    "Solutions for new and existing sites",
    "Delivery throughout Nepal",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-green-600 block" />
              <p className="text-xs font-bold text-green-700 tracking-[0.2em] uppercase">The Greenstar Edge</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Straightforward advice. <br className="hidden lg:block" />
              <span className="text-slate-400 font-light">Dependable products.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light mb-10 border-l-2 border-green-200 pl-6">
              Based in <strong className="font-semibold text-slate-900">{siteConfig.address.city}</strong>, we supply entrance and home automation for residential,
              commercial, and industrial projects across Nepal. Our focus is on precision, durability, and a seamless client experience from inquiry to installation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {points.map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4 items-center group"
                >
                  <div className="w-4 h-px bg-slate-300 group-hover:bg-green-600 group-hover:w-6 transition-all duration-300 shrink-0" />
                  <span className="text-slate-600 font-light group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
