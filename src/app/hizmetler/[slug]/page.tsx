import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { PageHero, QuoteCard, StatsBand } from "@/components/sections";
import { Button, SectionHeading } from "@/components/ui";
import { promoCategories, services } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Gaziantep`,
    description: s.short,
    alternates: { canonical: `/hizmetler/${s.slug}` },
    openGraph: { images: [s.image] },
  };
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={s.title}
        title={s.tagline}
        crumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: s.title, href: `/hizmetler/${s.slug}` },
        ]}
      >
        <Reveal delay={200} className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-5">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="pt-4">
              <Button href={`/iletisim?konu=${s.slug}`} variant="ink">
                Teklif alın
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-paper-2 lg:col-span-7">
            <Image src={s.image} alt={s.title} fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </PageHero>

      {/* Özellikler */}
      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Markanıza ne katar"
            title={s.slug === "promosyon-urunler" ? "Ürün kategorilerimiz." : "Uzman dokunuşunu hissedin."}
            className="mb-14"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.features.map((f, i) => (
              <li key={f.title} className={s.features.length === 3 && i === 0 ? "lg:col-span-2" : ""}>
                <Reveal delay={(i % 4) * 70} className="flex h-full flex-col rounded-3xl bg-ink-2 p-8">
                  <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 text-2xl font-extrabold tracking-tight text-balance">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/60">{f.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {s.slug === "promosyon-urunler" && (
        <section className="container-x py-24 sm:py-32">
          <SectionHeading eyebrow="Katalog" title="Markanıza özel promosyon ürünleri." className="mb-14">
            <Button href="/iletisim?konu=promosyon-urunler" variant="ink">
              Sipariş verin
            </Button>
          </SectionHeading>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {promoCategories.map((c, i) => (
              <li key={c.title} className={i < 2 ? "lg:col-span-1" : ""}>
                <Reveal delay={(i % 3) * 80}>
                  <figure className="group overflow-hidden rounded-3xl border border-line bg-white">
                    <div className="relative aspect-square">
                      <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105" />
                    </div>
                    <figcaption className="flex items-center justify-between p-6 text-lg font-extrabold">
                      {c.title}
                      <ArrowUpRight className="text-muted" />
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
            <li>
              <Link
                href="/iletisim?konu=promosyon-urunler"
                className="group flex aspect-square h-full flex-col justify-between rounded-3xl bg-accent p-8 sm:aspect-auto"
              >
                <span className="display text-4xl">Aradığınız ürünü birlikte bulalım.</span>
                <span className="inline-flex items-center gap-2 font-bold">
                  Teklif isteyin <ArrowUpRight className="transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            </li>
          </ul>
        </section>
      )}

      {s.steps && (
        <section className="container-x py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-5 text-muted">{s.slug === "videografi" ? "Nelerden oluşur" : "Neler sunuyoruz"}</p>
              <h2 className="display text-4xl sm:text-5xl">
                {s.slug === "videografi" ? "Fikirden ekrana dört aşama." : "Stratejik yol haritanız."}
              </h2>
            </div>
            <ol className="lg:col-span-7">
              {s.steps.map((st, i) => (
                <li key={st.title} className="border-t border-line py-7 last:border-b">
                  <Reveal delay={i * 60} className="grid grid-cols-[3.5rem_1fr] gap-4">
                    <span className="display text-3xl text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-xl font-extrabold tracking-tight sm:text-2xl">{st.title}</span>
                      <span className="mt-2 block leading-relaxed text-muted">{st.text}</span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {s.gallery.length > 0 && (
        <section className={s.steps ? "container-x pb-24 sm:pb-32" : "container-x py-24 sm:py-32"}>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {s.gallery.map((g, i) => (
              <li key={g} className={i % 3 === 0 ? "lg:translate-y-10" : ""}>
                <Reveal delay={i * 80} className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper-2">
                  <Image src={g} alt={`${s.title} çalışma örneği ${i + 1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(s.closing || s.quote) && (
        <section className="container-x pb-24 sm:pb-32">
          <div className="grid gap-4 lg:grid-cols-2">
            {s.closing && (
              <Reveal className="rounded-3xl bg-accent p-8 sm:p-12">
                <h2 className="display text-4xl sm:text-5xl">{s.closing.title}</h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
                  {s.closing.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </Reveal>
            )}
            {s.quote && (
              <Reveal delay={100} className={s.closing ? "" : "lg:col-span-2"}>
                <QuoteCard dark text={s.quote.text} author={s.quote.author} role={s.quote.role} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      <section className="container-x pb-24 sm:pb-32">
        <StatsBand dark={false} />
      </section>

      {/* Diğer hizmetler */}
      <section className="border-t border-line bg-paper-2 py-20">
        <div className="container-x">
          <p className="eyebrow mb-8 text-muted">Diğer hizmetlerimiz</p>
          <ul className="flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/hizmetler/${o.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-ink/15 bg-paper px-6 py-4 text-lg font-bold transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {o.title}
                  <ArrowUpRight width={18} height={18} className="transition-transform group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
