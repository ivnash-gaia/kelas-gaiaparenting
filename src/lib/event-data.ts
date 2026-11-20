/**
 * EVENT CONFIG — the only file to edit when launching a new event page.
 * The route template stays untouched.
 */

export type SlotStatus = "open" | "few" | "full";

export type EventData = {
  topbarTag: string;
  heroTag: string;
  heroTitle: string;
  /** Meta Pixel content_name. Defaults to heroTitle without tags; set it when a headline is reworded so ad reporting keeps the old event name. */
  pixelName?: string;
  heroLead: string;
  heroFacts: { k: string; v: string }[];
  heroImage?: string;
  priceNow: string;
  priceWas: string;
  priceBadge: string;
  priceNote: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  heroTrust: string;
  heroReassure: string;
  heroScrollHint: string;
  bridge: string;
  learn: { ico: string; h: string; p: string }[];
  curriculum: { ses: string; title: string; items: string[] }[];
  diff: { h: string; p: string }[];
  diffEyebrow: string;
  diffTitle: string;
  diffSub: string;
  schedule: { d: string; t: string; status: SlotStatus; loc?: string; month?: string }[];
  venue: string;
  instructor: { ico: string; name: string; role: string; bio: string }[];
  testimonials: { stars: number; ico: string; name: string; meta: string; quote: string }[];
  bonus: { ico: string; h: string; p: string }[];
  recapTitle: string;
  recapSub: string;
  faq: { q: string; a: string }[];
};

