import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { PageHero, ProcessSteps } from "@/components/sections";
import { ArrowUpRight } from "@/components/icons";
import { SectionHeading } from "@/components/ui";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Sosyal medya yönetimi, web tasarım, fotoğrafçılık, videografi, açık hava reklamcılığı, promosyon ürünler ve dijital stüdyo hizmetleri.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title={
          <>
            Tek çatı altında <span className="text-accent-deep">360°</span> dijital ajans.
          </>
        }
        text="Markanızın her adımında stratejik, yaratıcı ve yenilikçi çözümler sunuyoruz. Cool Media ile hedeflerinize emin adımlarla ilerleyin."
        crumbs={[{ label: "Hizmetler", href: "/hizmetler" }]}
      />

      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-8 text-paper sm:p-10"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes={i === 0 ? "100vw" : "(min-width:768px) 50vw, 100vw"}
                    className="object-cover opacity-55 transition duration-1000 ease-out-expo group-hover:scale-105 group-hover:opacity-40"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute top-8 left-8 text-sm font-bold text-accent sm:left-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute top-6 right-6 grid size-14 place-items-center rounded-full bg-paper text-ink transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-accent">
                    <ArrowUpRight />
                  </span>
                  <span className="relative">
                    <span className="display block text-4xl sm:text-5xl">{s.title}</span>
                    <span className="mt-4 block max-w-lg leading-relaxed text-paper/75">{s.short}</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Nasıl çalışıyoruz"
            title="Planlı, yaratıcı ve sonuç odaklı."
            text="İlk adımda ihtiyaçlarınızı ve hedeflerinizi dinler, markanıza özel çözümler geliştiririz. Tasarım, üretim ve uygulama aşamalarında şeffaf iletişimle ilerleriz."
            className="mb-14"
          />
          <ProcessSteps dark />
        </div>
      </section>
    </>
  );
}
