import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            <div className="absolute -inset-16 bg-saffron/20 blur-3xl rounded-full animate-flicker" />
            <Flame className="relative w-16 h-16 text-saffron animate-flicker" />
            <div className="relative mt-6 font-display text-gold tracking-[0.5em] text-sm">
              ॐ · DIVINE JOURNEY · ॐ
            </div>
            <div className="relative mt-4 w-40 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}