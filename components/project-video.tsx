"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface ProjectVideoProps {
  videoUrl: string
  title: string
}

export default function ProjectVideo({ videoUrl, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setVideoData = () => {
      setDuration(video.duration)
    }

    const updateTime = () => {
      setCurrentTime(video.currentTime)
    }

    video.addEventListener("loadedmetadata", setVideoData)
    video.addEventListener("timeupdate", updateTime)

    return () => {
      video.removeEventListener("loadedmetadata", setVideoData)
      video.removeEventListener("timeupdate", updateTime)
    }
  }, [videoUrl])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    const newVolume = value[0]
    video.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleTimeChange = (value: number[]) => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const skipForward = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.min(video.duration, video.currentTime + 10)
  }

  const skipBackward = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.max(0, video.currentTime - 10)
  }

  const toggleFullscreen = () => {
    const videoContainer = document.querySelector(".video-container")
    if (!videoContainer) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoContainer.requestFullscreen()
    }
  }

  return (
    <div className="video-container relative rounded-lg overflow-hidden bg-black shadow-lg">
      <div className="relative" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full aspect-video"
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Video Title */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white">
          <h3 className="font-medium">{title}</h3>
        </div>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 text-white"
              onClick={togglePlay}
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
        )}

        {/* Video Controls */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {/* Progress Bar */}
            <Slider
              value={[currentTime]}
              min={0}
              max={duration || 100}
              step={0.1}
              onValueChange={handleTimeChange}
              className="cursor-pointer"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>

                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={skipBackward}>
                  <SkipBack className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={skipForward}>
                  <SkipForward className="h-5 w-5" />
                </Button>

                <span className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={1}
                  step={0.1}
                  onValueChange={handleVolumeChange}
                  className="w-24 cursor-pointer"
                />

                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
