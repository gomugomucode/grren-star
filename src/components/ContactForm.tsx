"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2, Send, Phone, MapPin, Mail } from "lucide-react";
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
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-label mb-3 mx-auto w-fit">Order &amp; Enquiry</div>
          <h2 className="text-3xl font-bold text-slate-900">Get in Touch With Us</h2>
          <p className="text-slate-500 mt-3 text-sm">
            For the fastest response, call or WhatsApp to order. You can also submit the form
            below and we will reply with pricing and delivery details for your location in Nepal.
          </p>
          <div className="mt-6 flex justify-center">
            <OrderButtons />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="industrial-card p-6">
              <h3 className="font-bold text-slate-800 mb-4">Reach Us</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.address.full}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="h-5 w-5 text-green-700 flex-shrink-0" />
                  <a href={getTelLink()} className="hover:text-green-700 font-semibold">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="h-5 w-5 text-green-700 flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-green-700">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-green-700 text-white rounded-lg p-6">
              <h3 className="font-bold mb-2">Delivery Across {siteConfig.coverage}</h3>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Gate motors, boom barriers, rolling shutters, and smart home products delivered
                to Kathmandu, Pokhara, Biratnagar, and cities nationwide.
              </p>
              <p className="text-green-100 text-xs">{siteConfig.businessHours}</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-green-100 border border-green-200 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquiry Sent Successfully</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you. We will contact you shortly. For urgent orders, call or WhatsApp us directly.
                  </p>
                  <OrderButtons className="justify-center" size="sm" />
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="block mx-auto text-sm text-green-700 hover:underline font-medium"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {submitError && (
                    <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                        })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        {...register("phone", { required: "Phone is required", minLength: { value: 7, message: "Min 7 digits" } })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Product / Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("businessType", { required: "Please select a product" })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white"
                      >
                        <option value="">Select product...</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="text-xs text-red-500 mt-1">{errors.businessType.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Delivery City &amp; Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="City in Nepal, product details, quantity, installation needs, etc."
                      {...register("message", { required: "Please describe your requirement", minLength: { value: 5, message: "Min 5 characters" } })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-white resize-y min-h-[100px]"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-green-700 hover:bg-green-800 disabled:bg-green-700/60 text-white font-semibold text-sm rounded-lg transition-colors"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Submit Enquiry</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
