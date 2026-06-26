"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      index: "01",
      title: "AI Automation Systems",
      description: "We deploy customized Large Language Models (LLMs) to automatically categorize inquiries, draft bespoke responses, audit compliance, and extract unstructured data on the fly.",
      badge: "Intelligent",
    },
    {
      index: "02",
      title: "Workflow Automation",
      description: "Connect your tech stack. We replace slow human handoffs with robust, multi-step triggers. Webhook integrations sync files, calculate margins, and prompt action items automatically.",
      badge: "High Efficiency",
    },
    {
      index: "03",
      title: "CRM Integration",
      description: "Synchronize your leads database, pipeline stages, client details, and transaction history. Eliminate manual copy-paste across HubSpot, Salesforce, Pipedrive, or Custom DBs.",
      badge: "Zero Loss",
    },
    {
      index: "04",
      title: "Lead Follow-up Systems",
      description: "Respond to inquiries in milliseconds. Our systems instantly qualify incoming leads via SMS/Email, send personalized pitch documents, and prompt booking reminders.",
      badge: "Speed-To-Lead",
    },
    {
      index: "05",
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
    <section id="services" className="relative py-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="glow-blob w-[500px] h-[500px] bg-green-600/5 bottom-[10%] right-[5%]" />
      <div className="glow-blob w-[300px] h-[300px] bg-slate-600/10 top-[10%] left-[5%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="h-px w-8 bg-green-500/50 block" />
            <p className="text-[10px] font-bold text-green-400 tracking-[0.25em] uppercase">Enterprise Offerings</p>
            <span className="h-px w-8 bg-green-500/50 block" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Custom Automation <span className="text-slate-500 font-light block">Built For Scaling.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light">
            We don't offer generic templates. We build custom-engineered AI models and robust integrations tailored exactly to your company's operational bottlenecks.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {services.map((service, index) => {
            const isLastItem = index === 4;
            return (
               <motion.div
                key={index}
                variants={cardVariants}
                className={`group cursor-none border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 p-8 flex flex-col justify-between transition-all duration-700 ${
                  isLastItem ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <span className="text-sm font-mono text-green-500/80 tracking-widest">
                      [ SYS - {service.index} ]
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-4 tracking-tight group-hover:text-green-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center text-[10px] uppercase font-bold tracking-widest text-slate-600 group-hover:text-green-500 transition-colors duration-500">
                  <span className="h-px w-0 group-hover:w-8 bg-green-500 transition-all duration-500 mr-0 group-hover:mr-3" />
                  <span>Explore Architecture</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
