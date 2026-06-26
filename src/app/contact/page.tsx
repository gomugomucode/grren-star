import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with Greenstar Suppliers for pricing, installation, and support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
