import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { Home as HomeIcon, Package, MapPin, Phone, Mail } from 'lucide-react';
import logo from './images/logo.png';

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
          <img src={logo} alt="ونش إنقاذ عمرو بحر" style={{ maxHeight: 48, marginLeft: 12, borderRadius: '0.5rem'}} />
        <Link to="/" style={{ color: '#d66853', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', justifyContent: 'center' }}>
          ونش إنقاذ عمرو بحر
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

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <Link to="/contact" className="mobile-bottom-nav__item">
          <Mail size={28} />
          <span>اتصل بنا</span>
        </Link>
        <a href="tel:01044844492" className="mobile-bottom-nav__item">
          <Phone size={28} />
          <span>اتصال</span>
        </a>
        <Link to="/areas" className="mobile-bottom-nav__item">
          <MapPin size={28} />
          <span>حول الانقاذ</span>
        </Link>
        <Link to="/services" className="mobile-bottom-nav__item">
          <Package size={28} />
          <span>خدماتنا</span>
        </Link>
        <Link to="/" className="mobile-bottom-nav__item">
          <HomeIcon size={28} />
          <span>الرئيسية</span>
        </Link>
      </nav>

      {/* Floating Phone Button (Mobile Only) */}
      <a href="tel:01044844492" className="floating-phone-btn" aria-label="اتصال سريع">
        <Phone size={32} />
      </a>
    </>
  );
}

export default App;
