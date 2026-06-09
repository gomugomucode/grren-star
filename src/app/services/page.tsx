import type { Metadata } from "next";
import ServiceHighlights from "@/components/ServiceHighlights";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Automation Services Nepal | Greenstar Suppliers",
  description:
    "Explore Greenstar Suppliers' service pages for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation in Nepal.",
  alternates: {
    canonical: new URL("/services", siteConfig.siteUrl).toString(),
  },
  openGraph: {
    title: "Automation Services Nepal | Greenstar Suppliers",
    description:
      "Explore Greenstar Suppliers' service pages for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation in Nepal.",
    url: new URL("/services", siteConfig.siteUrl),
    siteName: siteConfig.name,
    type: "website",
    images: [siteConfig.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Services Nepal | Greenstar Suppliers",
    description:
      "Explore Greenstar Suppliers' service pages for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation in Nepal.",
    images: [siteConfig.logo],
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-3 mx-auto w-fit">Services</p>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Automation Services in Nepal</h1>
          <p className="text-slate-500 mt-4 text-base leading-relaxed">
            Find the right service page for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation with Greenstar Suppliers.
          </p>
        </div>

        <ServiceHighlights hideHeading />

        <FaqSection
          faqs={[
            {
              question: "What service pages does Greenstar Suppliers offer?",
              answer:
                "We offer pages for entrance automation, gate automation, boom barriers, sliding gate motors, and home automation in Nepal.",
            },
            {
              question: "Can I order a system from Butwal and have it delivered across Nepal?",
              answer:
                "Yes. We support ordering by phone or WhatsApp, with delivery and local support across Nepal.",
            },
            {
              question: "Does Greenstar provide installation guidance?",
              answer:
                "Our team provides technical advice and product recommendations for installation planning and system delivery in Nepal.",
            },
          ]}
        />
      </main>
    </div>
  );
}
