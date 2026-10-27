import type { Locale } from './site';

export type BlogPost = {
  slug: string;
  locale: Locale;
  hreflangPair: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kw: string;
  date: string;
  dateDisplay: string;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  breadcrumbName: string;
  excerpt: string;
  relatedTreatmentSlug?: string;
  relatedCitySlug?: string;
  body: { type: 'p' | 'h2' | 'ul' | 'table'; text?: string; items?: string[]; rows?: { label: string; value: string }[]; caption?: string }[];
  faq: { q: string; a: string }[];
  externalLinks?: { url: string; anchor: string; context: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'rhinoplasty-in-iran-cost',
    locale: 'en',
    hreflangPair: 'tr/blog/iranda-burun-estetigi-fiyatlari',
    title: 'Rhinoplasty in Iran: Cost, Clinics & What Foreign Patients Should Know (2026)',
    metaTitle: 'Rhinoplasty in Iran Cost 2026 | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Rhinoplasty in Iran cost from USD 1,000. Clinics, recovery and surgeon selection in Urmia with Akay Travel. Call +98 44 3346 5524.',
    h1: 'Rhinoplasty in Iran: Cost, Clinics & What Foreign Patients Should Know (2026)',
    kw: 'rhinoplasty in Iran cost',
    date: '2026-02-15',
    dateDisplay: '15 February 2026',
    author: 'Akay Travel Medical Team',
    featuredImage: '/images/blog-rhinoplasty.svg',
    featuredImageAlt: 'Rhinoplasty consultation in an Iranian clinic',
    breadcrumbName: 'Rhinoplasty in Iran Cost',
    excerpt:
      'A practical 2026 guide to rhinoplasty in Iran: real USD prices, what is included, recovery time and how to choose a surgeon in Urmia.',
    relatedTreatmentSlug: 'cosmetic-surgery-urmia',
    relatedCitySlug: 'urmia-medical-tourism',
    body: [
      {
        type: 'p',
        text: 'Iran is one of the most cost-effective destinations in the world for rhinoplasty, with experienced surgeons and modern clinics concentrated in cities like Urmia, Tehran and Shiraz. This guide gives you real 2026 prices, explains what is included, and walks you through choosing a surgeon and planning your trip. If you are considering <a href="/en/treatments/cosmetic-surgery-urmia/" class="text-primary-700 font-medium underline hover:text-primary-800">cosmetic surgery in Urmia</a>, this is the practical starting point.',
      },
      { type: 'h2', text: 'Rhinoplasty in Iran cost: the 2026 picture' },
      {
        type: 'p',
        text: 'The headline figure patients search for is straightforward: rhinoplasty in Iran starts at around USD 1,000 and rarely exceeds USD 1,800 for a primary procedure in an accredited clinic. That typically includes surgeon fees, anaesthesia, the operating theatre and one follow-up before departure. By comparison, the same procedure in Istanbul or Warsaw usually costs between USD 2,500 and USD 4,500.',
      },
      {
        type: 'table',
        caption: 'Indicative rhinoplasty costs in Urmia, 2026 (USD)',
        rows: [
          { label: 'Primary rhinoplasty (closed)', value: '1,000 – 1,400' },
          { label: 'Primary rhinoplasty (open)', value: '1,200 – 1,600' },
          { label: 'Revision rhinoplasty', value: '1,800 – 3,000' },
          { label: 'Tip plasty (tip only)', value: '700 – 1,100' },
          { label: 'Septorhinoplasty (breathing + shape)', value: '1,300 – 1,800' },
        ],
      },
      {
        type: 'p',
        text: 'Revision surgery is more expensive because it corrects a previous procedure and often requires cartilage grafting. If you need septal work for breathing, the combined septorhinoplasty is only slightly more than a cosmetic-only closed approach.',
      },
      { type: 'h2', text: 'What is included — and what is not' },
      {
        type: 'ul',
        items: [
          'Surgeon and anaesthesiologist fees',
          'Operating theatre and recovery room',
          'Pre-operative blood tests and ECG',
          'Splint, nasal packing and post-op medications',
          'One follow-up review before you fly home',
        ],
      },
      {
        type: 'p',
        text: 'Not included are your flights, hotel and airport transfers, though Akay Travel packages these as part of your overall coordination. Compression garments are rarely needed for rhinoplasty, but any prescribed painkillers for home use are supplied by the clinic at cost.',
      },
      { type: 'h2', text: 'Recovery and how long to stay' },
      {
        type: 'p',
        text: 'Plan to stay 8–10 days in Urmia after surgery. The splint is removed around day 7, and the surgeon will want to inspect the result and clear you to fly before you leave. Swelling peaks at 48–72 hours and subsides noticeably by the end of the first week, though subtle swelling can persist for months.',
      },
      {
        type: 'p',
        text: 'Most patients feel well enough to walk around the city gently by day 4–5, but you should avoid flights, strenuous activity and direct sun for the first week. We arrange a quiet hotel near the clinic so your follow-up visits are short and stress-free.',
      },
      { type: 'h2', text: 'Choosing a surgeon' },
      {
        type: 'p',
        text: 'The single most important decision in rhinoplasty is the surgeon. We share your photos and goals with a surgeon whose primary focus is nasal surgery, and we provide their credentials and before-and-after examples before you commit. Look for a surgeon who performs rhinoplasty regularly, can show consistent natural-looking results, and explains the realistic outcome for your specific nasal anatomy.',
      },
      {
        type: 'p',
        text: 'If you want to understand the city and its healthcare infrastructure before deciding, read our <a href="/en/cities/urmia-medical-tourism/" class="text-primary-700 font-medium underline hover:text-primary-800">medical tourism in Urmia</a> guide for a broader overview.',
      },
      { type: 'h2', text: 'Visa and travel note' },
      {
        type: 'p',
        text: 'Most international patients need a medical visa for Iran. Akay Travel arranges the invitation letter from your treating clinic and guides you through the application. For patients travelling overland from Turkey, the Gürbulaz–Bazargan crossing is the most common route, with a private transfer to Urmia of about 4–5 hours.',
      },
      {
        type: 'p',
        text: 'When you are ready to move from research to action, you can <a href="/en/contact/" class="text-primary-700 font-medium underline hover:text-primary-800">book a consultation with Akay Travel</a> and we will prepare a written quote with no obligation.',
      },
    ],
    faq: [
      {
        q: 'Is rhinoplasty in Iran safe for foreign patients?',
        a: 'Yes, when performed in an accredited clinic by an experienced surgeon. We vet every partner surgeon and arrange bilingual support so you understand each step of the process.',
      },
      {
        q: 'How long before I see the final result?',
        a: 'Most swelling resolves within 6–12 months, with the final shape visible around the one-year mark. The splint is removed at day 7 and you will look presentable within two weeks.',
      },
      {
        q: 'What if I need a revision later?',
        a: 'Revision rates for primary rhinoplasty are typically 5–10%. We clarify your surgeon’s revision policy in writing before you travel, so any future correction is handled transparently.',
      },
    ],
    externalLinks: [
      {
        url: 'https://www.hotelurmia.ir/hotels/jahangardi-urmia',
        anchor: 'Jahangardi Hotel Urmia',
        context: 'For accommodation, we recommend Jahangardi Hotel Urmia — a budget-friendly option close to the city’s clinics.',
      },
    ],
  },
  {
    slug: 'ivf-treatment-in-iran-cost',
    locale: 'en',
    hreflangPair: 'tr/blog/iranda-tup-bebek-fiyatlari',
    title: 'IVF Treatment in Iran: Real Costs, Success Rates & Patient Guide',
    metaTitle: 'IVF Treatment in Iran Cost 2026 | Akay Travel +98 44 3346 5524',
    metaDescription:
      'IVF treatment in Iran cost from USD 2,200. Success factors, documents and stay length with Akay Travel. Call +98 44 3346 5524.',
    h1: 'IVF Treatment in Iran: Real Costs, Success Rates & Patient Guide',
    kw: 'IVF treatment in Iran cost',
    date: '2026-02-20',
    dateDisplay: '20 February 2026',
    author: 'Akay Travel Medical Team',
    featuredImage: '/images/blog-ivf.svg',
    featuredImageAlt: 'IVF laboratory with embryologist at work',
    breadcrumbName: 'IVF Treatment in Iran Cost',
    excerpt:
      'A 2026 patient guide to IVF in Iran: real cost breakdown, success factors, required documents and how long you need to stay.',
    relatedTreatmentSlug: 'fertility-ivf-urmia',
    relatedCitySlug: 'tabriz-medical-tourism',
    body: [
      {
        type: 'p',
        text: 'Iran has quietly become one of the most competitive destinations for IVF, with modern embryology laboratories, experienced reproductive endocrinologists and prices that make multiple cycles feasible for many couples. This guide covers real 2026 costs, the factors that affect success and the practical logistics of treatment in Urmia and Tabriz. For the treatment itself, start with our overview of <a href="/en/treatments/fertility-ivf-urmia/" class="text-primary-700 font-medium underline hover:text-primary-800">fertility and IVF treatment in Urmia</a>.',
      },
      { type: 'h2', text: 'IVF treatment in Iran cost: a 2026 breakdown' },
      {
        type: 'p',
        text: 'A standard IVF cycle in Iran starts at around USD 2,200, with ICSI adding USD 400–600 and medication typically USD 600–1,200 depending on your protocol and ovarian response. This is roughly a third of the all-in cost in Turkey and a quarter of private clinic pricing in Western Europe.',
      },
      {
        type: 'table',
        caption: 'Indicative IVF costs in Urmia and Tabriz, 2026 (USD)',
        rows: [
          { label: 'IVF cycle (standard, clinic fees)', value: '2,200 – 3,000' },
          { label: 'ICSI (microinjection)', value: '+ 400 – 600' },
          { label: 'Medication (stimulation)', value: '600 – 1,200' },
          { label: 'Frozen embryo transfer', value: '700 – 1,000' },
          { label: 'PGT-A (genetic testing)', value: '900 – 1,400' },
        ],
      },
      {
        type: 'p',
        text: 'The largest variable is medication. A high responder may need more gonadotropin, while a low responder might move to a different protocol. We obtain a written estimate from your clinic after the initial consultation so you know the full figure before committing.',
      },
      { type: 'h2', text: 'What drives success rates' },
      {
        type: 'ul',
        items: [
          'Female age — under 35 has the highest success, declining gradually after 38',
          'Ovarian reserve — AMH and antral follicle count guide the protocol',
          'Sperm quality — severe male factor may indicate ICSI',
          'Embryology lab quality — modern equipment and experienced embryologists',
          'Number of cycles — cumulative success rises across 2–3 cycles',
        ],
      },
      {
        type: 'p',
        text: 'Our partner clinics report clinical pregnancy rates broadly in line with European averages for comparable age groups. We share clinic-specific data during your consultation so you can make an informed decision.',
      },
      { type: 'h2', text: 'Documents you need to bring' },
      {
        type: 'ul',
        items: [
          'Recent hormone panel: AMH, FSH, LH, oestradiol, TSH',
          'Antral follicle count ultrasound (within 6 months)',
          'Sperm analysis (within 3 months)',
          'Hysterosalpingography or saline sonography report',
          'Copy of passports for both partners',
        ],
      },
      {
        type: 'p',
        text: 'If any test is missing, we can arrange it locally in Urmia or Tabriz before your stimulation starts, but having results in advance shortens your stay.',
      },
      { type: 'h2', text: 'How long you need to stay' },
      {
        type: 'p',
        text: 'A full fresh IVF cycle typically requires 18–21 days in Iran: 10–14 days of stimulation, egg retrieval, 3–5 days of embryo culture, transfer and then 7–10 days of rest before a pregnancy test. Some patients choose to do the stimulation at home and travel only for retrieval and transfer, but this requires close coordination between your home doctor and the Iranian clinic.',
      },
      {
        type: 'p',
        text: 'For patients who want to compare two cities, our <a href="/en/cities/tabriz-medical-tourism/" class="text-primary-700 font-medium underline hover:text-primary-800">medical tourism in Tabriz</a> guide covers the teaching-hospital fertility centre there, which is a regional referral hub for complex cases.',
      },
      { type: 'h2', text: 'Next steps' },
      {
        type: 'p',
        text: 'When you are ready, <a href="/en/contact/" class="text-primary-700 font-medium underline hover:text-primary-800">contact Akay Travel</a> with your medical summary and recent tests. We will match you with a clinic, return a written estimate and coordinate your visa, hotel and transfer so you can focus on the treatment itself.',
      },
    ],
    faq: [
      {
        q: 'Can I do stimulation at home and travel only for retrieval?',
        a: 'Yes, with close coordination between your home doctor and the Iranian clinic. We help set up that communication, but a full in-country cycle usually gives the best control.',
      },
      {
        q: 'What is the age limit for IVF in Iran?',
        a: 'Most clinics treat patients up to age 45 with their own eggs, subject to ovarian reserve. Donor egg IVF has different criteria and is arranged case by case.',
      },
      {
        q: 'Are multiple pregnancies common?',
        a: 'Iranian clinics generally transfer a single embryo to reduce multiple-pregnancy risk, in line with current international practice. Your doctor will discuss the optimal number for your case.',
      },
    ],
    externalLinks: [
      {
        url: 'https://tourviza.ir/گردشگری-پزشکی-ارومیه/',
        anchor: 'Urmia medical tourism guide',
        context: 'For a broader overview of Urmia’s healthcare infrastructure and cross-border patient services, see this Urmia medical tourism guide on Tourviza.',
      },
    ],
  },
  {
    slug: 'iranda-tup-bebek-fiyatlari',
    locale: 'tr',
    hreflangPair: 'en/blog/ivf-treatment-in-iran-cost',
    title: "İran'da Tüp Bebek Fiyatları 2026: Urmia ve Tebriz Karşılaştırması",
    metaTitle: 'İran Tüp Bebek Fiyatları 2026 | Akay Travel +98 44 3346 5524',
    metaDescription:
      "İran'da tüp bebek fiyatları 2.200 USD'den başlıyor. Urmia ve Tebriz karşılaştırması, belgeler ve kalış süresi. WhatsApp +98 914 340 3431.",
    h1: "İran'da Tüp Bebek Fiyatları 2026: Urmia ve Tebriz Karşılaştırması",
    kw: "İran'da tüp bebek fiyatları",
    date: '2026-02-22',
    dateDisplay: '22 Şubat 2026',
    author: 'Akay Travel Medical Team',
    featuredImage: '/images/blog-ivf.svg',
    featuredImageAlt: "İran'da tüp bebek laboratuvarında embriyolog",
    breadcrumbName: 'İran Tüp Bebek Fiyatları',
    excerpt:
      "2026 İran tüp bebek fiyatları: Urmia ve Tebriz karşılaştırması, Türkiye ile maliyet farkı, gerekli belgeler ve kalış süresi.",
    relatedTreatmentSlug: 'urmia-tup-bebek',
    relatedCitySlug: 'urmia-saglik-turizmi',
    body: [
      {
        type: 'p',
        text: 'İran, son yıllarda tüp bebek tedavisi için en rekabetçi destinasyonlardan biri haline geldi; modern embriyoloji laboratuvarları, deneyimli üreme endokrinologları ve çiftlerin birden fazla döngü denemesini mümkün kılan fiyatlar sunuyor. Bu rehber, 2026 gerçek fiyatlarını, başarıyı etkileyen faktörleri ve Urmia ile Tebriz arasındaki pratik farkları ele alır. Tedavinin kendisi için <a href="/tr/tedaviler/urmia-tup-bebek/" class="text-primary-700 font-medium underline hover:text-primary-800">Urmia tüp bebek tedavisi</a> sayfamızdan başlayabilirsiniz.',
      },
      { type: 'h2', text: "İran'da tüp bebek fiyatları: 2026 dökümü" },
      {
        type: 'p',
        text: 'İran’da standart bir IVF döngüsü yaklaşık 2.200 USD’den başlar; ICSI 400–600 USD ekler ve ilaçlar protokole ve yumurtalık yanıtına göre tipik olarak 600–1.200 USD arasındadır. Bu, Türkiye’deki maliyetin kabaca üçte biri ve Batı Avrupa’daki özel klinik fiyatlarının dörtte biri kadardır.',
      },
      {
        type: 'table',
        caption: 'Urmia ve Tebrizde gösterge niteliğinde tüp bebek fiyatları, 2026 (USD)',
        rows: [
          { label: 'IVF döngüsü (standart, klinik ücretleri)', value: '2.200 – 3.000' },
          { label: 'ICSI (mikroenjeksiyon)', value: '+ 400 – 600' },
          { label: 'İlaçlar (uyarılama)', value: '600 – 1.200' },
          { label: 'Dondurulmuş embriyo transferi', value: '700 – 1.000' },
          { label: 'PGT-A (genetik test)', value: '900 – 1.400' },
        ],
      },
      {
        type: 'p',
        text: 'En büyük değişken ilaçtır. Yüksek yanıt veren hastalarda daha fazla gonadotropin gerekebilir; düşük yanıt verenlerde protokol değişebilir. İlk konsültasyon sonrası klinikten yazılı tahmin alırız, böylece taahhüt vermeden önce toplam tutarı bilirsiniz.',
      },
      { type: 'h2', text: 'Urmia mı, Tebriz mi?' },
      {
        type: 'p',
        text: 'Urmia, sınır yakınlığı ve Türkçe konuşulan ortamı nedeniyle Türkiye’den gelen hastalar için en pratik seçenektir. Tebriz ise bir tıp fakültesi hastanesi fertility merkezi ile daha karmaşık veya daha önce başarısız olmuş vakalar için bölgesel referans merkezidir. İki şehir yaklaşık 150 km uzaklıktadır ve gerektiğinde özel transferle birleştirilebilir.',
      },
      { type: 'h2', text: 'Türkiye ile karşılaştırma' },
      {
        type: 'p',
        text: 'İstanbul veya Ankara’da tam bir IVF döngüsü tipik olarak 4.500–7.000 USD arasındadır. Urmia’da aynı döngü 2.200–3.000 USD bandında olduğundan, iki döngü denemesi bile tek bir Türkiye döngüsünden ucuz kalabilir. Ulaşım maliyeti eklendiğinde bile fark genellikle lehinizedir.',
      },
      { type: 'h2', text: 'Gerekli belgeler' },
      {
        type: 'ul',
        items: [
          'Son hormon sonuçları: AMH, FSH, LH, östradiol, TSH',
          'Antral folikül sayısı ultrasonu (son 6 ay içinde)',
          'Sperm analizi (son 3 ay içinde)',
          'Histerosalpingografi veya salin sonografi raporu',
          'Her iki eşin pasaport fotokopisi',
        ],
      },
      {
        type: 'p',
        text: 'Eksik test varsa, uyarılama başlamadan önce Urmia veya Tebriz’de yerel olarak ayarlayabiliriz; ancak sonuçlar elinizdeyse kalış süreniz kısalır.',
      },
      { type: 'h2', text: 'Kalış süresi' },
      {
        type: 'p',
        text: 'Tam bir taze IVF döngüsü genellikle İran’da 18–21 gün gerektirir: 10–14 gün uyarılama, yumurta toplama, 3–5 gün embriyo kültürü, transfer ve ardından gebelik testi öncesi 7–10 gün dinlenme. Bazı hastalar uyarılamayı kendi ülkelerinde yapıp yalnızca toplama ve transfer için gelmeyi tercih eder; bu, hekiminizle yakın koordinasyon gerektirir.',
      },
      {
        type: 'p',
        text: 'Urmia’da kalışınızı planlarken <a href="/tr/sehirler/urmia-saglik-turizmi/" class="text-primary-700 font-medium underline hover:text-primary-800">Urmia sağlık turizmi</a> rehberimizi inceleyebilir; konaklama ve ulaşım hakkında pratik bilgiler edinebilirsiniz.',
      },
      { type: 'h2', text: 'Sonraki adımlar' },
      {
        type: 'p',
        text: 'Hazır olduğunuzda, tıbbi özetiniz ve son testlerinizle <a href="/tr/iletisim/" class="text-primary-700 font-medium underline hover:text-primary-800">Akay Travel ile iletişime geçin</a>. Sizi uygun bir klinikle eşleştirir, yazılı tahmin verir ve vize, otel ve transferinizi koordine ederiz; böylece tedaviye odaklanabilirsiniz.',
      },
    ],
    faq: [
      {
        q: 'Uyarılamayı Türkiye’de yapıp yalnızca transfer için gelebilir miyim?',
        a: 'Evet, Türkiye’deki hekiminiz ve İran’daki klinik arasında yakın koordinasyonla. Ancak tam döngüyü İran’da yapmak genellikle daha iyi kontrol sağlar.',
      },
      {
        q: 'İran’da tüp bebek için yaş sınırı var mı?',
        a: 'Çoğu klinik, yumurtalık rezervine bağlı olarak kendi yumurtasıyla 45 yaşına kadar tedavi eder. Donör yumurta IVF farklı kriterlere sahiptir ve vaka bazında ayarlanır.',
      },
      {
        q: 'İkiz gebelik sık mıdır?',
        a: 'İran klinikleri genellikle çoklu gebelik riskini azaltmak için tek embriyo transfer eder. Sizin için en uygun sayıyı hekiminiz belirler.',
      },
    ],
    externalLinks: [
      {
        url: 'https://hotelerbil.ir/hotel/rotana-erbil/',
        anchor: 'Rotana Hotel Erbil',
        context: 'Urmia sınır kapısından transit geçiş planlayan hastalar için Erbil’de konaklama seçeneği olarak Rotana Hotel Erbil değerlendirilebilir.',
      },
    ],
  },
  {
    slug: 'iranda-burun-estetigi-fiyatlari',
    locale: 'tr',
    hreflangPair: 'en/blog/rhinoplasty-in-iran-cost',
    title: "İran'da Burun Estetiği Fiyatları ve Klinik Seçimi Rehberi",
    metaTitle: "İran'da Burun Estetiği Fiyatları 2026 | Akay Travel +98 44 3346 5524",
    metaDescription:
      "İran'da burun estetiği fiyatları 1.000 USD'den. Klinik seçimi, paket içeriği ve iyileşme. Akay Travel ile tam koordinasyon. +98 44 3346 5524.",
    h1: "İran'da Burun Estetiği Fiyatları ve Klinik Seçimi Rehberi",
    kw: "İran'da burun estetiği fiyatları",
    date: '2026-02-25',
    dateDisplay: '25 Şubat 2026',
    author: 'Akay Travel Medical Team',
    featuredImage: '/images/blog-rhinoplasty.svg',
    featuredImageAlt: "İran'da bir klinikte burun estetiği konsültasyonu",
    breadcrumbName: 'İran Burun Estetiği Fiyatları',
    excerpt:
      "İran'da burun estetiği fiyatları, paket içeriği, iyileşme süreci ve doğru cerrahı seçme rehberi. 2026 güncel fiyatlar.",
    relatedTreatmentSlug: 'urmia-estetik-cerrahi',
    relatedCitySlug: 'urmia-saglik-turizmi',
    body: [
      {
        type: 'p',
        text: 'İran, burun estetiği dünyada maliyet açısından en avantajlı destinasyonlardan biridir; deneyimli cerrahlar ve modern klinikler Urmia, Tahran ve Şiraz’da yoğunlaşmıştır. Bu rehber, 2026 güncel fiyatlarını, paketin neleri içerdiğini ve doğru cerrahı nasıl seçeceğinizi açıklar. Tedavinin kendisi için <a href="/tr/tedaviler/urmia-estetik-cerrahi/" class="text-primary-700 font-medium underline hover:text-primary-800">Urmia estetik cerrahi</a> sayfamızdan başlayabilirsiniz.',
      },
      { type: 'h2', text: "İran'da burun estetiği fiyatları: 2026 aralığı" },
      {
        type: 'p',
        text: 'İran’da primer burun estetiği, akredite bir klinikte tipik olarak 1.000 USD ile 1.800 USD arasında başlar. Bu fiyata genellikle cerrah, anestezi, ameliyathane ve ayrılmadan önce bir kontrol dahildir. Aynı işlemin İstanbul’da 2.500–4.500 USD arasında değiştiği düşünüldüğünde fark belirgindir.',
      },
      {
        type: 'table',
        caption: 'Urmia’da gösterge niteliğinde burun estetiği fiyatları, 2026 (USD)',
        rows: [
          { label: 'Primer rinoplasti (kapalı)', value: '1.000 – 1.400' },
          { label: 'Primer rinoplasti (açık)', value: '1.200 – 1.600' },
          { label: 'Revizyon rinoplasti', value: '1.800 – 3.000' },
          { label: 'Uç estetiği (sadece burun ucu)', value: '700 – 1.100' },
          { label: 'Septorinoplasti (solunum + şekil)', value: '1.300 – 1.800' },
        ],
      },
      {
        type: 'p',
        text: 'Revizyon ameliyatları daha pahalıdır çünkü önceki bir işlemi düzeltir ve genellikle kıkırdak grefti gerektirir. Solunum için septal düzeltme gerekiyorsa, kombine septorinoplasti yalnızca estetik kapalı yaklaşımdan biraz daha yüksektir.',
      },
      { type: 'h2', text: 'Paket içeriği' },
      {
        type: 'ul',
        items: [
          'Cerrah ve anestezist ücretleri',
          'Ameliyathane ve derlenme odası',
          'Ameliyat öncesi kan testleri ve EKG',
          'Atıl, burun tamponu ve ameliyat sonrası ilaçlar',
          'Uçuş öncesi bir kontrol',
        ],
      },
      {
        type: 'p',
        text: 'Uçuşlarınız, oteliniz ve havalimanı transferleriniz dahil değildir; Akay Travel bunları genel koordinasyonunuzun parçası olarak paketler. Burun estetiği için korse nadiren gerekir; evde kullanım için reçeteli ağrı kesiciler klinik tarafından maliyetine sağlanır.',
      },
      { type: 'h2', text: 'İyileşme süreci ve kalış süresi' },
      {
        type: 'p',
        text: 'Ameliyattan sonra 8–10 gün Urmia’da kalmayı planlayın. Atıl genellikle 7. günde alınır ve cerrah sonucu inceleyip uçmanız için onay verir. Ödem 48–72 saatte en yüksek seviyesine ulaşır ve ilk haftanın sonunda belirgin şekilde azalır; ancak hafif şişlik aylarca devam edebilir.',
      },
      {
        type: 'p',
        text: 'Çoğu hasta 4–5. günde şehirde hafif şekilde dolaşabilecek kadar iyi hisseder; ancak ilk hafta uçuşlardan, yoğun aktiviteden ve direkt güneşten kaçınmalısınız. Kliniğe yakın sakin bir otel ayarlarız; böylece kontroller kısa ve stressiz olur.',
      },
      { type: 'h2', text: 'Doğru cerrahı seçmek' },
      {
        type: 'p',
        text: 'Burun estetiğinde en kritik karar cerrahdır. Fotoğraflarınızı ve hedeflerinizi, asıl odağı nazal cerrahi olan bir cerrahla paylaşırız; taahhüt vermeden önce sertifikalarını ve tutarlı doğal sonuç örneklerini sunarız. Düzenli rinoplasti yapan, doğal sonuçlar üretebilen ve sizin burun anatomunuze uygun gerçekçi sonucu açıklayan bir cerrah arayın.',
      },
      {
        type: 'p',
        text: 'Karar vermeden önce şehri ve sağlık altyapısını tanımak için <a href="/tr/sehirler/urmia-saglik-turizmi/" class="text-primary-700 font-medium underline hover:text-primary-800">Tebriz sağlık turizmi</a> rehberimizi de inceleyebilirsiniz; ancak bizimle çalışırsanız tüm koordinasyon Urmia üzerinden yürütülür.',
      },
      { type: 'h2', text: 'Sonraki adımlar' },
      {
        type: 'p',
        text: 'Hazır olduğunuzda <a href="/tr/iletisim/" class="text-primary-700 font-medium underline hover:text-primary-800">randevu alın</a>; fotoğraflarınızı ve hedeflerinizi gönderir, size yazılı bir teklif hazırlarız. Vize, otel ve transfer dahil tüm süreci koordine ederiz.',
      },
    ],
    faq: [
      {
        q: "İran'da burun estetiği yabancı hastalar için güvenli mi?",
        a: 'Evet, akredite bir klinikte deneyimli bir cerrah tarafından yapıldığında. Her partner cerrahı değerlendiririz ve iki dilli destek sağlarız.',
      },
      {
        q: 'Nihai sonucu ne zaman görürüm?',
        a: 'Ödemin çoğu 6–12 ayda çözülür; nihai şekil yaklaşık bir yıl sonra görünür. Atıl 7. günde alınır ve iki hafta içinde sunulabilir görünüm kazanırsınız.',
      },
      {
        q: 'Daha sonra revizyon gerekirse?',
        a: 'Primer rinoplastide revizyon oranları tipik olarak %5–10’dur. Seyahatten önce cerrahınızın revizyon politikasını yazılı olarak netleştiririz.',
      },
    ],
    externalLinks: [
      {
        url: 'https://www.urummarkaz.ir/business-services',
        anchor: 'Urmia destek hizmetleri',
        context: 'Uzun süreli kalış planlayan hastalar için Urmia destek hizmetleri üzerinden ek lojistik ve günlük yaşam desteği sağlanabilir.',
      },
    ],
  },
];

export function getPost(slug: string, locale: Locale): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug && p.locale === locale);
}

export function getPostsByLocale(locale: Locale): BlogPost[] {
  return blogPosts.filter((p) => p.locale === locale);
}
