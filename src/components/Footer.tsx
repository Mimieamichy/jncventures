import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/services", label: "Services" },
      { to: "/solutions", label: "Solutions" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { to: "/services", label: "Cybersecurity" },
      { to: "/services", label: "Penetration Testing" },
      { to: "/services", label: "Managed IT" },
      { to: "/services", label: "Cloud Security" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Protecting your digital future with enterprise-grade cybersecurity and managed IT services.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail size={15} className="text-accent" /> hello@jncventure.com</li>
              <li className="flex items-center gap-2"><Phone size={15} className="text-accent" /> +1 (555) 012-3456</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} JNC Venture. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service · Security</p>
        </div>
      </div>
    </footer>
  );
}
