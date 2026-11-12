import React from 'react'
import { Link } from 'react-router-dom'
import { BrandLogo } from './Navbar'

export default function Footer() {
  return (
    <footer className="main-footer" id="contact">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link
              to="/"
              className="logo-clickable"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              <BrandLogo />
            </Link>

            <p className="footer-about-text">
              Apex Takeoff UK is an independent British quantity surveying and commercial cost consultancy. We support Main Contractors, Subcontractors, and Property Developers across England, Scotland, and Wales with verifiable, RICS NRM2 compliant Bills of Quantities and BCIS regional cost models.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/services">Quantity Surveying Services</Link></li>
              <li><Link to="/trades">Work Packages Covered</Link></li>
              <li><Link to="/how-it-works">Tender Workflow</Link></li>
              <li><Link to="/why-us">Why Choose Apex</Link></li>
              <li><Link to="/takeoff-calculator">Takeoff & Cost Calculator</Link></li>
              <li><Link to="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Core NRM2 Packages */}
          <div>
            <h4 className="footer-col-title">Trade Packages</h4>
            <ul className="footer-links-list">
              <li><Link to="/trades#groundworks">Group 1 — Groundworks & Civils</Link></li>
              <li><Link to="/trades#rc-frame">Group 2 — Substructure & Concrete Frames</Link></li>
              <li><Link to="/trades#steelwork">Group 3 — Structural Steel & Metalwork</Link></li>
              <li><Link to="/trades#facades">Group 4 — Facades, Cladding & Masonry</Link></li>
              <li><Link to="/trades#roofing">Group 4 — Commercial Roofing & Waterproofing</Link></li>
              <li><Link to="/trades#fitout">Group 4 — Architectural Drylining & Fit-Out</Link></li>
              <li><Link to="/trades#mep">Group 5 — M&E Building Services</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-row">
              <span className="icon">📍</span>
              <div>
                <strong>Headquarters:</strong><br />
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
              <div>
                <strong>Operating Hours:</strong><br />
                Monday – Friday: 8:00 AM – 6:00 PM GMT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>
              © {new Date().getFullYear()} <strong>Apex Takeoff UK</strong>. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; RICS Measurement Standards</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
