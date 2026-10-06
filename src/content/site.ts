// Tüm metinler ve görseller mevcut coolmedia.com.tr sitesinden aktarılmıştır.

export const company = {
  name: "Cool Media",
  legalName: "Cool Media Dijital Reklam ve Tasarım Ajansı",
  slogan: "Hayal et, cool'sun!",
  founded: 2017,
  url: "https://www.coolmedia.com.tr",
  email: "info@coolmedia.com.tr",
  phone: "+90 531 312 44 88",
  phoneHref: "tel:+905313124488",
  whatsapp: "https://wa.me/905313124488",
  address: "İç Kapı, Pancarlı, 58112 Sk. No: 2/1, 27000 Şehitkamil / Gaziantep",
  addressShort: "Şehitkamil, Gaziantep",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cool+Media+Pancarl%C4%B1+58112+Sk+%C5%9Eehitkamil+Gaziantep",
  mapsEmbed:
    "https://www.google.com/maps?q=Pancarl%C4%B1%2C+58112+Sk.+No%3A2%2C+27000+%C5%9Eehitkamil%2FGaziantep&output=embed",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/coolmediatr/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/coolmedia27" },
    { label: "Facebook", href: "https://www.facebook.com/coolmediatr/" },
    { label: "X", href: "https://x.com/coolmediatr" },
  ],
};

export const nav = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Çalışmalar", href: "/calismalar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Ekibimiz", href: "/ekibimiz" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
];

export const stats = [
  { value: 452, label: "Tamamlanan çalışma" },
  { value: 348, label: "Mutlu müşteri" },
  { value: 516, label: "Olumlu geri dönüş" },
  { value: 7, label: "Yıldır hizmetinizdeyiz", suffix: "+" },
];

export type Service = {
  slug: string;
  oldSlug: string;
  title: string;
  short: string;
  tagline: string;
  intro: string[];
  image: string;
  gallery: string[];
  features: { title: string; text: string }[];
  steps?: { title: string; text: string }[];
  closing?: { title: string; text: string[] };
  quote?: { text: string; author: string; role?: string };
};

