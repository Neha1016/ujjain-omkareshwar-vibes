import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  MapPin,
  Star,
  Flame,
  Sunrise,
  Mountain,
  Camera,
  ShoppingBag,
  Telescope,
  Waves,
  Check,
  Crown,
  Users,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";

import aboutImg from "@/assets/about-ujjain.jpg";
import ramGhat from "@/assets/ram-ghat.jpg";
import narmada from "@/assets/narmada.jpg";

import tMahakal from "@/assets/hero-mahakal.jpg";
import tKalbhairav from "@/assets/temple-kalbhairav.jpg";
import tHarsiddhi from "@/assets/temple-harsiddhi.jpg";
import tChintaman from "@/assets/temple-chintaman.jpg";
import tMangalnath from "@/assets/temple-mangalnath.jpg";
import tIskcon from "@/assets/temple-iskcon.jpg";

import fPoha from "@/assets/food-poha.jpg";
import fBafla from "@/assets/food-bafla.jpg";
import fKachori from "@/assets/food-kachori.jpg";
import fLassi from "@/assets/food-lassi.jpg";

import hLuxury from "@/assets/hotel-luxury.jpg";
import hBoutique from "@/assets/hotel-boutique.jpg";
import hFamily from "@/assets/hotel-family.jpg";

import oIsland from "@/assets/omk-island.jpg";
import oBridge from "@/assets/omk-bridge.jpg";
import oMamleshwar from "@/assets/omk-mamleshwar.jpg";
import oTemple from "@/assets/hero-omkareshwar.jpg";

import gCorridor from "@/assets/gallery-corridor.jpg";
import gDiya from "@/assets/gallery-diya.jpg";
import gSadhu from "@/assets/gallery-sadhu.jpg";

import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

