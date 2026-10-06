import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import {
  ClientsMarquee,
  Faq,
  PostCard,
  ProcessSteps,
  QuoteCard,
  ServiceList,
  StatsBand,
  TeamCard,
} from "@/components/sections";
import { Button, Marquee, SectionHeading, SpinBadge } from "@/components/ui";
import { posts } from "@/content/posts";
import { company, pillars, quotes, services, team, works } from "@/content/site";

const featured = [
  { i: 0, span: "lg:col-span-7 aspect-[16/10]" },
  { i: 4, span: "lg:col-span-5 aspect-[16/10] lg:aspect-auto" },
  { i: 5, span: "lg:col-span-4 aspect-square" },
  { i: 8, span: "lg:col-span-4 aspect-square" },
  { i: 2, span: "lg:col-span-4 aspect-square" },
];

function FeaturedWorks() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
      {featured.map(({ i, span }, n) => {
        const w = works[i];
        return (
          <li key={w.image} className={`${span} group relative overflow-hidden rounded-3xl bg-paper-2 ${n === 0 ? "sm:col-span-2" : ""}`}>
            <Image
              src={w.image}
              alt={`${w.title} — ${w.category}`}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-sm font-bold backdrop-blur">
              {w.title} <span className="font-medium text-muted">· {w.category}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="container-x relative grid min-h-[100svh] grid-rows-[1fr_auto] pt-32 pb-8 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-8 text-paper/70">Gaziantep&apos;in dijital reklam ve tasarım ajansı</p>
              </Reveal>
              <h1 className="display text-[clamp(3.4rem,10.5vw,9.5rem)]">
                <Reveal as="span" className="block">
                  Planla.
                </Reveal>
                <Reveal as="span" delay={120} className="block">
                  Başlat.
                </Reveal>
                <Reveal as="span" delay={240} className="block text-accent">
                  Büyüt.
                </Reveal>
              </h1>
              <Reveal delay={360}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">
                  Cool Media, markanızın dijital dünyadaki her adımını planlar, başlatır ve büyütür. Strateji, tasarım ve
                  prodüksiyonu tek çatı altında topluyoruz.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/iletisim">Projeni başlat</Button>
                  <Button href="/calismalar" variant="outline-light">
                    Çalışmalarımız
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Görsel kolaj */}
            <div className="relative hidden h-[34rem] lg:col-span-5 lg:block">
              <Reveal delay={200} className="absolute top-0 right-0 h-[24rem] w-[19rem] overflow-hidden rounded-[2rem]">
                <Image src="/images/work/hali-konsept-1.webp" alt="Cool Media konsept halı çekimi" fill priority sizes="304px" className="object-cover" />
              </Reveal>
              <Reveal delay={350} className="absolute bottom-0 left-0 h-[17rem] w-[14rem] overflow-hidden rounded-[2rem]">
                <Image src="/images/social/marka-kimligi.webp" alt="Marka kimliği ve tasarım çalışması" fill priority sizes="224px" className="object-cover" />
              </Reveal>
              <Reveal delay={500} className="absolute right-10 bottom-6 h-44 w-44 overflow-hidden rounded-full border-8 border-ink">
                <Image src="/images/work/portfolio-01.webp" alt="" fill sizes="176px" className="object-cover" />
              </Reveal>
              <SpinBadge className="absolute top-2 left-2 text-paper" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 lg:hidden" aria-hidden>
            {["/images/work/hali-konsept-1.webp", "/images/social/marka-kimligi.webp", "/images/work/portfolio-01.webp"].map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-line-dark pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-bold text-paper">{company.founded}&apos;den beri</span> · Sosyal medya · Web · Prodüksiyon ·
              Açık hava
            </p>
            <Link href="#hizmetler" className="inline-flex items-center gap-2 font-semibold text-paper hover:text-accent">
              Keşfet <span aria-hidden>↓</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmet şeridi */}
      <div className="bg-accent py-5 text-ink" aria-hidden>
        <Marquee duration={30}>
          {services.map((s) => (
            <span key={s.slug} className="display flex items-center text-3xl whitespace-nowrap sm:text-4xl">
              <span className="px-8">{s.title}</span>
              <span className="text-2xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Giriş */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 text-muted">Biz kimiz</p>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              Sizin her adımınızı planlar, <span className="relative inline-block">hedefe<span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-accent sm:h-4" /></span> ulaştırırız.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p>
              <strong className="text-ink">Cool Media</strong>, yerli ve global markalara uzun yıllar hizmet vermiş deneyimli
              fikir insanlarından oluşan, trendleri yakından takip eden ve yaratıcılıktan ödün vermeyen tam hizmet ajansıdır.
            </p>
            <p>
              İletişimin her gün arttığı ve markaların görünür olmasının zorlaştığı günümüzde; gerçek ihtiyaçlara hizmet eden,
              sürdürülebilir iletişim fikirleri bulur ve bunları yaratıcı, etkin uygulamalarla hayata geçiririz.
            </p>
            <div className="pt-2">
              <Button href="/hakkimizda" variant="ink">
                Hikâyemiz
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="container-x scroll-mt-24 pb-24 sm:pb-32">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Markanız için uçtan uca dijital ekosistem."
          className="mb-14"
        >
          <Button href="/hizmetler" variant="outline">
            Tüm hizmetler
          </Button>
        </SectionHeading>
        <ServiceList />
      </section>

      {/* Neden Cool Media + istatistik */}
      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Neden Cool Media?"
            title={
              <>
                Markanızın dijitaldeki başarısı <span className="text-accent">tesadüf değildir.</span>
              </>
            }
            text="Siz işinize odaklanın, biz markanızı dijitalin zirvesine taşıyalım. Gaziantep'teki işletmenizi ulusal ve küresel ölçekte görünür kılmak için stratejik reklam modelleri geliştiriyoruz."
          />
          <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="h-full rounded-3xl border border-line-dark p-8 transition-colors duration-500 hover:border-accent/60">
                  <span className="text-sm font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/60">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-20">
            <StatsBand />
          </div>
        </div>
      </section>

      {/* Çalışmalar */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading eyebrow="Seçili işler" title="Hayallerinizi gerçeğe dönüştürüyoruz." className="mb-14">
          <Button href="/calismalar" variant="outline">
            Tüm çalışmalar
          </Button>
        </SectionHeading>
        <FeaturedWorks />
      </section>

      {/* Süreç */}
      <section className="bg-paper-2 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Proje sürecimiz"
            title="Fikirden sonuca, altı net adım."
            text="Her projeye stratejik bir bakış açısıyla yaklaşır, süreci titizlikle planlarız. Zamanında teslim, yüksek kalite ve memnuniyet garantisiyle."
            className="mb-14"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Ekip */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading eyebrow="Ekibimizle tanışın" title="Alanında uzman, işine tutkulu bir ekip." className="mb-14">
          <Button href="/ekibimiz" variant="outline">
            Ekibimiz
          </Button>
        </SectionHeading>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 xl:grid-cols-6">
          {team.map((m, i) => (
            <li key={m.name} className="w-[72%] shrink-0 snap-start sm:w-[40%] lg:w-auto">
              <Reveal delay={i * 60}>
                <TeamCard m={m} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Sözler */}
      <section className="container-x pb-24 sm:pb-32">
        <ul className="grid gap-4 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <li key={q.author}>
              <Reveal delay={i * 80} className="h-full">
                <QuoteCard {...q} dark={i === 1} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Referanslar */}
      <section className="overflow-hidden border-y border-line bg-paper-2 py-20 sm:py-24">
        <div className="container-x mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4 text-muted">Referanslar</p>
            <h2 className="display text-4xl sm:text-5xl">Yüzlerce markayla beraber çalıştık.</h2>
          </div>
          <Button href="/referanslar" variant="outline">
            Tümünü gör
          </Button>
        </div>
        <ClientsMarquee />
      </section>

      {/* Blog */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading eyebrow="Blog" title="Dijital dünyadan notlar." className="mb-14">
          <Button href="/blog" variant="outline">
            Tüm yazılar
          </Button>
        </SectionHeading>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 80} className="h-full">
                <PostCard post={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* SSS */}
      <section className="container-x pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5 text-muted">Sık sorulanlar</p>
            <h2 className="display text-4xl sm:text-5xl">Aklınızdaki sorular.</h2>
            <p className="mt-6 text-muted">
              Yanıtını bulamadığınız bir soru mu var?{" "}
              <Link href="/iletisim" className="font-bold text-ink underline decoration-accent decoration-[3px] underline-offset-4">
                Bize yazın
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
