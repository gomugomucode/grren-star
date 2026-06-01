import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Entrance & Home Automation Nepal`,
  description: siteConfig.description,
  keywords: [
    "Greenstar Suppliers",
    "Entrance Automation Nepal",
    "Home Automation Nepal",
    "Sliding Gate Motor",
    "Boom Barrier Nepal",
    "Rolling Shutter",
    "Gate Automation Kathmandu",
    "WhatsApp Order",
  ],
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
