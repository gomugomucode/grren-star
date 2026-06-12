import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function AboutSection() {
  const points = [
    "Help choosing the right system",
    "Support before and after purchase",
    "Solutions for new and existing sites",
    "Delivery throughout Nepal",
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-[#f4f7f4] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <p className="text-sm font-semibold text-green-700 mb-3">Why Greenstar</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
              Straightforward advice. Dependable products.
            </h2>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed">
              Based in {siteConfig.address.city}, we supply entrance and home automation for residential,
              commercial, and industrial projects across Nepal.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              {points.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
