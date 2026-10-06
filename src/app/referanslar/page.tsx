import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { PageHero, StatsBand } from "@/components/sections";
import { clients } from "@/content/site";

export const metadata: Metadata = {
  title: "Referanslar",
  description: "Metro, Valentis, Soft İplik, İpek Halı ve daha birçok markayla beraber çalıştık. Cool Media referansları.",
  alternates: { canonical: "/referanslar" },
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslarımız"
        title="Yüzlerce markayla beraber çalıştık."
        text="Tekstil ve halıdan gıdaya, perakendeden sivil toplum kuruluşlarına kadar; Gaziantep'ten Körfez'e uzanan geniş bir yelpazede markaların dijital yolculuğuna eşlik ediyoruz."
        crumbs={[{ label: "Referanslar", href: "/referanslar" }]}
      />
      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={(i % 4) * 50} className="group grid aspect-[3/2] place-items-center rounded-3xl border border-line bg-white p-6 transition-shadow duration-500 hover:shadow-xl sm:p-10">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={300}
                  height={100}
                  className="h-auto max-h-20 w-auto object-contain grayscale transition duration-500 group-hover:grayscale-0"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-x pb-24 sm:pb-32">
        <StatsBand dark={false} />
      </section>
    </>
  );
}
