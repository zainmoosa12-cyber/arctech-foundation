import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { buildMeta } from "../components/site/SEO";

export const Route = createFileRoute("/contact")({
  head: () => buildMeta({
    title: "Contact — Request a Quote | Arctechworx Johannesburg",
    description: "Request a free property maintenance or construction quote. Based in Fourways, Johannesburg. WhatsApp, call or email — we respond within one business day.",
    path: "/contact",
  }),
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwagqkv";

const schema = z.object({
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  location: z.string().trim().min(2, "Location is required").max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const services = ["Property Maintenance", "Refurbishment", "Electrical", "Plumbing", "Painting & Waterproofing", "Tenant Prep", "Cleaning", "Construction Project"];
const propertyTypes = ["Residential", "Commercial", "Industrial", "Government / Public"];

type FormState = z.infer<typeof schema>;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({ service: "", propertyType: "", name: "", email: "", phone: "", location: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));

  const validateStep = () => {
    const fields: (keyof FormState)[][] = [["service", "propertyType"], ["name", "email", "phone"], ["location", "message"]];
    const stepFields = fields[step];
    const result = schema.safeParse(data);
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!result.success) {
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        if (stepFields.includes(k)) e[k] = i.message;
      });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, 2)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validateStep()) return;
    const result = schema.safeParse(data);
    if (!result.success) return;
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) setSubmitted(true);
    } catch {} finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative py-20 md:py-24 grid-pattern border-b border-border">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-primary text-xs font-semibold tracking-[0.3em]">CONTACT US</span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
              Request a <span className="text-gradient-teal">Quote</span>
            </h1>
            <p className="mt-5 text-muted-foreground">We respond to every enquiry within one business day.</p>
          </FadeUp>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* INFO */}
          <FadeUp>
            <div className="space-y-4">
              <ContactCard icon={Phone} label="Call" value="+27 69 928 2496" href="tel:+27699282496" />
              <ContactCard icon={MessageCircle} label="WhatsApp" value="+27 69 928 2496" href="https://wa.me/27699282496" />
              <ContactCard icon={Mail} label="Email" value="info@arctechconstruction.co.za" href="mailto:info@arctechconstruction.co.za" />
              <ContactCard icon={MapPin} label="Office" value="SPACES, Design Quarter, 128 Leslie Ave, Fourways, 2191" />
            </div>
          </FadeUp>

          {/* FORM */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="bg-[color:var(--surface)] border border-border rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-14 w-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase">Thank you</h3>
                  <p className="mt-2 text-muted-foreground">We've received your request and will get back to you within one business day.</p>
                </div>
              ) : (
                <>
                  {/* PROGRESS */}
                  <div className="flex items-center gap-2 mb-8">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
                        <motion.div
                          initial={false}
                          animate={{ width: step >= i ? "100%" : "0%" }}
                          transition={{ duration: 0.4 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {step === 0 && (
                        <div className="space-y-5">
                          <h3 className="font-display text-xl font-black uppercase">What do you need?</h3>
                          <Field label="Service" error={errors.service}>
                            <Select value={data.service} onChange={(v) => update("service", v)} options={services} placeholder="Select a service" />
                          </Field>
                          <Field label="Property Type" error={errors.propertyType}>
                            <Select value={data.propertyType} onChange={(v) => update("propertyType", v)} options={propertyTypes} placeholder="Select property type" />
                          </Field>
                        </div>
                      )}
                      {step === 1 && (
                        <div className="space-y-5">
                          <h3 className="font-display text-xl font-black uppercase">About you</h3>
                          <Field label="Full Name" error={errors.name}>
                            <Input value={data.name} onChange={(v) => update("name", v)} placeholder="Your full name" />
                          </Field>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Email" error={errors.email}>
                              <Input type="email" value={data.email} onChange={(v) => update("email", v)} placeholder="you@example.com" />
                            </Field>
                            <Field label="Phone" error={errors.phone}>
                              <Input value={data.phone} onChange={(v) => update("phone", v)} placeholder="+27..." />
                            </Field>
                          </div>
                        </div>
                      )}
                      {step === 2 && (
                        <div className="space-y-5">
                          <h3 className="font-display text-xl font-black uppercase">Project details</h3>
                          <Field label="Property Location" error={errors.location}>
                            <Input value={data.location} onChange={(v) => update("location", v)} placeholder="Suburb, City" />
                          </Field>
                          <Field label="Tell us about the project" error={errors.message}>
                            <textarea
                              value={data.message}
                              onChange={(e) => update("message", e.target.value)}
                              rows={5}
                              maxLength={1000}
                              placeholder="Scope, timing, budget — anything that helps us quote accurately."
                              className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                            />
                          </Field>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border border-border rounded-md disabled:opacity-30 hover:border-primary/50 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    {step < 2 ? (
                      <button
                        type="button"
                        onClick={next}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:teal-glow transition-all"
                      >
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submit}
                        disabled={submitting}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:teal-glow transition-all disabled:opacity-60"
                      >
                        {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending</> : <>Send Request <ArrowRight className="h-4 w-4" /></>}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MAP */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <FadeUp>
            <SectionHeading eyebrow="FIND US" title="Based in Fourways, Johannesburg" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border h-[420px]">
              <iframe
                title="Arctechworx office location"
                src="https://www.google.com/maps?q=SPACES+Design+Quarter+128+Leslie+Ave+Fourways&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="bg-[color:var(--surface)] border border-border hover:border-primary/60 rounded-xl p-5 transition-all flex items-start gap-4">
      <div className="h-11 w-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.25em] text-muted-foreground font-semibold uppercase">{label}</div>
        <div className="font-medium text-sm mt-1 break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
    />
  );
}

function Select({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}