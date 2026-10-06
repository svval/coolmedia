import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion";
import { ClientsMarquee, PageHero, ProcessSteps, QuoteCard, StatsBand } from "@/components/sections";
import { Button, SectionHeading } from "@/components/ui";
import { achievements, company, pillars, quotes } from "@/content/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Cool Media, 2017'den beri Gaziantep merkezli tam hizmet dijital reklam ve tasarım ajansıdır. Hikâyemiz, değerlerimiz ve başarılarımız.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            Harika markalar doğmaz, <span className="text-accent-deep">inşa edilir.</span>
          </>
        }
        text="Cool Media, yerli ve global markalara uzun yıllar hizmet vermiş deneyimli fikir insanlarından oluşan, trendleri yakından takip eden, yaratıcılıktan ödün vermeyen tam hizmet ajansıdır."
        crumbs={[{ label: "Hakkımızda", href: "/hakkimizda" }]}
      />

      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-8 lg:aspect-auto lg:min-h-[32rem]">
            <Image src="/images/work/media-13.webp" alt="Cool Media yaratıcı çalışma" fill priority sizes="(min-width:1024px) 66vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-between rounded-[2rem] bg-ink p-8 text-paper sm:p-10 lg:col-span-4">
            <p className="display text-[5.5rem] text-accent sm:text-[7rem]">{company.founded}</p>
            <p className="mt-6 text-lg leading-relaxed text-paper/75">
              Gaziantep&apos;te cesur bir vizyonla başlayan yolculuğumuz; bugün Türkiye, Avrupa ve Orta Doğu&apos;daki markalara
              hizmet veren yaratıcı ve stratejik bir güce dönüştü.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5 text-muted">Yaklaşımımız</p>
            <h2 className="display text-4xl sm:text-5xl">Müşterilerin neye ihtiyaç duyduğunu anlayarak tasarlıyoruz.</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              İletişimin günden güne arttığı ve markaların görünür olmasının zorlaştığı günümüzde; yarattığımız işlerle gerçek
              ihtiyaçlara hizmet eden, sürdürülebilir iletişim fikirleri buluyor, bu fikirleri yaratıcı ve etkin uygulamalarla
              hayata geçiriyoruz.
            </p>
            <p>
              Her markanın hikâyesine, kitlesine ve hedeflerine derinlemesine iniyor; her temas noktasını ve kanalı ele alan
              eksiksiz bir dijital ekosistem kuruyoruz. Böylece markanız daha güçlü, daha görünür ve daha etkili hale geliyor.
            </p>
          </Reveal>
        </div>
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 70} className="h-full rounded-3xl border border-line p-8">
                <span className="text-sm font-bold text-accent-deep">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-x">
          <SectionHeading dark eyebrow="Rakamlarla Cool Media" title="Gelen her müşterisini daha mutlu gönderen ajans." className="mb-16" />
          <StatsBand />
          <div className="mt-20">
            <ProcessSteps dark />
          </div>
        </div>
      </section>

      {/* Başarılarımız */}
      <section id="basarilarimiz" className="container-x scroll-mt-28 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Başarılarımız"
          title="Sahada, toplumla birlikte."
          text="Üniversite etkinliklerinden sosyal sorumluluk projelerine; şehrimizin ve geleceğimizin yanında yer almayı önemsiyoruz."
          className="mb-14"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 80}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-paper-2">
                    <Image src={a.image} alt={a.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="text-xl font-extrabold tracking-tight">{a.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-4 lg:grid-cols-2">
          {quotes.slice(0, 2).map((q, i) => (
            <li key={q.author}>
              <Reveal delay={i * 80} className="h-full">
                <QuoteCard {...q} dark={i === 0} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="overflow-hidden border-t border-line bg-paper-2 py-20 sm:py-24">
        <div className="container-x mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="display text-4xl sm:text-5xl">Bize güvenen markalar.</h2>
          <Button href="/ekibimiz" variant="ink">
            Ekibimizle tanışın
          </Button>
        </div>
        <ClientsMarquee />
      </section>
    </>
  );
}
