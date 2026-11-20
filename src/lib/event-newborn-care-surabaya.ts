import type { EventData } from "./event-data";
import { NEWBORN_CARE_OFFLINE_EVENT } from "./event-newborn-care-offline";
import heroImage from "@/assets/newborn-care-surabaya-hero.jpg";

export const NEWBORN_CARE_SURABAYA_EVENT: EventData = {
  ...NEWBORN_CARE_OFFLINE_EVENT,
  topbarTag: "Kelas Offline · Surabaya",
  heroImage,
  heroFacts: [
    { k: "Format", v: "Offline · Praktik" },
    { k: "Durasi", v: "3 Sesi (±6 jam)" },
    { k: "Lokasi", v: "Surabaya" },
    { k: "Jadwal terdekat", v: "Oktober–Desember 2026" },
  ],
  ctaSecondary: {
    label: "Tanya dulu via WhatsApp",
    href: "https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20mau%20tanya%20tentang%20Kelas%20Newborn%20Offline%20Surabaya",
  },
  schedule: NEWBORN_CARE_OFFLINE_EVENT.schedule.filter((s) => {
    const loc = (s.loc ?? "").toLowerCase();
    return loc.includes("surabaya") || loc.includes("sidoarjo");
  }),
  venue:
    "Tersedia di Surabaya (Mitra Keluarga & National Hospital). Lokasi spesifik tertera di tiap jadwal.",
};