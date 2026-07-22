import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

// Placeholder data — apni entries yahan add karte jao
// IMPORTANT: jab bhi kisi complaint ka status/response update karo,
// uski "lastUpdated" date-time ko current time se replace kar do.
// Jiski lastUpdated sabse latest hogi, wo table me sabse upar (No. 1) dikhegi.
const complaintData = [
  {
    slNo: 1,
    date: '21/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-020',
    refNo: 'REF609544',
    refLink: 'https://drive.google.com/file/d/1JATEOGzElM4tuZPF3eDwCPxJIV23k7Fd/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 1 से 16 के लिए बिजली भुक्तान की जांच की मांग',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 2,
    date: '21/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-019',
    refNo: 'REF609900',
    refLink: 'https://drive.google.com/file/d/1HhkLtZOT47M0TMs1YJ0WUXCOTJMnu2X2/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 10 में कुआं संबंधित',
    response: 'कार्रवाई किया गया',
    status: 'PROCESS',
  },
  {
    slNo: 3,
    date: '20/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-018',
    refNo: 'REF604207',
    refLink: 'https://drive.google.com/file/d/1YjKZne1My5D2nDMyTfB7h6S03NsBI3S5/view',
    description: 'फतेहाबाद अंतर्गत स्वस्थ केंद्र के लिए आवेदन',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 4,
    date: '19/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-017',
    refNo: 'REF602634',
    refLink: 'https://drive.google.com/file/d/1XFf8EckMZlXOcX2l9tcpBAaxhar_Ahil/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 1 से 16 के बिजली बिल भुक्तान की जांच की मांग',
    response: 'पंचायत द्वारा जवाब में बताया गया कि नल-जल चालकों को मान देय के लिए भुक्तान किया गया',
    status: 'CLOSED',
  },
  {
    slNo: 5,
    date: '19/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-016',
    refNo: 'REF601542',
    refLink: 'https://drive.google.com/file/d/1tE0rv7gxYRXJTq1ByHJcjJTMeAgihY5J/view',
    description: 'फतेहाबाद पंचायत अंतर्गत वार्ड संख्या 10 में सार्वजनिक कुएँ की मरम्मत हेतु',
    response: 'पंचायत द्वार झूठा दावा मरम्मत हो चूका है',
    status: 'FORWARD',
  },
  {
    slNo: 6,
    date: '16/07/2026',
    lastUpdated: '2026-07-16T10:00:00',
    latterNo: 'BSS-015',
    refNo: 'REF594857',
    refLink: 'https://drive.google.com/file/d/1NuS9mSUHyJjgfmjqMHYthSh2t7leWLoe/view',
    description: 'फतेहाबाद पंचायत में स्वच्छता मद में व्यय की गई राशि के बावजूद नियमित कचरा संग्रहण सेवा नहीं मिलने एवं जांच कर कार्रवाई किए जाने हेतु',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 7,
    date: '14/07/2026',
    lastUpdated: '2026-07-14T10:00:00',
    latterNo: 'BSS-014',
    refNo: 'REF577636',
    refLink: 'https://drive.google.com/file/d/1-azgBxIC5ynCJD-mwIsQIyZQdyIj2sG6/view',
    description: 'फतेहाबाद पंचायत में जिम सेंटर निर्माण के नाम पर सरकारी राशि के कथित गबन एवं फर्जी भुगतान की जांच कर आवश्यक कार्रवाई करने हेतु',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 8,
    date: '14/07/2026',
    lastUpdated: '2026-07-14T10:00:00',
    latterNo: 'BSS-013',
    refNo: 'REF573757',
    refLink: 'https://drive.google.com/file/d/1yjGomofYgy3AFcS23BDcz5g9mAY6Zw0l/view',
    description: 'फतेहाबाद पंचायत एवं आस पास के सभी पंचायती में मच्छरों के बढ़ते प्रकोप एवं फॉगिंग कराने हेतु ',
    response: '',
    status: 'CLOSED',
  },
  {
    slNo: 9,
    date: '01/07/2026',
    lastUpdated: '2026-07-01T10:00:00',
    latterNo: 'BSS-008',
    refNo: 'REF573805',
    refLink: 'https://drive.google.com/file/d/1IsoBCRAmqx4ApMZScavwjBNwJWTUQ816/view',
    description: 'फतेहाबाद पंचायत के वार्ड संख्या 09 में अधूरे पड़े कुआं मरम्मत कार्य को शीघ्र पूर्ण कराने एवं जांच कराने हेतु',
    response: 'कार्रवाई किया गया',
    status: 'PROCESS',
  },
  {
    slNo: 10,
    date: '26/06/2026',
    lastUpdated: '2026-06-26T10:00:00',
    latterNo: 'BSS-REF01',
    refNo: 'REF457873',
    refLink: 'https://drive.google.com/file/d/1dhmAyODJVy18fqSKejZxSWQPHsUvZIef/view',
    description: 'कमलपरा (BASAITHA) से फतेहाबाद (प्रखण्ड - पारू) तक जर्जर सड़क के निर्माण से संबंधित',
    response: 'कार्रवाई किया गया',
    status: 'CLOSED',
  },
];

const statusStyles = {
  PENDING: { bg: '#fff3cd', color: '#b45f00' },
  PROCESS: { bg: '#d6e4ff', color: '#1d4ed8' },
  CLOSED: { bg: '#d4edda', color: '#1e7e34' },
  FORWARD: { bg: '#e0d4ff', color: '#6b21a8' },
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
    const forward = complaintData.filter((c) => c.status === 'FORWARD').length;
    return { total, pending, process, closed, forward };
  }, []);

  // Sorted + filtered data — jo abhi recently update hui, wo sabse upar
  const filteredData = useMemo(() => {
    let data = [...complaintData];

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(q)
        )
      );
    }

    // Sabse recent lastUpdated wali entry sabse upar
    data.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

    return data;
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

                <div className="card" style={{
                  background: 'linear-gradient(135deg, #e0d4ff, #f3ecff)',
                  padding: '20px', borderRadius: '14px',
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#6b21a8' }}>{counts.forward}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: '600' }}>Forwarded</div>
                </div>
              </div>

              {/* Table Card */}
              <div className="card" style={{ padding: '20px', borderRadius: '16px' }}>
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

                {/* Scrollable wrapper — ~5 rows visible, baaki scroll par */}
                <div style={{
                  maxHeight: '320px',
                  overflowY: 'auto',
                  overflowX: 'auto',
                  borderRadius: '8px',
                }}>
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
                            position: 'sticky',
                            top: 0,
                            background: 'var(--cream-dark)',
                            zIndex: 1,
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
                        filteredData.map((row, index) => (
                          <tr key={row.slNo} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '10px 12px' }}>{index + 1}</td>
                            <td style={{ padding: '10px 12px' }}>{row.date}</td>
                            <td style={{ padding: '10px 12px', whiteSpace: 'nowrap' }}>{row.latterNo}</td>
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
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default Complaint;