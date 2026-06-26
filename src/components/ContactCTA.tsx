import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-slate-50 border-t border-slate-200 relative overflow-hidden group">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      
      <div className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-green-700 uppercase mb-8 block border-l-2 border-green-600 pl-4">
                Next Steps
              </span>
              <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold tracking-tighter text-slate-900 leading-[0.85]">
                Initiate<br/>
                Deployment.
              </h2>
            </div>
            
            <div className="flex items-center gap-6 pb-2 lg:pb-6">
              <span className="text-xl sm:text-2xl font-light text-slate-500">
                Contact Engineering Team
              </span>
              <Link href="/contact" className="interactive w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center hover:bg-green-700 hover:border-green-700 hover:text-white transition-all duration-700 transform hover:scale-110 group/btn">
                <ArrowUpRight className="w-8 h-8 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

