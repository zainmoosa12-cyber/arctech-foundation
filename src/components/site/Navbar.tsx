import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Receipt } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/construction", label: "Construction" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-md bg-primary flex items-center justify-center font-display font-black text-primary-foreground text-lg">A</div>
          <div className="leading-tight">
            <div className="font-display font-black tracking-widest text-sm md:text-base">ARCTECHWORX</div>
            <div className="text-[10px] text-muted-foreground tracking-wider hidden sm:block">BUILT TO LAST</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://books.zoho.com/portal/arctechconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs text-gold hover:text-foreground transition-colors px-3 py-2 border border-gold/30 rounded-md"
          >
            <Receipt className="h-4 w-4" /> Pay Invoice
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-md hover:bg-primary/90 transition-all hover:teal-glow tracking-wide"
          >
            GET A QUOTE
          </Link>
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setOpen(false)} className="p-2" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 mt-12 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-3xl font-bold tracking-wide"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md"
              >
                GET A QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
