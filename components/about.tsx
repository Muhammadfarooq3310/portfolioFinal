"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Globe, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-content", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".feature-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".feature-cards",
          start: "top 80%",
        },
      });

      gsap.from(".tool-item", {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".tools-container",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-28 sm:pt-32 pb-20 relative z-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          About <span className="gradient-text-purple">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Area */}
          <div className="about-content">
            <h3 className="text-2xl font-semibold mb-4 text-blue-200 text-glow-blue">
              Mobile App Developer with a passion for creating impactful
              solutions
            </h3>

            <p className="text-blue-100 mb-6">
              I'm a Mobile App Developer with over 4 years of experience
              building high-performance, cross-platform applications. I
              specialize in delivering user-centered solutions for clients,
              especially in the US market, and have hands-on experience with
              React for web development.
            </p>

            <p className="text-blue-100 mb-6">
              I'm passionate about scalable architecture, clean code, and
              building real-world applications that make an impact. My expertise
              spans across .NET MAUI, Blazor, Java, Kotlin, and Android Studio,
              allowing me to create versatile solutions for diverse client
              needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-100">
              {[
                { text: "4+ Years Experience", color: "bg-purple-500" },
                { text: "Cross-Platform Apps", color: "bg-blue-500" },
                { text: "Clean Architecture", color: "bg-teal-500" },
                { text: "Scalable Solutions", color: "bg-pink-500" },
                { text: "Performance Optimization", color: "bg-yellow-500" },
                { text: "Real-time Integrations", color: "bg-green-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${item.color}`}
                  ></div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Area */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl neon-border-purple">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer Profile"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              4+ Years
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="feature-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <Card className="feature-card border-none shadow-lg card-vibrant card-vibrant-teal">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-4 shadow-lg">
                <Smartphone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-glow-teal">
                Mobile Development
              </h3>
              <p className="text-blue-100">
                Expert in .NET MAUI, Java, Kotlin, and Android Studio
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-none shadow-lg card-vibrant card-vibrant-blue">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-glow-blue">
                Web Development
              </h3>
              <p className="text-blue-100">
                Skilled in React, Blazor, and responsive design
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-none shadow-lg card-vibrant card-vibrant-purple">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                <Code className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-glow-purple">
                Clean Architecture
              </h3>
              <p className="text-blue-100">
                Focus on maintainable, scalable code structures
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-none shadow-lg card-vibrant card-vibrant-pink">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center mb-4 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-glow-pink">
                Performance Tuning
              </h3>
              <p className="text-blue-100">
                Optimization for smooth, responsive applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
