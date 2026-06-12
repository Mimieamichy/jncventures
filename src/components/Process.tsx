import { motion } from "motion/react";
import { Search, Lock, RefreshCw, Headset, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { icon: Search, title: "Assess", desc: "We conduct a vulnerability assessment to identify system risks and vulnerabilities." },
  { icon: Lock, title: "Secure", desc: "We implement zero-trust controls, hardening, and multi-layered protection." },
  { icon: RefreshCw, title: "Maintain", desc: "Continuous monitoring, update patches, and optimization keeping your business running." },
  { icon: Headset, title: "Support", desc: "A 24/7 dedicated team, personalised to each businesses — rapid response when it matters most." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4">
        <SectionHeading
          center={false}
          eyebrow="How we operate"
          title="A structured path to resilience"
          subtitle="We follow a disciplined approach to keep your business systems secure, and stable."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-background px-7 py-10 transition-colors hover:bg-card"
            >
              <span className="mono-label text-[0.65rem] text-primary/60">STEP {String(i + 1).padStart(2, "0")}</span>
              <s.icon size={30} className="mt-5 text-primary transition-transform group-hover:-translate-y-1" />
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="mono-label absolute right-5 top-9 hidden text-primary/40 lg:block">{"->"}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
