"use client";

import { Phone, MessageCircle } from "lucide-react";
import { getTelLink, getWhatsAppLink, siteConfig } from "@/lib/site-config";

interface OrderButtonsProps {
  layout?: "row" | "column";
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabels?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-2 text-xs gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-sm gap-2",
};

export default function OrderButtons({
  layout = "row",
  size = "md",
  className = "",
  showLabels = true,
}: OrderButtonsProps) {
  const btnClass = sizeClasses[size];

  return (
    <div
      className={`flex ${layout === "column" ? "flex-col" : "flex-col sm:flex-row"} gap-3 ${className}`}
    >
      <a
        href={getTelLink()}
        className={`inline-flex items-center justify-center font-semibold rounded-lg bg-green-700 hover:bg-green-800 text-white transition-colors ${btnClass}`}
      >
        <Phone className="h-4 w-4" />
        {showLabels ? "Call to Order" : siteConfig.phoneDisplay}
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center font-semibold rounded-lg bg-[#25D366] hover:bg-[#1fb855] text-white transition-colors ${btnClass}`}
      >
        <MessageCircle className="h-4 w-4" />
        {showLabels ? "WhatsApp to Order" : "WhatsApp"}
      </a>
    </div>
  );
}
