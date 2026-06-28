"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products({ limit }: { limit?: number }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const wrappers = gsap.utils.toArray<HTMLElement>(".parallax-wrapper");
    wrappers.forEach((wrapper) => {
      gsap.to(wrapper, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, { scope: sectionRef });

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section ref={sectionRef} id="products" className="py-24 lg:py-32 bg-white relative">
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-green-600 block" />
            <p className="text-xs font-bold text-green-700 tracking-[0.2em] uppercase">Our Products</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Automation <span className="text-slate-400 font-light">made practical.</span>
          </h2>
          <p className="text-lg text-slate-500 mt-6 font-light max-w-xl">
            Choose a product to discover how our high-performance systems integrate seamlessly into your environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <article 
              key={product.title} 
              className="group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end isolate shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-[-40px] left-0 w-full h-[calc(100%+80px)] parallax-wrapper z-[-2]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Overlays for better contrast */}
              <div className="absolute inset-0 z-[-1] bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors duration-500" />
              <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glassmorphism content block */}
              <div className="m-4 sm:m-5 p-6 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <h3 className="text-xl font-bold text-white mb-1 relative z-10">{product.title}</h3>
                
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <Link
                  href={`/products/${product.slug}`}
                  className="interactive mt-2 inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group/link relative z-10"
                >
                  Explore System
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {limit && products.length > limit && (
          <div className="mt-16 flex justify-center">
            <Link 
              href="/products" 
              className="interactive inline-flex items-center gap-3 py-4 px-8 bg-slate-900 hover:bg-green-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-700/20"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
