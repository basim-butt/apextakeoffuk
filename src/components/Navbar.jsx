import React, { useState } from 'react'

/**
 * Custom British Shield & Apex Surveyor Emblem
 * Distinctive, authoritative, and tailored for Apex Takeoff UK
 */
export function BrandLogo() {
  return (
    <div className="custom-brand-logo">
      <svg
        className="brand-emblem-svg"
        viewBox="0 0 54 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="shieldApexExact">
            <path d="M27 2L50 9V26C50 37 39 43.5 27 46.5C15 43.5 4 26 4 26V9L27 2Z" />
          </clipPath>
          <linearGradient id="apexRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Shield Base Outline */}
        <path
          d="M27 2L50 9V26C50 37 39 43.5 27 46.5C15 43.5 4 26 4 26V9L27 2Z"
          fill="#012169"
          stroke="#1e3a63"
          strokeWidth="2"
        />

        {/* Pure UK Flag Shield Fill */}
        <g clipPath="url(#shieldApexExact)">
          <rect width="54" height="48" fill="#012169" />
          <line x1="0" y1="0" x2="54" y2="48" stroke="#ffffff" strokeWidth="7" />
          <line x1="54" y1="0" x2="0" y2="48" stroke="#ffffff" strokeWidth="7" />
          <line x1="0" y1="0" x2="54" y2="48" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="54" y1="0" x2="0" y2="48" stroke="#dc2626" strokeWidth="2.5" />
          <rect x="22.5" y="0" width="9" height="48" fill="#ffffff" />
          <rect x="0" y="19" width="54" height="9" fill="#ffffff" />
          <rect x="24.5" y="0" width="5" height="48" fill="url(#apexRedGrad)" />
          <rect x="0" y="21" width="54" height="5" fill="url(#apexRedGrad)" />
        </g>
      </svg>

      <div className="brand-text-block">
        <div className="brand-primary-row">
          <span className="brand-apex">APEX</span>
          <span className="brand-sep">·</span>
          <span className="brand-takeoff">TAKEOFF</span>
          <span className="brand-uk-badge">UK</span>
        </div>
        <div className="brand-tagline-text">
          RICS NRM2 Takeoffs & Quantity Surveying
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Services')

  const scrollTo = (id, label) => {
    setActiveItem(label)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Work Packages', id: 'trades' },
    { label: 'NRM2 Standards', id: 'standards' },
    { label: 'How It Works', id: 'process' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'quote' },
  ]

  return (
    <header className="header-wrapper">
      {/* Top Notification Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-left">
              <span className="topbar-item highlight-item">
                <span className="star-icon">★</span>
                <span className="topbar-text-desktop">Serving UK Contractors Nationwide</span>
                <span className="topbar-text-mobile">UK Nationwide</span>
              </span>
              <span className="topbar-divider topbar-hide-sm">•</span>
              <span className="topbar-item topbar-hide-sm">
                100 Oxford St, London W1D
              </span>
            </div>

            <div className="topbar-right">
              <a href="mailto:info@apextakeoff.uk" className="topbar-link">
                <span>✉️</span> info@apextakeoff.uk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-inner">
            {/* Logo */}
            <div
              className="logo-clickable"
              onClick={() => scrollTo('hero', 'Overview')}
              role="button"
              tabIndex={0}
            >
              <BrandLogo />
            </div>

            {/* Essential Navigation Links */}
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeItem === item.label ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(item.id, item.label)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <div className="nav-actions">
              <button
                className="btn btn-red btn-header-cta"
                onClick={() => scrollTo('quote', 'Contact')}
              >
                <span>Request a Quote</span>
                <span className="cta-arrow">→</span>
              </button>

              <button
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Accent Border */}
      <div className="header-stripes-modern" />

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.id}`}
                className={activeItem === item.label ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(item.id, item.label)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="btn btn-red"
          style={{ width: '100%', marginTop: '14px' }}
          onClick={() => scrollTo('quote', 'Contact')}
        >
          Request a Quote →
        </button>
      </div>
    </header>
  )
}

