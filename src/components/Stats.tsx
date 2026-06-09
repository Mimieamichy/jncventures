import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { stats, type Stat } from "@/lib/site-data";

function formatValue(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return String(n);
}

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  return (
    <div ref={ref} className="glass rounded-2xl p-7 text-center">
      <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {stat.prefix}{formatValue(Math.round(val))}{stat.suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <motion.div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <Counter key={s.label} stat={s} />
      ))}
    </motion.div>
  );
}
