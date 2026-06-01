"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Zap, BatteryCharging, Settings2, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    title: "PLC Systems",
    description: "Programmable Logic Controllers for discrete and process automation. Simatic, Allen-Bradley, and Omron compatible.",
    count: "1,240+ Products",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: Radio,
    title: "Sensors & Controllers",
    description: "Inductive, capacitive, photoelectric, ultrasonic and temperature sensors for precision industrial measurement.",
    count: "2,800+ Products",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: Zap,
    title: "Industrial Electronics",
    description: "Relays, circuit breakers, contactors, terminal blocks, and industrial-grade wiring accessories.",
    count: "3,500+ Products",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: BatteryCharging,
    title: "Power Systems",
    description: "DIN rail power supplies, UPS systems, voltage regulators, and 24VDC panel power solutions.",
    count: "980+ Products",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: Settings2,
    title: "Automation Modules",
    description: "I/O modules, communication gateways, servo drives, VFDs, and motion control components.",
    count: "1,650+ Products",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export default function ProductCategories() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="categories" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">
            <Cpu className="h-3 w-3" />
            Product Categories
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Browse by Category</h2>
              <p className="text-slate-500 mt-2 max-w-xl text-sm leading-relaxed">
                Explore our comprehensive range of certified industrial automation components and systems, stocked for fast delivery.
              </p>
            </div>
            <a
              href="#featured"
              onClick={(e) => handleScrollTo(e, "#featured")}
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap"
            >
              View all products <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="industrial-card p-6 flex flex-col gap-4 cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${cat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-1 group-hover:text-blue-800 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.description}</p>
                </div>
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">{cat.count}</span>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-700 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
