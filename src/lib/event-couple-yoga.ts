import type { EventData } from "./event-data";
import coupleYogaPoster from "@/lib/couple-yoga-poster";

export const COUPLE_YOGA_EVENT: EventData = {
  topbarTag: "Kelas Offline",

  heroTag: "Untuk Couple yang Menanti Anak Pertama",
  heroTitle:
    'Kelas <em class="font-serif-em text-primary">Hari Pertama di Rumah</em>',
  heroLead:
    "Kelas Offline Full Day untuk Couple yang Menanti Anak Pertama",

  heroFacts: [
    { k: "Format", v: "Kelas Offline" },
    { k: "Durasi", v: "Full Day · 08.00–15.45 WIB" },
    { k: "Lokasi", v: "Graha Binakarsa" },
    { k: "Jadwal terdekat", v: "7 November 2026" },
  ],
  heroImage: coupleYogaPoster.url,

  priceNow: "Rp 999.000",
  priceWas: "Rp 1.200.000",
  priceBadge: "Early Bird",
  priceNote: "Rp 999.000 per couple untuk 5 couple pertama. Selanjutnya Rp 1.200.000 per couple.",

  ctaPrimary: {
    label: "Daftar & Amankan Kuota",
    href: "https://gaia.orderonline.id/kelas-hari-pertama-di-rumah?form=6ae02c955addcd0f5506490c",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=6281219596828&text=Halo+Gaia%2C+saya+mau+tanya+tentang+Kelas+Hari+Pertama+di+Rumah&type=phone_number&app_absent=0",
  },
  heroTrust: "Kuota terbatas untuk pendampingan personal",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Kelas menyiapkan Bunda dan Ayah menghadapi persalinan, merawat bayi baru lahir, menyusui, dan <em class="font-serif-em text-accent">menjalani hari pertama di rumah bersama si kecil.</em>',

  learn: [
    {
      ico: "🧘‍♀️",
      h: "Prenatal Couple Yoga",
      p: "Praktik teknik napas, gerakan bersama pasangan, gymball, dan relaksasi untuk membantu ibu menghadapi kontraksi dengan lebih nyaman serta mempersiapkan pemulihan tubuh setelah melahirkan.",
    },
    {
      ico: "📝",
      h: "Childbirth Preparation & Postnatal Recovery Plan",
      p: "Pahami tanda dan tahapan persalinan, pilihan manajemen nyeri, peran pendamping, lalu susun birth plan & postpartum plan untuk menghadapi masa sebelum hingga setelah persalinan.",
    },
    {
      ico: "👶🏻",
      h: "Newborn Care Training",
      p: "Belajar praktik memandikan & membedong, perawatan tali pusat, pemantauan bayi baru lahir & tanda bahaya, mitos vs fakta, dan dikoreksi langsung.",
    },
    {
      ico: "🧠",
      h: "Persiapan & Pemulihan Mental + Fundamental Menyusui",
      p: "Kenali baby blues, PPD, DMER, dan nursing aversion, sekaligus praktik langsung posisi, perlekatan, feeding cup, dan alat bantu menyusui.",
    },
  ],

  curriculum: [
    {
      ses: "Sesi 1",
      title: "Prenatal Couple Yoga",
      items: [
        "Pengantar: yoga untuk meredakan nyeri, sulit tidur, dan cemas di trimester akhir",
        "Praktik Breathing Technique: teknik napas menghadapi kontraksi",
        "Praktik Yoga Movement bersama pasangan: gerakan berpasangan & teknik menopang",
        "Praktik Gymball Activity",
        "Praktik Teknik Relaksasi: peran pendamping saat ibu kesakitan",
        "Gerakan pemulihan bertahap pasca melahirkan",
      ],
    },
    {
      ses: "Sesi 2",
      title: "Childbirth Preparation & Postnatal Recovery Plan",
      items: [
        "Tanda-tanda persalinan: kapan waktunya ke rumah sakit",
        "Tahapan persalinan dan apa yang terjadi di tiap fase",
        "Pilihan dan manajemen nyeri persalinan",
        "Praktik: menyusun birth plan",
        "Peran pendamping selama proses persalinan",
        "Praktik: menyusun postpartum plan",
        "Pemulihan tubuh & penyembuhan luka pasca persalinan",
        "Kebutuhan nutrisi & kontrasepsi pasca persalinan",
        "Rintangan yang sering dihadapi setelah persalinan",
      ],
    },
    {
      ses: "Sesi 3",
      title: "Newborn Care Training",
      items: [
        "Praktik memandikan bayi baru lahir",
        "Praktik membedong bayi baru lahir",
        "Praktik perawatan tali pusat",
        "Pemantauan bayi baru lahir & tanda bahaya",
        "Mitos vs fakta",
      ],
    },
    {
      ses: "Sesi 4",
      title: "Persiapan & Pemulihan Mental, Fundamental Menyusui",
      items: [
        "Baby Blues vs PPD: kenali bedanya",
        "DMER (Dysphoric Milk Ejection Reflex)",
        "Nursing Aversion",
        "Menyusui awal: fondasi teknik dasar",
        "Kapan harus cari bantuan profesional",
        "Praktik: posisi dan koreksi perlekatan saat menyusui",
        "Praktik: feeding cup dan alat bantu menyusui",
        "Rintangan menyusui",
      ],
    },
  ],

  diff: [
    {
      h: "Persiapan menghadapi persalinan",
      p: "Belajar dari tanda persalinan, teknik menghadapi kontraksi, peran ayah, hingga menyusun birth plan.",
    },
    {
      h: "Pemulihan ibu setelahnya",
      p: "Bukan cuma bayi yang perlu dipersiapkan. Ayah Bunda juga belajar pemulihan luka, kesehatan mental, latihan pemulihan tubuh, dan postpartum plan.",
    },
    {
      h: "Belajar langsung soal menyusui",
      p: "Ada praktik posisi & perlekatan, pembahasan tantangan yang jarang dibicarakan seperti DMER dan nursing aversion, serta mengenal alat bantu menyusui.",
    },
  ],
  diffEyebrow: "Kenapa Kelas Ini Beda",
  diffTitle: "Menyiapkan Ayah, Bunda, dan si kecil untuk hari pertama di rumah",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { d: "Sabtu, 7 November 2026", t: "08.00–15.45 WIB", status: "open" },
  ],
  venue:
    "Graha Binakarsa, Jl. H. R. Rasuna Said No. Kav. C-18, RT.2/RW.5, Karet Kuningan, Kecamatan Setiabudi, Jakarta Selatan.",

  instructor: [
    {
      ico: "🧘‍♀️",
      name: "Gita Suci Pratiwi, A. Md. Kep, CFPY",
      role: "Prenatal Yoga Certified",
      bio: "Mendampingi ibu hamil melalui gerakan, teknik napas, dan relaksasi untuk mempersiapkan tubuh menghadapi persalinan.",
    },
    {
      ico: "🤱",
      name: "Bidan Doralita Panjaitan, S.Tr.Keb, CFPY",
      role: "Bidan, Certified Mom & Baby Therapist, Konselor Menyusui, Prenatal Yoga Fasilitator",
      bio: "Memberikan layanan edukasi, konsultasi kehamilan, hingga pendampingan homecare bagi ibu dan buah hati.",
    },
    {
      ico: "👶🏻",
      name: "Bidan Newborn Care",
      role: "Tim Pelatihan Perawatan Bayi Baru Lahir Gaia",
      bio: "Memberikan pendampingan dalam praktik memandikan, membedong, perawatan tali pusat, pemantauan bayi baru lahir.",
    },
    {
      ico: "👩‍⚕️",
      name: "Inong Mala, S.Psi",
      role: "Praktisi Parenting & Konselor Laktasi",
      bio: "Konselor menyusui bersertifikat sejak 2023, berfokus pada persiapan menyusui, manajemen laktasi, perlekatan, hingga penanganan tantangan menyusui di awal masa nifas.",
    },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "🤰",
      name: "Bunda Alya",
      meta: "Ibu Hamil TM3",
      quote:
        "Awalnya aku pikir kelas persiapan persalinan cuma perlu untuk ibu. Ternyata setelah ikut, aku dan suami jadi sama-sama tahu apa yang harus dilakukan saat kontraksi, kapan harus ke rumah sakit, sampai bagaimana suami bisa benar-benar membantu. Jadi jauh lebih tenang menghadapi hari persalinan.",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Bunda Nadine",
      meta: "First Mom",
      quote:
        "Senang banget karena di sini bukan cuma diajarin teori menyusui. Kami bisa praktik langsung posisi dan perlekatan, bahkan dikenalkan sama hal-hal yang sebelumnya nggak pernah aku dengar seperti DMER dan nursing aversion. Jadi sekarang merasa lebih siap kalau nanti ada tantangan saat menyusui.",
    },
    {
      stars: 5,
      ico: "🤰",
      name: "Bunda Sarah",
      meta: "Hamil TM2",
      quote:
        "Yang paling membuka mata buat aku adalah ternyata persiapan setelah melahirkan sama pentingnya dengan persiapan persalinan. Dari kelas ini aku jadi tahu soal pemulihan tubuh, kesehatan mental, perawatan luka, sampai punya postpartum plan sendiri. Rasanya bukan cuma siap melahirkan, tapi juga siap menjalani masa setelahnya.",
    },
  ],

  bonus: [
    {
      ico: "📖",
      h: "Handout & starter kit",
      p: "Bawa pulang materi praktis dan starter kit untuk mempersiapkan persalinan hingga masa postpartum.",
    },
    {
      ico: "🍱",
      h: "Snack & lunch untuk dua orang",
      p: "Sudah disediakan untuk Ayah dan Bunda selama kelas berlangsung.",
    },
    {
      ico: "🎁",
      h: "Free akses e-course + ebook parenting Gaia",
      p: "Akses gratis e-course dan ebook parenting Gaia senilai hingga Rp 300.000 untuk melanjutkan belajar di rumah.",
    },
    {
      ico: "👪",
      h: "Gabung Parents Community Gaia",
      p: "Terhubung dengan sesama parents dan dapatkan ruang untuk berbagi, bertanya, dan belajar bersama.",
    },
    {
      ico: "🏠",
      h: "Diskon 10% kunjungan pertama Gaia to You",
      p: "Potongan 10% untuk kunjungan pertama layanan Gaia to You setelah mengikuti kelas.",
    },
    {
      ico: "🎉",
      h: "Doorprize peserta & penanya terbaik",
      p: "Ada kejutan spesial berupa doorprize untuk peserta dan penanya terbaik selama kelas.",
    },
  ],

  recapTitle: "Early Bird 5 pasangan pertama",
  recapSub: "Rp 999.000 / couple · Selanjutnya Rp 1.200.000 / couple",

  faq: [
    {
      q: "Kelas ini cocok untuk siapa?",
      a: "Couple yang menanti anak pertama dan ingin mempersiapkan persalinan, perawatan bayi baru lahir, menyusui, serta masa pemulihan bersama.",
    },
    {
      q: "Kenapa penting mengikuti kelas ini?",
      a: "Dalam satu hari, Ayah dan Bunda belajar menghadapi persalinan, merawat bayi baru lahir, menyusui, serta menyiapkan pemulihan tubuh dan mental untuk hari pertama di rumah.",
    },
    {
      q: "Apakah wajib datang bersama pasangan?",
      a: "Sangat disarankan datang bersama pasangan karena akan ada praktik prenatal couple yoga, teknik pendampingan saat kontraksi, dan pembahasan peran ayah selama persalinan.",
    },
  ],
};
