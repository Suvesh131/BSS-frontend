import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Prakash Kumar', role: 'Founder & President', roleHindi: 'संस्थापक एवं अध्यक्ष', image: '/images/prakash.png' },
  { name: 'Manish Tiwari', role: 'Vice President', roleHindi: 'उपाध्यक्ष', image: '/images/manish.png' },
  { name: 'Team Member 3', role: 'Secretary', roleHindi: 'सचिव', image: null },
  { name: 'Team Member 4', role: 'Treasurer', roleHindi: 'कोषाध्यक्ष', image: null },
  { name: 'Team Member 5', role: 'Member', roleHindi: 'सदस्य', image: null },
  { name: 'Team Member 6', role: 'Member', roleHindi: 'सदस्य', image: null },
  { name: 'Team Member 7', role: 'Member', roleHindi: 'सदस्य', image: null },
  { name: 'Team Member 8', role: 'Member', roleHindi: 'सदस्य', image: null },
];

const TeamCard = ({ member }) => (
  <div className="team-card card">
    <div className="team-avatar">
      {member.image ? (
        <img src={member.image} alt={member.name}
          style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--gold)' }} />
      ) : (
        <div style={{ width: '90px', height: '90px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--saffron), var(--maroon))',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="white" width="45" height="45">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
      )}
    </div>
    <h3 className="team-name">{member.name}</h3>
    <p className="team-role">{member.role}</p>
    <p className="team-role-hindi hindi-text">{member.roleHindi}</p>
  </div>
);

const Team = () => (
  <div>
    <div className="page-hero">
      <h1>Our Team</h1>
      <p className="hindi-text">हमारी टीम — कार्यकारिणी समिति</p>
    </div>

    <section className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-title">
          <h2>Meet The Team</h2>
          <p className="subtitle hindi-text">हमारे समर्पित कार्यकर्ता</p>
          <div className="divider"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        <div className="card" style={{ marginTop: '48px', textAlign: 'center',
          background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
          color: 'white', padding: '40px' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Join Our Team</p>
          <p className="hindi-text" style={{ opacity: 0.85, marginBottom: '20px' }}>हमारी टीम में शामिल हों — समाज सेवा में योगदान दें</p>
          <a href="/join" className="btn-primary" style={{ background: 'white', color: 'var(--saffron-dark)' }}>
            Join BSS — सदस्य बनें
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Team;
