// PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => (
  <div>
    <div className="page-hero">
      <h1>Privacy Policy</h1>
      <p className="hindi-text">गोपनीयता नीति</p>
    </div>
    <section className="section-padding">
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        <div className="card" style={{ marginBottom: '20px', background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))', color: 'white' }}>
          <p style={{ lineHeight: '1.9', fontSize: '0.95rem', opacity: 0.95 }}>
            At <strong>Brahmarshi Seva Sangh (BSS)</strong>, we are deeply committed to protecting
            the privacy and personal information of every individual who trusts us — whether you are
            a member, donor, volunteer, or visitor to our website. This Privacy Policy outlines how
            we collect, use, and safeguard your information.
          </p>
          <p className="hindi-text" style={{ marginTop: '12px', fontSize: '0.88rem', opacity: 0.85, lineHeight: '1.9' }}>
            ब्रह्मर्षि सेवा संघ अपने सदस्यों, दानदाताओं और वेबसाइट विज़िटर की व्यक्तिगत जानकारी की
            सुरक्षा के प्रति पूरी तरह प्रतिबद्ध है।
          </p>
        </div>

        {[
          {
            icon: '📋',
            title: '1. Information We Collect',
            titleHindi: 'हम कौन सी जानकारी एकत्र करते हैं',
            content: 'We collect only the information that is necessary to serve you better. This may include your name, contact number, email address, postal address, and any details you voluntarily provide while registering as a member, submitting a complaint, or making a donation.',
            contentHindi: 'हम केवल वही जानकारी एकत्र करते हैं जो आपकी सेवा के लिए आवश्यक है — जैसे नाम, संपर्क नंबर, ईमेल, पता और सदस्यता/शिकायत/दान के समय दी गई जानकारी।',
          },
          {
            icon: '🔒',
            title: '2. How We Use Your Information',
            titleHindi: 'आपकी जानकारी का उपयोग',
            content: 'Your information is used solely for the purpose of providing our services — including membership management, event communication, complaint resolution, and donation acknowledgment. We do not use your data for any commercial purpose whatsoever.',
            contentHindi: 'आपकी जानकारी का उपयोग केवल सदस्यता प्रबंधन, कार्यक्रम संचार, शिकायत निवारण और दान की पावती के लिए किया जाता है। किसी भी व्यावसायिक उद्देश्य के लिए इसका उपयोग नहीं होता।',
          },
          {
            icon: '🚫',
            title: '3. No Sharing of Personal Data',
            titleHindi: 'व्यक्तिगत डेटा साझा नहीं किया जाता',
            content: 'Brahmarshi Seva Sangh strictly does not share, trade, sell, or transfer the personal information of any member or donor to any third party, external organization, or individual under any circumstances. Your trust is sacred to us.',
            contentHindi: 'ब्रह्मर्षि सेवा संघ किसी भी सदस्य या दानदाता की व्यक्तिगत जानकारी किसी भी तीसरे पक्ष, बाहरी संस्था या व्यक्ति के साथ किसी भी परिस्थिति में साझा, व्यापार, बिक्री या हस्तांतरण नहीं करती।',
          },
          {
            icon: '💳',
            title: '4. Financial Information',
            titleHindi: 'वित्तीय जानकारी की सुरक्षा',
            content: 'All financial information — including donation amounts, payment details, and bank information shared with us — is treated with the highest level of confidentiality. We do not store sensitive payment data and all transactions are handled through secure channels.',
            contentHindi: 'दान की राशि, भुगतान विवरण और हमारे साथ साझा की गई बैंकिंग जानकारी को अत्यंत गोपनीय रखा जाता है। हम संवेदनशील भुगतान डेटा संग्रहीत नहीं करते।',
          },
          {
            icon: '🌐',
            title: '5. Website & Cookies',
            titleHindi: 'वेबसाइट और कुकीज़',
            content: 'Our website may collect basic usage data such as page visits and browser information to help us improve user experience. We do not use this data to identify individuals. No personally identifiable information is collected through cookies on our website.',
            contentHindi: 'हमारी वेबसाइट बेहतर अनुभव के लिए बुनियादी उपयोग डेटा एकत्र कर सकती है। इससे किसी व्यक्ति की पहचान नहीं की जाती। कुकीज़ के माध्यम से कोई व्यक्तिगत पहचान योग्य जानकारी एकत्र नहीं की जाती।',
          },
          {
            icon: '🛡️',
            title: '6. Data Security',
            titleHindi: 'डेटा सुरक्षा',
            content: 'We take reasonable technical and administrative measures to protect your information from unauthorized access, misuse, or disclosure. All data is stored securely and accessed only by authorized personnel of BSS for legitimate organizational purposes.',
            contentHindi: 'हम आपकी जानकारी को अनधिकृत पहुँच, दुरुपयोग या प्रकटीकरण से बचाने के लिए उचित तकनीकी और प्रशासनिक उपाय करते हैं।',
          },
          {
            icon: '✏️',
            title: '7. Your Rights',
            titleHindi: 'आपके अधिकार',
            content: 'Every member and donor has the right to access, update, or request deletion of their personal information held by BSS. If you wish to exercise any of these rights or have any concerns about your data, please contact us directly at the details provided below.',
            contentHindi: 'हर सदस्य और दानदाता को BSS के पास रखी अपनी व्यक्तिगत जानकारी तक पहुँचने, उसे अपडेट करने या हटाने का अनुरोध करने का अधिकार है।',
          },
          {
            icon: '🔄',
            title: '8. Changes to This Policy',
            titleHindi: 'नीति में बदलाव',
            content: 'Brahmarshi Seva Sangh reserves the right to update this Privacy Policy from time to time. Any significant changes will be communicated through our website or directly to our members. We encourage you to review this page periodically.',
            contentHindi: 'ब्रह्मर्षि सेवा संघ इस गोपनीयता नीति को समय-समय पर अद्यतन करने का अधिकार रखती है। किसी भी महत्वपूर्ण बदलाव की सूचना वेबसाइट या सदस्यों को सीधे दी जाएगी।',
          },
        ].map((item, i) => (
          <div key={i} className="card" style={{ marginBottom: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 style={{ fontFamily: 'Poppins', color: 'var(--saffron-dark)', marginBottom: '4px', fontSize: '1rem' }}>{item.title}</h3>
              <p className="hindi-text" style={{ color: 'var(--maroon)', fontWeight: '600', fontSize: '0.85rem', marginBottom: '10px' }}>{item.titleHindi}</p>
              <p style={{ lineHeight: '1.9', color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '8px' }}>{item.content}</p>
              <p className="hindi-text" style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.9', borderTop: '1px solid rgba(255,107,0,0.1)', paddingTop: '8px' }}>{item.contentHindi}</p>
            </div>
          </div>
        ))}

        {/* Contact for Privacy */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))', color: 'white', textAlign: 'center', marginTop: '8px' }}>
          <h3 style={{ fontFamily: 'Poppins', color: 'var(--gold-light)', marginBottom: '10px' }}>📬 Contact Us for Privacy Concerns</h3>
          <p style={{ opacity: 0.9, lineHeight: '1.9', fontSize: '0.95rem' }}>
            If you have any questions or concerns regarding this Privacy Policy or the handling
            of your personal data, please reach out to us:
          </p>
          <p style={{ marginTop: '14px', fontWeight: '600', color: 'var(--gold-light)' }}>
            📧 brahmarshisevasangh@gmail.com
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', marginTop: '4px' }}>
            Brahmarshi Seva Sangh, Fatehabad, Bihar, India
          </p>
          <p className="hindi-text" style={{ marginTop: '14px', fontSize: '0.88rem', opacity: 0.8, lineHeight: '1.8' }}>
            गोपनीयता से संबंधित किसी भी प्रश्न या चिंता के लिए कृपया हमसे संपर्क करें।
          </p>
          <p style={{ marginTop: '16px', fontSize: '0.8rem', opacity: 0.65 }}>
            Last updated: 2024 | ब्रह्मर्षि सेवा संघ
          </p>
        </div>

      </div>
    </section>
  </div>
);

export default PrivacyPolicy;