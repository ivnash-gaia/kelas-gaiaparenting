import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "@/components/EventPage";
import { NEWBORN_ONLINE_EVENT } from "@/lib/event-newborn-online";
import newbornOnlinePoster from "@/lib/newborn-online-poster";

const URL = "https://kelas.gaiaparenting.com/kelas-newborn-online-gaia";

export const Route = createFileRoute("/kelas-newborn-online-gaia")({
  head: () => ({
    meta: [
      { title: "Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula | Gaia Parenting" },
      {
        name: "description",
        content:
          "Kelas online 3 materi via Zoom: persalinan, perawatan bayi baru lahir, dan persiapan menyusui bareng dokter kandungan, perawat, dan konselor menyusui. Rp 135rb, rekaman 6 bulan.",
      },
      {
        property: "og:title",
        content: "Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula | Gaia Parenting",
      },
      {
        property: "og:description",
        content:
          "Kelas online 3 materi via Zoom: persalinan, merawat bayi baru lahir, dan menyusui bareng dokter kandungan, perawat, dan konselor menyusui.",
      },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: newbornOnlinePoster.absoluteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: newbornOnlinePoster.absoluteUrl },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => <EventPage event={NEWBORN_ONLINE_EVENT} />,
});
