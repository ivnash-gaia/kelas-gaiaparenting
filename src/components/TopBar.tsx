import { Link } from "@tanstack/react-router";
import { GaiaLogo } from "@/components/GaiaLogo";

const NAV = [
  { to: "/", label: "Beranda", exact: true },
  { to: "/kelas-mpasi-online", label: "Kelas MPASI" },
  { to: "/kelas-newborn-care", label: "Kelas Newborn" },
];

export function TopBar({ compact = false }: { compact?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur ${compact ? "px-5 py-3" : "px-5 py-4"}`}
    >
      <Link to="/" className="shrink-0">
        <GaiaLogo
          className={`text-primary-deep ${compact ? "h-9 w-auto" : "h-11 w-auto"}`}
        />
      </Link>

      <nav className="flex items-center gap-3 overflow-x-auto no-scrollbar">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "font-bold text-primary" }}
            activeOptions={{ exact: item.exact }}
            className="whitespace-nowrap text-[12px] text-ink-soft transition hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
