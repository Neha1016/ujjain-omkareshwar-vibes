import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.08 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14 max-w-3xl mx-auto">
      <Reveal>
        <div className="ornament text-gold text-xs tracking-[0.4em] uppercase font-semibold">
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display text-gradient-divine leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-5 text-lg text-muted-foreground font-serif-elegant italic">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}