import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="group relative flex flex-col overflow-hidden border-l-2 border-border bg-card/40 px-6 py-7 transition-all hover:border-l-primary hover:bg-card"
    >
      {/* index watermark */}
      <span className="mono-label pointer-events-none absolute right-4 top-3 text-5xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
        {num}
      </span>

      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-sm bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon size={20} />
        </span>
        <h3 className="font-display text-lg font-bold text-foreground">{service.title}</h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="mt-4 space-y-1.5">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-xs text-secondary-foreground">
            <Check size={13} className="shrink-0 text-emerald" /> {b}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mono-label mt-6 inline-flex items-center gap-1.5 text-[0.65rem] text-primary transition-all group-hover:gap-2.5"
      >
        Engage <ArrowUpRight size={14} />
      </Link>
    </motion.article>
  );
}
