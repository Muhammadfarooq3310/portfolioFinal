"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Sample project data (Updated using XYZ Formula)
const projectsData = [
  /* {
    id: "ec-app",
    title: "EC App",
    description: [
      "Built a US-based app enabling custodians to log daily cleaning tasks.",
      "Utilized .NET MAUI and Firebase to integrate real-time salary calculations.",
      "Achieved a seamless workflow with real-time updates, improving operational efficiency.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Android", ".NET MAUI", "Firebase", "Real-time Updates"],
  },
{
    id: "fmo-ticketing",
    title: "FMO Ticketing App",
    description: [
      "Developed a task-tracking app for Field Maintenance staff.",
      "Used Kotlin and Android for seamless task logging and management.",
      "Improved service operation efficiency, reducing task processing time by 20%.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Kotlin", "Android", "Task Management", "Field Service"],
  },
  {
    id: "crea",
    title: "CREA",
    description: [
      "Created a driver app for route and salary tracking.",
      "Implemented GPS tracking and route optimization using Android and Java.",
      "Boosted company efficiency by up to 70%, reducing operational costs.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Java", "Android", "GPS Tracking", "Route Optimization"],
  },
  {
    id: "enterprise-insights",
    title: "Enterprise Insights Agent",
    description: [
      "Enhanced an enterprise monitoring app with additional features.",
      "Focused on battery health analytics and optimization for Google devices.",
      "Increased app performance and reduced battery usage by 15%.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Android", "Monitoring", "Battery Analytics", "Enterprise"],
  },
  {
    id: "quran-app",
    title: "Quran App",
    description: [
      "Designed a Quran reader with smooth page-curl effects.",
      "Used Kotlin and ML Kit for offline access and seamless translation features.",
      "Improved user engagement with 100K+ downloads and enhanced spiritual experience.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Kotlin", "Android", "ML Kit", "Offline-first"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.quranapp",
  }, 
  {
    id: "postal-go",
    title: "Postal Go",
    description: [
      "Built a package management solution for enhanced delivery workflows.",
      "Integrated real-time tracking, label printing, and price calculations.",
      "Streamlined shipping processes, reducing delivery time by 25%.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Android", "Package Management", "Tracking", "Shipping"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.postalgo",
  },*/
  {
    id: "digital-clocks",
    title: "Digital Clocks",
    description: [
      "Created a customizable digital/analog clock app for personal preferences.",
      "Enabled background size and color settings for complete user control.",
      "Increased personalization, attracting over 50K downloads.",
    ],
    image: "/dc.webp?height=400&width=600",
    tags: ["Android", "Clock", "Customizable", "User Preferences"],
  },
  {
    id: "ramadan-calendar",
    title: "Ramadan Calendar",
    description: [
      "Built a Ramadan calendar app to enrich the spiritual experience.",
      "Included features like prayer times, Duas, and Quran access.",
      "Gained 1M+ users with high engagement and Eid greetings.",
    ],
    image: "/rc.webp?height=400&width=600",
    tags: ["Android", "Ramadan", "Prayer Times", "Azans", "Quran"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.example.ramadancalendar",
  },
  {
    id: "translation-app",
    title: "Translation App",
    description: [
      "Developed an offline translation app using ML Kit for multilingual support.",
      "Integrated image-to-text translations and saved history for future use.",
      "Empowered users to translate on-the-go with 100K+ active users.",
    ],
    image: "/lc.webp?height=400&width=600",
    tags: ["Kotlin", "Android", "ML Kit", "Offline Translation"],
  } /*
  {
    id: "fyp-parking-management",
    title: "FYP, Parking Management System",
    description: [
      "Built a smart parking system with a user-friendly app for reservations.",
      "Developed an efficient admin management feature for seamless operations.",
      "Simplified parking with 30% faster reservations and improved user satisfaction.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Android", "Parking", "Management", "User Interface"],
  },*/,
];

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation setup for scrolling effect on the project cards
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  // Function to split description into bullet points
  const splitDescription = (description) => {
    return description.map((point, index) => (
      <li key={index} className="text-gray-300">
        {point}
      </li>
    ));
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="gradient-text text-glow">Projects</span>
        </h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card border-none shadow-xl overflow-hidden group card-glass"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-sky-500/10 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-end p-4 z-20">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="default"
                      className="btn-gradient"
                      asChild
                    >
                      <Link href={`/project/${project.id}`}>
                        <ExternalLink className="h-4 w-4 mr-1" /> View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 bg-gray-900/70 backdrop-blur-md">
                <h3 className="text-xl font-semibold mb-2 text-white text-glow-subtle">
                  {project.title}
                </h3>

                {/* Displaying description as bullet points */}
                <ul className="list-disc pl-5 text-gray-300">
                  {splitDescription(project.description)}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-900/50 text-teal-300 border-teal-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
