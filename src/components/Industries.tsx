"use client";

import { motion } from "framer-motion";
import { Factory, Zap, Bot, Building2, Cpu } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Assembly lines, CNC machine control, conveyor automation, and quality inspection systems.",
    examples: ["Automotive", "Food & Beverage", "Pharmaceutical"],
    color: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "SCADA systems, grid monitoring, substation automation, and renewable energy control.",
    examples: ["Power Generation", "Water Treatment", "Oil & Gas"],
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    icon: Bot,
    title: "Robotics & Motion",
    description: "Servo systems, motion controllers, robot safety cells, and precision position feedback.",
    examples: ["Collaborative Robots", "Delta Robots", "AGVs"],
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "HVAC control, building management systems, escalator drives, and access automation.",
    examples: ["Data Centers", "Airports", "Commercial Buildings"],
    color: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    icon: Cpu,
    title: "Smart Factories",
    description: "IIoT-enabled plants, edge computing gateways, OPC-UA integration, and predictive maintenance.",
    examples: ["Industry 4.0", "Digital Twins", "Edge Analytics"],
    color: "text-rose-700 bg-rose-50 border-rose-200",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">
            <Factory className="h-3 w-3" />
            Industries Served
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Built for Demanding Environments</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Our products are deployed across a broad range of industrial sectors. We understand the specific compliance, durability, and integration requirements of each environment.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="industrial-card p-6"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${industry.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base mb-2">{industry.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {industry.examples.map((ex) => (
                    <span key={ex} className="text-[10px] px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-500 rounded font-medium">
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-blue-800 text-white rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-xl mb-3">Need a Custom Solution?</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Our technical team works with procurement and engineering leads to identify the right components for complex, non-standard applications.
              </p>
            </div>
            <a
              href="#rfq"
              onClick={(e) => { e.preventDefault(); document.querySelector("#rfq")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-6 inline-flex items-center gap-2 bg-white text-blue-800 font-semibold text-sm px-5 py-2.5 rounded hover:bg-blue-50 transition-colors w-fit"
            >
              Discuss your project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
