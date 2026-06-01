"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Order on WhatsApp</span>
    </a>
  );
}
