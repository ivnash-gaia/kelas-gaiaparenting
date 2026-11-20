import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Baby, BookOpen, Bookmark, Check, CheckCheck, Compass, Heart, Leaf, MessageCircle, ShieldCheck, Smartphone, Sparkles, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ACADEMY_FAQ, ACADEMY_OFFER, ACADEMY_STAGES } from '@/lib/academy-data';
import garden from '@/assets/academy-garden.jpg';

const title = 'Gaia Academy | Belajar Parenting Pelan-pelan, dari Sumber yang Jelas';
const description = 'Teman belajar di 1.000 hari pertama: kehamilan, bayi baru lahir, dan batita. Microlesson singkat, Cek Kesiapan, Peta Belajar, dan Parent’s Board. Rp49.000.';
export const Route = createFileRoute('/gaia-academy')({
  head: () => ({
    meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: 'https://kelas.gaiaparenting.com/gaia-academy' }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: 'https://kelas.gaiaparenting.com/gaia-academy' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;500;600;700;800&display=swap' }],
  }),
  component: AcademyPage,
});

function record(event: string, details: Record<string, unknown> = {}) {
  const query = new URLSearchParams(window.location.search);
  window.dispatchEvent(new CustomEvent('academy:analytics', { detail: { event, ...details, utm_source: query.get('utm_source'), utm_campaign: query.get('utm_campaign') } }));
}

function BuyAccess({ location, className = '' }: { location: string; className?: string }) {
  if (ACADEMY_OFFER.paymentUrl) {
    return <Button asChild className={`academy-button ${className}`}><a href={ACADEMY_OFFER.paymentUrl} onClick={() => record('cta_click', { location })}>Beli akses <ArrowRight /></a></Button>;
  }
  return <Button className={`academy-button ${className}`} disabled title="Pembayaran belum dibuka">Beli akses <ArrowRight /></Button>;
}

const features = [
  { icon: BookOpen, title: 'Microlesson singkat', text: 'Cerita pendek yang dekat dengan keseharian. Belajar sedikit demi sedikit, tanpa harus menunggu waktu luang panjang.' },
  { icon: Sparkles, title: 'Kartu Ilmu & Mitos atau Fakta', text: 'Ambil inti yang penting dan telaah lagi saran yang sering kamu dengar.' },
  { icon: CheckCheck, title: 'Cek Kesiapan', text: 'Kenali apa yang sudah kamu pahami dan bagian mana yang ingin dipelajari dulu.' },
  { icon: ShieldCheck, title: 'Skrining Cepat', text: 'Menyusui, MPASI, tidur, bayi sakit, imunisasi, cara bayi menerima dunia, serta interaksi sosial dan bahasa.' },
  { icon: Compass, title: 'Peta Belajar', text: 'Temukan arah belajar sesuai tahap keluarga dan hal yang sedang kamu butuhkan.' },
  { icon: Bookmark, title: 'Parent’s Board & Komitmenku', text: 'Simpan yang terasa penting. Pilih satu langkah kecil untuk dipraktikkan di rumah.' },
];

