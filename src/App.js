import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Areas from './pages/Areas';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Header & Navigation */}
      <header className="header">
        <Link to="/" style={{ color: '#FFD600', textDecoration: 'none' }}>
          ونش إنقاذ السيارات
        </Link>
      </header>
      {/* Hamburger for mobile */}
      <button className="hamburger" onClick={() => setMenuOpen((open) => !open)} aria-label="القائمة">
        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
        <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
      </button>
      {/* Desktop nav */}
      <nav className="nav">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">عن الشركة</Link>
        <Link to="/services">خدماتنا</Link>
        <Link to="/areas">مناطق الخدمة</Link>
        <Link to="/contact">اتصل بنا</Link>
      </nav>
      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/">الرئيسية</Link>
          <Link to="/about">عن الشركة</Link>
          <Link to="/services">خدماتنا</Link>
          <Link to="/areas">مناطق الخدمة</Link>
          <Link to="/contact">اتصل بنا</Link>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>
      {/* Footer */}
      <footer className="footer">
        تصميم وتنفيذ ايميرالد - جميع الحقوق محفوظة © 2025
      </footer>
    </>
  );
}

export default App;
