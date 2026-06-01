"use client";

import { motion } from "framer-motion";
import { BarChart3, LineChart, TrendingUp, Users } from "lucide-react";

export default function Proof() {
  const metrics = [
    {
      title: "Lead Capture Acceleration",
      value: "+40%",
      label: "More Leads Captured",
      description: "Implementing 24/7 web and WhatsApp AI qualification agents ensures traffic is engaged instantly, preventing prospect bounce.",
      tag: "Conversion Rate Boost",
    },
    {
      title: "Operational Efficiency",
      value: "-70%",
      label: "Manual Work Eliminated",
      description: "Automatically syncing leads, drafting follow-up emails, and booking meetings takes the administrative burden off your sales team.",
      tag: "Time Allocation Saved",
    },
    {
      title: "Response Time Speed",
      value: "42s",
      label: "Average Speed-to-Lead",
      description: "Prospects receive qualification replies and custom PDF assets in under a minute, beating the standard industry average of 4.2 hours.",
      tag: "Instant Response Time",
    },
  ];

  return (
    <section id="results" className="relative py-24 overflow-hidden">
      {/* Background glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/5 top-[10%] left-[20%]" />
      <div className="glow-blob w-[400px] h-[400px] bg-purple-600/5 bottom-[10%] right-[20%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Performance Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Real Inbound Efficiencies, Quantified
          </h2>
          <p className="text-lg text-gray-400">
            See the average operational impact achieved by our clients within 30 days of integrating the Synapse Automation Engine.
          </p>
        </div>

        {/* Dashboard Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-gray-800/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block mb-1">
                  {metric.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-6">
                  {metric.title}
                </h3>
                
                {/* Metric Display */}
                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-sm font-semibold text-gray-300">
                    {metric.label}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed border-t border-gray-900 pt-6">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mock SaaS Dashboard Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-gray-900">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-indigo-400" />
                <span>Synapse Client Dashboard Simulation</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">Aggregated statistics: last 30 operational days</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3 bg-gray-950 p-1.5 rounded-lg border border-gray-800 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-indigo-600 text-white font-medium">Inbound Leads</span>
              <span className="px-2.5 py-1 text-gray-500">Savings</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-900">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Total Inbound Leads</span>
              <span className="text-2xl font-bold text-white">412</span>
              <span className="text-[10px] text-green-400 block mt-1">↑ +41% vs last month</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-900">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">AI Qualified Leads</span>
              <span className="text-2xl font-bold text-white">389</span>
              <span className="text-[10px] text-indigo-400 block mt-1">Qualification accuracy: 96%</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-900">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Booked Discovery Calls</span>
              <span className="text-2xl font-bold text-white">164</span>
              <span className="text-[10px] text-green-400 block mt-1">42% Conversion-to-call</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/60 border border-gray-900">
              <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Human Hours Saved</span>
              <span className="text-2xl font-bold text-white">82 hrs</span>
              <span className="text-[10px] text-purple-400 block mt-1">Worth approx. $6,150/mo</span>
            </div>
          </div>

          {/* Simple custom SVG chart for nice aesthetics */}
          <div className="mt-8 h-40 w-full relative">
            <svg viewBox="0 0 800 150" className="w-full h-full text-indigo-500">
              {/* Grid Lines */}
              <line x1="0" y1="30" x2="800" y2="30" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="75" x2="800" y2="75" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="120" x2="800" y2="120" stroke="#1f2937" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Gradient fill */}
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Chart Line Path */}
              <path
                d="M 0 130 Q 100 120 200 90 T 400 80 T 600 45 T 800 35 L 800 150 L 0 150 Z"
                fill="url(#chart-glow)"
              />
              <path
                d="M 0 130 Q 100 120 200 90 T 400 80 T 600 45 T 800 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              {/* Dots */}
              <circle cx="200" cy="90" r="4" className="fill-white stroke-indigo-500 stroke-2" />
              <circle cx="400" cy="80" r="4" className="fill-white stroke-indigo-500 stroke-2" />
              <circle cx="600" cy="45" r="4" className="fill-white stroke-indigo-500 stroke-2" />
              <circle cx="800" cy="35" r="4" className="fill-white stroke-indigo-500 stroke-2" />
            </svg>
            <div className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono flex items-center space-x-1">
              <LineChart className="w-3 h-3 text-indigo-400" />
              <span>Lead Response Acceleration Chart</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
