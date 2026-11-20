import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { MPASI_EVENT } from "@/lib/event-mpasi";

export const Route = createFileRoute("/kelas-mpasi-online")({
  head: () => ({
    meta: [
      { title: "Kelas Intensif MPASI 7 Hari | Gaia Parenting" },
      {
        name: "description",
          content:
            "Kelas online 7 sesi via Zoom (17–20 & 23–25 November 2026). Isinya panduan WHO/IDAI, deteksi alergi, menu BB booster, sampai koreksi tekstur MPASI langsung dari dokter. Rp 175rb, akses rekaman 6 bulan.",
      },
      { property: "og:title", content: "Kelas Intensif MPASI 7 Hari | Gaia Parenting" },
        {
          property: "og:description",
          content:
            "Kelas online 7 sesi via Zoom (17–20 & 23–25 November 2026). Isinya panduan WHO/IDAI, deteksi alergi, menu BB booster, sampai koreksi tekstur MPASI langsung dari dokter spesialis anak.",
        },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-mpasi-online" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/mpasi-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/mpasi-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-mpasi-online" }],
  }),
  component: () => <EventPage event={MPASI_EVENT} />,
});