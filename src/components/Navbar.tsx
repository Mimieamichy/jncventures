import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Shield, Layers, Info, Mail } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Shield },
  { to: "/solutions", label: "Solutions", icon: Layers },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-7xl px-4">
          <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
            <Logo />
            <div className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    pathname === l.to ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-cyan"
              >
                Get Consultation
              </Link>
            </div>
            {/* Mobile: CTA chip instead of hamburger */}
            <Link
              to="/contact"
              className="md:hidden rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              Consult
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="mx-auto mb-3 max-w-7xl px-4">
          <div className="glass flex items-center justify-around rounded-2xl px-2 py-2">
            {links.map((l) => {
              const active = pathname === l.to;
              const Icon = l.icon;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-[0.65rem] font-medium transition-colors ${
                    active ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span>{l.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
