"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export const runtime = "nodejs";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const socialProfiles = [
    {
      name: "github",
      icon: <Github className="w-5 h-5 text-white" />,
      url: "https://github.com/yourusername",
    },
    {
      name: "linkedin",
      icon: <Linkedin className="w-5 h-5 text-white" />,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      name: "twitter",
      icon: <Twitter className="w-5 h-5 text-white" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "instagram",
      icon: <Instagram className="w-5 h-5 text-white" />,
      url: "https://instagram.com/yourusername",
    },
  ];

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

      gsap.from(".contact-info", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
        },
      });

      gsap.from(".contact-form", {
        opacity: 0,
        x: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
        },
      });

      gsap.from(".form-element", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setStatusMessage(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to send email.");
      }

      setStatusMessage(resData.message);
      form.reset();
    } catch (err: any) {
      console.error("❌ Email error:", err.message || err);
      setStatusMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" ref={sectionRef} className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Get In <span className="gradient-text-teal">Touch</span>
        </h2>

        <div className="contact-container grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="contact-info border-none shadow-lg card-vibrant neon-border-teal">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-glow-teal">
                Contact Information
              </h3>
              <p className="text-blue-100 mb-8">
                Feel free to reach out for app development inquiries,
                collaboration, or just to say hello!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="icon-wrapper mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-1">
                      Email
                    </h4>
                    <p className="text-white">mumarfarooq.abc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="icon-wrapper mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-1">
                      Phone
                    </h4>
                    <p className="text-white">+92 311 8562572</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="icon-wrapper mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-300 mb-1">
                      Location
                    </h4>
                    <p className="text-white">Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-10">
                <h4 className="text-sm font-medium text-blue-300 mb-3">
                  Social Profiles
                </h4>
                <div className="flex space-x-4">
                  {socialProfiles.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-700 to-teal-900 flex items-center justify-center hover:from-teal-600 hover:to-teal-800 transition-colors shadow-lg"
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="contact-form border-none shadow-lg card-vibrant neon-border-blue">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white text-glow-blue">
                Send Me a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-element">
                    <label
                      htmlFor="name"
                      className="block text-sm text-blue-300 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-black/30 text-white"
                      required
                    />
                  </div>

                  <div className="form-element">
                    <label
                      htmlFor="email"
                      className="block text-sm text-blue-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-black/30 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="form-element">
                  <label
                    htmlFor="subject"
                    className="block text-sm text-blue-300 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="bg-black/30 text-white"
                    required
                  />
                </div>

                <div className="form-element">
                  <label
                    htmlFor="message"
                    className="block text-sm text-blue-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-black/30 text-white resize-none"
                    required
                  />
                </div>

                <div className="form-element">
                  <Button
                    type="submit"
                    className="w-full btn-gradient group"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>

              {statusMessage && (
                <div
                  className={`mt-4 text-center text-sm ${
                    statusMessage.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
