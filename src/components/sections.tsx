import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { clients, faqs, process, services, stats, type TeamMember, type Work } from "@/content/site";
import type { Post } from "@/content/posts";
import { ArrowUpRight, Instagram, LinkedIn, Plus, XLogo } from "./icons";
import { Counter, Reveal } from "./motion";
import { Marquee, cn } from "./ui";

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

/** İç sayfaların üst bölümü */
export function PageHero({
  eyebrow,
  title,
  text,
  children,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-paper pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="container-x relative">
        {crumbs && (
          <nav aria-label="Konum" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink">
                  Ana Sayfa
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link href={c.href} className="hover:text-ink">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          <p className="eyebrow mb-6 text-muted">{eyebrow}</p>
          <h1 className="display max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] text-balance">{title}</h1>
        </Reveal>
        {text && (
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{text}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function ClientsMarquee({ dark }: { dark?: boolean }) {
  const half = Math.ceil(clients.length / 2);
  const rows = [clients.slice(0, half), clients.slice(half)];
  return (
    <div className="space-y-4">
      {rows.map((row, i) => (
        <Marquee key={i} duration={50} reverse={i === 1}>
          {row.map((c) => (
            <div
              key={c.name}
              className={cn(
                "mr-4 grid h-24 w-52 shrink-0 place-items-center rounded-2xl bg-white px-6 sm:h-28 sm:w-60",
                dark ? "" : "border border-line",
              )}
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={300}
                height={100}
                loading="eager"
                className="h-auto max-h-16 w-auto object-contain grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  );
}

export function StatsBand({ dark = true }: { dark?: boolean }) {
  return (
    <dl className={cn("grid grid-cols-2 border-t lg:grid-cols-4", dark ? "border-line-dark" : "border-line")}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "flex flex-col gap-2 py-8 pr-4 sm:py-10",
            i % 2 === 1 && "border-l pl-6 lg:pl-8",
            i > 1 && "border-t lg:border-t-0",
            i === 2 && "lg:border-l lg:pl-8",
            dark ? "border-line-dark" : "border-line",
          )}
        >
          <dt className={cn("order-2 text-sm font-semibold", dark ? "text-paper/60" : "text-muted")}>{s.label}</dt>
          <dd className="display order-1 text-6xl sm:text-7xl">
            <Counter value={s.value} suffix={s.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ServiceList() {
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => (
        <li key={s.slug} className="border-b border-line">
          <Link
            href={`/hizmetler/${s.slug}`}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 py-7 sm:gap-8 sm:py-9"
          >
            <span className="w-8 text-sm font-bold text-muted tabular-nums sm:w-12">{String(i + 1).padStart(2, "0")}</span>
            <span className="min-w-0">
              <span className="display block text-3xl transition-transform duration-500 ease-out-expo group-hover:translate-x-3 sm:text-5xl lg:text-6xl">
                {s.title}
              </span>
              <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted sm:text-base">{s.short}</span>
            </span>
            <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-accent sm:size-16">
              <ArrowUpRight className="transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </span>
            {/* Masaüstünde üzerine gelince görsel önizleme */}
            <span className="pointer-events-none absolute top-1/2 right-28 hidden aspect-[4/3] w-64 -translate-y-1/2 scale-90 rotate-[-4deg] overflow-hidden rounded-2xl opacity-0 shadow-2xl transition-all duration-500 ease-out-expo group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100 xl:block">
              <Image src={s.image} alt="" fill sizes="256px" className="object-cover" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function WorkGrid({ items }: { items: Work[] }) {
  return (
    <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
      {items.map((w, i) => (
        <li key={w.image} className="break-inside-avoid">
          <Reveal delay={(i % 3) * 80}>
            <figure className="group relative overflow-hidden rounded-3xl bg-paper-2">
              <div className={cn("relative", w.tall ? "aspect-[2/3]" : i % 4 === 0 ? "aspect-[4/5]" : "aspect-square")}>
                <Image
                  src={w.image}
                  alt={`${w.title} — ${w.category}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-paper/90 px-4 py-3 backdrop-blur transition-all duration-500 ease-out-expo sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                <span>
                  <span className="block text-xs font-bold tracking-wider text-muted uppercase">{w.category}</span>
                  <span className="block font-bold">{w.title}</span>
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent">
                  <Plus width={16} height={16} />
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({ dark }: { dark?: boolean }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-3" style={{ background: dark ? "var(--color-line-dark)" : "var(--color-line)" }}>
      {process.map((p, i) => (
        <li key={p.title} className={cn("group relative p-8 sm:p-10", dark ? "bg-ink" : "bg-paper")}>
          <Reveal delay={(i % 3) * 80}>
            <span className="display block text-6xl text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{p.title}</h3>
            <p className={cn("mt-3 leading-relaxed", dark ? "text-paper/60" : "text-muted")}>{p.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function TeamCard({ m }: { m: TeamMember }) {
  const links = [
    m.instagram && { href: m.instagram, label: "Instagram", Icon: Instagram },
    m.linkedin && { href: m.linkedin, label: "LinkedIn", Icon: LinkedIn },
    m.x && { href: m.x, label: "X", Icon: XLogo },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Instagram }[];
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper-2">
        <Image
          src={m.image}
          alt={m.hiring ? "Açık pozisyon" : m.name}
          fill
          sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
          className={cn(
            "object-cover transition duration-1000 ease-out-expo group-hover:scale-105",
            !m.hiring && "grayscale group-hover:grayscale-0",
          )}
        />
        {m.hiring && (
          <Link
            href="/iletisim?konu=kariyer"
            className="absolute inset-0 grid place-items-center bg-ink/40 text-center text-paper backdrop-blur-[2px]"
          >
            <span>
              <span className="mx-auto mb-3 grid size-14 place-items-center rounded-full bg-accent text-ink">
                <Plus />
              </span>
              <span className="font-bold">Ekibimize katılın</span>
            </span>
          </Link>
        )}
        {links.length > 0 && (
          <ul className="absolute right-3 bottom-3 flex gap-2">
            {links.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} ${label}`}
                  className="grid size-10 place-items-center rounded-full bg-paper/90 text-ink backdrop-blur transition-colors hover:bg-accent"
                >
                  <Icon width={17} height={17} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight">{m.name}</h3>
      <p className="mt-1 text-sm text-muted">{m.role}</p>
    </article>
  );
}

export function PostCard({ post, priority }: { post: Post; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-paper-2">
        <Image
          src={post.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-paper px-3 py-1 text-xs font-bold">{post.category}</span>
      </div>
      <div className="mt-5 flex items-center gap-3 text-sm text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>•</span>
        <span>{post.readingMinutes} dk okuma</span>
      </div>
      <h3 className="mt-3 text-xl leading-snug font-extrabold tracking-tight text-balance sm:text-2xl">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          <span className="bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0%_35%] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_35%]">
            {post.title}
          </span>
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{post.excerpt}</p>
    </article>
  );
}

export function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => (
        <details key={f.q} className="group py-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold tracking-tight sm:text-2xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent">
              <Plus width={18} height={18} />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function QuoteCard({
  text,
  author,
  role,
  image,
  dark,
}: {
  text: string;
  author: string;
  role?: string;
  image?: string;
  dark?: boolean;
}) {
  return (
    <figure className={cn("flex h-full flex-col justify-between rounded-3xl p-8 sm:p-10", dark ? "bg-ink-2 text-paper" : "bg-paper-2")}>
      <blockquote>
        <span aria-hidden className="display block text-7xl leading-none text-accent">
          &ldquo;
        </span>
        <p className="mt-2 text-xl leading-snug font-semibold tracking-tight text-balance sm:text-2xl">{text}</p>
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-4">
        {image && (
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full">
            <Image src={image} alt="" fill sizes="56px" className="object-cover grayscale" />
          </span>
        )}
        <span>
          <span className="block font-bold">{author}</span>
          {role && <span className={cn("block text-sm", dark ? "text-paper/55" : "text-muted")}>{role}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
