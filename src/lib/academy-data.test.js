import { describe, expect, test } from 'bun:test';
import { ACADEMY_OFFER } from './academy-data';

describe('Academy offer', () => {
  test('uses the user-confirmed Rp49.000 price', () => {
    expect(ACADEMY_OFFER.price).toBe(49000);
  });
  test('does not route purchases anywhere before a payment link is supplied', () => {
    expect(ACADEMY_OFFER.paymentUrl).toBeNull();
  });
  test('does not promise an unconfirmed access duration', () => {
    expect(ACADEMY_OFFER.accessDuration).toBeNull();
  });
});