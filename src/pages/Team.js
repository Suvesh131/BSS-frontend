import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Prakash Kumar',  role: 'Founder & President',  roleHindi: 'संस्थापक एवं अध्यक्ष',  image: '/images/prakash.png' },
  { name: 'Manish Tiwari',  role: 'Vice President',        roleHindi: 'उपाध्यक्ष',             image: '/images/manish.png' },
  { name: 'Team Member 3',  role: 'General Secretary',     roleHindi: 'महासचिव',               image: '/images/member3.png' },
  { name: 'Team Member 4',  role: 'Treasurer',             roleHindi: 'कोषाध्यक्ष',            image: '/images/member4.png' },
  { name: 'Team Member 5',  role: 'Joint Secretary',       roleHindi: 'संयुक्त सचिव',          image: '/images/member5.png' },
  { name: 'Team Member 6',  role: 'Media In-charge',       roleHindi: 'मीडिया प्रभारी',        image: '/images/member6.png' },
  { name: 'Anshu Singh',  role: 'Youth Wing Head',       roleHindi: 'युवा प्रमुख',           image: '/images/yuva.jpeg' },
  { name: 'Team Member 8',  role: 'Legal Advisor',         roleHindi: 'कानूनी सलाहकार',        image: '/images/member8.png' },
  { name: 'Team Member 9',  role: 'Cultural Head',         roleHindi: 'सांस्कृतिक प्रमुख',     image: '/images/member9.png' },
  { name: 'Team Member 10', role: 'Social Media Head',     roleHindi: 'सोशल मीडिया प्रमुख',    image: '/images/member10.png' },
  { name: 'Team Member 11', role: 'State Coordinator',     roleHindi: 'राज्य समन्वयक',         image: '/images/member11.png' },
  { name: 'Team Member 12', role: 'Executive Member',      roleHindi: 'कार्यकारी सदस्य',       image: '/images/member12.png' },
  { name: 'Team Member 13', role: 'Executive Member',      roleHindi: 'कार्यकारी सदस्य',       image: '/images/member13.png' },
  { name: 'Team Member 14', role: 'Executive Member',      roleHindi: 'कार्यकारी सदस्य',       image: '/images/member14.png' },
  { name: 'Team Member 15', role: 'Executive Member',      roleHindi: 'कार्यकारी सदस्य',       image: '/images/member15.png' },
  { name: 'Team Member 16', role: 'Executive Member',      roleHindi: 'कार्यकारी सदस्य',       image: '/images/member16.png' },
];

const TeamCard = ({ member }) => (
  <div className="team-card card">
    <div className="team-img-wrap">
      <img
        src={member.image}
        alt={member.name}
        className="team-img"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.classList.add('no-img');
        }}
      />
      <div className="team-img-placeholder">
        <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
        </svg>
      </div>
    </div>
    <div className="team-card-body">
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-role-hindi hindi-text">{member.roleHindi}</p>
    </div>
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

        <div className="card" style={{
          marginTop: '48px', textAlign: 'center',
          background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
          color: 'white', padding: '40px'
        }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Join Our Team</p>
          <p className="hindi-text" style={{ opacity: 0.85, marginBottom: '20px' }}>
            हमारी टीम में शामिल हों — समाज सेवा में योगदान दें
          </p>
          <a href="/join" className="btn-primary" style={{ background: 'white', color: 'var(--saffron-dark)' }}>
            Join BSS — सदस्य बनें
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Team;