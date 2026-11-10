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
        viewBox="0 0 54 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="shieldApexExact">
            <path d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z" />
          </clipPath>
          <linearGradient id="shieldBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#081426" />
            <stop offset="100%" stopColor="#0f233e" />
          </linearGradient>
          <linearGradient id="apexRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
        </defs>

        {/* Shield Base Outline */}
        <path
          d="M27 2L50 9V24C50 34.5 39 40.5 27 43.5C15 40.5 4 34.5 4 24V9L27 2Z"
          fill="url(#shieldBaseGrad)"
          stroke="#1e3a63"
          strokeWidth="1.8"
        />

        {/* British Shield Inset Heraldry & Apex Geometry */}
        <g clipPath="url(#shieldApexExact)">
          {/* Subtle Surveying Grid */}
          <line x1="4" y1="12" x2="50" y2="12" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="4" y1="22" x2="50" y2="22" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="4" y1="32" x2="50" y2="32" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="16" y1="4" x2="16" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="38" y1="4" x2="38" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* St George / British Cross Backdrop */}
          <rect x="24.5" y="0" width="5" height="45" fill="#ffffff" />
          <rect x="0" y="19" width="54" height="5" fill="#ffffff" />
          <rect x="25.5" y="0" width="3" height="45" fill="url(#apexRedGrad)" />
          <rect x="0" y="20" width="54" height="3" fill="url(#apexRedGrad)" />

          {/* Triangular Apex / Surveying Peak Prism */}
          <polygon points="27,6 44,28 36,28 27,16 18,28 10,28" fill="#ffffff" opacity="0.9" />
          <polygon points="27,9 41,27 34,27 27,18 20,27 13,27" fill="url(#apexRedGrad)" />

          {/* Gold Surveying Target Center */}
          <circle cx="27" cy="27" r="3" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />
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
          RICS NRM2 Takeoffs & Estimating
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
    { label: 'Why Apex', id: 'why-us' },
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
                <span className="star-icon">★</span> Serving UK Contractors Nationwide
              </span>
              <span className="topbar-divider">•</span>
              <span className="topbar-item">
                London WC2N
              </span>
            </div>

            <div className="topbar-right">
              <a href="tel:+442079460192" className="topbar-link phone-link">
                <span>📞</span> +44 (0) 20 7946 0192
              </a>
              <span className="topbar-divider">•</span>
              <a href="mailto:quotes@apextakeoff.co.uk" className="topbar-link">
                <span>✉️</span> quotes@apextakeoff.co.uk
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
                <span>Request BOQ Quote</span>
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
          Request BOQ Quote →
        </button>
      </div>
    </header>
  )
}

