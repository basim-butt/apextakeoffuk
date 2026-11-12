import React from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Submit Plans &amp; Contact</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Direct Surveyor Intake</span>
            <h1 className="subpage-hero-title">
              Submit Your Plans — Receive a Confirmed <span className="text-red">Proposal in 1–2 Hours</span>
            </h1>
            <p className="subpage-hero-desc">
              Upload your project drawings and scope requirements. Our senior quantity surveying team will review your drawing set, confirm the RICS NRM2 packages, and reply with an agreed fee proposal and turnaround schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Cards Row */}
      <section className="section-contact-cards">
        <div className="container">
          <div className="contact-cards-row">
            <div className="contact-info-card">
              <div className="contact-card-icon">📍</div>
              <div className="contact-card-text">
                <span className="contact-card-label">UK Headquarters</span>
                <strong className="contact-card-value">London, W1D</strong>
                <p>100 Oxford Street, London<br />Greater London, W1D 1LL<br />United Kingdom</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">✉️</div>
              <div className="contact-card-text">
                <span className="contact-card-label">Estimating Desk</span>
                <strong className="contact-card-value">Direct Email</strong>
                <p>
                  <a href="mailto:info@apextakeoff.uk" className="contact-email-link">
                    info@apextakeoff.uk
                  </a>
                  <span className="contact-subtext">Replies in 1–2 hours during business hours</span>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">🕒</div>
              <div className="contact-card-text">
                <span className="contact-card-label">Operating Hours</span>
                <strong className="contact-card-value">Mon–Fri: 8:00am–6:00pm GMT</strong>
                <p>Nationwide UK Coverage<br /><span className="contact-subtext">*Emergency 24-hr rush teams active for tender cutoffs</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacious Quote Form Section */}
      <section className="contact-form-section" id="quote">
        <QuoteForm />
      </section>
    </div>
  )
}

