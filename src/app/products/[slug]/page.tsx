import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Phone,
  PlugZap,
  Truck,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getProductBySlug, products } from "@/lib/products";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

const connectionOptions = [
  "Remote control",
  "Push button",
  "Keypad or RFID access",
  "WiFi or smart control",
  "Safety sensor",
  "Manual override",
];

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} | ${siteConfig.name}`,
    description: product.details,
    alternates: {
      canonical: new URL(`/products/${product.slug}`, siteConfig.siteUrl).toString(),
    },
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.details,
      url: new URL(`/products/${product.slug}`, siteConfig.siteUrl),
      siteName: siteConfig.name,
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hello ${siteConfig.name}, I want to know more about ${product.title}. Please share price, availability, and installation details.`;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-50 pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
              <Link href="/" className="hover:text-green-700 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/products" className="hover:text-green-700 transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-900">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-200 shadow-xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-bold text-green-700 mb-4 uppercase tracking-widest">
                  Product Guide
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  {product.title}
                </h1>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 font-light">{product.description}</p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500 font-light">{product.details}</p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: "Selection", value: "Site based" },
                    { label: "Support", value: siteConfig.coverage },
                    { label: "Contact", value: "Call / WhatsApp" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-3 sm:p-4 text-center hover:border-green-200 hover:shadow-sm transition-all">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                      <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage & Control Section */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-px w-8 bg-green-600 block" />
                  <p className="text-xs font-bold text-green-700 tracking-[0.2em] uppercase">Usage & Control</p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  How customers use and connect it
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500 font-light">
                  The final control setup depends on your site, but these are the common ways customers operate and connect this product.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {connectionOptions.map((option) => (
                  <div key={option} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-green-200 hover:shadow-sm transition-all">
                    <PlugZap className="h-5 w-5 flex-shrink-0 text-green-700" />
                    <span className="text-sm font-semibold text-slate-800">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to use / Why use it */}
        <section className="bg-slate-50 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">How to use</h2>
                <ul className="space-y-4">
                  {product.howToUse.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Why choose this product</h2>
                <ul className="space-y-4">
                  {product.whyUse.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-14 lg:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-50/30 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="h-px w-8 bg-green-600 block" />
                  <p className="text-xs font-bold text-green-700 tracking-[0.2em] uppercase">Get Started</p>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Want price, delivery, or installation details?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500 font-light">
                  Send the product name, your city, and a photo or short video of the site. We will help you choose the
                  correct option and share availability for {product.title}.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full blur-2xl pointer-events-none" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                  <a
                    href={getTelLink()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-green-700 px-5 py-4 text-sm font-bold text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={getWhatsAppLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb855] px-5 py-4 text-sm font-bold text-white transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp now
                  </a>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 relative z-10">
                  <div className="flex gap-3 items-start">
                    <ClipboardCheck className="h-5 w-5 flex-shrink-0 text-green-700 mt-0.5" />
                    <span>Share product name and site photo.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Truck className="h-5 w-5 flex-shrink-0 text-green-700 mt-0.5" />
                    <span>Ask for delivery across {siteConfig.coverage}.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-green-700 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to all products
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
