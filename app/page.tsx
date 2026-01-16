import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { VisionSection } from "@/components/VisionSection";
import { PillarsSection } from "@/components/PillarsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <PillarsSection />
      <Footer />
    </main>
  );
}
