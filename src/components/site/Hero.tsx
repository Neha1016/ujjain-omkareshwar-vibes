import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import heroMahakal from "@/assets/hero-mahakal.jpg";
import heroOmkar from "@/assets/hero-omkareshwar.jpg";
import { useEffect, useState } from "react";

const slides = [heroMahakal, heroOmkar];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] sm:min-h-[700px] w-full overflow-hidden"
    >
      {slides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Divine temples of Ujjain and Omkareshwar"
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.1_0.015_50/0.7)_100%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-2 text-gold text-xs tracking-[0.5em] uppercase mb-6"
        >
          <Sparkles className="w-4 h-4 animate-flicker" />
          <span>Madhya Pradesh · Bharat</span>
          <Sparkles className="w-4 h-4 animate-flicker" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display text-[2.25rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] sm:leading-[0.95] max-w-5xl break-words"
        >
          <span className="block text-foreground">Experience the</span>
          <span className="block text-gradient-divine mt-2">Divine Journey</span>
          <span className="block font-serif-elegant italic text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 text-gold-soft">
            of Ujjain &amp; Omkareshwar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-foreground/80 font-light px-2"
        >
          Explore ancient temples, sacred ghats, spirituality, culture, food and
          unforgettable journeys along the Kshipra and Narmada rivers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-stretch sm:items-center px-4 sm:px-0"
        >
          <a
            href="#packages"
            className="text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-saffron text-primary-foreground font-semibold tracking-wide shadow-divine hover:shadow-gold-glow hover:-translate-y-0.5 transition-all"
          >
            Book Tour
          </a>
          <a
            href="#temples"
            className="text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass text-gold border border-gold/40 hover:bg-gold/10 transition-all font-semibold tracking-wide"
          >
            Explore Temples
          </a>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-10 bg-gold" : "w-4 bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 text-gold/70"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}