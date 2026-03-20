import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MemberRegister.css';

const GOOGLE_FORM_LINK = 'https://forms.gle/rMy8oVoZbhNBkguD7';

const MemberRegister = () => {
  const [countdown, setCountdown] = useState(5);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(GOOGLE_FORM_LINK, '_blank');
          setRedirected(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="join-page">
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

          {!redirected ? (
            <>
              <p className="join-desc">
                Brahmarshi Seva Sangh ka hissa banen aur samaj seva mein yogdan den.
              </p>
              <p className="join-desc hindi-text">
                ब्रह्मर्षि सेवा संघ का हिस्सा बनें और समाज सेवा में योगदान दें।
              </p>

              {/* Countdown */}
              <div className="join-countdown">
                <div className="countdown-circle">
                  <svg viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,107,0,0.15)" strokeWidth="4"/>
                    <circle cx="30" cy="30" r="26" fill="none" stroke="#FF6B00" strokeWidth="4"
                      strokeDasharray="163" strokeDashoffset={163 - (163 * (5 - countdown) / 5)}
                      strokeLinecap="round" transform="rotate(-90 30 30)"
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <span className="countdown-num">{countdown}</span>
                </div>
                <p className="countdown-text">seconds mein form khulega</p>
                <p className="countdown-text hindi-text">सेकंड में फॉर्म खुलेगा</p>
              </div>

              <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="join-btn-primary">
                Abhi Join Karein — अभी जुड़ें 🙏
              </a>
            </>
          ) : (
            <div className="join-success">
              <div className="success-icon">🎉</div>
              <h3></h3>
              <p className="hindi-text"></p>
              <p>If the form does not open, click below:</p>
              <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="join-btn-primary" style={{ marginTop: '16px' }}>
                Click Here to Open Form 📋
              </a>
            </div>
          )}

          {/* Manual link */}
          <div className="join-manual">
            <p>To open the form manually:</p>
            <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="join-manual-link">
              🔗 Click Here to Open Form
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