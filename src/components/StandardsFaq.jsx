import React, { useState } from 'react'

export default function StandardsFaq() {
  const [openIdx, setOpenIdx] = useState(0)

  const items = [
    {
      q: 'Why do you measure strictly to RICS NRM2 standards?',
      a: 'The RICS New Rules of Measurement (NRM2) is the industry benchmark for detailed measurement for building works across the UK. By structuring our Bills of Quantities to NRM2, every item has an unambiguous description, standard unit of measurement (m, m², m³, nr, tonnes), and clear rules on inclusions and wastage. This protects contractors during procurement, eliminates tender disputes, and simplifies sub-contractor pricing.',
    },
    {
      q: 'Can you produce takeoffs to SMM7 or CESMM4?',
      a: 'Yes. While NRM2 is standard for modern building contracts, many ongoing frameworks, public sector tenders, and legacy contracts still require SMM7 (Standard Method of Measurement 7). For civil engineering, heavy infrastructure, and highway projects, we measure to CESMM4. We also accommodate POMI for international projects.',
    },
    {
      q: 'Why do you guarantee 100% human surveyor review with no AI guesswork?',
      a: 'Automated AI takeoff tools frequently misinterpret scale bars, overlook revision clouds, miss architectural notes, and double-count complex architectural junctions. At Apex Takeoff UK, every single quantity is measured from first principles by qualified senior quantity surveyors. Every measurement is visually color-coded on the PDF drawings so you have a complete, traceable audit trail.',
    },
    {
      q: 'How are your BCIS rates and regional adjustments calculated?',
      a: 'Our pricing database integrates quarterly BCIS (Building Cost Information Service) location factors. A project in Central London has significantly different labor rates, congestion costs, and access considerations compared to one in Manchester, Birmingham, or Glasgow. We apply zip-code / postcode specific labor indices and live UK material supplier quotes.',
    },
    {
      q: 'In what format will I receive my deliverables?',
      a: 'You receive fully editable, unlocked Microsoft Excel workbooks with intact formulas (never locked or encrypted), accompanied by high-resolution marked-up PDF drawings generated in Bluebeam Revu, a formal Tender Query / RFI Schedule, and an Executive Bid Summary ready for your commercial directors.',
    },
  ]

  return (
    <section className="section" id="standards" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center">
          <div className="section-tag gold">Measurement Standards & Rigour</div>
          <h2 className="section-title">
            The Industry Standards Behind <span className="text-red">Every Takeoff</span>
          </h2>
          <p className="section-desc">
            We adhere to the UK's most rigorous quantity surveying frameworks to ensure your tenders stand up to strict scrutiny from clients, PQS teams, and funding banks.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {items.map((item, idx) => (
            <div
              key={item.q}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                marginBottom: '14px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                backgroundColor: openIdx === idx ? '#f8fafc' : '#ffffff',
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: openIdx === idx ? '#dc2626' : '#0b1a30',
                }}
              >
                <span>{item.q}</span>
                <span style={{ fontSize: '1.2rem', transform: openIdx === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
                  ▾
                </span>
              </button>
              {openIdx === idx && (
                <div style={{ padding: '0 22px 20px', color: '#475569', fontSize: '0.92rem', lineHeight: '1.65' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

