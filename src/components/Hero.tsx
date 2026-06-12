"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
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

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % facilities.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setCurrent((index) => (index - 1 + facilities.length) % facilities.length);
  };

  const showNext = () => {
    setCurrent((index) => (index + 1) % facilities.length);
  };

  return (
    <section className="bg-[#f4f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-green-700 mb-4">
              Entrance and home automation in Nepal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-slate-950 leading-[1.05]">
              Reliable automation for safer, easier access.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Gate motors, boom barriers, rolling shutters, garage doors, and smart home systems with local support.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              {["Nationwide supply", "Product guidance", "Installation support"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-700" />
                  {item}
                </span>
              ))}
            </div>
            <OrderButtons size="lg" className="mt-8" />
          </div>

          <div className="relative h-[350px] sm:h-[440px] lg:h-[520px] overflow-hidden rounded-2xl bg-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            {facilities.map((facility, index) => (
              <Image
                key={facility.image}
                src={facility.image}
                alt={facility.title}
                fill
                priority={index === 0}
                className={`object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous facility"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next facility"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="font-semibold text-slate-900">{facilities[current].title}</p>
                  <p className="text-sm text-slate-500 mt-1">{facilities[current].description}</p>
                </div>
                <div className="hidden sm:flex gap-1.5 pb-1">
                  {facilities.map((facility, index) => (
                    <button
                      key={facility.image}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Show ${facility.title}`}
                      className={`h-1.5 rounded-full transition-all ${
                        index === current ? "w-6 bg-green-700" : "w-1.5 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
