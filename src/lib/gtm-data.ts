/**
 * GTM LANDING PAGE — single source of truth for copy, offer and flags.
 *
 * Source: "Course GTM — Brief, Kreatif & Panduan Campaign" (18 Nov 2026), tab "Brief Landing Page".
 * Route: /kelas-gtm-online  (src/routes/kelas-gtm-online.tsx -> src/components/gtm/GtmPage.tsx)
 *
 * Rule carried over from the Academy page (see academy-data.ts): terms that are not confirmed
 * must not become promises on the page. Each item below marked "NEEDS INPUT" is null/false until
 * the business confirms it, and the page falls back to safe wording.
 */

export const GTM_URL = "https://kelas.gaiaparenting.com/kelas-gtm-online";

export const GTM_OFFER = {
  name: "Kelas Online GTM (Gerakan Tutup Mulut)",
  price: 149000, // brief: Rp149K, one price, one LP
  priceLabel: "Rp 149.000",
  priceShort: "Rp149K",

  /** NEEDS INPUT: checkout link (e.g. gaia.orderonline.id/...). While null the buy button is disabled. */
  orderUrl: null as string | null,
  /** NEEDS INPUT: how long buyers keep access, e.g. "6 bulan". While null the page promises nothing about it. */
  accessDuration: null as string | null,
  /** NEEDS INPUT: the brief only *proposes* the 3 bonuses. Set true once they exist; shows the bonus block. */
  bonusesConfirmed: false,

  theoryVideos: 18,
  qnaVideos: 8,
  totalVideos: 26,
  duration: "±90 menit",
  whatsapp:
    "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20GTM",
};

export const GTM_DOCTOR = {
  name: "dr. Frecillia Regina, Sp.A, IBCLC",
  descriptor: "Dokter spesialis anak & konselor laktasi internasional (IBCLC)",
  initials: "FR",
};

/**
 * Optional creative assets. Everything is null until the files exist; the page renders a designed
 * fallback for each slot. Put files in public/ (e.g. public/gtm/hero.jpg) and set the path here.
 */
export const GTM_ASSETS = {
  heroVideo: null as string | null, // 4:5 preview, 60–70 s, played muted with a sound button
  heroVideoPoster: null as string | null,
  heroPhoto: null as string | null, // real mother + child at the table, face visible
  reframePhoto: null as string | null,
  doctorPhoto: null as string | null, // frame from class footage (cleared for use)
  closingPhoto: null as string | null,
};

/** NEEDS INPUT: 3–5 real testimonials as screenshots (WA/IG, with permission). Never invent these. */
export const GTM_TESTIMONIALS: { src: string; alt: string }[] = [];

// ---------------------------------------------------------------------------------------------
// Doctor quotes. Brief note: transcripts are machine-made and mixed with the narrator's voice, so
// EVERY quote must be checked against the video (right speaker, right wording) before launch.
// ---------------------------------------------------------------------------------------------
export const GTM_QUOTES = {
  gadget: "Gadget itu menyelesaikan masalah dengan menimbulkan masalah baru.", // QnA 6
  ownChild: "Anak saya sendiri pernah mengalami gerakan tutup mulut.", // Teori 9
};

// 2. "Kalau ini terasa familiar..."
export const GTM_PROBLEMS = [
  "Udah capek masak sejam, dimakan 3 suap, dilepeh.",
  "Diemut terus, sampai sejam belum habis.",
  "Maunya mi atau roti, nasi ditolak.",
  "Deg-degan tiap ke dokter lihat grafik berat badan.",
  "Di rumah nenek lahap, sama aku nggak mau.",
  "Akhirnya kasih HP biar mau mangap.",
  "Lihat anak orang di IG makannya lahap, aku jadi minder.",
];

// 3. Reframe: shortcuts vs process (E: "Jalan pintas vs proses")
export const GTM_SHORTCUTS = ["Gadget saat makan", "Vitamin penambah nafsu makan", "Ganti-ganti menu terus"];
export const GTM_PROCESS = ["Cari penyebabnya", "Atur jadwal makan", "Kenalkan makanan berulang"];

