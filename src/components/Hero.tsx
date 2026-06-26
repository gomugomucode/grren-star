"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import OrderButtons from "@/components/OrderButtons";

const facilities = [
  {
    image: "/Automatic Glass Doors.jpg",
    title: "Automatic sliding glass doors",
    description: "Clean, sensor-operated access for commercial spaces.",
  },
  {
    image: "/slidinggate.jpg",
    title: "Automatic sliding gates",
    description: "Secure access for homes, businesses, and industrial sites.",
  },
  {
    image: "/boom Barrier.jpg",
    title: "Automatic boom barriers",
    description: "Reliable vehicle control for parking and entry points.",
  },
  {
    image: "/Garage Door.jpg",
    title: "Automatic garage doors",
    description: "Quiet, convenient access with remote operation.",
  },
  {
    image: "/automaticrollingshutter.jpg",
    title: "Automatic rolling shutters",
    description: "Strong everyday protection for shops and warehouses.",
  },
];

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.2,
      ease: "easeOut"
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % facilities.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [current]);

  const showPrevious = () => setCurrent((index) => (index - 1 + facilities.length) % facilities.length);
  const showNext = () => setCurrent((index) => (index + 1) % facilities.length);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-noise bg-[#fdfdfd] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 hidden lg:block -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
          
          <motion.div 
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs font-semibold text-slate-800 tracking-widest uppercase">
                Premium Automation in Nepal
              </p>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Access <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Perfected.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-xl mb-8 sm:mb-10 font-light">
              Elevate your spaces with state-of-the-art gate motors, boom barriers, and smart home systems. Local expertise, world-class precision.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600 mb-10">
              {["Nationwide Supply", "Expert Consultation", "Precision Installation"].map((item) => (
                <span key={item} className="flex items-center gap-2 font-medium">
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <OrderButtons size="lg" className="interactive" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative h-[320px] sm:h-[450px] lg:h-[650px] w-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={facilities[current].image}
                  alt={facilities[current].title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

            <div className="absolute top-6 right-6 flex gap-3">
              <button
                type="button"
                onClick={showPrevious}
                className="interactive grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all hover:bg-white hover:text-slate-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="interactive grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all hover:bg-white hover:text-slate-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{facilities[current].title}</h3>
                    <p className="text-sm text-slate-300 font-light">{facilities[current].description}</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    {facilities.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`interactive h-1.5 rounded-full transition-all duration-500 ${
                          index === current ? "w-8 bg-green-500" : "w-2 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
