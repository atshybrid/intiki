import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/constants";
import { getAllFestivalBoxes } from "@/lib/festival-data";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/shop"), lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: absoluteUrl("/send"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: absoluteUrl("/track"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/sample-box"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/subscription"), lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: absoluteUrl("/festival"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/shipping"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: absoluteUrl(`/shop?category=${category.id}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = MOCK_PRODUCTS.map((product) => ({
    url: absoluteUrl(`/shop/${product.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const festivalRoutes: MetadataRoute.Sitemap = getAllFestivalBoxes().map((box) => ({
    url: absoluteUrl(`/festival/${box.id}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...festivalRoutes];
}