export const EVENT: EventData = {
  topbarTag: "Kelas Offline",

  heroTag: "Khusus Ibu Hamil & Orang Tua Baru",
  heroTitle: 'Rawat bayi baru lahir dengan <em class="font-serif-em text-primary">tenang</em>, tanpa coba-coba',
  heroLead:
    "Kelas praktik langsung untuk calon orang tua. Kamu pulang dengan keterampilan nyata, bukan sekadar catatan.",

  heroFacts: [
    { k: "Format", v: "Offline · Praktik" },
    { k: "Durasi", v: "3 Sesi (±6 jam)" },
    { k: "Lokasi", v: "Jakarta Selatan" },
    { k: "Jadwal terdekat", v: "24 Mei 2026" },
  ],

  priceNow: "Rp 550.000",
  priceWas: "Rp 1.000.000",
  priceBadge: "Hemat 45%",
  priceNote:
    'Harga untuk pasangan (Ayah + Bunda). Pakai kode <code>DISKON45GAIA</code> saat checkout.',

  ctaPrimary: { label: "Daftar & Amankan Kursi", href: "#checkout" },
  ctaSecondary: { label: "Tanya dulu via WhatsApp", href: "#konsultasi" },
  heroTrust: "Kuota tiap sesi terbatas · Bisa reschedule",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Banyak praktik merawat bayi diwariskan turun-temurun. Sebagian baik, sebagian <em class="font-serif-em text-accent">berisiko tanpa kita sadari.</em> Kelas ini membantumu memilah mana yang benar secara medis, tanpa menggurui keluargamu.',

  learn: [
    { ico: "🩺", h: "Kenali tanda bahaya sejak dini", p: "Tahu kapan bayi baik-baik saja, dan kapan harus segera ke rumah sakit." },
    { ico: "🛁", h: "Memandikan & merawat tali pusat", p: "Dengan tenang dan benar. Ini langkah yang sering bikin orang tua baru panik." },
    { ico: "🤱", h: "Menyusui sejak hari pertama", p: "Posisi, perlekatan, dan membaca tanda cukup ASI pada bayi." },
    { ico: "🫄", h: "Siap menghadapi persalinan", p: "Tanda persalinan, teknik napas, dan kapan waktunya ke rumah sakit." },
    { ico: "🧣", h: "Membedong dengan aman", p: "Teknik yang menenangkan bayi tanpa mengganggu tumbuh kembang pinggulnya." },
    { ico: "🎒", h: "Menyiapkan hospital bag", p: "Daftar lengkap keperluan Ibu, Ayah, dan Bayi, biar nggak kelebihan beli." },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Kondisi Ibu & Janin Menuju Persalinan",
      items: [
        "Kondisi ibu dan janin menuju pembukaan lengkap",
        "Mengelola kecemasan saat hamil",
        "Perencanaan persalinan & cegah komplikasi",
        "Mengenali tanda persalinan & kapan ke rumah sakit",
        "Anatomi panggul, kontraksi & posisi janin",
        "Teknik pernapasan & strategi atasi nyeri",
        "Mengupayakan persalinan normal · Cegah 3 terlambat",
        "Do & Don't pasca melahirkan",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Praktik Merawat Bayi Baru Lahir",
      items: [
        "Tanda bayi baru lahir sehat",
        "Tanda bahaya pada bayi baru lahir",
        "Praktik memandikan bayi",
        "Perawatan tali pusat",
        "Teknik membedong yang aman",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Persiapan Menyusui untuk Orang Tua Baru",
      items: [
        "Hospital bag: keperluan Ibu, Ayah & Bayi",
        "Konsep dasar menyusui",
        "Lambung, lapar & tanda kenyang bayi",
        "Tanda kecukupan ASI & proses pembentukan ASI",
        "Teknik posisi & perlekatan menyusui",
      ],
    },
  ],

  diff: [
    { h: "Praktik langsung dikoreksi pakar", p: "Bukan menonton. Kamu memegang, mencoba, dan langsung diperbaiki tim Newborn Care." },
    { h: "Alat praktik disediakan", p: "Boneka phantom bayi, set bedong, dan pakaian, semuanya siap kamu pakai di kelas." },
    { h: "Direkam untuk kamu tonton ulang", p: "Tak perlu takut lupa. Setiap sesi praktik direkam dan bisa kamu ulang di rumah." },
  ],
  diffEyebrow: "Kenapa Kelas Offline",
  diffTitle: "Kamu praktik langsung, bukan cuma nonton",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "Sabtu, 24 Mei 2026", t: "09.00 – 15.00 WIB", status: "few" as SlotStatus },
    { d: "Sabtu, 7 Juni 2026", t: "09.00 – 15.00 WIB", status: "open" as SlotStatus },
    { d: "Sabtu, 21 Juni 2026", t: "09.00 – 15.00 WIB", status: "open" as SlotStatus },
  ],
  venue:
    "Gaia Parenting Center, Jl. Contoh Raya No. 12, Jakarta Selatan. Parkir tersedia, ramah ibu hamil.",

  instructor: [
    {
      ico: "👩‍⚕️",
      name: "dr. [Nama Pakar], Sp.OG",
      role: "Dokter Spesialis Kebidanan & Kandungan",
      bio: "Membimbing sesi persalinan dengan pendekatan berbasis bukti medis terkini.",
    },
    {
      ico: "🤱",
      name: "[Nama], S.Tr.Keb · Konselor Laktasi",
      role: "Bidan & Konselor Menyusui",
      bio: "Mendampingi praktik perawatan bayi dan menyusui langkah demi langkah.",
    },
  ],

  // PLACEHOLDER — replace with real testimonials before launch
  testimonials: [
    {
      stars: 5,
      ico: "🤰",
      name: "Mama Anindya",
      meta: "Hamil 32 minggu · 27 th",
      quote:
        "Awalnya saya pikir tinggal browsing aja cukup. Ternyata pas praktik megang boneka, baru sadar banyak yang saya salah. Sekarang jauh lebih tenang nunggu HPL.",
    },
    {
      stars: 5,
      ico: "👨",
      name: "Pak Reza",
      meta: "Calon ayah · 30 th",
      quote:
        "Sebagai ayah saya sering merasa cuma jadi penonton. Di kelas ini saya ikut praktik mandiin dan bedong. Istri saya kaget saya bisa.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Mama Salwa",
      meta: "Anak pertama · 29 th",
      quote:
        "Yang saya suka, mereka nggak menyalahkan kebiasaan orang tua kita. Cuma dijelaskan mana yang aman secara medis. Jadi enak waktu ngobrol sama mertua.",
    },
  ],

  bonus: [
    { ico: "🔁", h: "Gratis reschedule", p: "Berhalangan? Pindah ke jadwal berikutnya tanpa biaya." },
    { ico: "📅", h: "Maternity Program mingguan", p: "Tips kehamilan personal sesuai usia kandungan, tiap pekan." },
    { ico: "🏠", h: "Diskon 10% Homecare Gaia", p: "Untuk kunjungan perawatan pertama di rumah." },
  ],

  recapTitle: "Siap menyambut si kecil dengan percaya diri?",
  recapSub: "Satu kelas, dua orang tua, ketenangan untuk bulan-bulan pertama.",

  faq: [
    { q: "Apakah suami wajib ikut?", a: "Sangat disarankan. Harga sudah untuk pasangan, dan banyak praktik (memandikan, bedong) jauh lebih ringan bila Ayah ikut menguasainya. Namun jika berhalangan, Bunda tetap bisa hadir sendiri." },
    { q: "Usia kehamilan berapa yang ideal ikut?", a: "Paling nyaman di trimester ketiga (28 minggu ke atas), saat persiapan persalinan terasa relevan. Trimester kedua juga boleh kok, ilmunya tetap kepakai." },
    { q: "Saya sudah melahirkan, masih boleh ikut?", a: "Boleh. Materi perawatan bayi dan menyusui tetap sangat berguna untuk bayi usia beberapa minggu pertama." },
    { q: "Bagaimana kalau saya berhalangan di hari kelas?", a: "Peserta bisa reschedule gratis ke jadwal berikutnya yang tersedia. Cukup kabari admin sebelum hari pelaksanaan." },
    { q: "Apa yang perlu saya bawa?", a: "Cukup diri kamu aja. Semua alat praktik (boneka phantom, set bedong, pakaian bayi) sudah kami sediakan." },
  ],
};