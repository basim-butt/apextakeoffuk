import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuickEstimator from '../components/QuickEstimator'

export default function TakeoffCalculatorPage() {
  const [projectGifa, setProjectGifa] = useState('1500')
  const [buildingType, setBuildingType] = useState('commercial')
  const [region, setRegion] = useState('centralLondon')

  // BCIS regional location index factors
  const regionFactors = {
    centralLondon: { label: 'Greater London (Central / City)', factor: 1.28, baseLabor: '£36–£48/hr' },
    outerLondon: { label: 'Greater London (Outer) & Home Counties', factor: 1.18, baseLabor: '£32–£42/hr' },
    southEast: { label: 'South East England', factor: 1.12, baseLabor: '£28–£38/hr' },
    southWest: { label: 'South West (Bristol, Bath, Exeter)', factor: 1.04, baseLabor: '£26–£34/hr' },
    midlands: { label: 'West & East Midlands (Birmingham, Nottingham)', factor: 0.98, baseLabor: '£24–£32/hr' },
    northWest: { label: 'North West & Yorkshire (Manchester, Leeds)', factor: 0.96, baseLabor: '£23–£31/hr' },
    northEast: { label: 'North East & Cumbria (Newcastle)', factor: 0.93, baseLabor: '£22–£29/hr' },
    scotland: { label: 'Scotland (Glasgow, Edinburgh, Aberdeen)', factor: 0.98, baseLabor: '£25–£33/hr' },
    wales: { label: 'Wales (Cardiff, Swansea, Newport)', factor: 0.92, baseLabor: '£22–£28/hr' },
    northernIreland: { label: 'Northern Ireland (Belfast)', factor: 0.86, baseLabor: '£20–£26/hr' },
  }

  const buildingRates = {
    residential: { name: 'Single & Multi-Unit Residential', baseRate: 1950, turnaround: '24–36 hrs' },
    commercial: { name: 'Commercial Offices & Workplace Fit-Out', baseRate: 2450, turnaround: '24–48 hrs' },
    industrial: { name: 'Industrial Logistics & Warehouse', baseRate: 1150, turnaround: '20–30 hrs' },
    institutional: { name: 'Healthcare, Educational & Public Sector', baseRate: 2950, turnaround: '36–48 hrs' },
  }

  const numericGifa = parseFloat(projectGifa) || 0
  const currentRate = buildingRates[buildingType]
  const currentRegion = regionFactors[region]
  const estimatedTotalCost = Math.round(numericGifa * currentRate.baseRate * currentRegion.factor)

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Takeoff &amp; Cost Calculator</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">Interactive Commercial Tool</span>
            <h1 className="subpage-hero-title">
              UK Construction Takeoff &amp; <span className="text-red">BCIS Cost Benchmark Calculator</span>
            </h1>
            <p className="subpage-hero-desc">
              Estimate your project turnaround timeline and conceptual BCIS cost benchmarks using our interactive estimation tool. When you are ready for a verified, line-item Bill of Quantities, submit your drawings for a confirmed fee proposal within 1–2 hours.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Drawings for Exact Quote →
              </Link>
              <Link to="/trades" className="btn btn-outline-white btn-lg">
                View Trade Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">Instant Turnaround Guide</span>
            <h2 className="section-title">
              Package Turnaround &amp; <span className="text-navy">Pricing Guide</span>
            </h2>
            <p className="section-desc">
              Select your work package, building category, and floor area to review estimated turnaround timelines.
            </p>
          </div>

          <QuickEstimator />
        </div>
      </section>

      {/* Conceptual Regional Cost Benchmark Tool */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-50">
            <span className="section-tag">BCIS Regional Modeling</span>
            <h2 className="section-title">
              Conceptual UK Regional <span className="text-red">Cost Benchmark Tool</span>
            </h2>
            <p className="section-desc">
              Building Cost Information Service (BCIS) location factors adjust baseline national rates according to regional UK labor agreements, haulage distance, and local supply chain indices.
            </p>
          </div>

          <div className="calculator-widget-box">
            <div className="calc-controls-grid">
              <div className="calc-input-group">
                <label>Gross Internal Floor Area (GIFA in m²):</label>
                <input 
                  type="number" 
                  value={projectGifa}
                  onChange={(e) => setProjectGifa(e.target.value)}
                  className="calc-input"
                  min="50"
                  step="50"
                />
              </div>

              <div className="calc-input-group">
                <label>Building / Facility Category:</label>
                <select 
                  value={buildingType} 
                  onChange={(e) => setBuildingType(e.target.value)}
                  className="calc-input"
                >
                  <option value="residential">Single &amp; Multi-Unit Residential</option>
                  <option value="commercial">Commercial Offices &amp; Fit-Out</option>
                  <option value="industrial">Industrial Logistics &amp; Warehouse</option>
                  <option value="institutional">Healthcare, Educational &amp; Public Sector</option>
                </select>
              </div>

              <div className="calc-input-group">
                <label>UK Project Location (BCIS Region):</label>
                <select 
                  value={region} 
                  onChange={(e) => setRegion(e.target.value)}
                  className="calc-input"
                >
                  {Object.entries(regionFactors).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label} (Factor: {val.factor})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="calc-results-panel">
              <div className="calc-result-metric">
                <span className="metric-tag">Indicative Construction Benchmark</span>
                <span className="metric-primary-value">£{estimatedTotalCost.toLocaleString('en-GB')}</span>
                <span className="metric-secondary-info">
                  ~£{Math.round(currentRate.baseRate * currentRegion.factor).toLocaleString('en-GB')}/m² GIFA (Subject to design specs)
                </span>
              </div>

              <div className="calc-breakdown-row">
                <div className="breakdown-stat">
                  <span className="stat-label">BCIS Regional Factor:</span>
                  <span className="stat-value">{currentRegion.factor}x</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-label">Benchmark Trades Wage:</span>
                  <span className="stat-value">{currentRegion.baseLabor}</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-label">Takeoff Turnaround:</span>
                  <span className="stat-value text-red">{currentRate.turnaround}</span>
                </div>
                <div className="breakdown-stat">
                  <span className="stat-label">Standard Protocol:</span>
                  <span className="stat-value">RICS NRM2</span>
                </div>
              </div>

              <div className="calc-cta-bar">
                <p>
                  <strong>Ready for a firm project proposal?</strong> Upload your architectural drawings and specifications for an exact line-item Bill of Quantities quote.
                </p>
                <Link to="/contact" className="btn btn-red btn-md">
                  Submit Plans for Fee Proposal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

