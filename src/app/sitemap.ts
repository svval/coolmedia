import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { company, services } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/hizmetler", "/calismalar", "/hakkimizda", "/ekibimiz", "/referanslar", "/blog", "/iletisim"];
  return [
    ...pages.map((p) => ({ url: company.url + p, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${company.url}/hizmetler/${s.slug}`, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${company.url}/blog/${p.slug}`, lastModified: p.date, priority: 0.6 })),
  ];
}
