import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHighlights from "@/components/ServiceHighlights";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Professional Automation Solutions | Greenstar Suppliers",
  description:
    "Discover our suite of intelligent automation services including entrance control, boom barriers, sliding gates, and smart home technology designed for modern living in Nepal.",
  alternates: {
    canonical: new URL("/services", siteConfig.siteUrl).toString(),
  },
  openGraph: {
    title: "Professional Automation Solutions | Greenstar Suppliers",
    description:
      "Discover our suite of intelligent automation services including entrance control, boom barriers, sliding gates, and smart home technology designed for modern living in Nepal.",
    url: new URL("/services", siteConfig.siteUrl),
    siteName: siteConfig.name,
    type: "website",
    images: [siteConfig.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Automation Solutions | Greenstar Suppliers",
    description:
      "Discover our suite of intelligent automation services including entrance control, boom barriers, sliding gates, and smart home technology designed for modern living in Nepal.",
    images: [siteConfig.logo],
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden font-sans min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-green-700 mb-8 uppercase tracking-widest shadow-sm">
              Solutions Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900">
              Engineered for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                Performance & Security
              </span>
            </h1>
            <p className="text-slate-600 mt-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              We deploy industrial-grade automation technology designed to secure perimeters, streamline access, and elevate the modern living experience across Nepal.
            </p>
          </div>
        </div>

        <ServiceHighlights hideHeading />

        <div className="mt-20">
          <FaqSection
            faqs={[
              {
                question: "What is your approach to system installation?",
                answer:
                  "Our engineering team conducts a thorough site survey to assess structural requirements, power availability, and usage frequency before recommending and deploying the optimal automation system.",
              },
              {
                question: "Do you provide nationwide technical support in Nepal?",
                answer:
                  "Yes, our dedicated support infrastructure ensures rapid response times for troubleshooting, maintenance, and spare parts replacement across all our service areas from our base in Butwal.",
              },
              {
                question: "Can multiple automation systems be integrated?",
                answer:
                  "Absolutely. We specialize in creating cohesive ecosystems where gate automation, boom barriers, and smart home controls interface seamlessly through centralized management platforms.",
              },
              {
                question: "What warranty do you offer on automation products?",
                answer:
                  "We provide comprehensive manufacturer warranties on all core components, backed by our own service guarantee for installation quality and operational reliability.",
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
