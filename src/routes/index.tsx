import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Clock, Award, Users, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SecurityAssessment } from "@/components/SecurityAssessment";
import { Process } from "@/components/Process";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { services, testimonials, faqs, solutions } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JNC Venture — Protecting Your Digital Future" },
      { name: "description", content: "Enterprise-grade cybersecurity and managed IT services: threat defense, 24/7 SOC monitoring, penetration testing, and cloud security." },
    ],
  }),
  component: Index,
});

const whyChoose = [
  { icon: ShieldCheck, title: "Proactive Defense", desc: "We hunt threats before they become breaches, not after." },
  { icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock SOC coverage with rapid incident response." },
  { icon: Award, title: "Certified Experts", desc: "CISSP, OSCP, and CEH certified security professionals." },
  { icon: Users, title: "True Partnership", desc: "A dedicated team that integrates with your business." },
];

function Index() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));
  return (
    <>
      <Hero />

      <section className="mx-auto -mt-6 max-w-7xl px-4">
        <Stats />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Comprehensive Security & IT Services"
          subtitle="From threat detection to full IT management, we cover every layer of your digital operations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <div key={s.slug} className={i >= 3 ? "hidden sm:block" : ""}>
              <ServiceCard service={s} index={i} />
            </div>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3 font-semibold transition-colors hover:border-accent">
            View All Services <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Why JNC Venture"
              title="The security partner businesses trust"
              subtitle="We combine elite expertise, modern technology, and relentless vigilance to keep you protected."
            />
          </div>
          <div className="grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-4 p-6 transition-colors hover:bg-card/60 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-border sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-border"
              >
                <w.icon className="mt-0.5 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5" size={24} />
                <div>
                  <h3 className="font-display font-bold">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-bg border-y border-border bg-card/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Testimonials" title="Trusted by security leaders" />
          <Carousel opts={{ align: "start", loop: true }} plugins={[autoplay.current]} className="mt-12">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={t} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <SectionHeading eyebrow="Industries" title="Solutions for every industry" subtitle="Tailored security programs built for the unique risks of your sector." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden border border-border bg-card/40 p-6 transition-all hover:border-primary/50 hover:bg-card ${i % 2 === 0 ? "clip-panel" : "clip-panel-alt"}`}
            >
              <s.icon className="text-primary" size={26} />
              <h3 className="mt-4 font-display font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <span className="mono-label absolute bottom-3 right-4 text-[2.5rem] font-bold text-primary/5">{String(i + 1).padStart(2, "0")}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <Process />

      <SecurityAssessment />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </section>



      <CTASection />
    </>
  );
}
