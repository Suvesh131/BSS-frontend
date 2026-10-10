import React, { useState, useEffect } from 'react';
import { verifyLogin, createSession, isSessionValid, destroySession, getRole } from '../utils/auth';
import '../assets/css/dashboard.css';

const FORM_LINKS = {
  member: 'https://forms.gle/rMy8oVoZbhNBkguD7',
  donation: 'https://forms.gle/VNnB2fsxepRQDVN6A',
  expenses: 'https://forms.gle/WfpKn3EdQ2cqPVVTA',
  asset: 'https://forms.gle/nrgkSxF5AWe4G2uB6',
  store: 'https://script.google.com/macros/s/AKfycbw5cmC9BTCLVSRQBNrBVDyAPyvjWx_HDFe_MxwYwdTWkHKy-P4SzylH2wfqVsblqOi3/exec',
};

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  const [role, setRole] = useState('admin');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const valid = isSessionValid();
    setLoggedIn(valid);
    if (valid) setRole(getRole());
    setChecking(false);
  }, []);

  useEffect(() => {
    document.title = loggedIn ? 'Dashboard | Samiti Portal' : 'Login | Samiti Portal';
  }, [loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const userRole = await verifyLogin(id.trim(), password);
    if (userRole) {
      createSession(userRole);
      setRole(userRole);
      setLoggedIn(true);
    } else {
      setError('Galat ID ya Password. Dobara koshish karein.');
    }
    setPassword('');
  };

  const handleLogout = () => {
    destroySession();
    setLoggedIn(false);
    setRole('admin');
    setId('');
    setPassword('');
  };

  if (checking) return null;

  if (!loggedIn) {
    return (
      <div className="dash-login-wrap">
        <form className="dash-login-card" onSubmit={handleLogin}>
          <img src="/images/logo.jpeg" alt="Brahmarshi Seva Sangh" className="dash-logo" />
          <h1>Brahmarshi Seva Sangh Portal</h1>
          <p>Enter your ID and Password to login</p>
          <div className="dash-field">
            <label>ID</label>
            <input value={id} onChange={(e) => setId(e.target.value)} required />
          </div>
          <div className="dash-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <div className="dash-error">{error}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className="dash-wrap">
      <div className="dash-topbar">
        <div className="dash-topbar-brand">
          <img src="/images/logo.jpeg" alt="Brahmarshi Seva Sangh" className="dash-topbar-logo" />
          <h2>Brahmarshi Seva Sangh</h2>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="dash-grid">
        {role === 'store' ? (
          <a className="dash-card" href={FORM_LINKS.store} target="_blank" rel="noopener noreferrer">
            Store Department
          </a>
        ) : (
          <>
            <a className="dash-card" href={FORM_LINKS.member} target="_blank" rel="noopener noreferrer">
              Member Registration
            </a>
            <a className="dash-card" href={FORM_LINKS.donation} target="_blank" rel="noopener noreferrer">
              Donation Entry
            </a>
            <a className="dash-card" href={FORM_LINKS.expenses} target="_blank" rel="noopener noreferrer">
              Expenses Entry
            </a>
            <a className="dash-card" href={FORM_LINKS.asset} target="_blank" rel="noopener noreferrer">
              Asset In / Out
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;