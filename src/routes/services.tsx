import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Wrench, Zap, Droplets, Paintbrush, Hammer, Sparkles, KeyRound, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { buildMeta } from "../components/site/SEO";
import imgElectrical from "../assets/service-electrical.jpg";
import imgPlumbing from "../assets/service-plumbing.jpg";
import imgPainting from "../assets/service-painting.jpg";
import imgFlooring from "../assets/service-flooring.jpg";
import imgGeneral from "../assets/service-general.jpg";
import imgTenant from "../assets/service-tenant.jpg";
import imgCleaning from "../assets/service-cleaning.jpg";
import imgRefurb from "../assets/service-refurb.jpg";

export const Route = createFileRoute("/services")({
  head: () => buildMeta({
    title: "Services — Property Maintenance & Refurbishment | Arctechworx",
    description: "Electrical, plumbing, painting, flooring, refurbishment, tenant prep & professional cleaning across Johannesburg. Certified, compliant, on time.",
    path: "/services",
  }),
  component: ServicesPage,
});

const services = [
  { icon: Zap, image: imgElectrical, title: "Electrical Services", points: ["Certified electricians", "DB boards & wiring", "Lighting & power", "Compliance certificates (CoC)"] },
  { icon: Droplets, image: imgPlumbing, title: "Plumbing Services", points: ["Qualified plumbers", "Geyser installs & repairs", "Leak detection & drainage", "Bathroom & kitchen plumbing"] },
  { icon: Paintbrush, image: imgPainting, title: "Painting & Waterproofing", points: ["Interior & exterior painting", "Roof & wall waterproofing", "Damp treatment", "Premium finishes"] },
  { icon: Layers, image: imgFlooring, title: "Flooring & Tiling", points: ["Tiling, vinyl & laminate", "Floor screeding & levelling", "Skirting & finishes", "Repairs & replacements"] },
  { icon: Hammer, image: imgGeneral, title: "General Maintenance & Carpentry", points: ["Handyman services", "Doors, locks & fittings", "Built-in carpentry", "Minor repairs"] },
  { icon: KeyRound, image: imgTenant, title: "Tenant-Ready Preparation", points: ["Full unit refresh", "Snag list & repairs", "Deep clean & handover", "Rental compliance"] },
  { icon: Sparkles, image: imgCleaning, title: "Professional Cleaning", points: ["Post-construction cleans", "End-of-tenancy cleans", "Deep cleaning", "Office & commercial"] },
  { icon: Wrench, image: imgRefurb, title: "Refurbishments & Renovations", points: ["Kitchens & bathrooms", "Full unit refurbs", "Office fit-outs", "Project management"] },
];

function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 md:py-28 grid-pattern border-b border-border">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-primary text-xs font-semibold tracking-[0.3em]">WHAT WE DO</span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
              Property Maintenance <span className="text-gradient-teal">Done Right</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              Certified trades, transparent quotes, and finishes that stand the test of time —
              across every discipline your property needs.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-[color:var(--surface)] border border-border rounded-xl overflow-hidden hover:border-primary/60 hover:teal-glow transition-all h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] to-transparent" />
                    <div className="absolute top-4 left-4 h-11 w-11 rounded-md bg-background/80 backdrop-blur border border-primary/40 flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-black text-xl uppercase tracking-wide mb-4">{s.title}</h3>
                    <ul className="space-y-2 mb-6 flex-1">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                      Request a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-[color:var(--surface)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading center eyebrow="READY TO START" title="Get a free, no-obligation quote" subtitle="Tell us about your property — we'll respond within one business day." />
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:teal-glow transition-all">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}