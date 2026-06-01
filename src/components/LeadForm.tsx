"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

interface LeadFormInputs {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [dbStatus, setDbStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    },
  });

  const onSubmit = async (data: LeadFormInputs) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setDbStatus(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit lead inquiry.");
      }

      setSubmitSuccess(true);
      setDbStatus(result.databaseStatus);
      reset();
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="relative py-24 overflow-hidden">
      {/* Glow effect */}
      <div className="glow-blob w-[500px] h-[500px] bg-indigo-600/10 top-[20%] left-[-10%]" />
      <div className="glow-blob w-[550px] h-[550px] bg-purple-600/10 bottom-[20%] right-[-10%]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Book Your Free Systems Audit
          </h2>
          <p className="text-base text-gray-400">
            Tell us about your operational friction. We'll analyze your input and compile a custom automation diagram and ROI assessment for your business.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card p-6 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl relative">
          
          {submitSuccess ? (
            /* Success State */
            <div className="text-center py-10 space-y-6">
              <div className="inline-flex p-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 mb-2">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
              <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
                Thank you! Our system has queued your bottleneck details. We will automatically generate your free systems roadmap and send the calendar link.
              </p>
              
              <div className="bg-gray-950/70 p-6 rounded-2xl border border-gray-900 text-left max-w-lg mx-auto space-y-4">
                <h4 className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">
                  ⚡ Next Automation Steps:
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-bold">✔</span>
                    <span>Admin email notification dispatched</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400 font-bold">✔</span>
                    <span>
                      Database entry logged 
                      {dbStatus === "offline_logged" ? (
                        <span className="text-yellow-500 ml-1.5 font-mono text-[10px]">(Simulated connection)</span>
                      ) : (
                        <span className="text-green-500 ml-1.5 font-mono text-[10px]">(PostgreSQL storage active)</span>
                      )}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="animate-pulse text-indigo-400 font-bold">•</span>
                    <span>Generating customized strategy proposal PDF (approx. 5 mins)</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-8 text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {submitError && (
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                    })}
                    className="w-full bg-gray-950/70 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 flex items-center mt-1">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className="w-full bg-gray-950/70 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 flex items-center mt-1">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: { value: 7, message: "Phone number must be at least 7 characters" },
                    })}
                    className="w-full bg-gray-950/70 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 flex items-center mt-1">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label htmlFor="businessType" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Industry / Business Type
                  </label>
                  <select
                    id="businessType"
                    {...register("businessType", { required: "Please select an industry" })}
                    className="w-full bg-gray-950/70 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-gray-950">Select Industry...</option>
                    <option value="Ecommerce" className="bg-gray-950">E-commerce / Retail</option>
                    <option value="SaaS / Technology" className="bg-gray-950">SaaS / Technology</option>
                    <option value="Real Estate" className="bg-gray-950">Real Estate / Construction</option>
                    <option value="Professional Services" className="bg-gray-950">Professional Services / Agency</option>
                    <option value="Healthcare" className="bg-gray-950">Healthcare / Medical</option>
                    <option value="Manufacturing" className="bg-gray-950">Manufacturing / Logistics</option>
                    <option value="Other" className="bg-gray-950">Other / Miscellaneous</option>
                  </select>
                  {errors.businessType && (
                    <p className="text-xs text-red-400 flex items-center mt-1">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" />
                      {errors.businessType.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message (Biggest Bottleneck) */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                  What is your biggest manual bottleneck?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Example: We waste 3 hours a day copying lead info from our landing page to our CRM and writing copy-paste response emails manually..."
                  {...register("message", {
                    required: "Please describe your bottleneck",
                    minLength: { value: 5, message: "Bottleneck description must be at least 5 characters" },
                  })}
                  className="w-full bg-gray-950/70 border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-y min-h-[100px]"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 flex items-center mt-1">
                    <AlertCircle className="h-3.5 w-3.5 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-500/20 group hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2.5 h-5 w-5 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send className="mr-2.5 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Submit Audit Request
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
