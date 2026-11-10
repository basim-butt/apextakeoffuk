import React from 'react'

export default function WhyUs() {
  const comparisons = [
    { feature: 'Turnaround Time', apex: '24–48 Hours', inhouse: '2–3 Weeks', freelance: 'Unpredictable' },
    { feature: 'Senior Chartered Review', apex: '100% Guaranteed', inhouse: 'Dependent on staff', freelance: 'Rarely audited' },
    { feature: 'Software Licensing Costs', apex: '£0 (Included)', inhouse: '£12,000+/year', freelance: '£0' },
    { feature: 'RICS NRM2 & BCIS Rates', apex: 'Standard UK-Wide', inhouse: 'Manual research', freelance: 'Outdated rates' },
    { feature: 'Upfront Fee Proposal', apex: 'Delivered in 1-2 Hours', inhouse: 'High overhead costs', freelance: 'Hourly overruns' },
    { feature: 'Deliverable Formats', apex: 'Unlocked Excel + Markups + RFI', inhouse: 'Varies by staff', freelance: 'Often messy / locked' },
  ]

  const scrollToQuote = () => {
    const el = document.getElementById('quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="section section-light" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div>
            <div className="section-tag">Why Apex Takeoff UK</div>
            <h2 className="section-title">
              Why British Contractors <span className="text-red">Choose Us</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 0 32px' }}>
              Quantity surveying and commercial measurement in the UK demand deep contractual insight, familiarity with NRM2 rules, and relentless attention to detail. We combine chartered surveyors with multi-tier peer reviews.
            </p>

            <div className="why-feature-list">
              <div className="why-feature-item">
                <div className="why-feature-icon">🛡️</div>
                <div className="why-feature-text">
                  <h4>100% Human Chartered Surveyors</h4>
                  <p>
                    Every line item is measured and verified by experienced quantity surveyors with at least 10 years of UK contracting and site experience. Zero automated AI guesswork.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">📍</div>
                <div className="why-feature-text">
                  <h4>BCIS UK Regional Location Factors</h4>
                  <p>
                    Material prices and labor costs adjusted specifically to your site postcode — whether Central London, Birmingham, Manchester, Leeds, Glasgow, or Cardiff.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">⚙️</div>
                <div className="why-feature-text">
                  <h4>Industry-Standard Quantity Surveying Software</h4>
                  <p>
                    We work in Bluebeam Revu, Cubit Buildsoft, PlanSwift, and Causeway, ensuring total compatibility with your commercial workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="contractor-card-wrap">
              <div className="contractor-card-title">
                <span>Contractor Benchmarking</span>
                <span style={{ fontSize: '0.85rem', color: '#f87171', fontWeight: 600 }}>🇬🇧 UK Commercial Audit</span>
              </div>

              {comparisons.map((c) => (
                <div className="contractor-row" key={c.feature}>
                  <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{c.feature}</span>
                  <span className="check-val">✓ {c.apex}</span>
                </div>
              ))}

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)', textAlign: 'center' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                  Save up to 60% compared to maintaining an in-house full-time quantity surveying department.
                </p>
                <button className="btn btn-red" style={{ width: '100%' }} onClick={scrollToQuote}>
                  Request Free Assessment →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

