import React, { useState } from 'react'
import BackgroundSlideshow from '../components/BackgroundSlideshow'

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Background slideshow sits fixed behind everything */}
      <BackgroundSlideshow />

      {/* Page content layered above background */}
      <header className="top-0 left-0 right-0 z-[90] pointer-events-auto">
        <div className="max-w-[1850px] mx-auto relative h-20">
          <img
            src="/logo.png"
            alt="Logo"
            className="absolute w-[74px] md:w-[97px] left-5"
          />

          <nav className="flex gap-[300px] relative items-center justify-center h-20">
            {/* centered nav hidden on small screens */}
            <div className="hidden sm:flex gap-[300px] items-center justify-center w-full">
              <a className="text-[18px] font-alata text-white">Services</a>
              <a className="text-[18px] font-alata text-white">Projects</a>
              <a className="text-[18px] font-alata text-white">About Us</a>
            </div>

            {/* mobile menu icon visible only on small screens */}
            <button
              aria-label="Open menu"
              className="sm:hidden absolute right-4 top-4 text-white bg-transparent border-none p-2"
              onClick={() => setMobileOpen((s) => !s)}
            >
              <span className="iconify" data-icon="ri:menu-3-line" data-inline="false" style={{ fontSize: '28px' }}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-white">
          <a href="#" className="text-2xl font-alata" onClick={() => setMobileOpen(false)}>
            Services
          </a>
          <a href="#" className="text-2xl font-alata" onClick={() => setMobileOpen(false)}>
            Projects
          </a>
          <a href="#" className="text-2xl font-alata" onClick={() => setMobileOpen(false)}>
            About Us
          </a>
          <button className="mt-4 px-6 py-2 bg-white/10 rounded" onClick={() => setMobileOpen(false)}>
            Close
          </button>
        </div>
      )}

      {/* Main content placed visually over the background */}
      <main className="relative z-20">
        <div className="absolute left-0 right-0 top-[410px] md:top-[520px] z-[95] pointer-events-auto">
          {/* Row 1: left icon+year (flush left) and services (flush right) */}
          <div className="relative w-full">
            {/* left flush */}
            <div className="relative justify-center -left-32 md:-left-[700px] top-24 md:top-0 text-center flex items-center gap-3">
              <img src="/company%20icon.png" alt="Company" className="w-[18px] md:w-[34px] h-auto block" />
              <h3 className="text-[17px] md:text-[32px] leading-none font-big-shoulders text-white">2024 - 2025</h3>
            </div>

            {/* right flush */}
            <div className="absolute right-5 md:right-20 top-0 md:w-[250px] w-[180px] font-alata text-right text-white text-[10px] md:text-[18px] leading-[1.4]">
              <h1 className="glass text-white">Brand Identity Design</h1>
              <h1 className="glass text-white">UI/UX, Web, App Developments</h1>
              <h1 className="glass text-white">Ads Production</h1>
              <h1 className="glass text-white">Ongoing Support</h1>
            </div>
          </div>

          {/* Row 2: Pixel Junkie (flush left), paragraph, Creative Studio (flush right) */}
          <div className="relative w-full mt-28 md:mt-10">
            {/* Pixel Junkie flush left */}
            <div className="relative left-0 md:-left-32 top-0 text-center justify-center">
              <h2 className="leading-none font-dela text-[52px] md:text-[200px] text-white glass-text-shadow">Pixel Junkie</h2>
            </div>

            {/* Creative Studio flush right */}
            <div className="relative flex flex-col md:flex-row items-center justify-center text-white gap-6 px-4 py-0 md:py-8">
              {/* h2 first on mobile, second on desktop */}
              <h2 className="order-1 md:order-2 font-dela whitespace-nowrap text-[38px] md:text-[150px] max-w-[90vw] md:max-w-none leading-none glass-text-shadow">
                Creative Studio
              </h2>
              {/* h1 second on mobile, first on desktop */}
              <h1 className="order-2 md:order-1 md:w-[290px] glass text-[12px] md:text-[18px] font-alata text-white">
                We create digital designs that help brands move faster and convert better. Your business deserves more than just a website. It needs results.
              </h1>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
