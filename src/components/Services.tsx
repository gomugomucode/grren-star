"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Database, MessageSquare, PhoneCall, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Systems",
      description: "We deploy customized Large Language Models (LLMs) to automatically categorize inquiries, draft bespoke responses, audit compliance, and extract unstructured data on the fly.",
      badge: "Intelligent",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Connect your tech stack. We replace slow human handoffs with robust, multi-step triggers. Webhook integrations sync files, calculate margins, and prompt action items automatically.",
      badge: "High Efficiency",
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Synchronize your leads database, pipeline stages, client details, and transaction history. Eliminate manual copy-paste across HubSpot, Salesforce, Pipedrive, or Custom DBs.",
      badge: "Zero Loss",
    },
    {
      icon: PhoneCall,
      title: "Lead Follow-up Systems",
      description: "Respond to inquiries in milliseconds. Our systems instantly qualify incoming leads via SMS/Email, send personalized pitch documents, and prompt booking reminders.",
      badge: "Speed-To-Lead",
    },
    {
      icon: MessageSquare,
      title: "Chatbot / AI Agent Setup",
      description: "Deploy 24/7 autonomous agents on your website, WhatsApp, Slack, or SMS. These agents qualify cold traffic, resolve general customer support, and schedule sales calls.",
      badge: "Active 24/7",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Decorative Glow Blob */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600/10 bottom-[10%] right-[5%]" />
      <div className="glow-blob w-[300px] h-[300px] bg-blue-600/10 top-[10%] left-[5%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>Our Service Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Custom Automation Built For Enterprise Scaling
          </h2>
          <p className="text-lg text-gray-400">
            We don't offer generic templates. We build custom-engineered AI models and robust integrations tailored exactly to your company's operational bottlenecks.
          </p>
        </div>

        {/* Services Grid (centered layout since there are 5 services) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // The 5th item will stretch in larger layouts for styling symmetry
            const isLastItem = index === 4;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`glass-card p-8 rounded-2xl border border-gray-800/80 relative flex flex-col justify-between ${
                  isLastItem ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-900 border border-gray-800 text-indigo-300 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-900 flex items-center text-xs font-semibold text-indigo-400 group cursor-pointer hover:text-indigo-300">
                  <span>Learn integration details</span>
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">-&gt;</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
