import { useState } from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      href="https://wa.me/27699282496"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl pl-4 pr-5 py-3"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white" aria-hidden>
        <path d="M19.11 17.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34zm-5.34 7.3h-.01c-1.74 0-3.45-.47-4.94-1.35l-.35-.21-3.67.96.98-3.58-.23-.37a9.86 9.86 0 01-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 012.9 7c0 5.46-4.45 9.9-9.9 9.9zm8.42-18.32a11.82 11.82 0 00-8.42-3.49C7.22 2.69 2.1 7.81 2.1 14.24c0 2.06.54 4.07 1.56 5.85L2 26l6.06-1.59a11.82 11.82 0 005.71 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.39z"/>
      </svg>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
        className="overflow-hidden whitespace-nowrap text-sm font-semibold"
      >
        Chat with us on WhatsApp
      </motion.span>
    </motion.a>
  );
}
