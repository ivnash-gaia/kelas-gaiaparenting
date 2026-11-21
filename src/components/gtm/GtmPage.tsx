import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Baby,
  Check,
  Clock,
  Gift,
  MessageCircle,
  Play,
  Repeat,
  ShieldAlert,
  Snowflake,
  Sprout,
  Triangle,
  Video,
  Wheat,
  X,
} from "lucide-react";
import { GaiaLogo } from "@/components/GaiaLogo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackInitiateCheckout, trackLead, trackViewContent } from "@/lib/pixel";
import {
  GTM_ASSETS,
  GTM_BONUSES,
  GTM_CURRICULUM,
  GTM_DOCTOR,
  GTM_FACTORS,
  GTM_FIT,
  GTM_MOMENTS,
  GTM_OFFER,
  GTM_PROBLEMS,
  GTM_PROCESS,
  GTM_PYRAMID,
  GTM_QNA,
  GTM_QUOTES,
  GTM_SHORTCUTS,
  GTM_TESTIMONIALS,
  buildFaq,
} from "@/lib/gtm-data";
import { FactorsDiagram, Pyramid } from "./visuals";

const WRAP = "mx-auto w-full max-w-[480px] px-5 md:max-w-[920px] md:px-8";
const BUY_LABEL = `Ikut Kelasnya ${GTM_OFFER.priceShort}`;

const MOMENT_ICONS = {
  sprout: Sprout,
  repeat: Repeat,
  triangle: Triangle,
  baby: Baby,
  alert: ShieldAlert,
  wheat: Wheat,
  clock: Clock,
  snow: Snowflake,
} as const;

/** Carry the ad's utm_* params onto the checkout link so a sale can be matched to the creative (V1, C2...). */
function withUtm(url: string): string {
  try {
    const out = new URL(url);
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (k.startsWith("utm_") && !out.searchParams.has(k)) out.searchParams.set(k, v);
    });
    return out.toString();
  } catch {
    return url;
  }
}

const PILL =
  "flex items-center justify-center gap-2 rounded-full font-bold transition active:scale-[0.985]";

