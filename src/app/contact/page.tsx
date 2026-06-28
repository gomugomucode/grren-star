import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with Greenstar Suppliers for pricing, installation, and support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <PageHeader 
          badge="Let's Connect"
          title="Tell us what you need."
          subtitle="Call, WhatsApp, or send a short enquiry for pricing and availability. We typically respond within minutes."
        />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
