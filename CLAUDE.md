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

## Gotchas

- **New page** = new file in `src/routes/` **and** its path added to `PAGES` in `vite.config.ts`. Without the second step no HTML file is produced and the URL 404s.
- **Existing URLs are public** (shared in WhatsApp and ads, set as canonical and `og:url`). Never rename or remove a route. Output is flat (`/kelas-mpasi-online` → `kelas-mpasi-online.html`) so URLs have no trailing slash and no redirect.
- **Do not reintroduce Lovable asset pointers** (`*.asset.json`, `/__l5e/assets-v1/...`). Put images in `public/og/` (social previews, poster) or `src/assets/` (imported in code).
- **Lockfile is `package-lock.json`** (public npm registry). The old `bun.lock` pointed at Lovable's private package cache and cannot install elsewhere. `.npmrc` sets `legacy-peer-deps=true`; keep it, or `npm ci` fails.
- **`nitro: { preset: "cloudflare-module" }` is pinned on purpose.** Unpinned, Nitro switches layout when it detects Cloudflare Pages and the output folder changes.
- `public/404.html` is the not-found page. After a deploy, open a made-up URL and confirm it shows.
- `/test-page` is a leftover Lovable test route and is still published. Remove it from `src/routes/` and `PAGES` when ready.
- Tests: `bun test src/lib` (pricing and schedule checks). Typecheck: `npx tsc --noEmit`.
