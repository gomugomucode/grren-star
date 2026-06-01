"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, GitMerge, Skull } from "lucide-react";

export default function Problem() {
  const painPoints = [
    {
      icon: Clock,
      title: "Response Latency Leakage",
      subtitle: "The Speed-to-Lead Problem",
      description: "Studies show response rates drop by 10x if you wait more than 5 minutes to follow up. By responding hours or days later, you are handing warm prospects directly to competitors.",
      metric: "55%",
      metricDesc: "of deals go to the first vendor to respond",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      icon: GitMerge,
      title: "Siloed Software Chaos",
      subtitle: "The Scattered Tool Problem",
      description: "Your CRM doesn't talk to your email, your calendar is separate, and database inputs are copied by hand. This copy-paste workflow causes massive user-error rates and critical lead drops.",
      metric: "15-20%",
      metricDesc: "of customer data gets lost in copy-pasting",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400",
    },
    {
      icon: Skull,
      title: "Human Resource Drain",
      subtitle: "The Manual Follow-up Problem",
      description: "Your highly paid account managers and specialists are wasting 60%+ of their day sending routine appointment reminders and template updates instead of focusing on actual high-leverage closing activities.",
      metric: "68%",
      metricDesc: "of sales time is wasted on non-selling activities",
      color: "from-rose-500/20 to-red-600/20",
      borderColor: "border-rose-500/30",
      iconColor: "text-rose-400",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="problem" className="relative py-24 bg-gray-950/40 border-y border-gray-900 overflow-hidden">
      {/* Decorative Blur */}
      <div className="glow-blob w-[400px] h-[400px] bg-red-600/10 top-[20%] left-[10%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Revenue Leakage Warning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Where is Your Business Losing Money Every Day?
          </h2>
          <p className="text-lg text-gray-400">
            Most businesses don't have a traffic or offer problem—they have a systems bottleneck. Manual inefficiencies and delayed operations are actively draining your margin.
          </p>
        </div>

        {/* Pain Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {painPoints.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`glass-card p-8 rounded-2xl relative border ${item.borderColor} overflow-hidden`}
              >
                {/* Background Gradient Pill */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-gradient-to-br ${item.color} -z-10 blur-xl opacity-80`} />

                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gray-900/80 border border-gray-800 ${item.iconColor}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-white">{item.metric}</span>
                    <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">{item.metricDesc}</span>
                  </div>
                </div>

                <h3 className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase mb-1">
                  {item.subtitle}
                </h3>
                <h4 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Crucial conversion nudge below cards */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gray-900/60 border border-gray-800/80 max-w-2xl">
            <p className="text-sm sm:text-base text-gray-300">
              📌 **The Cost of Inaction:** Leaving these leaks unpatched costs companies an average of **$140k+ per year** in lost contracts and wasted labor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
