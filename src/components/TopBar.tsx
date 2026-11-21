import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { GaiaLogo } from "@/components/GaiaLogo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, isGroup, isGroupActive, normalizePath, type NavGroup } from "@/lib/nav-data";

// The bar switches between the inline menu and the hamburger by the width of the bar itself
// (container query), not the screen: event pages sit in a 480px column even on a desktop screen.
const DESKTOP = "@2xl:flex";
const MOBILE_ONLY = "@2xl:hidden";

function DropdownGroup({ group, pathname }: { group: NavGroup; pathname: string }) {
  const active = isGroupActive(group, pathname);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`group inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-[13.5px] outline-none transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring ${
          active ? "font-bold text-primary" : "font-medium text-ink-soft"
        }`}
      >
        {group.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={6} className="w-[300px] rounded-xl p-1.5">
        {group.items.map((item) => (
          <DropdownMenuItem
            key={item.to}
            asChild
            className="cursor-pointer flex-col items-start gap-0.5 rounded-lg px-3 py-2.5"
          >
            <Link to={item.to} aria-current={normalizePath(pathname) === item.to ? "page" : undefined}>
              <span
                className={`text-[13.5px] leading-snug ${
                  normalizePath(pathname) === item.to ? "font-bold text-primary" : "font-semibold text-foreground"
                }`}
              >
                {item.label}
              </span>
              {item.hint && <span className="text-[11.5px] text-muted-foreground">{item.hint}</span>}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const current = normalizePath(pathname);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Buka menu"
          className={`${MOBILE_ONLY} -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby={undefined} className="w-[86%] max-w-sm overflow-y-auto p-0">
        <SheetTitle className="border-b border-border px-5 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-ink-soft">
          Menu
        </SheetTitle>
        <nav aria-label="Menu utama" className="px-3 py-3">
          {NAV.map((entry) =>
            isGroup(entry) ? (
              <div key={entry.label} className="mt-3">
                <p className="px-2 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange-deep">
                  {entry.label}
                </p>
                {entry.items.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={current === item.to ? "page" : undefined}
                      className={`flex flex-col gap-0.5 rounded-lg px-2 py-2.5 transition hover:bg-muted ${
                        current === item.to ? "bg-muted" : ""
                      }`}
                    >
                      <span
                        className={`text-[14.5px] leading-snug ${
                          current === item.to ? "font-bold text-primary" : "font-semibold text-foreground"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.hint && <span className="text-[12px] text-muted-foreground">{item.hint}</span>}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            ) : (
              <SheetClose asChild key={entry.to}>
                <Link
                  to={entry.to}
                  aria-current={current === entry.to ? "page" : undefined}
                  className={`block rounded-lg px-2 py-2.5 text-[15px] transition hover:bg-muted ${
                    current === entry.to ? "bg-muted font-bold text-primary" : "font-semibold text-foreground"
                  }`}
                >
                  {entry.label}
                </Link>
              </SheetClose>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/**
 * `flush`: the page already pads its content (homepage, privacy policy), so the bar adds no
 * side padding of its own and the logo lines up with the content below it.
 */
export function TopBar({ compact = false, flush = false }: { compact?: boolean; flush?: boolean }) {
  const { pathname } = useLocation();
  const current = normalizePath(pathname);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur ${flush ? "" : "px-5"} ${compact ? "py-2.5" : "py-3"}`}
    >
      <div className="@container flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0" aria-label="Gaia Parenting, ke Beranda">
          <GaiaLogo className={`text-primary-deep ${compact ? "h-9 w-auto" : "h-10 w-auto"}`} />
        </Link>

        <nav aria-label="Menu utama" className={`hidden items-center gap-1 @2xl:-mr-3 ${DESKTOP}`}>
          {NAV.map((entry) =>
            isGroup(entry) ? (
              <DropdownGroup key={entry.label} group={entry} pathname={pathname} />
            ) : (
              <Link
                key={entry.to}
                to={entry.to}
                aria-current={current === entry.to ? "page" : undefined}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-[13.5px] transition hover:text-foreground ${
                  current === entry.to ? "font-bold text-primary" : "font-medium text-ink-soft"
                }`}
              >
                {entry.label}
              </Link>
            ),
          )}
        </nav>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}
