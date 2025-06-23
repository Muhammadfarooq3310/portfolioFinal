"use client"

import { useEffect, useRef } from "react"

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient mesh background
    const drawGradientMesh = () => {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 15, 30, 1)")
      gradient.addColorStop(0.4, "rgba(15, 23, 42, 1)")
      gradient.addColorStop(0.6, "rgba(17, 24, 39, 1)")
      gradient.addColorStop(1, "rgba(13, 18, 30, 1)")

      // Fill background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Add very subtle noise
        const noise = Math.random() * 5 - 2.5
        data[i] = Math.min(255, Math.max(0, data[i] + noise))
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise))
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise))
      }

      ctx.putImageData(imageData, 0, 0)

      // Draw grid pattern
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
      ctx.lineWidth = 1

      const gridSize = 40

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Draw animated floating orbs
    let orbs: { x: number; y: number; radius: number; color: string; vx: number; vy: number; alpha: number }[] = []

    const initOrbs = () => {
      orbs = []
      const numOrbs = 8

      for (let i = 0; i < numOrbs; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 150 + 50,
          color: [
            "rgba(14, 165, 233, 0.15)", // sky blue
            "rgba(79, 70, 229, 0.15)", // indigo
            "rgba(20, 184, 166, 0.15)", // teal
            "rgba(236, 72, 153, 0.15)", // pink
          ][Math.floor(Math.random() * 4)],
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random() * 0.2 + 0.1,
        })
      }
    }

    const drawOrbs = () => {
      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx
        orb.y += orb.vy

        // Bounce off edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius

        // Draw orb
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, orb.color.replace("0.15", "0.3"))
        gradient.addColorStop(1, orb.color.replace("0.15", "0"))

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGradientMesh()
      drawOrbs()
      requestAnimationFrame(animate)
    }

    initOrbs()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}
