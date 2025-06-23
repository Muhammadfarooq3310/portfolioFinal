"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUp, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  // Define social profiles with their icons and URLs
  const socialProfiles = [
    {
      name: "github",
      icon: <Github className="w-4 h-4 text-white" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "linkedin",
      icon: <Linkedin className="w-4 h-4 text-white" />,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "twitter",
      icon: <Twitter className="w-4 h-4 text-white" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "instagram",
      icon: <Instagram className="w-4 h-4 text-white" />,
      url: "https://instagram.com/yourusername",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl text-white">
              <span className="gradient-text-blue">Dev</span>Portfolio
            </Link>
            <p className="mt-4 text-blue-200 max-w-md">
              Mobile App Developer with over 4 years of experience building
              high-performance, cross-platform applications using .NET MAUI,
              Blazor, Java, Kotlin, and React.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-glow-blue">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-blue-200 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white text-glow-blue">
              Contact
            </h3>
            <ul className="space-y-2 text-blue-200">
              <li>mumarfarooq.abc@gmail.com</li>
              <li>+92 311 8562572</li>
              <li>Pakistan</li>
            </ul>

            <div className="mt-6 flex space-x-4">
              {socialProfiles.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-colors shadow-lg"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} MuhammadUmarFarooq. All rights
            reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="mt-4 md:mt-0 border-blue-700/50 hover:bg-blue-900/30 hover:text-blue-300 neon-border-blue"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
