import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Target, Eye, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { buildMeta, useSEO } from "../components/site/SEO";



const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest quotes, honest timelines, honest workmanship." },
  { icon: Award, title: "Quality", desc: "Finishes that meet professional standards — every time." },
  { icon: Heart, title: "Service", desc: "Communication and care from first contact to handover." },
  { icon: Users, title: "Empowerment", desc: "100% Black-owned, growing local skills and communities." },
];

const compliance = [
  { code: "SARS", desc: "Tax Compliant" },
  { code: "CIDB", desc: "Construction Industry Registered" },
  { code: "CIPC", desc: "Companies & Intellectual Property" },
  { code: "NHBRC", desc: "National Home Builders Registration" },
  { code: "B-BBEE 1", desc: "Level 1 Contributor" },
  { code: "CSD", desc: "Central Supplier Database" },
];

function AboutPage() {
  useSEO(buildMeta({
    title: "About — 100% Black-Owned Property & Construction | Arctechworx",
    description: "Arctech Construction (Pty) Ltd — a 100% Black-owned, B-BBEE Level 1 property maintenance and construction company based in Fourways, Johannesburg.",
    path: "/about",
  }));
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative py-20 md:py-28 grid-pattern border-b border-border">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-primary text-xs font-semibold tracking-[0.3em]">WHO WE ARE</span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
              Built on <span className="text-gradient-teal">Trust.</span> Driven by <span className="text-gold">Quality.</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Arctech Construction (Pty) Ltd is a 100% Black-owned property maintenance and
              construction company based in Fourways, Johannesburg — operating two complementary
              divisions to serve property owners, managers and developers across South Africa.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <span className="text-primary text-xs font-semibold tracking-[0.3em]">OUR STORY</span>
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase mt-3 tracking-tight">
              A South African company with a builder's mindset.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Arctech Construction was founded to bring a higher standard of professionalism to
                property maintenance and construction in South Africa — combining certified trades,
                clear communication, and uncompromising quality.
              </p>
              <p>
                Today we operate two divisions: <span className="text-foreground font-semibold">Arctechworx</span> for
                property maintenance and refurbishment, and <span className="text-gold font-semibold">Arctech Construction</span> for
                full-scale residential, commercial, industrial and government projects.
              </p>
              <p>
                We're fully registered, fully compliant, and proudly 100% Black-owned — a B-BBEE
                Level 1 contributor partnering with property owners, managing agents, developers
                and the public sector.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VISION/MISSION */}
      <section className="py-20 md:py-24 border-y border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <FadeUp>
            <div className="border border-primary/30 rounded-xl p-8 h-full bg-background/40">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-2xl font-black uppercase mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be South Africa's most trusted partner for property maintenance and construction —
                known for quality, compliance and care.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border border-gold/30 rounded-xl p-8 h-full bg-background/40">
              <Target className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-display text-2xl font-black uppercase mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional workmanship and reliable service through certified trades,
                transparent communication and strict regulatory compliance.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading center eyebrow="OUR VALUES" title="What we stand for" />
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }} className="bg-[color:var(--surface)] border border-border rounded-xl p-6 h-full hover:border-primary/60 transition-all">
                  <div className="h-12 w-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold tracking-wide mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 border-t border-border bg-[color:var(--surface)] grid-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading center eyebrow="REGISTRATIONS" title="Fully compliant & accredited" subtitle="Every certification verified and current." />
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {compliance.map((c, i) => (
              <FadeUp key={c.code} delay={i * 0.04}>
                <div className="bg-background border border-border hover:border-primary/60 rounded-lg p-5 text-center transition-all">
                  <CheckCircle2 className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="font-display font-black text-lg tracking-wider">{c.code}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.desc}</div>
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
              Let's build something <span className="text-gradient-teal">together</span>.
            </h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:teal-glow transition-all">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
