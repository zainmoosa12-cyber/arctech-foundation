import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MapPin, Calendar, Tag } from "lucide-react";
import { FadeUp, SectionHeading } from "../components/site/Section";
import { buildMeta } from "../components/site/SEO";
import imgRefurb from "../assets/service-refurb.jpg";
import imgPainting from "../assets/service-painting.jpg";
import imgElectrical from "../assets/service-electrical.jpg";
import imgPlumbing from "../assets/service-plumbing.jpg";
import imgFlooring from "../assets/service-flooring.jpg";
import imgTenant from "../assets/service-tenant.jpg";
import imgConstruction from "../assets/construction-hero.jpg";
import imgGeneral from "../assets/service-general.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => buildMeta({
    title: "Portfolio — Recent Projects | Arctechworx",
    description: "Selected refurbishment, maintenance and construction projects across Johannesburg.",
    path: "/portfolio",
  }),
  component: PortfolioPage,
});

type Project = {
  id: string;
  title: string;
  category: "Refurbishment" | "Maintenance" | "Construction" | "Tenant Prep";
  location: string;
  year: string;
  image: string;
  desc: string;
};

const projects: Project[] = [
  { id: "1", title: "Townhouse Full Refurb", category: "Refurbishment", location: "Fourways, JHB", year: "2025", image: imgRefurb, desc: "Complete refurbishment including kitchen, bathrooms, flooring and finishes." },
  { id: "2", title: "Exterior Repaint & Waterproofing", category: "Maintenance", location: "Sandton", year: "2025", image: imgPainting, desc: "Full exterior repaint with roof and parapet wall waterproofing." },
  { id: "3", title: "DB Board Upgrade", category: "Maintenance", location: "Randburg", year: "2024", image: imgElectrical, desc: "Compliance upgrade with new DB and certificate of compliance." },
  { id: "4", title: "Bathroom Plumbing Overhaul", category: "Refurbishment", location: "Bryanston", year: "2024", image: imgPlumbing, desc: "Full bathroom plumbing replacement and re-tiling." },
  { id: "5", title: "Office Floor Refit", category: "Refurbishment", location: "Rosebank", year: "2024", image: imgFlooring, desc: "Vinyl flooring, skirting and finishes for a 400m² office." },
  { id: "6", title: "Rental Unit Turnaround", category: "Tenant Prep", location: "Midrand", year: "2025", image: imgTenant, desc: "5-day tenant-ready turnaround with snags, paint and deep clean." },
  { id: "7", title: "Commercial Build", category: "Construction", location: "Centurion", year: "2024", image: imgConstruction, desc: "Ground-up commercial structure delivered on schedule." },
  { id: "8", title: "Carpentry & Built-ins", category: "Maintenance", location: "Lonehill", year: "2025", image: imgGeneral, desc: "Custom built-in cupboards and door replacements." },
];

const filters = ["All", "Refurbishment", "Maintenance", "Construction", "Tenant Prep"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      <section className="relative py-20 md:py-28 grid-pattern border-b border-border">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-primary text-xs font-semibold tracking-[0.3em]">OUR WORK</span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase mt-4 tracking-tight">
              Projects <span className="text-gradient-teal">Delivered</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              A snapshot of recent maintenance, refurbishment and construction work across Gauteng.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold tracking-wide border transition-all ${
                    filter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setActive(p)}
                  className="group text-left bg-[color:var(--surface)] border border-border rounded-xl overflow-hidden hover:border-primary/60 hover:teal-glow transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] font-semibold uppercase bg-background/80 backdrop-blur border border-primary/30 text-primary px-2.5 py-1 rounded">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.location}</span>
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.year}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[color:var(--surface)] border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative">
                <img src={active.image} alt={active.title} className="w-full h-72 object-cover rounded-t-2xl" />
                <button onClick={() => setActive(null)} className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase">{active.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3 mb-5">
                  <span className="inline-flex items-center gap-1.5"><Tag className="h-4 w-4 text-primary" /> {active.category}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {active.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" /> {active.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{active.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}