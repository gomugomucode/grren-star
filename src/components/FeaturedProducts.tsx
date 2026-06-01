"use client";

import { motion } from "framer-motion";
import { Package, Tag, ArrowRight, ShoppingCart } from "lucide-react";

const products = [
  {
    sku: "AX-PLC-400",
    name: "AX-400 Modular PLC System",
    category: "PLC Systems",
    specs: "24VDC · 16 DI / 16 DO · Ethernet/IP · IEC 61131-3",
    description: "Compact modular controller for discrete manufacturing applications. Expandable up to 256 I/O points.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "SEN-IND-075",
    name: "IB5075 Inductive Proximity Sensor",
    category: "Sensors",
    specs: "M12 · 4mm range · PNP NO · IP67 rated",
    description: "Flush-mount cylindrical inductive sensor for metal detection in harsh industrial environments.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "PSU-DIN-24V",
    name: "QUINT-PS 24VDC Power Supply",
    category: "Power Systems",
    specs: "24VDC · 20A · DIN Rail · SFB technology",
    description: "Primary-switched power supply with selective fuse breaking and preventive maintenance indicator.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "VFD-PF525",
    name: "PowerFlex 525 AC Drive",
    category: "Automation Modules",
    specs: "0.4–22kW · 200–240V / 380–480V · EtherNet/IP",
    description: "Compact variable frequency drive with embedded EtherNet/IP and safety features for motor control.",
    tag: "Lead Time: 5 Days",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    sku: "REL-SAF-S3",
    name: "PNOZ s3 Safety Relay",
    category: "Industrial Electronics",
    specs: "24VDC · E-stop category 3 · 3 N/O + 1 N/C",
    description: "Safety relay module for E-stop buttons, safety gates, and two-hand controls. TÜV certified.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "HMI-PV800",
    name: "PanelView 800 HMI Terminal",
    category: "PLC Systems",
    specs: "7\" TFT · 800×480 · RS232/RS422 · IP65",
    description: "Operator interface terminal with full color display, multiple communication ports and USB connectivity.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "CAP-SEN-C08",
    name: "Capacitive Level Sensor C08",
    category: "Sensors",
    specs: "8mm range · M30 · 10–30VDC · NPN/PNP",
    description: "Detects both metallic and non-metallic objects including liquids, granulates, and powders.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    sku: "MCB-3P-32A",
    name: "MCB 3-Pole 32A Circuit Breaker",
    category: "Industrial Electronics",
    specs: "32A · 3-pole · 400VAC · 10kA Icu · DIN rail",
    description: "Miniature circuit breaker for motor and distribution board protection in industrial panels.",
    tag: "In Stock",
    tagColor: "bg-green-100 text-green-700",
  },
];

// Simple SVG icon for product placeholder image
function ProductImagePlaceholder({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "PLC Systems": "#dbeafe",
    "Sensors": "#d1fae5",
    "Power Systems": "#ede9fe",
    "Automation Modules": "#fef3c7",
    "Industrial Electronics": "#fee2e2",
  };
  const bg = colors[category] || "#f1f5f9";

  return (
    <div
      className="product-img-placeholder h-44 w-full"
      style={{ background: bg }}
    >
      <div className="flex flex-col items-center gap-2 opacity-40">
        <Package className="h-12 w-12 text-slate-500" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{category}</span>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <div className="section-label mb-3">
            <Tag className="h-3 w-3" />
            Featured Products
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Popular Items</h2>
              <p className="text-slate-500 mt-2 text-sm">
                Stocked and ready to ship. All products carry manufacturer warranties and full technical documentation.
              </p>
            </div>
            <a
              href="#rfq"
              onClick={(e) => handleScrollTo(e, "#rfq")}
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap"
            >
              Request bulk pricing <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.sku}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="industrial-card flex flex-col overflow-hidden"
            >
              <ProductImagePlaceholder category={product.category} />

              <div className="p-4 flex flex-col flex-1 gap-2">
                {/* SKU & tag row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-slate-400">{product.sku}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-slate-800 text-sm leading-snug">{product.name}</h3>

                {/* Specs */}
                <p className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-100">
                  {product.specs}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{product.description}</p>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex gap-2 mt-auto">
                  <a
                    href="#rfq"
                    onClick={(e) => handleScrollTo(e, "#rfq")}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Get Quote
                  </a>
                  <button className="px-3 py-2 text-xs font-semibold text-blue-700 border border-blue-200 hover:bg-blue-50 rounded transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
