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
                  Why Apex
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
            <h4 className="footer-col-title">UK Contact</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>8 Duncannon Street, London, WC2N 4JF, UK</div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">📞</span>
              <div>
                <a href="tel:+442079460192" style={{ color: '#e2e8f0' }}>
                  +44 (0) 20 7946 0192
                </a>
              </div>
            </div>
            <div className="footer-contact-row">
              <span className="icon">✉️</span>
              <div>
                <a href="mailto:quotes@apextakeoff.co.uk" style={{ color: '#e2e8f0' }}>
                  quotes@apextakeoff.co.uk
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
            <div>© {new Date().getFullYear()} Apex Takeoff UK. All rights reserved. Registered in England & Wales.</div>
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

