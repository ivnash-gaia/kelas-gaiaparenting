import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { COUPLE_YOGA_EVENT } from "@/lib/event-couple-yoga";
import coupleYogaPoster from "@/lib/couple-yoga-poster";

export const Route = createFileRoute("/couple-yoga-and-childbirth-preparation")({
  head: () => ({
    meta: [
      { title: "Kelas Hari Pertama di Rumah | Gaia Parenting" },
      {
        name: "description",
        content:
"Kelas offline full day untuk couple yang menanti anak pertama: yoga, persalinan, newborn care, mental & menyusui. 7 November 2026, 08.00–15.45 WIB di Graha Binakarsa. Early bird Rp999.000 per couple untuk 5 couple pertama, selanjutnya Rp1.200.000.",
      },
      {
        property: "og:title",
        content: "Kelas Hari Pertama di Rumah | Gaia Parenting",
      },
      {
        property: "og:description",
        content:
"Siap menjalani hari pertama di rumah bersama si kecil: 4 sesi praktik untuk calon orang tua. Graha Binakarsa, 7 November 2026, 08.00–15.45 WIB. Early bird Rp999.000 per couple untuk 5 couple pertama, selanjutnya Rp1.200.000.",
      },
      {
        property: "og:url",
        content: "https://kelas.gaiaparenting.com/couple-yoga-and-childbirth-preparation",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:image",
        content: `https://kelas.gaiaparenting.com${coupleYogaPoster.url}`,
      },
      {
        name: "twitter:image",
        content: `https://kelas.gaiaparenting.com${coupleYogaPoster.url}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://kelas.gaiaparenting.com/couple-yoga-and-childbirth-preparation",
      },
    ],
  }),
  component: () => <EventPage event={COUPLE_YOGA_EVENT} />,
});
