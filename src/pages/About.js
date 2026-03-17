// About.js
import React from 'react';

const About = () => (
  <div>
    <div className="page-hero">
      <h1>About BSS</h1>
      <p className="hindi-text">ब्रह्मर्षि सेवा संघ के बारे में</p>
    </div>
    <section className="section-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="section-title">
          <h2>Who We Are</h2>
          <p className="subtitle hindi-text">हम कौन हैं</p>
          <div className="divider"></div>
        </div>

        <div className="card" style={{ marginBottom: '24px' }}>
          <p style={{ lineHeight: '1.9', color: 'var(--text-light)' }}>
            <strong>Brahmarshi Seva Sangh</strong> is a <strong>non-governmental charitable organization</strong> founded in <strong>2021</strong> in
            Fatehabad, Bihar State, India by <strong>Prakash Kumar</strong> and his associates.
          </p>
          <p className="hindi-text" style={{ marginTop: '16px', lineHeight: '2', color: 'var(--text-light)', fontSize: '0.95rem' }}>
            ब्रह्मर्षि सेवा संघ एक गैर-सरकारी धर्मार्थ संस्था है जिसकी स्थापना 2021 में फतेहाबाद (बिहार राज्य/भारत)
            में प्रकाश कुमार और उनके सहयोगियों द्वारा की गई थी। यह संस्था फतेहाबाद में रहने वाले लोगों के साथ-साथ
            फतेहाबाद से जुड़े समाज को सनातन परिवारों को एकजुट करने और जन कल्याण के लिए सहायता एवं आर्थिक सहायता प्रदान करती है।
          </p>
        </div>

        <div className="section-title" style={{ marginTop: '40px' }}>
          <h2>Our Works</h2>
          <p className="subtitle hindi-text">ब्रह्मर्षि सेवा संघ के कार्य</p>
          <div className="divider"></div>
        </div>

        <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
          {[
            {
              icon: '🕉️',
              title: 'Religious & Cultural Events',
              hindi: 'धार्मिक एवं सांस्कृतिक आयोजन',
              desc: 'Brahmarshi Seva Sangh organizes Puja, Havan, Katha, and various religious ceremonies to preserve Sanatan traditions and bring the community together in devotion and faith.',
              hindiDesc: 'पूजा, हवन, कथा और धार्मिक अनुष्ठानों का आयोजन कर सनातन संस्कृति को जीवित रखना।'
            },
            {
              icon: '📚',
              title: 'Education Support',
              hindi: 'शिक्षा सहायता',
              desc: 'Providing scholarships, study materials, and educational guidance to deserving youth from economically weaker sections, enabling them to achieve their dreams.',
              hindiDesc: 'आर्थिक रूप से कमजोर मेधावी छात्रों को छात्रवृत्ति और शैक्षिक सहायता प्रदान करना।'
            },
            {
              icon: '🤝',
              title: 'Social Welfare & Financial Aid',
              hindi: 'समाज कल्याण एवं आर्थिक सहायता',
              desc: 'Extending financial assistance, food distribution, and emergency support to families in need, especially during times of crisis, illness, or natural calamity.',
              hindiDesc: 'जरूरतमंद परिवारों को आर्थिक सहायता, राशन वितरण और संकट के समय तत्काल मदद।'
            },
            {
              icon: '⚖️',
              title: 'Fight Against Corruption',
              hindi: 'भ्रष्टाचार के खिलाफ आवाज़',
              desc: 'Standing firm against injustice and corruption at local levels, raising voice for the rights of common people and ensuring transparency in public dealings.',
              hindiDesc: 'स्थानीय स्तर पर भ्रष्टाचार के विरुद्ध आवाज उठाना और आम जनता के अधिकारों की रक्षा करना।'
            },
            {
              icon: '👥',
              title: 'Community Building',
              hindi: 'समुदाय निर्माण',
              desc: 'Uniting Sanatan families of Fatehabad and surrounding areas for collective growth, cultural events, and mutual support — building a strong, united society.',
              hindiDesc: 'फतेहाबाद और आस-पास के क्षेत्रों के सनातन परिवारों को एकजुट कर एक सशक्त समाज का निर्माण।'
            },
            {
              icon: '🌱',
              title: 'Youth Empowerment',
              hindi: 'युवा सशक्तिकरण',
              desc: 'Channeling the energy of youth towards constructive social work, leadership development, and community service — making them the true strength of society.',
              hindiDesc: 'युवाओं को सामाजिक कार्यों में शामिल कर उनकी ऊर्जा को सकारात्मक दिशा में लगाना।'
            },
          ].map((item, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <h3 style={{ color: 'var(--saffron-dark)', marginBottom: '4px', fontFamily: 'Poppins' }}>{item.title}</h3>
                <p className="hindi-text" style={{ color: 'var(--maroon)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '8px' }}>{item.hindi}</p>
                <p style={{ lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '6px' }}>{item.desc}</p>
                <p className="hindi-text" style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.8' }}>{item.hindiDesc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))', color: 'white' }}>
          <h3 style={{ color: 'var(--gold-light)', marginBottom: '12px', fontFamily: 'Poppins' }}>Our Privacy Policy</h3>
          <p style={{ lineHeight: '1.9', opacity: 0.9, fontSize: '0.95rem' }}>
            Brahmarshi Seva Sangh takes your privacy seriously. We do not share, trade, or sell
            personal information of our donors or members with any other organizations.
            All financial information is treated as highly confidential.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
