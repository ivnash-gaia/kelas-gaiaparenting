import type { EventData } from "./event-data";
import newbornHero from "@/assets/newborn-care-hero.jpg";

export const NEWBORN_CARE_EVENT: EventData = {
  topbarTag: "Kelas Online",

  heroTag: "Khusus Ayah Bunda Persiapan Newborn",
  heroTitle:
    'Persiapkan Fase Newborn Dengan Lebih <em class="font-serif-em text-primary">Tenang dan Terarah</em>',
  heroLead:
    "Fase newborn sering bikin bingung. Mulai dari persiapan lahiran, barang bayi, sampai pola tidur dan stimulasi awal. Di kelas ini, semuanya dibahas jelas dan praktis.",

  heroFacts: [
    { k: "Format", v: "Online" },
    { k: "Durasi", v: "4 Sesi (±4 jam)" },
    { k: "Lokasi", v: "Zoom Meeting" },
    { k: "Jadwal terdekat", v: "24 & 26–28 Oktober 2026" },
  ],
  heroImage: newbornHero,

  priceNow: "Rp 175.000",
  priceWas: "Rp 350.000",
  priceBadge: "Hemat 50%",
  priceNote: "Join 1 sesi Rp 50.000 · Join 4 sesi Rp 175.000.",

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/advance-newborn-class-online-3?form=6a17cf4774f1d048620c5451",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Newborn%20Online",
  },
  heroTrust: "Kuota tiap sesi terbatas · Bisa reschedule",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Banyak orang tua baru merasa kewalahan di hari-hari pertama setelah bayi lahir, karena ada banyak hal penting yang tidak pernah benar-benar diajarkan sebelumnya. Lewat kelas ini, Ayah Bunda akan dibekali pemahaman yang tepat agar <em class="font-serif-em text-accent">tidak hanya siap secara teori, tapi juga siap menjalani realitanya.</em>',

  learn: [
    {
      ico: "🏥",
      h: "Persiapan Persalinan Metode Sectio Caesarea (SC)",
      p: "Pelajari persiapan SC, indikasi tindakan, manajemen nyeri, hingga perawatan luka pasca operasi agar pemulihan lebih optimal.",
    },
    {
      ico: "🛁",
      h: "Newborn Checklist: Yang Perlu Dipersiapkan, Dibeli, dan Belum Perlu",
      p: "Panduan memilih perlengkapan newborn yang beneran dibutuhkan: hospital bag, perlengkapan bayi, sampai skincare yang aman.",
    },
    {
      ico: "😴",
      h: "Pola Tidur Anak dan Sleep Training Dasar",
      p: "Pahami pola tidur bayi, dasar sleep training, dan tips membangun kebiasaan tidur yang lebih baik untuk bayi.",
    },
    {
      ico: "👶",
      h: "Bonding dan Stimulasi Tumbuh Kembang Newborn",
      p: "Pelajari cara mendukung tumbuh kembang bayi sejak lahir melalui stimulasi yang tepat dan aman.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Persiapan Persalinan Metode Sectio Caesarea (SC)",
      items: [
        "Apa itu Sectio Caesarea (SC)?",
        "Tujuan tindakan SC",
        "Indikasi Sectio Caesarea",
        "Kapan SC dilakukan?",
        "Persiapan sebelum SC",
        "Manajemen nyeri post SC",
        "Perawatan luka operasi SC",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Newborn Checklist: Yang Perlu Dipersiapkan, Dibeli, dan Belum Perlu",
      items: [
        "Hospital Bag: untuk Ibu, Bayi, dan Ayah",
        "Peralatan yang wajib dan optional",
        "Perawatan pakaian & perlengkapan bayi",
        "Skincare, popok, tisu basah: mana yang aman?",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Pola Tidur Anak dan Sleep Training Dasar",
      items: [
        "Apa itu Tidur?",
        "Pola Tidur Normal",
        "Sleep Hygiene & Sleep Training",
        "ABC untuk Tidur Bayi Lebih Baik",
      ],
    },
    {
      ses: "Sesi 4",
      title: "Bonding dan Stimulasi Tumbuh Kembang Newborn",
      items: [
        "Tujuan Stimulasi Dini",
        "Memantau pertumbuhan newborn",
        "Tahap perkembangan dan stimulasi newborn",
        "Tanda bayi baru lahir sehat",
        "Bonding & Sentuhan (Skin to Skin Contact)",
        "Tummy time",
        "Rutinitas harian dengan newborn",
      ],
    },
  ],

  diff: [
    {
      h: "Pakar berpengalaman",
      p: "Materi disampaikan oleh para pakar berpengalaman lebih dari 5 tahun di bidangnya.",
    },
    {
      h: "Q&A bersama pakar",
      p: "Tanyakan langsung kesiapan Ayah Bunda menuju fase newborn bersama pakar secara langsung.",
    },
    {
      h: "Akses rekaman 6 bulan",
      p: "Putar ulang seluruh materi kelas kapan saja sesuai kebutuhan belajar Ayah Bunda.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Bukan cuma nonton, kamu bisa langsung tanya & dikoreksi",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "24 & 26–28 Oktober 2026", t: "19.00 WIB", status: "open" },
  ],
  venue: "Online via Zoom Meeting. Link akan dikirim setelah pendaftaran.",

  instructor: [
    {
      ico: "👩‍⚕️",
      name: "dr. Diadra Annisa, Sp.A",
      role: "Dokter Spesialis Anak",
      bio: "Staf Divisi Alergi Imunologi Departemen Ilmu Kesehatan Anak FKUI-RSCM.",
    },
    {
      ico: "👩‍⚕️",
      name: "dr. Ruswantriani, Sp.OG",
      role: "Dokter Spesialis Kebidanan & Kandungan",
      bio: "Lulusan S1 FK Universitas Kristen Maranatha Bandung & Spesialis Obgyn FK UI.",
    },
    {
      ico: "🤱",
      name: "Inong Mala, S.Psi",
      role: "Praktisi Parenting & Konselor Laktasi",
      bio: "Konselor laktasi yang menggeluti dunia parenting.",
    },
    {
      ico: "👩‍⚕️",
      name: "Ns. Reisy Tane, M.Kep., Sp.Kep.An",
      role: "Perawat Spesialis Anak & Konselor Laktasi",
      bio: "Perawat spesialis anak yang telah menempuh pendidikan terakhir S2 di UI.",
    },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Keisha",
      meta: "First time mom · 28 th",
      quote:
        "Sesi Persiapan Persalinan SC bikin saya jauh lebih siap menghadapi operasi caesar pertama saya. Dijelaskan dari awal proses sampai recovery, jadi saya nggak overthinking lagi. Sesi newborn checklist juga kebantu banget karena jadi tahu barang bayi mana yang benar-benar penting dibeli.",
    },
    {
      stars: 5,
      ico: "👨",
      name: "Ayah Arvin",
      meta: "Calon ayah · 30 th",
      quote:
        "Awalnya saya ikut cuma nemenin istri, ternyata materinya relate juga buat ayah. Saya paling suka sesi pijat bayi dan tummy time karena ada praktik yang gampang diikuti. Sekarang jadi lebih pede buat ikut handle bayi nanti.",
    },
    {
      stars: 5,
      ico: "🤰",
      name: "Mama Celine",
      meta: "Hamil anak kedua · 34 th",
      quote:
        "Walaupun ini bukan anak pertama, ternyata masih banyak insight baru yang saya dapat. Sesi sleep training membantu banget memahami pola tidur newborn dan cara membangun kebiasaan tidur yang lebih baik sejak awal.",
    },
  ],

  bonus: [
    { ico: "📄", h: "Modul Materi PDF", p: "Modul tiap materi dalam bentuk PDF, bisa diunduh & disimpan." },
    { ico: "🎥", h: "Rekaman video Zoom", p: "Rekaman kelas bisa diakses selama 6 bulan." },
    { ico: "🙋‍♀️", h: "Sesi tanya jawab", p: "Ayah Bunda bisa bertanya langsung soal newborn saat sesi Zoom berlangsung." },
    { ico: "👥", h: "Group sharing", p: "WhatsApp group antar orang tua untuk sharing sesuai usia (milestone) anak." },
  ],

  recapTitle: "Siap hadapi fase Newborn dengan bekal yang tepat?",
  recapSub:
    "Kelas Newborn Care Advance dirancang untuk membantu Ayah Bunda lebih siap menghadapi fase awal setelah bayi lahir secara praktis dan terarah.",

  faq: [
    {
      q: "Kalau terlewat kelasnya gimana?",
      a: "Ayah Bunda akan tetap dapat materi dan rekaman Zoom yang akan di-share di group kelas bila sudah tersedia.",
    },
    {
      q: "Bisa pilih salah satu kelas saja atau harus semua?",
      a: "Bisa pilih salah satu kelas (Rp 50.000/sesi) atau bundling 4 sesi sekaligus (Rp 175.000), ya Bunda.",
    },
    {
      q: "Apakah ada group sharing?",
      a: "Tersedia group sharing antar orang tua sesuai usia anak, yang bisa Bunda ikuti setelah kelas selesai.",
    },
  ],
};