import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Landmark, ClipboardList, ShieldCheck, Target, Eye, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { buildMeta } from "../components/site/SEO";
import heroImg from "../assets/construction-hero.jpg";

export const Route = createFileRoute("/construction")({
  head: () => buildMeta({
    title: "Arctech Construction — Residential, Commercial & Public Builds",
    description: "End-to-end construction across residential, commercial, industrial and government infrastructure. CIDB & NHBRC registered.",
    path: "/construction",
    image: "https://arctechworx.co.za/og-construction.jpg",
  }),
  component: ConstructionPage,
});

const capabilities = [
  { icon: Building2, title: "Residential Construction", desc: "New homes, extensions, and full builds delivered to spec." },
  { icon: Building2, title: "Commercial & Industrial", desc: "Offices, warehouses, retail and industrial facilities." },
  { icon: Landmark, title: "Government & Public Infrastructure", desc: "Public sector projects, tenders and infrastructure builds." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end oversight from planning through handover." },
  { icon: Target, title: "Construction Consulting", desc: "Advisory, feasibility studies and technical guidance." },
  { icon: ShieldCheck, title: "Compliance & Safety", desc: "OHS-compliant sites, NHBRC and CIDB registered." },
];

const process = [
  { step: "01", title: "Consultation", desc: "Site assessment and brief alignment." },
  { step: "02", title: "Design & Quote", desc: "Detailed scope, timelines and transparent pricing." },
  { step: "03", title: "Build", desc: "Professionally managed execution by certified teams." },
  { step: "04", title: "Handover", desc: "Snag-free delivery with full documentation." },
];

export default function ConstructionPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Arctech Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-6 border border-gold/40 bg-gold/10 rounded-full px-4 py-1.5">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-gold text-xs tracking-[0.2em] font-semibold">ARCTECH CONSTRUCTION DIVISION</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight max-w-4xl">
              Building <span className="text-gold">Tomorrow's</span><br />Infrastructure
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From private residences to public infrastructure — Arctech Construction delivers
              landmark projects with uncompromising quality and full regulatory compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-[color:var(--gold-foreground)] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all">
                Discuss a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 border border-border hover:border-gold/60 text-foreground font-semibold px-6 py-3 rounded-md transition-all">
                View Portfolio
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-20 md:py-28 border-y border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <FadeUp>
            <div className="border border-gold/30 rounded-xl p-8 h-full bg-background/40">
              <Eye className="h-8 w-8 text-gold mb-4" />
              <h2 className="font-display text-2xl font-black uppercase mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be South Africa's most trusted construction partner — delivering projects that
                shape skylines, strengthen communities, and stand as benchmarks of quality for
                generations to come.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border border-gold/30 rounded-xl p-8 h-full bg-background/40">
              <Target className="h-8 w-8 text-gold mb-4" />
              <h2 className="font-display text-2xl font-black uppercase mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class construction outcomes through skilled craftsmanship,
                transparent partnerships, and an unwavering commitment to compliance, safety,
                and on-time delivery.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="CAPABILITIES"
              title="Full-spectrum construction"
              subtitle="From single-site residential to multi-phase public infrastructure."
            />
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-[color:var(--surface)] border border-border rounded-xl p-6 hover:border-gold/60 transition-all h-full"
                >
                  <div className="h-12 w-12 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-wide mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 border-t border-border bg-[color:var(--surface)] grid-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading center eyebrow="OUR PROCESS" title="How we deliver" />
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.08}>
                <div className="relative bg-background/60 border border-border rounded-xl p-6 h-full">
                  <div className="font-display text-5xl font-black text-gold/30 mb-2">{p.step}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground">Let's talk timelines, scope and budget.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold text-[color:var(--gold-foreground)] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all">
              Start the Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}