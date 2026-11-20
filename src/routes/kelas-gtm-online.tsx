import { createFileRoute } from "@tanstack/react-router";
import { GtmPage } from "@/components/gtm/GtmPage";
import { GTM_URL } from "@/lib/gtm-data";

const title = "Kelas Online GTM (Gerakan Tutup Mulut) — dr. Frecillia Regina, Sp.A, IBCLC";
const description =
  "Anak lepeh, emut, tutup mulut? Kelas online 26 video (±90 menit) bersama dr. Frecillia Regina, Sp.A, IBCLC untuk orang tua dan pengasuh anak 6 bulan–3 tahun. Rp149.000. Edukasi, bukan pengganti konsultasi dokter.";
const image = "https://kelas.gaiaparenting.com/og/gtm-og.png";

export const Route = createFileRoute("/kelas-gtm-online")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Anak lepeh, emut, tutup mulut? Ternyata bukan soal menunya, Bun." },
      { property: "og:description", content: description },
      { property: "og:url", content: GTM_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: GTM_URL }],
  }),
  component: GtmPage,
});
