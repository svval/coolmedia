import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { PageHero, PostCard, formatDate } from "@/components/sections";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sosyal medya, dijital pazarlama, SEO, video içerik ve marka stratejileri üzerine Cool Media yazıları.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Dijital dünyadan notlar."
        text="Sosyal medya, dijital pazarlama, SEO ve marka stratejileri üzerine deneyimlerimizi paylaşıyoruz."
        crumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="container-x pb-16">
        <Reveal>
          <article className="group relative grid overflow-hidden rounded-[2rem] bg-ink text-paper lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[28rem]">
              <Image src={featured.image} alt="" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
              <div>
                <p className="flex flex-wrap items-center gap-3 text-sm text-paper/60">
                  <span className="rounded-full bg-accent px-3 py-1 font-bold text-ink">Son yazı</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden>•</span>
                  {featured.readingMinutes} dk okuma
                </p>
                <h2 className="display mt-6 text-3xl text-balance sm:text-5xl">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-5 line-clamp-3 text-lg leading-relaxed text-paper/65">{featured.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-2 font-bold text-accent">
                Yazıyı oku <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <PostCard post={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
