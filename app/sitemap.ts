import { MetadataRoute } from "next";
import { getCanonicalOrigin, ROUTE_METADATA_MAP } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getCanonicalOrigin();

  return Object.values(ROUTE_METADATA_MAP).map((route) => ({
    url: route.path === "/" ? `${origin}/` : `${origin}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
