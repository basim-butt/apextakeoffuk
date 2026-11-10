import React from 'react'
import { BrandLogo } from './Navbar'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 85
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div>
            <div
              className="logo-clickable"
              onClick={() => scrollTo('hero')}
              role="button"
              tabIndex={0}
            >
              <BrandLogo />
            </div>
            <p className="footer-about-text">
              Apex Takeoff UK is an independent British quantity surveying and commercial cost consultancy. We support Main Contractors, Subcontractors, and Property Developers across England, Scotland, and Wales with verifiable, RICS NRM2 compliant Bills of Quantities and BCIS regional cost models.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  Work Packages
                </a>
              </li>
              <li>
                <a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('standards') }}>
                  NRM2 Standards
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo('process') }}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => { e.preventDefault(); scrollTo('why-us') }}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#quote" onClick={(e) => { e.preventDefault(); scrollTo('quote') }}>
                  Request Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Core Packages</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  Groundworks & Civils
                </a>
              </li>
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  RC Frame & Steelwork
                </a>
              </li>
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  Facades & Envelope
                </a>
              </li>
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  Architectural Fit-Out
                </a>
              </li>
              <li>
                <a href="#trades" onClick={(e) => { e.preventDefault(); scrollTo('trades') }}>
                  M&E Building Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>
                100 Oxford Street, London<br />
                Greater London, W1D 1LL<br />
                United Kingdom
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">✉️</span>
              <div>
                <a href="mailto:info@apextakeoff.uk" style={{ color: '#e2e8f0' }}>
                  info@apextakeoff.uk
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">🕒</span>
              <div>Monday – Friday: 8:00 AM – 6:00 PM GMT</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>© {new Date().getFullYear()} Apex Takeoff UK. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <a href="#terms" onClick={(e) => e.preventDefault()}>
                Terms & RICS Measurement Standards
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

