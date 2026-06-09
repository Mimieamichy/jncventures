import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Activity, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroArt from "@/assets/hero-grid.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      {/* ambient background */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-0 size-[40rem] rounded-full bg-primary/15 blur-[140px]" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* terminal status bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-label flex w-fit items-center gap-2 rounded-sm border border-border bg-card/60 px-3 py-1.5 text-[0.65rem] text-primary"
        >
          <Terminal size={13} />
          <span className="text-muted-foreground">~/jnc</span>
          <span className="text-primary">$ secure --status</span>
          <span className="size-1.5 animate-pulse rounded-full bg-emerald" />
          <span className="text-emerald">ALL SYSTEMS PROTECTED</span>
        </motion.div>

        {/* broken grid: overlapping headline + offset art */}
        <div className="relative mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="relative z-20 lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl"
            >
              We hunt threats
              <br />
              <span className="text-gradient">before</span> they
              <br />
              become breaches.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              JNC Venture is the security operations partner for teams that can't
              afford downtime — penetration testing, 24/7 SOC monitoring, and
              fully managed IT, engineered for resilience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:glow-cyan"
              >
                Book a Free Assessment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="mono-label inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                View Capabilities
              </Link>
            </motion.div>
          </div>

          {/* offset, clipped art panel that overlaps the headline column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 lg:col-span-5 lg:-ml-16"
          >
            <div className="clip-panel relative overflow-hidden rounded-sm border border-primary/30 bg-card">
              <img
                src={heroArt}
                alt="Abstract green circuit shield representing JNC Venture cybersecurity"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
            </div>

            {/* floating telemetry chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 top-8 flex items-center gap-2 rounded-sm px-3 py-2 text-xs font-medium"
            >
              <Activity size={15} className="text-emerald" /> Live SOC · 0 incidents
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-4 bottom-10 flex items-center gap-2 rounded-sm px-3 py-2 text-xs font-medium"
            >
              <ShieldCheck size={15} className="text-emerald" /> Zero-Trust enforced
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
