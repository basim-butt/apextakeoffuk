import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Submit Drawings & Specs',
      desc: 'Upload your architectural, structural, or MEP drawings via our secure portal. We accept PDF drawing sets, CAD DWG files, and 3D BIM/IFC models.',
    },
    {
      step: '02',
      title: 'Receive Fixed Quote in 1-2 Hours',
      desc: 'Our senior chartered surveyors review your drawings and provide a fixed-price fee proposal with an agreed delivery date and zero obligation.',
    },
    {
      step: '03',
      title: 'Get Tender-Ready BOQs in 24-48h',
      desc: 'Receive your fully editable Excel Bill of Quantities, color-coded Bluebeam markups, and executive bid summary ready for immediate tender submission.',
    },
  ]

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">Simple & Fast Workflow</div>
          <h2 className="section-title">
            Our 3-Step <span className="text-red">Quantity Surveying Process</span>
          </h2>
          <p className="section-desc">
            Designed to seamlessly integrate into your time-critical UK tender cycles.
          </p>
        </div>

        <div className="process-steps-row">
          {steps.map((s) => (
            <div className="process-step-box" key={s.step}>
              <div className="process-step-num">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

