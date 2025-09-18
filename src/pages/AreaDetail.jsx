import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft, AlertTriangle, Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './AreaDetail.css';

// Import WhatsApp images
import wa1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import wa2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import wa3 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_0b194e2d.jpg';
import wa4 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_bc1bb19d.jpg';
import wa5 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_00a9c303.jpg';

const AreaDetail = () => {
  const { areaName } = useParams();
  const displayName = decodeURIComponent(areaName).replace(/[-_]/g, ' ');
  const phone = '01044844492';
  const brand = 'ونش انقاذ محمد بحر';
  const [activeSection, setActiveSection] = useState('header');
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);

  // Navigation sections
  const sections = useMemo(() => [
    { id: 'header', title: 'الرئيسية', icon: '🏠' },
    { id: 'contact', title: 'طرق التواصل', icon: '📞' },
    { id: 'gallery', title: 'معرض الصور', icon: '📸' },
    { id: 'services', title: 'خدماتنا', icon: '🚗' },
    { id: 'why-choose', title: 'لماذا تختارنا', icon: '⭐' },
    { id: 'fastest', title: 'أسرع ونش', icon: '⚡' },
    { id: 'pricing', title: 'الأسعار', icon: '💰' },
    { id: 'faq', title: 'الأسئلة الشائعة', icon: '❓' },
    { id: 'testimonials', title: 'آراء العملاء', icon: '👍' },
    { id: 'fleet', title: 'أسطول المركبات', icon: '🚚' },
    { id: 'coverage', title: 'مناطق التغطية', icon: '🗺️' },
    { id: 'emergency-cases', title: 'حالات طارئة', icon: '🆘' },
    { id: 'keywords', title: 'كلمات البحث', icon: '🔍' },
    { id: 'emergency', title: 'الطوارئ', icon: '🚨' }
  ], []);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [areaName]);

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsNavigatorOpen(false);
    }
  };

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <section className="area-detail-section" style={{
      minHeight: '100vh',
      background: '#f7f7f7',
      fontFamily: 'Tajawal, Arial, sans-serif',
    }}>
      {/* Side Navigator */}
      <div className={`side-navigator ${isNavigatorOpen ? 'open' : ''}`}>
        <div className="navigator-toggle" onClick={() => setIsNavigatorOpen(!isNavigatorOpen)}>
          {isNavigatorOpen ? <X size={20} /> : <Menu size={20} />}
        </div>

        <div className="navigator-content">
          <h3 className="navigator-title">تنقل سريع</h3>
          <nav className="navigator-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`navigator-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="navigator-icon">{section.icon}</span>
                <span className="navigator-text">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Header Section */}
        <div id="header" style={{
          background: 'linear-gradient(135deg, #0a2c61 0%, #1976d2 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '2rem'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#ffc107',
            color: '#0a2c61',
            fontWeight: 900,
            fontSize: '1rem',
            borderRadius: '1rem',
            padding: '0.3rem 1rem',
          }}>
            خدمة 24/7
          </div>

          <Link to="/areas" style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: 600
          }}>
            <ArrowLeft size={20} />
            العودة للمناطق
          </Link>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            direction: 'rtl'
          }}>
            {brand} في {displayName}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            direction: 'rtl'
          }}>
            خدمة إنقاذ سيارات سريعة وآمنة في {displayName} على مدار الساعة
          </p>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            direction: 'rtl'
          }}>
            خصم 50% على جميع خدماتنا
          </p>
        </div>

        {/* Contact Methods */}
        <div id="contact" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            طرق التواصل
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href={`tel:${phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <Phone size={24} color="#0077ff" />
              </div>
              <div style={{ flex: 1, direction: 'rtl' }}>
                <div style={{
                  fontWeight: 700,
                  color: '#0a2c61',
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem'
                }}>
                  الهاتف الرئيسي
                </div>
                <div style={{
                  color: '#0077ff',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {phone}
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  اتصل بنا على مدار الساعة
                </div>
              </div>
            </a>
            <a
              href={`tel:01034222636`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <Phone size={24} color="#0077ff" />
              </div>
              <div style={{ flex: 1, direction: 'rtl' }}>
                <div style={{
                  fontWeight: 700,
                  color: '#0a2c61',
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem'
                }}>
                  الطوارئ و خدمة العملاء
                </div>
                <div style={{
                  color: '#0077ff',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  01034222636
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  اتصل بنا على مدار الساعة
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/201044844492`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "#25D366" }} />
              </div>
              <div style={{ flex: 1, direction: 'rtl' }}>
                <div style={{
                  fontWeight: 700,
                  color: '#0a2c61',
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem'
                }}>
                  واتساب
                </div>
                <div style={{
                  color: '#25D366',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {phone}
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  راسلنا على واتساب
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* WhatsApp Images Gallery */}
        <div id="gallery" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            صور أعمالنا في {displayName}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {[wa1, wa2, wa3, wa4, wa5].map((img, idx) => (
              <div key={idx} style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}>
                <img
                  src={img}
                  alt={`ونش انقاذ سيارات ${displayName} ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div id="services" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff',
          direction: 'rtl',
          fontSize: '1.15rem',
          lineHeight: 2
        }}>
          <h2 style={{
            color: '#d66853',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            {brand} في {displayName}
          </h2>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            {`ونش انقاذ في ${displayName} نحن أرخص ونش أنقاذ في  ${displayName} و أسرع ونش إنقاذ في ${displayName} دائما اوناشنا بالقرب منك , ونش انقاذ ${displayName} من  محمد بحر نعمل منذ 30 عاما ومتخصصون في أنقاذ ورفع السيارات وخدمات الإنقاذ السريع ولدينا اسطول سيارات إنقاذ منتشرة في ${displayName} و جميع انحاء الجمهورية لإنقاذ و رفع السيارات المعطلة و سيارات الحوادث.`}
          </p>

          <p style={{ fontWeight: 700, color: '#0a2c61', marginBottom: '1rem' }}>{brand}:</p>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>نتعهد بوصول ونش الانقاذ بسرعة إلى موقعك في {displayName} خلال 10 دقائق بحد اقصي.</li>
            <li style={{ marginBottom: '0.8rem' }}>يمكنك الاتصال بنا أو ارسال موقعك علي الواتساب أو إرسال بريد إلكتروني إلى أحد ممثلينا الموجودين لارسال أقرب ونش انقاذ اليك في أي وقت.</li>
            <li style={{ marginBottom: '0.8rem' }}>ونش انقاذ سيارات محمد بحر مؤمن بالكامل حتي لا يسب اي تلف اجزاء سياراتك.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا افضل و اسرع خدمة انقاذ سيارات باقل سعر بدون رسوم اضافية و بدون اكراميات.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم بتتبع جميع سيارات الانقاذ من خلال GPS.</li>
            <li style={{ marginBottom: '0.8rem' }}>يوجد ونش انقاذ على مدار 24 ساعة طوال أيام الأسبوع.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم بـ إنقاذ السيارات خلال النهار والليل دون أي تكلفة إضافية.</li>
            <li style={{ marginBottom: '0.8rem' }}>جميع سائقي أوناش الانقاذ لدينا على دراية باستخدام أحدث المعدات والتقنيات ورفع السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>تبحث عن ونش انقاذ سيارات في {displayName} اتصل بنا الان علي {phone}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            اتصل بخدمة العملاء التابعة لنا على مدار 24 ساعة الآن للحصول على أقرب ونش انقاذ من موقعك في {displayName} فريق المساعدة على أهبة الاستعداد و جاهز دائما لمساعدتك في أي وقت من النهار أو الليل 24/7 تشمل خدمات الانقاذ السريع للسيارات في {displayName} علي ما يلي:
          </p>

          <ol style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>السرعة</b><br />
              يصل ونش انقاذ السيارات بسرعة فائقة خلال 15 دقيقة بحد اقصي فور طلبك لـ ونش إنقاذ سيارات من أجل إنقاذ السيارات المُعطّلة في {displayName} او على الطريق وذلك لأننا نعمل على مدار الساعة طوال أيام الأسبوع.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الأمان</b><br />
              ونش انقاذ السيارات مراقبة بـ GPS وهي آمنة للغاية تحافظ علي السيارة امنة تماما حتي الوصول إلي أقرب مركز صيانة.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الخبرة</b><br />
              فريق عمل {brand} مدرب على كيفية نقل السيارات وتثبيتها علي ونش الانقاذ وذلك إلى جانب خبرتهم المتميزة في اختيار أسرع الطرق.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الانتشار الواسع</b><br />
              تنتشر اوناش الانقاذ في {displayName} أو علي الطرق الرئيسية في جميع انحاء الجمهورية وهو ما يسمح بسرعة وصول ونش الانقاذ اليك خلال 15 دقيقة بحد اقصي.
            </li>
          </ol>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر لدينا دائما ونش انقاذ سيارات في {displayName} لسحب و إنقاذ سيارتك وأخذك الي اقرب مركز صيانة أو وكيل معتمد ، أتصل بنا الان ولا تتردد ونش أنقاذ محمد بحر أرخص ونش انقاذ في {displayName} , نحن نعمل على مدار الساعة ، اتصل الان {phone} يصلك ونش انقاذ سيارات سريع و مجهز بأحدث المعدات وأحدث وسائل الأمان والراحة.
          </p>

          <h3 id="why-choose" style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            لماذا يجب أن تختار ونش انقاذ {displayName} من محمد بحر؟
          </h3>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>لدينا اسطول من أوناش انقاذ السيارات في {displayName} وجميع انحاء الجمهورية.</li>
            <li style={{ marginBottom: '0.8rem' }}>نعمل علي مدار الساعة لمدة 24 ساعة و 7 أيام في الاسبوع .</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا سائقين محترفين في انقاذ ورفع السيارات مجهزين بأحدث معدات انقاذ السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا خدمة عملاء تعمل علي مدار الساعة لتلقي طلبات إنقاذ السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا أحدث ونش انقاذ مزود بأحدث معدات إنقاذ السيارات لانقاذ ورفع السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقدم اعلي جودة بأقل سعر لراحة ورضاء العميل.</li>
            <li style={{ marginBottom: '0.8rem' }}>سرعة وصول ونش الانقاذ الي مكان العطل ورفع السيارة بأحدث تقنيات ضمانا لعدم أيذاء اجزاء السيارة.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقدم دعم واستشارات فنية لجميع العملاء.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم باستبدال الاطارات و التزود بالوقود والتزود بالماء.</li>
            <li style={{ marginBottom: '0.8rem' }}>في حال استدعاء ونش انقاذ {displayName} او الاتصال برقم طوارئ على الطريق {phone}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ما عليك سوى الاتصال بنا علي رقم ونش انقاذ {displayName} : {phone} وإعلامنا بالمكان الذي تحتاج ونش انقاذ سيارات فيه.
          </p>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            نقوم بتوفير الوقت عليك في البحث عن ونش انقاذ سيارات في {displayName} فنحن أرخص ونش انقاذ و أسرع ونش انقاذ و أقرب ونش انقاذ {phone} يمكنك ان تطلب ونش أنقاذ {displayName}طوال أيام الاسبوع نقدم خدماتنا علي مدار الساعة 7 أيام بالاسبوع  .
          </p>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ما يميزنا عن غيرنا انفرادنا بتقديم خدماتنا باحترافية عالية ونعمل منذ عام 1995 على الطرق السريعة بكافة انحاء جمهورية مصر العربية لبناء جسور من الثقة المتبادلة بين الشركة وعملائها و انقاذ و رفع السيارات المعطلة وسحب سيارات الحوادث.
          </p>

          <h3 id="fastest" style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            اسرع ونش انقاذ في {displayName}
          </h3>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ سيارات {displayName} لدينا سيارات انقاذ حديثة ومجهزة لسحب سيارتك من الاعطال والحوادث نحن أسرع ونش انقاذ سيارات يرجي الاتصال بنا علي رقم ونش انقاذ سيارات {phone} ليصلك اقرب ونش انقاذ في غضون 15 دقيقة بحد اقصي.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            تليفون ونش انقاذ في {displayName}
          </h3>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ {displayName} لدينا فريق خدمة عملاء يعمل علي مدار الساعة و فريق سائقين و وناشين قادرين على التعامل مع كافة مواقف سيارتك سحب سيارات أو رفعسيارات أو إنقاذ سيارات اذا كان عطل او حادث ونش انقاذ {brand} نحن أسرع ونش انقاذ مما يجعل خدمة الانقاذ السريع سهل على عملائنا.
          </p>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            أسعار ونش انقاذ {brand} تعتبر رمزية لأننا نمتلك دائما ونش أنقاذ سيارات في {displayName} دائما اوناشنا فريبة منك وخدماتنا بأعلي جودة واقل سعر و نسعي دائما لرضا العملاء لأنك أنت وسيارتك على رأس أولوياتنا نحن دائما نراقب جميع سياراتنا عند طريق GPS لنجعلك دائما في امان تام علي الطريق.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {brand} نحن الاقرب لك :
          </h3>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.5rem'
          }}>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ سيارات {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>رقم ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>تليفون ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ سيارات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ ب{displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش عربيات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>سطحة سيارات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>كرين في {displayName}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            يمكن لفريق ونش انقاذ محمد بحر تقديم خدمات أنقاذ سيارات سريعة وبأسعار معقولة في {displayName} وجميع المحافظات فقط اتصل نحن نستجيب ونرسل لك على الفور أقرب ونش انقاذ سيارات متوفر في {displayName} بالقرب من مكان تعطل سيارتك نجعلها سهلة باتصالك بنا علي {phone} نحن نستعين بفريق من السائقين الخبرة لرفع و إنقاذ سيارتك ولا نعتمد على ونش الانقاذ فقط ولكننا نمتلك أيضا رافعات لانقاذ السيارات المعطلة ولدينا نظام رفع هيدروليكي متكامل للتعامل مع حالات العربات الثقيلة وعربات النقل والنصف نقل العالقة في الحفر.
          </p>

          <h3 id="pricing" style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ارخص ونش انقاذ سيارات في {displayName}
          </h3>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر - فقط أتصل بنا على الفور برقم ونش انقاذ {displayName} {phone} وسنقدم لك الحل لأننا نعمل علي سحب سيارتك بطريقة صحيحة مهما كان حجم سيارتك لا تقلق من إحضار ونش انقاذ بعد اليوم فنحن ارخص ونش انقاذ و اسرع ونش انقاذ نحن ودائما الاقرب اليك.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر خيارك الوحيد للبحث عن ونش انقاذ نمتلك عدد كبير من العملاء الراضيين تماماً عن خدمة إنقاذ ورفع السيارات ، ونعمل طوال اليوم علي استقبال مكالماتك واستفساراتك بخصوص استعداء ونش إنقاذ سيارات في {displayName} وارقام ونش إنقاذ في {displayName}
          </p>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            لاستدعاء ونش أنقاذ في {displayName} او لمزيد من الاستفسار والمعلومات فقط اتصل بنا علي {phone} رقم ونش الانقاذ الوحيد في مصر.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            في ونش انقاذ محمد بحر نعتمد على نخبة مدربة من السائقين المحترفيين على خدمات الانقاذ السريع على الطرق السريعة.
          </p>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            كما ان في ونش انقاذ محمد بحر نقوم باستخدام أحدث موديلات من الاوناش لانقاذ السيارات السريع بمصر وجميع المحافظات.
          </p>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            تقدر تكاليف أستدعاء ونش السيارات حسب نقطة الانطلاق ونقطة الوصول مع الاخذ بالاعتبار العديد من المتغيرات التي يمكن تحديدها عادة عبر الهاتف قبل بدء الخدمة.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            إتصل بمركز إرسال خدمة ونش انقاذ سيارات على مدار الساعة على الرقم {phone} ، وسوف نجيبك على أسئلتك :
          </p>

          <ul style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>نمتلك ألعديد من أوناش السيارات منها ونش انقاذ سيارات يدوي و ونش إنقاذ سيارات اوتوماتيكي و ونش انقاذ طبلية.</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            textAlign: 'center',
            fontWeight: 600
          }}>
            نشكركم على زياره موقعنا و ننتظر مكالمتكم فى اى وقت علي الرقم الخاص بنا {phone}
          </p>
        </div>

        {/* FAQ Section */}
        <div id="faq" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            الأسئلة الشائعة عن خدمات الونش في {displayName}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                question: 'كم يستغرق وصول ونش الإنقاذ إلى موقعي في ' + displayName + '؟',
                answer: 'نلتزم بوصول ونش الإنقاذ إلى موقعك في ' + displayName + ' خلال 10-15 دقيقة كحد أقصى. نحن نعمل على مدار الساعة وطوال أيام الأسبوع لضمان خدمة سريعة في أي وقت تحتاج فيه للمساعدة.'
              },
              {
                question: 'ما هي تكلفة خدمة ونش الإنقاذ في ' + displayName + '؟',
                answer: 'تختلف التكلفة حسب المسافة ونوع المركبة والخدمة المطلوبة. نحن نقدم أسعار تنافسية وشفافة بدون رسوم خفية أو إضافية. اتصل بنا على ' + phone + ' للحصول على تقدير دقيق لحالتك.'
              },
              {
                question: 'هل يمكنكم التعامل مع جميع أنواع المركبات؟',
                answer: 'نعم، لدينا أسطول متنوع من الأوناش والمعدات المتخصصة للتعامل مع جميع أنواع المركبات، من السيارات الصغيرة والفاخرة إلى الشاحنات والمركبات الثقيلة. فريقنا مدرب على التعامل مع مختلف المواقف والحالات.'
              },
              {
                question: 'هل تقدمون خدمات إضافية بجانب سحب السيارات؟',
                answer: 'نعم، نقدم مجموعة متكاملة من خدمات المساعدة على الطريق، بما في ذلك تغيير الإطارات، شحن البطارية، التزود بالوقود، المساعدة في فتح السيارة في حالة نسيان المفاتيح بالداخل، وخدمات الإصلاحات البسيطة.'
              },
              {
                question: 'كيف يمكنني الاتصال بكم في حالة الطوارئ؟',
                answer: 'يمكنك الاتصال بنا مباشرة على رقم الطوارئ ' + phone + ' المتاح 24/7. كما يمكنك التواصل عبر الواتساب لإرسال موقعك وتفاصيل المشكلة. لدينا فريق خدمة عملاء جاهز دائماً للرد السريع ومساعدتك.'
              },
              {
                question: 'هل تغطون كل مناطق ' + displayName + '؟',
                answer: 'نعم، نغطي جميع مناطق ' + displayName + ' بدون استثناء، بالإضافة إلى المناطق المحيطة والطرق السريعة. أسطولنا منتشر في جميع المناطق لضمان وصول سريع أينما كنت.'
              },
              {
                question: 'هل سيارتي آمنة أثناء النقل؟',
                answer: 'نعم، نستخدم أحدث معدات التثبيت والنقل الآمن للسيارات. جميع أوناشنا مؤمنة بالكامل، وسائقونا محترفون ومدربون على تقنيات النقل الآمن التي تحافظ على سيارتك دون أي أضرار.'
              },
              {
                question: 'ماذا لو تعطلت سيارتي في منتصف الليل؟',
                answer: 'نحن نعمل 24 ساعة طوال أيام الأسبوع دون عطلات. يمكنك الاتصال بنا في أي وقت من الليل أو النهار، وسنصل إليك بنفس السرعة والكفاءة، وبدون أي رسوم إضافية للخدمة الليلية.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                direction: 'rtl'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#0a2c61',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    background: '#0077ff',
                    color: 'white',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>?</span>
                  {item.question}
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            آراء العملاء في {displayName}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                name: 'أحمد محمد',
                rating: 5,
                date: '15 يناير 2023',
                comment: 'خدمة ممتازة وسرعة استجابة رائعة! تعطلت سيارتي في ' + displayName + ' وخلال 10 دقائق فقط وصل الونش وتم مساعدتي. السائق كان محترفًا جدًا ومهذبًا. سأوصي بهم بالتأكيد.',
              },
              {
                name: 'سارة علي',
                rating: 5,
                date: '3 مارس 2023',
                comment: 'أفضل خدمة ونش استخدمتها على الإطلاق. سيارتي تعطلت في منتصف الطريق في ' + displayName + ' في وقت متأخر من الليل، واستجابوا بسرعة وكفاءة. أسعارهم معقولة جدًا مقارنة بالخدمة الممتازة.',
              },
              {
                name: 'محمود عبدالله',
                rating: 5,
                date: '22 أبريل 2023',
                comment: 'أشكر فريق ونش محمد بحر على المهنية العالية والاحترافية في التعامل. وصلوا في الوقت المحدد تمامًا، وكانت عملية سحب السيارة سلسة وآمنة. خدمة استثنائية!',
              },
              {
                name: 'هدى سمير',
                rating: 4,
                date: '10 يونيو 2023',
                comment: 'تعاملت معهم مرتين وفي كلتا المرتين كانت الخدمة ممتازة. السعر معقول والسائقين محترفين جدًا. أوصي بهم لكل من يحتاج لخدمة ونش موثوقة في ' + displayName + '.',
              },
              {
                name: 'كريم خالد',
                rating: 5,
                date: '5 أغسطس 2023',
                comment: 'الشركة لديها أفضل خدمة عملاء، فهم يردون بسرعة ويهتمون براحة العميل. ساعدوني عندما تعطلت سيارتي على الطريق السريع، ووصلوا في أقل من الوقت المتوقع. شكرًا لكم!',
              },
              {
                name: 'نورا حسن',
                rating: 5,
                date: '18 سبتمبر 2023',
                comment: 'أنا زبونة دائمة لديهم، ودائمًا ما يقدمون خدمة استثنائية. سعر مناسب، سرعة في الاستجابة، واحترافية في التعامل. أنصح الجميع بالتعامل معهم في ' + displayName + '.',
              }
            ].map((review, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                direction: 'rtl'
              }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0a2c61',
                    margin: 0
                  }}>
                    {review.name}
                  </h3>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#6c757d'
                  }}>
                    {review.date}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  marginBottom: '1rem',
                  color: '#ffc107'
                }}>
                  {Array(review.rating).fill('★').map((star, i) => (
                    <span key={i} style={{ fontSize: '1.2rem' }}>{star}</span>
                  ))}
                </div>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Fleet Section */}
        <div id="fleet" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            أسطول مركبات الإنقاذ لدينا
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            direction: 'rtl',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            نمتلك مجموعة متنوعة من مركبات الإنقاذ المجهزة بأحدث التقنيات لتناسب جميع أنواع المركبات وحالات الطوارئ
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '1.5rem'
          }}>
            {[
              {
                name: 'ونش هيدروليكي',
                description: 'مثالي للسيارات الثقيلة والحالات الصعبة التي تتطلب قوة سحب كبيرة.',
                features: ['قوة سحب عالية', 'مناسب للمركبات الثقيلة', 'مزود بأنظمة تثبيت متطورة', 'يصل سريعًا إلى المواقع الصعبة']
              },
              {
                name: 'ونش سطحة كاملة',
                description: 'الحل المثالي للسيارات المعطلة التي تحتاج إلى نقل آمن دون استخدام العجلات.',
                features: ['نقل آمن تمامًا', 'مناسب لجميع أنواع السيارات', 'تحميل وتفريغ سريع', 'مزود بأنظمة تثبيت متطورة']
              },
              {
                name: 'ونش سحب مع رافعة',
                description: 'مصمم لسحب السيارات مع رفع المحور الأمامي، مثالي للحالات العادية.',
                features: ['سرعة في الوصول والتحميل', 'اقتصادي', 'مناسب للمسافات الطويلة', 'سهولة الوصول للأماكن الضيقة']
              },
              {
                name: 'وحدات إنقاذ سريع',
                description: 'سيارات صغيرة مجهزة بمعدات إصلاح أساسية للتعامل مع الأعطال البسيطة.',
                features: ['استجابة فورية', 'إصلاحات سريعة في الموقع', 'مزودة بمعدات شحن وإطارات', 'توفير الوقت والجهد']
              }
            ].map((vehicle, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                }}>
                <div style={{
                  background: 'linear-gradient(135deg, #0a2c61 0%, #1976d2 100%)',
                  color: 'white',
                  padding: '1.5rem',
                  textAlign: 'center',
                  direction: 'rtl'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    {vehicle.name}
                  </h3>
                </div>

                <div style={{
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  direction: 'rtl'
                }}>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    marginBottom: '1rem'
                  }}>
                    {vehicle.description}
                  </p>

                  <ul style={{
                    margin: 0,
                    padding: 0,
                    listStylePosition: 'inside',
                    marginTop: 'auto'
                  }}>
                    {vehicle.features.map((feature, i) => (
                      <li key={i} style={{
                        fontSize: '0.95rem',
                        marginBottom: '0.5rem',
                        color: '#0a2c61'
                      }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1rem',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            textAlign: 'center',
            direction: 'rtl'
          }}>
            <strong>جميع مركباتنا مجهزة بـ:</strong> نظام GPS للتتبع المباشر، معدات إنقاذ متطورة، أنظمة تثبيت آمنة، وسائقين مدربين على أعلى مستوى من الاحترافية.
          </div>
        </div>

        {/* Coverage Areas Section */}
        <div id="coverage" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            مناطق التغطية
          </h2>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            direction: 'rtl',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            نغطي جميع مناطق مصر على مدار الساعة
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem',
            direction: 'rtl',
            marginBottom: '2rem'
          }}>
            {[
              "القاهرة", "الجيزة", "القليوبية", "الإسكندرية", "البحيرة", "مطروح",
              "دمياط", "الدقهلية", "كفر الشيخ", "الغربية", "المنوفية", "الشرقية",
              "بورسعيد", "الإسماعيلية", "السويس", "شمال سيناء", "جنوب سيناء",
              "بني سويف", "الفيوم", "المنيا", "أسيوط", "سوهاج", "قنا", "الأقصر",
              "أسوان", "البحر الأحمر", "الوادي الجديد"
            ].map((area, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                borderRadius: '0.5rem',
                padding: '1rem 0.5rem',
                textAlign: 'center',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.background = '#e3f0ff';
                  e.target.style.borderColor = '#0077ff';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.borderColor = '#e9ecef';
                }}
                onClick={() => window.location.href = `/areas/${encodeURIComponent(area)}`}
              >
                <span style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1rem',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            direction: 'rtl'
          }}>
            <strong style={{ color: '#d66853' }}>ملاحظة هامة:</strong> نحن نغطي أيضًا جميع الطرق السريعة المحيطة بـ {displayName} وحتى مسافة 50 كم خارج حدود المدينة. مهما كان موقعك، سنصل إليك في أسرع وقت ممكن.
          </div>
        </div>

        {/* Emergency Cases Section */}
        <div id="emergency-cases" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            حالات طوارئ تعاملنا معها مؤخرًا
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            {[
              {
                title: 'إنقاذ سيارة عائلية معطلة على الطريق السريع',
                date: '5 أيام مضت',
                description: 'استجابة سريعة لعائلة معطلة سيارتهم على الطريق السريع في منتصف الليل. وصلنا في غضون 12 دقيقة وتم نقلهم إلى مكان آمن.',
                responseTime: '12 دقيقة'
              },
              {
                title: 'سحب سيارة فاخرة من موقف سيارات تحت الأرض',
                date: 'أسبوع مضى',
                description: 'استطعنا التعامل مع موقف صعب لسيارة فاخرة معطلة في موقف سيارات تحت الأرض بمساحة محدودة، واستخدمنا معدات خاصة لسحب السيارة بأمان تام.',
                responseTime: '15 دقيقة'
              },
              {
                title: 'إنقاذ شاحنة صغيرة انزلقت عن الطريق',
                date: 'أسبوعين مضى',
                description: 'تمكنا من إنقاذ شاحنة صغيرة انزلقت عن الطريق أثناء الأمطار الغزيرة. استخدمنا ونش هيدروليكي قوي لإعادتها إلى الطريق بدون أي أضرار إضافية.',
                responseTime: '20 دقيقة'
              },
              {
                title: 'مساعدة سيارة تعطل محركها في منطقة نائية',
                date: 'شهر مضى',
                description: 'استطعنا الوصول إلى منطقة نائية خارج ' + displayName + ' لمساعدة سائق تعطل محرك سيارته. قدمنا المساعدة الفنية في الموقع ثم قمنا بسحب السيارة إلى أقرب مركز صيانة.',
                responseTime: '23 دقيقة'
              }
            ].map((case_, idx) => (
              <div key={idx} style={{
                background: '#f8f9fa',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                direction: 'rtl'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0a2c61',
                    margin: 0
                  }}>
                    {case_.title}
                  </h3>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#6c757d',
                    background: '#e9ecef',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '1rem'
                  }}>
                    {case_.date}
                  </span>
                </div>

                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}>
                  {case_.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#0077ff',
                  fontWeight: 600
                }}>
                  <span style={{ fontSize: '0.9rem' }}>⏱️ وقت الاستجابة:</span>
                  <span>{case_.responseTime}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            direction: 'rtl',
            textAlign: 'center'
          }}>
            <strong>نحن فخورون بسجل استجابتنا:</strong> متوسط وقت الاستجابة لدينا هو 15 دقيقة فقط في جميع أنحاء {displayName}. اتصل بنا الآن على {phone} للحصول على مساعدة فورية من فريقنا المحترف.
          </div>
        </div>

        {/* Keywords Section */}
        <div id="keywords" style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            كلمات بحث
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            {["ارخص ونش أنقاذ", "ارخص ونش انقاذ سيارات", "ارقام اوناش انقاذ السيارات",
              "اسرع ونش أنقاذ", "اسرع ونش انقاذ سيارات", "افضل ونش انقاذ",
              "افضل ونش انقاذ سيارات", "اقرب ونش انقاذ", "اقرب ونش انقاذ سيارات",
              "انقاذ السيارات", "اوناش انقاذ السيارات", "تليفون ونش",
              "تليفون ونش أنقاذ", "تليفون ونش انقاذ سيارات", "رقم ونش",
              "رقم ونش أنقاذ", "رقم ونش أنقاذ سيارات", "رقم ونش انقاذ",
              "رقم ونش انقاذ سيارات", "سطحة", "سطحة سيارات", "كرين",
              "كرين سيارات", "ونش", "ونش أنقاذ سيارات", "ونش إنقاذ",
              "ونش إنقاذ سيارات", "ونش المرور", "ونش امان", "ونش انقاذ",
              "ونش انقاذ بالقرب من موقعي",
              "ونش انقاذ بالقرب مني", "ونش انقاذ رخيص", "ونش انقاذ سريع",
              "ونش انقاذ سيارات بالقرب من موقعي", "ونش انقاذ سيارات بالقرب مني",
              "ونش انقاذ سيارات رخيص", "ونش انقاذ سيارات سريع",
              "ونش انقاذ سيارات قريب", "ونش انقاذ طريق", "ونش انقاذ قريب",
              "ونش جر", "ونش جر سيارات", "ونش رفع", "ونش رفع سيارات",
              "ونش ريكفري", "ونش سيارات", "ونش عربيات", "ونش عربية",
              "ونش نقل", "ونش نقل سيارات"].map((kw, idx) => (
                <span key={idx} style={{
                  background: '#2d2d33',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '8px',
                  padding: '0.4rem 1.1rem',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  display: 'inline-block',
                  boxShadow: '0 2px 8px #0002',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#0077ff';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#2d2d33';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                  {kw}
                </span>
              ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div id="emergency" style={{
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(220,53,69,0.3)',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <AlertTriangle size={32} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              margin: 0
            }}>
              طوارئ في {displayName}؟
            </h3>
          </div>

          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            direction: 'rtl'
          }}>
            اتصل بنا فوراً للحصول على خدمة إنقاذ سريعة
          </p>

          <a
            href={`tel:${phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: '#dc3545',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
              margin: '10px',
            }}

          >
            <Phone size={24} />
            {phone}
          </a>
          <a
            href={`tel:01034222636`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: '#dc3545',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.2rem',
              transition: 'all 0.3s ease',
              margin: '10px',
            }}

          >
            <Phone size={24} />
            الطوارئ و خدمة العملاء: 01034222636
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreaDetail; 