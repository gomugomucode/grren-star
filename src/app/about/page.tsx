import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <PageHeader 
          title="Our Story"
          subtitle="Delivering precision, durability, and a seamless client experience across Nepal since our inception."
        />

        <AboutSection />
        <TrustSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
