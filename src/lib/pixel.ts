/**
 * Meta Pixel helpers. Safe to call before fbq has loaded — each function
 * checks for `window.fbq` first and silently no-ops otherwise.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const META_PIXEL_ID = "143708316232799";

function track(eventName: string, eventData?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "undefined") return;
  try {
    if (eventData) window.fbq("track", eventName, eventData);
    else window.fbq("track", eventName);
  } catch {
    // ignore
  }
}

export function trackPageView() {
  track("PageView");
}

export function trackViewContent(data: { content_name: string; [k: string]: unknown }) {
  track("ViewContent", data);
}

export function trackLead(data: { content_name: string; [k: string]: unknown }) {
  track("Lead", data);
}

export function trackInitiateCheckout(data: {
  content_name: string;
  value: number;
  currency: string;
  [k: string]: unknown;
}) {
  track("InitiateCheckout", data);
}

/** Parse a Rupiah-formatted string like "Rp 175.000" into a number (175000). */
export function parsePriceIDR(price: string): number {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}