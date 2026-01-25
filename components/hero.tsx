"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import FluidBackground from "./fluid-background";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6">
            Mobile App Developer
            <span className="block gradient-text mt-2 text-glow">
              Building Exceptional Experiences
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-8">
            With over 4 years of experience crafting high-performance,
            cross-platform applications using .NET MAUI, Blazor, Java, Kotlin,
            and React.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="btn-gradient group">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <a href="/Umar Farooq Android 4.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border border-teal-400/30 text-teal-300 hover:bg-teal-900/20 hover:text-teal-200"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-teal-300/50 flex justify-center">
          <div className="w-1 h-2 bg-teal-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
