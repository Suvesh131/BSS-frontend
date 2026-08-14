import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const newsFullText = `ब्रह्मर्षि सेवा संघ द्वारा फतेहाबाद पंचायत में हो रहे कथित अनियमित एवं गलत कार्यों को लेकर प्रशासन से शिकायत की गई थी। शिकायत को गंभीरता से लेते हुए दिनांक 31 जुलाई 2026 को प्रखंड विकास पदाधिकारी (BDO) अजीत कुमार सिंह जी, पारू फतेहाबाद पंचायत पहुंचे और पंचायत में चल रहे विभिन्न कार्यों का स्थलीय निरीक्षण एवं जांच किया।

इस दौरान ब्रह्मर्षि सेवा संघ की टीम ने BDO महोदय से बातचीत कर फतेहाबाद पंचायत की विभिन्न जनसमस्याओं, विकास कार्यों एवं अन्य महत्वपूर्ण मुद्दों से अवगत कराया तथा उनके शीघ्र एवं उचित समाधान की मांग रखी।

इस अवसर पर ब्रह्मर्षि सेवा संघ की ओर से युवा प्रमुख श्री अंशु सिंह, सदस्य श्री राहुल पांडेय, श्री अजीत सिंह, श्री शुभम सिंह, श्री प्रिंस कुमार एवं श्री राजेश पांडेय सहित आसपास के सभी सम्मानित ग्रामीण उपस्थित रहे।

सभी ग्रामीणों एवं संघ के सदस्यों ने पंचायत की जनसमस्याओं को गंभीरता से प्रशासन के समक्ष रखा और मांग की कि विकास कार्यों में पारदर्शिता सुनिश्चित हो, अनियमितताओं की जांच हो तथा लंबित जनसमस्याओं का शीघ्र समाधान किया जाए।

ब्रह्मर्षि सेवा संघ का उद्देश्य स्पष्ट है — जनता के अधिकार की आवाज उठाना और पंचायत के विकास में अपना योगदान देना।

ब्रह्मर्षि सेवा संघ ✊
जनहित • पारदर्शिता • विकास`;

const newsPreview = 'ब्रह्मर्षि सेवा संघ द्वारा फतेहाबाद पंचायत में हो रहे कथित अनियमित एवं गलत कार्यों को लेकर प्रशासन से शिकायत की गई थी। शिकायत को गंभीरता से लेते हुए दिनांक 31 जुलाई 2026 को प्रखंड विकास पदाधिकारी (BDO) अजीत कुमार सिंह जी...';

const mahapanchayatFull = 'A grand gathering of Sanatan families from Fatehabad and surrounding areas, bringing together hundreds of households for a day of unity, culture, and community dialogue. The Mahapanchayat will address key social issues, celebrate our shared heritage, and strengthen the bonds between families who stand together for justice and tradition.';
const mahapanchayatPreview = 'A grand gathering of Sanatan families from Fatehabad and surrounding areas, bringing together hundreds of households for a day of unity, culture...';

const chhathFull = 'Brahmarshi Seva Sangh organized the annual Chhath Puja celebration at Fatehabad, bringing together devotees to honor Surya Dev and Chhathi Maiya with traditional rituals, fasting, and evening Arghya at the ghat. The event reflected the community\u2019s deep faith and served as an occasion for families to come together in devotion and festivity.';
const chhathPreview = 'Brahmarshi Seva Sangh organized the annual Chhath Puja celebration at Fatehabad, bringing together devotees to honor Surya Dev and Chhathi Maiya...';

