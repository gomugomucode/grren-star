import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Automation & Electronics | Industrial Automation Solutions",
  description:
    "Trusted supplier of industrial automation products, PLC systems, sensors, controllers, and electronics components. Serving manufacturing, energy, and infrastructure sectors.",
  keywords: [
    "Industrial Automation",
    "PLC Systems",
    "Sensors and Controllers",
    "Industrial Electronics",
    "Power Systems",
    "Automation Modules",
    "RFQ",
    "Factory Automation",
  ],
  authors: [{ name: "Apex Automation & Electronics" }],
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
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
