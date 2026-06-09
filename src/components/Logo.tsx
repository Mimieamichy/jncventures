import { Link } from "@tanstack/react-router";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="JNC Venture home">
      <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <defs>
          <linearGradient id="logoNav" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4ade80" />
            <stop offset="1" stopColor="#16a34a" />
          </linearGradient>
        </defs>
        <g transform="translate(4,4)">
          <path d="M32 2 L60 13 V34 C60 50 48 60 32 64 C16 60 4 50 4 34 V13 Z" fill="#0b0f0c" stroke="url(#logoNav)" strokeWidth="2.5" />
          <rect x="24" y="28" width="16" height="13" rx="2.5" fill="none" stroke="#4ade80" strokeWidth="2.4" />
          <path d="M27 28 V23 a5 5 0 0 1 10 0 V28" fill="none" stroke="#4ade80" strokeWidth="2.4" />
          <circle cx="32" cy="34" r="2.4" fill="#22c55e" />
          <path d="M14 18 h6 M52 18 h-6 M14 46 h6 M52 46 h-6" stroke="#22c55e" strokeWidth="1.6" strokeOpacity="0.7" />
          <circle cx="13" cy="18" r="1.8" fill="#4ade80" />
          <circle cx="53" cy="18" r="1.8" fill="#4ade80" />
          <circle cx="13" cy="46" r="1.8" fill="#4ade80" />
          <circle cx="53" cy="46" r="1.8" fill="#4ade80" />
        </g>
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">JNC</span>
          <span className="mono-label text-[0.55rem] font-medium text-primary">VENTURES</span>
        </span>
      )}
    </Link>
  );
}
