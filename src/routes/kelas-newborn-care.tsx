import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { NEWBORN_CARE_EVENT } from "@/lib/event-newborn-care";

export const Route = createFileRoute("/kelas-newborn-care")({
  head: () => ({
    meta: [
      { title: "Kelas Perawatan Bayi Baru Lahir Advance — Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas online 4 sesi via Zoom pada 24 & 26–28 Oktober 2026 — persiapan persalinan SC, newborn checklist, sleep training dasar, bonding, dan stimulasi newborn.",
      },
      { property: "og:title", content: "Kelas Perawatan Bayi Baru Lahir Advance — Gaia Parenting" },
      {
        property: "og:description",
        content:
          "Kelas Newborn Advance, 24 & 26–28 Oktober 2026 — persiapan persalinan SC, newborn checklist, sleep training dasar, bonding, dan stimulasi bersama pakar.",
      },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/kelas-newborn-care" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-hero.jpg" },
      { name: "twitter:image", content: "https://kelas.gaiaparenting.com/og/newborn-care-hero.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://kelas.gaiaparenting.com/kelas-newborn-care" }],
  }),
  component: () => <EventPage event={NEWBORN_CARE_EVENT} />,
});