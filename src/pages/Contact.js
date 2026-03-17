import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/contact`, form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p className="hindi-text">हमसे संपर्क करें</p>
      </div>

      <section className="section-padding">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)' }}>Get In Touch</h2>
            <p className="hindi-text" style={{ color: 'var(--text-light)', margin: '8px 0 24px' }}>संपर्क में रहें</p>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Address / पता</strong>
                  <p>Fatehabad, Bihar State, India</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone / फोन</strong>
                  <p>+91 XXXX-XXXXXX</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Email / ईमेल</strong>
                  <p>brahmarshisevasangh@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <strong>Timing / समय</strong>
                  <p>Mon–Sat: 9AM – 6PM</p>
                  <p className="hindi-text" style={{ fontSize: '0.85rem' }}>सोम–शनि: सुबह 9 – शाम 6</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form card">
            <h3 style={{ fontFamily: 'Poppins', marginBottom: '6px' }}>Send Message</h3>
            <p className="hindi-text" style={{ color: 'var(--text-light)', marginBottom: '24px', fontSize: '0.9rem' }}>संदेश भेजें</p>

            {status === 'success' && (
              <div className="alert alert-success">
                ✅ Message sent successfully! We'll get back to you soon.
                <br /><span className="hindi-text">संदेश सफलतापूर्वक भेजा गया! हम जल्द ही संपर्क करेंगे।</span>
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">❌ Something went wrong. Please try again.</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name / पूरा नाम *</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email / ईमेल</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone / फोन</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXXXXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label>Message / संदेश *</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required placeholder="Write your message here..." />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending... भेज रहे हैं...' : 'Send Message — भेजें 🙏'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
