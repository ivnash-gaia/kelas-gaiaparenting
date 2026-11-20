import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { NEWBORN_CARE_SURABAYA_EVENT } from "@/lib/event-newborn-care-surabaya";

export const Route = createFileRoute("/kelas-newborn-care-offline-surabaya")({
  head: () => ({
    meta: [
      { title: "Kelas Perawatan Bayi Baru Lahir (Offline) Surabaya | Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas offline praktik khusus Surabaya: persiapan persalinan, perawatan bayi, menyusui. Jadwal Oktober–Desember 2026 di Mitra Keluarga & National Hospital. Hemat 45% untuk pasangan.",
      },
      { property: "og:title", content: "Kelas Perawatan Bayi Baru Lahir (Offline) Surabaya | Gaia Parenting" },
      {
        property: "og:description",
        content:
          "Kelas offline praktik bareng dokter & bidan di Surabaya. Siapin diri menyambut si kecil, jadwal Oktober–Desember 2026.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-newborn-care-offline-surabaya" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-surabaya-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-surabaya-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-newborn-care-offline-surabaya" }],
  }),
  component: () => <EventPage event={NEWBORN_CARE_SURABAYA_EVENT} />,
});