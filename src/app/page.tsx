import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SatisfactionBanner from "@/components/SatisfactionBanner";
import AboutSection from "@/components/AboutSection";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServiceHighlights from "@/components/ServiceHighlights";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site-config";

const homepageFaqs = [
  {
    question: "How quickly can I order a sliding gate motor in Nepal?",
    answer:
      "Greenstar Suppliers responds fast by phone or WhatsApp, with delivery options across Nepal and installation advice for both residential and commercial gates.",
  },
  {
    question: "Do you supply boom barriers for parking and access control?",
    answer:
      "Yes. We supply reliable automatic boom barriers for parking, industrial access, and commercial security in Nepal, including local support from Butwal.",
  },
  {
    question: "Can you help me choose the right home automation package?",
    answer:
      "Our team can recommend smart home solutions for lighting, security, curtains, and access control, tailored to your budget and project in Nepal.",
  },
];

export const metadata: Metadata = {
  title: "Entrance Automation Nepal | Gate Motors, Boom Barriers & Home Automation",
  description:
    "Greenstar Suppliers delivers entrance automation, gate motors, boom barriers, rolling shutters, and home automation across Nepal. Call or WhatsApp for fast pricing, delivery, and installation support.",
  alternates: {
    canonical: new URL("/", siteConfig.siteUrl).toString(),
  },
  openGraph: {
    title: "Entrance Automation Nepal | Greenstar Suppliers",
    description:
      "Order gate motors, boom barriers, rolling shutters, and smart home automation across Nepal from Butwal-based Greenstar Suppliers.",
    url: new URL("/", siteConfig.siteUrl),
    siteName: siteConfig.name,
    type: "website",
    images: [siteConfig.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrance Automation Nepal | Greenstar Suppliers",
    description:
      "Order gate motors, boom barriers, rolling shutters, and smart home automation across Nepal from Butwal-based Greenstar Suppliers.",
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const homepageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: siteConfig.logo,
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "NP",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: [siteConfig.logo],
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.full,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    url: siteConfig.siteUrl,
    priceRange: "$$",
    openingHours: siteConfig.businessHours,
    areaServed: [siteConfig.coverage],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <SatisfactionBanner />
        <Products />
        <AboutSection />
        <ServiceHighlights />
        <FaqSection faqs={homepageFaqs} />
        {/* <Reviews /> */}
        <Clients />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
    </div>
  );
}
