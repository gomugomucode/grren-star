import Image from "next/image";
import { Check } from "lucide-react";
import OrderButtons from "@/components/OrderButtons";

export default function Hero() {
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

          <div className="relative h-[330px] sm:h-[430px] lg:h-[500px] overflow-hidden rounded-2xl bg-slate-200">
            <Image
              src="/slidinggate.jpg"
              alt="Automatic sliding gate system"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5">
              <p className="font-semibold text-slate-900">Automatic sliding gate systems</p>
              <p className="text-sm text-slate-500 mt-1">For homes, businesses, and industrial entrances.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
