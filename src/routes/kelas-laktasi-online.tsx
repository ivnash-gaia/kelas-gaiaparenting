import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { LAKTASI_EVENT } from "@/lib/event-laktasi";

export const Route = createFileRoute("/kelas-laktasi-online")({
  head: () => ({
    meta: [
      { title: "Kelas Laktasi Online — Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas online 4 sesi via Zoom — konsep dasar menyusui, slow weight gain, tantangan menyusui, sampai ASI perah untuk ibu bekerja. Dibimbing konselor laktasi.",
      },
      { property: "og:title", content: "Kelas Laktasi Online — Gaia Parenting" },
      {
        property: "og:description",
        content:
          "Belajar teknik menyusui yang benar bersama konselor laktasi — 4 sesi Zoom, 22–25 September 2026. Hemat 50% khusus pendaftar hari ini.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-laktasi-online" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/laktasi-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/laktasi-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-laktasi-online" }],
  }),
  component: () => <EventPage event={LAKTASI_EVENT} />,
});