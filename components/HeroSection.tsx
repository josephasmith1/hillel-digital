import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DigitalBackground } from "./DigitalBackground";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for Golden Gate / Tech Bridge image */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero_background_1768583081086.png')",
          }} 
        />
        <div className="absolute inset-0 bg-tech-blue/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" /> {/* Extra dimming */}
        
        {/* Digital Particles Overlay */}
        <DigitalBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
          The Israel Innovation & <br />
          Entrepreneurship Hub
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
          Bridging the Israeli and UCLA tech ecosystems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="#student-groups"
            className="group flex items-center gap-2 bg-ucla-gold text-gray-900 hover:bg-yellow-400 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Get Involved
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
