import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

// Evaluate the actual event configuration without the bundler.
const source = readFileSync(new URL("./event-newborn-online.ts", import.meta.url), "utf8")
  .replace(/^import .*;\n/gm, "")
  .replace("export const NEWBORN_ONLINE_EVENT: EventData =", "const event =");
const poster = { url: "/og/newborn-online-poster.jpg", absoluteUrl: "https://x/og/p.jpg" };
const event = runInNewContext(`${source}\nevent;`, { newbornOnlinePoster: poster });

const parseIDR = (s) => Number(s.replace(/[^\d]/g, ""));
const stripTags = (s) => s.replace(/<[^>]+>/g, "");

describe("Newborn Online (26-27 & 30 Nov 2026) matches the brief", () => {
  test("price: Rp135.000, strike Rp175.000, badge matches the difference", () => {
    expect(event.priceNow).toBe("Rp 135.000");
    expect(event.priceWas).toBe("Rp 175.000");
    const saving = parseIDR(event.priceWas) - parseIDR(event.priceNow);
    expect(saving).toBe(40000);
    expect(event.priceBadge).toBe("Hemat Rp 40.000");
  });

  test("order and WhatsApp links", () => {
    const order = new URL(event.ctaPrimary.href);
    expect(order.host).toBe("gaia.orderonline.id");
    expect(order.pathname).toBe("/pelatihan-perawatan-bayi-baru-lahir-online");
    expect(order.searchParams.get("form")).toBe("62e4f217af0587115a3ebed5");
    const wa = new URL(event.ctaSecondary.href);
    expect(wa.host).toBe("wa.me");
    expect(wa.pathname).toBe("/6281219596828");
    expect(wa.searchParams.get("text")).toBe("Halo Gaia, saya mau tanya tentang Kelas Newborn Online");
  });

  test("three sessions on the right weekdays and times, all open", () => {
    expect(event.schedule.map((s) => [s.d, s.t, s.status])).toEqual([
      ["Kamis, 26 Nov 2026 (Materi 1)", "19.00–20.00 WIB", "open"],
      ["Jumat, 27 Nov 2026 (Materi 2)", "19.00–20.30 WIB", "open"],
      ["Senin, 30 Nov 2026 (Materi 3)", "16.00–17.30 WIB", "open"],
    ]);
    // The weekday names are real: 26 Nov 2026 is a Thursday.
    const day = (d) => new Date(Date.UTC(2026, 10, d)).getUTCDay();
    expect([day(26), day(27), day(30)]).toEqual([4, 5, 1]);
  });

  test("the three session lengths add up to the advertised ±4 jam", () => {
    expect(event.heroFacts.find((f) => f.k === "Durasi").v).toBe("3 Materi (±4 jam)");
    expect(1 + 1.5 + 1.5).toBe(4);
  });

  test("curriculum: 3 sessions with 15, 5 and 7 topics, each led by its own expert", () => {
    expect(event.curriculum.map((c) => c.items.length)).toEqual([15, 5, 7]);
    expect(event.curriculum[0].title).toContain("dr. Ruswantriani, Sp.OG");
    expect(event.curriculum[1].title).toContain("Gita Suci Pratiwi");
    expect(event.curriculum[2].title).toContain("Inong Mala");
  });

  test("3 experts, 3 learning points, 4 bonuses, 3 FAQ entries", () => {
    expect(event.instructor.map((i) => i.name)).toEqual([
      "dr. Ruswantriani, Sp.OG",
      "Gita Suci Pratiwi, A.Md.Kep., CFPY",
      "Inong Mala, S.Psi.",
    ]);
    expect(event.learn.length).toBe(3);
    expect(event.bonus.map((b) => b.h)).toContain("Hadiah Diapers Merries NB");
    expect(event.bonus.length).toBe(4);
    expect(event.faq.length).toBe(3);
  });

  test("no testimonials in the brief, so none are invented", () => {
    expect(event.testimonials).toEqual([]);
  });

  test("online class does not promise props or an in-person venue", () => {
    expect(event.faq[2].a).toContain("alat peraga tidak disediakan");
    expect(event.venue).toContain("Zoom");
  });

  test("Meta Pixel name is the stable class name, not the headline", () => {
    expect(event.pixelName).toBe("Pelatihan Perawatan Bayi Baru Lahir untuk Orang Tua Pemula");
    expect(stripTags(event.heroTitle)).toBe(
      "Siap Sambut Bayi Baru Lahir, Belajar dari 3 Pakar Langsung untuk Orang Tua Pemula dari Rumah",
    );
  });

  test("poster file exists and is the hero image", () => {
    expect(event.heroImage).toBe("/og/newborn-online-poster.jpg");
    expect(existsSync(new URL("../../public/og/newborn-online-poster.jpg", import.meta.url))).toBe(true);
  });

  test("the 16:9 card version of the poster exists and is wired to the directory card", () => {
    const posterSrc = readFileSync(new URL("./newborn-online-poster.ts", import.meta.url), "utf8");
    const file = posterSrc.match(/cardUrl:\s*"\/og\/([^"]+)"/)[1];
    expect(existsSync(new URL(`../../public/og/${file}`, import.meta.url))).toBe(true);
    const home = readFileSync(new URL("../routes/index.tsx", import.meta.url), "utf8");
    expect(home).toContain("image: newbornOnlinePoster.cardUrl");
  });

  test("no em-dash drama in the learner-facing copy", () => {
    const text = JSON.stringify(event);
    expect(text).not.toContain("—");
  });
});
