import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
  return (
    <div className="subpage-wrapper">
      <section className="subpage-hero">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>
          <div className="subpage-hero-content">
            <span className="subpage-badge">UK GDPR &amp; Commercial Security</span>
            <h1 className="subpage-hero-title">Privacy Policy &amp; Tender Confidentiality</h1>
            <p className="subpage-hero-subtitle">
              How Apex Takeoff UK handles architectural drawings, tender specifications, and contractor commercial data with bank-grade confidentiality and strict non-disclosure under the UK Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="policy-card" style={{
            background: 'var(--white)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '42px 46px',
            boxShadow: '0 4px 20px rgba(11,26,48,0.06)',
            lineHeight: '1.75'
          }}>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '24px' }}>
              <strong>Effective Date:</strong> 1 January 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> November 2026 &nbsp;|&nbsp; <strong>Jurisdiction:</strong> England &amp; Wales (UK GDPR)
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              1. Commitment to Contractor Commercial Confidentiality
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              At <strong>Apex Takeoff UK</strong> ("we", "us", or "our"), safeguarding your competitive bidding information is central to our commercial ethics. We recognize that architectural drawings, structural calculations, subcontractor quotes, tender schedules, and employer documents represent proprietary intellectual property. All submitted plans, specifications, addenda, and project correspondence are handled under strict non-disclosure protocols.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              2. Information We Collect
            </h2>
            <p style={{ color: '#334155', marginBottom: '14px' }}>
              When you submit a quote request, communicate via email, or upload project drawing sets, we collect:
            </p>
            <ul style={{ color: '#334155', paddingLeft: '22px', marginBottom: '18px' }}>
              <li><strong>Contact Information:</strong> Full name, corporate email address, contact telephone number, and company trading name.</li>
              <li><strong>Project Documentation:</strong> Architectural drawings, structural plans, civil engineering layouts, MEP schematics, bills of quantities, geotechnical reports, and tender addenda.</li>
              <li><strong>Commercial Parameters:</strong> Project UK region/postcode, required trade scopes, intended form of contract (JCT, NEC4), and tender return cutoffs.</li>
              <li><strong>Technical Metadata:</strong> IP address, browser type, and diagnostic information collected solely to maintain secure website performance.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              3. Purpose &amp; Lawful Basis of Processing
            </h2>
            <p style={{ color: '#334155', marginBottom: '14px' }}>
              We process your technical and commercial data in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018 for the following legitimate purposes:
            </p>
            <ul style={{ color: '#334155', paddingLeft: '22px', marginBottom: '18px' }}>
              <li>Performing digital quantity takeoffs, cost plans, and Bills of Quantities requested under contract.</li>
              <li>Issuing fee proposals, invoices, and tender delivery schedules.</li>
              <li>Incorporating pre-tender addenda and scope revisions issued by the design team.</li>
              <li>Complying with statutory accounting and professional indemnity record-keeping obligations in the UK.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              4. Strict Non-Disclosure &amp; Zero Third-Party Sharing
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              <strong>We never sell, rent, license, or disclose your project drawings, pricing models, or client lists to any third parties.</strong> Specifically:
            </p>
            <ul style={{ color: '#334155', paddingLeft: '22px', marginBottom: '18px' }}>
              <li>Your tender files are never shared with competing contractors bidding on the same procurement framework.</li>
              <li>Project plans are accessed exclusively by the assigned senior chartered quantity surveyor and peer auditor.</li>
              <li>We gladly sign formal bilateral Non-Disclosure Agreements (NDAs) prior to drawing upload upon client request.</li>
            </ul>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              5. Data Security &amp; Storage
            </h2>
            <p style={{ color: '#334155', marginBottom: '18px' }}>
              All uploaded drawing registers and project workbooks are transferred using 256-bit TLS/SSL encryption and stored on secure UK/EU enterprise cloud servers protected by multi-factor authentication and role-based access control. Working files are archived securely following tender close and retained only in line with RICS professional liability guidelines.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              6. Your Rights Under UK GDPR
            </h2>
            <p style={{ color: '#334155', marginBottom: '14px' }}>
              As a UK data subject, you hold statutory rights including the right to request access to your personal data, rectify inaccuracies, request permanent deletion of archived plans once projects complete, and restrict processing.
            </p>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#0b1a30', marginTop: '28px', marginBottom: '12px' }}>
              7. Contact &amp; Data Protection Officer
            </h2>
            <p style={{ color: '#334155', marginBottom: '10px' }}>
              For any questions regarding this Privacy Policy or to request an NDA execution, please contact our commercial team:
            </p>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px 20px', color: '#1e293b' }}>
              <strong>Apex Takeoff UK — Commercial Enquiries &amp; Compliance</strong><br />
              100 Oxford Street, London, Greater London, W1D 1LL, United Kingdom<br />
              Email: <a href="mailto:info@apextakeoff.uk" style={{ color: '#dc2626', fontWeight: 600 }}>info@apextakeoff.uk</a><br />
              Hours: Monday – Friday, 8:00 AM – 6:00 PM GMT
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
