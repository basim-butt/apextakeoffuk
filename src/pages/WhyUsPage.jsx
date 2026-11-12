import React from 'react'
import { Link } from 'react-router-dom'

export default function WhyUsPage() {
  const pillars = [
    {
      num: '01',
      title: '100% Chartered & Senior Human Quantity Surveyors',
      subtitle: 'Zero automated AI guesswork. Zero offshore handoffs.',
      desc: 'Every takeoff is measured and audited by veteran quantity surveyors with at least 10 years of UK commercial construction and site experience. We understand what architects omit, how components assemble on site, and where contract variations hide.',
    },
    {
      num: '02',
      title: '98.9% Verified Post-Tender Buyout Accuracy',
      subtitle: 'Tracked against real contractor buyouts and final account audits',
      desc: 'Our Bills of Quantities align with real-world subcontractor procurement buyouts within 1.1% on average. That means you win tenders with confidence knowing your estimated margins will hold true through construction and final accounts.',
    },
    {
      num: '03',
      title: '24–48 Hour Standard Turnaround',
      subtitle: 'Fast-track emergency same-day and 24-hr rush teams ready to mobilize',
      desc: 'Tender deadlines do not wait. We consistently beat submission cutoffs with standard 24–48 hour delivery and active pre-tender addenda revision support, keeping your bidding pipeline full and active.',
    },
    {
      num: '04',
      title: 'UK-Wide BCIS Regional Cost Localization',
      subtitle: 'Postcode-specific labor agreements, plant rates, and delivered material data',
      desc: 'National averages lose tenders. We calibrate material and labor rates to your project location using quarterly BCIS location factors, accounting for Inner London weightings, regional working rule agreements, plant haulage, and site access constraints.',
    },
    {
      num: '05',
      title: 'Fractional Commercial Cost Advantage',
      subtitle: 'Save up to 65% compared to maintaining full-time in-house commercial staff',
      desc: 'A full-time Senior Quantity Surveyor costs £75,000–£95,000 in salary, plus employer NI, pension, car allowance, training, and specialized software licenses (£8,000+/yr). With Apex Takeoff UK, you pay only for the tenders you actively bid.',
    },
  ]

  const comparisonData = [
    {
      feature: 'Surveyor Experience Level',
      apex: 'Senior Chartered Surveyors (10+ Years UK Site Experience)',
      inHouse: 'Varies; High recruitment costs & staff turnover',
      aiOnly: 'Algorithmic code; zero practical site understanding',
    },
    {
      feature: 'Fixed Overhead & Annual Cost',
      apex: 'Zero Overhead (Pay only per tender / project)',
      inHouse: '£75K–£95K/yr salary + NI, car allowance & software licenses',
      aiOnly: 'Monthly recurring subscription with high manual error checking',
    },
    {
      feature: 'Turnaround Time',
      apex: '24–48 Hours Guaranteed (Rush 24h available)',
      inHouse: 'Subject to internal workload bottlenecks & holiday leave',
      aiOnly: 'Instant initial output, but requires hours of human correction',
    },
    {
      feature: 'BCIS Regional Rate Localization',
      apex: 'Yes — Postcode-exact quarterly BCIS location indices',
      inHouse: 'Often relies on historic or generic company spreadsheets',
      aiOnly: 'Generic national pricing models with high regional error margins',
    },
    {
      feature: 'Deliverable File Format',
      apex: '100% Unlocked Excel (.xlsx) + Color Markups',
      inHouse: 'Internal custom spreadsheets',
      aiOnly: 'Proprietary locked viewers or static summary PDFs',
    },
    {
      feature: 'Addenda & Pre-Tender Support',
      apex: 'Included — rapid quantity updates upon revised drawings',
      inHouse: 'Requires surveyor overtime during tender crunch',
      aiOnly: 'Requires completely restarting the upload workflow',
    },
  ]

  const sectorMetrics = [
    { value: '£420M+', label: 'UK Construction Value Measured Annually' },
    { value: '98.9%', label: 'Verified Buyout Accuracy Against Final Accounts' },
    { value: '24–48h', label: 'Standard Delivery Time for Complete BOQs' },
    { value: '100%', label: 'Human Surveyor Review to RICS NRM2 Standards' },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Why Choose Us</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Competitive Edge</span>
            <h1 className="subpage-hero-title">
              Why UK Contractors Rely on <span className="text-red">Apex Takeoff UK</span>
            </h1>
            <p className="subpage-hero-desc">
              We combine the rigor of senior chartered quantity surveyors with high-speed digital takeoff workflows. Win more tenders, safeguard your commercial margins, and bid with absolute confidence.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/how-it-works" className="btn btn-outline-white btn-lg">
                View Our Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="section bg-light" style={{ padding: '36px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="metrics-grid-4">
            {sectorMetrics.map((m, i) => (
              <div className="metric-box" key={i}>
                <div className="metric-val">{m.value}</div>
                <div className="metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Core Pillars */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Core Principles</span>
            <h2 className="section-title">
              Five Standards That Set <span className="text-navy">Apex Takeoff UK Apart</span>
            </h2>
            <p className="section-desc">
              From commercial accuracy to responsive tender support, our consultancy is built around the real-world operational needs of UK contractors.
            </p>
          </div>

          <div className="why-pillars-grid">
            {pillars.map((p) => (
              <div className="why-pillar-card" key={p.num}>
                <span className="why-pillar-num">{p.num}</span>
                <h3 className="why-pillar-title">{p.title}</h3>
                <h4 className="why-pillar-sub">{p.subtitle}</h4>
                <p className="why-pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Market Comparison</span>
            <h2 className="section-title">
              How We Compare to <span className="text-red">Traditional In-House &amp; AI Tools</span>
            </h2>
            <p className="section-desc">
              See why leading UK Main Contractors and specialist trade subcontractors make Apex Takeoff UK their commercial estimating partner.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability / Metric</th>
                  <th className="highlight-col">Apex Takeoff UK</th>
                  <th>Full-Time In-House QS</th>
                  <th>Automated AI Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i}>
                    <td className="feature-cell"><strong>{row.feature}</strong></td>
                    <td className="highlight-col"><strong>{row.apex}</strong></td>
                    <td>{row.inHouse}</td>
                    <td>{row.aiOnly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-red btn-lg">
              Partner with Apex Takeoff UK on Your Next Tender →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

