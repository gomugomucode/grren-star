"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600 top-[-100px] right-[-100px]" />
      <div className="glow-blob w-[600px] h-[600px] bg-purple-600 bottom-[-200px] left-[-200px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,rgba(3,7,18,0.95)_90%)] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Banner Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          <span>Next-Generation AI Agency</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          We Build <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Systems</span> That Run Your Operations On Autopilot
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Eliminate manual bottlenecks. From lead intake to database updates and automated client scheduling, we construct seamless digital workflows that scale your business without increasing headcount.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <a
            href="#audit-form"
            onClick={(e) => handleScrollTo(e, "#audit-form")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-[1.02] duration-200 group"
          >
            Book Free Audit
            <ArrowRight className="ml-2.5 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            onClick={(e) => handleScrollTo(e, "#process")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-gray-300 hover:text-white glass-card hover:bg-gray-800/40 hover:scale-[1.02] duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Dashboard Graphic Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
          
          {/* Mock Window Title Bar */}
          <div className="bg-gray-900/90 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-xs text-gray-500 font-mono flex items-center space-x-1.5">
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span>synapse_agent_v2.1.py</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Mock Dashboard Body */}
          <div className="bg-gray-950/80 p-6 sm:p-10 font-mono text-left text-xs sm:text-sm text-gray-400 space-y-4">
            <div className="text-indigo-400 font-semibold">[SYSTEM INITIALIZED] Initializing Synapse Workflow Engine...</div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 font-bold">✔</span>
              <span>Loaded integration config: HubSpot CRM, Slack Webhooks, Google Calendar API</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500 font-bold">✔</span>
              <span>Subscribed to PostgreSQL leads table: listening for incoming lead triggers...</span>
            </div>
            <div className="text-yellow-500/90 font-semibold">[TRIGGER EVENT] 22:25:18 - New Inquiry from E-commerce Business (Volume: $2.4M ARR)</div>
            <div className="pl-6 border-l-2 border-indigo-500/30 space-y-1">
              <div>&gt; AI model parsing client bottlenecks: "Losing 40% of leads due to manual follow-up delay"</div>
              <div>&gt; Drafting custom integration strategy: 2-step HubSpot webhook + GPT-4o email dispatcher</div>
              <div>&gt; Generating calendar slot availability for Discovery Call...</div>
            </div>
            <div className="text-indigo-400 font-semibold">[WORKFLOW COMPLETE] Lead matched. Instant booking link sent. Automated notifications routed to sales pipeline.</div>
            <div className="animate-pulse inline-block bg-indigo-500 h-4 w-2 rounded-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
