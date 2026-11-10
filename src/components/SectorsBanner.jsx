import React from 'react'

export default function SectorsBanner() {
  const sectors = [
    { icon: '🏘️', title: 'Residential Schemes', sub: 'Single plots, high-end resi & multi-unit apartments' },
    { icon: '🏢', title: 'Commercial & Retail', sub: 'Cat A & Cat B office fit-outs, supermarkets & retail' },
    { icon: '🏭', title: 'Industrial & Logistics', sub: 'Distribution centres, sheds & high-bay warehouses' },
    { icon: '🏥', title: 'Healthcare & Care Homes', sub: 'NHS clinics, dental surgeries & residential care' },
    { icon: '🏫', title: 'Education & Civic', sub: 'School extensions, universities & community hubs' },
  ]

  return (
    <section className="sectors-section" id="sectors">
      <div className="container">
        <div className="text-center">
          <div className="section-tag navy">UK Sectors Covered</div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Proven Commercial Experience Across <span className="text-red">Every Sector</span>
          </h2>
          <p className="section-desc" style={{ color: '#94a3b8', margin: '0 auto' }}>
            From complex city-centre commercial towers to multi-phase residential housing developments across the UK.
          </p>
        </div>

        <div className="sectors-grid">
          {sectors.map((s) => (
            <div className="sector-card" key={s.title}>
              <div className="sector-icon">{s.icon}</div>
              <div className="sector-title">{s.title}</div>
              <div className="sector-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

