import React from 'react';
import { Helmet } from 'react-helmet-async';

const Complaint = () => (
  <div>
    <Helmet>
      <title>Complaint | Brahmarshi Seva Sangh</title>
      <meta 
        name="description" 
        content="File a complaint with Brahmarshi Seva Sangh (BSS). Our team reviews all complaints confidentially and responds within 3-5 working days." 
      />
      <link rel="canonical" href="https://www.brahmarshisevasangh.in/complaint" />
    </Helmet>

    <div className="page-hero">
      <h1>Complaint</h1>
      <p className="hindi-text">शिकायत दर्ज करें</p>
    </div>

    <section className="section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <div className="section-title">
          <h2>Submit a Complaint</h2>
          <p className="subtitle hindi-text">अपनी शिकायत यहाँ दर्ज करें</p>
          <div className="divider"></div>
        </div>

        {/* Info Card */}
        <div className="card" style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>📋</span>
          <div>
            <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', marginBottom: '8px', fontSize: '1rem' }}>
              How to File a Complaint
            </h3>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '0.92rem' }}>
              Fill out the form below with your details and complaint. Our team will review your complaint and respond within 3–5 working days. All complaints are treated with strict confidentiality.
            </p>
            <p className="hindi-text" style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginTop: '8px', lineHeight: '1.8' }}>
              नीचे दिए गए फॉर्म में अपनी जानकारी और शिकायत भरें। हमारी टीम 3–5 कार्य दिवसों में आपकी शिकायत की समीक्षा करेगी।
            </p>
          </div>
        </div>

        {/* Google Form Embed */}
        <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '16px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
            padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '10px'
          }}>
            <span style={{ fontSize: '1.3rem' }}>📝</span>
            <span style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>
              Complaint Form / शिकायत फॉर्म
            </span>
          </div>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeel6bL7_hb5Ac9bHY0eElLGe8adlti_1PZvU0qAFdEgnkl-g/viewform?embedded=true"
            width="100%"
            frameBorder="0"
            title="Complaint Form"
            style={{ display: 'block', height: '500px' }}
          >
            Loading…
          </iframe>

          <div style={{ padding: '20px', textAlign: 'center', background: 'var(--cream-dark)' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '12px' }}>
              Form theek se nahi khul raha?
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeel6bL7_hb5Ac9bHY0eElLGe8adlti_1PZvU0qAFdEgnkl-g/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.92rem',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '50px',
                boxShadow: '0 4px 16px rgba(180,60,0,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(180,60,0,0.45)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(180,60,0,0.35)';
              }}
            >
              📋 Open Full Form in New Tab ↗
            </a>
          </div>
        </div>

        {/* Contact fallback */}
        <div className="card" style={{ marginTop: '24px', textAlign: 'center', background: 'var(--cream-dark)' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Don't see the form? Email directly to:
          </p>
          <a href="mailto:brahmarshisevasangh@gmail.com"
            style={{ color: 'var(--saffron-dark)', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none' }}>
            brahmarshisevasangh@gmail.com
          </a>
        </div>

      </div>
    </section>
  </div>
);

export default Complaint;