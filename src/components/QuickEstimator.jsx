import React, { useState } from 'react'

export default function QuickEstimator() {
  const [projectType, setProjectType] = useState('commercial')
  const [measurementStandard, setMeasurementStandard] = useState('nrm2')

  const scrollToQuote = () => {
    const el = document.getElementById('quote')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="quick-tool-bar" id="quick-estimator">
      <div className="container">
        <div className="tool-bar-inner">
          <div className="tool-bar-heading">
            <h3>⚡ Instant UK Tender Scope & Turnaround Calculator</h3>
            <p>Select your scheme details for an immediate turnaround proposal & fixed-price quote.</p>
          </div>

          <div className="tool-bar-inputs">
            <select
              className="tool-select"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="commercial">🏢 Commercial Office & Retail</option>
              <option value="residential">🏘️ Residential Schemes & Multi-Unit</option>
              <option value="industrial">🏭 Industrial Units & Logistics Warehouses</option>
              <option value="healthcare">🏥 Healthcare, Care Homes & NHS</option>
              <option value="education">🏫 Schools & Higher Education</option>
              <option value="civils">🏛️ Civils, Groundworks & Infrastructure</option>
            </select>

            <select
              className="tool-select"
              value={measurementStandard}
              onChange={(e) => setMeasurementStandard(e.target.value)}
            >
              <option value="nrm2">RICS NRM2 Tender-Ready BOQ (Main Contractor)</option>
              <option value="subcontractor">Subcontractor Trade Package Takeoff</option>
              <option value="costplan">Pre-Tender Elemental Cost Plan (BCIS Rates)</option>
              <option value="cesmm4">CESMM4 Civils & Infrastructure Schedule</option>
              <option value="smm7">SMM7 Legacy Measurement Schedule</option>
              <option value="fitout">Cat A / Cat B Architectural Fit-Out</option>
            </select>

            <button className="btn btn-red" onClick={scrollToQuote}>
              Get a Fixed Quote →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

