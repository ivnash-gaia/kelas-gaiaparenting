import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

// /kelas-newborn-online is a master page: the run details (dates, price, links, experts) change,
// the structure does not. These tests check that the data is consistent with itself, so they keep
// passing for the next run, and fail when an edit introduces a mistake (wrong weekday, badge that
// does not match the price, a menu or card that no longer reads from this file).

// Evaluate the actual event configuration without the bundler.
const source = readFileSync(new URL("./event-newborn-online.ts", import.meta.url), "utf8")
  .replace(/^import .*;\n/gm, "")
  .replace("export const NEWBORN_ONLINE_EVENT: EventData =", "const event =");
const poster = { url: "/og/newborn-online-poster.jpg", absoluteUrl: "https://x/og/p.jpg" };
const event = runInNewContext(`${source}\nevent;`, { newbornOnlinePoster: poster });

const idr = (s) => Number(String(s).replace(/[^\d]/g, ""));
const DAYS = { minggu: 0, senin: 1, selasa: 2, rabu: 3, kamis: 4, jumat: 5, sabtu: 6 };
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, mei: 4, jun: 5, jul: 6, agu: 7, agt: 7, sep: 8, okt: 9, nov: 10, des: 11 };

/** "Kamis, 26 Nov 2026 (Materi 1)" -> { weekday: 4, date: Date(UTC) } */
function parseRow(d) {
  const m = d.match(/^([A-Za-z]+),\s*(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (!m) throw new Error(`Cannot read schedule date: ${d}`);
  const weekday = DAYS[m[1].toLowerCase()];
  const month = MONTHS[m[3].slice(0, 3).toLowerCase()];
  if (weekday === undefined || month === undefined) throw new Error(`Unknown day or month in: ${d}`);
  return { weekday, day: Number(m[2]), date: new Date(Date.UTC(Number(m[4]), month, Number(m[2]))) };
}

describe("price", () => {
  test("strike-through price is higher than the current price", () => {
    expect(idr(event.priceWas)).toBeGreaterThan(idr(event.priceNow));
  });

  test("discount badge matches the prices (Rp amount or percent)", () => {
    const now = idr(event.priceNow);
    const was = idr(event.priceWas);
    const badge = event.priceBadge;
    if (badge.includes("Rp")) {
      expect(idr(badge)).toBe(was - now);
    } else if (badge.includes("%")) {
      expect(Math.abs(idr(badge) - ((was - now) / was) * 100)).toBeLessThan(1);
    } else {
      throw new Error(`Badge is neither an Rp amount nor a percent: ${badge}`);
    }
  });
});

describe("links", () => {
  test("registration goes to an orderonline.id form", () => {
    const order = new URL(event.ctaPrimary.href);
    expect(order.host).toBe("gaia.orderonline.id");
    expect(order.searchParams.get("form")).toBeTruthy();
  });

  test("WhatsApp button opens Gaia's number with a prefilled question about this class", () => {
    const wa = new URL(event.ctaSecondary.href);
    expect(wa.host).toBe("wa.me");
    expect(wa.pathname).toBe("/6281219596828");
    expect(wa.searchParams.get("text")).toContain("Newborn Online");
  });
});

describe("schedule", () => {
  const rows = event.schedule.map((s) => ({ ...s, ...parseRow(s.d) }));

  test("at least one session, each with a time and a valid status", () => {
    expect(rows.length).toBeGreaterThan(0);
    for (const r of rows) {
      expect(r.t).toMatch(/\d{1,2}[.:]\d{2}/);
      expect(["open", "few", "full"]).toContain(r.status);
    }
  });

  test("the weekday name matches the date (catches typos when dates are edited)", () => {
    for (const r of rows) expect(r.date.getUTCDay()).toBe(r.weekday);
  });

  test("sessions are in date order", () => {
    const times = rows.map((r) => r.date.getTime());
    expect(times).toEqual([...times].sort((a, b) => a - b));
  });

  test('the hero "Jadwal terdekat" starts with the first session day', () => {
    const fact = event.heroFacts.find((f) => f.k === "Jadwal terdekat").v;
    expect(fact.startsWith(String(rows[0].day))).toBe(true);
  });
});

describe("content structure", () => {
  test("every curriculum session names one of the listed experts and has topics", () => {
    expect(event.curriculum.length).toBeGreaterThan(0);
    for (const c of event.curriculum) {
      expect(c.items.length).toBeGreaterThan(0);
      expect(event.instructor.some((i) => c.title.includes(i.name))).toBe(true);
    }
  });

  test("testimonials, when present, are complete (the section is hidden while empty)", () => {
    for (const t of event.testimonials) {
      expect(t.name && t.quote).toBeTruthy();
      expect(t.name).not.toMatch(/\[|placeholder/i);
    }
  });

  test("online class does not promise props or an in-person venue", () => {
    expect(event.faq.some((f) => f.a.includes("alat peraga tidak disediakan"))).toBe(true);
    expect(event.venue).toContain("Zoom");
  });

  test("no em-dash drama in the learner-facing copy", () => {
    expect(JSON.stringify(event)).not.toContain("—");
  });
});

describe("Meta Pixel name", () => {
  test("is the class name, so every run is counted under one event in Ads reporting", () => {
    expect(event.pixelName).toBe("Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula");
  });
});

describe("poster and directory card", () => {
  test("poster and its 16:9 card version exist, and the page uses the poster", () => {
    expect(event.heroImage).toBe("/og/newborn-online-poster.jpg");
    expect(existsSync(new URL("../../public/og/newborn-online-poster.jpg", import.meta.url))).toBe(true);
    const posterSrc = readFileSync(new URL("./newborn-online-poster.ts", import.meta.url), "utf8");
    const file = posterSrc.match(/cardUrl:\s*"\/og\/([^"]+)"/)[1];
    expect(existsSync(new URL(`../../public/og/${file}`, import.meta.url))).toBe(true);
  });

  test("the homepage card reads price and dates from this data, not its own copy", () => {
    const home = readFileSync(new URL("../routes/index.tsx", import.meta.url), "utf8");
    expect(home).toContain("price: NEWBORN_ONLINE_EVENT.priceNow");
    expect(home).toContain('NEWBORN_ONLINE_EVENT.heroFacts.find((f) => f.k === "Jadwal terdekat")');
    expect(home).toContain("image: newbornOnlinePoster.cardUrl");
  });

  test("the page lives at the generic URL, registered and in the menu", () => {
    expect(existsSync(new URL("../routes/kelas-newborn-online.tsx", import.meta.url))).toBe(true);
    expect(readFileSync(new URL("../../vite.config.ts", import.meta.url), "utf8")).toContain('"/kelas-newborn-online"');
    expect(readFileSync(new URL("./nav-data.ts", import.meta.url), "utf8")).toContain('"/kelas-newborn-online"');
  });
});
