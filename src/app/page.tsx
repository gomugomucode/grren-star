import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SatisfactionBanner from "@/components/SatisfactionBanner";
import AboutSection from "@/components/AboutSection";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <SatisfactionBanner />
        <AboutSection />
        <Products />
        <Reviews />
        <Clients />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