export const services: Service[] = [
  {
    slug: "sosyal-medya-yonetimi",
    oldSlug: "gaziantep-sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    short:
      "Etkileşimi artıran, topluluk yaratan ve dijital dünyada farkındalık oluşturan stratejik sosyal medya çözümleri.",
    tagline: "Markanızın sesi biziz!",
    intro: [
      "Markanızın sosyal medyadaki başarısı, sadece paylaşım yapmaktan çok daha fazlasıdır. Gaziantep sosyal medya yönetimi sürecinde hedef kitlenizi analiz ediyor, etkileşimi yüksek içerikler üretiyor ve reklam bütçenizi en verimli şekilde yönetiyoruz.",
      "Instagram, Facebook ve LinkedIn gibi platformlarda profesyonel bir duruş sergilemeniz için stratejik yol haritaları oluşturuyoruz.",
    ],
    image: "/images/social/sosyal-medya-yonetimi.webp",
    gallery: [
      "/images/social/siradan-paylasimlar.webp",
      "/images/social/gorsel-video.webp",
      "/images/social/danismanlik.webp",
      "/images/social/reklam-pazarlama.webp",
    ],
    features: [
      {
        title: "Trendlerde yerinizi alın",
        text: "Dijital dünyadaki en yeni trendleri ve sosyal medya dinamiklerini markanız için stratejik bir güce dönüştürüyoruz. Sadece akımları takip etmeyin; sektörünüzde trendleri belirleyen taraf olun.",
      },
      {
        title: "Markalaşma stratejimizle öne çıkın",
        text: "Benzersiz kimliğinizi ortaya koyan, hedef kitlenize doğrudan dokunan stratejilerle markanızı rakiplerinizin önüne taşıyoruz. Sadece görünür değil, unutulmaz olun.",
      },
      {
        title: "Kurumsal kimlik oluşturun",
        text: "Markanızın duruşunu yansıtan, profesyonel ve akılda kalıcı bir kimlik tasarlıyoruz. İlk izleniminiz, kalıcı bir etkiye dönüşsün.",
      },
      {
        title: "Reklam ve içerik yönetimi",
        text: "Her mecrada tutarlı, yaratıcı ve stratejik içeriklerle dijital varlığınızı yönetiyor, etkileşimi satışa dönüştürüyoruz.",
      },
    ],
    steps: [
      {
        title: "Stratejik içerik planlama",
        text: "Marka kimliğinize uygun, dikkat çekici görsel ve metin tasarımları.",
      },
      {
        title: "Reklam ve kampanya yönetimi",
        text: "Minimum bütçe ile maksimum erişim sağlayan hedefleme stratejileri.",
      },
      {
        title: "Rakip ve sektör analizi",
        text: "Gaziantep ve Türkiye genelindeki rakiplerinizin önüne geçmenizi sağlayacak içgörüler.",
      },
      {
        title: "Detaylı raporlama",
        text: "Her ay sonunda performansınızı somut verilerle takip edin.",
      },
    ],
  },
  {
    slug: "web-tasarim",
    oldSlug: "web-design",
    title: "Web Tasarım",
    short:
      "Markanızın dijital vitrini için modern, hızlı ve mobil uyumlu web siteleri. Ziyaretçilerinizi müşteriye dönüştürün.",
    tagline: "Profesyonel web siteleri yapıyoruz.",
    intro: [
      "Cool Media olarak, sadece şık görünen değil; hızlı, kullanıcı dostu ve mobil uyumlu web siteleri tasarlıyoruz.",
      "Her detayda stratejik düşünerek, markanızın dijital dünyada güçlü bir izlenim bırakmasını sağlıyoruz. Size özel, modern ve dönüşüm odaklı çözümlerle profesyonelliği dijital vitrine taşıyoruz.",
    ],
    image: "/images/work/media-9.webp",
    gallery: [
      "/images/work/portfolio-08.webp",
      "/images/work/portfolio-06.webp",
      "/images/work/portfolio-01.webp",
      "/images/work/portfolio-07.webp",
    ],
    features: [
      {
        title: "Google SEO optimizasyonu",
        text: "Sitenizi SEO uyumlu hale getiriyor, arama motorlarında öne çıkmanızı sağlıyoruz.",
      },
      {
        title: "Kurumsal tasarım",
        text: "Güven veren, profesyonel bir dijital kimlik. Kurumunuza özel, prestijli ve kullanıcı dostu web siteleri tasarlıyoruz.",
      },
      {
        title: "Mobil uyumluluk",
        text: "Telefon, tablet ve bilgisayarda sorunsuz görünüm ve işlevsellik sunan responsive tasarım.",
      },
      {
        title: "Güvenlik",
        text: "SSL sertifikası ve diğer güvenlik önlemleri ile kullanıcı verilerinin korunması.",
      },
    ],
    closing: {
      title: "Sürekli satış yapan temsilciniz",
      text: [
        "İyi tasarlanmış bir web sitesi, markanızın dijital dünyadaki en güçlü ve sürekli satış yapan temsilcisidir.",
      ],
    },
    quote: {
      text: "Markanızın sahip olduğu iyi bir web sitesi yoksa potansiyelinizi hâlâ keşfetmemişsinizdir.",
      author: "Serkan Çalışkan",
      role: "Web Designer / Programmer",
    },
  },
  {
    slug: "fotografcilik",
    oldSlug: "photography",
    title: "Fotoğrafçılık",
    short:
      "Stüdyo ve dış mekân çekimleri, ürün ve konsept fotoğrafları. En kaliteli ekipmanlarla en iyi fotoğraf hizmeti.",
    tagline: "Fotoğraf, kelimelerle anlatılamayan anların sessiz tanığıdır.",
    intro: [
      "Bünyemizde bulunan uzman ekibimiz sayesinde en hızlı ve en kaliteli sonuçları siz değerli müşterilerimize sunuyoruz.",
      "Ürün, halı, mekân ve konsept çekimlerinde markanıza daha önce deneyimlemediği bir bakış açısı kazandırıyoruz.",
    ],
    image: "/images/work/hali-konsept-1.webp",
    gallery: [
      "/images/work/hali-konsept-2.webp",
      "/images/work/hali-urun.webp",
      "/images/work/portfolio-13.webp",
      "/images/work/portfolio-03.webp",
    ],
    features: [
      { title: "Yüksek çözünürlük", text: "Basılı ve dijital her mecraya uygun, detayı kaybetmeyen kareler." },
      { title: "Stüdyo & dış mekân", text: "Ürününüze ve hikâyenize en uygun ortamda profesyonel çekim." },
      { title: "Renk ve ışık ustalığı", text: "Photoshop ve Illustrator ile en zor koşullarda bile en yüksek kalite garantisi." },
      { title: "Markanıza özel yaklaşım", text: "Perspektif: markanıza daha önce deneyimlemediği bir bakış açısı kazandırın." },
    ],
  },
  {
    slug: "videografi",
    oldSlug: "videograpy",
    title: "Videografi",
    short:
      "Tanıtım filmleri, reklamlar, etkinlik ve sosyal medya videoları. Markanızı hareketle konuşturun.",
    tagline: "Anlat, etkili ol, hatırda kal.",
    intro: [
      "Videografi, video içeriklerinin planlanması, çekimi ve kurgulanması sürecidir. Tanıtım filmleri, reklamlar ve etkinlik videoları gibi görsel hikâyeler yaratmak için kullanılan profesyonel video üretim sanatıdır.",
      "Doğru senaryo, profesyonel çekim ve yaratıcı kurgu ile sadece bir video değil; iz bırakan bir deneyim sunar. İster ürün tanıtımı, ister kurumsal film, ister sosyal medya içeriği olsun — kaliteli bir video markanızın güvenilirliğini artırır.",
    ],
    image: "/images/work/media-8.webp",
    gallery: [
      "/images/work/media-13.webp",
      "/images/work/portfolio-26.webp",
      "/images/social/gorsel-video.webp",
      "/images/work/media-23.webp",
    ],
    features: [
      { title: "Güçlü ilk izlenim", text: "Kısa sürede dikkat çeker, markanın profesyonel duruşunu yansıtır." },
      { title: "Hikâye anlatımı", text: "Ürün, hizmet veya marka değerlerini etkileyici ve akılda kalıcı bir şekilde anlatır." },
      { title: "Etkileşim artışı", text: "Video içerikler sosyal medyada daha fazla izlenir, paylaşılır ve etkileşim sağlar." },
    ],
    steps: [
      { title: "Fikir & senaryo", text: "Markanızın karakterine uygun konsept ve senaryo geliştirme." },
      { title: "Prodüksiyon", text: "Profesyonel ekipmanla çekim aşaması." },
      { title: "Post-prodüksiyon", text: "Kurgu, montaj, renk ve hareketli grafikler." },
      { title: "Yayınlama & dağıtım", text: "Doğru mecrada, doğru formatta yayına hazır teslim." },
    ],
    closing: {
      title: "Durağanlığa meydan okuyun",
      text: [
        "Sıradan anlatımları geride bırakın, markanızı hareketle konuşturun. Videografi; duyguyu, mesajı ve etkileyiciliği tek bir akışta birleştirir.",
        "Hedef kitlenizin ilgisini çeken değil, onları harekete geçiren videolar üretiriz. Çünkü bazen bir dakikalık video, bin kelimeden daha fazlasını anlatır.",
      ],
    },
    quote: {
      text: "İyi bir fikir duyar, harika bir fikir konuşur, ama doğru fikir harekete geçirir.",
      author: "Yunus Emre Yıldırım",
    },
  },
  {
    slug: "acik-hava-reklamciligi",
    oldSlug: "acik-hava-reklamciligi",
    title: "Açık Hava Reklamcılığı",
    short:
      "Billboard, raket (CLP), dijital ekran, bina ve araç giydirme. Markanızı sokağın gücüyle buluşturun.",
    tagline: "Markanızı sokağın gücüyle buluşturun.",
    intro: [
      "Açık hava reklamcılığı, tüketicilerin ev dışındaki zamanlarında karşılaştıkları tüm reklam ve tanıtım faaliyetlerini kapsayan, geleneksel pazarlamanın en etkili kollarından biridir.",
      "Şehrin en işlek caddelerinden meydanlara, toplu taşıma araçlarından duraklara kadar insanların günlük rotaları üzerinde stratejik olarak konumlandırılan bu yöntem; billboard, raket (CLP), dijital ekran reklamları, bina ve araç giydirme gibi pek çok formatı içinde barındırır.",
    ],
    image: "/images/work/media-1.webp",
    gallery: [
      "/images/work/portfolio-05.webp",
      "/images/work/portfolio-09.webp",
      "/images/work/portfolio-07.webp",
      "/images/work/portfolio-08.webp",
    ],
    features: [
      {
        title: "7/24 kesintisiz görünürlük",
        text: "Televizyon veya internet reklamları gibi tek tuşla kapatılamaz veya atlanamaz. Markanız günün her saati hedef kitlenizin görüş alanındadır.",
      },
      {
        title: "Maksimum marka bilinirliği",
        text: "Dev boyutlu görseller ve yaratıcı tasarımlar markanızın prestijini artırır, zihinlerde kalıcı yer edinir.",
      },
      {
        title: "Stratejik ve bölgesel hedefleme",
        text: "Reklamlarınızı potansiyel müşterilerinizin en yoğun olduğu lokasyonlara konumlandırarak doğru zamanda doğru kişiye ulaşın.",
      },
      {
        title: "Maliyet etkinliği",
        text: "Bin kişiye ulaşım maliyeti (CPM) baz alındığında en geniş kitleye en hızlı ve ekonomik ulaşan reklam türlerinden biridir.",
      },
    ],
    closing: {
      title: "Şehrin ritmini yakalayın",
      text: [
        "Sadece reklam panoları tasarlamıyor; markanızın hikâyesini şehrin dokusuna işliyoruz. Kreatif tasarım ekibimiz ve stratejik konumlandırma uzmanlarımızla, mesajınızı en yüksek etkileşim sağlayacak noktalarda sokağın enerjisiyle buluşturuyoruz.",
        "Hedefimiz sadece görünür olmak değil, akılda kalmaktır.",
      ],
    },
    quote: {
      text: "Medya, mesajın ta kendisidir.",
      author: "Marshall McLuhan",
      role: "Medya kuramcısı",
    },
  },
  {
    slug: "promosyon-urunler",
    oldSlug: "promosyon-urunler",
    title: "Promosyon Ürünler",
    short:
      "Teknolojik ürünlerden yazım gereçlerine, ofis ve outdoor ürünlerine kadar markanıza özel promosyon çözümleri.",
    tagline: "Markanız her gün, her elde.",
    intro: [
      "Markanızı müşterilerinizin günlük hayatına taşıyan promosyon ürünlerini tasarımdan teslimata kadar tek elden yönetiyoruz.",
      "Kurumsal kimliğinize uygun baskı ve paketleme seçenekleriyle, akılda kalan ve gerçekten kullanılan ürünler hazırlıyoruz.",
    ],
    image: "/images/promo/kisisel.webp",
    gallery: [],
    features: [
      { title: "Teknolojik ürünler", text: "Powerbank, kulaklık, akıllı saat, hoparlör ve daha fazlası." },
      { title: "Yazım gereçleri", text: "Kalem setleri, defterler ve kurumsal kırtasiye ürünleri." },
      { title: "Ofis & iş ürünleri", text: "Masa düzenleyiciler, saatler, ajandalar ve hediye setleri." },
      { title: "Kişisel ürün & aksesuarlar", text: "Kutulu hediye setleri, cüzdan, kartlık ve aksesuarlar." },
      { title: "Outdoor & yaşam ürünleri", text: "Termoslar, kupalar, şemsiyeler, şapkalar ve fenerler." },
    ],
  },
  {
    slug: "dijital-studyo",
    oldSlug: "digital-studio",
    title: "Dijital Stüdyo",
    short:
      "Logo, kurumsal kimlik, web arayüzleri ve çok daha fazlası. Cool Media Tasarım Stüdyosu ile farkınızı tasarlayın.",
    tagline: "Yaratıcılığın sınırlarını zorlayan tasarımlar.",
    intro: [
      "Yaratıcılığın sınırlarını zorlayan, markanız için özgün ve etkileyici tasarımlar üretiyoruz. Her detayda estetiği ve fonksiyonelliği buluşturarak, dijital ve basılı dünyada kalıcı izler bırakacak çözümler sunuyoruz.",
      "Müşteri memnuniyetini en üst seviyede tutmak işimizin merkezinde yer alır. Sadece iş değil; güven ve uzun vadeli iş birlikleri inşa ediyoruz.",
    ],
    image: "/images/social/marka-kimligi.webp",
    gallery: [
      "/images/social/one-stop-creative.webp",
      "/images/social/guclu-tasarimlar.webp",
      "/images/work/portfolio-18.webp",
      "/images/work/portfolio-04.webp",
    ],
    features: [
      {
        title: "Fikir ve finansman",
        text: "Büyük işler güçlü fikirlerle başlar. Yaratıcı projelerinizi stratejik bakışla şekillendiriyor, doğru yatırım planlarıyla hayata geçiriyoruz.",
      },
      {
        title: "Çalışma süreci",
        text: "İhtiyaçlarınızı dinler, tasarım, üretim ve uygulama aşamalarında şeffaf iletişimle ilerler, her detayı sizinle birlikte şekillendiririz.",
      },
      {
        title: "Nihai ürün",
        text: "Stratejinin, tasarımın ve emeğin kusursuz birleşimi: hedef kitlenizde iz bırakan, sizi bir adım öne taşıyan bir sonuç.",
      },
      {
        title: "Sonuç & hedef",
        text: "Sadece bir çıktı değil, ölçülebilir başarı ve somut değer. Hedeflerinizi kendi hedefimiz bilir, birlikte ulaşılabilir kılarız.",
      },
    ],
    quote: {
      text: "Reklama ara veren bir şirket, saati durdurarak zamandan tasarruf etmeye çalışıyordur.",
      author: "Henry Ford",
    },
  },
];

