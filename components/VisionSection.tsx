"use client";

import { Target, Sparkles } from "lucide-react";
import { DigitalBackground } from "./DigitalBackground";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: Target,
    title: "Meeting the Moment",
    description: "Empowering students with future-ready skills, building an entrepreneurial community, and strengthening the vital ties between UCLA, Los Angeles, and Israel's dynamic culture of innovation.",
    gradient: "from-tech-blue/20 to-cyan-500/10",
    border: "border-tech-blue/40",
    iconBg: "bg-gradient-to-br from-tech-blue to-cyan-400",
    glow: "group-hover:shadow-[0_0_50px_rgba(49,133,192,0.4)]",
    iconColor: "text-white",
    accent: "tech-blue",
  },
  {
    icon: Sparkles,
    title: "Foundational Creativity",
    description: "Shining a light on innovation and imagination as the foundational creativity that is shaping the next chapter of Jewish life at UCLA.",
    gradient: "from-ucla-gold/20 to-amber-400/10",
    border: "border-ucla-gold/40",
    iconBg: "bg-gradient-to-br from-ucla-gold to-amber-400",
    glow: "group-hover:shadow-[0_0_50px_rgba(253,221,85,0.4)]",
    iconColor: "text-slate-900",
    accent: "ucla-gold",
  },
];

export function VisionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(49, 133, 192, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(49, 133, 192, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ucla-gold/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tech-blue/10 rounded-full blur-[150px]" />

      {/* Digital Particles */}
      <DigitalBackground variant="network" color="#3185c0" className="opacity-40" />

      {/* Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-60" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ucla-gold to-transparent opacity-60" />

      {/* Animated Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-tech-blue/30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-ucla-gold/30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-ucla-gold/30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-tech-blue/30 rounded-br-3xl" />

      <div className="container relative mx-auto px-4 z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Main Vision Text */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-white">
                Innovation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-cyan-400">Imagination</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Our connection to Israel is not solely about peoplehood or politics. It is a vital way for us to <span className="text-ucla-gold font-medium">transcend the political noise</span> and focus on the incredible creativity, innovation, and entrepreneurial energy that has shaped the nation.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                By centering on the "Start-Up Nation", we intentionally focus on what unites us: <span className="text-ucla-gold font-medium">bold ideas and future-forward solutions</span>. We aim to capture the vibrancy of Tel Aviv—a place where ideas are rapidly accelerated into global solutions—and bring that energy to UCLA.
              </p>
            </div>

            {/* Digital Feature Cards - Equal Size Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={0.2 + index * 0.2} direction={index === 0 ? "left" : "right"}>
                  <div className={`group relative h-full p-8 rounded-2xl bg-slate-800/50 bg-gradient-to-br ${feature.gradient} border ${feature.border} backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] ${feature.glow}`}>

                    {/* Card Inner Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Icon */}
                    <div className={`relative w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-xl bg-white/30 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />
                      {/* Glow Ring */}
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                      <feature.icon className={`w-7 h-7 ${feature.iconColor} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-heading font-semibold text-white mb-3 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed relative z-10">
                      {feature.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-tech-blue/40 group-hover:bg-tech-blue transition-colors duration-300 group-hover:animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-ucla-gold/40 group-hover:bg-ucla-gold transition-colors duration-500 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <div className="absolute bottom-4 left-4 w-12 h-px bg-gradient-to-r from-white/20 to-transparent group-hover:from-white/40 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-white/20 to-transparent group-hover:from-white/40 transition-colors duration-500" />
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
