import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';
import { NAV, isGroup, isGroupActive, normalizePath } from './nav-data';

const leaves = NAV.flatMap((e) => (isGroup(e) ? e.items : [e]));
const viteConfig = readFileSync(new URL('../../vite.config.ts', import.meta.url), 'utf8');

function routeFile(to) {
  const name = to === '/' ? 'index' : to.slice(1);
  return new URL(`../routes/${name}.tsx`, import.meta.url);
}

describe('top menu structure', () => {
  test('order: Beranda, Kelas Online, Kelas Offline, Belajar Mandiri', () => {
    expect(NAV.map((e) => e.label)).toEqual([
      'Beranda',
      'Kelas Online',
      'Kelas Offline',
      'Belajar Mandiri',
    ]);
  });

  test('Beranda is a plain link to the homepage; the other three are dropdowns', () => {
    expect(isGroup(NAV[0])).toBe(false);
    expect(NAV[0].to).toBe('/');
    expect(NAV.slice(1).every(isGroup)).toBe(true);
  });

  test('Belajar Mandiri holds only the GTM video course for now', () => {
    const group = NAV.find((e) => e.label === 'Belajar Mandiri');
    expect(group.items.map((i) => i.to)).toEqual(['/kelas-gtm-online']);
  });

  test('GTM is not repeated under Kelas Online or Kelas Offline', () => {
    for (const label of ['Kelas Online', 'Kelas Offline']) {
      const group = NAV.find((e) => e.label === label);
      expect(group.items.map((i) => i.to)).not.toContain('/kelas-gtm-online');
    }
  });

  test('no page is listed twice', () => {
    const tos = leaves.map((l) => l.to);
    expect(new Set(tos).size).toBe(tos.length);
  });
});

describe('top menu links are real pages', () => {
  for (const leaf of leaves) {
    test(`${leaf.to} has a route file and is in PAGES`, () => {
      expect(existsSync(routeFile(leaf.to))).toBe(true);
      expect(viteConfig).toContain(`"${leaf.to}"`);
    });
  }
});

describe('active state helpers', () => {
  const online = NAV.find((e) => e.label === 'Kelas Online');
  const offline = NAV.find((e) => e.label === 'Kelas Offline');

  test('a page highlights only its own group', () => {
    expect(isGroupActive(online, '/kelas-mpasi-online')).toBe(true);
    expect(isGroupActive(offline, '/kelas-mpasi-online')).toBe(false);
  });

  test('trailing slash and the homepage are handled', () => {
    expect(normalizePath('/kelas-gtm-online/')).toBe('/kelas-gtm-online');
    expect(normalizePath('/')).toBe('/');
    expect(isGroupActive(online, '/')).toBe(false);
  });
});
