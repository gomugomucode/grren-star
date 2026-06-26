import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { servicePages } from "@/lib/services";
import OrderButtons from "@/components/OrderButtons";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: `Service | ${siteConfig.name}`,
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.pageDescription,
    alternates: {
      canonical: new URL(`/services/${service.slug}`, siteConfig.siteUrl).toString(),
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.pageDescription,
      url: new URL(`/services/${service.slug}`, siteConfig.siteUrl),
      siteName: siteConfig.name,
      type: "website",
      images: [siteConfig.logo],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${siteConfig.name}`,
      description: service.pageDescription,
      images: [siteConfig.logo],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.full,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: "Nepal",
    openingHours: siteConfig.businessHours,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.siteUrl}/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="mb-10 text-sm font-medium text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-green-700 transition-colors">
              Home
            </Link>
            <ArrowRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-green-700 transition-colors">
              Services
            </Link>
            <ArrowRight className="h-3 w-3" />
            <span className="text-slate-900">{service.title}</span>
          </nav>

          <article className="space-y-12">
            <header>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-bold text-green-700 mb-6 uppercase tracking-widest">
                Service Details
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.pageHeading}
              </h1>
              <p className="mt-6 max-w-3xl text-xl text-slate-600 leading-relaxed font-light">
                {service.pageDescription}
              </p>
            </header>

            <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">What this service includes</h2>
                  <ul className="space-y-4 text-slate-600 font-light">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex gap-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Why choose Greenstar?</h2>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We understand Nepal's market, local delivery requirements, and the need for durable automation systems backed by expert engineering support available directly via direct line or WhatsApp.
                  </p>
                </div>
              </div>

              <aside className="space-y-8">
                <div className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="font-bold text-slate-900 mb-6 text-xl">Initiate Deployment</h3>
                  <OrderButtons layout="column" size="md" />
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-6 text-xl">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed flex items-center justify-between border-b border-slate-100 pb-4">
                      <span>Phone:</span>
                      <span className="text-slate-900 font-medium">{siteConfig.phoneDisplay}</span>
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed flex items-center justify-between border-b border-slate-100 pb-4">
                      <span>Email:</span>
                      <span className="text-slate-900 font-medium">{siteConfig.email}</span>
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed flex items-center justify-between border-b border-slate-100 pb-4">
                      <span>Location:</span>
                      <span className="text-slate-900 font-medium">{siteConfig.address.full}</span>
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed flex items-center justify-between pt-1">
                      <span>Hours:</span>
                      <span className="text-green-700 font-medium">{siteConfig.businessHours}</span>
                    </p>
                  </div>
                </div>
              </aside>
            </section>

            <div className="pt-8">
              <FaqSection faqs={service.faq} />
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema]),
        }}
      />
    </div>
  );
}
