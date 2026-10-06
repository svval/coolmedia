"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav, services } from "@/content/site";
import { ArrowUpRight, socialIcons } from "./icons";
import { Wordmark, cn } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince menüyü kapat
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <a
        href="#icerik"
        className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-full bg-accent px-4 py-2 text-sm font-bold text-ink focus:translate-y-0"
      >
        İçeriğe geç
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-[88rem] items-center justify-between rounded-full border pr-2 pl-5 transition-all duration-500 sm:h-16 sm:pl-7",
            scrolled || open
              ? "border-line bg-paper/85 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.18)] backdrop-blur-xl"
              : "border-transparent bg-paper",
          )}
        >
          <Link href="/" aria-label="Cool Media ana sayfa" className="text-2xl sm:text-[1.7rem]">
            <Wordmark />
          </Link>

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.href === "/hizmetler" ? (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-ink/5",
                        isActive(item.href) && "bg-ink/5",
                      )}
                    >
                      {item.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className="mt-0.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180">
                        <path d="M1 3.5 5 7l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </Link>
                    <div className="invisible absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-paper p-3 shadow-2xl">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/hizmetler/${s.slug}`}
                              className="group/item flex items-start justify-between gap-3 rounded-2xl p-4 transition-colors hover:bg-ink hover:text-paper"
                            >
                              <span>
                                <span className="block font-bold">{s.title}</span>
                                <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted group-hover/item:text-paper/60">
                                  {s.short}
                                </span>
                              </span>
                              <ArrowUpRight width={16} height={16} className="mt-1 shrink-0 opacity-40 group-hover/item:text-accent group-hover/item:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors hover:bg-ink/5",
                        isActive(item.href) && "bg-ink/5",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/iletisim"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-accent hover:text-ink sm:inline-flex"
            >
              Bize Ulaşın
              <ArrowUpRight width={16} height={16} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              className="grid size-11 place-items-center rounded-full bg-accent text-ink lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={cn("absolute left-0 h-0.5 w-5 bg-current transition-all duration-300", open ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 h-0.5 w-5 bg-current transition-all duration-300", open ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 pt-28 pb-10 text-paper transition-[clip-path] duration-700 ease-out-expo lg:hidden",
          open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobil menü">
          <ul className="space-y-1">
            {[{ label: "Ana Sayfa", href: "/" }, ...nav, { label: "İletişim", href: "/iletisim" }].map((item, i) => (
              <li
                key={item.href}
                className={cn("transition-all duration-700 ease-out-expo", open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}
                style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
              >
                <Link href={item.href} className="display flex items-center justify-between py-2 text-[2.6rem] sm:text-6xl">
                  <span className={cn(isActive(item.href) && item.href !== "/" && "text-accent")}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto space-y-6 pt-10 text-paper/70">
          <div className="space-y-1">
            <a href={`mailto:${company.email}`} className="block text-lg font-semibold text-paper">
              {company.email}
            </a>
            <a href={company.phoneHref} className="block text-lg font-semibold text-paper">
              {company.phone}
            </a>
          </div>
          <ul className="flex gap-3">
            {company.socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-paper/20 hover:bg-accent hover:text-ink"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
