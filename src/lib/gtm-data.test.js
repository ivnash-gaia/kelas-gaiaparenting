import { existsSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';
import {
  GTM_ASSETS,
  GTM_CURRICULUM,
  GTM_MOMENTS,
  GTM_OFFER,
  GTM_PYRAMID,
  GTM_QNA,
  GTM_TESTIMONIALS,
  buildFaq,
} from './gtm-data';

describe('GTM offer', () => {
  test('uses the brief price Rp149K as one price', () => {
    expect(GTM_OFFER.price).toBe(149000);
    expect(GTM_OFFER.priceShort).toBe('Rp149K');
  });
  test('video counts add up: 18 theory + 8 Q&A = 26', () => {
    expect(GTM_OFFER.theoryVideos + GTM_OFFER.qnaVideos).toBe(GTM_OFFER.totalVideos);
    expect(GTM_OFFER.totalVideos).toBe(26);
    expect(GTM_QNA).toHaveLength(GTM_OFFER.qnaVideos);
  });
  test('curriculum has 4 parts whose videos sum to the 18 theory videos', () => {
    expect(GTM_CURRICULUM).toHaveLength(4);
    expect(GTM_CURRICULUM.reduce((s, c) => s + c.videos, 0)).toBe(GTM_OFFER.theoryVideos);
  });
  test('has 8 key-moment cards and a 5-level pyramid', () => {
    expect(GTM_MOMENTS).toHaveLength(8);
    expect(GTM_PYRAMID).toHaveLength(5);
  });
});

describe('checkout link', () => {
  test('points at the Gaia orderonline.id course page, over https', () => {
    const url = new URL(GTM_OFFER.orderUrl);
    expect(url.protocol).toBe('https:');
    expect(url.hostname).toBe('gaia.orderonline.id');
    expect(url.pathname).toBe('/course-gtm-3');
    expect(url.searchParams.get('form')).toBeTruthy();
  });
  test('FAQ payment answer says ordering is not open only while the link is missing', () => {
    const missing = buildFaq({ ...GTM_OFFER, orderUrl: null }).find((f) => f.q.includes('bayar'));
    expect(missing.a).toMatch(/belum dibuka/i);
    const set = buildFaq().find((f) => f.q.includes('bayar'));
    expect(set.a).not.toMatch(/belum dibuka/i);
    expect(set.a).toMatch(/halaman pemesanan/i);
  });
});

describe('unconfirmed terms are not promised', () => {
  test('does not promise an unconfirmed access duration', () => {
    expect(GTM_OFFER.accessDuration).toBeNull();
    const access = buildFaq().find((f) => f.q.startsWith('Akses'));
    expect(access.a).not.toMatch(/\d+\s*(bulan|tahun|hari)|seumur hidup|selamanya/i);
  });
  test('bonuses stay hidden until confirmed', () => {
    expect(GTM_OFFER.bonusesConfirmed).toBe(false);
  });
  test('no testimonials are invented', () => {
    expect(GTM_TESTIMONIALS).toHaveLength(0);
  });
});

describe('creative assets', () => {
  test('hero preview is the YouTube video, 16:9 by default', () => {
    expect(GTM_ASSETS.previewYoutubeId).toBe('D2CjN09AsbI');
    expect(GTM_ASSETS.previewAspect).toBe('16 / 9');
  });
  test('doctor photo is a real file in public/', () => {
    expect(GTM_ASSETS.doctorPhoto.startsWith('/og/')).toBe(true);
    expect(existsSync(`public${GTM_ASSETS.doctorPhoto}`)).toBe(true);
  });
  test('slots without a real file stay null (no placeholders pretending to be photos)', () => {
    for (const k of ['heroVideo', 'heroVideoPoster', 'heroPhoto', 'reframePhoto', 'closingPhoto']) {
      expect(GTM_ASSETS[k]).toBeNull();
    }
  });
});
