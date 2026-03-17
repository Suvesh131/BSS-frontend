// Services.js
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { icon: '🕉️', title: 'Religious Events', hindi: 'धार्मिक आयोजन', desc: 'Organizing Puja, Havan, and cultural ceremonies for the Sanatan community.' },
  { icon: '📚', title: 'Education Support', hindi: 'शिक्षा सहायता', desc: 'Scholarships, coaching, and educational programs for deserving youth.' },
  { icon: '🤝', title: 'Financial Assistance', hindi: 'आर्थिक सहायता', desc: 'Supporting families in need with financial aid and resources.' },
  { icon: '👩‍👧', title: 'Women Empowerment', hindi: 'महिला सशक्तिकरण', desc: 'Programs aimed at the empowerment and development of women.' },
  { icon: '🌿', title: 'Community Welfare', hindi: 'समाज कल्याण', desc: 'Public welfare activities for the betterment of the community.' },
  { icon: '🎓', title: 'Youth Development', hindi: 'युवा विकास', desc: 'Personality development and character building programs for youth.' },
];

const Services = () => (
  <div>
    <div className="page-hero">
      <h1>Our Services</h1>
      <p className="hindi-text">हमारी सेवाएं</p>
    </div>
    <section className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-title">
          <h2>What We Do</h2>
          <p className="subtitle hindi-text">हम क्या करते हैं</p>
          <div className="divider"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.8rem', display: 'block', marginBottom: '12px' }}>{s.icon}</span>
              <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', fontSize: '1.1rem', marginBottom: '4px' }}>{s.title}</h3>
              <p className="hindi-text" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '12px' }}>{s.hindi}</p>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '0.9rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/join" className="btn-primary">Join BSS — सदस्य बनें</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
