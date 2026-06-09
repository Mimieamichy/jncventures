import { Reveal } from "./motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="mono-label inline-flex items-center gap-2 text-[0.65rem] text-primary">
          <span className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
