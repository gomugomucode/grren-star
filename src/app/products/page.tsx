import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
        <PageHeader 
          title="Complete Product Catalog"
          subtitle="Engineered for reliability. Discover our full range of automation solutions for residential and industrial applications."
        />

        {/* Without limit, it displays all products and no CTA button */}
        <Products />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
