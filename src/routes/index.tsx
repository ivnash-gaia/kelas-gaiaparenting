import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import mpasiHero from "@/assets/mpasi-hero.jpg";
import newbornHero from "@/assets/newborn-care-hero.jpg";
import tumbuhKembangHero from "@/assets/tumbuh-kembang-hero.jpg";
import newbornOfflineHero from "@/assets/newborn-care-offline-hero.jpg";
import newbornSurabayaHero from "@/assets/newborn-care-surabaya-hero.jpg";
import laktasiHero from "@/assets/laktasi-hero.jpg";
import gtmCard from "@/assets/gtm-card.jpg";
import coupleYogaPoster from "@/lib/couple-yoga-poster";
import { GTM_OFFER } from "@/lib/gtm-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelas Gaia Parenting | Direktori Kelas Online & Offline" },
      {
        name: "description",
        content:
          "Pilih kelas parenting Gaia: MPASI, perawatan newborn, persiapan persalinan. Dibimbing dokter & pakar, ada yang online via Zoom, ada juga yang offline di Jakarta.",
      },
      { property: "og:title", content: "Kelas Gaia Parenting | Direktori Kelas Online & Offline" },
      {
        property: "og:description",
        content:
          "Pilih kelas parenting Gaia: MPASI, perawatan newborn, persiapan persalinan. Dibimbing dokter & pakar, ada yang online via Zoom, ada juga yang offline di Jakarta.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/gaia-academy-logo.png" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/gaia-academy-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/" }],
  }),
  component: Directory,
});

type EventItem = {
  slug: string;
  to: string;
  external?: boolean;
  tag: string;
  title: string;
  desc: string;
  facts: { k: string; v: string }[];
  price: string;
  status: "open" | "soon" | "full";
  image: string;
};

const EVENTS: EventItem[] = [
  {
    slug: "breastfeeding",
    to: "/kelas-mpasi-online",
    tag: "Kelas Online · Praktik",
    title: "Kelas Intensif MPASI 7 Hari",
    desc: "Kupas tuntas persiapan MPASI menu lengkap, dari panduan WHO/IDAI sampai koreksi tekstur langsung dari dokter.",
    facts: [
      { k: "Format", v: "Online · Zoom" },
      { k: "Durasi", v: "7 Sesi · ±7 jam" },
      { k: "Lokasi", v: "Daring" },
      { k: "Jadwal", v: "17–20 & 23–25 November 2026" },
    ],
    price: "Rp 175.000",
    status: "open",
    image: mpasiHero,
  },
  {
    slug: "newborn-care-advance",
    to: "/kelas-newborn-care",
    tag: "Kelas Online",
    title: "Kelas Perawatan Bayi Baru Lahir Advance",
    desc: "Persiapan persalinan SC, newborn checklist, pijat & tummy time, sampai sleep training dasar, bareng pakar.",
    facts: [
      { k: "Format", v: "Online · Zoom" },
      { k: "Durasi", v: "4 Sesi · ±4 jam" },
      { k: "Lokasi", v: "Daring" },
      { k: "Jadwal", v: "24 & 26–28 Oktober 2026" },
    ],
    price: "Rp 175.000",
    status: "open",
    image: newbornHero,
  },
  {
    slug: "tumbuh-kembang-0-5",
    to: "/kelas-tumbuh-kembang-anak-online",
    tag: "Kelas Online",
    title: "Kelas Tumbuh Kembang Anak Usia 0–5 Tahun",
    desc: "Pahami milestone, stimulasi motorik, bahasa, dan sosial emosi anak 0–5 tahun bersama dokter anak & psikolog klinis.",
    facts: [
      { k: "Format", v: "Online · Zoom" },
      { k: "Durasi", v: "4 Sesi · ±4 jam" },
      { k: "Lokasi", v: "Daring" },
      { k: "Jadwal", v: "28–30 September & 1 Oktober 2026" },
    ],
    price: "Rp 150.000",
    status: "open",
    image: tumbuhKembangHero,
  },
  {
    slug: "newborn-care-offline",
    to: "/kelas-newborn-care-offline",
    tag: "Kelas Offline · Praktik",
    title: "Kelas Perawatan Bayi Baru Lahir (Offline)",
    desc: "Praktik langsung buat pasangan calon orang tua: persiapan persalinan, merawat bayi, dan menyusui bareng dokter & bidan.",
    facts: [
      { k: "Format", v: "Offline · Praktik" },
      { k: "Durasi", v: "3 Sesi · ±6 jam" },
      { k: "Lokasi", v: "Jabodetabek, Bandung, Surabaya" },
      { k: "Jadwal", v: "Oktober–Desember 2026" },
    ],
    price: "Rp 550.000",
    status: "open",
    image: newbornOfflineHero,
  },
  {
    slug: "newborn-care-offline-surabaya",
    to: "/kelas-newborn-care-offline-surabaya",
    tag: "Kelas Offline · Surabaya",
    title: "Kelas Perawatan Bayi Baru Lahir (Offline) Surabaya",
    desc: "Khusus Surabaya. Praktik langsung di Mitra Keluarga & National Hospital, dibimbing dokter & bidan berpengalaman.",
    facts: [
      { k: "Format", v: "Offline · Praktik" },
      { k: "Durasi", v: "3 Sesi · ±6 jam" },
      { k: "Lokasi", v: "Surabaya" },
      { k: "Jadwal", v: "Oktober–Desember 2026" },
    ],
    price: "Rp 550.000",
    status: "open",
    image: newbornSurabayaHero,
  },
  {
    slug: "laktasi-online",
    to: "/kelas-laktasi-online",
    tag: "Kelas Online",
    title: "Kelas Laktasi Online: Dukung ASI Eksklusif",
    desc: "Belajar teknik menyusui yang benar, atasi slow weight gain, sampai ASI perah buat ibu bekerja, bareng konselor laktasi.",
    facts: [
      { k: "Format", v: "Online · Zoom" },
      { k: "Durasi", v: "4 Sesi · ±4 jam" },
      { k: "Lokasi", v: "Daring" },
      { k: "Jadwal", v: "22–25 September 2026" },
    ],
    price: "Rp 170.000",
    status: "open",
    image: laktasiHero,
  },
  {
    slug: "couple-yoga-childbirth-preparation",
    to: "/couple-yoga-and-childbirth-preparation",
    tag: "Kelas Offline · Pasangan",
    title: "Kelas Hari Pertama di Rumah",
    desc: "Kelas offline full day untuk couple yang menanti anak pertama: yoga, persiapan persalinan, newborn care, pemulihan mental & menyusui.",
    facts: [
      { k: "Format", v: "Offline · Praktik" },
      { k: "Durasi", v: "4 Sesi · Full Day" },
      { k: "Lokasi", v: "Graha Binakarsa, Jaksel" },
      { k: "Jadwal", v: "7 Nov 2026 · 08.00–15.45 WIB" },
    ],
    price: "Rp 999.000",
    status: "open",
    image: coupleYogaPoster.url,
  },
  {
    slug: "gtm-online",
    to: "/kelas-gtm-online",
    tag: "Kelas Online · On-demand",
    title: GTM_OFFER.name,
    desc: "Si kecil lepeh, emut, atau tutup mulut pas makan? Pahami proses belajar makannya lewat video singkat bareng dr. Frecillia Regina, Sp.A, IBCLC.",
    facts: [
      { k: "Format", v: "Video on-demand" },
      { k: "Durasi", v: `${GTM_OFFER.totalVideos} Video · ${GTM_OFFER.duration}` },
      { k: "Lokasi", v: "Daring" },
      { k: "Jadwal", v: "Tonton kapan saja" },
    ],
    price: GTM_OFFER.priceLabel,
    // Same switch as the page's buy button: "open" only once the order link exists.
    status: GTM_OFFER.orderUrl ? "open" : "soon",
    image: gtmCard,
  },
];


