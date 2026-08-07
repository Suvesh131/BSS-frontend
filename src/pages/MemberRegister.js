import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './MemberRegister.css';

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/DHHmNsSDEB4Gr7Eiaz1kO9';

const MemberRegister = () => {
  return (
    <div className="join-page">
      <Helmet>
        <title>Join Us | Brahmarshi Seva Sangh</title>
        <meta 
          name="description" 
          content="Become a member of Brahmarshi Seva Sangh (BSS) and contribute to social service, cultural events, and community welfare in Fatehabad, Bihar." 
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/join" />
      </Helmet>

      {/* Background particles */}
      <div className="join-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="join-particle" style={{ '--delay': `${i * 0.4}s`, '--pos': `${10 + i * 11}%` }}>✦</span>
        ))}
      </div>

      <div className="join-container">
        {/* Logo */}
        <div className="join-logo-wrap">
          <img src="/images/logo.jpeg" alt="BSS Logo" className="join-logo" />
          <div className="join-logo-ring"></div>
        </div>

        {/* Org name */}
        <h2 className="join-org-name hindi-text">ब्रह्मर्षि सेवा संघ</h2>
        <p className="join-org-eng">Brahmarshi Seva Sangh</p>

        {/* Divider */}
        <div className="join-divider">
          <span></span>
          <span className="join-divider-icon hindi-text">🙏</span>
          <span></span>
        </div>

        {/* Main card */}
        <div className="join-card">
          <div className="join-card-icon">📋</div>
          <h1 className="join-title">Join BSS</h1>
          <p className="join-title-hindi hindi-text">सदस्यता पंजीकरण</p>

          <p className="join-desc">
            Brahmarshi Seva Sangh ka hissa banen aur samaj seva mein yogdan den.
          </p>
          <p className="join-desc hindi-text">
            ब्रह्मर्षि सेवा संघ का हिस्सा बनें और समाज सेवा में योगदान दें।
          </p>

          <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="join-btn-primary">
            💬 Join WhatsApp Group — व्हाट्सएप ग्रुप जॉइन करें
          </a>

          {/* Manual link */}
          <div className="join-manual">
            <p>Registration ke liye WhatsApp group join karein:</p>
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="join-manual-link"
            >
              🔗 Click Here to Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Benefits */}
        <div className="join-benefits">
          {[
            { icon: '🪪', title: 'Member ID', hindi: 'सदस्य आईडी मिलेगी' },
            { icon: '🎭', title: 'Events Access', hindi: 'कार्यक्रमों में भागीदारी' },
            { icon: '🤝', title: 'Community', hindi: 'समाज से जुड़ाव' },
            { icon: '🏆', title: 'Recognition', hindi: 'समाज में सम्मान' },
          ].map((b, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <p className="benefit-title">{b.title}</p>
              <p className="benefit-hindi hindi-text">{b.hindi}</p>
            </div>
          ))}
        </div>

        <Link to="/" className="join-back">← Back to Home / होम पर जाएं</Link>
      </div>
    </div>
  );
};

export default MemberRegister;