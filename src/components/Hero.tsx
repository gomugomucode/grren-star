"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OrderButtons from "@/components/OrderButtons";
import { siteConfig } from "@/lib/site-config";

const slides = [
  {
    id: 1,
    title: "Sliding Gate Automations",
    subtitle: `Quality sliding gate motors and kits — order across Nepal from ${siteConfig.name}`,
    gradient: "from-green-900 via-green-800 to-slate-900",
    accent: "bg-green-500/20 border-green-400/30",
  },
  {
    id: 2,
    title: "Swing Gate Automations",
    subtitle: "Make your gate smarter — call or WhatsApp Greenstar Suppliers for fast delivery in Nepal",
    gradient: "from-emerald-900 via-green-800 to-slate-900",
    accent: "bg-emerald-500/20 border-emerald-400/30",
  },
  {
    id: 3,
    title: "Garage Door Automations",
    subtitle: "Garage door motors and accessories supplied nationwide — easy ordering by phone or WhatsApp",
    gradient: "from-teal-900 via-green-800 to-slate-900",
    accent: "bg-teal-500/20 border-teal-400/30",
  },
  {
    id: 4,
    title: "Boom Barrier",
    subtitle: "Commercial boom barriers for parking and access control — available for order throughout Nepal",
    gradient: "from-green-950 via-green-900 to-slate-900",
    accent: "bg-lime-500/20 border-lime-400/30",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[540px] md:h-[600px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 hero-overlay" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div
              className={`inline-flex items-center gap-2 border text-green-100 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded mb-6 ${slide.accent}`}
            >
              Nepal-wide supply · Call or WhatsApp to order
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5">
              {slide.title}
            </h1>

            <p className="text-lg text-green-100/90 leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            <OrderButtons size="lg" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next slide"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
