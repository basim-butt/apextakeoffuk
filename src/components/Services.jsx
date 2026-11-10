import React from 'react'

export default function Services() {
  const services = [
    {
      icon: '📐',
      title: 'Bills of Quantities (NRM2 / SMM7)',
      desc: 'Tender-ready, fully itemised Bills of Quantities prepared strictly in compliance with RICS NRM2 or SMM7 rules. Delivered in unlocked Excel workbooks with transparent measurement sheets.',
      bullets: [
        'RICS NRM2 & SMM7 compliant measurement',
        'Unlocked Excel workbooks with live formulas',
        'Formal Tender Query / RFI schedule included',
      ],
    },
    {
      icon: '💷',
      title: 'BCIS Regional Cost Planning & Pricing',
      desc: 'Cost models backed by real-time UK market rates and regional BCIS (Building Cost Information Service) location indices for London, South East, Midlands, the North, Scotland & Wales.',
      bullets: [
        'UK regional location factors & live labor indices',
        'Subcontractor & supplier material benchmarking',
        'Overheads, profit & preliminaries allocations',
      ],
    },
    {
      icon: '📊',
      title: 'Digital Quantity Takeoffs',
      desc: 'First-principles material and component takeoffs from 2D PDF drawings, CAD DWGs, and 3D BIM models. Every line item is traced with high-res, color-coded markups.',
      bullets: [
        'Measured from PDF, DWG, and BIM / IFC models',
        'High-resolution Bluebeam color-coded markups',
        'Zero AI guesswork — verified by senior surveyors',
      ],
    },
    {
      icon: '📋',
      title: 'Tender Support & Bid Packages',
      desc: 'Comprehensive tender return packs tailored for Main Contractors and Subcontractors to submit with confidence to private developers, local authorities, or PQS teams.',
      bullets: [
        'Subcontractor package scope splitting',
        'Commercial risk review & tender qualifications',
        'Executive bid summary ready for submission',
      ],
    },
    {
      icon: '💡',
      title: 'Value Engineering & Cost Planning',
      desc: 'Elemental cost plans aligned with RIBA stages 1 to 5, alongside structured value engineering options to reduce scheme costs while safeguarding architectural quality.',
      bullets: [
        'RIBA Stage 1–5 elemental cost planning',
        'Material & system specification comparisons',
        'Buildability and procurement optimization notes',
      ],
    },
    {
      icon: '⚡',
      title: 'Rush 24-Hour Turnaround',
      desc: 'Dedicated rapid-response quantity surveying team ready to handle pressing UK tender submission deadlines. Fast-track delivery without sacrificing an ounce of precision.',
      bullets: [
        'Dedicated senior chartered surveyor assigned',
        'Emergency same-day or 24–48hr turnaround',
        'Direct priority WhatsApp & email progress updates',
      ],
    },
  ]

  const scrollToQuote = () => {
    const el = document.getElementById('quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Core UK Capabilities</div>
          <h2 className="section-title">
            Professional Quantity Surveying <span className="text-red">You Can Bid On</span>
          </h2>
          <p className="section-desc">
            We deliver rigorous, standards-compliant commercial documentation backed by chartered quantity surveyors with decades of UK main contracting and commercial experience.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon-box">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button
                className="service-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={scrollToQuote}
              >
                Request Quote For This Service →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

