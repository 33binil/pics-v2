import React, { useState, useEffect } from 'react'

const About = ({ showAbout = false }) => {
    const [blackBoxExpanded, setBlackBoxExpanded] = useState(false)
    const [aboutPosition, setAboutPosition] = useState(0) // 0 = normal, 1 = hidden at bottom

    useEffect(() => {
        if (!showAbout) {
            setBlackBoxExpanded(false)
            setAboutPosition(0)
            return
        }

        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            
            // Calculate scroll progress after About section appears
            const aboutStartScroll = documentHeight * 0.38
            const scrollAfterAbout = scrollY - aboutStartScroll
            const maxScrollAfterAbout = documentHeight * 0.42 // Additional scroll range for animations
            
            if (scrollAfterAbout > windowHeight * 0.5) {
                const progress = Math.min((scrollAfterAbout - windowHeight * 0.5) / (maxScrollAfterAbout - windowHeight * 0.5), 1)
                
                // First 60% of additional scroll: expand black box
                if (progress <= 0.6) {
                    setBlackBoxExpanded(progress > 0.1)
                    setAboutPosition(0)
                } 
                // Keep black box expanded, don't hide About section
                else {
                    setBlackBoxExpanded(true)
                    setAboutPosition(0) // Keep About visible, don't move down
                }
            } else {
                setBlackBoxExpanded(false)
                setAboutPosition(0)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [showAbout])

    return (
        <div className={`fixed inset-0 bg-white text-black z-20 transition-all duration-1000 ease-out ${
            showAbout ? 'transform translate-y-0' : 'transform translate-y-screen'
        }`} 
        style={{
            transform: `translateY(${showAbout ? 0 : 100}%)`, // Always stay at 0 when visible
            transitionDelay: showAbout ? '0ms' : '0ms'
        }}>
            <div className="flex items-start justify-center h-screen pt-28">
                <div className="max-w-[1700px] mx-auto text-center">
                    <h1 className={`font-dela text-[26px] md:text-8xl mb-8 glass-text-shadow transition-all duration-1000 ${
                        showAbout ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[30px] scale-95'
                    }`}>
                        The Pixel Junkie Story – Built for Visionaries, By Visionaries.
                    </h1>
                    <div className={`glass text-[16px] md:text-xl font-alata leading-relaxed max-w-[950px] mx-auto transition-all duration-1000 delay-300 ${
                        showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                    }`}>
                        <p className="mb-6">
                            We are not just another agency—we are the driving force behind businesses that refuse to settle. Born from the fire of entrepreneurial ambition, we understand the grind, the hustle, and the breakthroughs it takes to build something that lasts. Our clients don't come to us for just another campaign—they come to dominate their industry.

                        </p>
                    </div>
                </div>
            </div>

            {/* Black Box - Desktop */}
            <div className="hidden md:block">
                <div 
                    className="fixed bg-black border border-white/20 shadow-2xl transition-all duration-1000 ease-out bottom-0"
                    style={{
                        left: '50%',
                        transform: `translateX(-50%) ${blackBoxExpanded ? 'scale(3.65)' : 'scale(1)'}`,
                        width: '520px',
                        height: '310px',
                        transformOrigin: 'bottom center'
                    }}
                >
                    {/* Video content inside the box */}
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <video 
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/Home1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* Black Box - Mobile */}
            <div className="md:hidden">
                <div 
                    className="fixed bg-black border border-white/20 shadow-2xl transition-all duration-1000 ease-out bottom-0"
                    style={{
                        left: '50%',
                        transform: `translateX(-50%) ${blackBoxExpanded ? 'scale(3.6)' : 'scale(1)'}`,
                        width: '400px',
                        height: '235px',
                        transformOrigin: 'bottom center'
                    }}
                >
                    {/* Video content inside the box */}
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <video 
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/Home1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
