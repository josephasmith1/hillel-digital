"use client";

import { Target, Sparkles } from "lucide-react";
import { DigitalBackground } from "./DigitalBackground";
import { ScrollReveal } from "./ScrollReveal";

const features = [
  {
    icon: Target,
    title: "Meeting the Moment",
    description: "Empowering students with future-ready skills, building an entrepreneurial community, and strengthening the vital ties between UCLA, Los Angeles, and Israel's dynamic culture of innovation.",
    gradient: "from-tech-blue/10 to-cyan-500/10",
    border: "border-tech-blue/20",
    iconBg: "bg-gradient-to-br from-tech-blue to-cyan-500",
    glow: "group-hover:shadow-[0_0_40px_rgba(49,133,192,0.25)]",
    iconColor: "text-white",
  },
  {
    icon: Sparkles,
    title: "Foundational Creativity",
    description: "Shining a light on innovation and imagination as the foundational creativity that is shaping the next chapter of Jewish life at UCLA.",
    gradient: "from-ucla-gold/10 to-amber-400/10",
    border: "border-ucla-gold/20",
    iconBg: "bg-gradient-to-br from-ucla-gold to-amber-500",
    glow: "group-hover:shadow-[0_0_40px_rgba(253,221,85,0.25)]",
    iconColor: "text-white",
  },
];

export function VisionSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <DigitalBackground variant="orbs" color="#3185c0" className="opacity-20" />

      <div className="container relative mx-auto px-4 z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Main Vision Text */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-gray-900">
                Innovation & <span className="text-tech-blue">Imagination</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our connection to Israel is not solely about peoplehood or politics. It is a vital way for us to <span className="text-gray-900 font-medium">transcend the political noise</span> and focus on the incredible creativity, innovation, and entrepreneurial energy that has shaped the nation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                By centering on the "Start-Up Nation", we intentionally focus on what unites us: <span className="text-gray-900 font-medium">bold ideas and future-forward solutions</span>. We aim to capture the vibrancy of Tel Aviv—a place where ideas are rapidly accelerated into global solutions—and bring that energy to UCLA.
              </p>
            </div>

            {/* Digital Feature Cards - Equal Size Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={0.2 + index * 0.2} direction={index === 0 ? "left" : "right"}>
                  <div className={`group relative h-full p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${feature.glow}`}>

                    {/* Animated Icon */}
                    <div className={`relative w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 rounded-xl bg-white/30 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />
                      {/* Glow Ring */}
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <feature.icon className={`w-7 h-7 ${feature.iconColor} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-tech-blue transition-colors duration-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-ucla-gold transition-colors duration-500" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent group-hover:from-tech-blue/50 transition-colors duration-500" />
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
