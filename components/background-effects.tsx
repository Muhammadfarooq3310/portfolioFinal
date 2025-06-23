"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffects() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create stars
    if (starsRef.current) {
      const starsContainer = starsRef.current
      starsContainer.innerHTML = ""

      const starCount = 150
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.className = "star"

        // Random size between 1-3px
        const size = Math.random() * 2 + 1
        star.style.width = `${size}px`
        star.style.height = `${size}px`

        // Random position
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`

        // Random animation delay
        star.style.animationDelay = `${Math.random() * 6}s`

        starsContainer.appendChild(star)
      }
    }
  }, [])

  return (
    <>
      {/* Aurora effect */}
      <div className="aurora-container">
        <div className="aurora"></div>
      </div>

      {/* Stars */}
      <div className="stars" ref={starsRef}></div>

      {/* Animated orbs */}
      <div className="orb orb-1" style={{ top: "10%", left: "15%" }}></div>
      <div className="orb orb-2" style={{ top: "60%", right: "10%" }}></div>
      <div className="orb orb-3" style={{ top: "30%", right: "25%" }}></div>

      {/* Grid pattern */}
      <div className="grid-pattern"></div>
    </>
  )
}
