import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'unset';
  };

  const navLinks = [
    { path: '/', label: 'Home', hindi: 'होम' },
    { path: '/services', label: 'Services', hindi: 'सेवाएं' },
    { path: '/about', label: 'About', hindi: 'हमारे बारे में' },
    { path: '/events', label: 'Events', hindi: 'कार्यक्रम' },
    { path: '/gallery', label: 'Gallery', hindi: 'गैलरी' },
    { path: '/team', label: 'Team', hindi: 'हमारी टीम' },
    { path: '/donate', label: 'Donate', hindi: 'दान करें' },
    { path: '/complaint', label: 'Complaint', hindi: 'शिकायत' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/images/logo.jpeg" alt="Logo" className="nav-logo-img" />
            <div className="logo-text">
              <span className="logo-main hindi-text">ब्रह्मर्षि सेवा संघ</span>
              <span className="logo-sub">Brahmarshi Seva Sangh</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links-desktop">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/join" className="btn-join">Join BSS</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && <div className="nav-overlay" onClick={toggleMenu} />}

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'open' : ''}`}>
        {/* Drawer header */}
        <div className="drawer-header">
          <div className="drawer-logo">
            <img src="/images/logo.jpeg" alt="Logo" className="drawer-logo-img" />
            <div>
              <span className="drawer-name hindi-text">ब्रह्मर्षि सेवा संघ</span>
              <span className="drawer-sub">Brahmarshi Seva Sangh</span>
            </div>
          </div>
          <button className="drawer-close" onClick={toggleMenu} aria-label="Close">✕</button>
        </div>

        {/* Drawer links */}
        <ul className="drawer-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={toggleMenu}
              >
                <span className="drawer-link-label">{link.label}</span>
                <span className="drawer-link-hindi hindi-text">{link.hindi}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Join button */}
        <div className="drawer-footer">
          <Link to="/join" className="btn-primary drawer-join" onClick={toggleMenu}>
            Join BSS — सदस्य बनें
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;