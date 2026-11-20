import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { TUMBUH_KEMBANG_EVENT } from "@/lib/event-tumbuh-kembang";

export const Route = createFileRoute("/kelas-tumbuh-kembang-anak-online")({
  head: () => ({
    meta: [
      { title: "Kelas Tumbuh Kembang Anak Usia 0–5 Tahun — Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas online 4 sesi via Zoom — pahami milestone, stimulasi motorik, bahasa, dan sosial emosi anak 0–5 tahun bersama dokter anak & psikolog. Rp 150rb, akses rekaman 6 bulan.",
      },
      { property: "og:title", content: "Kelas Tumbuh Kembang Anak Usia 0–5 Tahun — Gaia Parenting" },
      {
        property: "og:description",
        content:
          "Kelas online 4 sesi via Zoom — milestone, stimulasi motorik, bahasa, dan sosial emosi anak 0–5 tahun bersama dokter anak & psikolog klinis.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-tumbuh-kembang-anak-online" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/tumbuh-kembang-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/tumbuh-kembang-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-tumbuh-kembang-anak-online" }],
  }),
  component: () => <EventPage event={TUMBUH_KEMBANG_EVENT} />,
});