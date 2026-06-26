import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-slate-50 border-t border-slate-200 relative overflow-hidden group">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      
      <div className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-green-700 uppercase mb-6 sm:mb-8 block border-l-2 border-green-600 pl-4">
                Next Steps
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-[7rem] font-bold tracking-tighter text-slate-900 leading-[0.85]">
                Initialize<br/>
                Project.
              </h2>
            </div>
            
            <Link 
              href="/contact" 
              className="interactive flex items-center gap-4 sm:gap-6 pb-2 lg:pb-6 group/btn"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-light text-slate-500 group-hover/btn:text-slate-900 transition-colors">
                Contact Engineering Team
              </span>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-slate-300 flex items-center justify-center group-hover/btn:bg-green-700 group-hover/btn:border-green-700 group-hover/btn:text-white transition-all duration-700 transform group-hover/btn:scale-110 shrink-0">
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

