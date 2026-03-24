import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/events`).then(r => setEvents(r.data.slice(0, 3))).catch(() => {});
  }, []);
  const team = [
  { name: 'Prakash Kumar', role: 'Founder & President', roleHindi: 'संस्थापक एवं अध्यक्ष', image: '/images/prakash.png' },
  { name: 'Manish Tiwari', role: 'Vice President', roleHindi: 'उपाध्यक्ष', image: '/images/manish.png' },
  { name: 'Team Member 3', role: 'General Secretary', roleHindi: 'महासचिव', image: null },
  { name: 'Team Member 4', role: 'Treasurer', roleHindi: 'कोषाध्यक्ष', image: null },
  { name: 'Team Member 5', role: 'Joint Secretary', roleHindi: 'संयुक्त सचिव', image: null },
  { name: 'Team Member 6', role: 'Media In-charge', roleHindi: 'सदमीडिया प्रभारी', image: null },
  { name: 'Anshu Singh', role: 'Youth Wing Head', roleHindi: 'युवा प्रमुख', image: '/images/yuva.jpeg' },
  { name: 'Team Member 8', role: 'Legal Advisor', roleHindi: 'कानूनी सलाहकार', image: null },
];

  

  const services = [
    { icon: '🕉️', title: 'Religious Events', hindi: 'धार्मिक आयोजन', desc: 'Puja, Havan, and cultural ceremonies organized for the community.' },
    { icon: '📚', title: 'Education Support', hindi: 'शिक्षा सहायता', desc: 'Scholarships and educational programs for deserving youth.' },
    { icon: '🤝', title: 'Social Welfare', hindi: 'समाज कल्याण', desc: 'Financial assistance and support for families in need.' },
    { icon: '👥', title: 'Community Building', hindi: 'समुदाय निर्माण', desc: 'Bringing Sanatan families together for collective growth.' },
  ];

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src="/images/logo.jpeg" alt="Logo" className="hero-logo-img" />
          </div>
          <h1 className="hero-title hindi-text">ब्रह्मर्षि सेवा संघ</h1>
          <p className="hero-eng">Brahmarshi Seva Sangh</p>
          <p className="hero-place hindi-text">फतेहाबाद, बिहार | समाज सेवा</p>
          <p className="hero-desc">
            A non-governmental charitable organization uniting Sanatan families<br />
            for public welfare since 2021 — Fatehabad, Bihar
          </p>
          <div className="hero-btns">
            <Link to="/join" className="btn-primary">सदस्य बनें — Join Now</Link>
            <Link to="/about" className="btn-secondary">और जानें — Know More</Link>
          </div>
        </div>
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="particle" style={{ '--delay': `${i * 0.6}s`, '--pos': `${8 + i * 9}%` }}>✦</span>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="announcement-bar">
  <span className="announce-label">
    <span className="hindi-text">🔔 सूचना:</span>
  </span>

  <div className="marquee">
    <div className="marquee-inner">

      <span>
        ब्रह्मर्षि सेवा संघ में आपका स्वागत है | 
        सेवा, न्याय और ईमानदारी हमारा संकल्प | 
        गरीबों की सहायता, भ्रष्टाचार के खिलाफ आवाज़ | 
        समाज सेवा ही हमारा धर्म | 
        युवा शक्ति – समाज की सच्ची ताकत | 
        न्याय, सेवा और पारदर्शिता की ओर | 
        सदस्य बनने के लिए रजिस्टर करें | 
        नए सदस्यों का हार्दिक स्वागत है 🙏
      </span>

      <span aria-hidden="true">
        ब्रह्मर्षि सेवा संघ में आपका स्वागत है | 
        सेवा, न्याय और ईमानदारी हमारा संकल्प | 
        गरीबों की सहायता, भ्रष्टाचार के खिलाफ आवाज़ | 
        समाज सेवा ही हमारा धर्म | 
        युवा शक्ति – समाज की सच्ची ताकत | 
        न्याय, सेवा और पारदर्शिता की ओर | 
        सदस्य बनने के लिए रजिस्टर करें | 
        नए सदस्यों का हार्दिक स्वागत है 🙏
      </span>

    </div>
  </div>
</div>

      {/* ── STATS — with counter animation ── */}
      <section className="stats-section">
        <div className="stats-grid reveal-stagger">
          {[
            { num: 5, suffix: '+', label: 'Years of Service', hindi: 'सेवा के वर्ष' },
            { num: 50, suffix: '+', label: 'Members', hindi: 'सदस्य' },
            { num: 10, suffix: '+', label: 'Events', hindi: 'कार्यक्रम' },
            { num: 30, suffix: '+', label: 'Families Helped', hindi: 'परिवारों की मदद' },
          ].map((s, i) => (
            <div key={i} className="stat-item reveal">
              <span className="stat-num" data-count={s.num} data-suffix={s.suffix}>{s.num}{s.suffix}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-hindi hindi-text">{s.hindi}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding about-home">
        <div className="about-grid">
          <div className="about-visual reveal reveal-left">
            <div className="about-logo-card">
              <img src="/images/logo.jpeg" alt="Brahmarshi Seva Sanstha" className="about-logo-big" />
              <div className="about-founded">
                <span>Founded / स्थापित</span>
                <strong>2021</strong>
                <span>Fatehabad, Bihar</span>
              </div>
            </div>
          </div>
          <div className="about-content reveal reveal-right">
            <div className="section-title" style={{ textAlign: 'left' }}>
              <h2>About Us</h2>
              <p className="subtitle hindi-text">हमारे बारे में</p>
              <div className="divider" style={{ margin: '16px 0' }}></div>
            </div>
            <p><strong>Brahmarshi Seva Sangh</strong> is a non-governmental charitable organization founded in 2021 in Fatehabad, Bihar by Prakash Kumar and his associates.</p>
            <p className="hindi-text" style={{ margin: '12px 0', fontSize: '0.95rem', lineHeight: '1.9', color: 'var(--text-light)' }}>
              यह संस्था सनातन परिवारों को एकजुट करने और जन कल्याण के लिए समर्पित है।
            </p>
            <div className="about-actions">
              <Link to="/about" className="btn-primary">Read More</Link>
              <Link to="/join" className="btn-secondary">Join BSS</Link>
              <a 
                href="https://sites.google.com/view/brahmarshisevasangh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                2.0 BSS Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: 'var(--cream-dark)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-title reveal">
            <h2>Our Services</h2>
            <p className="subtitle hindi-text">हमारी सेवाएं</p>
            <div className="divider"></div>
          </div>
          <div className="services-grid reveal-stagger">
            {services.map((s, i) => (
              <div key={i} className="service-card card reveal">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p className="hindi-text service-hindi">{s.hindi}</p>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/services" className="btn-secondary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      {events.length > 0 && (
        <section className="section-padding">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section-title reveal">
              <h2>Upcoming Events</h2>
              <p className="subtitle hindi-text">आगामी कार्यक्रम</p>
              <div className="divider"></div>
            </div>
            <div className="events-grid reveal-stagger">
              {events.map((ev, i) => (
                <div key={i} className="event-card card reveal">
                  {ev.image && <img src={ev.image} alt={ev.title} />}
                  <div className="event-body">
                    <span className="event-date">{new Date(ev.date).toLocaleDateString('hi-IN')}</span>
                    <h3>{ev.title}</h3>
                    {ev.titleHindi && <p className="hindi-text">{ev.titleHindi}</p>}
                    <p>{ev.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }} className="reveal">
              <Link to="/events" className="btn-secondary">All Events →</Link>
            </div>
          </div>
        </section>
      )}

      {/* ── TEAM ── */}
      <section className="team-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <div className="section-title reveal">
            <h2>Our Team</h2>
            <p className="subtitle hindi-text">हमारी टीम — कार्यकारिणी</p>
            <div className="divider"></div>
          </div>
          <div className="team-grid reveal-stagger">
            {team.slice(0, 8).map((member, i) => (
              <div key={i} className="team-card card reveal reveal-scale">
                <div className="team-avatar">
                  {member.image ? (
                    <img src={member.image} alt={member.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gold)' }} />
                  ) : (
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--saffron), var(--maroon))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg viewBox="0 0 24 24" fill="white" width="40" height="40"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    </div>
                  )}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-role-hindi hindi-text">{member.roleHindi}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/team" className="btn-secondary">View Full Team →</Link>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="donate-cta">
        <div className="donate-cta-content reveal">
          <img src="/images/logo.jpeg" alt="logo" style={{ width:'80px', height:'80px', borderRadius:'50%', border:'3px solid var(--gold)', marginBottom:'16px' }} />
          <h2>Support Our Mission</h2>
          <p className="hindi-text">हमारे मिशन को समर्थन दें — समाज सेवा में सहयोग करें</p>
          <p style={{ marginTop: '8px' }}>Your donation helps us serve the community and organize cultural events.</p>
          <Link to="/donate" className="btn-primary" style={{ marginTop: '24px' }}>Donate Now — अभी दान करें</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;