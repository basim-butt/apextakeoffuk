import React from 'react'
import { Link } from 'react-router-dom'

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Submit Drawings & Tender Specifications',
      subtitle: 'Upload your plan sets via our secure online portal or cloud storage links',
      description: 'Send us your architectural, structural, civil, or MEP drawings in PDF, DWG, or ZIP format. Include your project postcode/region, scope instructions (single trade or full turnkey package), contract form (JCT, NEC4), and your tender return deadline.',
      details: [
        'Supported formats: Vector PDFs, AutoCAD (.dwg), Revit (.rvt), or cloud links (Dropbox, Google Drive, Procore, Viewpoint)',
        'Specify single-trade subcontractor takeoff or complete general contractor multi-trade Bill of Quantities',
        'Upload project specifications, employer requirements, ground investigation reports, and tender addenda',
        'Strict NDA protection guarantees total commercial confidentiality for your project data',
      ],
      timeframe: 'Instant / Same-Day Intake',
    },
    {
      step: '02',
      title: 'Scope Review & Agreed Fee Proposal',
      subtitle: 'Receive a transparent proposal within 1 to 2 hours of drawing review',
      description: 'A senior chartered surveyor performs an immediate drawing count and scope assessment. We issue a transparent, agreed fee proposal with zero hidden disbursements and commit to an exact delivery schedule ahead of your tender deadline.',
      details: [
        'Detailed scope confirmation letter outlining the exact RICS NRM2 packages and elements covered',
        'Guaranteed turnaround commitment (typically 24 to 48 hours for standard tender packages)',
        'Transparent agreed proposal — never any unexpected hourly billing or surprise surcharges',
        'Direct contact details for your dedicated senior surveyor assigned to answer technical queries',
      ],
      timeframe: 'Within 60–120 Minutes',
    },
    {
      step: '03',
      title: 'Precision Takeoff & BCIS Cost Modeling',
      subtitle: 'Digital measurement execution backed by mandatory dual-peer quality control',
      description: 'Your project is assigned to a senior quantity surveyor with direct UK site experience in your sector. We calibrate drawing scales in Bluebeam Revu, measure every component from first principles, apply verified NRM2 wastage factors, and calibrate rates to BCIS regional location indices.',
      details: [
        'Digital on-screen takeoff using industry-leading software: Bluebeam Revu and specialized digitizers',
        'Formulas embedded into every Excel line item for complete transparency and client auditability',
        'Hyper-localized BCIS pricing reflecting current regional UK labor rates and delivered merchant materials',
        'Mandatory dual-peer review: every Bill of Quantities is audited and signed off by a second senior surveyor prior to dispatch',
      ],
      timeframe: '24–48 Hours',
    },
    {
      step: '04',
      title: 'Final Delivery & Active Pre-Tender Support',
      subtitle: 'Receive editable workbooks, marked-up drawings, and prompt addenda revisions',
      description: 'We deliver your complete tender file formatted for immediate client or employer submittal. If the design team or client issues tender addenda or revised drawings prior to tender return, we update your quantities promptly.',
      details: [
        'Unlocked Microsoft Excel (.xlsx) workbook with dynamic formulas and NRM2 summary tabs',
        'High-resolution, color-coded PDF drawings with highlighted callouts and measurement legends',
        'Clarifications, inclusions, and exclusions document to safeguard your commercial contract position',
        'Full addenda support: we revise quantities rapidly if revised drawing sets are issued prior to tender close',
      ],
      timeframe: 'Ahead of Tender Return',
    },
  ]

  const softwareStack = [
    { name: 'Bluebeam Revu 21', category: 'Scale Calibration & Vector Markups', desc: 'Precise digital vector measurement with exact layer separation and color-coded takeoff callouts.' },
    { name: 'BCIS Online Database', category: 'UK Regional Cost Benchmarking', desc: 'Quarterly updated location indices across England, Wales, and Scotland reflecting live market wage agreements.' },
    { name: 'Causeway & ConQuest Ready', category: 'NRM2 Estimating Structure', desc: 'Export formats fully aligned with leading UK estimating software for effortless internal database import.' },
    { name: 'Microsoft Excel Professional', category: 'Dynamic Formulas & Auditability', desc: '100% unlocked workbooks structured around RICS NRM2 groups with live formulas for easy rate adjustments.' },
  ]

  const faqs = [
    {
      q: 'How fast will I receive my completed Bill of Quantities?',
      a: 'Standard UK commercial and residential projects are completed within 24 to 48 hours. For urgent tender deadlines, our fast-track 24-hour service deploys parallel surveyor teams to beat your submission deadline.',
    },
    {
      q: 'Are your measurements compliant with RICS NRM2 standards?',
      a: 'Yes, 100%. All our Bills of Quantities are prepared strictly in accordance with RICS New Rules of Measurement 2 (NRM2). If your project requires SMM7 or civil engineering CESMM4, we structure the workbooks accordingly.',
    },
    {
      q: 'Can I edit the Excel workbook after delivery?',
      a: 'Absolutely. We deliver 100% unlocked Microsoft Excel (.xlsx) workbooks with all mathematical formulas fully intact. You can adjust your own labour rates, overheads, profit margins, or material wastage factors directly.',
    },
    {
      q: 'How do you handle drawing addenda issued during the tender period?',
      a: 'We provide active pre-tender addenda support. If the architect or client issues revised drawings or scope clarifications prior to your tender return, simply email the revisions and we will update your quantities promptly.',
    },
    {
      q: 'Do you provide material wastage allowances in your takeoffs?',
      a: 'Yes. Every material item includes verified, trade-standard wastage factors (typically 3% to 10% depending on component geometry and cutting tolerances) explicitly noted in the Excel descriptions.',
    },
    {
      q: 'Is my tender data and drawing set kept confidential?',
      a: 'Without exception. All submitted drawings, tender documents, and commercial correspondence are protected under strict non-disclosure terms. We never share client project data or bid pricing with third parties.',
    },
  ]

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Tender Workflow</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Tested &amp; Proven Method</span>
            <h1 className="subpage-hero-title">
              Our 4-Step <span className="text-red">Quantity Surveying &amp; Tender Workflow</span>
            </h1>
            <p className="subpage-hero-desc">
              Designed specifically for fast-paced UK tender environments. From initial drawing upload to a comprehensive, dual-audited Bill of Quantities ready for tender submission in 24 to 48 hours.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Drawings for Quote →
              </Link>
              <Link to="/trades" className="btn btn-outline-white btn-lg">
                View Trade Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Workflow Steps */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Step-by-Step Delivery</span>
            <h2 className="section-title">
              How We Turn Blueprints into <span className="text-navy">Tender-Winning Bids</span>
            </h2>
            <p className="section-desc">
              Every stage of our process is managed by senior chartered quantity surveyors to guarantee complete accuracy and total transparency.
            </p>
          </div>

          <div className="workflow-steps-vertical">
            {steps.map((s, index) => (
              <div className="workflow-step-card" key={s.step}>
                <div className="workflow-step-aside">
                  <div className="workflow-step-circle">{s.step}</div>
                  {index < steps.length - 1 && <div className="workflow-step-connector" />}
                </div>

                <div className="workflow-step-main">
                  <div className="workflow-step-meta">
                    <span className="timeframe-tag">⏱ {s.timeframe}</span>
                  </div>
                  <h3 className="workflow-step-title">{s.title}</h3>
                  <p className="workflow-step-subtitle">{s.subtitle}</p>
                  <p className="workflow-step-desc">{s.description}</p>

                  <div className="workflow-step-details">
                    <h4 className="workflow-subhead">Key Inclusions at This Stage:</h4>
                    <ul className="workflow-bullets">
                      {s.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Software Stack */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Industry Leading Tools</span>
            <h2 className="section-title">
              Our Professional <span className="text-red">Quantity Surveying Software Stack</span>
            </h2>
            <p className="section-desc">
              We leverage the UK construction industry's most trusted software platforms to ensure our takeoff files seamlessly integrate with your existing commercial workflows.
            </p>
          </div>

          <div className="software-grid">
            {softwareStack.map((tool, i) => (
              <div className="software-card" key={i}>
                <div className="software-category-tag">{tool.category}</div>
                <h3 className="software-name">{tool.name}</h3>
                <p className="software-desc">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow FAQs */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">
              Everything You Need to Know About <span className="text-navy">Our Estimating Process</span>
            </h2>
          </div>

          <div className="faq-grid-2">
            {faqs.map((faq, i) => (
              <div className="faq-item-card" key={i}>
                <h4 className="faq-question">❓ {faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn-red btn-lg">
              Ready to Submit Your Drawings? Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
