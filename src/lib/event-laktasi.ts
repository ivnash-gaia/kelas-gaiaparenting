import type { EventData } from "./event-data";
import laktasiHero from "@/assets/laktasi-hero.jpg";

export const LAKTASI_EVENT: EventData = {
  topbarTag: "Kelas Online",

  heroTag: "Khusus Ibu Hamil & Ibu Menyusui",
  pixelName: "Tidak semua ibu langsung bisa menyusui — tapi semua ibu bisa belajar.", // = the previous headline, keeps Meta event name stable
  heroTitle:
    'Tidak semua ibu langsung bisa menyusui, tapi <em class="font-serif-em text-primary">semua ibu bisa belajar.</em>',
  heroLead:
    "Pelajari teknik menyusui yang benar agar ibu lebih percaya diri dan bayi mendapatkan ASI secara optimal sejak hari pertama.",

  heroFacts: [
    { k: "Format", v: "Online" },
    { k: "Durasi", v: "4 Sesi (±4 jam)" },
    { k: "Lokasi", v: "Zoom Meeting" },
    { k: "Jadwal terdekat", v: "22–25 September 2026" },
  ],
  heroImage: laktasiHero,

  priceNow: "Rp 170.000",
  priceWas: "Rp 340.000",
  priceBadge: "Hemat 50%",
  priceNote: "Dapatkan diskon 50% khusus pendaftar hari ini!",

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/kelas-laktasi-online?form=63410c13a78fc6189d1bd3ac",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Laktasi",
  },
  heroTrust: "Kuota tiap sesi terbatas · Bisa reschedule",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Banyak ibu merasa khawatir saat mulai menyusui. Lewat kelas ini, Bunda akan memahami dasar menyusui, posisi & teknik <em class="font-serif-em text-accent">latch yang tepat,</em> serta cara mengatasi berbagai tantangan menyusui di awal kehidupan bayi.',

  learn: [
    {
      ico: "🤱",
      h: "Konsep dasar & teknik menyusui",
      p: "Anatomi payudara, cara bayi menghisap ASI, posisi & perlekatan yang tepat, sampai mengenali tanda lapar dan kenyang.",
    },
    {
      ico: "📈",
      h: "Slow weight gain pada bayi ASI",
      p: "Memantau pertumbuhan bayi pakai grafik WHO & CDC, memahami penyebab BB sulit naik, dan mengevaluasi perlekatan.",
    },
    {
      ico: "💢",
      h: "Rintangan ibu menyusui & bayi menyusu",
      p: "Puting lecet, kondisi payudara tertentu, kecukupan ASI, hingga perubahan emosional pascamelahirkan.",
    },
    {
      ico: "💼",
      h: "Menyusui bagi ibu bekerja",
      p: "Persiapan sebelum kembali kerja, penyimpanan & penyajian ASI perah, dan hal penting agar kebutuhan ASI tetap terpenuhi.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Konsep Dasar & Teknik Menyusui",
      items: [
        "Bentuk & anatomi payudara",
        "Mekanisme menghisap pada bayi",
        "Posisi & perlekatan yang benar",
        "Lambung, lapar, dan kenyangnya bayi",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Slow Weight Gain pada Bayi ASI",
      items: [
        "Grafik pertumbuhan CDC & WHO",
        "Penyebab BB sulit naik pada bayi ASI",
        "Prinsip dasar perlekatan",
        "Posisi menyusui",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Rintangan Ibu Menyusui & Bayi Menyusu",
      items: [
        "Proses menyusui & tantangannya",
        "Tanda kecukupan ASI",
        "Penyebab puting lecet & penanganannya",
        "Macam kondisi payudara & pengaruhnya",
        "Postpartum blues & depression",
      ],
    },
    {
      ses: "Sesi 4",
      title: "Menyusui bagi Ibu Bekerja",
      items: [
        "Persiapan sebelum bekerja",
        "Media pemberian ASI perah",
        "Cara menyajikan ASI perah",
        "Hal penting dalam manajemen ASI perah",
      ],
    },
  ],

  diff: [
    {
      h: "Materi lengkap & praktis",
      p: "Konsep dasar menyusui, teknik latch yang benar, serta cara menjaga produksi ASI agar proses menyusui lebih lancar.",
    },
    {
      h: "Q&A bersama konselor",
      p: "Ayah Bunda bisa bertanya langsung soal berbagai tantangan menyusui yang sering terjadi pada ibu dan bayi.",
    },
    {
      h: "Akses rekaman 6 bulan",
      p: "Peserta mendapatkan rekaman video kelas, bisa dipelajari kembali kapan saja setelah sesi selesai.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Bukan cuma nonton, kamu bisa langsung tanya & dipandu konselor",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "22–25 September 2026", t: "19.00 WIB", status: "open" },
  ],
  venue: "Online via Zoom Meeting. Link akan dikirim setelah pendaftaran.",

  instructor: [
    {
      ico: "👩‍⚕️",
      name: "Inong Mala, S.Psi",
      role: "Praktisi Parenting & Konselor Laktasi",
      bio: "Konselor menyusui bersertifikat sejak 2023, fokus pada persiapan menyusui, manajemen laktasi, perlekatan, hingga penanganan tantangan menyusui di awal masa nifas.",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Kisyana Fiesa Katurangganing, M.K.M., CBC",
      role: "Dokter & Konselor Laktasi",
      bio: "Dokter berpengalaman 10 tahun, konselor laktasi bersertifikat, Prenatal Yoga Facilitator, dan Certified Mom and Baby Therapist.",
    },
    {
      ico: "👩‍⚕️",
      name: "Diah Rohmatulailah, A.Md.Keb., S.K.M., CIMI",
      role: "Praktisi Kebidanan & Kesehatan Ibu dan Anak",
      bio: "Berpengalaman dalam praktik kebidanan serta kesehatan ibu dan anak, termasuk pendampingan menyusui bagi ibu bekerja.",
    },
    {
      ico: "👩‍⚕️",
      name: "Bd. Doralita Panjaitan, S.Tr.Keb",
      role: "Bidan, Certified Mom & Baby Therapist, Konselor Menyusui, Prenatal Yoga Fasilitator",
      bio: "Memberikan layanan edukasi, konsultasi kehamilan, hingga pendampingan home care bagi ibu dan buah hati.",
    },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Yuni",
      meta: "First Mom",
      quote:
        "Awalnya saya khawatir ASI saya kurang karena bayi sering menyusu dan berat badan belum naik sesuai harapan. Setelah ikut Kelas Laktasi Gaia, saya jadi paham tentang pelekatan, tanda bayi cukup ASI, dan cara menyusui yang efektif. Sekarang saya lebih tenang dan tidak mudah panik tiap kali bayi rewel.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Bidara",
      meta: "Mom of baby 1 mo",
      quote:
        "Dulu saya merasa menyusui itu sulit dan melelahkan. Setelah ikut kelas ini, banyak insight baru yang saya dapat, terutama tentang tantangan menyusui di masa awal kelahiran. Materinya sangat relate dengan kondisi saya, jadi lebih percaya diri menjalani proses menyusui.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Leni",
      meta: "Ibu 2 anak · 34 th",
      quote:
        "Kelas ini sangat bermanfaat, terutama saat anak saya mengalami masalah kenaikan BB dan GTM. Penjelasannya mudah dipahami, berbasis ilmu, dan langsung bisa diterapkan. Saya jadi lebih mengerti apa yang perlu dilakukan dibanding hanya menebak-nebak sendiri.",
    },
  ],

  bonus: [
    { ico: "📄", h: "Modul materi PDF", p: "Modul tiap materi dalam bentuk PDF, bisa diunduh & disimpan." },
    { ico: "🎥", h: "Rekaman video Zoom", p: "Rekaman kelas bisa diakses selama 6 bulan." },
    { ico: "🙋‍♀️", h: "Sesi tanya jawab", p: "Bisa bertanya langsung seputar laktasi saat sesi Zoom berlangsung." },
    { ico: "👥", h: "Group sharing", p: "WhatsApp group untuk bunda-bunda sharing sesuai usia (milestone) anak." },
  ],

  recapTitle: "Mulai perjalanan menyusui dengan ilmu yang tepat",
  recapSub:
    "Kelas Fundamental Laktasi dirancang untuk membantu orang tua pemula memahami prinsip esensial dalam menyusui.",

  faq: [
    {
      q: "Kalau terlewat kelasnya gimana?",
      a: "Ayah Bunda akan tetap dapat materi dan rekaman Zoom yang akan di-share di group kelas bila sudah tersedia.",
    },
    {
      q: "Bisa pilih salah satu kelas saja atau harus semua?",
      a: "Bisa pilih salah satu sesi kelas yang Bunda minati, atau bisa bundling 4 sesi kelas sekaligus.",
    },
    {
      q: "Apakah ada group sharing?",
      a: "Tersedia group sharing antar orang tua sesuai dengan usia anak.",
    },
  ],
};