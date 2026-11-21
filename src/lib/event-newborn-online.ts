import type { EventData } from "./event-data";
import newbornOnlinePoster from "./newborn-online-poster";

// MASTER PAGE: /kelas-newborn-online is one permanent URL for this class. Each new run only
// changes the details below; the layout, copy and Meta Pixel name stay.
//
// PER RUN, UPDATE:
//   - heroFacts "Jadwal terdekat" and `schedule` (dates, times, status). The homepage card reads
//     the dates and the price from here too, so nothing else needs touching.
//   - priceNow / priceWas / priceBadge / priceNote (the Diapers Merries NB giveaway in priceNote
//     and in `bonus` belongs to the 26-30 Nov 2026 run; remove it when that run is over).
//   - ctaPrimary.href when the orderonline.id form changes.
//   - `instructor` and the expert name in each curriculum title, if the line-up changes.
//   - `testimonials`: real quotes only (the section stays hidden while the list is empty).
// KEEP `pixelName` as is, so Meta Ads reporting adds every run up under one event name.
//
// First run (26-27 & 30 Nov 2026) comes from "GAIA EVENT: BRIEF KONTEN LANDING PAGE".
// Copy follows the brief. Small edits only: dashes used as drama turned into commas, and two
// typos in the curriculum fixed ("& cegah komplikasi", "Do & Don't").
export const NEWBORN_ONLINE_EVENT: EventData = {
  topbarTag: "Gaia Academy · Kelas Online via Zoom",

  heroTag: "Gaia Academy · Kelas Online via Zoom",
  heroTitle:
    'Siap Sambut Bayi Baru Lahir, <em class="font-serif-em text-primary">Belajar dari 3 Pakar Langsung</em> untuk Orang Tua Pemula dari Rumah',
  // The class name, so Meta Ads reporting keeps one stable event name even if the headline is reworded.
  pixelName: "Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula",
  heroLead:
    "Dari tanda persalinan, cara memandikan dan merawat tali pusat, sampai teknik perlekatan menyusui. Semuanya dibahas dalam 3 materi via Zoom bersama dokter kandungan, perawat, dan konselor menyusui.",

  heroFacts: [
    { k: "Format", v: "Online (Zoom)" },
    { k: "Durasi", v: "3 Materi (±4 jam)" },
    { k: "Lokasi", v: "Zoom Meeting · Seluruh Indonesia" },
    { k: "Jadwal terdekat", v: "26–27 & 30 Nov 2026" },
  ],
  heroImage: newbornOnlinePoster.url,

  priceNow: "Rp 135.000",
  priceWas: "Rp 175.000",
  priceBadge: "Hemat Rp 40.000",
  priceNote: "Harga untuk 3 materi lengkap. Bonus: 3 peserta beruntung dapat Diapers Merries NB.",

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/pelatihan-perawatan-bayi-baru-lahir-online?form=62e4f217af0587115a3ebed5",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Newborn%20Online",
  },
  heroTrust: "Kuota terbatas · Rekaman Zoom 6 bulan · Bisa diikuti dari seluruh Indonesia",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Banyak orang tua baru merasa kewalahan di hari-hari pertama setelah bayi lahir. Mulai dari menghadapi persalinan, memandikan bayi, sampai memastikan ASI cukup, banyak hal penting yang tidak pernah benar-benar diajarkan sebelumnya.<br /><br />Melalui 3 materi online bersama dokter kandungan, perawat, dan konselor menyusui, Ayah Bunda akan dibekali pemahaman yang tepat, agar <em class="font-serif-em text-accent">tidak hanya siap secara teori, tapi juga siap menjalani realitanya.</em>',

  learn: [
    {
      ico: "🤰",
      h: "Kondisi Ibu dan Janin Menuju Persalinan",
      p: "Kenali tanda dan gejala persalinan, kapan harus ke rumah sakit, teknik pernapasan saat mengedan, hingga cara mengupayakan persalinan normal dan mencegah komplikasi.",
    },
    {
      ico: "🛁",
      h: "Praktik Perawatan Bayi Baru Lahir",
      p: "Belajar memandikan, membedong, dan merawat tali pusat, serta mengenali tanda bayi baru lahir sehat dan tanda bahayanya.",
    },
    {
      ico: "🤱",
      h: "Persiapan Menyusui bagi Orang Tua Baru",
      p: "Pahami proses pembentukan ASI, tanda kecukupan ASI, serta teknik posisi dan perlekatan menyusui, lengkap dengan checklist hospital bag.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Kondisi Ibu dan Janin Menuju Persalinan (dr. Ruswantriani, Sp.OG)",
      items: [
        "Kondisi ibu dan janin menuju pembukaan lengkap",
        "Kecemasan saat hamil",
        "Perencanaan persalinan & cegah komplikasi",
        "Kapan harus ke rumah sakit?",
        "Mengenal persalinan dan pemicu persalinan",
        "Anatomi panggul dan rahim",
        "Proses kontraksi rahim",
        "Optimalisasi posisi janin",
        "Proses persalinan normal dan mengupayakan persalinan normal",
        "Gejala dan tanda persalinan",
        "Teknik pernapasan saat mengedan",
        "Persalinan komplikasi",
        "Pendekatan strategis atasi nyeri",
        "Cegah 3 terlambat",
        "Do & Don't pasca melahirkan",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Praktik Perawatan Bayi Baru Lahir (Gita Suci Pratiwi, A.Md.Kep., CFPY)",
      items: [
        "Tanda bayi baru lahir sehat",
        "Tanda bahaya bayi baru lahir",
        "Memandikan bayi",
        "Perawatan tali pusat dan kondisi tali pusat berbahaya",
        "Membedong bayi",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Persiapan Menyusui bagi Orang Tua Baru (Inong Mala, S.Psi.)",
      items: [
        "Hospital bag: keperluan persalinan (untuk Ibu, Ayah, dan Bayi)",
        "Konsep dasar menyusui",
        "Lambung, lapar, dan kondisi kenyangnya bayi",
        "Tanda kecukupan ASI",
        "Proses pembentukan ASI",
        "Teknik posisi menyusui",
        "Teknik perlekatan menyusui",
      ],
    },
  ],

  diff: [
    {
      h: "Pakar Sesuai Bidangnya",
      p: "Tiap materi dibawakan langsung oleh ahlinya: dokter spesialis kandungan, perawat, dan konselor menyusui.",
    },
    {
      h: "Praktik Dikoreksi Saat Live",
      p: "Ayah Bunda praktik bersama dan dikoreksi langsung oleh pakar selama sesi Zoom berlangsung.",
    },
    {
      h: "Akses Rekaman 6 Bulan",
      p: "Putar ulang seluruh materi kelas kapan saja sesuai kebutuhan belajar Ayah Bunda.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Kamu praktik langsung dan dikoreksi pakar saat live",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "Kamis, 26 Nov 2026 (Materi 1)", t: "19.00–20.00 WIB", status: "open", month: "November 2026" },
    { d: "Jumat, 27 Nov 2026 (Materi 2)", t: "19.00–20.30 WIB", status: "open", month: "November 2026" },
    { d: "Senin, 30 Nov 2026 (Materi 3)", t: "16.00–17.30 WIB", status: "open", month: "November 2026" },
  ],
  venue: "Online via Zoom Meeting · Bisa diikuti dari seluruh Indonesia",

  instructor: [
    {
      ico: "👩‍⚕️",
      name: "dr. Ruswantriani, Sp.OG",
      role: "Dokter Spesialis Kebidanan & Kandungan",
      bio: "Lulusan S1 FK Universitas Kristen Maranatha (Bandung) & Spesialis Obgyn di FK UI.",
    },
    {
      ico: "🧘‍♀️",
      name: "Gita Suci Pratiwi, A.Md.Kep., CFPY",
      role: "Perawat & Certified Facilitator Prenatal Gentle Yoga",
      bio: "Perawat sekaligus fasilitator bersertifikat Prenatal Gentle Yoga.",
    },
    {
      ico: "🤱",
      name: "Inong Mala, S.Psi.",
      role: "Konselor Menyusui",
      bio: "Konselor laktasi yang menggeluti dunia parenting.",
    },
  ],

  // The brief has no testimonials. EventPage hides the section when this list is empty.
  testimonials: [],

  bonus: [
    { ico: "📚", h: "Modul Materi PDF", p: "Terdapat modul dari masing-masing materi berbentuk PDF." },
    { ico: "📹", h: "Rekaman Video Zoom", p: "Tersedia rekaman kelas yang bisa diakses selama 6 bulan." },
    {
      ico: "👥",
      h: "Group Sharing",
      p: "Tersedia WhatsApp group untuk Ayah Bunda saling sharing sesuai usia (milestone) anak.",
    },
    { ico: "🎁", h: "Hadiah Diapers Merries NB", p: "3 peserta beruntung mendapatkan Diapers Merries NB." },
  ],

  recapTitle: "Siap Sambut Si Kecil dengan Bekal yang Tepat?",
  recapSub:
    "Pelatihan Perawatan Bayi Baru Lahir online bersama dokter kandungan, perawat, dan konselor menyusui, supaya Ayah Bunda lebih siap dari persalinan, merawat newborn, hingga menyusui.",

  faq: [
    {
      q: "Kalau terlewat kelasnya gimana?",
      a: "Ayah Bunda akan tetap dapat materi dan rekaman Zoom yang akan di-share di group kelas bila sudah tersedia.",
    },
    {
      q: "Apa beda kelas online dan offline?",
      a: "Kelas online: semua materi via Zoom, bisa diikuti dari seluruh Indonesia, praktik dikoreksi bersama saat live. Kelas offline: Materi 1 & 2 tatap muka (Materi 3 tetap online), diutamakan Jabodetabek, dapat alat peraga + set perawatan tiap couple, materi cetak & goodie bag, dan koreksi praktik langsung tiap couple.",
    },
    {
      q: "Apakah alat peraga disediakan di kelas online?",
      a: "Untuk kelas online, alat peraga tidak disediakan per peserta. Kalau ingin praktik dengan alat peraga dan dikoreksi langsung tiap couple, Ayah Bunda bisa pilih kelas offline.",
    },
  ],
};
