"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";
import OrderButtons from "@/components/OrderButtons";
import { getTelLink, siteConfig } from "@/lib/site-config";

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

const productOptions = [
  "Automatic Sliding Gate",
  "Automatic Swing Gate",
  "Automatic Rolling Shutter",
  "Automatic Boom Barrier",
  "Automatic Garage Door",
  "Automatic Glass Door",
  "Motorized Curtains",
  "Home Automation",
  "Home Theater Automation",
  "Security Systems (CCTV / Alarm)",
  "Access Control System",
  "Centralized Vacuum Cleaner",
  "Fire Balls",
  "Gate Fabrication & Installation",
  "Other / General Enquiry",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed.");
      setSubmitSuccess(true);
      reset();
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 pt-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 font-sans">Reach Us Directly</h3>
              <ul className="space-y-8 text-slate-600">
                <li className="group border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-500">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase mb-2 block">Location</span>
                  <strong className="block text-slate-900 font-medium mb-1">Headquarters</strong>
                  <span className="font-light leading-relaxed text-sm block">{siteConfig.address.full}</span>
                </li>
                <li className="group border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-500">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase mb-2 block">Direct Line</span>
                  <strong className="block text-slate-900 font-medium mb-1">Phone & WhatsApp</strong>
                  <a href={getTelLink()} className="interactive font-light hover:text-green-700 transition-colors text-sm">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="group border-l border-slate-200 pl-6 hover:border-green-600 transition-colors duration-500">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-green-700 uppercase mb-2 block">Digital</span>
                  <strong className="block text-slate-900 font-medium mb-1">Email Support</strong>
                  <a href={`mailto:${siteConfig.email}`} className="interactive font-light hover:text-green-700 transition-colors text-sm">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-800 to-green-950 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="font-bold text-xl mb-3">Delivery Across {siteConfig.coverage}</h3>
              <p className="text-green-100/80 font-light leading-relaxed mb-6">
                Gate motors, boom barriers, rolling shutters, and smart home products delivered
                to Butwal, Pokhara, Biratnagar, and cities nationwide.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {siteConfig.businessHours}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="industrial-card bg-white p-8 sm:p-10"
          >
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex p-4 rounded-full bg-green-50 text-green-600 mb-2">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Enquiry Sent Successfully</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you. We will contact you shortly. For urgent orders, please call or WhatsApp us directly.
                </p>
                <div className="pt-4 flex flex-col items-center gap-4">
                  <OrderButtons className="justify-center" size="sm" />
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="interactive text-sm text-slate-400 hover:text-green-700 hover:underline transition-all"
                  >
                    Send another enquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-red-700 text-sm"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="pt-0.5">{submitError}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                      className="interactive w-full border-b-2 border-slate-200 px-0 py-3 text-slate-800 focus:outline-none focus:border-green-600 bg-transparent transition-colors placeholder:text-slate-300 font-light"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-2">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })}
                      className="interactive w-full border-b-2 border-slate-200 px-0 py-3 text-slate-800 focus:outline-none focus:border-green-600 bg-transparent transition-colors placeholder:text-slate-300 font-light"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-2">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      {...register("phone", { required: "Phone is required", minLength: { value: 7, message: "Min 7 digits" } })}
                      className="interactive w-full border-b-2 border-slate-200 px-0 py-3 text-slate-800 focus:outline-none focus:border-green-600 bg-transparent transition-colors placeholder:text-slate-300 font-light"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-2">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-product" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Product / Service <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                    <select
                      id="contact-product"
                      {...register("businessType", { required: "Please select a product" })}
                      className="interactive w-full border-b-2 border-slate-200 px-0 py-3 text-slate-800 focus:outline-none focus:border-green-600 bg-transparent transition-colors font-light appearance-none pr-8"
                    >
                      <option value="" disabled className="text-slate-300">Select product...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-slate-800">{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                    {errors.businessType && (
                      <p className="text-xs text-red-500 mt-2">{errors.businessType.message}</p>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Requirements & Location <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="E.g., I need a sliding gate motor for my home in Pokhara..."
                    {...register("message", { required: "Please describe your requirement", minLength: { value: 5, message: "Min 5 characters" } })}
                    className="interactive w-full border-b-2 border-slate-200 px-0 py-3 text-slate-800 focus:outline-none focus:border-green-600 bg-transparent transition-colors placeholder:text-slate-300 font-light resize-y"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-2">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="interactive w-full inline-flex items-center justify-center gap-3 py-4 px-8 bg-slate-900 hover:bg-green-700 disabled:bg-slate-400 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-700/20"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Transmitting...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Enquiry</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
