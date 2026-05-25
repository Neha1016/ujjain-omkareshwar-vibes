import { Flame, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-6 bg-gradient-night border-t border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-7 h-7 text-saffron animate-flicker" />
            <span className="font-display text-xl tracking-widest text-gradient-divine">
              DIVINE JOURNEY
            </span>
          </div>
          <p className="text-sm text-foreground/70 font-serif-elegant leading-relaxed">
            Curating premium pilgrimages across the sacred geographies of
            Ujjain &amp; Omkareshwar since 2008.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gradient-saffron hover:text-primary-foreground transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-gold tracking-widest text-sm uppercase mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-foreground/75 text-sm">
            {["About Ujjain", "Temples", "Best Places", "Food", "Hotels", "Omkareshwar", "Packages", "Gallery"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().split(" ")[0]}`} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold tracking-widest text-sm uppercase mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex gap-2 items-start"><MapPin className="w-4 h-4 text-gold mt-0.5" /> Mahakal Rd, Ujjain, MP — 456006</li>
            <li className="flex gap-2 items-start"><Phone className="w-4 h-4 text-gold mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-2 items-start"><Mail className="w-4 h-4 text-gold mt-0.5" /> hello@divinejourney.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold tracking-widest text-sm uppercase mb-5">Find Us</h4>
          <div className="rounded-2xl overflow-hidden glass aspect-video">
            <iframe
              title="Mahakaleshwar Temple Ujjain map"
              src="https://www.google.com/maps?q=Mahakaleshwar+Temple+Ujjain&output=embed"
              className="w-full h-full grayscale-[40%] hue-rotate-[330deg]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
        <div>© {new Date().getFullYear()} Divine Journey. All rights reserved.</div>
        <div className="font-serif-elegant italic text-gold/80">"Har Har Mahadev · Om Namah Shivaya"</div>
      </div>
    </footer>
  );
}