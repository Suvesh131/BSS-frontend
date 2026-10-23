import React from 'react';
import { Helmet } from 'react-helmet-async';

const previewImages = [
  { title: 'Event 1', imageUrl: '/images/gallery1.jpeg' },
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

      <div className="page-hero" style={{ padding: '30px 20px' }}>
        <h1 style={{ margin: '0 0 5px', fontSize: '2rem' }}>Gallery</h1>
        <p className="hindi-text" style={{ margin: 0, fontSize: '1rem' }}>गैलरी — हमारे कार्यक्रमों की झलकियां</p>
      </div>

      <section style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>

          <div className="section-title" style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.8rem' }}>Recent Highlights</h2>
            <p className="subtitle hindi-text" style={{ marginTop: '-2px' }}>हाल की प्रमुख झलकियां</p>
            <div className="divider" style={{ margin: '10px auto' }}></div>
          </div>

          {/* Grid Layout - Mobile aur Laptop dono ke liye perfectly balanced */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', /* लैपटॉप पर 4 इमेजेस एक लाइन में आएंगी */
            gap: '20px',
            margin: '30px 0 40px 0'
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
              fontSize: '0.95rem',
              textDecoration: 'none',
              padding: '12px 28px',
              borderRadius: '50px',
              boxShadow: '0 4px 12px rgba(180,60,0,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(180,60,0,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(180,60,0,0.3)';
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
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      background: 'white',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {!imageError ? (
        <img
          src={img.imageUrl}
          alt={img.title}
          onError={() => setImageError(true)}
          style={{ 
            width: '100%', 
            height: '200px', /* लैपटॉप के लिए सही ऊंचाई */
            objectFit: 'cover', 
            display: 'block' 
          }} 
        />
      ) : (
        <div style={{
          width: '100%', height: '200px',
          background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <p style={{ color: 'white', fontSize: '2rem', margin: 0 }}>🖼️</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;