const holiFull = 'Brahmarshi Seva Sangh organized a vibrant Holi Milan Samaroh, bringing together families from Fatehabad and neighboring villages to celebrate the festival of colors with traditional songs, sweets, and community bonhomie. The event was a joyful reminder of unity in diversity, as people from all walks of life came together to spread warmth, laughter, and goodwill.';
const holiPreview = 'Brahmarshi Seva Sangh organized a vibrant Holi Milan Samaroh, bringing together families from Fatehabad and neighboring villages to celebrate...';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    axios.get(`${API}/api/events`)
      .then(r => { setEvents(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const defaultEvents = [
    {
      title: 'ब्रह्मर्षि सेवा संघ की शिकायत पर फतेहाबाद पंचायत में जांच',
      titleHindi: '',
      lastUpdated: '2026-07-31T12:00:00',
      description: newsPreview,
      fullDescription: newsFullText,
      hasReadMore: true,
      isHindi: true
    },
    {
      title: 'Sarvarn Mahapanchayat 2026',
      titleHindi: 'सवर्ण महापंचायत 2026',
      lastUpdated: '2026-01-15T10:00:00',
      description: mahapanchayatPreview,
      fullDescription: mahapanchayatFull,
      hasReadMore: true
    },
    {
      title: 'Chhath Puja 2025',
      titleHindi: 'छठ पूजा 2025',
      lastUpdated: '2025-11-01T06:00:00',
      description: chhathPreview,
      fullDescription: chhathFull,
      hasReadMore: true
    },
    {
      title: 'Holi Milan Samaroh',
      titleHindi: 'होली मिलन समारोह',
      lastUpdated: '2025-03-14T11:00:00',
      description: holiPreview,
      fullDescription: holiFull,
      hasReadMore: true
    },
  ];

  const rawEvents = events.length > 0 ? events : defaultEvents;

  const displayEvents = [...rawEvents].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));

  const toggleCard = (i) => {
    setExpandedCards(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div>
      <Helmet>
        <title>Events | Brahmarshi Seva Sangh</title>
        <meta
          name="description"
          content="Check upcoming and past events organized by Brahmarshi Seva Sangh - Chhath Puja, Holi Milan, Mahapanchayat and other community gatherings in Fatehabad, Bihar."
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/" />
      </Helmet>
      <div className="page-hero">
        <h1>Events</h1>
        <p className="hindi-text">कार्यक्रम</p>
      </div>
      <section className="section-padding">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-title">
            <h2>Our Events</h2>
            <p className="subtitle hindi-text">हमारे कार्यक्रम</p>
            <div className="divider"></div>
          </div>
          {loading ? <p style={{ textAlign: 'center' }}>Loading...</p> : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              alignItems: 'stretch'
            }}>
              {displayEvents.map((ev, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  {ev.image && (
                    <img
                      src={ev.image}
                      alt={ev.title}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '16px' }}
                    />
                  )}
                  <span style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: '600' }}>
                    📅 {ev.lastUpdated
                      ? new Date(ev.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                      : ''}
                    {ev.lastUpdated && (
                      <>
                        {' • '}
                        {new Date(ev.lastUpdated).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}
                      </>
                    )}
                  </span>
                  <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', margin: '8px 0 4px', fontSize: '1.1rem' }}>
                    {ev.title}
                  </h3>
                  {ev.titleHindi && (
                    <p className="hindi-text" style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '8px' }}>
                      {ev.titleHindi}
                    </p>
                  )}
                  <p
                    className={ev.isHindi ? 'hindi-text' : undefined}
                    style={{
                      color: 'var(--text-light)',
                      lineHeight: '1.9',
                      fontSize: '0.9rem',
                      whiteSpace: ev.isHindi ? 'pre-line' : 'normal',
                      flexGrow: 1
                    }}
                  >
                    {ev.hasReadMore ? (expandedCards[i] ? ev.fullDescription : ev.description) : ev.description}
                  </p>
                  {ev.hasReadMore && (
                    <button
                      onClick={() => toggleCard(i)}
                      style={{
                        marginTop: '14px',
                        padding: '8px 20px',
                        background: 'transparent',
                        border: '2px solid var(--saffron)',
                        color: 'var(--saffron-dark)',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        alignSelf: 'flex-start'
                      }}
                    >
                      {expandedCards[i]
                        ? (ev.isHindi ? 'संक्षेप में दिखाएं' : 'Show Less')
                        : (ev.isHindi ? 'पूरा पढ़ें' : 'Read More')}
                    </button>
                  )}
                  {ev.isOnline && ev.meetingLink && (
                    <a
                      href={ev.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        marginTop: '14px',
                        padding: '10px 22px',
                        background: 'linear-gradient(135deg, var(--saffron), var(--saffron-dark))',
                        color: '#fff',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        alignSelf: 'flex-start'
                      }}
                    >
                      🎥 Join Meeting
                      {ev.lastUpdated && (
                        <> — {new Date(ev.lastUpdated).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true })}</>
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;