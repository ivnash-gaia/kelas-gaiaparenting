# Kelas Gaia Parenting — kelas.gaiaparenting.com

Public class directory + landing pages for Gaia Parenting (Indonesian). No backend, no database, no secrets: orders go to `gaia.orderonline.id`, questions to WhatsApp, tracking is a client-side Meta Pixel. Originally built in Lovable; now hosted like the Academy: **GitHub → Cloudflare Pages**, DNS at DomaiNesia.

Project rules carried over from Lovable are in `AGENTS.md` — read them before editing event content.

## Stack

TanStack Start (React 19, file routes in `src/routes/`) + Tailwind 4, built by Vite via `@lovable.dev/vite-tanstack-config`. `vite.config.ts` pre-renders every route to static HTML; the output is the folder `.output/public`. Nothing runs on a server.

## Deploy

Push to `main` → Cloudflare Pages builds and publishes. Unlike the Academy this site has a build step (React, pre-rendered). Cloudflare Pages settings:

- Framework preset: None
- Build command: `npm ci && npm run build`
- Build output directory: `.output/public`
- Environment variable: `NODE_VERSION` = `22` (also set by `.node-version`)
- Custom domain: `kelas.gaiaparenting.com` (CNAME at DomaiNesia → the project's `*.pages.dev` address)

Local check: `npm ci && npm run build`, then open `.output/public` through any static server.

## Course GTM landing page (`/kelas-gtm-online`)

Built from the brief "Course GTM — Brief, Kreatif & Panduan Campaign". All copy and offer facts live in `src/lib/gtm-data.ts`; `src/components/gtm/GtmPage.tsx` only renders them. Same "offer module" idea as the Academy: anything not confirmed is `null`/`false` and the page degrades instead of promising it.

- `GTM_OFFER.orderUrl` is the orderonline.id checkout link (UTM params from the ad URL are appended on click, `InitiateCheckout` fires). Set it back to `null` and the buy buttons disable themselves and the homepage card says "Segera Hadir".
- `accessDuration: null` and `bonusesConfirmed: false` keep the access period and the bonus block off the page. `GTM_TESTIMONIALS` is empty, so the testimonial section is not rendered. `GTM_ASSETS` holds the media: `previewYoutubeId` (hero preview, click-to-play thumbnail, the player only loads on tap; `previewAspect` is `16 / 9`, change it for a vertical video; the video must allow embedding in YouTube Studio) and `doctorPhoto` (`public/og/gtm-dr-frecillia.jpg`). The other slots (`heroPhoto`, `reframePhoto`, `closingPhoto`) are `null` until real files exist; add them under `public/og/`.
- Doctor quotes (`GTM_QUOTES`, `GTM_CURRICULUM[].hook`) must be checked against the video before launch.
- `src/lib/gtm-data.test.js` pins these flags; update it deliberately when a term is confirmed.
- The `Purchase` pixel event belongs on the thank-you page, which is outside this site.
- The homepage card (last entry of `EVENTS` in `src/routes/index.tsx`, image `src/assets/gtm-card.jpg`) reads the same data: it shows "Pendaftaran Dibuka" while `orderUrl` is set and "Segera Hadir" when it is `null`. "Segera Hadir" cards still link to their page.

## Gotchas

- **New page** = new file in `src/routes/` **and** its path added to `PAGES` in `vite.config.ts`. Without the second step no HTML file is produced and the URL 404s. A class page also goes into the top menu (`NAV` in `src/lib/nav-data.ts`) and the homepage `EVENTS` list.
- **Existing URLs are public** (shared in WhatsApp and ads, set as canonical and `og:url`). Output is flat (`/kelas-mpasi-online` → `kelas-mpasi-online.html`) so URLs have no trailing slash and no redirect. **Do not rename or remove a route casually.** To move a page on purpose: rename the route file and its path, update canonical and `og:url`, `PAGES`, `NAV` and the homepage `EVENTS` entry, and add a 301 line (`/old /new 301`) to `public/_redirects` so old ads, shares and backlinks keep working. `redirects.test.js` checks the file (the new URL is a published page, the old one is not, no chains). Keep the line for as long as the old URL may still be out there. Ad destination URLs should be updated to the new address to skip the extra hop.
- **URL naming**: `kelas-<topic>-<online|offline>[-<city>]`, Indonesian words, lowercase (`kelas-mpasi-online`, `kelas-newborn-care-offline-surabaya`). The format word is in the URL because people search for it.
- **Do not reintroduce Lovable asset pointers** (`*.asset.json`, `/__l5e/assets-v1/...`). Put images in `public/og/` (social previews, poster) or `src/assets/` (imported in code).
- **Lockfile is `package-lock.json`** (public npm registry). The old `bun.lock` pointed at Lovable's private package cache and cannot install elsewhere. `.npmrc` sets `legacy-peer-deps=true`; keep it, or `npm ci` fails.
- **`nitro: { preset: "cloudflare-module" }` is pinned on purpose.** Unpinned, Nitro switches layout when it detects Cloudflare Pages and the output folder changes.
- **Meta Pixel event name = the event's `heroTitle` (tags stripped).** Rewording a headline silently renames the event in Meta Ads reporting. If you change a live headline, set `pixelName` in that event's data module to the old text (see `event-laktasi.ts`). Real participant testimonials are quotes: do not edit their wording.
- **Newborn Online class** (`/kelas-newborn-online`) is a **master page**: one permanent URL, and only the run details change between runs. Everything lives in `src/lib/event-newborn-online.ts`; the checklist of what to update per run (dates, price, order link, experts, giveaway) is at the top of that file. The homepage card reads its price and dates from the same file, so a new run is one edit. `pixelName` is the class name, so Meta Ads reporting adds all runs up under one event; keep it. `event-newborn-online.test.js` checks the data is consistent (weekday matches date, badge matches prices) instead of pinning one run's numbers. Poster: `public/og/newborn-online-poster.jpg` (no dates on it, valid for every run). An event with `testimonials: []` hides that section (never fill it with placeholders). The directory card crops images to 16:9, so this near-16:9 poster has a `cardUrl` version on a 16:9 canvas (`newborn-online-card.jpg`); without it the "ONLINE" pill is cut off.
- **Top menu** = `NAV` in `src/lib/nav-data.ts`, rendered by `src/components/TopBar.tsx`: Beranda, Kelas Online, Kelas Offline, Belajar Mandiri (the last three are dropdowns; the GTM video course is the only Belajar Mandiri item for now). The bar switches to a hamburger sheet by its own width (container query), because event pages are a 480px column even on desktop. `nav-data.test.js` fails if a menu link has no route file or is missing from `PAGES`. The GTM landing page and `/gaia-academy` keep their own headers on purpose.
- **Logo size**: the `GaiaLogo` viewBox is cropped to the artwork, so the height class is the real logo height (`h-9`/`h-10` in headers). Do not put the old `0 0 225 225` viewBox back; the logo shrinks to a third.
- `public/404.html` is the not-found page. After a deploy, open a made-up URL and confirm it shows.
- `/test-page` is a leftover Lovable test route and is still published. Remove it from `src/routes/` and `PAGES` when ready.
- Tests: `bun test src/lib` (pricing and schedule checks). Typecheck: `npx tsc --noEmit`.
