import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { NEWBORN_CARE_OFFLINE_EVENT } from "@/lib/event-newborn-care-offline";

export const Route = createFileRoute("/kelas-newborn-care-offline")({
  head: () => ({
    meta: [
      { title: "Kelas Perawatan Bayi Baru Lahir (Offline) | Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas offline praktik untuk orang tua baru: persiapan persalinan, perawatan bayi, menyusui. Jadwal Oktober–Desember 2026 di Jabodetabek, Bandung, dan Surabaya. Hemat 45% untuk pasangan.",
      },
      { property: "og:title", content: "Kelas Perawatan Bayi Baru Lahir (Offline) | Gaia Parenting" },
      {
        property: "og:description",
        content:
          "Kelas offline praktik bareng dokter & bidan. Siapin diri menyambut si kecil, jadwal Oktober–Desember 2026 di Jabodetabek, Bandung, dan Surabaya.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-newborn-care-offline" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-offline-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-offline-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-newborn-care-offline" }],
  }),
  component: () => <EventPage event={NEWBORN_CARE_OFFLINE_EVENT} />,
});