// 4. Learning pyramid, base first (Sensori is the foundation)
export const GTM_PYRAMID = ["Sensori", "Pegang", "Masukkan ke mulut", "Kunyah & rasa", "Mahir"];

// 4. Simplified "factors of food acceptance" (redrawn from the Teori 11 slide, not a screenshot)
export const GTM_FACTORS = [
  { h: "Makanan", p: "" },
  { h: "Sensori", p: "" },
  { h: "Psikososial", p: "" },
  { h: "Kondisi tubuh", p: "gigi, sakit, sembelit" },
];

// 5. Curriculum: 4 parts, 18 videos. Hook quotes are from brief table C (verify against video).
export const GTM_CURRICULUM = [
  {
    n: 1,
    title: "Tenangkan diri dulu",
    videos: 5,
    items: [
      "Mengelola emosi orang tua",
      "Anak juga bisa stres",
      "Ekspektasi vs realita media sosial",
      "Happiness score",
      "Makan itu proses yang melelahkan",
    ],
    hook: "Bukan hanya orang tua yang stres saat menemani belajar makan. Anak juga stres.",
  },
  {
    n: 2,
    title: "Kenali anak Bunda",
    videos: 2,
    items: ["Orang tua sebagai contoh", "Parenting style & 4 tipe kepribadian anak"],
    hook: "Anak kembar saja berbeda. Jadi kita tidak usah membanding-bandingkan.",
  },
  {
    n: 3,
    title: "Sisi medis",
    videos: 4,
    items: [
      "Proses makanan di tubuh & piramida belajar",
      "Cara membaca kurva pertumbuhan",
      "Penyebab GTM",
      "Pemenuhan gizi anak susah makan",
    ],
    hook: "Kalau anak belajar makan dengan proses yang baik, hasil akhirnya akan mengikuti.",
  },
  {
    n: 4,
    title: "Praktik di rumah",
    videos: 7,
    items: [
      "Menuju menu keluarga",
      "Do's & don'ts + feeding rules",
      "Cara mengenalkan makanan baru",
      "Food diary",
      "Cara memuji yang tepat",
      "Makan tanpa distraksi",
      "Long game parenting",
    ],
    hook: "Kenalkan suatu makanan 10–15 kali. Tidak bisa hanya satu-dua kali.",
  },
];

// 5b. "Yang jarang dibahas": swipe cards between curriculum and Q&A (brief table D)
export const GTM_MOMENTS = [
  {
    icon: "sprout",
    title: "Neophobia",
    text: "Di atas 1 tahun anak sangat takut hal baru, termasuk makanan; usia 6–12 bulan masa terbaik mengenalkan.",
    ref: "Teori 14",
  },
  {
    icon: "repeat",
    title: "10–15 kali + wadah kecil",
    text: "Kenalkan berulang, sedikit di pojok piring di antara makanan favorit.",
    ref: "Teori 14",
  },
  {
    icon: "triangle",
    title: "Piramida belajar makan",
    text: "Anak harus melewati tahap sensori dulu sebelum mahir makan.",
    ref: "Teori 7",
  },
  {
    icon: "baby",
    title: "Botol vs menyusu langsung",
    text: "Anak yang minum dari botol butuh lebih sabar saat naik tekstur.",
    ref: "QnA 3",
  },
  {
    icon: "alert",
    title: "Gag reflex ≠ tersedak",
    text: "Gag reflex mekanisme belajar menelan; tersedak yang berbahaya.",
    ref: "QnA 3",
  },
  {
    icon: "wheat",
    title: "Geraham & nasi",
    text: "Sebelum geraham tumbuh (±16 bulan), nasi sulit dikunyah.",
    ref: "QnA 8",
  },
  {
    icon: "clock",
    title: "Aturan 2-3-2 bukan untuk bayi",
    text: "Baru pas di atas 1 tahun; di bawahnya ikuti jam bangun anak.",
    ref: "QnA 2",
  },
  {
    icon: "snow",
    title: "Tumbuh gigi cuma 1–2 minggu",
    text: "Boleh turun tekstur atau sajikan makanan dingin.",
    ref: "QnA 1",
  },
];

