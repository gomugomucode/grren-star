import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ClipboardCheck,
  HelpCircle,
  MessageCircle,
  Phone,
  PlugZap,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
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

const installationSteps = [
  {
    title: "Site check",
    description: "We review the entrance, wall space, wiring point, usage pattern, and safety needs.",
  },
  {
    title: "Product selection",
    description: "The right motor, controller, sensor, remote, and accessory set is selected for the site.",
  },
  {
    title: "Fitting and wiring",
    description: "The product is mounted, wired, tested, and adjusted for smooth daily operation.",
  },
  {
    title: "Handover",
    description: "We explain remote use, manual release, safety checks, and basic maintenance.",
  },
];

const connectionOptions = [
  "Remote control",
  "Push button",
  "Keypad or RFID access",
  "WiFi or smart control",
  "Safety sensor",
  "Manual override",
];

const commonQuestions = [
  {
    question: "Can this product be installed on an existing setup?",
    answer:
      "In most cases yes. We first check the site condition, available space, wiring, and existing structure before recommending the exact model.",
  },
  {
    question: "Do you help with installation guidance?",
    answer:
      "Yes. Greenstar Suppliers can guide product selection, installation requirements, accessories, and after-sales support based on your location and project.",
  },
  {
    question: "How do I know the correct product size or capacity?",
    answer:
      "Share a photo or short video on WhatsApp with width, height, weight estimate, and usage frequency. We will suggest the suitable option.",
  },
  {
    question: "Can I get price and delivery information?",
    answer:
      "Yes. Contact us by call or WhatsApp with the product name and delivery city, and we will share availability and pricing.",
  },
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
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-slate-50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/#products" className="text-sm font-semibold text-green-700 hover:text-green-900">
              Back to products
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 shadow-sm">
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
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
                  Product Guide
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  {product.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-slate-700">{product.description}</p>
                <p className="mt-4 text-base leading-8 text-slate-600">{product.details}</p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { label: "Selection", value: "Site based" },
                    { label: "Support", value: siteConfig.coverage },
                    { label: "Contact", value: "Call / WhatsApp" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm font-bold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-14 lg:py-18">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700 pb-6">
              About the product and why to use it 
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "What it is",
                  description: product.details,
                },
                {
                  icon: Settings,
                  title: "Daily usage",
                  description: product.howToUse[0],
                },
                {
                  icon: Wrench,
                  title: "Why customers choose it",
                  description: product.whyUse[0],
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-green-50 text-green-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* <section className="bg-slate-950 py-14 text-white lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                Installation Process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">From site check to handover</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Every product needs the right fitting, wiring, and control method. This process helps customers
                understand what happens before and after installation.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {installationSteps.map((step, index) => (
                <article key={step.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-green-500 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">Usage and control</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                How customers can use and connect it
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The final control setup depends on your site, but these are the common ways customers operate and
                connect this product.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {connectionOptions.map((option) => (
                <div key={option} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <PlugZap className="h-5 w-5 flex-shrink-0 text-green-700" />
                  <span className="text-sm font-semibold text-slate-800">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">How to use</h2>
              <ul className="mt-5 space-y-4">
                {product.howToUse.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950">Why use it</h2>
              <ul className="mt-5 space-y-4">
                {product.whyUse.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-green-700" />
              <h2 className="text-2xl font-bold text-slate-950">Common customer queries</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {commonQuestions.map((item) => (
                <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <section className="bg-slate-50 py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">Contact us</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Want price, delivery, or installation details?</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Send the product name, your city, and a photo or short video of the site. We will help you choose the
                correct option and share availability for {product.title}.
              </p>
            </div>

            <div className="rounded-lg bg-white p-5 text-slate-950 shadow-xl">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={getTelLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.phoneDisplay}
                </a>
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1fb855]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp now
                </a>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="flex gap-3">
                  <ClipboardCheck className="h-5 w-5 flex-shrink-0 text-green-700" />
                  <span>Share product name and site photo.</span>
                </div>
                <div className="flex gap-3">
                  <Truck className="h-5 w-5 flex-shrink-0 text-green-700" />
                  <span>Ask for delivery across {siteConfig.coverage}.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
