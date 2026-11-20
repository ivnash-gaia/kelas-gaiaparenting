import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

// Evaluate the actual event configuration without the bundler's image loader.
const source = readFileSync(new URL("./event-couple-yoga.ts", import.meta.url), "utf8")
  .replace(/^import .*;\n/gm, "")
  .replace("export const COUPLE_YOGA_EVENT: EventData =", "const event =");
const event = runInNewContext(`${source}\nevent;`, { coupleYogaPoster: { url: "poster" } });

describe("couple class requirements", () => {
  test("registration uses the supplied class URL and form", () => {
    expect(event.ctaPrimary.href).toBe("https://gaia.orderonline.id/kelas-hari-pertama-di-rumah?form=6ae02c955addcd0f5506490c");
  });
  test("early bird is Rp999,000 for the first five couples", () => {
    expect(event.priceNow).toBe("Rp 999.000");
    expect(event.priceNote.match(/untuk (\d+) couple pertama/)?.[1]).toBe("5");
  });
  test("subsequent price is Rp1,200,000 per couple", () => {
    expect(event.priceWas).toBe("Rp 1.200.000");
    expect(event.priceNote.match(/Selanjutnya Rp ([\d.]+) per couple/)?.[1]).toBe("1.200.000");
  });
  test("only November 7 is scheduled from 08:00 to 15:45", () => {
    expect(event.schedule).toEqual([
      { d: "Sabtu, 7 November 2026", t: "08.00–15.45 WIB", status: "open" },
    ]);
  });
  test("four sessions include newborn training third and mental/breastfeeding fourth", () => {
    expect(event.curriculum).toHaveLength(4);
    expect(event.curriculum.map((session) => session.items.length)).toEqual([6, 9, 5, 8]);
    expect(event.curriculum[2]?.items[0]).toBe("Praktik memandikan bayi baru lahir");
    expect(event.curriculum[3]?.items[0]).toBe("Baby Blues vs PPD: kenali bedanya");
  });
});