import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass grid place-items-center rounded-2xl p-12 text-center"
      >
        <CheckCircle2 className="text-emerald" size={48} />
        <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Your message has been received. A JNC Venture security advisor will reach out within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Jane Doe" required />
        <Field label="Company" name="company" placeholder="Acme Inc." />
        <Field label="Email" name="email" type="email" placeholder="jane@acme.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="text-sm font-medium text-secondary-foreground">Service Needed</label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent"
        >
          <option>Select a service</option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-secondary-foreground">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your security needs..."
          className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:glow-cyan"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-secondary-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
      />
    </div>
  );
}
