import Link from "next/link";
import { company, nav, services } from "@/content/site";
import { ArrowUpRight, Mail, Phone, Pin, WhatsApp, socialIcons } from "./icons";
import { Reveal } from "./motion";
import { Wordmark } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* CTA */}
      <div className="container-x border-b border-line-dark py-20 sm:py-28">
        <Reveal>
          <p className="eyebrow mb-6 text-paper/60">Bize ulaşın</p>
          <Link href="/iletisim" className="group block">
            <span className="display block text-[clamp(3rem,11vw,10rem)]">
              Birlikte
              <span className="flex items-center gap-[0.15em]">
                <span className="text-accent">çalışalım</span>
                <span className="grid size-[0.75em] shrink-0 place-items-center rounded-full bg-accent text-ink transition-transform duration-700 ease-out-expo group-hover:rotate-45">
                  <ArrowUpRight className="size-[0.45em]" strokeWidth={2.2} />
                </span>
              </span>
            </span>
          </Link>
          <p className="mt-8 max-w-xl text-lg text-paper/65">
            Profesyonel çözümlerimiz ve yaratıcı projelerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin. Cool
            Media ile iş birliğiniz, markanızı bir adım öne taşımanın garantisidir.
          </p>
        </Reveal>
      </div>

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Cool Media ana sayfa" className="text-4xl">
            <Wordmark />
          </Link>
          <p className="mt-3 text-paper/60 italic">&ldquo;{company.slogan}&rdquo;</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">
            {company.founded}&apos;den beri Gaziantep merkezli tam hizmet dijital reklam ve tasarım ajansı. Yerli ve global
            markalara web tasarım, sosyal medya, açık hava reklamcılığı ve video prodüksiyon hizmetleri sunuyoruz.
          </p>
          <ul className="mt-8 flex gap-3">
            {company.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cool Media ${s.label}`}
                    className="grid size-11 place-items-center rounded-full border border-paper/15 transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Hizmetler" className="lg:col-span-3">
          <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-paper/40 uppercase">Hizmetler</h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetler/${s.slug}`} className="text-paper/80 transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kurumsal" className="lg:col-span-2">
          <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-paper/40 uppercase">Kurumsal</h3>
          <ul className="space-y-3">
            {nav
              .filter((n) => n.href !== "/hizmetler")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/80 transition-colors hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/iletisim" className="text-paper/80 transition-colors hover:text-accent">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>

        <address className="space-y-4 not-italic md:col-span-2 lg:col-span-3">
          <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-paper/40 uppercase">İletişim</h3>
          <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-paper/80 hover:text-accent">
            <Mail className="shrink-0 text-accent" /> {company.email}
          </a>
          <a href={company.phoneHref} className="flex items-center gap-3 text-paper/80 hover:text-accent">
            <Phone className="shrink-0 text-accent" /> {company.phone}
          </a>
          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-paper/80 hover:text-accent">
            <WhatsApp className="shrink-0 text-accent" /> WhatsApp ile yazın
          </a>
          <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-paper/80 hover:text-accent">
            <Pin className="mt-0.5 shrink-0 text-accent" /> {company.address}
          </a>
        </address>
      </div>

      <div className="container-x flex flex-col gap-3 border-t border-line-dark py-8 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Cool Media. Tüm hakları saklıdır.</p>
        <p>Gaziantep&apos;ten dünyaya ✦ Planla, başlat, büyüt.</p>
      </div>

      <div aria-hidden className="pointer-events-none -mb-[0.2em] text-center text-[clamp(5rem,24vw,24rem)] leading-none text-paper/[0.04] select-none">
        <Wordmark />
      </div>
    </footer>
  );
}
