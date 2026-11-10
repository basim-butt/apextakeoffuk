import React, { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const videoRef = useRef(null)
  const dynamicWords = ['You Win.', 'You Scale.', 'You Profit.']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [dynamicWords.length])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-video-section" id="hero">
      {/* Background Video */}
      <div className="video-background-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="hero-grid-pattern" />
      </div>

      {/* Foreground Content */}
      <div className="container hero-content-container">
        <div className="hero-content">
          {/* Trust Badge */}
          <div className="hero-badge">
            <span className="flag-emoji">🇬🇧</span> RICS NRM2 & SMM7 Standard Measurement
          </div>

          {/* High-Impact Slogan */}
          <h1 className="hero-tagline">
            Bid Sharper. <span className="hero-tagline-white">Build Smarter.</span>
          </h1>

          <div className="hero-subtagline">
            We Measure. You Build. <span className="dynamic-word">{dynamicWords[wordIndex]}</span>
          </div>

          <p className="hero-description">
            The numbers behind the UK's winning contractors. Senior chartered quantity surveyors
            delivering comprehensive RICS NRM2 Bills of Quantities and BCIS regional cost models in 24 to 48 hours.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-red btn-lg" onClick={() => scrollTo('quote')}>
              Request a Free BOQ Quote →
            </button>
            <button className="btn btn-outline-white btn-lg" onClick={() => scrollTo('trades')}>
              Explore UK Work Packages
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="hero-stat-number">24–48<span>hr</span></div>
              <div className="hero-stat-label">Fastest Turnaround Guaranteed</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">99.2<span>%</span></div>
              <div className="hero-stat-label">Verified Tender Accuracy Rate</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">NRM2<span>/SMM7</span></div>
              <div className="hero-stat-label">RICS & CIOB Aligned Standards</div>
            </div>

            <div className="hero-stat-card">
              <div className="hero-stat-number">100<span>%</span></div>
              <div className="hero-stat-label">Senior Quantity Surveyors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

