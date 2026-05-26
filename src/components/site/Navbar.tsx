import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Flame } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#temples", label: "Temples" },
  { href: "#places", label: "Places" },
  { href: "#food", label: "Food" },
  { href: "#hotels", label: "Hotels" },
  { href: "#omkareshwar", label: "Omkareshwar" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 shadow-card-luxe" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 flex items-center justify-between gap-3">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-7 h-7 text-saffron animate-flicker" />
            <div className="absolute inset-0 bg-saffron blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          </div>
          <span className="font-display text-sm sm:text-lg tracking-[0.2em] sm:tracking-widest text-gradient-divine whitespace-nowrap">
            DIVINE JOURNEY
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-saffron text-primary-foreground font-semibold text-sm shadow-divine hover:shadow-gold-glow transition-all hover:-translate-y-0.5"
        >
          Book Tour
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-gold"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong mt-3 mx-4 rounded-2xl p-5 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/90 hover:text-gold py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-5 py-2.5 rounded-full bg-gradient-saffron text-primary-foreground font-semibold"
          >
            Book Tour
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}