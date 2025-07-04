import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import { Home as HomeIcon, Package, MapPin, Phone, Mail, MessageCircleMore } from 'lucide-react';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
          <img src={logo} alt="ونش إنقاذ محمد بحر" style={{ maxHeight: 48, marginLeft: 12, borderRadius: '0.5rem'}} />
        <Link to="/" className='header-title' style={{ color: '#d66853', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', justifyContent: 'center' }}>
          ونش إنقاذ محمد بحر
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
      <footer className="footer custom-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">الرئيسية</a>
            <span className="footer-separator">ـ</span>
            <a href="#" className="footer-link">اتصل بنا</a>
          </div>
          <div className="footer-copyright">
            تصميم وتنفيذ ايميرالد - جميع الحقوق محفوظة © 2025 
          </div>
        </div>
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
          <span>دليل الانقاذ</span>
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
      <a href="https://wa.me/+2001044844492" className="floating-phone-btn-wa" aria-label="اتصال سريع">
      <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      {/* Floating Phone Button (Mobile Only) */}
      <a href="tel:01044844492" className="floating-phone-btn" aria-label="اتصال سريع">
        <Phone size={32} />
      </a>
    </>
  );
}

export default App;
