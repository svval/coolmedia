import type { NextConfig } from "next";
import { posts } from "./src/content/posts";
import { services } from "./src/content/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Eski WordPress adreslerini yeni sayfalara kalıcı olarak yönlendir (SEO değeri korunur)
  async redirects() {
    return [
      ...services.map((s) => ({ source: `/${s.oldSlug}`, destination: `/hizmetler/${s.slug}`, permanent: true })),
      { source: "/sosyalmediayonetimi", destination: "/hizmetler/sosyal-medya-yonetimi", permanent: true },
      { source: "/dijital-studio", destination: "/hizmetler/dijital-studyo", permanent: true },
      { source: "/konsept-fotograflar", destination: "/calismalar", permanent: true },
      { source: "/basarilarimiz", destination: "/hakkimizda#basarilarimiz", permanent: true },
      { source: "/site-haritasi", destination: "/sitemap.xml", permanent: true },
      ...posts.map((p) => ({ source: `/${p.slug}`, destination: `/blog/${p.slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;
