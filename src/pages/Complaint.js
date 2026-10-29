import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

const complaintData = [
  {
    slNo: 1,
    date: '21/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-020',
    refNo: 'REF609544',
    refLink: 'https://drive.google.com/file/d/1tvjKqUid_RK37h79VnpBJUXAbb5w5jyy/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 1 से 16 के लिए बिजली भुक्तान की जांच की मांग',
    response: 'नल जल संचालक को  वार्षिक 24000 मानदेय देने हेतु खर्च दिखाया गया',
    status: 'CLOSED',
  },
  {
    slNo: 2,
    date: '21/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-019',
    refNo: 'REF609900',
    refLink: 'https://drive.google.com/file/d/11CHkL3SiXweapoXqrE1v5HMbvvBF7yTN/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 10 में कुआं संबंधित',
    response: 'कुआं का मरमत कार्य किया गया।',
    status: 'CLOSED',
  },
  {
    slNo: 3,
    date: '20/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-018',
    refNo: 'REF604207',
    refLink: 'https://drive.google.com/file/d/1YxHEWF9W1zfdkOhAIjhwsBdQeockbR05/view',
    description: 'फतेहाबाद अंतर्गत स्वस्थ केंद्र के लिए आवेदन',
    response: 'स्वास्थ्य केन्द्र के लिए जमीन चिन्हित किया गया है।',
    status: 'FORWARD',
  },
  {
    slNo: 4,
    date: '19/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-017',
    refNo: 'REF602634',
    refLink: 'https://drive.google.com/file/d/1XFf8EckMZlXOcX2l9tcpBAaxhar_Ahil/view',
    description: 'फतेहाबाद अंतर्गत वार्ड नं 1 से 16 के बिजली बिल भुक्तान की जांच की मांग',
    response: 'पंचायत द्वारा जवाब में बताया गया कि नल-जल चालकों को मान देय के लिए भुक्तान किया गया 2nd Appeal BSS-020',
    status: 'FORWARD',
  },
  {
    slNo: 5,
    date: '19/07/2026',
    lastUpdated: '2026-07-21T10:00:00',
    latterNo: 'BSS-016',
    refNo: 'REF601542',
    refLink: 'https://drive.google.com/file/d/1tE0rv7gxYRXJTq1ByHJcjJTMeAgihY5J/view',
    description: 'फतेहाबाद पंचायत अंतर्गत वार्ड संख्या 10 में सार्वजनिक कुएँ की मरम्मत हेतु',
    response: 'पंचायत द्वार झूठा दावा मरम्मत हो चूका है 2nd Appeal BSS-019',
    status: 'FORWARD',
  },
  {
    slNo: 6,
    date: '16/07/2026',
    lastUpdated: '2026-07-16T10:00:00',
    latterNo: 'BSS-015',
    refNo: 'REF594857',
    refLink: 'https://drive.google.com/file/d/1Kwk2KEpGem_tSLVeuIKbe29LxxmeKOzx/view',
    description: 'फतेहाबाद पंचायत में स्वच्छता मद में व्यय की गई राशि के बावजूद नियमित कचरा संग्रहण सेवा नहीं मिलने एवं जांच कर कार्रवाई किए जाने हेतु',
    response: 'पैडल रिक्शा द्वारा कचरा कचरा का उठाव कार्य जल्द शुरू किया जाएगा।',
    status: 'CLOSED',
  },
  {
    slNo: 7,
    date: '14/07/2026',
    lastUpdated: '2026-07-14T10:00:00',
    latterNo: 'BSS-014',
    refNo: 'REF577636',
    refLink: 'https://drive.google.com/file/d/1-azgBxIC5ynCJD-mwIsQIyZQdyIj2sG6/view',
    description: 'फतेहाबाद पंचायत में जिम सेंटर निर्माण के नाम पर सरकारी राशि के कथित गबन एवं फर्जी भुगतान की जांच कर आवश्यक कार्रवाई करने हेतु',
    response: 'पंचायत सचिव द्वारा उत्तर जमीन अधिष्ठापन पर खर्च की गई  2nd Appeal BSS-024',
    status: 'FORWARD',
  },
  {
    slNo: 8,
    date: '14/07/2026',
    lastUpdated: '2026-07-14T10:00:00',
    latterNo: 'BSS-013',
    refNo: 'REF573757',
    refLink: 'https://drive.google.com/file/d/1yjGomofYgy3AFcS23BDcz5g9mAY6Zw0l/view',
    description: 'फतेहाबाद पंचायत एवं आस पास के सभी पंचायती में मच्छरों के बढ़ते प्रकोप एवं फॉगिंग कराने हेतु ',
    response: 'जनित रोग नियंत्रण विभाग द्वारा उत्तर पंचायत में अभी ऐसी कोई प्रबंधन नहीं है।',
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
    response: 'कुआं का निर्माण कार्य पूरा कर दिया गया।',
    status: 'CLOSED',
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
  {
    slNo: 11,
    date: '22/07/2026',
    lastUpdated: '2026-07-22T06:00:00',
    latterNo: 'BSS-021',
    refNo: 'REF629035',
    refLink: 'https://drive.google.com/file/d/1irVm1bLL_QMlvUXbMZcqV593iE0EuLXh/view',
    description: 'फतेहाबाद बाजार स्थित सार्वजनिक बस स्टैंड पर अवैध कब्जा हटाकर यात्रियों के लिए मूलभूत सुविधाएं उपलब्ध कराने हेतु आवेदन।',
    response: 'चिन्हित व्यक्ति को नोटिस भेजा जाएगा। 2nd Appeal BSS-030',
    status: 'FORWARD',
  },
  {
    slNo: 12,
    date: '22/07/2026',
    lastUpdated: '2026-07-22T07:00:00',
    latterNo: 'BSS-022',
    refNo: 'REF629881',
    refLink: 'https://drive.google.com/file/d/1ECEKizeRrJvYOJAT6wCDx08j1KuUU4A2/view',
    description: 'फतेहाबाद बाजार में भारी वर्षा के कारण होने वाले जलजमाव की समस्या के स्थायी समाधान हेतु आवेदन',
    response: 'ग्रामीण कार्य विभाग को BDO द्वारा समाधान के लिए ज्ञापन सौका गया।',
    status: 'CLOSED',
  },
  {
    slNo: 13,
    date: '24/07/2026',
    lastUpdated: '2026-07-24T07:00:00',
    latterNo: 'BSS-024',
    refNo: 'REF637810',
    refLink: 'https://drive.google.com/file/d/1nWlQsKji3ctqxVXI5F8Eh4yoPsSQduyw/view',
    description: 'वास्तव में राशि जिम अवस्थापित पर व्यय की गई है तो फतेहाबाद पंचायत में अभी तक जिम सेंटर क्यों नहीं बना',
    response: 'मुसहर टोला में विद्यालय में बनाया गया है हालांकि, ब्रह्मर्षि सेवा संघ (BSS) की टीम द्वारा अभी तक इसका भौतिक सत्यापन नहीं किया गया है।',
    status: 'CLOSED',
  },
  {
    slNo: 14,
    date: '28/07/2026',
    lastUpdated: '2026-07-28T07:00:00',
    latterNo: 'BSS-025',
    refNo: 'REF656410',
    refLink: 'https://drive.google.com/file/d/1MOogpOjSf0Hj3pun0WuP0dv5432UF6mn/view',
    description: 'फतेहाबाद में पूर्व से चिन्हित भूमि पर स्वास्थ्य केंद्र का शीघ्र निर्माण कराने एवं निर्माण कार्य में हो रही देरी के संबंध में',
    response: 'करवाई हेतु स्वस्थ विभाग पटना को पत्र स्थानांतरण किया गया।',
    status: 'CLOSED',
  },
  {
    slNo: 15,
    date: '30/07/2026',
    lastUpdated: '2026-07-30T07:00:00',
    latterNo: 'BSS-027',
    refNo: 'REF665302',
    refLink: 'https://drive.google.com/file/d/1B8aiPQY1iypPKpy2bYcq0Gp_SjxoZV9n/view',
    description: 'पवित्र सावन माह के दौरान विशेष रूप से सोमवार के दिन मांस एवं मछली की दुकानों के संचालन के संबंध में आवश्यक जांच हेतु।',
    response: 'कार्रवाई किया गया, प्रशासन सभी चौक चौराहे पर तैनात रहेंगे।',
    status: 'CLOSED',
  },
  {
    slNo: 16,
    date: '06/08/2026',
    lastUpdated: '2026-08-06T07:00:00',
    latterNo: 'BSS-028',
    refNo: 'REF749882',
    refLink: 'https://drive.google.com/file/d/1FGtKljmb2G_tds7XKxzi76CKKJ32bHE2/view',
    description: 'फतेहाबाद पंचायत अंतर्गत बाजार में दुकानदारों से कथित अवैध वसूली की जांच एवं सरकारी कर/शुल्क संबंधी जानकारी उपलब्ध कराने हेतु आवेदन',
    response: 'कार्रवाई किया गया, पंचायत प्रतिनिधि द्वारा समझौता कराया गया छायाप्रति संलग्न है।',
    status: 'CLOSED',
  },
  {
    slNo: 17,
    date: '07/08/2026',
    lastUpdated: '2026-08-07T07:00:00',
    latterNo: 'BSS-029',
    refNo: 'REF694701',
    refLink: 'https://drive.google.com/file/d/1Rt2A4Ob-WgnhT0alkUPgExRt01256xxx/view',
    description: 'फतेहाबाद पंचायत में स्ट्रीट और सोलर लाइट पर करीब ₹18.73 लाख खर्च, फिर भी अंधेरा क्यों, जांच हेतु आवेदन',
    response: 'पंचायत सचिव द्वारा प्रस्तुत जवाब में आवश्यक तथ्यों एवं साक्ष्यों का स्पष्ट उल्लेख नहीं किया गया है। जवाब तथ्यात्मक रूप से अपूर्ण एवं असंतोषजनक है।',
    status: 'CLOSED',
  },
  {
    slNo: 18,
    date: '07/08/2026',
    lastUpdated: '2026-08-07T10:00:00',
    latterNo: 'BSS-030',
    refNo: 'REF697289',
    refLink: 'https://drive.google.com/file/d/1Svs9v1B8hPMPJSc9UHSWa4cvIg6m1Q2N/view',
    description: 'फतेहाबाद बाजार स्थित बस स्टैंड/यात्री शेड पर अवैध कब्जा के संबंध में प्राप्त उत्तर पर आपत्ति एवं पुनः कार्रवाई हेतु आवेदन।',
    response: 'नोटिस के बाद भी यात्री सेड खाली नहीं हुआ। 3rd Appeal BSS-035',
    status: 'FORWARD',
  },
  {
    slNo: 19,
    date: '07/08/2026',
    lastUpdated: '2026-08-07T11:00:00',
    latterNo: 'BSS-031',
    refNo: 'REF697585',
    refLink: 'https://drive.google.com/file/d/1c8wd-VYPyeZsdHlALIbD4Ut72cpDYf2U/view',
    description: 'मुजफ्फरपुर एवं सारण को जोड़ने वाले फतेहाबाद-चंचलिया पुल निर्माण कार्य की विस्तृत जानकारी उपलब्ध कराने हेतु।',
    response: 'कार्रवाई किया गया, सभी उत्तर संलग्न है।',
    status: 'CLOSED',
  },
  {
    slNo: 20,
    date: '22/08/2026',
    lastUpdated: '2026-08-07T12:00:00',
    latterNo: 'BSS-032',
    refNo: 'REF760262',
    refLink: 'https://drive.google.com/file/d/1p1NT48w6hUjLgM7W_xgAAmoHrxEpaWcL/view',
    description: 'फतेहाबाद–कमलपुरा सड़क के चौड़ीकरण एवं पुनर्निर्माण, चंचलिया पुल निर्माण के पश्चात प्रस्तावित मुख्य मार्ग तथा यातायात व्यवस्था के संबंध में विस्तृत जानकारी एवं आवश्यक कार्रवाई हेतु आवेदन।',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 21,
    date: '23/08/2026',
    lastUpdated: '2026-08-07T13:00:00',
    latterNo: 'BSS-033',
    refNo: 'REF763079',
    refLink: 'OFFICIAL',
    description: 'फतेहाबाद पंचायत अंतर्गत सभी विद्यालयों में शैक्षणिक व्यवस्था एवं मूलभूत सुविधाओं के जायजा हेतु निरीक्षण की अनुमति आवेदन',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 22,
    date: '24/08/2026',
    lastUpdated: '2026-08-24T12:00:00',
    latterNo: 'BSS-034',
    refNo: 'REF767253',
    refLink: 'https://drive.google.com/file/d/1qs8hSpFB6K1l7wvBAQfP4eq3xhv9s2IG/view',
    description: 'सोशल मीडिया पर जातिसूचक, धार्मिक एवं अश्लील/अपमानजनक वीडियो, पोस्ट एवं टिप्पणियों के माध्यम से सामाजिक सौहार्द बिगाड़ने के संबंध में शिकायत एवं उचित कानूनी कार्रवाई हेतु।',
    response: 'मामला पारू थाना का नहीं होने के कारण शिकायत को बंद कर दिया गया।',
    status: 'CLOSED',
  },
  {
    slNo: 23,
    date: '03/09/2026',
    lastUpdated: '2026-09-03T12:00:00',
    latterNo: 'BSS-035',
    refNo: 'REF805578',
    refLink: 'https://drive.google.com/file/d/1IrWr3bURy3XEIZs-4Vrh1oxGCDe9McEH/view',
    description: 'फतेहाबाद पंचायत अंतर्गत बाजार स्थित यात्री शेड/बस स्टैंड से अवैध कब्जा हटाकर आमजन एवं यात्रियों के लिए पुनः सुविधा उपलब्ध कराने के संबंध में।',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 24,
    date: '11/09/2026',
    lastUpdated: '2026-09-11T12:00:00',
    latterNo: 'BSS-037',
    refNo: 'REF824452',
    refLink: 'https://drive.google.com/file/d/19jeZp2dRT2vVlEdbzhvsYg1Vz5mo0Mxt/view',
    description: 'फतेहाबाद पंचायत में पंचायत सरकार भवन निर्माण में ₹6,57,000/- की राशि के व्यय/भुगतान की वास्तविक, तकनीकी एवं वित्तीय जाँच कराने तथा भवन की देख-रेख में लापरवाही की जाँच के संबंध में',
    response: '',
    status: 'PENDING',
  },
  {
    slNo: 25,
    date: '13/09/2026',
    lastUpdated: '2026-09-13T12:00:00',
    latterNo: 'BSS-038',
    refNo: 'REF833800',
    refLink: 'https://drive.google.com/file/d/14yyvznMz-6wAoF0Is0NjbqRf_A0v-_s1/view?usp=drivesdk',
    description: 'मदरपुर पंचायत अंतर्गत ग्राम गोसी छपरा के समीप डबरा नदी पर पुल निर्माण कराने हेतु स्थल निरीक्षण, सर्वेक्षण एवं आवश्यक कार्रवाई के संबंध में',
    response: 'प्रखंड विकास पदाधिकारी (BDO), अमनौर, सारण ने आपकी शिकायत को आगे पथ प्रमंडल, छपरा के कार्यपालक अभियंता को भेजा है।',
    status: 'CLOSED',
  },
  {
    slNo: 26,
    date: '14/09/2026',
    lastUpdated: '2026-09-14T12:00:00',
    latterNo: 'BSS-041',
    refNo: 'CLICK',
    refLink: 'https://drive.google.com/file/d/1HSGMcX4UTb299zV3zxoxCHKJskVivSu_/view',
    description: 'ग्राम पंचायत गौरा में गौरा बाजार से हाईस्कूल जाने वाली मुख्य सड़क सोलर लाइट अथवा स्ट्रीट लाइट के लिए।',
    response: 'कार्रवाई किया गया।  Phase 2 में सोलर लाइट लग जाएगी वर्तमान में अस्थायी  बेवस्ता किया जा रहा है।',
    status: 'CLOSED',
  },
  {
    slNo: 27,
    date: '01/10/2026',
    lastUpdated: '2026-10-01T12:00:00',
    latterNo: 'BSS-042',
    refNo: 'CLICK',
    refLink: 'https://drive.google.com/file/d/1DTISmVqKqdbC_Y_oh47JQDAuY1eQoPfT/view',
    description: 'बाढ़ का पानी निकलने के बाद फतेहाबाद एवं आसपास के बाढ़ प्रभावित गांवों में साफ-सफाई, कचरा उठाव एवं मच्छर नियंत्रण हेतु आवश्यक कार्रवाई के संबंध में।',
    response: '',
    status: 'PENDING',
  },
];

const statusStyles = {
  PENDING: { bg: '#fff3cd', color: '#b45f00' },
  PROCESS: { bg: '#d6e4ff', color: '#1d4ed8' },
  CLOSED: { bg: '#d4edda', color: '#1e7e34' },
  FORWARD: { bg: '#e0d4ff', color: '#6b21a8' },
};

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgDWhuPeYG78bh6OjCartoABEPAzqsNvgGysl3rUvLVIrHjhDVIP6iQuig6Rt4A0fuXA/exec';
const FORM_FILE_ID = '1NSnJ61VQCQ-r0B-D4230983pIbx_iufn';
const FORM_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FORM_FILE_ID}`;

const Complaint = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);

  const counts = useMemo(() => {
    const total = complaintData.length;
    const pending = complaintData.filter((c) => c.status === 'PENDING').length;
    const process = complaintData.filter((c) => c.status === 'PROCESS').length;
    const closed = complaintData.filter((c) => c.status === 'CLOSED').length;
    const forward = complaintData.filter((c) => c.status === 'FORWARD').length;
    return { total, pending, process, closed, forward };
  }, []);

  const handleCardClick = (status) => {
    setStatusFilter((prev) => (prev === status ? null : status));
  };

  const filteredData = useMemo(() => {
    let data = [...complaintData];
    if (statusFilter) {
      data = data.filter((row) => row.status === statusFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(q))
      );
    }
    data.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    return data;
  }, [search, statusFilter]);

  const handleRegisterComplaint = () => {
    window.open(SCRIPT_URL, '_blank', 'noopener,noreferrer');
  };

  const tabBtnStyle = (active) => ({
    padding: '8px 20px',
    borderRadius: '50px',
    border: active ? 'none' : '2px solid var(--saffron-dark)',
    background: active ? 'linear-gradient(135deg, var(--saffron-dark), var(--maroon))' : 'transparent',
    color: active ? 'white' : 'var(--saffron-dark)',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    boxShadow: active ? '0 4px 12px rgba(180,60,0,0.3)' : 'none',
    transition: 'all 0.2s',
  });

  return (
    <div>
      <Helmet>
        <title>Complaint | Brahmarshi Seva Sangh</title>
        <meta name="description" content="File a complaint with Brahmarshi Seva Sangh (BSS) or view complaint status." />
        <link rel="canonical" href="https://www.brahmarshisevasangh.in/complaint" />
      </Helmet>

      <div className="page-hero" style={{ padding: '30px 20px' }}>
        <h1 style={{ margin: '0 0 5px' }}>Complaint Portal</h1>
        <p className="hindi-text" style={{ margin: 0 }}>शिकायत एवं कार्रवाई पोर्टल</p>
      </div>

      <section className="section-padding" style={{ padding: '20px 10px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Top Toggle Buttons */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveTab('register')} style={tabBtnStyle(activeTab === 'register')}>
              📝 नई शिकायत (Register)
            </button>
            <button onClick={() => setActiveTab('status')} style={tabBtnStyle(activeTab === 'status')}>
              📄 स्थिति देखें (Status)
            </button>
          </div>

          {/* ---------- REGISTER COMPLAINT TAB ---------- */}
          {activeTab === 'register' && (
            <div className="card" style={{ padding: '20px', borderRadius: '12px', borderTop: '4px solid var(--saffron-dark)' }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--saffron-dark)', marginBottom: '10px' }}>शिकायत कैसे दर्ज करें?</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '15px' }}>
                शिकायत दर्ज करने के लिए नीचे दिए गए बटन पर क्लिक करें। यह आपको हमारे आधिकारिक फॉर्म पोर्टल पर ले जाएगा।
              </p>
              
              <div style={{ background: '#fef8f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fce8df' }}>
                <h4 style={{ margin: '0 0 10px', color: '#b45f00' }}>📋 फॉर्म भरने के निर्देश:</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.88rem', color: '#444', lineHeight: '1.6' }}>
                  <li><b>व्यक्तिगत विवरण:</b> अपना नाम, पिता का नाम, पूरा पता और 10 अंकों का मोबाइल नंबर सही-सही भरें।</li>
                  <li><b>अपील (पूर्व शिकायत):</b> यदि यह पहले की गई शिकायत पर अपील है, तो 'पूर्व शिकायत नंबर' (उदा. BSS-CMP-2026-00001) अवश्य डालें।</li>
                  <li><b>शिकायत विवरण:</b> बॉक्स में अपनी समस्या को स्पष्ट रूप से लिखें।</li>
                  <li><b>दस्तावेज़ (Optional):</b> आप अपनी शिकायत से जुड़ी PDF फाइल (अधिकतम 1 MB) अपलोड कर सकते हैं।</li>
                  <li><b>ट्रैकिंग (Status):</b> फॉर्म Submit करने के बाद आपको एक <strong>शिकायत नंबर</strong> प्राप्त होगा। इस नंबर का उपयोग करके आप <em>'स्थिति देखें (Status)'</em> सेक्शन या ट्रैकिंग पेज पर अपनी शिकायत का स्टेटस जान सकते हैं।</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={handleRegisterComplaint} 
                  style={{
                    padding: '12px 30px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--saffron-dark)',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  }}
                >
                  शिकायत फॉर्म पर जाएं ➔
                </button>
              </div>
            </div>
          )}
          {/* ---------- OFFLINE FORM DOWNLOAD ---------- */}
<div
  style={{
    marginTop: '24px',
    paddingTop: '20px',
    borderTop: '1px dashed #e0cfc2',
    textAlign: 'center',
  }}
>
  <h4 style={{ margin: '0 0 6px', color: 'var(--saffron-dark)', fontSize: '1.05rem' }}>
    📥 ऑफलाइन शिकायत के लिए
  </h4>
  <p style={{ margin: '0 0 14px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
    यदि आपके पास इंटरनेट की सुविधा नहीं है, तो शिकायत फॉर्म डाउनलोड कर प्रिंट निकालें, उसे भरें और BSS कार्यालय में जमा करें अथवा WhatsApp के माध्यम से भेजें।
  </p>

  <button
  type="button"
  onClick={() => window.open(FORM_DOWNLOAD_URL, '_blank', 'noopener,noreferrer')}
  style={{
    padding: '12px 28px',
    borderRadius: '8px',
    border: '2px solid var(--saffron-dark)',
    background: 'var(--saffron-dark)',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    lineHeight: '1.4',
  }}
>
  📄 Complaint Form Download / शिकायत फॉर्म डाउनलोड
</button>
</div>

          {/* ---------- VIEW COMPLAINT STATUS TAB ---------- */}
          {activeTab === 'status' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                <div
                  className="card"
                  onClick={() => handleCardClick(null)}
                  style={{
                    background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: statusFilter === null ? '2px solid #1d4ed8' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1d4ed8' }}>{counts.total}</div>
                  <div style={{ fontSize: '0.8rem', color: '#444', fontWeight: '600' }}>Total Complaints</div>
                </div>

                <div
                  className="card"
                  onClick={() => handleCardClick('PENDING')}
                  style={{
                    background: 'linear-gradient(135deg, #fff3cd, #fffbeb)',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: statusFilter === 'PENDING' ? '2px solid #b45f00' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#b45f00' }}>{counts.pending}</div>
                  <div style={{ fontSize: '0.8rem', color: '#444', fontWeight: '600' }}>Pending</div>
                </div>

                <div
                  className="card"
                  onClick={() => handleCardClick('PROCESS')}
                  style={{
                    background: 'linear-gradient(135deg, #d6e4ff, #eef2ff)',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: statusFilter === 'PROCESS' ? '2px solid #1d4ed8' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1d4ed8' }}>{counts.process}</div>
                  <div style={{ fontSize: '0.8rem', color: '#444', fontWeight: '600' }}>In Process</div>
                </div>

                <div
                  className="card"
                  onClick={() => handleCardClick('FORWARD')}
                  style={{
                    background: 'linear-gradient(135deg, #e0d4ff, #f3ecff)',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: statusFilter === 'FORWARD' ? '2px solid #6b21a8' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#6b21a8' }}>{counts.forward}</div>
                  <div style={{ fontSize: '0.8rem', color: '#444', fontWeight: '600' }}>Forwarded</div>
                </div>

                <div
                  className="card"
                  onClick={() => handleCardClick('CLOSED')}
                  style={{
                    background: 'linear-gradient(135deg, #d4edda, #eefdf1)',
                    padding: '15px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: statusFilter === 'CLOSED' ? '2px solid #1e7e34' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e7e34' }}>{counts.closed}</div>
                  <div style={{ fontSize: '0.8rem', color: '#444', fontWeight: '600' }}>Closed</div>
                </div>
              </div>

              <div className="card" style={{ padding: '16px', borderRadius: '12px' }}>
                <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                  <input
                    type="text"
                    placeholder="Search complaint..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '0.85rem',
                      width: '100%',
                      maxWidth: '250px',
                    }}
                  />
                </div>

                <div style={{ maxHeight: '350px', overflowY: 'auto', overflowX: 'auto', borderRadius: '6px' }}>
                  <table
                    style={{
                      width: '100%',
                      minWidth: '790px',
                      borderCollapse: 'collapse',
                      fontSize: '0.85rem',
                      tableLayout: 'fixed',
                    }}
                  >
                    <colgroup>
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '90px' }} />
                      <col style={{ width: '90px' }} />
                      <col style={{ width: '90px' }} />
                      <col style={{ width: '190px' }} />
                      <col style={{ width: '175px' }} />
                      <col style={{ width: '100px' }} />
                    </colgroup>
                    <thead>
                      <tr style={{ background: 'var(--cream-dark)' }}>
                        {['Sl. No.', 'Date', 'Latter No.', 'Ref. No', 'Complaint Description', 'Response', 'Status'].map(
                          (h) => (
                            <th
                              key={h}
                              style={{
                                padding: '10px',
                                textAlign: 'left',
                                borderBottom: '2px solid var(--saffron-dark)',
                                borderRight: '1px solid #e8dfce',
                                color: 'var(--saffron-dark)',
                                position: 'sticky',
                                top: 0,
                                background: 'var(--cream-dark)',
                                zIndex: 1,
                              }}
                            >
                              {h}
                            </th>
                          )
                        )}
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
                            <td style={{ padding: '8px 10px', borderRight: '1px solid #eee' }}>{index + 1}</td>
                            <td style={{ padding: '8px 10px', borderRight: '1px solid #eee' }}>{row.date}</td>
                            <td style={{ padding: '8px 10px', whiteSpace: 'nowrap', borderRight: '1px solid #eee' }}>
                              {row.latterNo}
                            </td>
                            <td style={{ padding: '8px 10px', fontWeight: '600', borderRight: '1px solid #eee' }}>
                              {row.refLink ? (
                                <a
                                  href={row.refLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    color: 'var(--saffron-dark)',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {row.refNo}
                                </a>
                              ) : (
                                row.refNo
                              )}
                            </td>
                            <td style={{ padding: '8px 10px', wordBreak: 'break-word', borderRight: '1px solid #eee' }}>
                              {row.description}
                            </td>
                            <td style={{ padding: '8px 10px', wordBreak: 'break-word', borderRight: '1px solid #eee' }}>
                              {row.response || '-'}
                            </td>
                            <td style={{ padding: '8px 10px' }}>
                              <span
                                style={{
                                  padding: '4px 8px',
                                  borderRadius: '20px',
                                  fontSize: '0.7rem',
                                  fontWeight: '600',
                                  whiteSpace: 'nowrap',
                                  display: 'inline-block',
                                  background: statusStyles[row.status]?.bg || '#eee',
                                  color: statusStyles[row.status]?.color || '#333',
                                }}
                              >
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