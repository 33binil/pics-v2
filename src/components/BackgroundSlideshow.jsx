import React, { useEffect, useRef, useState } from 'react'
import './BackgroundSlideshow.css'

// Contract:
// - Inputs: none (uses images in /public)
// - Outputs: a fullscreen background slideshow element
// - Error modes: none, falls back silently if images missing

const DESKTOP_IMAGES = [
  '/home1.png',
  '/home2.jpg',
  '/home3.jpg',
  '/home4.jpg',
  '/home5.jpg',
]

const MOBILE_IMAGES = [
  '/home11.png',
  '/home22.jpg',
  '/hom33.jpg',
  '/home44.jpg',
  '/home55.jpg',
]

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0) // current static background index
  const [entering, setEntering] = useState(null) // index of image currently animating in
  const timerRef = useRef(null)
  const prefersMobile = useRef(window.matchMedia('(max-width: 767px)'))
  const imagesRef = useRef(prefersMobile.current.matches ? MOBILE_IMAGES : DESKTOP_IMAGES)

  // update image set on resize
  useEffect(() => {
    const mq = prefersMobile.current
    const onChange = () => {
      imagesRef.current = mq.matches ? MOBILE_IMAGES : DESKTOP_IMAGES
    }
    mq.addEventListener?.('change', onChange)
    // fallback for older browsers
    mq.addListener?.(onChange)
    return () => {
      mq.removeEventListener?.('change', onChange)
      mq.removeListener?.(onChange)
    }
  }, [])

  useEffect(() => {
    // durations (ms)
    const ENTER_DURATION = 500
    const STAY_DURATION = 3000

    let enterTimer = null
    let settleTimer = null

    const next = (index + 1) % imagesRef.current.length

    // Start the entering animation after the current image has stayed in place for STAY_DURATION
    enterTimer = setTimeout(() => {
      setEntering(next)
      // After enter animation finishes, make it the base and clear entering
      settleTimer = setTimeout(() => {
        setIndex(next)
        setEntering(null)
      }, ENTER_DURATION)
    }, STAY_DURATION)

    // store a reference so cleanup can clear both
    timerRef.current = { enterTimer, settleTimer }

    return () => {
      if (enterTimer) clearTimeout(enterTimer)
      if (settleTimer) clearTimeout(settleTimer)
    }
  }, [index])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const imgs = imagesRef.current

  return (
    <div className="bg-slideshow" aria-hidden>
      {/* static background image */}
      <div
        className="bg-image base"
        style={{
          backgroundImage: `url(${imgs[index]})`,
          zIndex: 1,
        }}
      />

      {/* entering image sits above and animates from -120vh to 0 */}
      {entering != null && (
        <div
          className="bg-image entering"
          style={{
            backgroundImage: `url(${imgs[entering]})`,
            zIndex: 2,
          }}
          onAnimationEnd={() => {
            // keep it until the timer updates the base
          }}
        />
      )}
    </div>
  )
}
