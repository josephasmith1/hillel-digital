"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DonateModal } from "./DonateModal";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight">
            <span
              className={cn(
                "transition-colors",
                scrolled ? "text-tech-blue" : "text-white"
              )}
            >
              iHub
            </span>
            <span
              className={cn(
                "font-normal ml-2",
                scrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              at UCLA Hillel
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Student Groups", href: "#student-groups" },
              { name: "Startups", href: "#startups" },
              { name: "Programs", href: "#programs" },
              { name: "Investments", href: "#investments" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-ucla-gold",
                  scrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsDonateOpen(true)}
            className={cn(
              "hidden md:block px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 cursor-pointer",
              scrolled
                ? "bg-tech-blue text-white hover:bg-tech-blue/90"
                : "bg-white text-tech-blue hover:bg-gray-100"
            )}
          >
            Donate
          </button>
        </div>
      </nav>
      
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </>
  );
}