// 6. Eight Q&A questions answered by the doctor
export const GTM_QNA = [
  "Anak 9 bulan malah melepeh saat tumbuh gigi — boleh turun tekstur?",
  "Kapan waktu menyusu dan kapan waktu makan?",
  "Cara naik tekstur, dan apa bedanya gag reflex dengan tersedak?",
  "Anak bosan dengan menu yang sama — harus masak banyak?",
  "Kenapa masakan nenek lebih lahap? Boleh pakai bumbu & makanan instan?",
  "Makan sambil nonton, dan cara menyamakan aturan dengan pengasuh",
  "Harus selesai 30 menit? Kenapa anak mengemut?",
  "Anak 16 bulan susah makan nasi, kenapa?",
];

// 8. Who it is for / not a substitute for a doctor
export const GTM_FIT = {
  yes: [
    "Orang tua dan pengasuh anak usia 6 bulan sampai 3 tahun",
    "Anak yang sehat dan sedang fase menolak makan (lepeh, emut, tutup mulut)",
    "Ayah, nenek, atau pengasuh yang ikut mendampingi anak makan",
  ],
  no: [
    "Kalau kurva berat badan anak melandai atau turun, segera ke dokter anak.",
    "Kalau ada gangguan oromotor, segera ke dokter anak.",
    "Kelas ini edukasi, bukan pengganti konsultasi atau pemeriksaan dokter.",
  ],
};

// 10. Proposed bonuses (hidden until GTM_OFFER.bonusesConfirmed)
export const GTM_BONUSES = ["Template Food Diary", "Checklist “Cek Dulu Sebelum Panik”", "Tabel Bahan Makanan Penukar (karbo & protein)"];

// 11. FAQ. Answers only use facts from the brief; the rest defer to the admin on WhatsApp.
export function buildFaq(offer: typeof GTM_OFFER = GTM_OFFER): { q: string; a: string }[] {
  const access = offer.accessDuration
    ? `Kelas berupa video on-demand, jadi bisa ditonton ulang kapan saja. Masa akses: ${offer.accessDuration}.`
    : "Kelas berupa video on-demand, jadi bisa ditonton ulang kapan saja. Untuk ketentuan masa akses, tanyakan ke admin Gaia lewat WhatsApp.";
  const pay = offer.orderUrl
    ? "Klik tombol “Ikut Kelasnya”, lalu Bunda diarahkan ke halaman pemesanan. Ada pertanyaan soal pembayaran? Tanya admin Gaia lewat WhatsApp."
    : "Pemesanan belum dibuka dari halaman ini. Hubungi admin Gaia lewat WhatsApp untuk informasinya.";
  return [
    { q: "Akses berapa lama?", a: access },
    {
      q: "Bagaimana cara menontonnya?",
      a: `Semua materi berupa video on-demand: ${offer.totalVideos} video singkat, total ${offer.duration}. Pertanyaan soal cara akses? Tanya admin Gaia lewat WhatsApp.`,
    },
    {
      q: "Anak saya 2 tahun, masih relevan?",
      a: "Ya. Kelas ini untuk orang tua dan pengasuh anak usia 6 bulan sampai 3 tahun yang sedang fase menolak makan.",
    },
    {
      q: "Bisa ditonton Ayah atau nenek?",
      a: "Kelas ini untuk orang tua dan pengasuh, jadi cocok ditonton bersama. Salah satu pertanyaan di sesi QnA membahas cara menyamakan aturan makan dengan pengasuh.",
    },
    {
      q: "Bisa konsultasi pribadi?",
      a: "Kelas ini bersifat edukasi dan bukan pengganti konsultasi dengan dokter. Kalau kurva berat badan anak melandai atau turun, atau ada gangguan oromotor, segera ke dokter anak. Ada pertanyaan lain? Tanya admin Gaia lewat WhatsApp.",
    },
    { q: "Bagaimana cara bayarnya?", a: pay },
  ];
}
