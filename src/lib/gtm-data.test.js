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

describe('unconfirmed terms are not promised', () => {
  test('does not route purchases anywhere before a checkout link is supplied', () => {
    expect(GTM_OFFER.orderUrl).toBeNull();
  });
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
  test('creative assets are null until real files exist', () => {
    expect(Object.values(GTM_ASSETS).every((v) => v === null)).toBe(true);
  });
  test('FAQ payment answer does not claim a checkout page while the link is missing', () => {
    const pay = buildFaq().find((f) => f.q.includes('bayar'));
    expect(pay.a).toMatch(/belum dibuka/i);
  });
});
