import React, { useState } from 'react';

const galleryData = [
  {
    folder: "Events",
    images: [
      { title: "Event 1", imageUrl: "/images/gallery/event1.jpg" },
      { title: "Event 2", imageUrl: "/images/gallery/event2.jpg" },
      { title: "Event 3", imageUrl: "/images/gallery/event3.jpg" },
      { title: "Event 4", imageUrl: "/images/gallery/event4.jpg" },
    ]
  },
  {
    folder: "Chhath Puja",
    images: [
      { title: "Chhath Puja 1", imageUrl: "/images/gallery/chhath1.jpg" },
      { title: "Chhath Puja 2", imageUrl: "/images/gallery/chhath2.jpg" },
      { title: "Chhath Puja 3", imageUrl: "/images/gallery/chhath3.jpg" },
      { title: "Chhath Puja 4", imageUrl: "/images/gallery/chhath4.jpg" },
    ]
  },
  {
    folder: "Meetings",
    images: [
      { title: "Meeting 2024", imageUrl: "/images/gallery/meeting1.jpg" },
      { title: "Meeting 2024",  imageUrl: "/images/gallery/meeting2.jpg" },
      { title: "Meeting 2024",  imageUrl: "/images/gallery/meeting3.jpg" },
      { title: "Meeting 2024",  imageUrl: "/images/gallery/meeting4.jpg" },
    ]
  },
];

const Gallery = () => {
  const [activeFolder, setActiveFolder] = useState('All');
  const [selected, setSelected]         = useState(null);

  const folders = galleryData.map(f => f.folder);

  const visibleFolders = activeFolder === 'All'
    ? galleryData
    : galleryData.filter(f => f.folder === activeFolder);

  return (
    <div>
      <div className="page-hero">
        <h1>Gallery</h1>
        <p className="hindi-text">गैलरी — हमारे कार्यक्रमों की झलकियां</p>
      </div>

      <section className="section-padding">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div className="section-title">
            <h2>Photo Gallery</h2>
            <p className="subtitle hindi-text">फोटो गैलरी</p>
            <div className="divider"></div>
          </div>

          {/* Folder Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px', justifyContent: 'center' }}>
            {['All', ...folders].map(f => (
              <button key={f} onClick={() => setActiveFolder(f)}
                style={{
                  padding: '10px 22px', borderRadius: '50px', border: 'none', cursor: 'pointer',
                  fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.3s',
                  background: activeFolder === f ? 'var(--saffron)' : 'var(--cream-dark)',
                  color: activeFolder === f ? 'white' : 'var(--text)',
                  boxShadow: activeFolder === f ? '0 4px 14px rgba(255,107,0,0.35)' : 'none',
                  transform: activeFolder === f ? 'translateY(-2px)' : 'none',
                }}>
                📁 {f}
              </button>
            ))}
          </div>

          {/* Grouped Folder View */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {visibleFolders.map(({ folder, images }) => (
              <div key={folder}>

                {/* Folder Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', cursor: 'pointer' }}
                  onClick={() => setActiveFolder(folder)}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))',
                    color: 'white', padding: '8px 20px', borderRadius: '50px',
                    fontSize: '0.95rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px'
                  }}>
                    📁 {folder}
                    <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50px', padding: '2px 10px', fontSize: '0.8rem' }}>
                      {images.length} photos
                    </span>
                  </div>
                  <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, var(--saffron), transparent)' }} />
                </div>

                {/* Images Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
                  {images.map((img, i) => (
                    <ImageCard key={i} img={{...img, folder}} onClick={() => setSelected({...img, folder})} />
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Fallback Button */}
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '12px' }}>
              Gallery not loading?
            </p>
            <a
              href="https://sites.google.com/view/brahmarshisevasangh/gallery"
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

        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div onClick={() => setSelected(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.94)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ maxWidth: '900px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <img src={selected.imageUrl} alt={selected.title}
              style={{ width: '100%', borderRadius: '12px', maxHeight: '80vh', objectFit: 'contain' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
              <div>
                <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>{selected.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '4px' }}>📁 {selected.folder}</p>
              </div>
              <button onClick={() => setSelected(null)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
                ✕ Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageCard = ({ img, onClick }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div onClick={onClick}
      style={{ cursor: 'pointer', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s', background: 'white' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      {!imageError ? (
        <img 
          src={img.imageUrl} 
          alt={img.title}
          onError={() => setImageError(true)}
          style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }} 
        />
      ) : (
        <div style={{ width: '100%', height: '210px', background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'white', fontSize: '2rem' }}>🖼️</p>
        </div>
      )}
      <div style={{ padding: '10px 14px' }}>
        <p style={{ fontWeight: '600', color: 'var(--saffron-dark)', fontSize: '0.88rem' }}>{img.title}</p>
      </div>
    </div>
  );
};

export default Gallery;