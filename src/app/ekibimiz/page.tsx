import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { PageHero, TeamCard } from "@/components/sections";
import { Button } from "@/components/ui";
import { team } from "@/content/site";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description: "Cool Media ekibiyle tanışın: marka, kreatif, web, grafik tasarım ve video alanında uzman kadro.",
  alternates: { canonical: "/ekibimiz" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Ekibimiz"
        title="Fikirlerin arkasındaki insanlar."
        text="Alanında uzman kadromuz, size en iyi deneyimi sunmaktan mutluluk duyar. Stratejiden tasarıma, koddan kameraya kadar her adımda yanınızdayız."
        crumbs={[{ label: "Ekibimiz", href: "/ekibimiz" }]}
      />
      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={(i % 3) * 80}>
                <TeamCard m={m} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-x pb-24 sm:pb-32">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-accent p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Videographer arıyoruz.</h2>
            <p className="mt-4 max-w-xl text-lg text-ink/75">
              Markaların hikâyesini hareketle anlatmayı seven, kurgu ve çekimde iddialı bir ekip arkadaşı arıyoruz.
            </p>
          </div>
          <Button href="/iletisim?konu=kariyer" variant="ink">
            Başvurun
          </Button>
        </Reveal>
      </section>
    </>
  );
}
