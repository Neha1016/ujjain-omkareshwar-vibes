import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  AboutUjjain,
  Temples,
  BestPlaces,
  Food,
  Hotels,
  OmkareshwarHero,
  OmkareshwarPlaces,
  OmkareshwarFoodStay,
  Packages,
  Gallery,
  Testimonials,
  Contact,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <AboutUjjain />
        <Temples />
        <BestPlaces />
        <Food />
        <Hotels />
        <OmkareshwarHero />
        <OmkareshwarPlaces />
        <OmkareshwarFoodStay />
        <Packages />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
