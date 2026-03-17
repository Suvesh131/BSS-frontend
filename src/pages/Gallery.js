import React, { useState } from 'react';

const galleryData = [
  {
    folder: "Events",
    images: [
      { title: "Event 1", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Event 2", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Event 3", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Event 4", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
    ]
  },
  {
    folder: "Chhath Puja",
    images: [
      { title: "Chhath Puja 1", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Chhath Puja 2", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Chhath Puja 3", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Chhath Puja 4", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
    ]
  },
  {
    folder: "Meetings",
    images: [
      { title: "Meeting 2024", imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Meeting 2024",  imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Meeting 2024",  imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
      { title: "Meeting 2024",  imageUrl: "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID" },
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
                    <ImageCard key={i} img={img} onClick={() => setSelected(img)} />
                  ))}
                </div>

              </div>
            ))}
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

const ImageCard = ({ img, onClick }) => (
  <div onClick={onClick}
    style={{ cursor: 'pointer', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'transform 0.3s', background: 'white' }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
    <img src={img.imageUrl} alt={img.title}
      style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }} />
    <div style={{ padding: '10px 14px' }}>
      <p style={{ fontWeight: '600', color: 'var(--saffron-dark)', fontSize: '0.88rem' }}>{img.title}</p>
    </div>
  </div>
);

export default Gallery;
