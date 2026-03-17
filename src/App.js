import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Donate from './pages/Donate';
import MemberRegister from './pages/MemberRegister';
import Team from './pages/Team';
import Complaint from './pages/Complaint';
import './assets/css/global.css';
import './assets/css/animation.css';
import { initScrollReveal, initCounters } from './utils/scrollReveal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const observerRef = useRef(null);

  useEffect(() => {
    // Page top pe scroll
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Purana observer cleanup karo
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // 300ms baad reinit karo — React DOM ready hone ke baad
    const timer = setTimeout(() => {
      observerRef.current = initScrollReveal();
      initCounters();
    }, 10); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollReveal();
      initCounters();
    }, 10); // ✅ pehli load pe bhi 300ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<MemberRegister />} />
          <Route path="/complaint" element={<Complaint />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;