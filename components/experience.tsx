"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Lci Systems",
    position: "Cross-Platform Mobile Application Developer",
    period: "2023-06 to Present",
    description: [
      "Lead Mobile App Developer, managing a team of 5 mobile developers and 2 designers.",
      "Built scalable mobile apps using .NET MAUI, Blazor, and Android.",
      "Delivered user-centric Android apps reaching 500K+ downloads.",
      "Led full-cycle app development with real-time API integration.",
      "Reduced crash rates by 30% via performance optimization.",
    ],
    teamDetails: {
      mobileAppDevelopers: 5,
      designers: 2,
      otherRoles: 3,
    },
    color: "blue",
  },
  {
    company: "Funzoft",
    position: "Android Application Developer",
    period: "2023-01 to 2023-06",
    description: [
      "Android Developer working closely with 3 developers and 1 designer.",
      "Delivered custom solutions integrating advanced ServiceNow modules.",
      "Focused on performance optimization, third-party integrations, and security best practices.",
    ],
    teamDetails: {
      mobileAppDevelopers: 3,
      designers: 1,
      otherRoles: 2,
    },
    color: "purple",
  },
  {
    company: "True Muslim App Studio",
    position: "Android Application Developer",
    period: "2021-12 to 2023-07",
    description: [
      "Mobile App Developer, collaborated with 4 developers and 1 designer.",
      "Built religious apps serving 1M+ users with 4.7+ average ratings.",
      "Integrated ML Kit, gesture control, and offline-first features.",
    ],
    teamDetails: {
      mobileAppDevelopers: 4,
      designers: 1,
      otherRoles: 2,
    },
    color: "teal",
  },
];

export default function Experience() {
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

      gsap.from(".timeline-line", {
        height: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 70%",
        },
      });

      gsap.from(".experience-card", {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".experience-timeline",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getGlowClass = (color: string) => {
    switch (color) {
      case "blue":
        return "text-glow-blue";
      case "teal":
        return "text-glow-teal";
      case "purple":
        return "text-glow-purple";
      case "pink":
        return "text-glow-pink";
      default:
        return "text-glow-blue";
    }
  };

  const getNeonBorderClass = (color: string) => {
    switch (color) {
      case "blue":
        return "neon-border-blue";
      case "teal":
        return "neon-border-teal";
      case "purple":
        return "neon-border-purple";
      case "pink":
        return "neon-border-pink";
      default:
        return "neon-border-blue";
    }
  };

  const getGradientClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-gradient-to-r from-blue-600 to-blue-800";
      case "teal":
        return "bg-gradient-to-r from-teal-600 to-teal-800";
      case "purple":
        return "bg-gradient-to-r from-purple-600 to-purple-800";
      case "pink":
        return "bg-gradient-to-r from-pink-600 to-pink-800";
      default:
        return "bg-gradient-to-r from-blue-600 to-blue-800";
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 relative z-10 bg-dark-gray"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Work <span className="gradient-text-purple">Experience</span>
        </h2>

        <div className="experience-timeline relative">
          {/* Timeline center line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 h-full rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card flex mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <Card
                className={`w-full md:w-[calc(50%-40px)] border-none shadow-lg relative card-vibrant ${getNeonBorderClass(
                  exp.color
                )}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-8 w-5 h-5 rounded-full ${getGradientClass(
                    exp.color
                  )} border-4 border-black left-0 md:left-auto md:right-0 transform translate-x-[-50%] md:translate-x-[50%] shadow-lg`}
                ></div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full ${getGradientClass(
                        exp.color
                      )} flex items-center justify-center mr-4 shadow-lg`}
                    >
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold text-white ${getGlowClass(
                          exp.color
                        )}`}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className={`gradient-text-${exp.color} font-medium text-lg`}
                      >
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6 text-blue-200">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Team and Role Section */}
                  <div className="mb-6">
                    <p className="text-blue-100 text-lg">Team Composition:</p>
                    <ul className="list-disc pl-5 text-blue-100">
                      <li>
                        Mobile App Developers:{" "}
                        {exp.teamDetails.mobileAppDevelopers}
                      </li>
                      <li>Designers: {exp.teamDetails.designers}</li>
                      <li>Other Roles: {exp.teamDetails.otherRoles}</li>
                    </ul>
                  </div>

                  {/* Description Section */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-blue-100">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${exp.color}-500 mt-2 mr-2`}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Throughout my career, I've focused on delivering high-quality mobile
            applications that solve real-world problems. My experience spans
            across various industries and technologies, allowing me to adapt
            quickly to new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
