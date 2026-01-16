"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface DigitalBackgroundProps {
  variant?: "network" | "orbs";
  className?: string;
  color?: string;
}

export function DigitalBackground({ 
  variant = "network", 
  className = "",
  color = "#3185c0" 
}: DigitalBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // container loaded
  }, []);

  const getOptions = () => {
    const baseOptions = {
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
        },
      },
    };

    if (variant === "orbs") {
      return {
        ...baseOptions,
        particles: {
          color: { value: color },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 40,
          },
          opacity: {
            value: 0.5,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 4 },
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
          },
          links: { enable: false }, // No links for orbs
        },
      };
    }

    // Default "network"
    return {
      ...baseOptions,
      particles: {
        color: { value: color },
        links: {
          color: color,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1, // Slightly faster for network
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
    };
  };

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
      <Particles
        id={`tsparticles-${variant}`} // Unique ID per instance/variant
        init={particlesInit}
        loaded={particlesLoaded}
        className="w-full h-full"
        options={getOptions() as any}
      />
    </div>
  );
}
