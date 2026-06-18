import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-content";

const routes = ["/", "/about", "/faq", "/policies", "/fit-form"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
