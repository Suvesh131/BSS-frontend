import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Team.css';

const teamMembers = [
  {
    name: 'प्रकाश कुमार तिवारी',
    role: 'Founder & President',
    roleHindi: 'संस्थापक सह अध्यक्ष',
    image: '/images/prakash1.jpg',
    birthday: '10 अक्टूबर',
    address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107',
    contact: 'brahmarshisevasangh@gmail.com'
  },
  {
    name: 'अंशु कुमार सिंह',
    role: 'Youth Wing Head',
    roleHindi: 'युवा प्रमुख',
    image: '/images/yuva.jpeg',
    birthday: '04 नवंबर',
    address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107',
    contact: 'brahmarshisevasangh@gmail.com'
  },
  {
    name: 'गौरव कुमार सिंह',
    role: 'Executive Member',
    roleHindi: 'कार्यकारी सदस्य',
    image: '/images/karyakari.jpg',
    birthday: '01 जनवरी',
    address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107',
    contact: 'उपलब्ध नहीं (N/A)'
  },
  {
    name: 'बिट्टू कुमार पाण्डेय',
    role: 'Executive Member',
    roleHindi: 'कार्यकारी सदस्य',
    image: '/images/bittu.jpeg',
    birthday: '09 सितंबर',
    address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107',
    contact: 'उपलब्ध नहीं (N/A)'
  },
  {
    name: 'आदित्य कुमार',
    role: 'Executive Member',
    roleHindi: 'कार्यकारी सदस्य',
    image: '/images/aditya.png',
    birthday: '09 सितंबर',
    address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107',
    contact: 'उपलब्ध नहीं (N/A)'
  },
  { name: 'Team Member 6',  role: 'Vice President',    roleHindi: 'उपाध्यक्ष',          image: '/images/member3.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 7',  role: 'Treasurer',         roleHindi: 'कोषाध्यक्ष',         image: '/images/member4.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 8',  role: 'Joint Secretary',   roleHindi: 'संयुक्त सचिव',       image: '/images/member5.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 9',  role: 'Media In-charge',   roleHindi: 'मीडिया प्रभारी',     image: '/images/member6.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 10', role: 'General Secretary', roleHindi: 'महासचिव',            image: '/images/member7.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 11', role: 'Legal Advisor',     roleHindi: 'कानूनी सलाहकार',     image: '/images/member8.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 12', role: 'Cultural Head',     roleHindi: 'सांस्कृतिक प्रमुख',  image: '/images/member9.png',  birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 13', role: 'Social Media Head', roleHindi: 'सोशल मीडिया प्रमुख', image: '/images/member10.png', birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 14', role: 'State Coordinator', roleHindi: 'राज्य समन्वयक',      image: '/images/member11.png', birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 15', role: 'Executive Member',  roleHindi: 'कार्यकारी सदस्य',    image: '/images/member12.png', birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
  { name: 'Team Member 16', role: 'Executive Member',  roleHindi: 'कार्यकारी सदस्य',    image: '/images/member13.png', birthday: 'N/A', address: 'फतेहाबाद, पारू, मुजफ्फरपुर, बिहार – 843107', contact: 'उपलब्ध नहीं (N/A)' },
];

const TeamCard = ({ member, onClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="team-card card" onClick={() => onClick(member)}>
      <div className="team-img-wrap">
        {!imgLoaded && (
          <div className="team-img-placeholder">
            <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
        <img
          src={member.image}
          alt={member.name}
          className="team-img"
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
        <div className="team-img-overlay">
          <span>Detail dekhein</span>
        </div>
      </div>
      <div className="team-card-body">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <p className="team-role-hindi hindi-text">{member.roleHindi}</p>
      </div>
    </div>
  );
};

const TeamModal = ({ member, closing, onClose }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!member) return null;

  return (
    <div
      className={`team-modal-overlay ${closing ? 'closing' : ''}`}
      onClick={onClose}
    >
      <div
        className={`team-modal-flip ${closing ? 'flip-out' : 'flip-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="team-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="team-modal-img-wrap">
          {!imgLoaded && (
            <div className="team-modal-spinner">
              <div className="spinner-circle"></div>
            </div>
          )}
          <img
            src={member.image}
            alt={member.name}
            className="team-modal-img"
            onLoad={() => setImgLoaded(true)}
            onError={(e) => {
              e.target.style.display = 'none';
              setImgLoaded(true);
            }}
            style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
          />
        </div>

        <div className="team-modal-body">
          <h3 className="team-modal-name hindi-text">{member.name}</h3>
          <p className="team-modal-role">{member.role}</p>
          <p className="team-modal-role-hindi hindi-text">{member.roleHindi}</p>
          <div className="team-modal-divider"></div>

          <div className="team-modal-detail-row">
            <span className="team-modal-label hindi-text">जन्म दिवस:</span>
            <span className="team-modal-value hindi-text">{member.birthday}</span>
          </div>
          <div className="team-modal-detail-row">
            <span className="team-modal-label hindi-text">पता:</span>
            <span className="team-modal-value hindi-text">{member.address}</span>
          </div>
          <div className="team-modal-detail-row">
            <span className="team-modal-label hindi-text">संपर्क सूत्र:</span>
            <span className="team-modal-value">{member.contact}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedMember(null);
      setClosing(false);
    }, 350); // animation duration se match karein
  };

  return (
    <div>
      <Helmet>
        <title>Our Team | Brahmarshi Seva Sangh</title>
        <meta
          name="description"
          content="Meet the dedicated team and executive committee of Brahmarshi Seva Sangh (BSS) - founders, coordinators, and members working for social service in Fatehabad, Bihar."
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/team" />
      </Helmet>
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
              <TeamCard key={i} member={member} onClick={setSelectedMember} />
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

      {selectedMember && (
        <TeamModal member={selectedMember} closing={closing} onClose={handleClose} />
      )}
    </div>
  );
};

export default Team;