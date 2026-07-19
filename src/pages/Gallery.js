import React from 'react';
import { Helmet } from 'react-helmet-async';

const previewImages = [
  { title: 'Event 1', imageUrl: '/images/gallery/event1.jpg' },
  { title: 'Chhath Puja', imageUrl: '/images/gallery/chhath1.jpg' },
  { title: 'Meeting', imageUrl: '/images/gallery/meeting1.jpg' },
  { title: 'Event 2', imageUrl: '/images/gallery/event2.jpg' },
];

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery | Brahmarshi Seva Sangh</title>
        <meta 
          name="description" 
          content="View photos from Brahmarshi Seva Sangh events, Chhath Puja celebrations, and community meetings in Fatehabad, Bihar." 
        />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/gallery" />
      </Helmet>

      <div className="page-hero">
        <h1>Gallery</h1>
        <p className="hindi-text">गैलरी — हमारे कार्यक्रमों की झलकियां</p>
      </div>

      <section className="section-padding">
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

          <div className="section-title">
            <h2>News Update</h2>
            <div className="divider"></div>
          </div>

          {/* Preview Photos Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
            marginBottom: '32px'
          }}>
            {previewImages.map((img, i) => (
              <PreviewCard key={i} img={img} />
            ))}
          </div>

          {/* View Full Gallery Button */}
          
            <a href="https://sites.google.com/view/brahmarshisevasangh/gallery"
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
            🌐 View Full Gallery ↗
          </a>

        </div>
      </section>
    </div>
  );
};

const PreviewCard = ({ img }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div style={{
      borderRadius: '14px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow)',
      background: 'white'
    }}>
      {!imageError ? (
        <img
          src={img.imageUrl}
          alt={img.title}
          onError={() => setImageError(true)}
          style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{
          width: '100%', height: '180px',
          background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <p style={{ color: 'white', fontSize: '2rem' }}>🖼️</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;