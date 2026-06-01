import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Proof from "@/components/Proof";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Proof />
        <Pricing />
        <LeadForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
