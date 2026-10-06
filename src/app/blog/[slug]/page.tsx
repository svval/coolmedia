import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion";
import { PostCard, formatDate } from "@/components/sections";
import { Button } from "@/components/ui";
import { posts } from "@/content/posts";
import { company } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date, images: [post.image] },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    image: company.url + post.image,
    author: { "@type": "Organization", name: company.name },
    publisher: { "@type": "Organization", name: company.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="container-x pt-36 sm:pt-44">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Konum" className="mb-8 text-sm text-muted">
              <Link href="/blog" className="hover:text-ink">
                ← Tüm yazılar
              </Link>
            </nav>
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="rounded-full bg-accent px-3 py-1 font-bold text-ink">{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden>•</span>
                {post.readingMinutes} dk okuma
              </p>
              <h1 className="display mt-6 text-[clamp(2.25rem,5.5vw,4.5rem)] text-balance">{post.title}</h1>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative mx-auto mt-12 aspect-[16/8] max-w-6xl overflow-hidden rounded-[2rem] bg-paper-2">
            <Image src={post.image} alt="" fill priority sizes="(min-width:1152px) 1152px, 100vw" className="object-cover" />
          </Reveal>
        </header>

        <div className="container-x py-16 sm:py-20">
          <div className="prose-cm mx-auto max-w-3xl" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-2xl font-extrabold tracking-tight">Markanızı birlikte büyütelim.</p>
              <p className="mt-2 text-paper/60">Projeniz hakkında konuşmak için bize ulaşın.</p>
            </div>
            <Button href="/iletisim">İletişime geçin</Button>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-paper-2 py-20 sm:py-24">
        <div className="container-x">
          <h2 className="display mb-12 text-4xl sm:text-5xl">Diğer yazılar</h2>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
