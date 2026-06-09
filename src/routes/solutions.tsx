import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { solutions } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry | JNC Venture" },
      { name: "description", content: "Industry-specific cybersecurity solutions for financial institutions, healthcare, government, education, SMEs, and enterprise organizations." },
      { property: "og:title", content: "JNC Venture Industry Solutions" },
      { property: "og:description", content: "Tailored security programs for the unique risks of your industry." },
    ],
  }),
  component: Solutions,
});

function Solutions() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Security tailored to your industry"
          subtitle="Every sector faces unique threats and compliance demands. We build programs designed for yours."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass flex flex-col rounded-2xl p-7 transition-shadow hover:glow-cyan"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-primary/15 text-accent ring-1 ring-accent/20">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check size={15} className="text-emerald" /> {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection title="Need a tailored solution?" subtitle="Talk to our team about a security program designed around your industry's exact requirements." />
    </div>
  );
}
