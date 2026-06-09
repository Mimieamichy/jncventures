import { motion } from "motion/react";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/site-data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass flex h-full flex-col rounded-2xl p-7"
    >
      <Quote className="text-accent/60" size={28} />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-secondary-foreground">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-accent to-primary text-sm font-bold text-navy">
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
          <span className="block text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
      </figcaption>
    </motion.figure>
  );
}
