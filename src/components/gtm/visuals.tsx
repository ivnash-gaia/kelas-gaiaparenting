import { ArrowDown } from "lucide-react";

/**
 * "Piramida belajar makan". `levels` is base first (Sensori), so the DOM reads in learning order
 * and screen readers hear it that way; flex-col-reverse puts the foundation at the bottom.
 */
export function Pyramid({ levels }: { levels: string[] }) {
  const n = levels.length;
  const MIN = 0.3; // width of the top edge, as a share of the base
  return (
    <ol
      className="mx-auto flex w-full max-w-[360px] flex-col-reverse gap-[3px]"
      aria-label="Piramida belajar makan, dari dasar ke atas"
    >
      {levels.map((label, i) => {
        const wBottom = 1 - (1 - MIN) * (i / n);
        const wTop = 1 - (1 - MIN) * ((i + 1) / n);
        const lb = ((1 - wBottom) / 2) * 100;
        const lt = ((1 - wTop) / 2) * 100;
        const mix = n > 1 ? (i / (n - 1)) * 100 : 0;
        return (
          <li
            key={label}
            className={`flex h-[54px] items-center justify-center px-2 text-center text-[13.5px] font-bold leading-tight ${
              i < 3 ? "text-primary-foreground" : "text-foreground"
            }`}
            style={{
              background: `color-mix(in oklab, var(--primary-deep) ${100 - mix}%, var(--gold))`,
              clipPath: `polygon(${lt}% 0, ${100 - lt}% 0, ${100 - lb}% 100%, ${lb}% 100%)`,
            }}
          >
            <span className="mr-1.5 opacity-70">{i + 1}</span>
            {label}
          </li>
        );
      })}
    </ol>
  );
}

/** Simplified "faktor penerimaan makan": four inputs lead to "anak mau / menolak". */
export function FactorsDiagram({ factors }: { factors: { h: string; p: string }[] }) {
  return (
    <figure
      className="mx-auto w-full max-w-[420px]"
      aria-label="Empat faktor yang memengaruhi anak mau atau menolak makan"
    >
      <div className="grid grid-cols-2 gap-2.5">
        {factors.map((f) => (
          <div
            key={f.h}
            className="rounded-2xl border border-border bg-card px-3.5 py-3 text-center shadow-[0_6px_16px_-12px] shadow-primary/40"
          >
            <div className="text-[14px] font-bold text-primary-deep">{f.h}</div>
            {f.p && <div className="mt-0.5 text-[11.5px] leading-snug text-ink-soft">{f.p}</div>}
          </div>
        ))}
      </div>
      <div className="my-2 flex justify-center text-primary" aria-hidden="true">
        <ArrowDown className="size-5" />
      </div>
      <div className="rounded-full bg-primary px-5 py-3 text-center text-[14px] font-bold text-primary-foreground">
        Anak mau makan, atau menolak
      </div>
    </figure>
  );
}
