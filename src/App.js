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
import AreaDetail from './pages/AreaDetail';
import truck from './images/truck.png'
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
      <header className="header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
      }}>
        
        <h1
          style={{
            fontFamily: 'Cairo, Tahoma, Arial, sans-serif',
            fontWeight: 900,
            fontSize: '1.2rem',
            color: '#ffc107',
            padding: '0.3em 0.8em',
            margin: '0 33px 0 0',
            letterSpacing: '1.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.1,
            textShadow: 'rgb(0 0 0) 0px 2px 8px',
            direction: 'rtl',
            minWidth: '120px',
            maxWidth: '100vw',
            width: 'fit-content',
            transition: 'all 0.2s',
            borderBottom:'3px solid black',
            position:'relative'
          }}
        >
          Mohamed Bahr
        </h1>
        <img src={truck} alt="truck" className='truck' />
        <div style={{display: 'flex', gap: '1rem', marginLeft:'10px'}}>
          <button
            className="header-icon-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="القائمة"
            style={{
              width: 40,
              height: 40,
              background: '#fff',
              border: 'none',
              borderRadius: '0.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #00336622',
              cursor: 'pointer',
              margin: 0,
              padding: 0,
              transition: 'box-shadow 0.2s',
            }}
          >
            <span style={{display: 'block', width: 32, height: 32, position: 'relative'}}>
              <span style={{position: 'absolute', top: 8, left: 0, right: 0, height: 3, background: '#0a2c61', borderRadius: 2, transition: '0.2s', transform: menuOpen ? 'rotate(45deg) translateY(10px)' : 'none'}}></span>
              <span style={{position: 'absolute', top: 15, left: 0, right: 0, height: 3, background: '#0a2c61', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: '0.2s'}}></span>
              <span style={{position: 'absolute', top: 22, left: 0, right: 0, height: 3, background: '#0a2c61', borderRadius: 2, transition: '0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-10px)' : 'none'}}></span>
            </span>
          </button>
          <a
            href="tel:01044844492"
            className="header-icon-btn"
            aria-label="اتصال سريع"
            style={{
              width: 40,
              height: 40,
              background: '#fff',
              border: 'none',
              borderRadius: '0.3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px #00336622',
              cursor: 'pointer',
              margin: 0,
              padding: 0,
              transition: 'box-shadow 0.2s',
              textDecoration: 'none',
            }}
          >
            <Phone size={32} color="#0a2c61" strokeWidth={2.2} />
          </a>
        </div>
        <style>{`
          @media (max-width: 500px) {
            .header h1 {
              font-size: 1.1rem !important;
              padding: 0.2em 0.5em !important;
              min-width: 80px !important;
            }
            .header-icon-btn {
              width: 40px !important;
              height: 40px !important;
            }
            .header {
              padding: 0.5rem 0.5rem !important;
            }
          }
        `}</style>
      </header>
      {/* Hamburger for mobile */}
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
        <Route path="/areas/:areaName" element={<AreaDetail />} />
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