export const promoCategories = [
  { title: "Teknolojik Ürünler", image: "/images/promo/teknolojik.webp" },
  { title: "Yazım Gereçleri", image: "/images/promo/yazim.webp" },
  { title: "Ofis & İş Ürünleri", image: "/images/promo/ofis.webp" },
  { title: "Kişisel Ürün & Aksesuarlar", image: "/images/promo/kisisel.webp" },
  { title: "Outdoor & Yaşam Ürünleri", image: "/images/promo/outdoor.webp" },
];

export const pillars = [
  {
    title: "Markalaşma",
    text: "Markanızın ruhunu ortaya çıkarıyor, fark yaratan kimliğini inşa ediyoruz. Güçlü bir imaj ve unutulmaz bir hikâyeyle markanızı zirveye taşıyoruz.",
  },
  {
    title: "Reklam Planlaması",
    text: "Doğru zamanda, doğru mecrada, hedef kitlenize özel stratejiler. Veri odaklı planlama ve yaratıcı dokunuşlarla reklam yatırımınızın karşılığını maksimize edin.",
  },
  {
    title: "Sosyal Medya",
    text: "Etkileşimi artıran, topluluk yaratan ve dijital dünyada farkındalık oluşturan stratejik sosyal medya çözümleri sunuyoruz.",
  },
  {
    title: "Web Tasarım",
    text: "Markanızın dijital vitrini için modern, şık ve kullanıcı dostu tasarımlar. Hızlı ve mobil uyumlu sitelerle ziyaretçilerinizi müşteriye dönüştürün.",
  },
];

