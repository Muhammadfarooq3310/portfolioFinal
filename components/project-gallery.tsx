"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  images: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") setOpen(false)
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group shadow-lg border border-gray-800"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700/50 via-teal-800/40 to-gray-900/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-12 h-12 rounded-full bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-400"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-50 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
