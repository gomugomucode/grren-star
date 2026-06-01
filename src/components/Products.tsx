"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  DoorOpen,
  Warehouse,
  Shield,
  Car,
  PanelTop,
  Blinds,
  Home,
  Tv,
  Camera,
  KeyRound,
  Lock,
  Bell,
  Wind,
  Flame,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    icon: ArrowLeftRight,
    title: "Automatic Sliding Gate",
    description:
      "Sliding gates are ideal where there is insufficient room for swing gates and higher security is required. Cantilever sliding gates run smoothly on nylon wheels, making them surprisingly quiet even on uneven ground.",
    featured: true,
  },
  {
    icon: DoorOpen,
    title: "Automatic Swing Gate",
    description:
      "Broad array of swing gates manufactured with optimum grade raw material and cutting-edge techniques. Available in various designs and patterns, operated via remote, WiFi, or push button with DITEC Italian motors.",
    featured: true,
  },
  {
    icon: Warehouse,
    title: "Automatic Rolling Shutters",
    description:
      "Motorized rolling shutters with hard assembly from sturdy metals in slate and guide profiles. Acts as a shield against theft, damage, and hurricanes with reliable daily operation.",
  },
  {
    icon: Shield,
    title: "Automatic Boom Barriers",
    description:
      "Ideal for smooth operations with intensive use. Reliable mechanism with inbuilt anti-crush safety device that suspends boom motion upon obstruction — for industrial, commercial, and residential use.",
    featured: true,
  },
  {
    icon: Car,
    title: "Automatic Garage Doors",
    description:
      "Made from superior quality raw materials for durability and aesthetic value. Customizable with branded motor drives and remote control for consistent, trouble-free operation.",
    featured: true,
  },
  {
    icon: PanelTop,
    title: "Automatic Glass Doors",
    description:
      "Diverse design options for interior and exterior needs in commercial and residential projects — ACP, structural glazing, façade spider glazing with toughened or laminated glasses.",
  },
  {
    icon: Blinds,
    title: "Motorized Curtains",
    description:
      "Add distinction to any living space, great for home theaters. Compatible with every fabric from blackout to light-filtering sheer curtains for convenience and luxury.",
  },
  {
    icon: Home,
    title: "Home Automations",
    description:
      "Smart home systems controlling lighting, climate, entertainment, and appliances. Includes access control and alarm systems — a key part of the Internet of Things.",
  },
  {
    icon: Tv,
    title: "Home Theater Automations",
    description:
      "Professional custom systems integrator for residential and commercial applications. State-of-the-art electronics with complimentary on-site consultation.",
  },
  {
    icon: Camera,
    title: "Security Systems",
    description:
      "Complete solutions including CCTV, access control, fire alarm, and burglar alarm systems. Your home and business monitored 24×7 by professional monitoring experts.",
  },
  {
    icon: KeyRound,
    title: "Access Controlled Entrance",
    description:
      "Access control systems for entry/exit points — locks and unlocks doors for authorized users with RFID, remote, sensor, and push-button control options.",
  },
  {
    icon: Lock,
    title: "Access Control System",
    description:
      "Selective restriction of access to places and resources. Permission to access a resource is called authorization — integrated with entrance automation solutions.",
  },
  {
    icon: Bell,
    title: "Burglar Alarm System",
    description:
      "Electronic alarm systems with three components designed to detect, determine, and deter criminal activity — invasion, fire, gas leak, or environmental changes.",
  },
  {
    icon: Wind,
    title: "Centralized Vacuum Cleaner",
    description:
      "Semi-permanent fixture installed into buildings. Removes dirt through tubing inside walls to a remote collection container in a utility space.",
  },
  {
    icon: Flame,
    title: "Fire Balls",
    description:
      "Ball-shaped fire extinguisher thrown into fire — activates within 3 seconds and disperses extinguishing chemicals. Self-activates when in contact with fire as an alarm.",
  },
];

export default function Products() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label mb-3 mx-auto w-fit">
            <Package className="h-3 w-3" />
            Our Products
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Entrance &amp; Home Automation Solutions</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            From automatic gates and boom barriers to complete smart home and security systems —
            we design, supply, and install across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className={`industrial-card p-6 flex flex-col gap-4 ${
                  product.featured ? "ring-1 ring-green-200" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  {product.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-800 rounded">
                      Popular
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{product.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{product.description}</p>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="mt-auto text-sm font-semibold text-green-700 hover:text-green-900 transition-colors"
                >
                  Get a quote →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
