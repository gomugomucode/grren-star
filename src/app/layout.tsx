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
  title: "Silver Green Automations | Entrance & Home Automation Coimbatore",
  description:
    "Leading entrance and home automation company in Coimbatore. Automatic sliding gates, swing gates, boom barriers, rolling shutters, garage doors, and smart home solutions across Tamil Nadu.",
  keywords: [
    "Entrance Automation",
    "Home Automation",
    "Sliding Gate Automation",
    "Swing Gate Motor",
    "Boom Barrier",
    "Rolling Shutter",
    "Garage Door Automation",
    "Coimbatore",
    "Silver Green Automations",
  ],
  authors: [{ name: "Silver Green Automations" }],
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
