import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";

const products = [
  {
    image: "/slidinggate.jpg",
    title: "Automatic Sliding Gate",
    description: "Smooth, secure operation for residential and industrial gates.",
  },
  {
    image: "/Swing Gate.jpg",
    title: "Automatic Swing Gate",
    description: "Remote, WiFi, and push-button options for new or existing gates.",
  },
  {
    image: "/automaticrollingshutter.jpg",
    title: "Automatic Rolling Shutters",
    description: "Durable motorized shutters for shops, garages, and warehouses.",
  },
  {
    image: "/boom Barrier.jpg",
    title: "Automatic Boom Barriers",
    description: "Vehicle access control for parking and commercial entrances.",
  },
  {
    image: "/Garage Door.jpg",
    title: "Automatic Garage Doors",
    description: "Quiet, dependable garage access with remote control.",
  },
  {
    image: "/Automatic Glass Doors.jpg",
    title: "Automatic Glass Doors",
    description: "Sensor-operated doors for retail, offices, and public spaces.",
  },
  {
    image: "/Motorized Curtains.jpg",
    title: "Motorized Curtains",
    description: "Convenient control for blackout, sheer, and theater curtains.",
  },
  {
    image: "/Security Systems.jpg",
    title: "Security Systems",
    description: "CCTV, alarms, and monitoring for homes and businesses.",
  },
  {
    image: "/Access Controlled Entrance.jpg",
    title: "Access Control",
    description: "RFID, remote, sensor, and push-button entry systems.",
  },
  {
    image: "/Burglar Alarm System.jpg",
    title: "Burglar Alarm Systems",
    description: "Early warning systems for intrusion and property protection.",
  },
  {
    image: "/centeralized vaccumnm cleaner.jpg",
    title: "Centralized Vacuum",
    description: "Built-in cleaning systems for homes and commercial buildings.",
  },
  {
    image: "/Fire Balls.jpg",
    title: "Fire Balls",
    description: "Fast-activating fire suppression for added protection.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-green-700 mb-3">Products</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
            Automation made practical.
          </h2>
          <p className="text-slate-500 mt-3">
            Choose a product to ask about price, availability, and installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
          {products.map((product) => (
            <article key={product.title} className="group flex flex-col">
              <div className="relative w-full h-52 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{product.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{product.description}</p>
                </div>
                <a
                  href={getWhatsAppLink(
                    `Hello ${siteConfig.name}, I am interested in ${product.title}. Please share price and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about ${product.title}`}
                  className="shrink-0 p-2 rounded-full border border-slate-200 text-slate-500 hover:border-green-700 hover:text-green-700 transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
