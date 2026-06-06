"use client";

import { motion } from "framer-motion";
import { Package, Phone, MessageCircle } from "lucide-react";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

const productImages: Record<string, { title: string; description: string; featured?: boolean }> = {
  "slidinggate.jpg": {
    title: "Automatic Sliding Gate",
    description: "Sliding gates are ideal where there is insufficient room for swing gates and higher security is required. Cantilever sliding gates run smoothly on nylon wheels, making them surprisingly quiet even on uneven ground.",
    featured: true,
  },
  "Swing Gate.jpg": {
    title: "Automatic Swing Gate",
    description: "Broad array of swing gates manufactured with optimum grade raw material and cutting-edge techniques. Available in various designs and patterns, operated via remote, WiFi, or push button with DITEC Italian motors.",
    featured: true,
  },
  "automaticrollingshutter.jpg": {
    title: "Automatic Rolling Shutters",
    description: "Motorized rolling shutters with hard assembly from sturdy metals in slate and guide profiles. Acts as a shield against theft, damage, and hurricanes with reliable daily operation.",
  },
  "boom Barrier.jpg": {
    title: "Automatic Boom Barriers",
    description: "Ideal for smooth operations with intensive use. Reliable mechanism with inbuilt anti-crush safety device that suspends boom motion upon obstruction — for industrial, commercial, and residential use.",
    featured: true,
  },
  "Garage Door.jpg": {
    title: "Automatic Garage Doors",
    description: "Made from superior quality raw materials for durability and aesthetic value. Customizable with branded motor drives and remote control for consistent, trouble-free operation.",
    featured: true,
  },
  "Automatic Glass Doors.jpg": {
    title: "Automatic Sliding Glass Door",
    description: "Diverse design options for interior and exterior needs in commercial and residential projects — ACP, structural glazing, façade spider glazing with toughened or laminated glasses.",
  },
  "Motorized Curtains.jpg": {
    title: "Motorized Curtains",
    description: "Add distinction to any living space, great for home theaters. Compatible with every fabric from blackout to light-filtering sheer curtains for convenience and luxury.",
  },
  "Security Systems.jpg": {
    title: "Security Systems",
    description: "Complete solutions including CCTV, access control, fire alarm, and burglar alarm systems. Your home and business monitored 24×7 by professional monitoring experts.",
  },
  "Access Controlled Entrance.jpg": {
    title: "Access Controlled Entrance",
    description: "Access control systems for entry/exit points — locks and unlocks doors for authorized users with RFID, remote, sensor, and push-button control options.",
  },
  "Burglar Alarm System.jpg": {
    title: "Burglar Alarm System",
    description: "Electronic alarm systems with three components designed to detect, determine, and deter criminal activity — invasion, fire, gas leak, or environmental changes.",
  },
  "centeralized vaccumnm cleaner.jpg": {
    title: "Centralized Vacuum Cleaner",
    description: "Semi-permanent fixture installed into buildings. Removes dirt through tubing inside walls to a remote collection container in a utility space.",
  },
  "Fire Balls.jpg": {
    title: "Fire Balls",
    description: "Ball-shaped fire extinguisher thrown into fire — activates within 3 seconds and disperses extinguishing chemicals. Self-activates when in contact with fire as an alarm.",
  },
};

const products = Object.entries(productImages).map(([imageName, data]) => ({
  ...data,
  image: `/${imageName}`,
  imageName,
}));

export default function Products() {
  return (
    <section id="products" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">
            <Package className="h-3 w-3" />
            Our Products
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Entrance &amp; Home Automation Supplies</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Gate motors, boom barriers, rolling shutters, and smart home systems — supplied across{" "}
            {siteConfig.coverage.toLowerCase()}. Call or WhatsApp to order any product below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            return (
              <motion.article
                key={product.imageName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className={`industrial-card p-0 flex flex-col gap-0 overflow-hidden ${
                  product.featured ? "ring-1 ring-green-200" : ""
                }`}
              >
                {product.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                    <img
                      src={product.image}
                      alt={product.imageName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {product.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-800 rounded mb-2">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base mb-2">{product.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="mt-auto flex gap-2 pt-2">
                    <a
                      href={getTelLink()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-green-800 border border-green-300 hover:bg-green-50 rounded transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Call
                    </a>
                    <a
                      href={getWhatsAppLink(
                        `Hello ${siteConfig.name}, I want to order: ${product.title}. Please share price and delivery details for Nepal.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1fb855] rounded transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
