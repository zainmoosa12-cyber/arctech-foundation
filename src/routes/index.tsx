import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Wrench, Zap, Droplets, Paintbrush, Hammer, Home, Sparkles, KeyRound,
  Building2, Landmark, ClipboardList, ShieldCheck, Users, MessageSquare,
  CheckCircle2, ArrowRight, Phone, Mail,
} from "lucide-react";
import heroImg from "../assets/hero-construction.jpg";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { CountUp } from "../components/site/CountUp";
import { buildMeta } from "../components/site/SEO";

export const Route = createFileRoute("/")({
  head: () => buildMeta({
    title: "Arctechworx — Property Maintenance & Construction | Johannesburg",
    description: "Johannesburg's trusted property maintenance, refurbishment and construction specialists. B-BBEE Level 1. CIDB, NHBRC & SARS registered.",
    path: "/",
    image: "https://arctechworx.co.za/og.jpg",
  }),
  component: Index,
});

const worxServices = [
  { icon: Wrench, title: "Property Maintenance & Refurbishment", desc: "Scheduled maintenance and full refurbishments." },
  { icon: Zap, title: "Electrical & Plumbing Works", desc: "Certified electricians & qualified plumbers." },
  { icon: Paintbrush, title: "Painting, Waterproofing & Finishing", desc: "Interior, exterior and damp treatment." },
  { icon: Hammer, title: "General Maintenance", desc: "Carpentry, handyman services & fittings." },
  { icon: KeyRound, title: "Tenant-Ready Preparation", desc: "Full unit prep for rental-ready handover." },
  { icon: Sparkles, title: "Professional Cleaning", desc: "Post-construction and end-of-tenancy." },
];

const constructionServices = [
  { icon: Building2, title: "Residential, Commercial & Industrial", desc: "End-to-end construction projects." },
  { icon: Landmark, title: "Government & Public Infrastructure", desc: "Public sector builds and tenders." },
  { icon: ClipboardList, title: "Project Management & Consulting", desc: "Expert project oversight and advisory." },
];

