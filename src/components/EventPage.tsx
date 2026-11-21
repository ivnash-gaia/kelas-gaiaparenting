import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { EventData, SlotStatus } from "@/lib/event-data";
import { GaiaLogo } from "@/components/GaiaLogo";
import {
  parsePriceIDR,
  trackInitiateCheckout,
  trackLead,
  trackViewContent,
} from "@/lib/pixel";

const MAXW = "max-w-[480px]";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-orange-deep">
      <span className="inline-block h-[1.5px] w-[22px] bg-brand-orange" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mb-2 text-[27px] font-semibold leading-[1.15] text-foreground">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[14.5px] text-ink-soft">{children}</p>;
}

const slotStyles: Record<SlotStatus, { cls: string; label: string }> = {
  open: { cls: "bg-emerald-100 text-emerald-800", label: "Tersedia" },
  few: { cls: "bg-amber-100 text-amber-800", label: "Sisa sedikit" },
  full: { cls: "bg-muted text-muted-foreground", label: "Penuh" },
};

type ScheduleItem = EventData["schedule"][number];

function ScheduleByMonth({ items }: { items: ScheduleItem[] }) {
  const months: { month: string; rows: ScheduleItem[] }[] = [];
  items.forEach((s) => {
    const m = s.month ?? "Jadwal";
    const last = months[months.length - 1];
    if (last && last.month === m) last.rows.push(s);
    else months.push({ month: m, rows: [s] });
  });
  const defaultOpen = months.map((_, i) => `m-${i}`);
  return (
    <Accordion
      type="multiple"
      defaultValue={defaultOpen}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      {months.map((m, mi) => (
        <AccordionItem
          key={m.month}
          value={`m-${mi}`}
          className="border-b border-border last:border-b-0"
        >
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.15em] text-primary-deep">
                {m.month}
              </span>
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-bold text-ink-soft">
                {m.rows.length}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3 pt-0">
            <div>
              {m.rows.map((s, i) => {
                const slot = slotStyles[s.status];
                const isLast = i === m.rows.length - 1;
                return (
                  <div
                    key={`${s.d}-${s.loc ?? ""}-${i}`}
                    className={`flex items-center justify-between gap-3 py-3 ${!isLast ? "border-b border-border/70" : ""}`}
                  >
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-bold text-foreground">{s.d}</div>
                      <div className="text-[11.5px] text-ink-soft">{s.t}</div>
                      {s.loc && (
                        <div className="mt-0.5 flex items-start gap-1 text-[11.5px] text-ink-soft">
                          <span>📍</span>
                          <span>{s.loc}</span>
                        </div>
                      )}
                    </div>
                    <span
                      className={`flex-none rounded-md px-2 py-0.5 text-[10.5px] font-bold ${slot.cls}`}
                    >
                      {slot.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function EventPage({ event: EVENT }: { event: EventData }) {
  useReveal();
  const [openCurr, setOpenCurr] = useState<string>("item-0");

  const cityOf = (loc?: string): string => {
    if (!loc) return "Lainnya";
    if (/bandung/i.test(loc)) return "Bandung";
    if (/surabaya|sidoarjo/i.test(loc)) return "Surabaya";
    return "Jabodetabek";
  };

  const scheduleByCity = useMemo(() => {
    const groups: Record<string, typeof EVENT.schedule> = {};
    EVENT.schedule.forEach((s) => {
      const c = cityOf(s.loc);
      (groups[c] ||= []).push(s);
    });
    const order = ["Jabodetabek", "Bandung", "Surabaya", "Lainnya"];
    return order
      .filter((c) => groups[c]?.length)
      .map((c) => ({ city: c, items: groups[c] }));
  }, [EVENT.schedule]);
  const hasCityTabs = scheduleByCity.length > 1;
  const [activeCity, setActiveCity] = useState<string>(
    scheduleByCity[0]?.city ?? "Jabodetabek",
  );

  const contentName = EVENT.pixelName ?? EVENT.heroTitle.replace(/<[^>]+>/g, "").trim();
  const priceValue = parsePriceIDR(EVENT.priceNow);

  const handleCheckoutClick = () => {
    trackInitiateCheckout({
      content_name: contentName,
      value: priceValue,
      currency: "IDR",
    });
  };

  const handleLeadClick = () => {
    trackLead({ content_name: contentName });
  };

  useEffect(() => {
    const el = document.getElementById("learn");
    if (!el) return;
    let fired = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!fired && e.isIntersecting && e.intersectionRatio >= 0.5) {
            fired = true;
            trackViewContent({ content_name: contentName });
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [contentName]);

  const PriceBlock = ({ centered = false }: { centered?: boolean }) => (
    <>
      <div className={`mb-1 flex items-baseline gap-2.5 ${centered ? "justify-center" : ""}`}>
        <span className="font-display text-[33px] font-semibold text-foreground">
          {EVENT.priceNow}
        </span>
        <span className="text-[16px] text-ink-soft line-through">{EVENT.priceWas}</span>
        <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold tracking-wide text-primary-deep">
          {EVENT.priceBadge}
        </span>
      </div>
      <p
        className={`mb-5 text-[12.5px] text-ink-soft ${centered ? "text-center" : ""} [&_code]:rounded-[5px] [&_code]:bg-accent/40 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-bold [&_code]:tracking-wider [&_code]:text-primary-deep`}
        dangerouslySetInnerHTML={{ __html: EVENT.priceNote }}
      />
    </>
  );

  const CtaStack = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <a
        href={EVENT.ctaPrimary.href}
        onClick={handleCheckoutClick}
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-[15px] font-bold text-primary-foreground shadow-[0_10px_24px_-8px] shadow-primary/50 transition active:scale-[0.985]"
      >
        {EVENT.ctaPrimary.label}
        <span className="text-[17px]">→</span>
      </a>
      <a
        href={EVENT.ctaSecondary.href}
        onClick={handleLeadClick}
        className="flex items-center justify-center rounded-full bg-accent px-5 py-4 text-[15px] font-bold text-accent-foreground transition active:scale-[0.985]"
      >
        {EVENT.ctaSecondary.label}
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-[84px]">
      <div className={`mx-auto ${MAXW} relative overflow-hidden bg-background`}>
        <TopBar compact />

        <section className="relative px-5 pb-6 pt-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 85% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%), radial-gradient(90% 60% at 0% 100%, color-mix(in oklab, var(--brand-orange) 10%, transparent), transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-primary-foreground">
              <span className="gaia-pulse h-1.5 w-1.5 rounded-full bg-accent" />
              {EVENT.heroTag}
            </span>
            <h1
              className="font-display mb-3.5 text-[34px] font-semibold leading-[1.1] text-brand-orange-deep"
              dangerouslySetInnerHTML={{ __html: EVENT.heroTitle }}
            />
            <p className="mb-5 text-[15.5px] text-ink-soft">{EVENT.heroLead}</p>

            <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-accent/30 to-brand-orange/15 text-[13px] text-ink-soft">
              {EVENT.heroImage ? (
                <img
                  src={EVENT.heroImage}
                  alt={`Foto kelas ${EVENT.heroTag}`}
                  className="block h-auto w-full"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center">
                  <span>📷 Foto kelas / poster event</span>
                </div>
              )}
            </div>

            <div className="mb-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {EVENT.heroFacts.map((f) => (
                <div key={f.k} className="bg-card px-3.5 py-3">
                  <div className="mb-0.5 text-[10.5px] uppercase tracking-widest text-ink-soft">
                    {f.k}
                  </div>
                  <div className="text-[14px] font-semibold text-foreground">{f.v}</div>
                </div>
              ))}
            </div>

            <PriceBlock />
            <CtaStack />
            <p className="mt-3 text-center text-[12px] italic text-ink-soft font-serif-em">
              {EVENT.heroReassure}
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-[12px] text-ink-soft">
              <span className="text-primary">✓</span>
              <span>{EVENT.heroTrust}</span>
            </div>
            <a
              href="#learn"
              className="mt-5 flex flex-col items-center gap-1 text-[12px] font-semibold text-brand-orange-deep"
            >
              <span>{EVENT.heroScrollHint}</span>
              <span className="gaia-bounce text-[18px] leading-none">↓</span>
            </a>
          </div>
        </section>

        <section className="bg-primary px-6 py-8 text-primary-foreground">
          <p
            className="font-serif-em text-[19px] leading-[1.5] [&_em]:text-accent"
            dangerouslySetInnerHTML={{ __html: EVENT.bridge }}
          />
        </section>

        <section id="learn" className="reveal scroll-mt-16 px-5 py-11">
          <Eyebrow>Yang Akan Kamu Kuasai</Eyebrow>
          <SectionTitle>Pulang kelas, kamu tidak lagi coba-coba</SectionTitle>
          <SectionSub>
            Bukan sekadar teori. Fokusnya ke hal-hal yang beneran kamu hadapi di rumah.
          </SectionSub>
          <div className="flex flex-col gap-2.5">
            {EVENT.learn.map((l) => (
              <div
                key={l.h}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/30 text-lg">
                  {l.ico}
                </div>
                <div>
                  <h4 className="mb-0.5 text-[14.5px] font-bold text-foreground">{l.h}</h4>
                  <p className="text-[12.5px] leading-snug text-ink-soft">{l.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal px-5 pb-11">
          <Eyebrow>Kurikulum Lengkap</Eyebrow>
          <SectionTitle>Mau lihat detail tiap sesi?</SectionTitle>
          <SectionSub>Semua materi ada di sini. Buka aja kalau kamu mau tahu lebih dalam.</SectionSub>
          <Accordion
            type="single"
            collapsible
            value={openCurr}
            onValueChange={setOpenCurr}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            {EVENT.curriculum.map((c, i) => (
              <AccordionItem
                key={c.ses}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-4 py-4 text-left hover:no-underline">
                  <div>
                    <div className="mb-0.5 text-[10.5px] font-bold uppercase tracking-widest text-brand-orange-deep">
                      {c.ses}
                    </div>
                    <div className="text-[14px] font-bold text-foreground">{c.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ul className="list-disc space-y-1.5 pl-5 text-[12.8px] leading-snug text-ink-soft">
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="reveal bg-secondary px-5 py-11">
          <Eyebrow>{EVENT.diffEyebrow}</Eyebrow>
          <SectionTitle>{EVENT.diffTitle}</SectionTitle>
          <SectionSub>{EVENT.diffSub}</SectionSub>
          <div className="flex flex-col gap-2.5">
            {EVENT.diff.map((d, i) => (
              <div
                key={d.h}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <div className="font-display flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary text-[15px] font-semibold text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h4 className="mb-1 text-[14.5px] font-bold text-foreground">{d.h}</h4>
                  <p className="text-[12.8px] text-ink-soft">{d.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal px-5 py-11">
          <Eyebrow>Jadwal & Lokasi</Eyebrow>
          <SectionTitle>Pilih jadwal yang cocok untukmu</SectionTitle>
          <SectionSub>Kuota tiap sesi terbatas agar setiap peserta dapat pendampingan.</SectionSub>

          {hasCityTabs ? (
            <Tabs value={activeCity} onValueChange={setActiveCity} className="mb-3.5">
              <TabsList className="grid h-auto w-full grid-cols-3 gap-1 rounded-xl bg-secondary p-1">
                {scheduleByCity.map((g) => (
                  <TabsTrigger
                    key={g.city}
                    value={g.city}
                    className="flex-col gap-0.5 rounded-lg px-2 py-2 text-[12px] font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    <span>{g.city}</span>
                    <span className="text-[10px] font-medium opacity-75">
                      {g.items.length} jadwal
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {scheduleByCity.map((g) => (
                <TabsContent key={g.city} value={g.city} className="mt-3">
                  <ScheduleByMonth items={g.items} />
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <div className="mb-3.5">
              <ScheduleByMonth items={EVENT.schedule} />
            </div>
          )}

          <div className="flex items-start gap-2.5 px-1 text-[13px] text-ink-soft">
            <span className="text-[15px]">📍</span>
            <span>{EVENT.venue}</span>
          </div>
          <a
            href={EVENT.ctaSecondary.href}
            onClick={handleLeadClick}
            className="mt-5 flex items-center justify-center rounded-full border-2 border-border bg-card px-5 py-3.5 text-[14px] font-semibold text-foreground transition active:scale-[0.985]"
          >
            Belum yakin jadwalnya? Tanya admin dulu
          </a>
        </section>

        <section className="reveal bg-primary-deep px-5 py-11 text-primary-foreground">
          <div className="mb-3 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent">
            <span className="inline-block h-[1.5px] w-[22px] bg-accent" />
            Dibimbing Langsung Oleh
          </div>
          <h2 className="font-display mb-2 text-[27px] font-semibold leading-tight text-primary-foreground">
            Tim yang benar-benar paham
          </h2>
          <p className="mb-5 text-[14.5px] text-primary-foreground/75">
            Materi berbasis ilmu kesehatan & psikologi, disesuaikan dengan konteks keluarga Indonesia.
          </p>
          <div className="flex flex-col gap-2.5">
            {EVENT.instructor.map((i) => (
              <div
                key={i.name}
                className="flex items-center gap-3.5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4"
              >
                <div className="flex h-[62px] w-[62px] flex-none items-center justify-center rounded-full bg-accent text-[22px]">
                  {i.ico}
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-primary-foreground">{i.name}</h4>
                  <div className="mb-1 text-[12px] text-accent">{i.role}</div>
                  <p className="text-[12.3px] leading-snug text-primary-foreground/75">{i.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal px-5 py-11">
          <Eyebrow>Kata Orang Tua Lain</Eyebrow>
          <SectionTitle>Mereka dulu juga ragu</SectionTitle>
          <SectionSub>Cerita peserta yang sudah lebih dulu ikut kelas ini.</SectionSub>
          <div className="flex flex-col gap-3">
            {EVENT.testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-2 text-[13px] tracking-widest text-gold">
                  {"★".repeat(t.stars)}
                </div>
                <p className="mb-3 text-[13.3px] leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent/40 text-sm">
                    {t.ico}
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-foreground">{t.name}</div>
                    <div className="text-[11px] text-ink-soft">{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal bg-secondary px-5 py-11">
          <Eyebrow>Bonus Peserta</Eyebrow>
          <SectionTitle>Yang juga kamu dapatkan</SectionTitle>
          <SectionSub>Dukungan tidak berhenti di hari kelas selesai.</SectionSub>
          <div className="flex flex-col gap-2.5">
            {EVENT.bonus.map((b) => (
              <div
                key={b.h}
                className="flex items-center gap-3 rounded-2xl border border-dashed border-gold bg-card p-3.5"
              >
                <div className="text-[19px]">{b.ico}</div>
                <div>
                  <h4 className="text-[13.5px] font-bold text-foreground">{b.h}</h4>
                  <p className="text-[12px] text-ink-soft">{b.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="reveal px-5 py-11 text-center"
          style={{
            background:
              "radial-gradient(100% 80% at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent), var(--background)",
          }}
        >
          <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.3)]">
            <h2 className="font-display mb-2 text-[24px] font-semibold leading-tight text-brand-orange-deep">
              {EVENT.recapTitle}
            </h2>
            <p className="mb-4 text-[14.5px] text-ink-soft">{EVENT.recapSub}</p>
            <PriceBlock centered />
            <CtaStack className="mt-2" />
          </div>
        </section>

        <section className="reveal px-5 py-11">
          <Eyebrow>Masih Ada Pertanyaan?</Eyebrow>
          <SectionTitle>Hal yang sering ditanyakan</SectionTitle>
          <Accordion type="single" collapsible className="mt-3">
            {EVENT.faq.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-4 text-left text-[14px] font-semibold hover:no-underline [&_svg]:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[13px] leading-relaxed text-ink-soft">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="bg-primary-deep px-5 py-9 text-center text-primary-foreground/70">
          <GaiaLogo className="mx-auto mb-3 h-11 w-auto rounded-md bg-background px-3 py-2 text-primary-deep" />
            <p className="text-[11.5px] leading-relaxed">
            Pengetahuan ilmiah, pemahaman budaya Indonesia.
            <br />© 2026 Gaia Parenting ·{" "}
            <Link to="/privacy-policy" className="text-primary-foreground/90 underline underline-offset-2 transition hover:text-primary-foreground">
              Kebijakan Privasi
            </Link>{" "}
            ·{" "}
            <a href="#konsultasi" className="text-accent">
              WhatsApp Admin
            </a>
          </p>
        </footer>
      </div>

      <div
        className={`fixed bottom-0 left-1/2 z-50 flex w-full ${MAXW} -translate-x-1/2 items-center gap-2.5 border-t border-border bg-card px-4 py-2.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)]`}
      >
        <div className="min-w-0 flex-1">
          <div className="font-display text-[19px] font-semibold leading-none text-foreground">
            {EVENT.priceNow}
          </div>
          <div className="flex gap-1.5 text-[10.5px]">
            <span className="text-ink-soft line-through">{EVENT.priceWas}</span>
            <span className="font-bold text-primary-deep">{EVENT.priceBadge}</span>
          </div>
        </div>
        <a
          href={EVENT.ctaSecondary.href}
          aria-label="Konsultasi"
          onClick={handleLeadClick}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl bg-accent text-[18px]"
        >
          💬
        </a>
        <a
          href={EVENT.ctaPrimary.href}
          onClick={handleCheckoutClick}
          className="flex flex-none items-center justify-center rounded-full bg-primary px-5 py-3 text-[14px] font-bold text-primary-foreground"
        >
          Daftar
        </a>
      </div>
    </div>
  );
}