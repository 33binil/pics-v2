import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

export default function App() {
  const [showAbout, setShowAbout] = useState(false)
  const [showHomeElements, setShowHomeElements] = useState(true)
  const [showServices, setShowServices] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Create smooth transitions between sections
      const homeHidePoint = documentHeight * 0.15
      const aboutShowPoint = documentHeight * 0.18
      const videoFullScreenPoint = documentHeight * 0.25 // When video box is fully expanded
      const servicesShowPoint = documentHeight * 0.65 // Only after video is fully expanded

      if (scrollY > aboutShowPoint) {
        setShowAbout(true)
      } else {
        setShowAbout(false)
      }

      if (scrollY > homeHidePoint) {
        setShowHomeElements(false)
      } else {
        setShowHomeElements(true)
      }

      // Services shows after video expansion point
      if (scrollY > servicesShowPoint) {
        setShowServices(true)
      } else {
        setShowServices(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Scrollable content area - increased height for scroll animations */}
      <div className="min-h-[500vh]">
        <Home showElements={showHomeElements} />
      </div>

        <About showAbout={showAbout} />


      <Services showServices={showServices} />
    </div>
  )
}