const whyCards = [
  { icon: ShieldCheck, title: "Fully Compliant & Registered", desc: "CIDB, NHBRC, SARS, CIPC & CSD accredited." },
  { icon: Users, title: "100% Black-Owned", desc: "B-BBEE Level 1 contributor status." },
  { icon: Hammer, title: "Skilled & Qualified Team", desc: "Certified trades across every discipline." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Clear quotes, clear timelines, always." },
];

const teamRoles = [
  { icon: Droplets, title: "Qualified Plumbers" },
  { icon: Zap, title: "Certified Electricians" },
  { icon: Hammer, title: "Carpenters" },
  { icon: Paintbrush, title: "Painters" },
  { icon: Building2, title: "General Building Contractors" },
  { icon: Sparkles, title: "Professional Cleaners" },
];

const compliance = ["SARS", "CIDB", "CIPC", "NHBRC", "B-BBEE LEVEL 1", "CSD"];

function Card({ icon: Icon, title, desc }: { icon: any; title: string; desc?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-[color:var(--surface)] border border-border rounded-lg p-6 hover:border-primary/60 transition-all hover:teal-glow"
    >
      <div className="h-12 w-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="font-display font-bold text-base tracking-wide mb-1.5">{title}</h3>
      {desc && <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img src={heroImg} alt="Johannesburg construction site" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 border border-primary/30 px-3 py-1.5 rounded-full text-primary text-xs font-semibold tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              B-BBEE LEVEL 1 · CIDB · NHBRC REGISTERED
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight">
              Built to Last.<br />
              <span className="text-gradient-teal">Designed</span> to Impress.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Johannesburg's trusted property maintenance, refurbishment, and construction specialists — delivering quality you can trust, on time, every time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-md hover:teal-glow transition-all tracking-wide">
                GET A FREE QUOTE
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 border border-primary/60 text-foreground font-bold px-7 py-4 rounded-md hover:bg-primary/10 transition-all tracking-wide">
                VIEW OUR WORK
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[color:var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 92, s: "%", l: "Team Effectiveness" },
            { v: 100, s: "%", l: "Project Completion" },
            { v: 95, s: "%", l: "Customer Satisfaction" },
            { v: 1, s: "", l: "B-BBEE Level" },
          ].map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display font-black text-4xl md:text-6xl text-primary leading-none">
                  <CountUp to={s.v} suffix={s.s} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2 tracking-widest uppercase">{s.l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="WHAT WE DO"
              title="Two divisions. One uncompromising standard."
              subtitle="From day-to-day maintenance to large-scale construction, we deliver end-to-end solutions across South Africa."
            />
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <FadeUp>
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-xs text-primary tracking-widest font-semibold mb-2">DIVISION 01</div>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase">Arctechworx — Maintenance & Refurbishment</h3>
                </div>
              </FadeUp>
              <div className="grid sm:grid-cols-2 gap-4">
                {worxServices.map((s, i) => (
                  <FadeUp key={s.title} delay={i * 0.04}><Card {...s} /></FadeUp>
                ))}
              </div>
              <FadeUp delay={0.3}>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold text-sm tracking-wide">
                  VIEW ALL SERVICES <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeUp>
            </div>
            <div>
              <FadeUp>
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="text-xs text-gold tracking-widest font-semibold mb-2">DIVISION 02</div>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase">Arctech Construction</h3>
                </div>
              </FadeUp>
              <div className="grid gap-4">
                {constructionServices.map((s, i) => (
                  <FadeUp key={s.title} delay={i * 0.04}><Card {...s} /></FadeUp>
                ))}
              </div>
              <FadeUp delay={0.3}>
                <Link to="/construction" className="mt-6 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all font-semibold text-sm tracking-wide">
                  EXPLORE CONSTRUCTION <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-24 bg-[color:var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="text-xs text-primary tracking-widest font-semibold mb-4">WHO WE ARE</div>
            <p className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Arctech Construction is a fully Black-owned, fully compliant South African construction company with roots in property maintenance and refurbishment. Founded with a long-term vision to compete in both private and public markets — we don't just build structures, we build sustainable futures.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="grid gap-5">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="font-display text-4xl font-black text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Black-owned & compliant</div>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="font-display text-4xl font-black text-primary">6+</div>
                <div className="text-sm text-muted-foreground mt-1">Accreditations held</div>
              </div>
              <div className="bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/40 rounded-lg p-6 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gold flex items-center justify-center font-display font-black text-gold-foreground text-xl">1</div>
                <div>
                  <div className="font-display font-black text-lg tracking-wide">B-BBEE LEVEL 1</div>
                  <div className="text-xs text-muted-foreground">Contributor Status</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp><SectionHeading eyebrow="WHY CHOOSE US" title="Built on trust. Backed by compliance." center /></FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.06}><Card {...c} /></FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-[color:var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              eyebrow="OUR TEAM"
              title="Skilled professionals. Proven results."
              subtitle="At Arctech, our greatest strength lies in our people. We've built a team of highly skilled, qualified and dependable professionals who take pride in delivering quality workmanship on every project."
            />
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {teamRoles.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.05}>
                <div className="bg-background border border-primary/30 rounded-lg p-6 text-center hover:border-primary hover:teal-glow transition-all">
                  <r.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-display font-bold tracking-wide">{r.title}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp><SectionHeading eyebrow="WE ARE COMPLIANT" title="Registered. Regulated. Trusted." center /></FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {compliance.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="bg-[color:var(--surface)] border border-border rounded-lg p-5 text-center hover:border-primary transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-xs tracking-widest">{c}</div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              Operating in full compliance with South African construction industry regulations and best practices.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/60 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">Ready to Transform Your Property?</h2>
            <p className="mt-4 text-lg text-foreground/90 max-w-2xl mx-auto">
              Get in touch today for a free consultation and quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/27699282496" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-7 py-4 rounded-md hover:bg-background/90">
                <Phone className="h-4 w-4" /> WHATSAPP US
              </a>
              <a href="mailto:info@arctechconstruction.co.za" className="inline-flex items-center gap-2 border-2 border-background text-background font-bold px-7 py-4 rounded-md hover:bg-background hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" /> SEND AN EMAIL
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
