import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

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
    {
      title: 'Sarvarn Mahapanchayat 2026',
      titleHindi: 'सवर्ण महापंचायत 2026',
      lastUpdated: '2026-01-15T10:00:00',
      description: 'Grand gathering of Sanatan families.'
    },
    {
      title: 'BSS Virtual Meeting Room',
      titleHindi: 'ऑनलाइन बैठक',
      lastUpdated: '2026-08-02T19:00:00',
      description: 'Monthly online meeting for committee members to discuss upcoming plans.',
      isOnline: true,
      meetingLink: 'https://meet.google.com/YOUR-LINK-HERE'
    },
    {
      title: 'Chhath Puja 2025',
      titleHindi: 'छठ पूजा 2025',
      lastUpdated: '2025-11-01T06:00:00',
      description: 'Annual Chhath Puja celebration at Fatehabad.'
    },
    {
      title: 'Holi Milan Samaroh',
      titleHindi: 'होली मिलन समारोह',
      lastUpdated: '2025-03-14T11:00:00',
      description: 'Community Holi celebration.'
    },
  ];

  const rawEvents = events.length > 0 ? events : defaultEvents;

  const displayEvents = [...rawEvents].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

  return (
    <div>
      <Helmet>
        <title>Events | Brahmarshi Seva Sangh</title>
        <meta
          name="description"
          content="Check upcoming and past events organized by Brahmarshi Seva Sangh - Chhath Puja, Holi Milan, Mahapanchayat and other community gatherings in Fatehabad, Bihar."
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/" />
      </Helmet>
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
                  {ev.image && (
                    <img
                      src={ev.image}
                      alt={ev.title}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '16px' }}
                    />
                  )}
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: '600' }}>
                    📅 {ev.lastUpdated
                      ? new Date(ev.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                      : ''}
                    {ev.lastUpdated && (
                      <>
                        {' • '}
                        {new Date(ev.lastUpdated).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}
                      </>
                    )}
                  </span>
                  <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', margin: '8px 0 4px', fontSize: '1.1rem' }}>
                    {ev.title}
                  </h3>
                  {ev.titleHindi && (
                    <p className="hindi-text" style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '8px' }}>
                      {ev.titleHindi}
                    </p>
                  )}
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                    {ev.description}
                  </p>
                  {ev.isOnline && ev.meetingLink && (
                    <a
                      href={ev.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '14px',
                        padding: '10px 22px',
                        background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))',
                        color: '#fff',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      🎥 Join Meeting
                      {ev.lastUpdated && (
                        <> — {new Date(ev.lastUpdated).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}</>
                      )}
                    </a>
                  )}
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