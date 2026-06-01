"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2, Send, FileText } from "lucide-react";

interface RFQFormInputs {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  quantity: number;
  message: string;
}

const productOptions = [
  "PLC Systems & Controllers",
  "Inductive / Capacitive Sensors",
  "Photoelectric Sensors",
  "Temperature & Pressure Sensors",
  "Variable Frequency Drives (VFDs)",
  "Safety Relays & Modules",
  "Power Supplies (DIN Rail)",
  "HMI / Operator Panels",
  "I/O Modules & Communication Gateways",
  "Servo Drives & Motion Controllers",
  "Circuit Breakers & Contactors",
  "Industrial Cables & Connectors",
  "Complete Automation System",
  "Other / Not Listed",
];

export default function RFQForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dbStatus, setDbStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RFQFormInputs>();

  const onSubmit = async (data: RFQFormInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed.");
      setSubmitSuccess(true);
      setDbStatus(result.databaseStatus);
      reset();
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rfq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info panel */}
          <div className="lg:col-span-2">
            <div className="section-label mb-4">
              <FileText className="h-3 w-3" />
              Request for Quotation
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get a Competitive Quote
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Fill in your requirements and our technical team will respond with pricing, availability, lead times, and datasheet documentation within one business day.
            </p>

            <div className="space-y-5">
              {[
                { step: "01", title: "Submit your RFQ", desc: "Provide product details, quantity, and any technical notes." },
                { step: "02", title: "Technical review", desc: "Our engineers verify specs and identify alternatives if needed." },
                { step: "03", title: "Receive quotation", desc: "Detailed quote with pricing, lead time, and datasheet links." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 border border-blue-200 rounded text-blue-800 text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800">
              <strong>Need urgent assistance?</strong><br />
              Call us directly: <a href="tel:+18001234567" className="font-bold hover:underline">+1 (800) 123-4567</a>
              <br />Mon–Fri, 8AM–6PM
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-5">
                  <div className="inline-flex p-3 rounded-full bg-green-100 border border-green-200 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">RFQ Submitted Successfully</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Thank you. Our technical team will review your request and respond within one business day with pricing and availability.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-xs text-slate-600 space-y-2 max-w-sm mx-auto">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Inquiry logged
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Confirmation email dispatched
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                      Database:{" "}
                      {dbStatus === "offline_logged" ? (
                        <span className="text-amber-600 font-mono">simulated (DB offline)</span>
                      ) : (
                        <span className="text-green-600 font-mono">saved</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-sm text-blue-700 hover:underline font-medium"
                  >
                    Submit another request
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
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Contact Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="rfq-name"
                        type="text"
                        placeholder="John Smith"
                        {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name.message}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Company / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="rfq-company"
                        type="text"
                        placeholder="ACME Industrial Ltd."
                        {...register("company", { required: "Company is required", minLength: { value: 2, message: "Min 2 characters" } })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                      {errors.company && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="rfq-email"
                        type="email"
                        placeholder="john@company.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                        })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email.message}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="rfq-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        {...register("phone", { required: "Phone is required", minLength: { value: 7, message: "Min 7 digits" } })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Product Interest */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Product Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="rfq-product"
                        {...register("productInterest", { required: "Please select a product" })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                      >
                        <option value="">Select product category...</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.productInterest && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.productInterest.message}</p>}
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Quantity (Units) <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="rfq-quantity"
                        type="number"
                        min={1}
                        placeholder="e.g. 10"
                        {...register("quantity", {
                          required: "Quantity is required",
                          min: { value: 1, message: "Must be at least 1" },
                        })}
                        className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                      {errors.quantity && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.quantity.message}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Technical Requirements / Notes <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="rfq-message"
                      rows={4}
                      placeholder="Include part numbers, model references, voltage ratings, certifications required, or any other specifications..."
                      {...register("message", { required: "Please describe your requirements", minLength: { value: 5, message: "Min 5 characters" } })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y min-h-[100px]"
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 bg-blue-800 hover:bg-blue-700 disabled:bg-blue-800/60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-lg transition-colors"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Submitting RFQ...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Submit Request for Quotation</>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Your information is used solely to process your quotation request and is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
