import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
