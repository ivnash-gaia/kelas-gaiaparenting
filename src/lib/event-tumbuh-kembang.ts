import type { EventData } from "./event-data";
import tumbuhKembangHero from "@/assets/tumbuh-kembang-hero.jpg";

export const TUMBUH_KEMBANG_EVENT: EventData = {
  topbarTag: "Kelas Online",

  heroTag: "Kelas Online · Usia 0–5 Tahun",
  heroTitle:
    'Tidak Semua Tumbuh Kembang Anak Terlihat, <em class="font-serif-em text-primary">Tapi Semua Bisa Dipahami</em>',
  heroLead:
    "Di kelas ini, Ayah Bunda akan belajar memahami dan menstimulasi tumbuh kembang anak dengan tepat sejak dini, dibantu para pakar profesional.",

  heroFacts: [
    { k: "Format", v: "Online" },
    { k: "Durasi", v: "4 Sesi (±4 jam)" },
    { k: "Lokasi", v: "Zoom Meeting" },
    { k: "Jadwal terdekat", v: "28–30 September & 1 Oktober 2026" },
  ],
  heroImage: tumbuhKembangHero,

  priceNow: "Rp 150.000",
  priceWas: "Rp 300.000",
  priceBadge: "Hemat 50%",
  priceNote: "Dapatkan diskon 50% khusus pendaftar hari ini!",

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/kelas-intensif-optimalkan-tumbuh-kembang-anak-sesuai-usia-dan-kenali-gangguannya",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Tumbuh%20Kembang",
  },
  heroTrust: "Kuota tiap sesi terbatas · Bisa reschedule",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Banyak orang tua takut terlewat fase penting tumbuh kembang anak. Di kelas ini, Ayah Bunda akan belajar mengenali dan mendampingi tumbuh kembang anak <em class="font-serif-em text-accent">dengan tepat sejak dini</em> bersama para pakar profesional.',

  learn: [
    {
      ico: "👶",
      h: "Memahami Pertumbuhan Anak dan Indikatornya (0–5 tahun)",
      p: "Pelajari cara memantau pertumbuhan anak melalui kurva pertumbuhan, mengenali tanda weight faltering dan stunting, serta pentingnya skrining sejak dini.",
    },
    {
      ico: "🗣️",
      h: "Perkembangan & Stimulasi Bahasa Bicara Anak",
      p: "Pahami milestone bicara sesuai usia, cara memberikan stimulasi yang tepat, serta mengenali tanda keterlambatan bicara dan red flag perkembangan bahasa anak.",
    },
    {
      ico: "✍️",
      h: "Perkembangan & Stimulasi Motorik Anak",
      p: "Pelajari tahapan motorik kasar dan halus, stimulasi sesuai usia 0–60 bulan, serta tanda-tanda yang perlu diwaspadai pada perkembangan motorik anak.",
    },
    {
      ico: "💖",
      h: "Perkembangan & Stimulasi Sosial Emosi Anak",
      p: "Pahami tahapan sosial emosional anak, faktor yang memengaruhinya, cara membantu anak meregulasi emosi, dan mengenali red flag sejak dini.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Memahami Pertumbuhan Anak dan Indikatornya",
      items: [
        "Tumbuh Kembang",
        "Kurva Pertumbuhan Anak Perempuan dan Anak Lelaki",
        "Weight Faltering",
        "Stunting pada Anak",
        "Skrining Bayi Baru Lahir",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Perkembangan & Stimulasi Bahasa Bicara Anak",
      items: [
        "Milestone Perkembangan Bicara",
        "Stimulasi Perkembangan Bicara Anak",
        "Red flag Perkembangan Bicara & Bahasa",
        "Penyebab Keterlambatan Bicara",
        "Speech Delay",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Perkembangan & Stimulasi Motorik Anak",
      items: [
        "Pertumbuhan vs Perkembangan",
        "Motorik Kasar dan Motorik Halus",
        "Stimulasi Tumbuh Kembang 0–60 bulan",
        "Red flag motorik kasar & halus",
      ],
    },
    {
      ses: "Sesi 4",
      title: "Perkembangan & Stimulasi Sosial Emosi Anak",
      items: [
        "Sosial Emosi Anak",
        "Hal yang mempengaruhi perkembangan sosial emosional anak",
        "Milestone Sosial Emosi Anak 1–30 bulan",
        "Cara meregulasi emosi",
        "Red flag perkembangan sosial emosional anak",
      ],
    },
  ],

  diff: [
    {
      h: "Materi lengkap & praktis",
      p: "Pelajari milestone anak usia 0–5 tahun, serta cara stimulasi motorik, bahasa, dan sosial emosi sesuai tahap perkembangannya.",
    },
    {
      h: "Q&A bersama ahli",
      p: "Ayah Bunda dapat bertanya langsung mengenai tumbuh kembang anak dan kondisi yang sedang dihadapi.",
    },
    {
      h: "Akses rekaman 6 bulan",
      p: "Peserta mendapatkan rekaman video kelas sehingga materi dapat dipelajari kembali kapan saja setelah sesi selesai.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Bukan cuma nonton, kamu bisa langsung tanya & dikoreksi",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "28–30 September & 1 Oktober 2026", t: "19.00 WIB", status: "few" },
  ],
  venue: "Online via Zoom Meeting. Link akan dikirim setelah pendaftaran.",

  instructor: [
    {
      ico: "👩‍⚕️",
      name: "dr. Nadia Qoriah Firdausy, M.Sc., Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Anggota Ikatan Dokter Indonesia (IDI) dan Ikatan Dokter Anak Indonesia (IDAI).",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Tiara Nurlita Sari, M.Sc., Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Ahli menangani kesehatan dan tumbuh kembang anak, serta melayani konsultasi laktasi.",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Diadra Annisa, Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Staf Divisi Alergi Imunologi Departemen Ilmu Kesehatan Anak FKUI-RSCM.",
    },
    {
      ico: "🧠",
      name: "Yova Tri Yolanda, S.Psi, M.Psi., Psikolog",
      role: "Psikolog Klinis",
      bio: "Fokus pada Prevensi & Promosi Kesehatan Mental, Gangguan Klinis, Psikologi Anak, Pola Asuh, Pernikahan, dan Keluarga.",
    },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Wenny Aurelia",
      meta: "IVF F & Endowarrior Mama",
      quote:
        "Pemantauan tumbuh kembang anak terutama di 1000 hari pertama kehidupan sangatlah penting, karena pertumbuhan dan perkembangan akan sangat pesat pada periode ini. Buat bunda-bunda yang punya bayi, kelas Gaia ini bagus dan lengkap, dan kita juga bisa mendengar banyak pertanyaan dan jawaban dari sesama bunda.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Winny",
      meta: "Ibu · 30 th",
      quote:
        "Meskipun malam pun tetap produktif ikutan kelas Gaia Parenting tentang perkembangan motorik anak. Jadi tahu kalau ternyata setiap anak punya perkembangan yang beda-beda dalam usia yang sama. Jadi nggak perlu parno, yang penting selalu berusaha kasih stimulus yang baik buat anak.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Ida",
      meta: "IRT · 34 th",
      quote:
        "Menjadi orang tua memang harus memberikan yang terbaik untuk anak, apalagi soal tumbuh kembang. Kelas Gaia Parenting ini bermanfaat banget buat saya dan suami untuk belajar lebih banyak. Terima kasih Gaia Parenting buat ilmu-ilmunya.",
    },
  ],

  bonus: [
    { ico: "📄", h: "Modul Materi PDF", p: "Modul dari masing-masing materi dalam bentuk PDF." },
    { ico: "🎥", h: "Rekaman video Zoom", p: "Rekaman kelas bisa diakses selama 6 bulan." },
    { ico: "🙋‍♀️", h: "Sesi Tanya Jawab", p: "Bertanya langsung seputar tumbuh kembang anak saat sesi Zoom berlangsung." },
    { ico: "👥", h: "Group Sharing", p: "WhatsApp group untuk bunda-bunda saling sharing sesuai usia (milestone) anak." },
  ],

  recapTitle: "Takut terlewat fase penting tumbuh kembang anak?",
  recapSub:
    "Pelajari cara memahami dan menstimulasi tumbuh kembang anak agar tidak terlewat di masa pentingnya.",

  faq: [
    {
      q: "Kalau terlewat kelasnya gimana?",
      a: "Ayah Bunda akan tetap dapat materi dan rekaman Zoom yang akan di-share di group kelas bila sudah tersedia.",
    },
    {
      q: "Kelasnya bisa diikuti usia anak berapa?",
      a: "Kelasnya bisa diikuti oleh orang tua dengan usia anak 0–5 tahun. Materi yang dibahas relevan dengan rentang usia tersebut.",
    },
    {
      q: "Apakah praktisi / guru PAUD bisa ikut kelasnya?",
      a: "Tetap bisa join. Materinya bersifat general/umum sehingga bisa diikuti oleh orang tua maupun praktisi/guru.",
    },
    {
      q: "Apakah ada group sharing?",
      a: "Tersedia group sharing antar orang tua sesuai dengan usia anak.",
    },
  ],
};