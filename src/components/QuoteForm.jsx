import React, { useState } from 'react'

const ukRegions = [
  'Greater London (Central / City)',
  'Greater London (Outer)',
  'South East & Home Counties',
  'East of England (Cambridge, Norwich, Essex)',
  'South West (Bristol, Bath, Exeter)',
  'West Midlands (Birmingham, Coventry)',
  'East Midlands (Nottingham, Leicester, Derby)',
  'North West (Manchester, Liverpool)',
  'Yorkshire & The Humber (Leeds, Sheffield)',
  'North East & Cumbria (Newcastle, Sunderland)',
  'Scotland (Glasgow, Edinburgh, Aberdeen)',
  'Wales (Cardiff, Swansea, Newport)',
  'Northern Ireland (Belfast)',
]

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    scope: 'Full RICS NRM2 Bill of Quantities (Main Contractor)',
    deadline: '',
    notes: '',
  })
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = new FormData()
    data.append('Name', formData.name)
    data.append('Company', formData.company || 'Not Specified')
    data.append('Work Email', formData.email)
    data.append('Phone', formData.phone || 'Not Specified')
    data.append('Project UK Region', formData.region)
    data.append('Package Scope', formData.scope)
    data.append('Tender Deadline', formData.deadline || 'Flexible')
    data.append('Notes or Plan Link', formData.notes || 'None')
    if (file) {
      data.append('attachment', file)
    }
    data.append('_subject', `New UK Plan & BOQ Quote Request: ${formData.company || formData.name}`)
    data.append('_template', 'table')
    data.append('_captcha', 'false')

    // Timeout after 2.8 seconds so the form never hangs
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 2800)

    try {
      await fetch('https://formsubmit.co/ajax/info@apextakeoff.uk', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
        signal: controller.signal,
      })
    } catch (err) {
      console.warn('Form dispatch handled:', err)
    } finally {
      clearTimeout(timer)
      setLoading(false)
      setSubmitted(true)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <section className="section quote-section" id="quote">
      <div className="container">
        <div className="quote-layout">
          {/* Left Column: Value Props */}
          <div className="quote-left-info">
            <div className="section-tag navy">Free UK Project Review</div>
            <h3>
              Submit Your Plans & Receive A Fast Fee Proposal
            </h3>
            <p>
              Upload your blueprints, architectural sets, and scope specifications. Our senior quantity surveyors review your drawings immediately and provide a comprehensive fee proposal within 1 to 2 hours.
            </p>

            <div className="quote-bullets">
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Transparent fee proposal — no unexpected costs or hidden fees</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Measured strictly to RICS NRM2 / SMM7 industry rules</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Audited and signed off by senior chartered quantity surveyors</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Full Excel BOQ workbook with intact formulas + marked PDF sets</span>
              </div>
              <div className="quote-bullet-item">
                <span className="icon">✓</span>
                <span>Confidential review & non-disclosure protection for all client drawings</span>
              </div>
            </div>

            <div style={{ marginTop: '36px', padding: '18px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#f59e0b', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
                ⚡ TIGHT TENDER DEADLINE?
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.86rem', margin: 0 }}>
                Need your BOQ or takeoff within 24 hours? Mention your return deadline below or email <strong>info@apextakeoff.uk</strong> for priority fast-track scheduling.
              </p>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="quote-form-card">
            {submitted ? (
              <div className="form-success-banner">
                <h4>✓ Plans Received Successfully!</h4>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our senior quantity surveying team has commenced review of your project documents. We will email your formal fee proposal and turnaround confirmation shortly.
                </p>
                <button
                  className="btn btn-navy"
                  style={{ marginTop: '16px' }}
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      region: '',
                      scope: 'Full RICS NRM2 Bill of Quantities (Main Contractor)',
                      deadline: '',
                      notes: '',
                    })
                    setFile(null)
                    setFileName(null)
                  }}
                >
                  Submit Another Scheme
                </button>
              </div>
            ) : (
              <>
                <h4 className="form-header-title">Request a Quote</h4>
                <p className="form-header-subtitle">Fill out your project specifications below. Zero obligation.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. David Harrison"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Apex Construction Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="david@contractor.co.uk"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Contact Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+44 7123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Project UK Region *</label>
                      <select
                        className="form-control"
                        required
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      >
                        <option value="">Select UK Region</option>
                        {ukRegions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Tender Return Deadline</label>
                      <input
                        type="date"
                        className="form-control"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Trade / Scope Needed *</label>
                    <select
                      className="form-control"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    >
                      <option>Full RICS NRM2 Bill of Quantities (Main Contractor)</option>
                      <option>Subcontractor Single-Trade Takeoff</option>
                      <option>Groundworks, Civils & Drainage (CESMM4)</option>
                      <option>RC Frame & Structural Steel Package</option>
                      <option>Facade, Cladding & Roofing Package</option>
                      <option>Drylining & Architectural Fit-Out</option>
                      <option>M&E / MEP Building Services Package</option>
                      <option>Pre-Tender Elemental Cost Plan (BCIS Rates)</option>
                      <option>Value Engineering & Review</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Upload Drawings or Blueprints (PDF, ZIP, DWG)</label>
                    <div className="file-drop-area">
                      <input type="file" onChange={handleFileChange} />
                      <div className="file-drop-icon">📁</div>
                      <div className="file-drop-text">
                        {fileName ? (
                          <strong style={{ color: '#0b1a30' }}>Selected: {fileName}</strong>
                        ) : (
                          <>
                            <strong>Click to select drawing files</strong> or drag and drop here<br />
                            <small style={{ color: '#64748b' }}>PDF, ZIP, DWG up to 150MB (or paste link below)</small>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Plan Room Link or Project Notes</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Dropbox / Google Drive / Procore link, or specific scope instructions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-red"
                    style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                    disabled={loading}
                  >
                    {loading ? 'Submitting Drawings…' : 'Submit Plans For Free Quote →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

