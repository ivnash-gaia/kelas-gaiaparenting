// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for Cloudflare Pages (same hosting as academy.gaiaparenting.com).
// Every route is rendered to HTML at build time. The site has no server functions,
// loaders or secrets, so nothing needs a runtime.
// Output: .output/public  (= the Pages "build output directory").
//
// ADDING A PAGE: add its path to PAGES below, otherwise it is not published as an HTML file.
const PAGES = [
  "/",
  "/gaia-academy",
  "/privacy-policy",
  "/kelas-laktasi-online",
  "/kelas-mpasi-online",
  "/kelas-newborn-care",
  "/kelas-newborn-care-offline",
  "/kelas-newborn-care-offline-surabaya",
  "/kelas-tumbuh-kembang-anak-online",
  "/couple-yoga-and-childbirth-preparation",
  "/kelas-gtm-online",
  "/test-page",
];

export default defineConfig({
  // Pin the target. Left unset, Nitro auto-detects the host and would switch layout
  // when the build runs on Cloudflare Pages (CF_PAGES=1).
  nitro: { preset: "cloudflare-module" },
  tanstackStart: {
    prerender: {
      enabled: true,
      // /kelas-mpasi-online -> kelas-mpasi-online.html. Pages serves that at /kelas-mpasi-online
      // with no redirect, so URLs stay identical to the Lovable site (canonical tags, shared links).
      autoSubfolderIndex: false,
      failOnError: true,
    },
    pages: PAGES.map((path) => ({ path })),
  },
});
