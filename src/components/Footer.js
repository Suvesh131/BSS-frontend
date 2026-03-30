import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const socialLinks = {
    facebook:  'https://facebook.com/brahmarshisevasangh',
    instagram: 'https://instagram.com/brahmarshisevasangh',
    twitter:   'https://twitter.com/brahmarshisevasangh',
    youtube:   'https://youtube.com/@brahmarshisevasangh',
    whatsapp:  'https://whatsapp.com/channel/0029VbB45oWCHDyh3ZTecP3q',
    threads:   'https://www.threads.com/@brahmarshisevasangh',
  };

  return (
    <footer className="footer">

      {/* Top decorative bar */}
      <div className="footer-topbar">
        <div className="footer-topbar-inner">
          <span className="footer-om hindi-text">ॐ</span>
          <span className="footer-topbar-text hindi-text">सेवा परमो धर्म</span>
          <span className="footer-om hindi-text">ॐ</span>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src="/images/logo.jpeg" alt="Brahmarshi Seva Sangh" className="footer-logo" />
              <div className="footer-logo-glow"></div>
            </div>
            <h3 className="hindi-text">ब्रह्मर्षि सेवा संघ</h3>
            <p className="footer-eng-name">Brahmarshi Seva Sangh</p>
            <p className="footer-tagline hindi-text">"सेवा, न्याय और ईमानदारी"</p>
            <p className="footer-desc">
              A non-governmental charitable organization founded in 2021 in Fatehabad, Bihar.
              Uniting Sanatan families for public welfare.
            </p>
            <div className="social-links">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-btn s-facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-btn s-instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="17" height="17"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-btn s-twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-btn s-youtube" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn s-whatsapp" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a href={socialLinks.threads} target="_blank" rel="noopener noreferrer" className="social-btn s-threads" aria-label="Threads">
                <svg viewBox="0 0 192 192" fill="currentColor" width="17" height="17">
                  <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.318-11.319 11.258-24.925 16.135-45.488 16.286-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.204.195 97.07 0h-.113C68.882.195 47.292 9.643 32.788 28.054 19.882 44.511 13.2 67.215 13 96c.2 28.785 6.882 51.489 19.788 67.946C47.292 182.358 68.882 191.805 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.145 18.963-18.91 18.392-42.571 12.152-57.098-4.494-10.482-13.083-19.079-24.733-24.769zm-41.352 43.835c-10.324.564-21.07-4.054-21.606-13.829-.412-7.727 5.478-16.335 23.23-17.366 2.032-.117 4.031-.174 5.993-.174 6.146 0 11.916.591 17.19 1.739-1.956 24.377-14.484 28.945-24.807 29.63z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links <span className="hindi-text">/ त्वरित लिंक</span></h4>
            <ul className="footer-nav">
              <li><Link to="/">🏠 Home</Link></li>
              <li><Link to="/about">ℹ️ About Us</Link></li>
              <li><Link to="/services">🙏 Services</Link></li>
              <li><Link to="/events">📅 Events</Link></li>
              <li><Link to="/team">👥 Our Team</Link></li>
              <li><Link to="/gallery">🖼️ Gallery</Link></li>
              <li><Link to="/donate">💛 Donate</Link></li>
              <li><Link to="/complaint">📋 Complaint</Link></li>
              <li><Link to="/privacy-policy">🔒 Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Find Us <span className="hindi-text">/ हमारा पता</span></h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <span>Fatehabad, Bihar, India</span>
              </li>
              <li>
                <span className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M6.62 10.79a15.45 15.45 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/>
                  </svg>
                </span>
                <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
              </li>
              <li>
                <span className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8.235l8 5 8-5V18z"/>
                  </svg>
                </span>
                <a href="mailto:brahmarshisevasangh@gmail.com">brahmarshisevasangh@gmail.com</a>
              </li>
              <li>
                <span className="fc-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </span>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="wa-link">
                  WhatsApp Channel
                </a>
              </li>
            </ul>

            {/* Join CTA */}
            <div className="footer-join-box">
              <p className="hindi-text">समाज सेवा में जुड़ें 🙏</p>
              <Link to="/join" className="footer-join-btn">Join BSS — सदस्य बनें</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2024 <strong>ब्रह्मर्षि सेवा संघ</strong> — Brahmarshi Seva Sangh. All rights reserved.</p>
          <p className="footer-bottom-sub hindi-text">सर्वाधिकार सुरक्षित | फतेहाबाद, बिहार, भारत</p>
          <p style={{ marginTop: '6px', fontSize: '0.8rem' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              🔒 Privacy Policy
            </Link>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;