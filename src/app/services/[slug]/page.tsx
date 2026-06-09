import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicePages } from "@/components/ServiceHighlights";
import OrderButtons from "@/components/OrderButtons";
import FaqSection from "@/components/FaqSection";
import { siteConfig } from "@/lib/site-config";

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
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-green-700">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{service.title}</span>
        </nav>

        <article className="space-y-8">
          <header>
            <p className="section-label mb-3 w-fit">Service</p>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{service.pageHeading}</h1>
            <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">{service.pageDescription}</p>
          </header>

          <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">What this service includes</h2>
                <ul className="space-y-3 text-slate-600">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why choose Greenstar Suppliers?</h2>
                <p className="text-slate-600 leading-relaxed">
                  We understand Nepal's market, local delivery requirements, and the need for durable automation systems backed by phone and WhatsApp support.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Quick actions</h3>
                <OrderButtons layout="column" size="sm" />
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Service details</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Phone: {siteConfig.phoneDisplay}</p>
                <p className="text-sm text-slate-600 leading-relaxed">Email: {siteConfig.email}</p>
                <p className="text-sm text-slate-600 leading-relaxed">Location: {siteConfig.address.full}</p>
                <p className="text-sm text-slate-600 leading-relaxed">Hours: {siteConfig.businessHours}</p>
              </div>
            </aside>
          </section>

          <FaqSection faqs={service.faq} />
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema]),
        }}
      />
    </div>
  );
}
