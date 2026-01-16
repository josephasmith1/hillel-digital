"use client";

import { Target, Sparkles } from "lucide-react";
import { DigitalBackground } from "./DigitalBackground";

const features = [
  {
    icon: Target,
    title: "Meeting the Moment",
    description: "Empowering students with future-ready skills, building an entrepreneurial community, and strengthening the vital ties between UCLA, Los Angeles, and Israel's dynamic culture of innovation.",
    gradient: "from-cyan-500/20 to-tech-blue/20",
    border: "border-cyan-500/30",
    iconBg: "bg-gradient-to-br from-cyan-500 to-tech-blue",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
  },
  {
    icon: Sparkles,
    title: "Foundational Creativity",
    description: "Shining a light on innovation and imagination as the foundational creativity that is shaping the next chapter of Jewish life at UCLA.",
    gradient: "from-ucla-gold/20 to-amber-500/20",
    border: "border-ucla-gold/30",
    iconBg: "bg-gradient-to-br from-ucla-gold to-amber-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(253,221,85,0.3)]",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Digital Background */}
      <DigitalBackground variant="network" color="#22d3ee" className="opacity-30" />

      {/* Background Gradients/Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-cyan-400 font-semibold rounded-full text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Our Mission
          </span>

          <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight text-white mb-8 tracking-wide drop-shadow-sm">
            Connecting students with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-ucla-gold drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              Start-Up Nation
            </span>
          </h2>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-left md:text-center font-light">
            <p>
              The Israel Innovation & Entrepreneurship Hub (IHub) at Hillel at UCLA is a dynamic initiative designed to inspire and empower Jewish students by connecting them with the cutting-edge world of Israeli high-tech and start-up culture. As part of UCLA's vibrant Hillel community, IHub serves as a gateway to explore Israel's renowned innovation ecosystem through curated workshops, speaker events, networking opportunities, and direct connections with Israeli entrepreneurs and tech leaders.
            </p>
          </div>

          {/* Digital Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${feature.glow}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Icon Container */}
                <div className={`relative w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {/* Pulse Ring Animation */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping opacity-0 group-hover:opacity-75" style={{ animationDuration: '1.5s' }} />
                  <feature.icon className="w-7 h-7 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {feature.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors" />
                <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
