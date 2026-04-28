import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary" />
          <span className="text-primary font-semibold tracking-[0.2em] text-xs">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight uppercase">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
