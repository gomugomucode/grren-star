"use client";

import { motion } from "framer-motion";
import { Bot, Calendar, Database, Eye, Mail, MessageSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: "01. Lead Captured",
      description: "An inbound lead submits an inquiry on your website form or chats with your AI agent, sharing their contact information and specific business bottlenecks.",
      details: "Form submission, chat triggers, API webhook hook captures",
    },
    {
      icon: Bot,
      title: "02. AI Processes Request",
      description: "The Synapse AI engine immediately analyzes the input, tags the industry, rates the lead's quality/intent, and drafts a custom personalized response proposal.",
      details: "Intent classification, bottleneck assessment, email copy generation",
    },
    {
      icon: Database,
      title: "03. CRM Stores Data",
      description: "The prospect is instantly registered as a lead in your CRM (HubSpoot, Salesforce, etc.) with custom tags for their bottleneck, contact logs, and status.",
      details: "Database logging, CRM pipeline automation, slack sales notification",
    },
    {
      icon: Mail,
      title: "04. Automated Follow-up",
      description: "Within 45 seconds of submission, the lead receives a tailored email/SMS answering their specific questions, attaching a PDF case study, and linking the calendar.",
      details: "Nodemailer dispatch, qualification SMS, instant speed-to-lead response",
    },
    {
      icon: Calendar,
      title: "05. Booking Confirmed",
      description: "The prospect selects a discovery call slot. The system books the meeting, assigns the sales rep, creates a Google Meet link, and updates the CRM.",
      details: "Calendar sync, meeting confirmation, notification to calendar invites",
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-gray-950/40 border-y border-gray-900 overflow-hidden">
      {/* Decorative glows */}
      <div className="glow-blob w-[450px] h-[450px] bg-indigo-600/10 top-[20%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Bot className="h-3.5 w-3.5" />
            <span>Operational Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The Autopilot Flow: How It Works
          </h2>
          <p className="text-lg text-gray-400">
            Here is the exact journey of a prospect entering the Synapse system—executed entirely in under 2 minutes with zero human intervention.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden lg:block opacity-35" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between">
                  {/* Left Side Content (Desktop) */}
                  <div className={`w-full lg:w-[45%] ${isEven ? "lg:text-right lg:order-1" : "lg:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="glass-card p-6 sm:p-8 rounded-2xl border border-gray-800"
                    >
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className={`text-[10px] font-mono uppercase tracking-wider text-indigo-400 py-1.5 px-3 rounded bg-gray-900/80 inline-block border border-gray-800`}>
                        ⚙️ {step.details}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node (Desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 my-4 lg:my-0 lg:order-2 hidden lg:flex">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-full bg-gray-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20"
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* Right Side Content Spacer (Desktop) */}
                  <div className={`w-full lg:w-[45%] ${isEven ? "lg:order-2" : "lg:order-1"} hidden lg:block`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