function AcademyPage() {
  const hero = useRef<HTMLElement>(null);
  const price = useRef<HTMLElement>(null);
  const [sticky, setSticky] = useState(false);
  const [notice, setNotice] = useState(true);

  useEffect(() => {
    document.documentElement.lang = 'id';
    const heroObserver = new IntersectionObserver(([entry]) => setSticky(!entry.isIntersecting), { threshold: 0 });
    const priceObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { record('scroll_pricing'); priceObserver.disconnect(); }
    }, { threshold: 0.2 });
    if (hero.current) heroObserver.observe(hero.current);
    if (price.current) priceObserver.observe(price.current);
    return () => { heroObserver.disconnect(); priceObserver.disconnect(); };
  }, []);

  return <div className="academy-page min-h-screen" lang="id">
    <header className="sticky top-0 z-30 border-b border-border bg-academy-sky/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-20 max-w-[1100px] items-center justify-between gap-3 px-5">
        <Link to="/" className="flex items-center gap-2 text-academy-rose" aria-label="Gaia Academy, kembali ke daftar kelas">
          <Sprout className="size-8 shrink-0" /><span className="academy-heading text-2xl font-extrabold leading-none">gaia <span className="block text-xs font-bold">ACADEMY</span></span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Navigasi Academy">
          {sticky && <BuyAccess location="sticky" className="hidden sm:inline-flex" />}
          <Button variant="ghost" asChild className="min-h-12 font-extrabold text-primary"><a href={ACADEMY_OFFER.loginUrl} onClick={() => record('login_click')}>Masuk <ArrowRight /></a></Button>
        </nav>
      </div>
    </header>

    <section ref={hero} className="relative isolate overflow-hidden bg-academy-sky">
      <img src={garden} alt="" width={1600} height={912} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="mx-auto max-w-[900px] px-5 pb-28 pt-12 text-center md:pb-32 md:pt-16">
        <span className="inline-flex items-center gap-2 rounded-full bg-academy-rose-soft px-4 py-2 text-xs font-extrabold text-academy-rose"><Leaf className="size-4" /> Teman tumbuh di 1.000 hari pertama</span>
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.04] md:text-7xl">Gaia Academy</h1>
        <p className="academy-heading mx-auto mt-4 max-w-[650px] text-3xl font-bold leading-tight md:text-4xl">Berhenti bingung soal bayi.<br />Belajar <span className="academy-highlight">pelan-pelan</span>,<br className="sm:hidden" /> dari sumber yang jelas.</p>
        <p className="mx-auto mt-6 max-w-[570px] text-base leading-relaxed md:text-lg">Menemani Ayah dan Bunda dari kehamilan, bayi baru lahir, sampai batita. Microlesson singkat, cukup beberapa menit dan bisa dibaca dari HP.</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3"><BuyAccess location="hero" className="px-7" /><Button variant="ghost" asChild className="min-h-12 font-extrabold"><a href="#isinya">Lihat isinya <ArrowRight /></a></Button></div>
        <p className="mt-3 text-xs font-semibold text-muted-foreground">Rp49.000 · Pembelian segera dibuka</p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold"><span className="flex items-center gap-2"><BookOpen className="size-4 text-primary" /> Rujukan Buku KIA & sumber ilmiah</span><span className="flex items-center gap-2"><Smartphone className="size-4 text-primary" /> Belajar dari browser HP</span></div>
      </div>
    </section>

    <section className="bg-academy-band px-5 py-14 md:py-20">
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-2 text-center text-xs font-extrabold uppercase text-academy-rose">Pernah merasa begini?</p>
        <h2 className="text-center text-3xl font-extrabold md:text-4xl">Kenapa terasa <span className="academy-highlight">melelahkan?</span></h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">{['“Setiap orang punya saran berbeda: keluarga, grup WhatsApp, media sosial.”', '“Baca banyak artikel, tapi tetap tidak yakin mana yang benar.”', '“Takut ada yang terlewat, apalagi saat bayi sedang sakit atau rewel.”'].map((text, i) => <article key={text} className="academy-card p-6"><MessageCircle className="mb-5 size-6 text-academy-rose" /><p className="text-base font-bold leading-relaxed">{text}</p><span className="mt-5 block text-xs font-semibold text-muted-foreground">{['Saran yang bertumpuk', 'Informasi tanpa arah', 'Ingin lebih siap'][i]}</span></article>)}</div>
        <p className="mx-auto mt-8 max-w-[580px] text-center text-base leading-relaxed">Kamu tidak harus tahu semuanya hari ini. Mulai dari satu hal yang paling dekat dengan kebutuhan keluargamu.</p>
      </div>
    </section>

    <section className="px-5 py-16 md:py-20"><div className="mx-auto max-w-[1000px]">
      <h2 className="text-center text-3xl font-extrabold md:text-4xl">Caranya <span className="academy-highlight">sederhana</span></h2>
      <div className="mt-10 grid gap-9 md:grid-cols-3">{[
        ['Cek kesiapanmu', 'Tahu bagian mana yang perlu dipelajari dulu. Tidak perlu memulai semuanya sekaligus.'],
        ['Belajar sedikit demi sedikit', 'Baca cerita pendek, Kartu Ilmu, dan Mitos atau Fakta di sela keseharianmu.'],
        ['Simpan dan praktikkan', 'Pin yang penting. Tulis satu komitmen kecil untuk dilakukan di rumah.'],
      ].map(([heading, text], i) => <div key={heading}><span className="academy-heading flex size-12 items-center justify-center rounded-full bg-academy-sun text-2xl font-extrabold">{i + 1}</span><h3 className="mt-4 text-2xl font-bold">{heading}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
    </div></section>

    <section id="isinya" className="bg-muted px-5 py-16 md:py-20"><div className="mx-auto max-w-[1000px]">
      <p className="text-center text-xs font-extrabold uppercase text-academy-rose">Bukan sekadar kumpulan bacaan</p>
      <h2 className="mt-2 text-center text-3xl font-extrabold md:text-4xl">Ruang belajar untuk <span className="academy-highlight">orang tua</span></h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title: heading, text }) => <article key={heading} className="academy-card p-6"><Icon className="mb-4 size-7 text-primary" /><h3 className="text-2xl font-bold leading-tight">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm"><span className="font-extrabold">Beda Pendapat</span><span className="rounded-full bg-academy-rose-soft px-3 py-1 text-xs font-bold text-academy-rose">Segera hadir</span></div>
    </div></section>

    <section className="px-5 py-16 md:py-20"><div className="mx-auto max-w-[1000px]">
      <h2 className="text-center text-3xl font-extrabold md:text-4xl">Setiap tahap, <span className="academy-highlight">ada temannya</span></h2>
      <p className="mt-3 text-center text-muted-foreground">Mulai dari situasi yang sedang kamu jalani.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">{ACADEMY_STAGES.map((stage, i) => { const Icon = [Heart, Baby, Sprout][i]; return <article key={stage.name} className="academy-card p-6"><div className="mb-5 flex size-14 items-center justify-center rounded-full bg-academy-rose-soft"><Icon className="size-7 text-academy-rose" /></div><h3 className="text-2xl font-bold">{stage.name}</h3><ul className="mt-4 space-y-3">{stage.topics.map(topic => <li key={topic} className="flex gap-2 text-sm leading-relaxed"><Check className="mt-1 size-4 shrink-0 text-primary" />{topic}</li>)}</ul></article>; })}</div>
    </div></section>

    <section className="border-y border-border bg-academy-rose-soft px-5 py-14"><div className="mx-auto max-w-[750px] text-center">
      <BookOpen className="mx-auto mb-4 size-8 text-academy-rose" /><h2 className="text-3xl font-extrabold">Belajar dari sumber yang jelas</h2>
      <p className="mt-5 leading-relaxed">Materi disusun dari Buku KIA dan rujukan ilmiah. Informasi kesehatan membantu kamu memahami konteks dan menyiapkan pertanyaan untuk tenaga kesehatan, bukan untuk menentukan diagnosis sendiri.</p>
      <p className="mt-5 text-sm font-extrabold text-academy-rose">Gaia Academy bukan pengganti dokter.</p>
    </div></section>

    <section id="akses" ref={price} className="bg-academy-band px-5 py-16 md:py-20"><div className="mx-auto max-w-[680px] text-center">
      <p className="text-xs font-extrabold uppercase text-academy-rose">Satu langkah kecil untuk keluarga</p>
      <h2 className="mt-3 text-4xl font-extrabold">Buka ruang <span className="academy-highlight">belajarmu</span></h2>
      <p className="academy-heading mt-6 text-6xl font-extrabold">Rp49.000</p>
      <p className="mt-2 text-sm font-semibold text-muted-foreground">Ketentuan lama akses akan tersedia sebelum pembelian dibuka.</p>
      <ul className="mx-auto my-7 grid max-w-[490px] gap-3 text-left text-sm sm:grid-cols-2">{['Materi tiga tahap parenting', 'Cek Kesiapan & Skrining Cepat', 'Kartu Ilmu & Mitos atau Fakta', 'Peta Belajar', 'Parent’s Board', 'Komitmenku'].map(item => <li key={item} className="flex items-center gap-2"><Check className="size-4 shrink-0 text-primary" />{item}</li>)}</ul>
      <BuyAccess location="price" className="w-full max-w-[360px]" />
      <p className="mt-3 text-sm font-semibold">Pembelian segera dibuka.</p>
      <Button variant="link" asChild className="mt-2 min-h-12"><a href="https://wa.me/6281219596828?text=Halo%20Gaia%2C%20saya%20ingin%20informasi%20akses%20Gaia%20Academy"><MessageCircle /> Tanya tim Gaia</a></Button>
      <div className="mt-10 border-t border-primary/20 pt-7 text-left"><h3 className="text-center text-2xl font-bold">Setelah pembayaran dibuka</h3><ol className="mt-5 space-y-4 text-sm">{['Bayar melalui halaman pembayaran dan cantumkan email untuk akun Academy.', 'Tim Gaia memeriksa pembayaran dan membuka akses maksimal 24 jam setelah terkonfirmasi.', 'Daftar atau masuk dengan email yang sama, lalu mulai belajar.'].map((text, i) => <li key={text} className="flex gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-extrabold">{i + 1}</span><span className="pt-1">{text}</span></li>)}</ol></div>
    </div></section>

    <section className="px-5 py-16"><div className="mx-auto max-w-[720px]"><h2 className="mb-8 text-center text-3xl font-extrabold md:text-4xl">Masih ingin <span className="academy-highlight">tanya?</span></h2><Accordion type="single" collapsible onValueChange={value => { if (value) record('faq_open', { question: value }); }}>{ACADEMY_FAQ.map(({ q, a }) => <AccordionItem key={q} value={q}><AccordionTrigger className="min-h-14 text-base font-extrabold">{q}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <footer className="border-t border-border bg-muted px-5 py-10"><div className="mx-auto max-w-[1000px]"><div className="flex flex-wrap justify-between gap-8"><div><p className="academy-heading text-3xl font-extrabold text-academy-rose">Gaia Academy</p><p className="mt-2 text-sm text-muted-foreground">Teman belajar, bukan pengganti dokter.</p></div><nav aria-label="Tautan footer" className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-bold"><a href="https://www.instagram.com/gaia_parenting/" className="text-primary">@gaia_parenting</a><a href="https://wa.me/6281219596828" className="text-primary">0812-1959-6828</a><a href={ACADEMY_OFFER.loginUrl} className="text-primary">Masuk ke Academy</a><a href="#akses" className="text-primary">Informasi akses</a><Link to="/privacy-policy" className="text-primary">Kebijakan Privasi</Link><Link to="/" className="text-primary">Daftar kelas Gaia</Link></nav></div><p className="mt-8 text-xs text-muted-foreground">© 2026 Gaia Parenting</p></div></footer>
    {sticky && <div className="fixed bottom-0 z-30 flex w-full items-center justify-between gap-3 border-t border-border bg-card px-5 py-3 sm:hidden"><span className="font-extrabold">Rp49.000<span className="block text-xs font-normal text-muted-foreground">Segera dibuka</span></span><BuyAccess location="sticky-mobile" /></div>}
    {notice && <aside aria-label="Informasi analitik" className="border-t border-border bg-muted px-5 pb-24 pt-4 text-xs text-muted-foreground sm:pb-4"><div className="mx-auto flex max-w-[1000px] items-center justify-between gap-4"><p>Situs ini menggunakan Meta Pixel untuk mengukur kunjungan. <Link to="/privacy-policy" className="underline">Kebijakan Privasi</Link></p><Button variant="ghost" className="min-h-11 shrink-0 text-xs" onClick={() => setNotice(false)}>Mengerti</Button></div></aside>}
  </div>;
}