export const process = [
  { title: "Fikir oluşturma", text: "Ajansımız markanıza en yakışan fikri sizin için bulur." },
  { title: "Planlama", text: "En kısa sürede teslim için detaylı bir zaman planlaması yapılır." },
  { title: "Ürün geliştirme", text: "Planlanan sürece uyularak istekleriniz en kaliteli şekilde hazırlanır." },
  { title: "Ürün teslimi", text: "Sürece harfiyen uyularak hazırlanan ürünleriniz en kısa sürede teslim edilir." },
  { title: "Müşteri revizeleri", text: "Teslimden sonra isteğinize yönelik ürün üzerinde güncellemeler yapılır." },
  { title: "Hedef ve sonuç", text: "Markanızın amacına yönelik en iyi sonucu teslim eder, memnuniyetinizi garanti altına alırız." },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  x?: string;
  hiring?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Muhammed Özcan",
    role: "Brand Director · Co-Founder",
    image: "/images/team/muhammed-ozcan.webp",
    instagram: "https://www.instagram.com/1muhammedozcan/",
    linkedin: "https://www.linkedin.com/in/1muhammedozcan/",
    x: "https://x.com/muhammedozcan27",
  },
  {
    name: "İbrahim Aydemir",
    role: "Creative Director",
    image: "/images/team/ibrahim-aydemir.webp",
    instagram: "https://www.instagram.com/ibrhm_aydemir/",
    linkedin: "https://www.linkedin.com/in/ibrahim-aydemir-785810365/",
  },
  {
    name: "Serkan Çalışkan",
    role: "Web Designer / Programmer",
    image: "/images/team/serkan-caliskan.webp",
    instagram: "https://www.instagram.com/serkancaliskan111/",
    linkedin: "https://www.linkedin.com/in/serkan-%C3%A7al%C4%B1%C5%9Fkan-a8b321342/",
  },
  {
    name: "Samet Baş",
    role: "Web Designer / Programmer",
    image: "/images/team/samet-bas.webp",
    instagram: "https://www.instagram.com/_samet.b",
  },
  {
    name: "Simge Nur Kaya",
    role: "Graphic Designer",
    image: "/images/team/simge-nur-kaya.webp",
    instagram: "https://www.instagram.com/kayanursimge/",
    linkedin: "https://www.linkedin.com/in/kayanursimge/",
  },
  {
    name: "Aranıyor",
    role: "Videographer / Video Editör",
    image: "/images/team/araniyor.webp",
    hiring: true,
  },
];

