import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col items-start justify-center pt-32 pb-20">
      <p className="eyebrow mb-6 text-muted">404 · Sayfa bulunamadı</p>
      <h1 className="display text-[clamp(3rem,10vw,8rem)]">
        Bu sayfa <span className="text-accent-deep">kaybolmuş.</span>
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted">
        Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Gürültüde kaybolmayın — ana sayfadan devam edin.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="ink">
          Ana sayfa
        </Button>
        <Button href="/iletisim" variant="outline">
          İletişim
        </Button>
      </div>
    </section>
  );
}