function BuyButton({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const size = compact ? "px-4 py-2.5 text-[13px]" : "px-6 py-4 text-[15px]";
  const base = `${PILL} ${size} bg-primary text-primary-foreground shadow-[0_10px_24px_-8px] shadow-primary/50 ${className}`;
  const url = GTM_OFFER.orderUrl;
  if (!url) {
    return (
      <button
        type="button"
        disabled
        title="Link pemesanan belum aktif"
        className={`${base} cursor-not-allowed opacity-60`}
      >
        {BUY_LABEL}
      </button>
    );
  }
  return (
    <a
      href={url}
      onClick={(e) => {
        e.currentTarget.href = withUtm(url);
        trackInitiateCheckout({
          content_name: GTM_OFFER.name,
          value: GTM_OFFER.price,
          currency: "IDR",
        });
      }}
      className={base}
    >
      {BUY_LABEL}
    </a>
  );
}

function WaButton({ className = "", label = "Tanya admin via WhatsApp" }: { className?: string; label?: string }) {
  return (
    <a
      href={GTM_OFFER.whatsapp}
      onClick={() => trackLead({ content_name: GTM_OFFER.name })}
      className={`${PILL} bg-accent px-6 py-4 text-[15px] text-accent-foreground ${className}`}
    >
      <MessageCircle className="size-[18px]" aria-hidden="true" />
      {label}
    </a>
  );
}

/** Shown only while the checkout link is missing, so a disabled button never looks like a bug. */
function NoLinkNote() {
  if (GTM_OFFER.orderUrl) return null;
  return (
    <p className="mt-2 text-center text-[12px] text-ink-soft">
      Pemesanan belum dibuka dari halaman ini. Tanya admin lewat WhatsApp.
    </p>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-2.5 text-[11.5px] font-bold uppercase tracking-[0.14em] ${
        light ? "text-accent" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

function H2({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-display text-[28px] font-semibold leading-[1.12] md:text-[38px] ${
        light ? "text-primary-foreground" : "text-brand-orange-deep"
      }`}
    >
      {children}
    </h2>
  );
}

function Quote({ text, light = false, attribution = true }: { text: string; light?: boolean; attribution?: boolean }) {
  return (
    <blockquote className="font-serif-em text-[21px] leading-snug md:text-[26px]">
      <span className={light ? "text-accent" : "text-primary"}>“</span>
      {text}
      <span className={light ? "text-accent" : "text-primary"}>”</span>
      {attribution && (
        <footer className="mt-2 font-sans text-[12px] not-italic tracking-wide opacity-75">
          dr. Frecillia Regina
        </footer>
      )}
    </blockquote>
  );
}

/**
 * Click-to-play YouTube preview. Only a thumbnail is on the page until the visitor taps, so the YouTube player
 * (heavy) does not load with the page. Tapping = a user gesture, so the video starts with sound.
 */
function YoutubePreview({ id, aspect }: { id: string; aspect: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault">("maxresdefault");
  const imgRef = useRef<HTMLImageElement>(null);

  // maxresdefault does not exist for every video (YouTube answers 404 with a tiny placeholder). The onError
  // below covers the normal case; this covers an image that already failed before React hydrated.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth <= 120) setThumb("hqdefault");
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] border border-border bg-primary-deep shadow-[0_24px_50px_-30px] shadow-primary/70"
      style={{ aspectRatio: aspect }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&cc_load_policy=1&hl=id`}
          title="Preview Kelas GTM bersama dr. Frecillia Regina"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Putar video preview kelas"
          className="group absolute inset-0 block h-full w-full"
        >
          <img
            ref={imgRef}
            src={`https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
            alt=""
            fetchPriority="high"
            decoding="async"
            onError={() => setThumb("hqdefault")}
            className="h-full w-full object-cover"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex size-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-white/70 transition group-hover:scale-105"
          >
            <Play className="ml-1 size-7 fill-current" />
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11.5px] font-semibold text-white backdrop-blur">
            Preview kelas
          </span>
        </button>
      )}
    </div>
  );
}

function Hero({ ctaRef }: { ctaRef: React.RefObject<HTMLDivElement | null> }) {
  const a = GTM_ASSETS;
  // With a landscape video the media sits between the headline and the buy button on mobile, so the button
  // stays in the first screen. The taller poster/photo keeps the old order (button first, media below).
  const mediaFirst = Boolean(a.previewYoutubeId);

  const media = a.previewYoutubeId ? (
    <YoutubePreview id={a.previewYoutubeId} aspect={a.previewAspect} />
  ) : a.heroVideo ? (
    <video
      src={a.heroVideo}
      poster={a.heroVideoPoster ?? undefined}
      autoPlay
      muted
      loop
      playsInline
      controls
      className="aspect-[4/5] w-full rounded-[28px] border border-border object-cover"
    />
  ) : a.heroPhoto ? (
    <img
      src={a.heroPhoto}
      alt="Ibu menemani anak makan di meja makan"
      width={1080}
      height={1350}
      fetchPriority="high"
      className="aspect-[4/5] w-full rounded-[28px] border border-border object-cover"
    />
  ) : (
    <div
      className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-accent/45 via-secondary to-primary/15 p-6 md:p-8"
      role="img"
      aria-label="Lepeh. Emut. Tutup mulut."
    >
      <div aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full border-[16px] border-gold/35" />
      <div aria-hidden="true" className="absolute -right-8 -top-8 size-48 rounded-full border-[10px] border-primary/10" />
      <div className="relative flex h-full flex-col justify-between">
        <div aria-hidden="true" className="font-display text-[46px] font-semibold leading-[1.03] text-brand-orange-deep md:text-[56px]">
          <div>Lepeh.</div>
          <div>Emut.</div>
          <div className="font-serif-em text-primary">Tutup mulut.</div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-card/90 p-3 shadow-sm backdrop-blur">
          {a.doctorPhoto ? (
            <img
              src={a.doctorPhoto}
              alt=""
              width={44}
              height={44}
              className="size-11 flex-none rounded-full object-cover object-top"
            />
          ) : (
            <span className="font-display flex size-11 flex-none items-center justify-center rounded-full bg-gold text-[16px] font-semibold text-foreground">
              {GTM_DOCTOR.initials}
            </span>
          )}
          <span className="min-w-0">
            <span className="block text-[13.5px] font-bold leading-tight text-foreground">{GTM_DOCTOR.name}</span>
            <span className="block text-[11.5px] leading-snug text-ink-soft">{GTM_DOCTOR.descriptor}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 90% 0%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%), radial-gradient(90% 60% at 0% 100%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 70%)",
        }}
      />
      <div className={`${WRAP} relative flex flex-col py-9 md:grid md:grid-cols-2 md:gap-x-12 md:py-16`}>
        <div className="order-1 md:col-start-1 md:row-start-1 md:self-end">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-primary-foreground">
            <span className="gaia-pulse h-1.5 w-1.5 rounded-full bg-accent" />
            Kelas online · Gerakan Tutup Mulut
          </span>
          <h1 className="font-display text-[34px] font-semibold leading-[1.1] text-brand-orange-deep md:text-[46px]">
            Anak Lepeh, Emut, Tutup Mulut?{" "}
            <em className="font-serif-em text-primary">Ternyata Bukan Soal Menunya</em>, Bun.
          </h1>
          <p className="mt-4 text-[15.5px] text-ink-soft md:text-[17px]">
            Kelas online bersama <strong className="text-foreground">{GTM_DOCTOR.name}</strong>. {GTM_OFFER.totalVideos} video singkat yang bisa ditonton sambil nidurin si kecil.
          </p>
        </div>

        <div
          className={`${mediaFirst ? "order-2 mt-6" : "order-4 mt-8"} md:order-none md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0 md:self-center`}
        >
          {media}
        </div>

        <div className="order-3 md:col-start-1 md:row-start-2 md:self-start">
          <div ref={ctaRef} className="mt-6 md:max-w-[340px]">
            <BuyButton className="w-full" />
            <NoLinkNote />
          </div>
          <p className="font-serif-em mt-3 text-[12.5px] italic text-ink-soft">
            Edukasi untuk orang tua, bukan pengganti konsultasi dokter.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 text-[12.5px] font-semibold text-foreground">
            {[
              { Icon: Video, t: `${GTM_OFFER.totalVideos} video` },
              { Icon: Clock, t: GTM_OFFER.duration },
              { Icon: Repeat, t: "Tonton ulang kapan saja" },
            ].map(({ Icon, t }) => (
              <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5">
                <Icon className="size-3.5 text-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="bg-secondary">
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Kalau ini terasa familiar…</Eyebrow>
        <H2>Meja makan yang bikin hati ciut</H2>
        <ul className="mt-6 grid gap-2.5 md:grid-cols-2">
          {GTM_PROBLEMS.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3.5">
              <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="font-serif-em text-[16.5px] leading-snug text-foreground">“{p}”</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reframe() {
  const photo = GTM_ASSETS.reframePhoto;
  return (
    <>
      <section className="bg-primary-deep text-primary-foreground">
        <div className={`${WRAP} py-12 md:grid md:grid-cols-2 md:items-center md:gap-12 md:py-16`}>
          <div>
            <Eyebrow light>Tenang dulu, Bun</Eyebrow>
            <h2 className="font-display text-[30px] font-semibold leading-[1.12] md:text-[40px]">
              Bunda nggak salah. Bunda cuma belum dikasih <em className="font-serif-em text-accent">peta</em>.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-primary-foreground/85">
              Makan itu proses belajar yang kompleks, dan anak juga bisa stres.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            {photo && (
              <img src={photo} alt="" width={1080} height={720} loading="lazy" className="mb-5 w-full rounded-2xl object-cover" />
            )}
            <Quote text={GTM_QUOTES.gadget} light />
          </div>
        </div>
      </section>

      <section>
        <div className={`${WRAP} py-12 md:py-14`}>
          <div className="grid gap-3 md:grid-cols-2 md:gap-5">
            <div className="rounded-3xl border border-border bg-card p-5">
              <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-soft">Jalan pintas</p>
              <ul className="space-y-2.5">
                {GTM_SHORTCUTS.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                    <X className="mt-0.5 size-4 flex-none text-brand-orange-deep" strokeWidth={3} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border-2 border-primary/40 bg-card p-5 shadow-[0_14px_30px_-22px] shadow-primary/60">
              <p className="mb-3 text-[11.5px] font-bold uppercase tracking-[0.14em] text-primary">Proses belajar</p>
              <ul className="space-y-2.5">
                {GTM_PROCESS.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[14.5px] font-semibold text-foreground">
                    <Check className="mt-0.5 size-4 flex-none text-primary" strokeWidth={3} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Insight() {
  return (
    <section className="bg-secondary">
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Yang perlu Bunda tahu</Eyebrow>
        <H2>GTM bukan soal menu. Soal proses belajarnya.</H2>
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
          Anak lagi <em className="font-serif-em text-foreground">belajar</em> makan lewat tahapan sensori yang tersusun kayak piramida. Bunda nggak perlu jadi koki 10 menu, yang penting paham prosesnya.
        </p>

        <div className="mt-8 md:grid md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <Pyramid levels={GTM_PYRAMID} />
            <p className="mt-4 text-center text-[12px] text-ink-soft">Naiknya dari bawah ya, Bun. Tiap tahap dikuatkan dulu sebelum lanjut ke atasnya.</p>
          </div>
          <div className="mt-9 md:mt-0">
            <div className="mb-8 rounded-2xl border-l-4 border-gold bg-card p-4 shadow-sm">
              <p className="font-serif-em text-[19px] leading-snug text-foreground">
                Cemong dan lempar-lempar itu wajar. Itu bagian dari belajar.
              </p>
            </div>
            <p className="mb-3 text-center text-[12.5px] font-semibold text-ink-soft md:text-left">
              Makan itu kompleks. Banyak hal yang menentukan:
            </p>
            <FactorsDiagram factors={GTM_FACTORS} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section id="kurikulum">
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Isi kelas</Eyebrow>
        <H2>Yang Bunda pelajari</H2>
        <p className="mt-3 text-[15px] text-ink-soft">
          {GTM_OFFER.theoryVideos} video materi dalam 4 bagian, ditambah {GTM_OFFER.qnaVideos} video QnA dokter.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-2 md:gap-5">
          {GTM_CURRICULUM.map((c) => (
            <article key={c.n} className="flex flex-col rounded-3xl border border-border bg-card p-5 shadow-[0_14px_30px_-24px] shadow-primary/60">
              <div className="flex items-center justify-between">
                <span className="font-display flex size-9 items-center justify-center rounded-full bg-primary text-[16px] font-semibold text-primary-foreground">
                  {c.n}
                </span>
                <span className="rounded-full bg-accent/70 px-3 py-1 text-[11.5px] font-bold text-accent-foreground">
                  {c.videos} video
                </span>
              </div>
              <blockquote className="font-serif-em mt-4 text-[17px] leading-snug text-primary-deep">
                “{c.hook}”
                <footer className="mt-1 font-sans text-[11px] not-italic text-ink-soft">dr. Frecillia Regina</footer>
              </blockquote>
              <h3 className="font-display mt-4 text-[21px] font-semibold text-foreground">{c.title}</h3>
              <ul className="mt-2 space-y-1.5 text-[13.5px] text-ink-soft">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[9px] size-1 flex-none rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section className="bg-secondary">
      <div className="py-12 md:py-16">
        <div className={WRAP}>
          <Eyebrow>Yang jarang dibahas</Eyebrow>
          <H2>Sampai ke detail yang sering bikin bingung</H2>
          <p className="mt-3 text-[14px] text-ink-soft md:hidden">Geser untuk melihat semuanya →</p>
        </div>
        <ul
          className={`no-scrollbar mt-6 flex snap-x snap-mandatory scroll-pl-5 gap-3 overflow-x-auto px-5 pb-2 md:mx-auto md:grid md:max-w-[920px] md:grid-cols-4 md:gap-4 md:scroll-pl-0 md:overflow-visible md:px-8`}
          aria-label="Kartu momen kunci"
        >
          {GTM_MOMENTS.map((m) => {
            const Icon = MOMENT_ICONS[m.icon as keyof typeof MOMENT_ICONS];
            return (
              <li
                key={m.title}
                className="flex min-w-[74%] snap-start flex-col rounded-3xl border border-border bg-card p-5 shadow-[0_14px_30px_-24px] shadow-primary/60 md:min-w-0"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-gold/25 text-primary-deep">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-[19px] font-semibold leading-tight text-foreground">{m.title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{m.text}</p>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-wider text-primary">{m.ref}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Qna() {
  return (
    <section>
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Video QnA</Eyebrow>
        <H2>{GTM_OFFER.qnaVideos} pertanyaan yang dijawab dokter</H2>
        <p className="mt-3 text-[15px] text-ink-soft">
          Dari pertanyaan yang beneran sering Bunda tanyain di komentar IG, webinar, konsultasi privat, dan komunitas Gaia.
        </p>
        <ol className="mx-auto mt-7 flex max-w-[600px] flex-col gap-2.5">
          {GTM_QNA.map((q, i) => (
            <li
              key={q}
              className="max-w-[90%] self-start rounded-2xl rounded-tl-md border border-border bg-card px-4 py-3 text-[14.5px] leading-snug shadow-sm"
            >
              <span className="mb-0.5 block text-[10.5px] font-bold uppercase tracking-wider text-primary">
                Bunda · QnA {i + 1}
              </span>
              {q}
            </li>
          ))}
          <li className="mt-1 max-w-[90%] self-end rounded-2xl rounded-tr-md bg-primary px-4 py-3 text-[14.5px] font-semibold leading-snug text-primary-foreground">
            Semuanya dijawab dr. Frecillia di video QnA.
          </li>
        </ol>
      </div>
    </section>
  );
}

function Doctor() {
  const photo = GTM_ASSETS.doctorPhoto;
  return (
    <section className="bg-secondary">
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Kenalan dengan narasumber</Eyebrow>
        <div className="mt-4 overflow-hidden rounded-[28px] border border-border bg-card md:grid md:grid-cols-[280px_1fr]">
          {photo ? (
            <img src={photo} alt={GTM_DOCTOR.name} width={1080} height={1080} loading="lazy" className="aspect-square w-full object-cover object-top md:aspect-auto md:h-full md:min-h-[280px]" />
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-gold/40 via-accent/40 to-primary/15 md:aspect-auto">
              <span className="font-display flex size-24 items-center justify-center rounded-full bg-card text-[34px] font-semibold text-primary-deep shadow-sm">
                {GTM_DOCTOR.initials}
              </span>
            </div>
          )}
          <div className="p-6 md:p-8">
            <h2 className="font-display text-[26px] font-semibold leading-tight text-foreground md:text-[30px]">{GTM_DOCTOR.name}</h2>
            <p className="mt-1 text-[13px] text-ink-soft">{GTM_DOCTOR.descriptor}</p>
            <div className="mt-5 border-t border-border pt-5">
              <Quote text={GTM_QUOTES.ownChild} attribution={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section>
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Cocok atau belum</Eyebrow>
        <H2>Untuk siapa kelas ini?</H2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-3xl border-2 border-primary/40 bg-card p-5">
            <p className="mb-3 flex items-center gap-2 text-[13px] font-bold text-primary">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              Untuk
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-foreground">
              {GTM_FIT.yes.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Check className="mt-1 size-4 flex-none text-primary" strokeWidth={3} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-secondary p-5">
            <p className="mb-3 flex items-center gap-2 text-[13px] font-bold text-brand-orange-deep">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-orange-deep text-primary-foreground">
                <X className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              Bukan pengganti konsultasi
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-foreground">
              {GTM_FIT.no.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <X className="mt-1 size-4 flex-none text-brand-orange-deep" strokeWidth={3} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  // Real screenshots only. No placeholders: with an empty list the whole section is omitted.
  if (GTM_TESTIMONIALS.length === 0) return null;
  return (
    <section className="bg-secondary">
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>Kata Bunda lain</Eyebrow>
        <H2>Cerita dari yang sudah ikut</H2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {GTM_TESTIMONIALS.map((t) => (
            <img key={t.src} src={t.src} alt={t.alt} loading="lazy" className="w-full rounded-2xl border border-border" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Price() {
  const included = [
    `${GTM_OFFER.theoryVideos} video materi + ${GTM_OFFER.qnaVideos} video QnA dokter`,
    `${GTM_OFFER.duration} total, bisa ditonton ulang kapan saja`,
    ...(GTM_OFFER.accessDuration ? [`Masa akses: ${GTM_OFFER.accessDuration}`] : []),
  ];
  return (
    <section id="harga" className="bg-secondary">
      <div className={`${WRAP} py-12 md:py-16`}>
        <div className="mx-auto max-w-[480px] overflow-hidden rounded-[28px] border-2 border-primary/40 bg-card shadow-[0_24px_50px_-30px] shadow-primary/70">
          <div className="bg-primary px-6 py-3 text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
            {GTM_OFFER.name}
          </div>
          <div className="p-6">
            <p className="font-display text-center text-[44px] font-semibold leading-none text-foreground">{GTM_OFFER.priceLabel}</p>
            <p className="mt-1.5 text-center text-[12.5px] text-ink-soft">Satu kali bayar</p>

            <ul className="mt-6 space-y-2.5 text-[14.5px] text-foreground">
              {included.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Check className="mt-1 size-4 flex-none text-primary" strokeWidth={3} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>

            {GTM_OFFER.bonusesConfirmed && (
              <div className="mt-5 rounded-2xl bg-gold/15 p-4">
                <p className="mb-2 flex items-center gap-2 text-[13px] font-bold text-primary-deep">
                  <Gift className="size-4" aria-hidden="true" /> Bonus
                </p>
                <ul className="space-y-1.5 text-[14px] text-foreground">
                  {GTM_BONUSES.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[9px] size-1 flex-none rounded-full bg-primary-deep" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2.5">
              <BuyButton className="w-full" />
              <WaButton className="w-full" />
            </div>
            <NoLinkNote />
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faq = buildFaq();
  return (
    <section>
      <div className={`${WRAP} py-12 md:py-16`}>
        <Eyebrow>FAQ</Eyebrow>
        <H2>Pertanyaan yang sering muncul</H2>
        <Accordion type="single" collapsible className="mx-auto mt-5 max-w-[680px]">
          {faq.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-4 text-left text-[14.5px] font-semibold hover:no-underline [&_svg]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-[13.5px] leading-relaxed text-ink-soft">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Closing() {
  const photo = GTM_ASSETS.closingPhoto;
  return (
    <section className="bg-gradient-to-b from-secondary to-accent/30">
      <div className={`${WRAP} py-14 text-center md:py-20`}>
        {photo && (
          <img src={photo} alt="" width={1080} height={720} loading="lazy" className="mx-auto mb-8 w-full max-w-[560px] rounded-3xl object-cover" />
        )}
        <h2 className="font-display mx-auto max-w-[620px] text-[32px] font-semibold leading-[1.12] text-brand-orange-deep md:text-[44px]">
          GTM pasti berlalu. <em className="font-serif-em text-primary">Temani prosesnya dengan tenang.</em>
        </h2>
        <div className="mx-auto mt-7 flex max-w-[340px] flex-col gap-2.5">
          <BuyButton className="w-full" />
          <WaButton className="w-full" />
        </div>
        <NoLinkNote />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary-deep px-5 pb-[calc(2.25rem+76px)] pt-9 text-center text-primary-foreground/70 md:pb-9">
      <GaiaLogo className="mx-auto mb-3 h-11 w-auto rounded-md bg-background px-3 py-2 text-primary-deep" />
      <p className="mx-auto max-w-[460px] text-[11.5px] leading-relaxed">
        Kelas ini bersifat edukasi dan bukan pengganti konsultasi atau pemeriksaan dokter.
        <br />© 2026 Gaia Parenting ·{" "}
        <Link to="/privacy-policy" className="text-primary-foreground/90 underline underline-offset-2 transition hover:text-primary-foreground">
          Kebijakan Privasi
        </Link>{" "}
        ·{" "}
        <a href={GTM_OFFER.whatsapp} className="text-accent">
          WhatsApp Admin
        </a>
      </p>
    </footer>
  );
}

export function GtmPage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  // Pixel: PageView comes from the base script in __root; ViewContent = the landing page opened.
  useEffect(() => {
    trackViewContent({ content_name: GTM_OFFER.name });
  }, []);

  // Sticky bar (mobile) appears once the hero buy button has scrolled out of view.
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div lang="id" className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[920px] items-center justify-between px-5 py-2.5 md:px-8">
          <GaiaLogo className="h-9 w-auto text-primary-deep" />
          <a href="#harga" className="text-[13px] font-bold text-primary underline-offset-4 hover:underline">
            Lihat harga
          </a>
        </div>
      </header>

      <main>
        <Hero ctaRef={ctaRef} />
        <Problems />
        <Reframe />
        <Insight />
        <Curriculum />
        <Moments />
        <Qna />
        <Doctor />
        <Fit />
        <Testimonials />
        <Price />
        <Faq />
        <Closing />
      </main>
      <Footer />

      <div
        inert={!stuck}
        className={`fixed inset-x-0 bottom-0 z-50 flex items-center gap-2.5 border-t border-border bg-card/95 px-4 py-2.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.2)] backdrop-blur transition-transform duration-300 md:hidden ${
          stuck ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="min-w-0 flex-1">
          <div className="font-display text-[20px] font-semibold leading-none text-foreground">{GTM_OFFER.priceLabel}</div>
          <div className="mt-0.5 text-[10.5px] text-ink-soft">{GTM_OFFER.totalVideos} video · {GTM_OFFER.duration}</div>
        </div>
        <a
          href={GTM_OFFER.whatsapp}
          aria-label="Tanya admin via WhatsApp"
          onClick={() => trackLead({ content_name: GTM_OFFER.name })}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl bg-accent text-accent-foreground"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
        </a>
        <BuyButton compact className="flex-none" />
      </div>
    </div>
  );
}