export const clients = [
  { name: "Metro", logo: "/images/clients/metro.png" },
  { name: "Valentis", logo: "/images/clients/valentis.png" },
  { name: "Soft İplik", logo: "/images/clients/soft-iplik.png" },
  { name: "İpek Halı", logo: "/images/clients/ipek-hali.png" },
  { name: "Alpin Carpet", logo: "/images/clients/alpin-carpet.png" },
  { name: "Omega Carpet", logo: "/images/clients/omega-carpet.png" },
  { name: "Efor Carpet", logo: "/images/clients/efor-carpet.png" },
  { name: "Bambi Yatak", logo: "/images/clients/bambi.png" },
  { name: "Mussan Orman Ürünleri", logo: "/images/clients/mussan.png" },
  { name: "Gaziantep Kavaklık Rotary Kulübü", logo: "/images/clients/kavaklik-rotary.png" },
  { name: "Lasparsan", logo: "/images/clients/lasparsan.png" },
  { name: "Prof Sentetik", logo: "/images/clients/prof-sentetik.png" },
  { name: "Ceremony", logo: "/images/clients/ceremony.png" },
  { name: "Perelma Home Design", logo: "/images/clients/perelma.png" },
  { name: "Ansar Gallery", logo: "/images/clients/ansar-gallery.png" },
  { name: "Fadl Mohammed Binshihoon & Partners", logo: "/images/clients/fadl-binshihoon.png" },
  { name: "Karem Yumurta", logo: "/images/clients/karem-yumurta.png" },
  { name: "Fancy Gülenler", logo: "/images/clients/fancy-gulenler.png" },
  { name: "Kasımpati", logo: "/images/clients/kasimpati.png" },
  { name: "Sakıp Usta", logo: "/images/clients/sakip-usta.png" },
  { name: "Mikel Coffee", logo: "/images/clients/mikel-coffee.png" },
];

