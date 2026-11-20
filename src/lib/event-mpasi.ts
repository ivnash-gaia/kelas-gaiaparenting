import type { EventData } from "./event-data";
import mpasiHero from "@/assets/mpasi-hero.jpg";

export const MPASI_EVENT: EventData = {
  topbarTag: "Kelas Online",

  heroTag: "Khusus Ayah Bunda Persiapan MPASI",
  heroTitle:
    'Siap memulai MPASI <em class="font-serif-em text-primary">tanpa bingung?</em>',
  heroLead:
    "Di kelas ini, Ayah Bunda akan belajar langkah demi langkah agar proses makan Si Kecil lebih tenang, terarah, dan menyenangkan.",

  heroFacts: [
    { k: "Format", v: "Online · Praktik" },
    { k: "Durasi", v: "7 Sesi (±7 jam)" },
    { k: "Lokasi", v: "Via Zoom Meeting" },
    { k: "Jadwal terdekat", v: "17–20 & 23–25 November 2026" },
  ],
  heroImage: mpasiHero,

  priceNow: "Rp 175.000",
  priceWas: "Rp 350.000",
  priceBadge: "Hemat 50%",
  priceNote:
    'Harga untuk 7x sesi online. Pakai kode <code>DISKON50GAIA</code> saat checkout.',

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/mpasi-fundamental?form=6655b041376307684204a207",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20MPASI",
  },
  heroTrust: "Kuota tiap sesi terbatas",
  heroReassure: "Baca dulu — tidak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Fase MPASI sering jadi momen yang membingungkan — mulai dari menu pertama, mengenali alergi, sampai memahami tekstur yang sesuai usia. Lewat kelas ini, Ayah Bunda belajar bertahap tentang nutrisi bayi, menyusun menu seimbang, dan <em class="font-serif-em text-accent">membangun pengalaman makan yang menyenangkan</em> bagi Si Kecil.',

  learn: [
    {
      ico: "📘",
      h: "Panduan MPASI dasar sesuai WHO, IDAI & UNICEF",
      p: "Manfaat MPASI, kapan mulai, strategi pemberian, komposisi MPASI & ASI, serta feeding rules.",
    },
    {
      ico: "🥜",
      h: "Deteksi dini & atasi alergi makanan",
      p: "Alergi makanan pada anak yang wajib diketahui orang tua, dan cara penanganannya.",
    },
    {
      ico: "🥄",
      h: "Alat makan & stimulasi skill makan",
      p: "Mengenal alat makan anak serta perkembangan motorik halus dan oromotor.",
    },
    {
      ico: "🍲",
      h: "Menu snack & menu BB Booster",
      p: "Inspirasi bahan dan resep menu booster berat badan untuk Si Kecil.",
    },
    {
      ico: "😋",
      h: "Happy Eating — pemberian makan minim trauma",
      p: "Cara kreatif dan seru mengenalkan makanan supaya pengalaman makan menyenangkan.",
    },
    {
      ico: "📝",
      h: "Menyusun menu MPASI 6–24 bulan",
      p: "Contoh-contoh menu MPASI lengkap sesuai usia anak.",
    },
    {
      ico: "✅",
      h: "Koreksi tekstur MPASI dari peserta",
      p: "Ayah Bunda bisa kirim foto tekstur MPASI buatan sendiri dan dikoreksi langsung oleh dokter.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Panduan Dasar MPASI",
      items: [
        "Manfaat pemberian MPASI",
        "Kapan waktu yang tepat memulai MPASI",
        "Strategi pemberian MPASI",
        "Komposisi MPASI & peran ASI",
        "Feeding rules sesuai WHO, IDAI, UNICEF",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Alergi Makanan pada Anak",
      items: [
        "Mengenali tanda alergi makanan",
        "Jenis alergen umum pada bayi",
        "Cara penanganan reaksi alergi",
        "Kapan harus ke dokter",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Alat Makan & Stimulasi Skill Makan",
      items: [
        "Mengenal alat makan anak",
        "Perkembangan motorik halus & oromotor",
        "Stimulasi makan mandiri",
      ],
    },
    {
      ses: "Sesi 4",
      title: "Menu Snack & BB Booster",
      items: [
        "Prinsip menu BB booster",
        "Contoh bahan & resep snack",
        "Tips konsistensi pemberian",
      ],
    },
    {
      ses: "Sesi 5",
      title: "Happy Eating",
      items: [
        "Pemberian makan minim trauma",
        "Cara kreatif mengenalkan makanan baru",
        "Membangun rutinitas makan yang menyenangkan",
      ],
    },
    {
      ses: "Sesi 6",
      title: "Menyusun Menu MPASI 6–24 Bulan",
      items: [
        "Contoh menu MPASI per kelompok usia",
        "Variasi karbohidrat, protein, sayur & lemak tambahan",
        "Tips meal prep mingguan",
      ],
    },
    {
      ses: "Sesi 7",
      title: "Koreksi Tekstur MPASI Peserta",
      items: [
        "Cara mengirim foto tekstur MPASI",
        "Koreksi langsung dari dokter",
        "Tips memperbaiki tekstur sesuai usia",
      ],
    },
  ],

  diff: [
    {
      h: "Dibimbing pakar berpengalaman",
      p: "Materi disampaikan oleh para pakar dengan pengalaman lebih dari 5 tahun di bidangnya.",
    },
    {
      h: "Q&A langsung bersama pakar",
      p: "Tanyakan langsung masalah MPASI yang Ayah Bunda alami selama sesi kelas.",
    },
    {
      h: "Akses rekaman 6 bulan",
      p: "Putar ulang seluruh materi kelas kapan saja sesuai kebutuhan belajar Ayah Bunda.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Bukan sekadar nonton — kamu bisa langsung bertanya & dikoreksi",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "17–20 & 23–25 November 2026", t: "19.00 WIB", status: "open" },
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
      name: "dr. Diadra Annisa, Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Staf Divisi Alergi Imunologi Departemen Ilmu Kesehatan Anak FKUI-RSCM.",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Fatimah Hidayati, Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Dalam pendidikan Dokter Subspesialis Respirologi - Ilmu Kesehatan Anak.",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Tiara Nurlita Sari, M.Sc., Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Ahli menangani kesehatan dan tumbuh kembang anak, serta melayani konsultasi laktasi.",
    },
    {
      ico: "👨‍⚕️",
      name: "dr. Dicky Adrian Tedja, Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Menangani kesehatan anak sejak lahir hingga usia remaja (0–18 tahun).",
    },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Belle Shafira",
      meta: "New Mom",
      quote:
        "Kelasnya bermanfaat banget, apalagi ada group sharing-nya antar ibu-ibu. Jadi ada insight baru terus tentang MPASI. Memang jadi orang tua itu everyday learning.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Febria Laras",
      meta: "Ibu anak 2 · Working Mom",
      quote:
        "Bener-bener nambah ilmu MPASI banget — dapat tips masak menu utama dan cemilan BB Booster juga.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Cahya",
      meta: "Mom, Medan",
      quote:
        "Baru tau ternyata jadwal makan, tidur, main anak yang nggak teratur & mood orang tua bisa jadi penyebab GTM. Buat mom yang masih bergelut dengan GTM, coba daftar kelas MPASI Gaia ini. Ilmunya bagus banget.",
    },
  ],

  bonus: [
    { ico: "📄", h: "Modul Materi PDF", p: "Modul tiap materi dalam bentuk PDF, bisa diunduh & disimpan." },
    { ico: "🎥", h: "Rekaman video Zoom", p: "Rekaman kelas bisa diakses selama 6 bulan." },
    { ico: "🙋‍♀️", h: "Sesi tanya jawab", p: "Ayah Bunda bisa bertanya langsung soal MPASI saat sesi Zoom berlangsung." },
    { ico: "👥", h: "Group sharing", p: "WhatsApp group untuk bunda-bunda sharing sesuai usia (milestone) anak." },
  ],

  recapTitle: "Siap memulai MPASI tanpa bingung?",
  recapSub: "Daftar sekarang dan mulai persiapan MPASI dengan lebih percaya diri.",

  faq: [
    {
      q: "Kalau terlewat kelasnya gimana?",
      a: "Ayah Bunda akan tetap dapat materi dan rekaman Zoom yang akan di-share di group kelas bila sudah tersedia.",
    },
    {
      q: "Bedanya e-course dan kelas saja apa?",
      a: "Bila hanya ingin mengikuti kelas Fundamental MPASI Juni 2026, pilih 'Kelas Intensif Kupas Tuntas Persiapan MPASI Juni 2026' (Rp 175.000). Bila memilih bundling 'Kelas Intensif MPASI 7 hari + 2 E-course MPASI' (Rp 275.000), Ayah Bunda dapat: 1 Kelas Intensif Juni 2026, 1 E-course MPASI Sehat dr. Tiwi, dan 1 E-course MPASI Anak Susah Makan dr. Frecillia. Untuk E-course, metode belajarnya via video learning yang bisa diakses fleksibel selama 12 bulan (tidak live Zoom).",
    },
    {
      q: "Apakah akan dapat resep menu MPASI?",
      a: "Ya, tersedia resep menu MPASI dari Kemenkes dan dari Gaia yang akan kami berikan.",
    },
    {
      q: "Apakah ada group sharing?",
      a: "Tersedia group sharing antar orang tua sesuai usia anak, yang bisa Bunda ikuti setelah kelas selesai.",
    },
    {
      q: "Anakku sudah MPASI saat kelas berlangsung, masih relevan?",
      a: "Bisa banget, Bunda. Pembahasan dimulai dari dasar hingga tips lanjutan seperti penyusunan snack BB booster, panduan alat makan, hingga cara meminimalisir GTM pada anak.",
    },
  ],
};