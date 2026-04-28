import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem("atw_cookie_ok")) setShow(true);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 inset-x-0 z-40 bg-[color:var(--surface)] border-t border-border"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col md:flex-row items-center gap-3 justify-between">
            <p className="text-sm text-muted-foreground">
              We use cookies to improve your experience. By using our site, you accept our use of cookies.
            </p>
            <button
              onClick={() => { localStorage.setItem("atw_cookie_ok", "1"); setShow(false); }}
              className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
