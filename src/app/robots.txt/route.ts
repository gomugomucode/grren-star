import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export function GET() {
  const sitemapUrl = `${siteConfig.siteUrl}/sitemap.xml`;
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\nHost: ${siteConfig.siteUrl.replace(/^https?:\/\//, "")}`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
    },
  });
}