export const achievements = [
  {
    title: "Mühendislik Topluluğu",
    text: "Ajansımız Gaziantep Üniversitesi tarafından düzenlenen etkinlikte yer aldı.",
    image: "/images/events/muhendislik-toplulugu.webp",
  },
  {
    title: "Rotary Etkinliği",
    text: "Gaziantep Belediyesinin katkılarıyla düzenlenen Rotary etkinliğinde ajansımız etkin rol oynadı.",
    image: "/images/events/rotary.webp",
  },
  {
    title: "Dünyadan Kadın Sesleri",
    text: "Dünyadan Kadın Sesleri adıyla düzenlenen etkinlikte ajansımız da yer aldı.",
    image: "/images/events/dunyadan-kadin-sesleri.webp",
  },
  {
    title: "Söğüt Okulu",
    text: "Geleceğimiz olan çocuklar için yapılan okula ajansımız medya sponsoru oldu.",
    image: "/images/events/sogut-okulu.webp",
  },
];

export type Work = {
  title: string;
  category: string;
  image: string;
  tall?: boolean;
};

export const works: Work[] = [
  { title: "Detay Halı Çekimi", category: "Fotoğraf", image: "/images/work/hali-konsept-1.webp" },
  { title: "Halı Çekiminde En İyisiyiz", category: "Fotoğraf", image: "/images/work/hali-urun.webp" },
  { title: "Görsellik ve Bilginin Birleşimi", category: "Fotoğraf", image: "/images/work/hali-konsept-2.webp" },
  { title: "Şıklık Profesyonellikle Daha Net", category: "Fotoğraf", image: "/images/work/hali-detay.webp" },
  { title: "Marka Kimliği ve Tasarım", category: "Sosyal Medya", image: "/images/social/marka-kimligi.webp" },
  { title: "Sosyal Medya Yönetimi", category: "Sosyal Medya", image: "/images/social/sosyal-medya-yonetimi.webp" },
  { title: "Danışmanlık ve Eğitim", category: "Sosyal Medya", image: "/images/social/danismanlik.webp" },
  { title: "Sıradan Paylaşımlar Bitiyor", category: "Sosyal Medya", image: "/images/social/siradan-paylasimlar.webp" },
  { title: "Spray Can", category: "Tasarım", image: "/images/work/portfolio-05.webp" },
  { title: "Blue Peach", category: "Fotoğraf", image: "/images/work/portfolio-09.webp" },
  { title: "White Chair", category: "Fotoğraf", image: "/images/work/portfolio-11.webp" },
  { title: "Kodak 200", category: "Tasarım", image: "/images/work/portfolio-03.webp" },
  { title: "Cup Mockup", category: "Tasarım", image: "/images/work/portfolio-04.webp" },
  { title: "Abstract Ring", category: "Tasarım", image: "/images/work/portfolio-01.webp" },
  { title: "Polkadot Brochure", category: "Tasarım", image: "/images/work/portfolio-06.webp" },
  { title: "Modern Art", category: "Tasarım", image: "/images/work/portfolio-08.webp" },
  { title: "Commercials", category: "Reklam", image: "/images/work/portfolio-07.webp" },
  { title: "Monstera", category: "Fotoğraf", image: "/images/work/portfolio-13.webp" },
  { title: "Cubes", category: "Tasarım", image: "/images/work/portfolio-18.webp" },
  { title: "Doubt", category: "Tasarım", image: "/images/work/portfolio-28.webp", tall: true },
  { title: "Lamp", category: "Fotoğraf", image: "/images/work/portfolio-21.webp", tall: true },
  { title: "Move", category: "Reklam", image: "/images/work/portfolio-26.webp", tall: true },
];

