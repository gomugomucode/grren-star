import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function MapSection() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-400">Our location</p>
          <h3 className="text-lg font-semibold text-white mt-1">{siteConfig.address.full}</h3>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Butwal%2C%20Nepal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <MapPin className="h-4 w-4 text-green-400" />
          Open map
        </a>
      </div>
      <div className="h-64 lg:h-72 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
        <iframe
          title="Greenstar Suppliers location in Butwal, Nepal"
          src="https://maps.google.com/maps?q=Butwal,Nepal&z=14&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
        />
      </div>
    </div>
  );
}
