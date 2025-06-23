"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";

const skillCategories = [
  {
    title: "Core Development",
    color: "teal",
    skills: [
      { name: ".NET MAUI", level: 90 },
      { name: "Blazor", level: 85 },
      { name: "Java", level: 90 },
      { name: "Kotlin", level: 85 },
      { name: "Android Studio", level: 95 },
      { name: "React", level: 80 },
      { name: "React Native", level: 85 },
    ],
  },
  {
    title: "Advanced Configuration",
    color: "sky",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Cross-Platform Optimization", level: 90 },
      { name: "Performance Tuning", level: 85 },
      { name: "State Management (MVVM)", level: 90 },
      { name: "Scalability", level: 85 },
    ],
  },
  {
    title: "Cloud & Backend",
    color: "indigo",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "Azure Mobile Services", level: 80 },
      { name: "AWS Amplify", level: 75 },
      { name: "Microservices", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "DevOps & Security",
    color: "emerald",
    skills: [
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Automated Testing", level: 80 },
      { name: "OAuth/JWT", level: 85 },
      { name: "Data Encryption", level: 80 },
      { name: "Git", level: 90 },
    ],
  },
];

const tools = [
  "Android Studio",
  "Visual Studio",
  "VS Code",
  "Git",
  "Azure",
  "Xcode",
  "Firebase",
  "GitHub Actions",
  "Azure DevOps",
  "REST APIs",
  "JavaScript",
  "Clean Architecture",
  "MVVM",
  "OAuth",
  "JWT",
  "CI/CD",
];

const getProgressColor = (color: string) => {
  switch (color) {
    case "teal":
      return "bg-gradient-to-r from-teal-400 to-teal-600";
    case "sky":
      return "bg-gradient-to-r from-sky-400 to-sky-600";
    case "indigo":
      return "bg-gradient-to-r from-indigo-400 to-indigo-600";
    case "emerald":
      return "bg-gradient-to-r from-emerald-400 to-emerald-600";
    default:
      return "bg-gradient-to-r from-teal-400 to-teal-600";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="gradient-text text-glow">Skills</span>
        </h2>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="skill-category border-none shadow-lg card-glass"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-white border-b pb-2 border-gray-700 text-glow-subtle">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressColor(
                            category.color
                          )} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies Section (No Animation) */}
        <div className="mt-16">
          <Card className="border-none shadow-xl bg-black/30 backdrop-blur-md rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 h-1.5"></div>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-8 text-white text-glow-blue flex items-center">
                <Code className="h-6 w-6 mr-2 text-blue-400" />
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => {
                  const colorClasses = [
                    "from-blue-500 to-blue-700 text-glow-blue",
                    "from-purple-500 to-purple-700 text-glow-purple",
                    "from-teal-500 to-teal-700 text-glow-teal",
                    "from-pink-500 to-pink-700 text-glow-pink",
                  ];
                  const colorClass = colorClasses[index % colorClasses.length];
                  const [fromColor, toColor, textGlow] = colorClass.split(" ");

                  return (
                    <div
                      key={index}
                      className={`px-5 py-3 bg-black/50 backdrop-blur-md rounded-full text-sm font-medium text-white shadow-lg border border-opacity-30 hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1`}
                      style={{
                        borderImageSource: `linear-gradient(to right, ${
                          fromColor.includes("blue")
                            ? "#3b82f6, #1d4ed8"
                            : fromColor.includes("purple")
                            ? "#8b5cf6, #6d28d9"
                            : fromColor.includes("teal")
                            ? "#14b8a6, #0f766e"
                            : "#ec4899, #be185d"
                        })`,
                        borderImageSlice: 1,
                        boxShadow: `0 4px 20px ${
                          fromColor.includes("blue")
                            ? "rgba(59, 130, 246, 0.3)"
                            : fromColor.includes("purple")
                            ? "rgba(139, 92, 246, 0.3)"
                            : fromColor.includes("teal")
                            ? "rgba(20, 184, 166, 0.3)"
                            : "rgba(236, 72, 153, 0.3)"
                        }`,
                      }}
                    >
                      <span className={textGlow}>{tool}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
