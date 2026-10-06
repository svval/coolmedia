# Cool Media — Web Sitesi Yeniden Tasarımı

Gaziantep merkezli dijital reklam ve tasarım ajansı **Cool Media** ([coolmedia.com.tr](https://www.coolmedia.com.tr)) için baştan tasarlanmış kurumsal web sitesi. Tüm metinler, görseller, ekip bilgileri, referanslar ve blog yazıları mevcut siteden aktarılmıştır.

## Teknolojiler

- **Next.js 16** (App Router, Turbopack, Cache Components) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- `next/image` ile otomatik AVIF/WebP optimizasyonu, `next/font` ile Urbanist yazı tipi
- Harici UI/animasyon kütüphanesi yok — animasyonlar IntersectionObserver + CSS ile

## Tasarım kararları

- **Görsel dil:** Ajansın fotoğraf arşivi büyük ölçüde siyah-beyaz ve minimal; sosyal medya görselleri sarı / siyah / beyaz. Site bu üç renk üzerine kurulu: mürekkep siyahı `#0c0c0d`, kırık beyaz `#f4f2ee` ve vurgu sarısı `#f7c844`.
- **Tipografi:** Logodaki "kalın _cool_ / ince _media_" kontrastı, Urbanist'in 800 ve 200 ağırlıklarıyla yazı olarak yeniden kuruldu (PNG logo yerine her boyutta keskin).
- **Bilgi mimarisi:** Eski sitedeki 15 dağınık sayfa sadeleştirildi: Hizmetler altında 7 hizmet sayfası, Konsept Fotoğraflar → Çalışmalar, Başarılarımız → Hakkımızda.
- **Erişilebilirlik:** Semantik HTML, "içeriğe geç" bağlantısı, klavye ile açılan menüler, `prefers-reduced-motion` desteği, JS kapalıyken de görünen içerik.

## Sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Hero, hizmetler, neden Cool Media, istatistikler, seçili işler, süreç, ekip, referanslar, blog, SSS |
| `/hizmetler` · `/hizmetler/[slug]` | 7 hizmet: sosyal medya, web tasarım, fotoğraf, video, açık hava, promosyon, dijital stüdyo |
| `/calismalar` | Kategori filtreli portfolyo |
| `/hakkimizda` | Hikâye, yaklaşım, rakamlar, süreç, başarılar / sosyal sorumluluk |
| `/ekibimiz` | Ekip ve sosyal medya bağlantıları |
| `/referanslar` | 21 marka logosu |
| `/blog` · `/blog/[slug]` | 11 yazı (WordPress'ten aktarıldı) |
| `/iletisim` | Form (e-posta / WhatsApp), iletişim kanalları, harita |

## SEO

- Sayfa bazlı `metadata`, canonical, Open Graph görseli (`opengraph-image.tsx`)
- `sitemap.xml`, `robots.txt`, schema.org `ProfessionalService` ve `BlogPosting` JSON-LD
- **Eski WordPress adresleri 308 ile yeni sayfalara yönlendirilir** (`/web-design` → `/hizmetler/web-tasarim`, eski blog yolları → `/blog/...` vb.), böylece mevcut arama sıralamaları korunur.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run lint
```

## Proje yapısı

```
src/
  app/          sayfalar, sitemap, robots, OG görseli
  components/   Header, Footer, bölüm bileşenleri, form, animasyon yardımcıları
  content/      site.ts (tüm site metinleri), posts.ts (blog yazıları)
public/images/  optimize edilmiş görseller (WebP)
```

İçerik güncellemek için yalnızca `src/content/` altındaki dosyaları düzenlemek yeterlidir.

## Not

İletişim formu bir sunucu/e-posta servisine bağlı değildir; mesajı ziyaretçinin e-posta uygulamasında veya WhatsApp'ta hazırlar. Gerçek kullanımda Resend, Formspree vb. bir servis kolayca eklenebilir.
