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

        {/* WHO WE ARE */}
        <div className="section-title">
          <h2>Who We Are</h2>
          <p className="subtitle hindi-text">हम कौन हैं</p>
          <div className="divider"></div>
        </div>

        <div className="card" style={{ marginBottom: '24px' }}>
  <p style={{ lineHeight: '2', color: 'var(--text-light)', fontSize: '1rem' }}>
    <strong style={{ color: 'var(--saffron-dark)' }}>Brahmarshi Seva Sangh (BSS)</strong> is a{' '}
    <strong>non-governmental charitable organization</strong> founded in <strong>2021</strong> in{' '}
    <strong>Fatehabad, Bihar, India</strong> by <strong>Shri Prakash Kumar</strong> and his
    dedicated associates. For over <strong>5+ years</strong>, the organization has been
    continuously working at the grassroots level with a strong commitment to social service,
    unity, and cultural values.
  </p>

  <p style={{ lineHeight: '2', color: 'var(--text-light)', marginTop: '14px', fontSize: '1rem' }}>
    Since its inception, Brahmarshi Seva Sangh has made a meaningful impact by helping{' '}
    <strong>50+ families</strong>, supporting needy individuals, and empowering students through
    various initiatives. The organization has successfully organized <strong>10+ social,
    religious, and cultural events</strong>, creating awareness and strengthening community bonds.
    Our efforts are focused on uplifting the underprivileged, promoting education, and standing
    firmly against injustice and corruption.
  </p>

  <p style={{ lineHeight: '2', color: 'var(--text-light)', marginTop: '14px', fontSize: '1rem' }}>
    We believe that true progress comes when every individual in society is given equal respect,
    opportunity, and support. With a growing network of <strong>50+ active members</strong>, BSS
    continues to expand its reach and impact, driven by the mission of “Seva, Nyay aur
    Paradarshita” (Service, Justice, and Transparency).
  </p>

  <p className="hindi-text" style={{ marginTop: '16px', lineHeight: '2', color: 'var(--text-light)', fontSize: '0.95rem' }}>
    ब्रह्मर्षि सेवा संघ एक गैर-सरकारी धर्मार्थ संस्था है जिसकी स्थापना 2021 में फतेहाबाद,
    बिहार में श्री प्रकाश कुमार और उनके सहयोगियों द्वारा की गई। पिछले <strong>5+ वर्षों </strong> 
    से यह संस्था लगातार समाज सेवा के कार्यों में सक्रिय है।
  </p>

  <p className="hindi-text" style={{ marginTop: '10px', lineHeight: '2', color: 'var(--text-light)', fontSize: '0.95rem' }}>
    अब तक संस्था द्वारा <strong>50+ परिवारों की सहायता</strong> की जा चुकी है तथा{' '}
    <strong>10+ सामाजिक एवं धार्मिक कार्यक्रम</strong> सफलतापूर्वक आयोजित किए गए हैं।
    हमारा उद्देश्य समाज के हर वर्ग तक पहुंचकर उन्हें सहयोग देना, शिक्षा को बढ़ावा देना,
    और अन्याय व भ्रष्टाचार के खिलाफ आवाज उठाना है।
  </p>

  <p className="hindi-text" style={{ marginTop: '10px', lineHeight: '2', color: 'var(--text-light)', fontSize: '0.95rem' }}>
    हम मानते हैं कि समाज की सेवा ही सच्चा धर्म है और हर व्यक्ति को समान अवसर मिलना चाहिए।
    ब्रह्मर्षि सेवा संघ अपने <strong>50+ सदस्यों</strong> के साथ लगातार समाज के उत्थान के लिए
    कार्यरत है।
  </p>
</div>

        
        {/* MISSION & VISION */}
<div className="section-title" style={{ marginTop: '40px' }}>
  <h2>Mission & Vision</h2>
  <p className="subtitle hindi-text">हमारा उद्देश्य एवं दृष्टिकोण</p>
  <div className="divider"></div>