/* ---------- ABOUT UJJAIN ---------- */
export function AboutUjjain() {
  const highlights = [
    { icon: Flame, title: "Bhasma Aarti", text: "The mystical pre-dawn ritual at Mahakaleshwar with sacred ash." },
    { icon: Crown, title: "Mahakal City", text: "Ancient capital of King Vikramaditya — heart of Hindu time itself." },
    { icon: Sparkles, title: "Simhastha Kumbh", text: "One of the four great Kumbh Melas on the holy Kshipra." },
    { icon: Star, title: "Culture & Festivals", text: "Vibrant traditions, local markets, sweets and folk artistry." },
  ];
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-night" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-saffron/10 blur-[120px] rounded-full" />
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative hover-zoom rounded-3xl shadow-card-luxe">
            <img
              src={aboutImg}
              alt="Bhasma Aarti at Mahakaleshwar Temple Ujjain"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-gold/20" />
            <div className="absolute -bottom-6 -right-6 glass-strong px-6 py-4 rounded-2xl">
              <div className="text-gold text-3xl font-display">2000+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/70">years of devotion</div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="text-gold text-xs tracking-[0.4em] uppercase font-semibold mb-4">
              About Ujjain
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl md:text-5xl text-gradient-divine leading-tight">
              City of Mahakal,<br />Heart of Eternity
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-foreground/75 leading-relaxed text-lg font-serif-elegant">
              Ujjain is one of the seven sacred cities of Hindu cosmology — the
              navel of the universe in ancient astronomy, home to Lord
              Mahakaleshwar, one of the twelve Jyotirlingas. Time itself,
              tradition says, begins at Ujjain.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i + 1}>
                <div className="glass p-5 rounded-2xl hover:border-gold/40 transition-all hover:-translate-y-1">
                  <h.icon className="w-6 h-6 text-gold mb-3" />
                  <h4 className="font-display text-lg text-foreground">{h.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TEMPLES ---------- */
const temples = [
  { name: "Mahakaleshwar Jyotirlinga", img: tMahakal, desc: "The supreme Jyotirlinga, where time bows before Mahakal." },
  { name: "Kal Bhairav Temple", img: tKalbhairav, desc: "Fierce guardian deity of Ujjain, offered sacred liquor." },
  { name: "Harsiddhi Temple", img: tHarsiddhi, desc: "Shakti Peetha with twin pillars glowing with hundreds of diyas." },
  { name: "Chintaman Ganesh", img: tChintaman, desc: "Self-manifested Ganesha believed to dissolve all worries." },
  { name: "Mangalnath Temple", img: tMangalnath, desc: "Birthplace of Mars (Mangal) on the banks of Kshipra." },
  { name: "Gadkalika Temple", img: tHarsiddhi, desc: "Goddess Kalika revered by the poet Kalidasa." },
  { name: "ISKCON Ujjain", img: tIskcon, desc: "Marble symphony of Radha-Krishna devotion." },
  { name: "Sandipani Ashram", img: tMangalnath, desc: "Sacred school where Krishna learned the Vedas." },
  { name: "Ram Ghat", img: ramGhat, desc: "Legendary ghat of the evening Kshipra aarti." },
  { name: "Gopal Mandir", img: tIskcon, desc: "Marble masterpiece built by Maharani Bayajibai Scindia." },
];

export function Temples() {
  return (
    <section id="temples" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <SectionTitle
        eyebrow="Famous Temples"
        title="Ten Sacred Shrines of Ujjain"
        subtitle="Each stone breathes a thousand prayers."
      />
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {temples.map((t, i) => (
          <Reveal key={t.name} delay={i % 4}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden hover-zoom shadow-card-luxe h-full relative"
            >
              <div className="aspect-[4/5] overflow-hidden w-full">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-4 sm:p-5 pt-16 sm:pt-20">
                <h3 className="font-display text-base sm:text-lg text-gold leading-tight break-words">{t.name}</h3>
                <p className="text-xs sm:text-sm text-foreground/75 mt-1 line-clamp-2">{t.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- BEST PLACES ---------- */
const places = [
  { icon: Flame, title: "Ram Ghat Aarti", text: "Witness hundreds of diyas float at golden dusk." },
  { icon: Telescope, title: "Vedh Shala (Jantar Mantar)", text: "Maharaja Jai Singh's ancient stone observatory." },
  { icon: Waves, title: "Kshipra River", text: "Sacred river of liberation flowing through eras." },
  { icon: Crown, title: "Mahakal Lok Corridor", text: "Half-kilometre walk through illuminated Shiva tales." },
  { icon: ShoppingBag, title: "Local Bazaars", text: "Rudraksha, prasad, sarees, Ujjain's flavors." },
  { icon: Sunrise, title: "Sunset Viewpoints", text: "Kshipra banks turn molten gold at dusk." },
  { icon: Camera, title: "Photography Spots", text: "Temple silhouettes, ghats, devotional faces." },
];

export function BestPlaces() {
  return (
    <section id="places" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-night">
      <SectionTitle
        eyebrow="Best Places"
        title="Where Devotion Meets Wonder"
        subtitle="From observatories to ghats — Ujjain unfolds slowly."
      />
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {places.map((p, i) => (
          <Reveal key={p.title} delay={i % 3}>
            <div className="group glass rounded-2xl p-6 h-full hover:border-gold/50 hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-saffron/10 rounded-full blur-3xl group-hover:bg-saffron/20 transition-colors" />
              <p.icon className="w-8 h-8 text-gold mb-4" />
              <h4 className="font-display text-xl text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- FOOD ---------- */
const foods = [
  { name: "Poha Jalebi", img: fPoha, tag: "Iconic Breakfast" },
  { name: "Dal Bafla", img: fBafla, tag: "Malwa Classic" },
  { name: "Kachori & Malpua", img: fKachori, tag: "Street Sweet" },
  { name: "Creamy Lassi", img: fLassi, tag: "Cool Bliss" },
  { name: "Bhutte Ka Kees", img: fPoha, tag: "Corn Specialty" },
  { name: "Sabudana Khichdi", img: fBafla, tag: "Vrat Favorite" },
  { name: "Hot Kachori", img: fKachori, tag: "Spice Burst" },
  { name: "Street Bazaars", img: fLassi, tag: "Food Walks" },
];

export function Food() {
  return (
    <section id="food" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <SectionTitle
        eyebrow="Flavors of Ujjain"
        title="A Feast for the Soul"
        subtitle="From temple prasad to bustling chaat lanes."
      />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {foods.map((f, i) => (
          <Reveal key={f.name + i} delay={i % 4}>
            <motion.div whileHover={{ y: -6 }} className="group relative rounded-3xl overflow-hidden shadow-card-luxe">
              <div className="hover-zoom">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold border border-gold/40 px-2 py-1 rounded-full mb-2">
                  {f.tag}
                </span>
                <h3 className="font-display text-base sm:text-xl text-foreground leading-tight break-words">{f.name}</h3>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- HOTELS ---------- */
const hotels = [
  { name: "Mahakal Heritage Palace", img: hLuxury, rating: 4.9, price: "₹12,500", tag: "Luxury · Temple View" },
  { name: "Saffron Boutique Hotel", img: hBoutique, rating: 4.7, price: "₹6,800", tag: "Boutique · Walk to Temple" },
  { name: "Kshipra Riverside Stay", img: hFamily, rating: 4.6, price: "₹3,900", tag: "Family · River View" },
];

export function Hotels() {
  return (
    <section id="hotels" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-night">
      <SectionTitle
        eyebrow="Stay"
        title="Best Hotels in Ujjain"
        subtitle="From royal heritage to riverside calm."
      />
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
        {hotels.map((h, i) => (
          <Reveal key={h.name} delay={i}>
            <motion.div whileHover={{ y: -8 }} className="glass rounded-3xl overflow-hidden shadow-card-luxe h-full flex flex-col">
              <div className="relative hover-zoom aspect-[4/3] overflow-hidden">
                <img src={h.img} alt={h.name} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 glass-strong px-3 py-1.5 rounded-full flex items-center gap-1 text-gold text-sm font-semibold">
                  <Star className="w-4 h-4 fill-gold" />
                  {h.rating}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-gold tracking-widest uppercase">{h.tag}</div>
                <h3 className="font-display text-2xl mt-2 text-foreground">{h.name}</h3>
                <div className="mt-auto pt-5 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">starts from</div>
                    <div className="font-display text-2xl text-gradient-gold">{h.price}<span className="text-xs text-muted-foreground font-sans"> /night</span></div>
                  </div>
                  <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-saffron text-primary-foreground text-sm font-semibold">Book</a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- OMKARESHWAR ---------- */
export function OmkareshwarHero() {
  return (
    <section id="omkareshwar" className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={oIsland} alt="Om-shaped island Omkareshwar" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <div className="text-gold text-xs tracking-[0.4em] uppercase font-semibold">Omkareshwar</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-gradient-divine leading-tight">
              The Om-Shaped<br />Sacred Island
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 font-serif-elegant text-lg text-foreground/80 leading-relaxed max-w-xl">
              Cradled by the Narmada, Omkareshwar takes the shape of the
              primordial syllable <span className="text-gold">ॐ</span>.
              Home to one of the twelve Jyotirlingas, it is where rivers,
              ropeways and ancient mantras meet.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Jyotirlinga", "Narmada Boating", "Ropeway", "Sunset Ghats"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full glass border-gold/30 text-sm text-foreground/90">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={4}>
            <a href="#packages" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-saffron text-primary-foreground font-semibold shadow-divine">
              Plan Your Trip
            </a>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[oTemple, narmada, oBridge, oMamleshwar].map((src, i) => (
            <Reveal key={i} delay={i}>
              <div className={`hover-zoom rounded-2xl overflow-hidden shadow-card-luxe ${i % 2 ? "translate-y-6" : ""}`}>
                <img src={src} alt="Omkareshwar scene" loading="lazy" width={800} height={800} className="aspect-square w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OMKARESHWAR PLACES ---------- */
const omkPlaces = [
  { name: "Omkareshwar Temple", img: oTemple, desc: "Jyotirlinga on the Om-shaped island." },
  { name: "Mamleshwar Temple", img: oMamleshwar, desc: "Twin Jyotirlinga of intricate stone." },
  { name: "Narmada Ghat", img: narmada, desc: "Sacred ghats for snan and aarti." },
  { name: "Suspension Bridge", img: oBridge, desc: "Iconic walk over the holy Narmada." },
  { name: "Boating Points", img: narmada, desc: "Glide across mirror-calm waters." },
  { name: "Sunset Viewpoint", img: oIsland, desc: "Golden silhouettes from the hilltop." },
];

export function OmkareshwarPlaces() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-night">
      <SectionTitle
        eyebrow="Famous Places"
        title="Discover Omkareshwar"
      />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {omkPlaces.map((p, i) => (
          <Reveal key={p.name} delay={i % 3}>
            <motion.div whileHover={{ y: -6 }} className="relative rounded-3xl overflow-hidden shadow-card-luxe hover-zoom group">
              <img src={p.img} alt={p.name} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-2xl text-gold leading-tight break-words">{p.name}</h3>
                <p className="text-xs sm:text-sm text-foreground/75 mt-1 line-clamp-2">{p.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-foreground/60">
                  <MapPin className="w-3 h-3" /> Omkareshwar, MP
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- OMK FOOD & STAYS ---------- */
const omkStays = [
  { name: "Narmada Riverside Cafe", img: narmada, tag: "Riverside Dining", note: "Fresh local thali by the water." },
  { name: "Om Heritage Hotel", img: hBoutique, tag: "Hotel", note: "Premium rooms with island view." },
  { name: "Shri Omkar Dharamshala", img: hFamily, tag: "Dharamshala", note: "Pilgrim-friendly stays since 1962." },
  { name: "Forest View Cottages", img: hLuxury, tag: "Nature Stay", note: "Wake to birdsong and Narmada mist." },
];

export function OmkareshwarFoodStay() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <SectionTitle
        eyebrow="Food & Stay"
        title="Riverside Hospitality"
        subtitle="Cafes, dharamshalas and nature-view rooms."
      />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {omkStays.map((s, i) => (
          <Reveal key={s.name} delay={i}>
            <motion.div whileHover={{ y: -6 }} className="glass rounded-3xl overflow-hidden shadow-card-luxe h-full">
              <div className="hover-zoom aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{s.tag}</div>
                <h4 className="font-display text-lg mt-1 text-foreground">{s.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{s.note}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- PACKAGES ---------- */
const packages = [
  {
    name: "1 Day Ujjain Darshan",
    price: "₹2,499",
    features: ["All Ujjain temples", "Local guide", "AC transport", "Lunch included"],
    accent: false,
  },
  {
    name: "2 Day Ujjain + Omkareshwar",
    price: "₹5,899",
    features: ["Both Jyotirlingas", "Narmada boating", "3★ hotel stay", "All meals"],
    accent: true,
  },
  {
    name: "Family Special",
    price: "₹14,999",
    features: ["For 4 members", "Private vehicle", "Comfort hotel", "VIP darshan"],
    accent: false,
  },
  {
    name: "VIP Darshan Package",
    price: "₹8,999",
    features: ["Skip-the-line darshan", "Bhasma Aarti access*", "Luxury car", "Pandit assistance"],
    accent: false,
  },
  {
    name: "Spiritual Retreat",
    price: "₹19,999",
    features: ["5-day immersion", "Yoga & meditation", "Heritage stay", "Personal guru"],
    accent: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-night">
      <SectionTitle
        eyebrow="Tour Packages"
        title="Curated Spiritual Journeys"
        subtitle="Hand-picked itineraries for every devotee."
      />
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i % 5}>
            <motion.div
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-6 h-full flex flex-col shadow-card-luxe transition-all ${
                p.accent
                  ? "bg-gradient-saffron text-primary-foreground shadow-divine ring-2 ring-gold/60"
                  : "glass"
              }`}
            >
              {p.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-primary-foreground text-[10px] tracking-widest font-bold rounded-full">
                  POPULAR
                </div>
              )}
              <h3 className={`font-display text-xl ${p.accent ? "" : "text-gold"}`}>{p.name}</h3>
              <div className="mt-4 font-display text-3xl">
                {p.price}
                <span className={`text-sm font-sans font-normal ${p.accent ? "opacity-80" : "text-muted-foreground"}`}> /person</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.accent ? "" : "text-gold"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex justify-center px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  p.accent
                    ? "bg-background text-gold hover:bg-foreground"
                    : "bg-gradient-saffron text-primary-foreground hover:shadow-gold-glow"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- GALLERY (masonry) ---------- */
const galleryImgs = [
  { src: gCorridor, alt: "Mahakal Lok corridor at night", span: "row-span-2" },
  { src: ramGhat, alt: "Ram Ghat aarti with diyas" },
  { src: gSadhu, alt: "Sadhu portrait at dawn", span: "row-span-2" },
  { src: oTemple, alt: "Omkareshwar temple at night" },
  { src: gDiya, alt: "Diya in cupped hands" },
  { src: narmada, alt: "Narmada river boats at sunset" },
  { src: tHarsiddhi, alt: "Harsiddhi diya stambh" },
  { src: oIsland, alt: "Om-shaped island aerial" },
  { src: aboutImg, alt: "Bhasma aarti", span: "row-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
      <SectionTitle
        eyebrow="Gallery"
        title="Moments of the Divine"
        subtitle="Cinematic frames from the sacred trail."
      />
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
        {galleryImgs.map((g, i) => (
          <Reveal key={i} delay={i % 4}>
            <div className={`relative group rounded-2xl overflow-hidden hover-zoom shadow-card-luxe h-full ${g.span ?? ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-xs text-gold tracking-widest uppercase">Divine Frame</div>
                <div className="text-sm font-display text-foreground">{g.alt}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Pilgrim · Delhi",
    img: a1,
    quote:
      "The Bhasma Aarti experience moved me to tears. Every detail was arranged perfectly — from VIP darshan to the riverside stay.",
  },
  {
    name: "Rohan Mehta",
    role: "Solo Traveller · Mumbai",
    img: a2,
    quote:
      "Omkareshwar at dawn from the boat is unforgettable. Divine Journey curated a trip that felt deeply personal and luxurious.",
  },
  {
    name: "Sushila Devi",
    role: "Family Trip · Jaipur",
    img: a3,
    quote:
      "My grandparents could comfortably visit every temple. The team treated us like family — bookings, food, prasad — all handled.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-night">
      <SectionTitle
        eyebrow="Testimonials"
        title="Voices of the Faithful"
      />
      <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i}>
            <div className="glass rounded-3xl p-7 h-full relative">
              <div className="absolute -top-4 left-7 text-7xl font-display text-gold leading-none">"</div>
              <p className="font-serif-elegant text-lg text-foreground/85 italic leading-relaxed pt-4">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                <img src={t.img} alt={t.name} loading="lazy" width={56} height={56} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/40" />
                <div>
                  <div className="font-display text-foreground">{t.name}</div>
                  <div className="text-xs text-gold/80 tracking-wider uppercase">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- CONTACT / BOOKING ---------- */
const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  date: z.string().min(1, "Pick a date"),
  pkg: z.string().min(1, "Select a package"),
  message: z.string().trim().max(1000).optional(),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", pkg: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Booking request received! We'll contact you shortly.");
      setForm({ name: "", phone: "", email: "", date: "", pkg: "", message: "" });
    }, 900);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-night" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/10 blur-[140px] rounded-full" />
      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Reveal>
            <div className="text-gold text-xs tracking-[0.4em] uppercase">Book Your Journey</div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-gradient-divine leading-tight">
              Begin Your Divine<br />Pilgrimage Today
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 font-serif-elegant text-lg text-foreground/80">
              Tell us about your dream trip. Our pilgrimage curators will craft a
              private itinerary across Ujjain &amp; Omkareshwar within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, text: "Mahakal Road, Ujjain, Madhya Pradesh — 456006" },
                { icon: Users, text: "+91 98765 43210 · hello@divinejourney.in" },
                { icon: Mountain, text: "Open daily · 6:00 AM – 10:00 PM IST" },
              ].map((i, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <i.icon className="w-5 h-5 text-gold mt-1" />
                  <span className="text-foreground/85">{i.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-9 shadow-card-luxe space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
              </Field>
              <Field label="Phone">
                <input value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91 ..." />
              </Field>
            </div>
            <Field label="Email">
              <input value={form.email} onChange={set("email")} className={inputCls} placeholder="you@email.com" type="email" />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Tour Date">
                <input value={form.date} onChange={set("date")} type="date" className={inputCls} />
              </Field>
              <Field label="Package">
                <select value={form.pkg} onChange={set("pkg")} className={inputCls}>
                  <option value="">Select a package</option>
                  {packages.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Message">
              <textarea value={form.message} onChange={set("message")} rows={4} className={inputCls} placeholder="Tell us your preferences..." />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3.5 rounded-full bg-gradient-saffron text-primary-foreground font-semibold shadow-divine hover:shadow-gold-glow transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Booking"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-background/40 border border-border focus:border-gold/60 focus:ring-2 focus:ring-gold/20 outline-none rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/40 transition-all";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-gold/80 mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}