const statusStyle: Record<EventItem["status"], { cls: string; label: string }> = {
  open: { cls: "bg-emerald-100 text-emerald-800", label: "Pendaftaran Dibuka" },
  soon: { cls: "bg-amber-100 text-amber-800", label: "Segera Hadir" },
  full: { cls: "bg-muted text-muted-foreground", label: "Penuh" },
};

function Directory() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[920px] px-5 pb-20">
        <TopBar />

        {/* Intro */}
        <section className="py-12">
          <div className="mb-3 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-orange-deep">
            <span className="inline-block h-[1.5px] w-[22px] bg-brand-orange" />
            Kelas Gaia Parenting
          </div>
          <h1 className="font-display mb-3 text-[34px] font-semibold leading-[1.1] text-brand-orange-deep md:text-[42px]">
            Belajar jadi orang tua,{" "}
            <em className="font-serif-em text-primary">tanpa coba-coba.</em>
          </h1>
          <p className="max-w-[60ch] text-[15.5px] leading-relaxed text-ink-soft">
            Direktori kelas parenting berbasis ilmu kesehatan & psikologi, disesuaikan dengan
            konteks keluarga Indonesia. Pilih kelas yang paling kamu butuhkan saat ini.
          </p>
        </section>

        {/* Event list */}
        <section className="grid gap-4 md:grid-cols-2">
          {EVENTS.map((e) => {
            const s = statusStyle[e.status];
            const card = (
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]">
                <div className="mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10.5px] font-bold uppercase tracking-widest text-brand-orange-deep">
                    {e.tag}
                  </span>
                  <span className={`rounded-md px-2 py-0.5 text-[10.5px] font-bold ${s.cls}`}>
                    {s.label}
                  </span>
                </div>
                <h2 className="font-display mb-2 text-[20px] font-semibold leading-snug text-foreground group-hover:text-primary">
                  {e.title}
                </h2>
                <p className="mb-4 text-[13.5px] leading-snug text-ink-soft">{e.desc}</p>

                <dl className="mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                  {e.facts.map((f) => (
                    <div key={f.k} className="bg-card px-3 py-2">
                      <dt className="text-[10px] uppercase tracking-widest text-ink-soft">
                        {f.k}
                      </dt>
                      <dd className="text-[12.5px] font-semibold text-foreground">{f.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-auto flex items-center justify-between">
                  <div className="font-display text-[18px] font-semibold text-foreground">
                    {e.price}
                  </div>
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-primary">
                    {e.status === "full" ? "Notifikasi" : "Lihat detail"}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </article>
            );

            // "soon" cards still open their page (it exists, only ordering is not open yet).
            if (e.status === "full") {
              return (
                <div key={e.slug} className="opacity-80">
                  {card}
                </div>
              );
            }
            return (
              <Link key={e.slug} to={e.to} className="block">
                {card}
              </Link>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-6 text-center text-[12px] text-ink-soft">
          © 2026 Gaia Parenting ·{" "}
          <Link to="/privacy-policy" className="transition hover:text-foreground">
            Kebijakan Privasi
          </Link>{" "}
          · Pengetahuan ilmiah, pemahaman budaya Indonesia.
        </footer>
      </div>
    </div>
  );
}
