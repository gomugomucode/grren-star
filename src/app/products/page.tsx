import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Our Products | ${siteConfig.name}`,
  description: "Browse our extensive range of high-performance entrance automation systems, gate motors, and home automation products.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-slate-900 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Complete Product Catalog
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Engineered for reliability. Discover our full range of automation solutions for residential and industrial applications.
            </p>
          </div>
        </div>

        {/* Without limit, it displays all products and no CTA button */}
        <Products />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
