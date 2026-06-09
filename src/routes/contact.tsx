import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, Linkedin, Twitter, Github } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact JNC Venture — Get a Free Consultation" },
      { name: "description", content: "Contact JNC Venture for cybersecurity and managed IT services. Request a free consultation or security assessment today." },
      { property: "og:title", content: "Contact JNC Venture" },
      { property: "og:description", content: "Reach out for a free consultation with our security experts." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: Mail, label: "Email", value: "hello@jncventure.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
  
  { icon: Clock, label: "Business Hours", value: "Mon–Fri 8am–6pm · SOC 24/7/365" },
];

function Contact() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's secure your business"
          subtitle="Tell us about your needs and a security advisor will get back to you within one business day."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5">
                <item.icon className="text-accent" size={20} />
                <div className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{item.label}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{item.value}</div>
              </div>
            ))}
          </div>



          <div className="glass flex items-center justify-between rounded-2xl p-5">
            <span className="text-sm font-medium">Follow us</span>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
