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

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProducts.map((product) => (
            <motion.article 
              variants={itemVariant}
              key={product.title} 
              className="group flex flex-col industrial-card overflow-hidden"
            >
              <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden bg-slate-50">
                <div className="absolute top-[-40px] left-0 w-full h-[calc(100%+80px)] parallax-wrapper">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-[1.2s]" />
                </div>
              </div>
              <div className="p-5 sm:p-8 flex flex-1 flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light">{product.description}</p>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="interactive mt-8 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-800 transition-colors group/link"
                >
                  Explore System
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
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
