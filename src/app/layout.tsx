import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Entrance Automation & Home Automation Supplier in Nepal",
    template: "%s | Greenstar Suppliers",
  },
  description: siteConfig.description,
  keywords: [
    "Greenstar Suppliers",
    "Entrance Automation Nepal",
    "Gate Automation Nepal",
    "Boom Barrier Nepal",
    "Sliding Gate Motor Nepal",
    "Home Automation Nepal",
    "Butwal Automation Supplier",
    "WhatsApp Order",
  ],
  authors: [{ name: siteConfig.name }],
  publisher: siteConfig.name,
  creator: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Greenstar Suppliers | Entrance & Home Automation Nepal",
    description: siteConfig.description,
    type: "website",
    url: new URL("/", siteConfig.siteUrl),
    siteName: siteConfig.name,
    images: [
      { url: siteConfig.logo, width: 1200, height: 630, alt: `${siteConfig.name} logo and automation solutions` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Entrance Automation Nepal`,
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans cursor-none md:cursor-none">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
