import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--surface)] border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-md bg-primary flex items-center justify-center font-display font-black text-primary-foreground text-lg">A</div>
            <div>
              <div className="font-display font-black tracking-widest">ARCTECHWORX</div>
              <div className="text-xs text-primary italic">Bringing Ideas to Life</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Arctech Construction (Pty) Ltd — Johannesburg's trusted property maintenance, refurbishment and construction specialists.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">Reg No: 2023/652055/07</div>
          <div className="mt-3 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-3 py-1.5 rounded-md text-xs font-semibold">
            B-BBEE LEVEL 1 CONTRIBUTOR
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest mb-4 text-primary">NAVIGATE</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/construction", label: "Construction" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest mb-4 text-primary">CONTACT</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-primary mt-0.5" /> +27 699 282 496</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-primary mt-0.5" /> info@arctechconstruction.co.za</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> SPACES, Design Quarter, 128 Leslie Ave, Fourways, 2191</li>
          </ul>
          <div className="mt-6 text-xs text-muted-foreground border-t border-border pt-4">
            Quotes & Invoices powered by <span className="text-gold font-semibold">Zoho Books</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Arctech Construction (Pty) Ltd. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
