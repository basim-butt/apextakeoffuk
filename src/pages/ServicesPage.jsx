import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  const coreServices = [
    {
      id: 'nrm2-boq',
      icon: '📐',
      title: 'RICS NRM2 Bills of Quantities (BOQ)',
      subtitle: 'Line-by-line material, labour, and plant schedules itemised to RICS NRM2 standards',
      description: 'Our senior quantity surveyors use Bluebeam Revu and specialized digitizers to measure your architectural, structural, civil, and building services drawings. Every measurement is verifiable through color-coded plan markups, ensuring full transparency and auditability for clients, PQS teams, and funding banks.',
      highlights: [
        'Itemized line-item quantities with live dynamic formulas in unlocked Microsoft Excel (.xlsx)',
        'Accurate trade-standard material wastage allowances (3% to 10% calculated strictly per NRM2 rules)',
        'High-resolution, color-coded PDF drawing markups with matching measurement layer legends',
        'Structured to NRM2 Group elements for instant import into Causeway, ConQuest, or bespoke ERP systems',
      ],
      turnaround: '24–48 Hours',
      deliverables: ['Excel NRM2 Workbook', 'Color-Coded Marked Up PDFs', 'Executive Tender Summary'],
    },
    {
      id: 'bcis-pricing',
      icon: '💷',
      title: 'BCIS Regional Cost Planning & Pricing',
      subtitle: 'Hyper-localized UK rate modeling adjusted by BCIS location factors and market indices',
      description: 'Raw quantities are only half the requirement. We apply quarterly updated Building Cost Information Service (BCIS) location indices, SPONS Architects and Builders pricing data, and live UK supplier merchant quotes to calculate accurate regional labor wages, plant hire, and delivered materials across England, Scotland, and Wales.',
      highlights: [
        'Postcode-specific labor models: Central London inner rates, Outer London, South East, Midlands, North & Scotland',
        'Current UK supplier material price databases updated continuously to reflect market fluctuations',
        'Plant productivity, craneage, scaffolding, and mobilization costs tailored to local site access constraints',
        'Preliminaries, overheads, profit, and contract risk allowances tailored to JCT / NEC4 terms',
      ],
      turnaround: '24–48 Hours',
      deliverables: ['BCIS Cost Model', 'Labour & Plant Schedule', 'Preliminaries Analysis'],
    },
    {
      id: 'tender-packages',
      icon: '📋',
      title: 'Complete Tender-Ready Bid Packages',
      subtitle: 'Turnkey submittals formatted for immediate submission to Main Contractors, PQS Teams & Clients',
      description: 'Win more UK tenders with professionally formatted proposals that eliminate scope gaps. We prepare comprehensive bid packages that protect your margins, satisfy strict tender requirements, and provide private and public-sector clients with total confidence.',
      highlights: [
        'Executive project summary with element-by-element cost breakdown and procurement spend profile',
        'Explicit schedule of inclusions, exclusions, and scope assumptions to prevent downstream variations',
        'Prime Cost (PC) sums, provisional sums, and daywork allowances formatted to JCT / NEC specifications',
        'Presentation-ready format designed for direct client tender interviews and post-tender commercial scrutiny',
      ],
      turnaround: '48–72 Hours',
      deliverables: ['Tender Bid Package', 'Clarifications Document', 'Interim Valuation Schedule'],
    },
    {
      id: 'value-engineering',
      icon: '💡',
      title: 'Value Engineering & Constructability Review',
      subtitle: 'Strategic cost reductions that protect architectural intent and restore viable budgets',
      description: 'When project tenders or early cost plans exceed client budgets, our chartered surveyors identify practical material substitutions, specification rationalisations, and construction sequencing alternatives that cut capital expenditure without compromising safety, Part L compliance, or design quality.',
      highlights: [
        'Element-by-element alternative materials comparison tables with verified cost deltas (£/m² and package totals)',
        'Buildability notes highlighting potential site clashes, sequencing bottlenecks, and long-lead material risks',
        'Whole-life cost and thermal performance assessments balancing initial build costs against operational efficiency',
        'Negotiation-ready documentation for client-contractor budget reconciliation workshops',
      ],
      turnaround: '48 Hours',
      deliverables: ['VE Comparison Table', 'Constructability Notes', 'Budget Savings Report'],
    },
    {
      id: 'subcontractor-takeoffs',
      icon: '🏗️',
      title: 'Single-Trade Subcontractor Takeoffs',
      subtitle: 'Tailored measurement scopes built specifically for specialized UK trade contractors',
      description: 'Trade subcontractors frequently need specific trade packages quantified under intense tender deadlines. We provide laser-focused takeoffs for single trades, giving you the exact quantities, gang hours, and plant requirements needed to return winning quotes rapidly.',
      highlights: [
        'Dedicated packages: Groundworks, RC Frame, Structural Steel, Brickwork, Cladding, Drylining, Roofing, M&E',
        'Gang labor hour models based on verified UK site production rates and access conditions',
        'Fast-track delivery designed around competitive subcontractor tender return cutoffs',
        'Pre-tender RFI (Request for Information) logs identifying drawing ambiguities and discrepancies',
      ],
      turnaround: '24 Hours',
      deliverables: ['Trade-Specific Excel', 'Subcontractor Bid Sheet', 'Annotated PDF Plans'],
    },
    {
      id: 'rush-delivery',
      icon: '⚡',
      title: 'Rush 24-Hour Fast-Track Estimating',
      subtitle: 'Rapid turnaround squad for looming tender deadlines without sacrificing surveyor precision',
      description: 'When an unexpected tender deadline lands on your desk, our emergency response team mobilises immediately. We assign multiple senior quantity surveyors in tandem to deliver fully audited, high-precision Bills of Quantities on time.',
      highlights: [
        'Immediate project intake and drawing triage within 60 minutes of drawing upload',
        'Parallel takeoff workflows across packages by dedicated senior peer quantity surveyors',
        'Continuous direct communication via email and fast-track telephone updates',
        'Guaranteed delivery ahead of your formal tender submission deadline',
      ],
      turnaround: 'Same-Day / 24 Hours',
      deliverables: ['Priority Delivery', 'Dual-Surveyor Audit', 'Full Tender File'],
    },
  ]

  const deliverableSpecs = [
    { deliverable: 'Excel Bill of Quantities', format: '.XLSX (Unlocked Dynamic Formulas)', standard: 'RICS NRM2 / SMM7 / CESMM4', usage: 'Fully editable workbook with intact live formulas for instant contractor adjustments' },
    { deliverable: 'Color-Coded Marked Up Plans', format: 'Vector PDF (Layers Intact)', standard: 'Bluebeam Revu Industry Standard', usage: 'Audit drawings showing exact highlighted takeoffs, dimensions, and measurement callouts' },
    { deliverable: 'BCIS Regional Cost Model', format: '.XLSX & Summary PDF', standard: 'BCIS Location Factors & SPONS Data', usage: 'Detailed labour wage burdens, plant hire rates, and regional material supply schedules' },
    { deliverable: 'Inclusions & Exclusions Schedule', format: 'Formatted PDF & Word', standard: 'JCT & NEC4 Contract Best Practice', usage: 'Legal scope protection defining exactly what was quantified and baseline assumptions' },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Quantity Surveying Services</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Full-Scope Capabilities</span>
            <h1 className="subpage-hero-title">
              Professional UK Quantity Surveying Services <span className="text-red">You Can Bid On</span>
            </h1>
            <p className="subpage-hero-desc">
              From fast single-trade material takeoffs to complex multi-million pound commercial Bills of Quantities, our senior chartered quantity surveyors deliver verifiable, RICS NRM2 compliant numbers with BCIS regional cost planning across England, Scotland, and Wales in 24 to 48 hours.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Plans for Quote →
              </Link>
              <Link to="/takeoff-calculator" className="btn btn-outline-white btn-lg">
                Takeoff & Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Detailed Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">What We Deliver</span>
            <h2 className="section-title">
              Comprehensive Measurement Solutions for <span className="text-navy">Every Project Phase</span>
            </h2>
            <p className="section-desc">
              Every estimate is prepared by senior quantity surveyors with extensive UK commercial site and consultancy experience. We never rely on automated AI guesswork or unchecked algorithms.
            </p>
          </div>

          <div className="service-detail-list">
            {coreServices.map((service, index) => (
              <div className="service-detail-card" key={service.id} id={service.id}>
                <div className="service-detail-header">
                  <div className="service-detail-icon">{service.icon}</div>
                  <div className="service-detail-title-block">
                    <div className="service-detail-meta">
                      <span className="service-index">0{index + 1}</span>
                      <span className="service-turnaround-badge">⏱ Turnaround: {service.turnaround}</span>
                    </div>
                    <h3 className="service-detail-title">{service.title}</h3>
                    <p className="service-detail-sub">{service.subtitle}</p>
                  </div>
                </div>

                <p className="service-detail-body">{service.description}</p>

                <div className="service-detail-split">
                  <div className="service-detail-highlights">
                    <h4 className="service-block-heading">Core Scope & Inclusions:</h4>
                    <ul className="service-bullet-list">
                      {service.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-files">
                    <h4 className="service-block-heading">Included Files:</h4>
                    <div className="file-pills-wrap">
                      {service.deliverables.map((d, i) => (
                        <span className="file-pill" key={i}>
                          📄 {d}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-outline-navy btn-sm" style={{ marginTop: '16px', display: 'inline-block' }}>
                      Request Scope Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable Specifications Table */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Transparency Guaranteed</span>
            <h2 className="section-title">
              Standard Deliverables & <span className="text-red">File Specifications</span>
            </h2>
            <p className="section-desc">
              All deliverables are 100% unlocked, fully editable, and formatted to standard UK quantity surveying protocols so your estimators can immediately inspect formulas and import into internal cost databases.
            </p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>File Format</th>
                  <th>Standard Protocol</th>
                  <th>Intended Commercial Use</th>
                </tr>
              </thead>
              <tbody>
                {deliverableSpecs.map((spec, i) => (
                  <tr key={i}>
                    <td><strong>{spec.deliverable}</strong></td>
                    <td><span className="format-badge">{spec.format}</span></td>
                    <td>{spec.standard}</td>
                    <td>{spec.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-red btn-lg">
              Upload Drawings for Immediate Review →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
