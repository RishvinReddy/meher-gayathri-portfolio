import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehergayatri.academic"; // Placeholder until production domain is finalized

  const routes = [
    "",
    "/about",
    "/research",
    "/publications",
    "/teaching",
    "/projects",
    "/achievements",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
