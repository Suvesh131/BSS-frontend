import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/api/events`)
      .then(r => { setEvents(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const defaultEvents = [
    { title: 'Sarvarn Mahapanchayat 2026', titleHindi: 'सवर्ण महापंचायत 2026', date: '2026-01-15', description: 'Grand gathering of Sanatan families.' },
    { title: 'Chhath Puja 2025', titleHindi: 'छठ पूजा 2025', date: '2025-11-01', description: 'Annual Chhath Puja celebration at Fatehabad.' },
    { title: 'Holi Milan Samaroh', titleHindi: 'होली मिलन समारोह', date: '2025-03-14', description: 'Community Holi celebration.' },
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;

  return (
    <div>
      <div className="page-hero">
        <h1>Events</h1>
        <p className="hindi-text">कार्यक्रम</p>
      </div>
      <section className="section-padding">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-title">
            <h2>Our Events</h2>
            <p className="subtitle hindi-text">हमारे कार्यक्रम</p>
            <div className="divider"></div>
          </div>
          {loading ? <p style={{ textAlign: 'center' }}>Loading...</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {displayEvents.map((ev, i) => (
                <div key={i} className="card">
                  {ev.image && <img src={ev.image} alt={ev.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '16px' }} />}
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: '600' }}>
                    📅 {ev.date ? new Date(ev.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                  </span>
                  <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', margin: '8px 0 4px', fontSize: '1.1rem' }}>{ev.title}</h3>
                  {ev.titleHindi && <p className="hindi-text" style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '8px' }}>{ev.titleHindi}</p>}
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '0.9rem' }}>{ev.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
