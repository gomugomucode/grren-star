import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn about our mission to provide the best automation solutions in Nepal.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="bg-slate-900 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
              Delivering precision, durability, and a seamless client experience across Nepal since our inception.
            </p>
          </div>
        </div>

        <AboutSection />
        <TrustSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
