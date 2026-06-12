import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion";
import { CTASection } from "@/components/CTASection";
import { coreValues, leadership, certifications, partners } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JNC Ventures — Our Story & Mission" },
      { name: "description", content: "Learn about JNC Venture's story, mission, vision, core values, leadership team, certifications, and technology partners." },
      { property: "og:title", content: "About JNC Ventures" },
      { property: "og:description", content: "A trusted cybersecurity and IT partner committed to protecting businesses." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          eyebrow="About Us"
          title="A trusted cybersecurity and IT partner"
          subtitle="Founded by security experts, JNC Ventures exists to make enterprise-grade protection accessible to businesses of every size."
        />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <Reveal className="glass rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            JNC Ventures began in 2022 when a small team of security analysts and IT engineers grew frustrated watching businesses fall victim to preventable attacks. We set out to build a security firm that combines the rigor of elite offensive security with the reliability of world-class managed IT.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today, we currently protect over 50 businesses — preventing hundreds of security incidents and operating a 24/7 Security Operations Center that never sleeps.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-2">
        {[
          { icon: Target, title: "Our Mission", text: "To empower businesses to operate fearlessly by delivering proactive, intelligent, and relentless IT support." },
          { icon: Eye, title: "Our Vision", text: "A digital world where every business, regardless of size, has access to elite-grade IT protection." },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <b.icon className="text-accent" size={28} />
            <h3 className="mt-4 text-xl font-semibold">{b.title}</h3>
            <p className="mt-3 text-muted-foreground">{b.text}</p>
          </motion.div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="What drives us" title="Core values" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <ShieldCheck className="text-emerald" size={22} />
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Leadership" title="Meet the team" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-to-br from-accent to-primary text-lg font-bold text-navy">
                {m.initials}
              </span>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="Trust" title="Certifications" subtitle="Our team holds the industry's most respected security credentials." />
            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span key={c} className="glass rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading center={false} eyebrow="Ecosystem" title="Technology Partners" subtitle="We work with the world's leading security and cloud platforms." />
            <div className="mt-8 flex flex-wrap gap-3">
              {partners.map((p) => (
                <span key={p} className="glass rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
