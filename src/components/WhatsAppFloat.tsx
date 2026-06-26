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
      className="interactive fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#1fb855] text-white w-14 h-14 rounded-full shadow-lg shadow-green-900/20 transition-all hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
