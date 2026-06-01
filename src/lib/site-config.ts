export const siteConfig = {
  name: "Greenstar Suppliers",
  shortName: "Greenstar",
  tagline: "Entrance & Home Automation Supplies",
  description:
    "Greenstar Suppliers delivers entrance automation, gate motors, boom barriers, rolling shutters, and smart home products across Nepal. Call or WhatsApp to order.",
  phone: process.env.NEXT_PUBLIC_PHONE || "+9779801234567",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+977 980-1234567",
  /** Digits only, with country code — used for wa.me links */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "9779801234567",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@greenstarsuppliers.com.np",
  address: {
    city: "Kathmandu",
    country: "Nepal",
    full: "Kathmandu, Nepal",
  },
  coverage: "All Nepal",
  businessHours: "Sun–Fri: 9:00 AM – 6:00 PM NPT",
  whatsappOrderMessage:
    "Hello Greenstar Suppliers, I would like to place an order. Please share availability and price.",
} as const;

export function getTelLink(phone = siteConfig.phone) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getWhatsAppLink(message?: string) {
  const text = message ?? siteConfig.whatsappOrderMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}
