import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// Placeholder data — apni entries yahan add karte jao
const complaintData = [
  {
    slNo: 1,
    date: '21/07/2026',
    latterNo: 'LTR-001',
    refNo: 'REF609900',
    refLink: 'https://drive.google.com/file/d/1o-Vx_CXdUl-zHk4zjz0xHVNm3ZgoRGOK/view',
    description: 'Road repair complaint in Fatehabad area',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 2,
    date: '20/07/2026',
    latterNo: 'LTR-002',
    refNo: 'REF609544',
    refLink: 'https://drive.google.com/file/d/YOUR_SECOND_FILE_ID/view',
    description: 'Water supply issue',
    response: 'Team assigned, work in progress',
    status: 'PROCESS',
  },
  {
    slNo: 3,
    date: '15/07/2026',
    latterNo: 'LTR-003',
    refNo: 'REF609321',
    refLink: 'https://drive.google.com/file/d/YOUR_THIRD_FILE_ID/view',
    description: 'Electricity pole damaged',
    response: 'Issue resolved on site',
    status: 'CLOSED',
  },
];

const statusStyles = {
  PENDING: { bg: '#fff3cd', color: '#b45f00' },
  PROCESS: { bg: '#d6e4ff', color: '#1d4ed8' },
  CLOSED: { bg: '#d4edda', color: '#1e7e34' },
};

