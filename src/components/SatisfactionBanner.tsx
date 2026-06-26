"use client";

import { motion, Variants } from "framer-motion";

export default function SatisfactionBanner() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="border-y border-slate-100 bg-white py-16 lg:py-20 z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
        >
          <motion.div variants={item} className="group flex flex-col border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-700">
            <span className="text-[10px] font-bold tracking-[0.25em] text-green-700 uppercase mb-4 block">01 &mdash; Headquarters</span>
            <strong className="block text-2xl font-bold text-slate-900 tracking-tight mb-2">Butwal HQ</strong>
            <span className="text-slate-500 font-light leading-relaxed">Dedicated local support and rapid response technical teams based right here.</span>
          </motion.div>
          
          <motion.div variants={item} className="group flex flex-col border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-700">
            <span className="text-[10px] font-bold tracking-[0.25em] text-green-700 uppercase mb-4 block">02 &mdash; Logistics</span>
            <strong className="block text-2xl font-bold text-slate-900 tracking-tight mb-2">Nepal-wide</strong>
            <span className="text-slate-500 font-light leading-relaxed">Express delivery network ensuring your automation products arrive on time.</span>
          </motion.div>
          
          <motion.div variants={item} className="group flex flex-col border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-700">
            <span className="text-[10px] font-bold tracking-[0.25em] text-green-700 uppercase mb-4 block">03 &mdash; Support</span>
            <strong className="block text-2xl font-bold text-slate-900 tracking-tight mb-2">Direct Access</strong>
            <span className="text-slate-500 font-light leading-relaxed">24/7 dedicated assistance via Phone &amp; WhatsApp for all your queries.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
