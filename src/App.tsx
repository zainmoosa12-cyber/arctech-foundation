import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/site/Navbar";
import Footer from "./components/site/Footer";
import WhatsAppButton from "./components/site/WhatsAppButton";
import CookieBanner from "./components/site/CookieBanner";
import Index from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import Construction from "./routes/construction";
import Portfolio from "./routes/portfolio";
import Contact from "./routes/contact";

function NotFound() {
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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