const Complaint = () => {
  const [activeTab, setActiveTab] = useState('register'); // 'register' | 'status'
  const [search, setSearch] = useState('');

  // Auto-calculated counts
  const counts = useMemo(() => {
    const total = complaintData.length;
    const pending = complaintData.filter((c) => c.status === 'PENDING').length;
    const process = complaintData.filter((c) => c.status === 'PROCESS').length;
    const closed = complaintData.filter((c) => c.status === 'CLOSED').length;
    return { total, pending, process, closed };
  }, []);

  const filteredData = useMemo(() => {
    if (!search.trim()) return complaintData;
    const q = search.toLowerCase();
    return complaintData.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(q)
      )
    );
  }, [search]);

  return (
    <div>
      <Helmet>
        <title>Complaint | Brahmarshi Seva Sangh</title>
        <meta
          name="description"
          content="File a complaint with Brahmarshi Seva Sangh (BSS). Our team reviews all complaints confidentially and responds within 3-5 working days."
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/complaint" />
      </Helmet>

      <div className="page-hero">
        <h1>Complaint</h1>
        <p className="hindi-text">शिकायत दर्ज करें</p>
      </div>

      <section className="section-padding">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div className="section-title">
            <h2>{activeTab === 'register' ? 'Register Complaint' : 'View Complaint Status'}</h2>
            <p className="subtitle hindi-text">
              {activeTab === 'register' ? 'अपनी शिकायत यहाँ दर्ज करें' : 'अपनी शिकायत की स्थिति देखें'}
            </p>
            <div className="divider"></div>
          </div>

          {/* Top Toggle Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => setActiveTab('register')}
              style={{
                padding: '12px 28px',
                borderRadius: '50px',
                border: activeTab === 'register' ? 'none' : '2px solid var(--saffron-dark)',
                background: activeTab === 'register'
                  ? 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))'
                  : 'transparent',
                color: activeTab === 'register' ? 'white' : 'var(--saffron-dark)',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'register' ? '0 4px 16px rgba(180,60,0,0.35)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              📝 Register Complaint
            </button>

            <button
              onClick={() => setActiveTab('status')}
              style={{
                padding: '12px 28px',
                borderRadius: '50px',
                border: activeTab === 'status' ? 'none' : '2px solid var(--saffron-dark)',
                background: activeTab === 'status'
                  ? 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))'
                  : 'transparent',
                color: activeTab === 'status' ? 'white' : 'var(--saffron-dark)',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'status' ? '0 4px 16px rgba(180,60,0,0.35)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              📄 View Complaint Status
            </button>
          </div>

          {/* ---------- REGISTER COMPLAINT TAB ---------- */}
          {activeTab === 'register' && (
            <>
              {/* Info Card */}
              <div className="card" style={{ marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>📋</span>
                <div>
                  <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', marginBottom: '8px', fontSize: '1rem' }}>
                    How to File a Complaint
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '0.92rem' }}>
                    Fill out the form below with your details and complaint. Our team will review your complaint and respond within 3–5 working days. All complaints are treated with strict confidentiality.
                  </p>
                  <p className="hindi-text" style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginTop: '8px', lineHeight: '1.8' }}>
                    नीचे दिए गए फॉर्म में अपनी जानकारी और शिकायत भरें। हमारी टीम 3–5 कार्य दिवसों में आपकी शिकायत की समीक्षा करेगी।
                  </p>
                </div>
              </div>

              {/* Google Form Embed */}
              <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '16px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
                  padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  <span style={{ fontSize: '1.3rem' }}>📝</span>
                  <span style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>
                    Complaint Form / शिकायत फॉर्म
                  </span>
                </div>

                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeel6bL7_hb5Ac9bHY0eElLGe8adlti_1PZvU0qAFdEgnkl-g/viewform?embedded=true"
                  width="100%"
                  frameBorder="0"
                  title="Complaint Form"
                  style={{ display: 'block', height: '500px' }}
                >
                  Loading…
                </iframe>

                <div style={{ padding: '20px', textAlign: 'center', background: 'var(--cream-dark)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '12px' }}>
                    Form theek se nahi khul raha?
                  </p>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeel6bL7_hb5Ac9bHY0eElLGe8adlti_1PZvU0qAFdEgnkl-g/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      padding: '12px 28px',
                      borderRadius: '50px',
                      boxShadow: '0 4px 16px rgba(180,60,0,0.35)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(180,60,0,0.45)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(180,60,0,0.35)';
                    }}
                  >
                    📋 Open Full Form in New Tab ↗
                  </a>
                </div>
              </div>

              {/* Contact fallback */}
              <div className="card" style={{ marginTop: '24px', textAlign: 'center', background: 'var(--cream-dark)' }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  Don't see the form? Email directly to:
                </p>
                <a href="mailto:brahmarshisevasangh@gmail.com"
                  style={{ color: 'var(--saffron-dark)', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none' }}>
                  brahmarshisevasangh@gmail.com
                </a>
              </div>
            </>
          )}

          {/* ---------- VIEW COMPLAINT STATUS TAB ---------- */}
          {activeTab === 'status' && (
            <>
              {/* Summary Stat Cards — sirf isi tab me */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <div className="card" style={{
                  background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                  padding: '20px', borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1d4ed8' }}>{counts.total}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>Total Complaints</div>
                </div>

                <div className="card" style={{
                  background: 'linear-gradient(135deg, #fff3cd, #fffbeb)',
                  padding: '20px', borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#b45f00' }}>{counts.pending}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>Pending</div>
                </div>

                <div className="card" style={{
                  background: 'linear-gradient(135deg, #d6e4ff, #eef2ff)',
                  padding: '20px', borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1d4ed8' }}>{counts.process}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>In Process</div>
                </div>

                <div className="card" style={{
                  background: 'linear-gradient(135deg, #d4edda, #eefdf1)',
                  padding: '20px', borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1e7e34' }}>{counts.closed}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>Closed</div>
                </div>
              </div>

              {/* Table Card */}
              <div className="card" style={{ padding: '20px', borderRadius: '16px', overflowX: 'auto' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                  <input
                    type="text"
                    placeholder="Search complaint..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '0.9rem',
                      minWidth: '220px',
                    }}
                  />
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--cream-dark)' }}>
                      {['Sl. No.', 'Date', 'Latter No.', 'Ref. No', 'Complaint Description', 'Response', 'Status'].map((h) => (
                        <th key={h} style={{
                          padding: '10px 12px',
                          textAlign: 'left',
                          borderBottom: '2px solid var(--saffron-dark)',
                          color: 'var(--saffron-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-light)' }}>
                          No complaints found.
                        </td>
                      </tr>
                    ) : (
                      filteredData.map((row) => (
                        <tr key={row.slNo} style={{ borderBottom: '1px solid #eee' }}>
                          <td style={{ padding: '10px 12px' }}>{row.slNo}</td>
                          <td style={{ padding: '10px 12px' }}>{row.date}</td>
                          <td style={{ padding: '10px 12px' }}>{row.latterNo}</td>
                          <td style={{ padding: '10px 12px', fontWeight: '600' }}>
                            {row.refLink ? (
                              <a
                                href={row.refLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: 'var(--saffron-dark)',
                                  textDecoration: 'underline',
                                  fontWeight: '600',
                                  cursor: 'pointer',
                                }}
                              >
                                {row.refNo}
                              </a>
                            ) : (
                              row.refNo
                            )}
                          </td>
                          <td style={{ padding: '10px 12px' }}>{row.description}</td>
                          <td style={{ padding: '10px 12px' }}>{row.response || '-'}</td>
                          <td style={{ padding: '10px 12px' }}>
                            <span style={{
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '0.78rem',
                              fontWeight: '600',
                              background: statusStyles[row.status]?.bg || '#eee',
                              color: statusStyles[row.status]?.color || '#333',
                            }}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default Complaint;