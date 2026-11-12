import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <div className="subpage-wrapper">
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Terms &amp; RICS Standards</span>
          </nav>
          <div className="subpage-hero-content">
            <span className="subpage-badge">Professional Standards</span>
            <h1 className="subpage-hero-title">Terms of Service &amp; RICS Measurement Standards</h1>
            <p className="subpage-hero-subtitle">
              Professional guidelines, RICS NRM2 classification rules, BCIS regional cost calibration principles, and deliverables specifications governing all estimating engagements with Apex Takeoff UK.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="terms-card" style={{
            background: 'var(--white)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '42px 46px',
            boxShadow: '0 4px 20px rgba(11,26,48,0.06)',
            lineHeight: '1.75'
          }}>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '24px' }}>
              <strong>Effective Date:</strong> 1 January 2026 &nbsp;|&nbsp; <strong>Governing Jurisdiction:</strong> England &amp; Wales
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              1. Engagement &amp; Scope of Quantity Surveying Services
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              <strong>Apex Takeoff UK</strong> provides professional construction quantity takeoffs, cost plans, and Bills of Quantities (BOQ). Our services are performed based on architectural and engineering drawings, project specifications, ground investigation reports, and tender addenda furnished directly by the client. Proposals issued prior to commencement define the agreed NRM2 scope, delivery timeline, and customized project fee.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              2. RICS NRM2 Measurement Standards Compliance
            </h2>
            <p style={{ color: '#334155', marginBottom: '14px' }}>
              Unless agreed otherwise in writing, all Bills of Quantities and material takeoff schedules are prepared in strict accordance with the <strong>Royal Institution of Chartered Surveyors (RICS) New Rules of Measurement 2 (NRM2)</strong>:
            </p>
            <ul style={{ color: '#334155', paddingLeft: '22px', marginBottom: '18px' }}>
              <li><strong>Group 1:</strong> Substructure, reduced level excavation, basement retaining walls, piling, and underground drainage.</li>
              <li><strong>Group 2:</strong> In-situ concrete, suspended slabs, post-tensioned decks, and reinforced concrete frames.</li>
              <li><strong>Group 3:</strong> Structural steel frames, composite metal decking, purlins, and architectural metalwork.</li>
              <li><strong>Group 4:</strong> External envelope, facing brickwork, blockwork, cavity insulation, curtain walling, rainscreens, roofing, drylining, and internal finishes.</li>
              <li><strong>Group 5:</strong> Mechanical, electrical, and public health (MEP) building services.</li>
              <li><strong>Group 8:</strong> External works, hard landscaping, paving, boundary enclosures, and Section 278 highway works.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              3. SMM7 and CESMM4 Civil Engineering Standards
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              Where client tender documentation specifically mandates the legacy <strong>Standard Method of Measurement 7 (SMM7)</strong> for ongoing frameworks or <strong>CESMM4</strong> for heavy infrastructure, civil engineering, or highways work, our team formats workbooks and unit items strictly to those methodologies.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              4. Deliverables &amp; Formula Integrity
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              Apex Takeoff UK delivers:
            </p>
            <ul style={{ color: '#334155', paddingLeft: '22px', marginBottom: '18px' }}>
              <li><strong>Unlocked Microsoft Excel (.xlsx) Workbooks:</strong> All cells, sums, unit rates, and calculation formulas are fully unlocked and editable for client inspection.</li>
              <li><strong>High-Resolution Vector PDF Markups:</strong> Bluebeam Revu plan markups with visible layers, highlighting exact component measurement traces and area legends.</li>
              <li><strong>Scope Clarifications &amp; Exclusion Notes:</strong> Comprehensive itemization of underlying assumptions, drawing discrepancies noted, and specific exclusions to protect your commercial position under JCT and NEC contract forms.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              5. BCIS Regional Cost Modeling Principles
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              Where cost estimating is requested, unit rates are modeled using quarterly <strong>Building Cost Information Service (BCIS)</strong> location factors, verified SPONS price book indices, and prevailing UK supplier merchant quotes. Clients acknowledge that market volatility, specialist trade availability, and contractor overhead structures may cause final procurement buyouts to vary.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              6. Pre-Tender Addenda &amp; Drawing Revisions
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              When architects or client employers issue tender bulletins, addenda, or revised drawing registers during the active tender period, Apex Takeoff UK provides prompt quantity revisions. Minor clarifications and single-sheet updates are updated within your existing engagement. Substantial design overhauls or new trade packages are assessed with a fair, agreed variation proposal prior to execution.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              7. Payment Terms &amp; Delivery Commitments
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              Turnaround commitments (typically 24 to 48 hours for standard projects) commence upon receipt of confirmed drawings and written engagement agreement. Invoicing is issued per project fee proposal, payable via standard UK BACS transfer or major corporate payment methods.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              8. Commercial Confidentiality &amp; IP Ownership
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              All architectural drawings, specifications, and commercial correspondence provided by the client remain the confidential property of the client. Upon receipt of full payment, all completed Bills of Quantities and marked-up PDF plans become the exclusive property of the client for tender and construction procurement.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px 20px', marginTop: '28px', color: '#1e293b' }}>
              <strong>Apex Takeoff UK — Commercial Standards &amp; Enquiries</strong><br />
              100 Oxford Street, London, Greater London, W1D 1LL, United Kingdom<br />
              Email: <a href="mailto:info@apextakeoff.uk" style={{ color: '#dc2626', fontWeight: 600 }}>info@apextakeoff.uk</a><br />
              Operating Hours: Monday – Friday, 8:00 AM – 6:00 PM GMT
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

