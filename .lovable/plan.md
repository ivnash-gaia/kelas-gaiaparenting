## Goal

Create a new landing page that is a Surabaya-only variant of "Kelas Perawatan Bayi Baru Lahir (Offline)". Same content/structure — only the schedule and hero image differ.

## Files to create

- `src/assets/newborn-care-surabaya-hero.jpg` — new hero image, generated with a subtle Sura & Baya (shark + crocodile) motif, soft pastel palette consistent with the rest of the brand (warm, calm, parent-friendly — not cartoony).
- `public/og/newborn-care-surabaya-hero.jpg` — same image, used for OG/Twitter preview.
- `src/lib/event-newborn-care-surabaya.ts` — clones `NEWBORN_CARE_OFFLINE_EVENT` with these changes:
  - `topbarTag`: "Kelas Offline · Surabaya"
  - `heroFacts.Lokasi`: "Surabaya" (rest unchanged)
  - `heroFacts.Jadwal terdekat`: "Juni–Agustus 2026 · Surabaya"
  - `heroImage`: the new Surabaya hero
  - `schedule`: filtered to only the Surabaya entries from the parent (7 sessions: 13 Jun, 27 Jun, 11 Jul, 25 Jul, 8 Aug, 29 Aug at Mitra Keluarga Surabaya / National Hospital Surabaya)
  - `venue`: "Tersedia di Surabaya — Mitra Keluarga & National Hospital. Lokasi spesifik tertera di tiap jadwal."
  - `ctaSecondary` WhatsApp text: "...Kelas Newborn Offline Surabaya"
  - Everything else (price, curriculum, diff, instructor list, testimonials, bonus, FAQ, recap) stays identical.
- `src/routes/kelas-newborn-care-offline-surabaya.tsx` — route mirroring `kelas-newborn-care-offline.tsx` with Surabaya-specific meta:
  - title: "Kelas Perawatan Bayi Baru Lahir (Offline) Surabaya — Gaia Parenting"
  - description mentions "7 jadwal di Surabaya (Juni–Agustus 2026)"
  - canonical + og:url: `/kelas-newborn-care-offline-surabaya`
  - og:image: `/og/newborn-care-surabaya-hero.jpg`

## Files to edit

- `src/routes/index.tsx` — add a fourth card to the `EVENTS` directory pointing at `/kelas-newborn-care-offline-surabaya`, status `open`, with the Surabaya jadwal range.

## Not touched

`EventPage.tsx`, `event-data.ts` types, `TopBar`, styling, tabs/accordion logic (with only one city, the existing city-tabs renderer still works — it just shows a single "Surabaya" tab), pixel tracking, other routes.

## Verification

After build: open `/kelas-newborn-care-offline-surabaya` in preview, confirm hero shows the new Surabaya image, jadwal section shows only the 7 Surabaya sessions grouped by month, and the new card appears on `/`.
