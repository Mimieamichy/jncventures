import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { SecurityAssessment } from "@/components/SecurityAssessment";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cybersecurity & Managed IT | JNC Venture" },
      { name: "description", content: "Explore JNC Venture services: cybersecurity, penetration testing, SOC monitoring, endpoint & email security, cloud security, managed IT, and more." },
      { property: "og:title", content: "JNC Venture Services" },
      { property: "og:description", content: "Comprehensive cybersecurity and managed IT services for businesses of all sizes." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          eyebrow="Our Services"
          title="Security & IT services built for resilience"
          subtitle="A complete portfolio of cybersecurity and managed IT services, delivered by certified experts and backed by a 24/7 SOC."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <SecurityAssessment />
      <CTASection title="Not sure where to start?" subtitle="Book a free consultation and our experts will recommend the right services for your business." />
    </div>
  );
}
