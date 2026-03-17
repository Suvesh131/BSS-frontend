// Donate.js
import React from 'react';

const Donate = () => (
  <div>
    <div className="page-hero">
      <h1>Donate</h1>
      <p className="hindi-text">दान करें — सेवा में सहयोग करें</p>
    </div>
    <section className="section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div className="section-title">
          <h2>Support Our Mission</h2>
          <p className="subtitle hindi-text">हमारे मिशन को समर्थन दें</p>
          <div className="divider"></div>
        </div>
        <div className="card" style={{ marginBottom: '24px', background: 'linear-gradient(135deg, var(--cream), #fff)' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>🙏</span>
          <p style={{ lineHeight: '1.9', color: 'var(--text-light)' }}>
            Your generous donation helps Brahmarshi Seva Sangh serve the community, organize
            cultural events, support education, and provide financial assistance to families in need.
          </p>
          <p className="hindi-text" style={{ marginTop: '12px', color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.9' }}>
            आपका उदार दान हमें समाज की सेवा करने, सांस्कृतिक कार्यक्रम आयोजित करने,
            शिक्षा का समर्थन करने और जरूरतमंद परिवारों को वित्तीय सहायता प्रदान करने में मदद करता है।
          </p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--gold)' }}>
          <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', marginBottom: '16px' }}>Bank Details / बैंक विवरण</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            {[
              ['Account Name', 'Brahmarshi seva sangh'],
              ['Account Number', 'XXXX XXXX XXXX'],
              ['IFSC Code', 'XXXXXXXXXX'],
              ['Bank', 'XXXXXXX Bank, Fatehabad Branch'],
              ['UPI ID', 'BSS@upi'],
            ].map(([k, v]) => (
              <tr key={k} style={{ borderBottom: '1px solid var(--cream-dark)' }}>
                <td style={{ padding: '10px', color: 'var(--text-light)', fontWeight: '500', width: '40%' }}>{k}</td>
                <td style={{ padding: '10px', color: 'var(--saffron-dark)', fontWeight: '600' }}>{v}</td>
              </tr>
            ))}
          </table>
          <p style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Donate;