</div>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
  <div className="card" style={{ borderTop: '4px solid var(--saffron)' }}>
    <h3 style={{ color: 'var(--saffron-dark)', fontFamily: 'Poppins', marginBottom: '10px' }}>🎯 Our Mission</h3>
    <p style={{ lineHeight: '1.9', color: 'var(--text-light)', fontSize: '0.95rem' }}>
      To empower the underprivileged, preserve Sanatan culture, and create a society
      where every individual — regardless of their economic background — lives with
      dignity, justice, and opportunity.
    </p>
    <p className="hindi-text" style={{ marginTop: '10px', fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.9' }}>
      वंचितों को सशक्त बनाना, सनातन संस्कृति की रक्षा करना और एक ऐसे समाज का निर्माण
      करना जहाँ हर व्यक्ति गरिमा और न्याय के साथ जी सके।
    </p>
  </div>
  <div className="card" style={{ borderTop: '4px solid var(--gold)' }}>
    <h3 style={{ color: 'var(--saffron-dark)', fontFamily: 'Poppins', marginBottom: '10px' }}>🌟 Our Vision</h3>
    <p style={{ lineHeight: '1.9', color: 'var(--text-light)', fontSize: '0.95rem' }}>
      A united, self-reliant, and spiritually grounded community of Fatehabad — where
      tradition meets progress, and every family is supported in times of need.
    </p>
    <p className="hindi-text" style={{ marginTop: '10px', fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.9' }}>
      फतेहाबाद का एक एकजुट, आत्मनिर्भर और आध्यात्मिक रूप से जागरूक समाज — जहाँ
      परंपरा और प्रगति साथ चलें।
    </p>
  </div>
</div>

        {/* UDYAM CERTIFICATION */}
        <div className="section-title" style={{ marginTop: '40px' }}>
          <h2>UDYAM Registration</h2>
          <p className="subtitle hindi-text">उद्यम पंजीकरण</p>
          <div className="divider"></div>
        </div>

        <div className="card" style={{
          marginBottom: '32px',
          borderLeft: '5px solid var(--saffron)',
          background: 'linear-gradient(135deg, rgba(255,107,0,0.05) 0%, rgba(89,31,0,0.05) 100%)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h3 style={{ color: 'var(--saffron-dark)', marginBottom: '16px', fontFamily: 'Poppins' }}>🏛️ UDYAM Registered</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '16px' }}>
                <strong>Brahmarshi Seva Sangh</strong> is proudly registered under the <strong>UDYAM Registration scheme</strong> of the Ministry of Micro, Small and Medium Enterprises, Government of India. This certification recognizes our commitment to formal compliance and social accountability.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.6)', padding: '12px', borderRadius: '6px' }}>
                <p style={{ color: 'var(--saffron-dark)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '6px' }}>📋 Registration Details:</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: '6px 0' }}><strong>Reg. No:</strong> UDYAM-BR-23-0120997</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: '6px 0' }}><strong>Enterprise Type:</strong> Micro</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: '6px 0' }}><strong>Major Activity:</strong> Services</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: '6px 0' }}><strong>Social Category:</strong> General</p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: '6px 0' }}><strong>Date of Registration:</strong> 04/04/2026</p>
              </div>
            </div>
            <div>
              <h3 style={{ color: 'var(--saffron-dark)', marginBottom: '16px', fontFamily: 'Poppins' }}>✅ Compliance & Trust</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '12px' }}>
                This certification affirms that Brahmarshi Seva Sangh operates with:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '12px' }}>
                <li style={{ color: 'var(--text-light)', fontSize: '0.92rem', margin: '8px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span><strong>Transparency</strong> — Complete disclosure of activities and finances</span>
                </li>
                <li style={{ color: 'var(--text-light)', fontSize: '0.92rem', margin: '8px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span><strong>Accountability</strong> — Regular reporting to government bodies</span>
                </li>
                <li style={{ color: 'var(--text-light)', fontSize: '0.92rem', margin: '8px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span><strong>Compliance</strong> — Full adherence to MSME framework</span>
                </li>
                <li style={{ color: 'var(--text-light)', fontSize: '0.92rem', margin: '8px 0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span>✓</span>
                  <span><strong>Social Service</strong> — Government-recognized charitable work</span>
                </li>
              </ul>
              <p className="hindi-text" style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                यह पंजीकरण हमारी प्रतिबद्धता को दर्शाता है कि हम पारदर्शिता, ईमानदारी और सामाजिक कल्याण के साथ काम करते हैं।
              </p>
            </div>
          </div>
        </div>

        {/* OUR WORKS */}
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
              desc: 'At Brahmarshi Seva Sangh, faith is not just a belief — it is a way of life. We regularly organize Puja, Havan, Katha, Bhajan Sandhya, and other religious ceremonies to keep the flame of Sanatan Dharma alive. These events are spiritual gatherings as well as a means to strengthen social bonds and pass our rich cultural heritage to the next generation.',
              hindiDesc: 'हम नियमित रूप से पूजा, हवन, कथा, भजन संध्या और धार्मिक अनुष्ठान आयोजित करते हैं ताकि सनातन संस्कृति जीवित रहे और समाज एकजुट रहे।'
            },
            {
              icon: '📚',
              title: 'Education Support',
              hindi: 'शिक्षा सहायता',
              desc: 'Education is the most powerful tool to change the world. BSS is committed to ensuring that no deserving child is deprived of quality education due to financial constraints. We provide scholarships, distribute study materials, offer career guidance, and connect students with the right resources to realize their full potential.',
              hindiDesc: 'हम आर्थिक रूप से कमजोर मेधावी छात्रों को छात्रवृत्ति, अध्ययन सामग्री और करियर मार्गदर्शन प्रदान करते हैं ताकि कोई भी होनहार बच्चा शिक्षा से वंचित न रहे।'
            },
            {
              icon: '🤝',
              title: 'Social Welfare & Financial Aid',
              hindi: 'समाज कल्याण एवं आर्थिक सहायता',
              desc: 'Life can be unpredictable — a sudden illness, a natural calamity, or financial hardship can push any family to the edge. BSS stands beside such families in their darkest hours. We provide direct financial assistance, ration distribution, medical aid coordination, and emergency support. No one in our community should feel alone — this is our promise.',
              hindiDesc: 'हम जरूरतमंद परिवारों को सीधी आर्थिक सहायता, राशन वितरण, चिकित्सा सहायता और आपातकालीन मदद प्रदान करते हैं। हमारा वादा है — कोई अकेला नहीं।'
            },
            {
              icon: '⚖️',
              title: 'Fight Against Corruption',
              hindi: 'भ्रष्टाचार के खिलाफ आवाज़',
              desc: 'Brahmarshi Seva Sangh believes that a just society cannot be built on corruption and injustice. We actively work to expose and challenge corruption at the local level, help common citizens access their rightful government benefits, and ensure public services are delivered with transparency and accountability. We are the voice of those who have been silenced.',
              hindiDesc: 'हम भ्रष्टाचार के विरुद्ध सक्रिय रूप से लड़ते हैं, आम नागरिकों को उनके सरकारी हक दिलाते हैं और पारदर्शिता सुनिश्चित करते हैं।'
            },
            {
              icon: '👥',
              title: 'Community Building',
              hindi: 'समुदाय निर्माण',
              desc: 'A society is only as strong as the bonds its people share. BSS works to unite the Sanatan families of Fatehabad and surrounding regions through community events, cultural programs, and collective initiatives — fostering brotherhood, mutual respect, and a shared identity. Because together, we are stronger.',
              hindiDesc: 'हम फतेहाबाद और आस-पास के सनातन परिवारों को सामुदायिक कार्यक्रमों और सांस्कृतिक आयोजनों के माध्यम से एकजुट करते हैं।'
            },
            {
              icon: '🌱',
              title: 'Youth Empowerment',
              hindi: 'युवा सशक्तिकरण',
              desc: 'The youth are not just the future — they are the present strength of our society. BSS actively engages young people in meaningful social work and leadership development. Our youth wing, led by Anshu Singh, is at the forefront of every campaign — inspiring hundreds of young volunteers to be the change they wish to see.',
              hindiDesc: 'हमारी युवा शाखा, अंशु सिंह के नेतृत्व में, युवाओं को सकारात्मक सामाजिक बदलाव का माध्यम बना रही है।'
            },
          ].map((item, i) => (
            <div key={i} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ color: 'var(--saffron-dark)', marginBottom: '4px', fontFamily: 'Poppins' }}>{item.title}</h3>
                <p className="hindi-text" style={{ color: 'var(--maroon)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '10px' }}>{item.hindi}</p>
                <p style={{ lineHeight: '1.9', color: 'var(--text-light)', marginBottom: '8px', fontSize: '0.95rem' }}>{item.desc}</p>
                <p className="hindi-text" style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.9', borderTop: '1px solid rgba(255,107,0,0.1)', paddingTop: '8px' }}>{item.hindiDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WHY JOIN US */}
        <div className="section-title" style={{ marginTop: '40px' }}>
          <h2>Why Join Us?</h2>
          <p className="subtitle hindi-text">हमसे क्यों जुड़ें?</p>
          <div className="divider"></div>
        </div>

        <div className="card" style={{ marginBottom: '24px' }}>
          <p style={{ lineHeight: '2', color: 'var(--text-light)', fontSize: '1rem', marginBottom: '16px' }}>
            Becoming a member of Brahmarshi Seva Sangh means becoming part of a movement — a
            movement rooted in <strong>service, justice, and faith</strong>. When you join BSS, you
            become a pillar of strength for countless families who need it most.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { icon: '✅', text: 'Be part of a trusted community organization' },
              { icon: '✅', text: 'Contribute to real, grassroots social change' },
              { icon: '✅', text: 'Participate in religious & cultural events' },
              { icon: '✅', text: 'Support education for deserving children' },
              { icon: '✅', text: 'Stand against injustice & corruption' },
              { icon: '✅', text: 'Empower the youth of Fatehabad' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span>{p.icon}</span>
                <span style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.7' }}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </div>
);

export default About;