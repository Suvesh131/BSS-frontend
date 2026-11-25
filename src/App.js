import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Events = lazy(() => import('./pages/Events'));
const Donate = lazy(() => import('./pages/Donate'));
const MemberRegister = lazy(() => import('./pages/MemberRegister'));
const Team = lazy(() => import('./pages/Team'));
const Complaint = lazy(() => import('./pages/Complaint'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
import './assets/css/global.css';
import './assets/css/animation.css';
import { initScrollReveal, initCounters } from './utils/scrollReveal';
import { HelmetProvider } from 'react-helmet-async';

const LoadedPage = ({ page: Page }) => {
  const { pathname } = useLocation();
  const revealObserverRef = useRef(null);
  const counterObserverRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      revealObserverRef.current = initScrollReveal();
      counterObserverRef.current = initCounters();
    }, 10);

    return () => {
      clearTimeout(timer);
      revealObserverRef.current?.disconnect();
      counterObserverRef.current?.disconnect();
    };
  }, [pathname]);

  return <Page />;
};

const RoutePage = ({ page: Page }) => {
  return (
    <Suspense fallback={<div role="status" className="route-loading">Loading...</div>}>
      <LoadedPage page={Page} />
    </Suspense>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<RoutePage page={Home} />} />
            <Route path="/about" element={<RoutePage page={About} />} />
            <Route path="/services" element={<RoutePage page={Services} />} />
            <Route path="/events" element={<RoutePage page={Events} />} />
            <Route path="/gallery" element={<RoutePage page={Gallery} />} />
            <Route path="/team" element={<RoutePage page={Team} />} />
            <Route path="/donate" element={<RoutePage page={Donate} />} />
            <Route path="/contact" element={<RoutePage page={Contact} />} />
            <Route path="/join" element={<RoutePage page={MemberRegister} />} />
            <Route path="/complaint" element={<RoutePage page={Complaint} />} />
            <Route path="/privacy-policy" element={<RoutePage page={PrivacyPolicy} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;