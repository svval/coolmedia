import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { WorkFilter } from "@/components/WorkFilter";
import { works } from "@/content/site";

export const metadata: Metadata = {
  title: "Çalışmalarımız",
  description:
    "Cool Media portfolyosu: konsept ve ürün fotoğrafları, halı çekimleri, sosyal medya tasarımları, marka kimliği ve reklam çalışmaları.",
  alternates: { canonical: "/calismalar" },
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Çalışmalarımız"
        title="Fark yaratan kareler, akılda kalan tasarımlar."
        text="Konsept fotoğraflardan sosyal medya tasarımlarına, marka kimliğinden kampanya görsellerine kadar ürettiğimiz işlerden bir seçki."
        crumbs={[{ label: "Çalışmalar", href: "/calismalar" }]}
      />
      <section className="container-x pb-24 sm:pb-32">
        <WorkFilter items={works} />
      </section>
    </>
  );
}