export const quotes = [
  {
    text: "Reklamın amacı sanat yapmak değil, satmaktır.",
    author: "David Ogilvy",
    role: "Reklamcılığın babası",
    image: "/images/quotes/david-ogilvy.webp",
  },
  {
    text: "Görünmeyen marka, var olmayan markadır — medya ajansı, görünür olmanın en güçlü yoludur.",
    author: "İbrahim Aydemir",
    role: "Creative Director, Cool Media",
    image: "/images/team/ibrahim-aydemir.webp",
  },
  {
    text: "Reklamcılık, markaların görünürlüğünü artırır, hedef kitleyle bağ kurar ve satışları destekler. Medya ajansları bu süreci strateji ve yaratıcılıkla yönlendirerek markaların büyümesine katkı sağlar.",
    author: "Muhammed Özcan",
    role: "Co-Founder, Cool Media",
    image: "/images/team/muhammed-ozcan-portre.webp",
  },
];

export const faqs = [
  {
    q: "Cool Media nedir?",
    a: "Cool Media (CoolMedia), 2017'den beri Gaziantep merkezli tam hizmet dijital reklam ve tasarım ajansıdır. Yerli ve global markalara web tasarım, sosyal medya, açık hava reklamcılığı ve video prodüksiyon hizmetleri sunar.",
  },
  {
    q: "Cool Media nerede?",
    a: "Şehitkamil / Gaziantep. Adres: İç Kapı, Pancarlı, 58112 Sk. No: 2/1, 27000 Şehitkamil/Gaziantep. Telefon: 0531 312 44 88.",
  },
  {
    q: "Cool Media hangi hizmetleri sunuyor?",
    a: "Web tasarım, sosyal medya yönetimi, açık hava reklamcılığı, promosyon ürünler, fotoğraf ve video prodüksiyon, marka kimliği ve tasarım stüdyosu hizmetleri.",
  },
  {
    q: "Sadece Gaziantep'teki işletmelerle mi çalışıyorsunuz?",
    a: "Hayır. Gaziantep'teki işletmenizi ulusal ve küresel ölçekte görünür kılmak için çalışıyoruz; Türkiye genelinden ve yurt dışından markalarla da iş birliği yapıyoruz.",
  },
];
