import React from 'react'

export default function Trades() {
  const pillars = [
    {
      icon: '🚜',
      divTag: 'NRM2 GROUP 1 / CESMM4',
      title: 'Groundworks & Civils',
      desc: 'Substructure, deep excavations, civil engineering, and infrastructure packages.',
      chips: [
        'Bulk Earthworks & Remediation',
        'Piling & Ground Beams',
        'Reinforced Concrete Rafts',
        'Adoptable Drainage & Attenuation',
        'Hard Landscaping & External Works',
        'Substation & Utility Ducting',
      ],
    },
    {
      icon: '🏗️',
      divTag: 'NRM2 GROUP 2',
      title: 'Superstructure & Frame',
      desc: 'Heavy structural cores, loadbearing masonry, and structural framing elements.',
      chips: [
        'Structural Steelwork & Metal Decking',
        'In-Situ Reinforced Concrete (RC Frame)',
        'Facing Brickwork & Blockwork',
        'Timber Frame, Glulam & CLT',
        'Precast Stairs & Hollowcore Floors',
        'Structural Fire Protection',
      ],
    },
    {
      icon: '🏢',
      divTag: 'NRM2 GROUP 3',
      title: 'Envelope & Roofing',
      desc: 'Exterior facade systems, architectural cladding, and weathering enclosures.',
      chips: [
        'Curtain Walling & Structural Glazing',
        'Rainscreen & Composite Cladding',
        'Aluminium Windows & External Doors',
        'Single-Ply & Hot Melt Flat Roofing',
        'Standing Seam & Built-Up Roofing',
        'Cavity Barriers & Waterproofing',
      ],
    },
    {
      icon: '🎨',
      divTag: 'NRM2 GROUP 4',
      title: 'Architectural Fit-Out',
      desc: 'Complete commercial Cat A & Cat B interiors, drylining, and decorative finishes.',
      chips: [
        'Metal Stud Partitions & Shaftwalls',
        'Suspended MF & Grid Ceilings',
        'Plastering & Skimming',
        'Architectural Doorsets & Ironmongery',
        'Raised Access Flooring & Screeds',
        'Painting, Decorating & Tiling',
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
    <section className="section trades-section" id="trades">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">RICS NRM2 Work Packages</div>
          <h2 className="section-title">
            All UK Construction Trades <span className="text-red">Covered</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '36px' }}>
            From single-trade subcontractors to full turnkey Main Contractor BOQs. Every work package is itemised to industry rules, completely transparent, and tender-ready.
          </p>
        </div>

        <div className="trades-pillar-grid">
          {pillars.map((pillar) => (
            <div className="trade-pillar-card" key={pillar.title}>
              <div className="pillar-header">
                <span className="pillar-icon">{pillar.icon}</span>
                <span className="pillar-div-tag">{pillar.divTag}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-chips">
                {pillar.chips.map((chip) => (
                  <span className="pillar-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <button
                className="pillar-action-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                onClick={scrollToQuote}
              >
                Request Quote for Package →
              </button>
            </div>
          ))}
        </div>

        <div className="trades-compact-footer">
          <span>✓ Full RICS NRM2 & SMM7 Compliance</span>
          <span className="dot-sep">•</span>
          <span>✓ Subcontractor Single-Trade Takeoffs</span>
          <span className="dot-sep">•</span>
          <span>✓ Main Contractor Turnkey Packages</span>
          <span className="dot-sep">•</span>
          <span>✓ Full M&E / MEP Packages Included (NRM2 Group 5)</span>
        </div>
      </div>
    </section>
  )
}

