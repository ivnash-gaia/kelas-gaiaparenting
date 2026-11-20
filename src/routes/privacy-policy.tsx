import { createFileRoute, Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TopBar } from "@/components/TopBar";
import privacyMd from "@/content/privacy-policy.md?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Kebijakan Privasi — Gaia Parenting" },
      {
        name: "description",
        content:
          "Kebijakan privasi Gaia Parenting (PT Caredise Rawat Bangsa): data yang kami kumpulkan, tujuan penggunaan, hak Anda, dan dasar hukum sesuai UU PDP.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Kebijakan Privasi — Gaia Parenting" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://kelas.gaiaparenting.com/privacy-policy" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://kelas.gaiaparenting.com/privacy-policy",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

// Typed components for react-markdown; `node` prop is discarded.
type MdComponents = Parameters<typeof ReactMarkdown>[0]["components"];

const components: MdComponents = {
  h1: ({ children }) => (
    <h1 className="font-display mb-6 text-[32px] font-semibold leading-[1.15] text-brand-orange-deep md:text-[40px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display mt-10 mb-3 border-b border-border pb-2 text-[22px] font-semibold leading-snug text-foreground md:text-[24px]">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-[15px] leading-relaxed text-ink-soft">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  em: ({ children }) => <em className="text-ink-soft">{children}</em>,
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-soft marker:text-brand-orange">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-soft marker:text-brand-orange">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-primary underline decoration-primary/40 underline-offset-2 transition hover:text-primary-deep"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-t border-border" />,
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-brand-orange bg-secondary px-4 py-3 text-[14.5px] leading-relaxed text-ink-soft">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mb-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-[13.5px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-secondary">{children}</thead>,
  th: ({ children }) => (
    <th className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest text-ink-soft">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-border px-3 py-2.5 align-top leading-snug text-ink-soft">
      {children}
    </td>
  ),
};

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[920px] px-5 pb-16">
        <TopBar compact />

        <article className="mx-auto max-w-[680px] py-10">
          <div className="mb-3 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-orange-deep">
            <span className="inline-block h-[1.5px] w-[22px] bg-brand-orange" />
            Gaia Parenting
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {privacyMd}
          </ReactMarkdown>

          <div className="mt-10 rounded-2xl border border-border bg-secondary p-5 text-[13.5px] leading-relaxed text-ink-soft">
            Ada pertanyaan tentang data pribadi Anda? Hubungi kami di{" "}
            <a
              href="mailto:admin@gaiaparenting.com"
              className="font-semibold text-primary underline underline-offset-2"
            >
              admin@gaiaparenting.com
            </a>
            .
          </div>

          <p className="mt-8 text-center text-[12px] text-ink-soft">
            <Link
              to="/"
              className="font-semibold text-primary transition hover:text-primary-deep"
            >
              ← Kembali ke daftar kelas
            </Link>
          </p>
        </article>

        <footer className="border-t border-border pt-6 text-center text-[12px] text-ink-soft">
          © 2026 Gaia Parenting ·{" "}
          <Link
            to="/privacy-policy"
            className="transition hover:text-foreground"
          >
            Kebijakan Privasi
          </Link>{" "}
          · Pengetahuan ilmiah, pemahaman budaya Indonesia.
        </footer>
      </div>
    </div>
  );
}
