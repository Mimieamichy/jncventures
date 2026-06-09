import { motion } from "motion/react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SecurityAssessment() {
  const score = 92;
  const circumference = 2 * Math.PI * 52;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="glass grid items-center gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">No obligation</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Request a Free Security Assessment</h2>
          <p className="mt-4 text-muted-foreground">
            Get a complimentary external scan, a clear risk score, and a prioritized roadmap of recommendations from our security experts.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:glow-cyan">
            Get My Free Assessment <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid place-items-center">
          <div className="relative grid size-56 place-items-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
              <motion.circle
                cx="60" cy="60" r="52" fill="none" stroke="url(#scoreGrad)" strokeWidth="10" strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: circumference * (1 - score / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#00E5FF" />
                  <stop offset="1" stopColor="#00C853" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-center">
              <ShieldCheck className="mx-auto text-accent" size={26} />
              <div className="mt-1 font-display text-4xl font-bold text-gradient">{score}</div>
              <div className="text-xs text-muted-foreground">Security Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
