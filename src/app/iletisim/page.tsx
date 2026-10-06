import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Pin, WhatsApp, socialIcons } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/sections";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "İletişim",
  description: `Cool Media ile iletişime geçin. ${company.address} · ${company.phone} · ${company.email}`,
  alternates: { canonical: "/iletisim" },
};

const channels = [
  { label: "E-posta", value: company.email, href: `mailto:${company.email}`, Icon: Mail },
  { label: "Telefon", value: company.phone, href: company.phoneHref, Icon: Phone },
  { label: "WhatsApp", value: "Hemen yazın", href: company.whatsapp, Icon: WhatsApp, external: true },
  { label: "Adres", value: company.address, href: company.mapsUrl, Icon: Pin, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Bir fikriniz mi var? <span className="text-accent-deep">Konuşalım.</span>
          </>
        }
        text="Hizmetlerimiz hakkında detaylı bilgi almak, teklif istemek ya da sorularınızı iletmek için bizimle iletişime geçebilirsiniz. Size yardımcı olmaktan memnuniyet duyarız."
        crumbs={[{ label: "İletişim", href: "/iletisim" }]}
      />

      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="rounded-[2rem] border border-line bg-paper-2 p-6 sm:p-10 lg:col-span-7">
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight">Mesaj gönderin</h2>
            <Suspense fallback={<div className="h-[34rem]" />}>
              <ContactForm />
            </Suspense>
          </Reveal>

          <div className="space-y-4 lg:col-span-5">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-5 rounded-3xl bg-ink p-6 text-paper transition-colors hover:bg-ink-2 sm:p-7"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-ink">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.18em] text-paper/45 uppercase">{label}</span>
                    <span className="mt-1 block text-lg font-semibold group-hover:text-accent">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <ul className="flex gap-3 pt-2">
              {company.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Cool Media ${s.label}`}
                      className="grid size-12 place-items-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-accent"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-paper-2">
          <iframe
            title="Cool Media ofis konumu"
            src={company.mapsEmbed}
            className="h-[26rem] w-full grayscale-[0.85] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
