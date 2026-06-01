"use client";

import { motion } from "framer-motion";
import { Check, Info, ShieldAlert } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      subTitle: "Best for growing businesses setting up their first automated funnel.",
      setupFee: "$1,499",
      monthlyFee: "$299",
      features: [
        "1 Custom CRM Integration (HubSpot / Salesforce)",
        "Standard Multi-Step Inbound Webhooks",
        "Lead capture form qualification logic",
        "Standard Email auto-responder dispatch",
        "Weekly email analytics reports",
        "5 business days support response",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Growth",
      subTitle: "For businesses wanting active AI agents and rapid follow-ups.",
      setupFee: "$2,999",
      monthlyFee: "$599",
      features: [
        "Everything in Starter package",
        "AI Qualification Engine (LLM assessments)",
        "Website chatbot OR custom WhatsApp agent",
        "Multi-tool connection (up to 5 platforms)",
        "Instant SMS dispatch & scheduling links",
        "Automated PDF document draft creator",
        "48hr SLA developer support",
      ],
      cta: "Scale Now",
      featured: true,
    },
    {
      name: "Enterprise",
      subTitle: "For departments requiring custom fine-tuning and audit assurance.",
      setupFee: "Custom",
      monthlyFee: "Custom",
      features: [
        "Bespoke model fine-tuning & vector DBs",
        "Unlimited software integrations & webhooks",
        "Multi-department systems audit & diagramming",
        "Dedicated automation engineer allocation",
        "Monthly security & vulnerability compliance checks",
        "Priority 4hr SLA response support",
      ],
      cta: "Schedule Consultation",
      featured: false,
    },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-gray-950/40 border-y border-gray-900 overflow-hidden">
      {/* Glow effect */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-600/5 top-[-100px] left-[-100px]" />
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/5 bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Info className="h-3.5 w-3.5" />
            <span>Investment Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Transparent Pricing Built For Growth
          </h2>
          <p className="text-lg text-gray-400">
            We align our goals with yours. A straightforward, one-time construction setup fee followed by a monthly support fee to handle maintenance and optimization.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`rounded-2xl relative flex flex-col justify-between overflow-hidden ${
                tier.featured
                  ? "bg-gray-900/90 border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 p-8 lg:-translate-y-4 z-10"
                  : "bg-gray-900/40 border border-gray-800/80 p-8"
              }`}
            >
              {/* Featured Ribbon / Badge */}
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 h-12">{tier.subTitle}</p>
                
                {/* Cost Block */}
                <div className="space-y-2 mb-8 border-b border-gray-800/50 pb-6">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{tier.setupFee}</span>
                    {tier.setupFee !== "Custom" && <span className="text-xs text-gray-400">setup cost (one-time)</span>}
                  </div>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-2xl font-bold text-indigo-400 tracking-tight">{tier.monthlyFee}</span>
                    {tier.monthlyFee !== "Custom" && <span className="text-xs text-gray-400">/mo maintenance support</span>}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3 text-sm">
                      <div className="p-0.5 rounded-full bg-indigo-500/10 text-indigo-400 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-gray-300 leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#audit-form"
                  onClick={(e) => handleScrollTo(e, "#audit-form")}
                  className={`block w-full text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    tier.featured
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02]"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-200 hover:scale-[1.02]"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-center text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <ShieldAlert className="w-4 h-4 text-indigo-400" />
            <span>All systems are subject to custom configuration audits.</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Need custom SLA contracts? Contact us for specialized enterprise quotes.</span>
        </div>

      </div>
    </section>
  );
}
