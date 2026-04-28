import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";
import WhatsAppButton from "../components/site/WhatsAppButton";
import CookieBanner from "../components/site/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Arctech Construction (Pty) Ltd",
  "alternateName": "Arctechworx",
  "telephone": "+27699282496",
  "email": "info@arctechconstruction.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "SPACES, Design Quarter, 128 Leslie Ave",
    "addressLocality": "Fourways",
    "postalCode": "2191",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA",
  },
  "areaServed": ["Johannesburg", "Gauteng", "South Africa"],
  "priceRange": "$$",
  "url": "https://arctechworx.co.za",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0D1B2A" },
      { title: "Arctechworx — Property Maintenance & Construction | Johannesburg" },
      { name: "description", content: "Johannesburg's trusted property maintenance, refurbishment, and construction specialists. B-BBEE Level 1. CIDB & NHBRC registered." },
      { name: "author", content: "Arctech Construction (Pty) Ltd" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
