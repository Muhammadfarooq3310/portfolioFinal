import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import FluidBackground from "@/components/fluid-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mobile App Developer Portfolio",
  description:
    "Professional portfolio of a Mobile App Developer with expertise in .NET MAUI, Blazor, Java, Kotlin, and React",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark-theme`}>
        <FluidBackground />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
