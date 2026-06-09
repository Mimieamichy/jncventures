import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to secure your business?",
  subtitle = "Talk to our experts and get a tailored security strategy built for your organization.",
}: CTASectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid-bg glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:glow-cyan">
              Get Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent">
              Explore Services
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
