import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import {
  Home as HomeIcon,
  Package,
  MapPin,
  Phone,
  Mail,
  MessageCircleMore,
  Menu,
  X,
  Wrench,
  Lightbulb,
  BatteryCharging,
  Users,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import AreaDetail from "./pages/AreaDetail";
import truck from "./images/truck.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Navigation links
  const navLinks = [
    { to: "/", label: "الرئيسية", icon: <HomeIcon size={20} /> },
    { to: "/about", label: "عن الشركة", icon: <MessageCircleMore size={20} /> },
    { to: "/services", label: "خدماتنا", icon: <Package size={20} /> },
    { to: "/areas", label: "مناطق الخدمة", icon: <MapPin size={20} /> },
    { to: "/contact", label: "اتصل بنا", icon: <Phone size={20} /> },
  ];

  const serviceQuickLinks = [
    {
      id: "rescue",
      label: "إنقاذ السيارات",
      icon: <Wrench size={18} color="#0a2c61" />,
    },
    {
      id: "equipment",
      label: "نقل المعدات",
      icon: <Lightbulb size={18} color="#0a2c61" />,
    },
    {
      id: "fuel",
      label: "التزود بالوقود",
      icon: <Package size={18} color="#0a2c61" />,
    },
    {
      id: "battery",
      label: "وصلة بطارية",
      icon: <BatteryCharging size={18} color="#0a2c61" />,
    },
    {
      id: "tires",
      label: "تغيير الاطارات",
      icon: <Users size={18} color="#0a2c61" />,
    },
  ];

  const contactQuickLinks = [
    {
      type: "a",
      href: "tel:01044844492",
      label: "اتصل الآن",
      icon: <Phone size={18} color="#0a2c61" />,
    },
    {
      type: "a",
      href: "https://wa.me/201044844492",
      label: "واتساب",
      icon: <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#25D366" }} />,
    },
    {
      type: "link",
      to: "/contact",
      label: "نموذج التواصل",
      icon: <Mail size={18} color="#0a2c61" />,
    },
  ];

  const governorates = [
    "القاهرة",
    "الجيزة",
    "الإسكندرية",
    "القليوبية",
    "بورسعيد",
    "السويس",
    "الدقهلية",
    "الشرقية",
    "الغربية",
    "المنوفية",
    "البحيرة",
    "كفر الشيخ",
    "دمياط",
    "الإسماعيلية",
    "الفيوم",
    "بني سويف",
    "المنيا",
    "أسيوط",
    "سوهاج",
    "قنا",
    "الأقصر",
    "أسوان",
    "البحر الأحمر",
    "الوادي الجديد",
    "مطروح",
    "شمال سيناء",
    "جنوب سيناء",
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <>
      <style>
        {`
          /* Header Styles */
          .header {
            position: sticky;
            top: 0;
            z-index: 6000;
            background: linear-gradient(90deg, #0a2c61 0%, #1976d2 100%);
            box-shadow: 0 2px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
            overflow: visible;
          }

          .header-container {
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .header-brand {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
            color: inherit;
          }

          .header-logo {
            font-family: 'Cairo, Tahoma, Arial, sans-serif';
            font-weight: 900;
            font-size: 1.3rem;
            color: #ffc107;
            letter-spacing: 1.5px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border-bottom: 3px solid #ffc107;
            padding: 0.3em 0.8em;
            transition: all 0.3s ease;
          }

          .header-truck {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
          }

          /* Desktop Navigation */
          .nav-desktop {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            z-index: 6500;
            overflow: visible;
          }

          .nav-link {
            color: #fff;
            text-decoration: none;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            overflow: hidden;
          }

          .nav-link:hover {
            background: rgba(255,255,255,0.1);
            color: #ffc107;
            transform: translateY(-2px);
          }

          .nav-link.active {
            background: rgba(255,193,7,0.2);
            color: #ffc107;
            border: 1px solid rgba(255,193,7,0.3);
          }

          .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: #ffc107;
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }

          .nav-link:hover::before {
            width: 80%;
          }

          /* Dropdown Menu */
          .dropdown {
            position: relative;
            z-index: 1500;
          }

          .dropdown-menu {
            position: absolute;
            top: calc(100% + 0px);
            right: 0;
            min-width: 240px;
            background: #fff;
            color: #0a2c61;
            border-radius: 12px;
            box-shadow: 0 12px 32px rgba(0,0,0,0.15);
            padding: 0.5rem;
            display: none;
            z-index: 2000;
            border: 1px solid rgba(10,44,97,0.1);
            direction: rtl;
          }

          .dropdown.is-open .dropdown-menu {
            display: block;
            animation: dropdownIn 160ms ease-out;
          }

          @keyframes dropdownIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.6rem 0.8rem;
            border-radius: 8px;
            color: #0a2c61;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: background 0.2s ease, transform 0.2s ease;
          }

          .dropdown-item:hover {
            background: rgba(25,118,210,0.08);
            transform: translateX(-2px);
          }

          /* Areas dropdown as multi-column grid */
          .dropdown-menu.areas-dropdown-grid {
            grid-template-columns: repeat(3, minmax(140px, 1fr));
            gap: 4px 8px;
            min-width: 520px;
            max-width: 720px;
          }

          .dropdown.is-open .dropdown-menu.areas-dropdown-grid {
            display: grid;
          }

          .dropdown-menu.areas-dropdown-grid .dropdown-item {
            padding: 0.5rem 0.6rem;
            white-space: nowrap;
          }

          @media (max-width: 1100px) {
            .dropdown-menu.areas-dropdown-grid {
              grid-template-columns: repeat(2, minmax(140px, 1fr));
              min-width: 380px;
            }
          }

          /* Mobile Menu Button */
          .mobile-menu-btn {
            display: none;
            background: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }

          .mobile-menu-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* Mobile Navigation */
          .nav-mobile {
            display: none;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #0a2c61 0%, #1976d2 100%);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 999;
            animation: slideDown 0.3s ease;
          }

          .nav-mobile .nav-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-size: 1.1rem;
          }

          .nav-mobile .nav-link:last-child {
            border-bottom: none;
          }

          /* Quick Action Buttons */
          .header-actions {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .action-btn {
            background: #fff;
            border: none;
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-decoration: none;
            color: #0a2c61;
          }

          .action-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            background: #ffc107;
            color: #0a2c61;
          }

          /* Animations */
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .nav-desktop {
              display: none;
            }

            .mobile-menu-btn {
              display: flex;
            }

            .nav-mobile {
              display: block;
            }

            .header-container {
              padding: 0 0.5rem;
            }

            .header-logo {
              font-size: 1.1rem;
              padding: 0.2em 0.5em;
            }

            .header-truck {
              width: 35px;
              height: 35px;
            }
          }

          @media (max-width: 480px) {
            .header-logo {
              font-size: 1rem;
              padding: 0.15em 0.4em;
            }

            .header-truck {
              width: 30px;
              height: 30px;
            }

            .action-btn {
              padding: 0.4rem;
            }
          }

          /* Footer Styles */
          .footer {
            background: linear-gradient(90deg, #0a2c61 0%, #1976d2 100%);
            color: #fff;
            padding: 2rem 1rem;
            margin-top: auto;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
          }

          .footer-links {
            margin-bottom: 1rem;
          }

          .footer-link {
            color: #ffc107;
            text-decoration: none;
            margin: 0 0.5rem;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .footer-link:hover {
            color: #fff;
          }

          .footer-separator {
            color: #ffc107;
            margin: 0 0.5rem;
          }

          .footer-copyright {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          /* Mobile Bottom Navigation */
          .mobile-bottom-nav {
            display: none;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            box-shadow: 0 -2px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            padding: 0.5rem;
          }

          .mobile-bottom-nav__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #666;
            font-size: 0.8rem;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            flex: 1;
          }

          .mobile-bottom-nav__item:hover,
          .mobile-bottom-nav__item.active {
            color: #0a2c61;
            background: rgba(10,44,97,0.1);
          }

          /* Floating Buttons */
          .floating-phone-btn,
          .floating-phone-btn-wa {
            position: fixed;
            bottom: 150px;
            right: 20px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #ffc107;
            color: #0a2c61;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1001;
          }

          .floating-phone-btn:hover,
          .floating-phone-btn-wa:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          }

          .floating-phone-btn-wa {
            bottom: 80px;
            background: #25D366;
            color: #fff;
          }

          @media (max-width: 768px) {
            .mobile-bottom-nav {
              display: flex;
            }

            .floating-phone-btn,
            .floating-phone-btn-wa {
              display: flex;
            }
          }

          @media (min-width: 769px) {
            .mobile-bottom-nav,
            .floating-phone-btn,
            .floating-phone-btn-wa {
              display: none;
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Brand/Logo */}
          <Link to="/" className="header-brand">
            <div className="header-logo">Mohamed Bahr</div>
            <img src={truck} alt="truck" className="header-truck" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => {
              if (link.to === "/services") {
                return (
                  <div
                    key={link.to}
                    className={`dropdown ${
                      openDropdown === "services" ? "is-open" : ""
                    }`}
                    onMouseEnter={() => {
                      if (location.pathname !== "/services")
                        setOpenDropdown("services");
                    }}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.to}
                      className={`nav-link ${
                        location.pathname === link.to ? "active" : ""
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                    <div
                      className="dropdown-menu"
                      role="menu"
                      aria-label="روابط سريعة للخدمات"
                    >
                      {serviceQuickLinks.map((s) => (
                        <Link
                          key={s.id}
                          to={`/service/${s.id}`}
                          className="dropdown-item"
                          role="menuitem"
                        >
                          {s.icon}
                          <span>{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              if (link.to === "/areas") {
                return (
                  <div
                    key={link.to}
                    className={`dropdown ${
                      openDropdown === "areas" ? "is-open" : ""
                    }`}
                    onMouseEnter={() => setOpenDropdown("areas")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.to}
                      className={`nav-link ${
                        location.pathname === link.to ? "active" : ""
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.icon}

                      {link.label}
                    </Link>
                    <div
                      className="dropdown-menu areas-dropdown-grid"
                      role="menu"
                      aria-label="محافظات مصر"
                    >
                      {governorates.map((g) => (
                        <Link
                          key={g}
                          to={`/areas/${encodeURIComponent(g)}`}
                          className="dropdown-item"
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <MapPin size={18} color="#0a2c61" />
                          ونش انقاذ
                          <span>{g}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              if (link.to === "/contact") {
                return (
                  <div
                    key={link.to}
                    className={`dropdown ${
                      openDropdown === "contact" ? "is-open" : ""
                    }`}
                    onMouseEnter={() => {
                      if (location.pathname !== "/contact")
                        setOpenDropdown("contact");
                    }}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={link.to}
                      className={`nav-link ${
                        location.pathname === link.to ? "active" : ""
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                    <div
                      className="dropdown-menu"
                      role="menu"
                      aria-label="تواصل معنا"
                    >
                      {contactQuickLinks.map((item, idx) =>
                        item.type === "a" ? (
                          <a
                            key={idx}
                            href={item.href}
                            className="dropdown-item"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={item.to}
                            className="dropdown-item"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a
              href="tel:01044844492"
              className="action-btn"
              aria-label="اتصال سريع"
            >
              <Phone size={24} />
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="القائمة"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="nav-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main style={{ minHeight: "calc(100vh - 140px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/areas/:areaName" element={<AreaDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/" className="footer-link">
              الرئيسية
            </a>
            <span className="footer-separator">ـ</span>
            <a href="tel:01044844492" className="footer-link">
              اتصل بنا
            </a>
          </div>
          <div className="footer-copyright">
            تصميم وتنفيذ{" "}
            <a
              href="http://emereld-marketing.online"
              style={{
                color: "var(--color-highlight)",
                textDecoration: "none",
              }}
            >
              EMERELD
            </a>{" "}
            - جميع الحقوق محفوظة © 2025
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <Link
          to="/contact"
          className={`mobile-bottom-nav__item ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          <Mail size={24} />
          <span>اتصل بنا</span>
        </Link>
        <a href="tel:01044844492" className="mobile-bottom-nav__item">
          <Phone size={24} />
          <span>اتصال</span>
        </a>
        <Link
          to="/areas"
          className={`mobile-bottom-nav__item ${
            location.pathname === "/areas" ? "active" : ""
          }`}
        >
          <MapPin size={24} />
          <span>دليل الانقاذ</span>
        </Link>
        <Link
          to="/services"
          className={`mobile-bottom-nav__item ${
            location.pathname === "/services" ? "active" : ""
          }`}
        >
          <Package size={24} />
          <span>خدماتنا</span>
        </Link>
        <Link
          to="/"
          className={`mobile-bottom-nav__item ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <HomeIcon size={24} />
          <span>الرئيسية</span>
        </Link>
      </nav>

      {/* Floating Action Buttons */}
      <a
        href="tel:01044844492"
        className="floating-phone-btn"
        aria-label="اتصال سريع"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/+2001044844492"
        className="floating-phone-btn-wa"
        aria-label="واتساب"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      </a>
    </>
  );
}

export default App;
