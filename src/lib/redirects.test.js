import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

// public/_redirects holds the 301s from URLs that moved (Cloudflare Pages reads it at the site root).
// A wrong line here silently breaks old ads and shared links, or loops, so check the file itself.
const raw = readFileSync(new URL("../../public/_redirects", import.meta.url), "utf8");
const rules = raw
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"))
  .map((l) => {
    const [from, to, status] = l.split(/\s+/);
    return { from, to, status };
  });

const config = readFileSync(new URL("../../vite.config.ts", import.meta.url), "utf8");
const pages = [...config.matchAll(/^\s*"(\/[^"]*)",?\s*$/gm)].map((m) => m[1]);

describe("redirects", () => {
  test("the page list was read from vite.config.ts", () => {
    expect(pages).toContain("/kelas-newborn-care-online");
    expect(pages.length).toBeGreaterThan(8);
  });

  test("every rule has a source, a destination and a permanent (301) status", () => {
    expect(rules.length).toBeGreaterThan(0);
    for (const r of rules) {
      expect(r.from?.startsWith("/")).toBe(true);
      expect(r.to?.startsWith("/")).toBe(true);
      expect(r.status).toBe("301");
    }
  });

  test("the destination is a published page", () => {
    for (const r of rules) expect(pages).toContain(r.to);
  });

  test("the old URL is no longer published as a page (it only redirects)", () => {
    for (const r of rules) expect(pages).not.toContain(r.from);
  });

  test("no chains or loops: a destination is never another rule's source", () => {
    const sources = rules.map((r) => r.from);
    for (const r of rules) {
      expect(r.to).not.toBe(r.from);
      expect(sources).not.toContain(r.to);
    }
  });

  test("the Advance online class moved from /kelas-newborn-care to /kelas-newborn-care-online", () => {
    expect(rules).toContainEqual({ from: "/kelas-newborn-care", to: "/kelas-newborn-care-online", status: "301" });
  });
});
