// Single source for the top menu (src/components/TopBar.tsx).
// Every `to` must be a published page: a route file in src/routes/ AND a path in PAGES (vite.config.ts).
// nav-data.test.js checks that, so a renamed or removed page cannot leave a dead menu link.

export type NavLeaf = {
  to: string;
  label: string;
  /** Small second line under the label: format, place. */
  hint?: string;
};

export type NavLink = { label: string; to: string; exact?: boolean };
export type NavGroup = { label: string; items: NavLeaf[] };
export type NavEntry = NavLink | NavGroup;

export function isGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

export const NAV: NavEntry[] = [
  { label: "Beranda", to: "/", exact: true },
  {
    label: "Kelas Online",
    items: [
      {
        to: "/kelas-newborn-online",
        label: "Perawatan Bayi Baru Lahir untuk Pemula",
        hint: "Zoom · 3 materi",
      },
      { to: "/kelas-mpasi-online", label: "Intensif MPASI 7 Hari", hint: "Zoom · 7 sesi" },
      {
        to: "/kelas-newborn-care",
        label: "Perawatan Bayi Baru Lahir Advance",
        hint: "Zoom · 4 sesi",
      },
      {
        to: "/kelas-tumbuh-kembang-anak-online",
        label: "Tumbuh Kembang Anak 0–5 Tahun",
        hint: "Zoom · 4 sesi",
      },
      { to: "/kelas-laktasi-online", label: "Laktasi: Dukung ASI Eksklusif", hint: "Zoom · 4 sesi" },
    ],
  },
  {
    label: "Kelas Offline",
    items: [
      {
        to: "/kelas-newborn-care-offline",
        label: "Perawatan Bayi Baru Lahir (Offline)",
        hint: "Jabodetabek, Bandung, Surabaya",
      },
      {
        to: "/kelas-newborn-care-offline-surabaya",
        label: "Perawatan Bayi Baru Lahir Surabaya",
        hint: "Surabaya · 3 sesi",
      },
      {
        to: "/couple-yoga-and-childbirth-preparation",
        label: "Hari Pertama di Rumah",
        hint: "Jakarta Selatan · Untuk pasangan",
      },
    ],
  },
  {
    label: "Belajar Mandiri",
    items: [{ to: "/kelas-gtm-online", label: "Kelas Online GTM", hint: "Video on-demand · tonton kapan saja" }],
  },
];

/** Strip a trailing slash so "/kelas-gtm-online/" still matches "/kelas-gtm-online". */
export function normalizePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function isGroupActive(group: NavGroup, pathname: string): boolean {
  const p = normalizePath(pathname);
  return group.items.some((item) => item.to === p);
}
