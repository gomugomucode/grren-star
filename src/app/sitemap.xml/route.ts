import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "/",
  "/services",
  "/services/entrance-automation-nepal",
  "/services/gate-automation-nepal",
  "/services/boom-barrier-nepal",
  "/services/sliding-gate-motor-nepal",
  "/services/home-automation-nepal",
];

export function GET() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const urlEntries = routes
    .map(
      (route) => `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.7"}</priority>\n  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
    },
  });
}
