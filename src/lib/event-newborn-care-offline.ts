import type { EventData } from "./event-data";
import heroImage from "@/assets/newborn-care-offline-hero.jpg";

export const NEWBORN_CARE_OFFLINE_EVENT: EventData = {
  topbarTag: "Kelas Offline",

  heroTag: "Khusus Ibu Hamil & Orang Tua Baru",
  heroTitle:
    'Sebentar Lagi Si Kecil Lahir, <em class="font-serif-em text-primary">Sudah Siap Merawatnya</em> di Hari Pertama?',
  heroLead:
    "Banyak orang tua baru pulang dari rumah sakit sambil gendong bayi, tapi belum pernah diajarkan cara merawatnya.",

  heroFacts: [
    { k: "Format", v: "Offline · Praktik" },
    { k: "Durasi", v: "3 Sesi (±6 jam)" },
    { k: "Lokasi", v: "Jabodetabek, Surabaya, Bandung" },
    { k: "Jadwal terdekat", v: "Oktober–Desember 2026" },
  ],
  heroImage,

  priceNow: "Rp 550.000",
  priceWas: "Rp 1.000.000",
  priceBadge: "Hemat 45%",
  priceNote:
    'Harga untuk pasangan (Ayah + Bunda). Pakai kode <code>DISKON45GAIA</code> saat checkout.',

  ctaPrimary: {
    label: "Daftar & Amankan Kursi",
    href: "https://gaia.orderonline.id/gaia-academy-seri-menyambut-kelahiran-buah-hati-2026?form=64f9b6ff01a16a8e5d0eded8",
  },
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Newborn%20Offline",
  },
  heroTrust: "Kuota tiap sesi terbatas · Bisa reschedule",
  heroReassure: "Baca dulu aja, nggak perlu langsung daftar.",
  heroScrollHint: "Lihat dulu apa yang kamu pelajari",

  bridge:
    'Persiapan terbaik menjadi orang tua dimulai <em class="font-serif-em text-accent">sebelum bayi lahir.</em> Pelajari langsung cara merawat bayi baru lahir bersama dokter kandungan, bidan bersertifikat, dan konselor laktasi, mulai dari persiapan persalinan, praktik merawat bayi, sampai persiapan menyusui.',

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
    { h: "Praktik langsung dikoreksi pakar", p: "Bukan menonton. Ayah Bunda memegang, mencoba, dan langsung diperbaiki tenaga kesehatan berpengalaman." },
    { h: "Alat praktik lengkap", p: "Boneka phantom bayi, set bedong, dan pakaian, semuanya sudah disiapkan buat Ayah Bunda pakai di kelas." },
    { h: "Direkam untuk ditonton ulang", p: "Tak perlu takut lupa. Setiap sesi praktik direkam dan bisa Ayah Bunda tonton ulang di rumah." },
    { h: "Tanya jawab pakar", p: "Ayah Bunda dapat bertanya langsung mengenai persiapan kelahiran, laktasi, dan perawatan bayi." },
  ],
  diffEyebrow: "Kenapa Kelas Offline",
  diffTitle: "Kamu praktik langsung, bukan cuma nonton",
  diffSub: "Hal yang tidak bisa kamu dapat dari video atau artikel di internet.",

  schedule: [
    { month: "Oktober 2026", d: "Sabtu, 10 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "MMC Kuningan", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 10 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Altius Hospital Bekasi", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 17 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Lume Coffee Tebet", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 17 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Mitra Keluarga Surabaya", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 17 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "RSIA TAMBAK", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 24 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital MT Haryono", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 24 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital PIK", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 24 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Mitra Keluarga Kelapa Gading", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 31 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Eduplex Bandung", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 31 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital BSD", status: "open" },
    { month: "Oktober 2026", d: "Sabtu, 31 Oktober 2026", t: "08.30 – 12.00 WIB", loc: "National Hospital Surabaya", status: "open" },

    { month: "November 2026", d: "Sabtu, 7 November 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital Bekasi", status: "open" },
    { month: "November 2026", d: "Sabtu, 7 November 2026", t: "08.30 – 12.00 WIB", loc: "MRCCC Siloam Semanggi", status: "open" },
    { month: "November 2026", d: "Sabtu, 7 November 2026", t: "08.30 – 12.00 WIB", loc: "Mitra keluarga Depok", status: "open" },
    { month: "November 2026", d: "Sabtu, 14 November 2026", t: "08.30 – 12.00 WIB", loc: "MMC Kuningan", status: "open" },
    { month: "November 2026", d: "Sabtu, 14 November 2026", t: "08.30 – 12.00 WIB", loc: "Mitra Keluarga Surabaya", status: "open" },
    { month: "November 2026", d: "Sabtu, 14 November 2026", t: "08.30 – 12.00 WIB", loc: "United Grand Hall", status: "open" },
    { month: "November 2026", d: "Sabtu, 21 November 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital BSD", status: "open" },
    { month: "November 2026", d: "Sabtu, 21 November 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital MT Haryono", status: "open" },
    { month: "November 2026", d: "Sabtu, 21 November 2026", t: "08.30 – 12.00 WIB", loc: "Mitra Keluarga Bintaro Hospital", status: "open" },
    { month: "November 2026", d: "Sabtu, 28 November 2026", t: "08.30 – 12.00 WIB", loc: "Eduplex Bandung", status: "open" },
    { month: "November 2026", d: "Sabtu, 28 November 2026", t: "08.30 – 12.00 WIB", loc: "Eka Hospital Pluit", status: "open" },
    { month: "November 2026", d: "Sabtu, 28 November 2026", t: "08.30 – 12.00 WIB", loc: "National Hospital Surabaya", status: "open" },

    { month: "Desember 2026", d: "Sabtu, 5 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Jakarta Pusat", status: "open" },
    { month: "Desember 2026", d: "Sabtu, 5 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Depok (menunggu konfirmasi)", status: "open" },
    { month: "Desember 2026", d: "Sabtu, 5 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Tangerang", status: "open" },
    { month: "Desember 2026", d: "Senin, 7 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Jakarta Selatan", status: "open" },
    { month: "Desember 2026", d: "Sabtu, 12 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Jakarta Selatan", status: "open" },
    { month: "Desember 2026", d: "Sabtu, 12 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Surabaya", status: "open" },
    { month: "Desember 2026", d: "Sabtu, 19 Desember 2026", t: "08.30 – 12.00 WIB", loc: "Bandung", status: "open" },
  ],
  venue:
    "Tersedia di Jabodetabek (Jakarta, Bekasi, Depok, BSD, Bintaro), Bandung, dan Surabaya. Lokasi spesifik tertera di tiap jadwal. Untuk Desember, lokasi masih level area/kota dan akan dikonfirmasi (dapat berubah sewaktu-waktu).",

  instructor: [
    { ico: "👩‍⚕️", name: "dr. Aviasti Pratiwi A, Sp.OG", role: "Dokter Spesialis Obstetri & Ginekologi · Bandung", bio: "Anggota Ikatan Dokter Indonesia (IDI) dan Perkumpulan Obstetri & Ginekologi Indonesia (POGI)." },
    { ico: "👨‍⚕️", name: "dr. Alvin Setiawan, Sp.OG, SubspFER, MKes, DMAS", role: "Dokter Spesialis Kebidanan & Kandungan · MRCCC Siloam Semanggi", bio: "Anggota Ikatan Dokter Indonesia (IDI) dan POGI." },
    { ico: "👩‍⚕️", name: "dr. Dewi Rochyantini, Sp.OG", role: "Dokter Spesialis Kebidanan & Kandungan · RS EMC Pekayon", bio: "Anggota Perkumpulan Obstetri & Ginekologi Indonesia (POGI)." },
    { ico: "👨‍⚕️", name: "dr. Harry Prawiro Tantry, Sp.OG, BMedSc. (Hons)", role: "Dokter Spesialis Obstetri & Ginekologi · Eka Hospital PIK", bio: "Berpengalaman menangani kehamilan normal & risiko tinggi, program kehamilan, hingga tindakan minimal invasif (laparoskopi, histeroskopi)." },
    { ico: "👩‍⚕️", name: "dr. Estrella Debby Leo, Sp.A", role: "Dokter Spesialis Anak · Eka Hospital PIK", bio: "Anggota Ikatan Dokter Anak Indonesia (IDAI)." },
    { ico: "👩‍⚕️", name: "dr. Kencana Shinta Moser, Sp.OG", role: "Dokter Spesialis Kebidanan & Kandungan · RS MMC", bio: "Memberikan layanan persalinan normal, operasi caesar, USG kandungan, konsultasi kehamilan, dan KB." },
    { ico: "👨‍⚕️", name: "dr. Eston Aryawan Hadibrata, Sp.OG", role: "Dokter Spesialis Kebidanan & Kandungan · RS Mitra Keluarga Surabaya", bio: "Tergabung dalam Perhimpunan Obstetri & Ginekologi Indonesia." },
    { ico: "👩‍⚕️", name: "dr. Regintha Yasmeen Burju Bachtum, Sp.OG", role: "Dokter Spesialis Obstetri & Ginekologi · RSIA Tambak", bio: "Tergabung dalam Ikatan Dokter Indonesia (IDI) dan POGI." },
    { ico: "👨‍⚕️", name: "dr. Duta Atur Tritama, Sp.OG", role: "Dokter Spesialis Kebidanan & Kandungan · Eka Hospital Bekasi", bio: "Tergabung dalam Ikatan Dokter Indonesia (IDI) dan POGI." },
    { ico: "👩‍⚕️", name: "dr. Stella Shirley Mansur, Sp.OG", role: "Dokter Spesialis Kebidanan & Kandungan · Stella Clinic", bio: "Anggota Ikatan Dokter Indonesia (IDI) dan POGI." },
  ],

  testimonials: [
    {
      stars: 5,
      ico: "🤰",
      name: "Ayah Andi & Bunda Tata",
      meta: "Hamil 27 minggu · 27 th",
      quote:
        "Sebagai pasangan baru yang belum tau cara handling newborn, setelah ikut kelas Gaia Parenting kami sudah tidak ada rasa takut & khawatir lagi merawat bayi baru lahir secara mandiri. Kelasnya di luar ekspektasi — semua pertanyaan terjawab dengan baik.",
    },
    {
      stars: 5,
      ico: "👨",
      name: "Ayah Alvin & Bunda Olive",
      meta: "Hamil 36 minggu",
      quote:
        "Ini pengalaman anak pertama kami, jadi banyak pelajaran yang harus kami pelajari ketika punya newborn. Semua itu kami dapatkan di kelas Gaia Parenting — sesuai ekspektasi dan seru banget!",
    },
    {
      stars: 5,
      ico: "👩",
      name: "Ayah Rian & Bunda Nadya",
      meta: "Hamil 35 minggu",
      quote:
        "Dari yang awalnya takut & kaku, setelah ikut kelas Gaia kami sekarang sudah bisa memandikan, bedong, mengurus tali pusat, dan tahu tindakan yang tepat pasca melahirkan. Sudah tidak cemas lagi — best banget!",
    },
  ],

  bonus: [
    { ico: "🔁", h: "Gratis reschedule", p: "Jika berhalangan hadir, Ayah Bunda dapat mengikuti sesi di jadwal berikutnya tanpa tambahan biaya." },
    { ico: "🏠", h: "Diskon 10% Homecare Gaia", p: "Peserta pelatihan mendapatkan diskon 10% untuk kunjungan homecare pertama Gaia." },
  ],

  recapTitle: "Siap menyambut si kecil dengan percaya diri?",
  recapSub: "Satu kelas, dua orang tua, ketenangan untuk bulan-bulan pertama.",

  faq: [
    { q: "Apakah suami wajib ikut?", a: "Sangat disarankan. Harga sudah untuk pasangan, dan banyak praktik (memandikan, bedong) jauh lebih ringan bila Ayah ikut menguasainya. Namun jika berhalangan, Bunda tetap bisa hadir sendiri atau bersama pendamping lain." },
    { q: "Usia kehamilan berapa yang ideal ikut?", a: "Paling nyaman di trimester ketiga (28 minggu ke atas), saat persiapan persalinan terasa relevan. Trimester kedua juga boleh kok, ilmunya tetap kepakai." },
    { q: "Saya sudah melahirkan, masih boleh ikut?", a: "Boleh. Materi perawatan bayi dan menyusui tetap sangat berguna untuk bayi usia beberapa minggu pertama." },
    { q: "Bagaimana kalau saya berhalangan di hari kelas?", a: "Peserta bisa reschedule gratis ke jadwal berikutnya yang tersedia. Cukup kabari admin sebelum hari pelaksanaan." },
    { q: "Apa yang perlu saya bawa?", a: "Cukup diri Ayah Bunda aja. Semua alat praktik (boneka phantom, set bedong, pakaian bayi) sudah kami sediakan." },
  ],
};