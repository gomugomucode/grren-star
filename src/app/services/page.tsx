import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
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
      
      <main className="flex-grow">
        <PageHeader 
          badge="Services We Offer"
          title={
            <>
              Engineered for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Performance & Security
              </span>
            </>
          }
          subtitle="We deploy industrial-grade automation technology designed to secure perimeters, streamline access, and elevate the modern living experience across Nepal."
        />

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
