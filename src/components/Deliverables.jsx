import React from 'react'

export default function Deliverables() {
  const items = [
    {
      icon: '📊',
      title: 'Itemised Excel BOQs',
      desc: 'Complete Excel files structured to RICS NRM2 rules with live formulas, adjustable preliminaries, regional labor rates, and summary sheets.',
    },
    {
      icon: '🎨',
      title: 'Color-Coded Marked Plans',
      desc: 'High-resolution PDF drawing markups generated in Bluebeam Revu showing exactly what was measured, counted, and color-coded by trade.',
    },
    {
      icon: '📑',
      title: 'Tender Queries / RFI Schedule',
      desc: 'An itemised log detailing drawing discrepancies, specification ambiguities, and missing details to submit back to the design team.',
    },
    {
      icon: '🔍',
      title: 'Chartered QS Sign-Off',
      desc: 'Every takeoff is peer-reviewed and signed off by a credentialed senior quantity surveyor to guarantee zero scope omissions.',
    },
  ]

  return (
    <section className="section" id="deliverables">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Deliverables</div>
          <h2 className="section-title">
            What You Receive In Every <span className="text-red">Tender Package</span>
          </h2>
          <p className="section-desc">
            We don't hand you raw software exports. You receive polished, fully editable, field-ready documentation ready for procurement and bid day.
          </p>
        </div>

        <div className="deliverables-grid">
          {items.map((item) => (
            <div className="deliverable-box" key={item.title}>
              <div className="deliverable-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

