import React, { useState, useEffect, useRef } from 'react';
import '../pages/HomeGallery.css';
import { Brain, HardHat, MessageSquare, Factory, ChevronRight, ChevronLeft, Quote, Wrench, Lightbulb, Package, BatteryCharging, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import all gallery images
import img1 from '../images/images.jpeg';
import img2 from '../images/images (1).jpeg';
import img3 from '../images/images (3).jpeg';
import img4 from '../images/download.jpeg';
import img5 from '../images/download (1).jpeg';
import img6 from '../images/download (2).jpeg';

import extraImg1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../images/fuel.jpeg';
import extraImg4 from '../images/battary.jpeg';
import extraImg5 from '../images/images (3).jpeg';

const galleryImages = [img1, img2, img3, img4, img5, img6];

const extraServices = [
  {
    id: 'rescue',
    icon: <Wrench size={44} color="#212D40" style={{marginBottom: '1rem'}} />, 
    title: 'إنقاذ السيارات',
    desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
  },
  {
    id: 'equipment',
    icon: <Lightbulb size={44} color="#212D40" style={{marginBottom: '1rem'}} />, 
    title: 'نقل المعدات',
    desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
  },
  {
    id: 'fuel',
    icon: <Package size={44} color="#212D40" style={{marginBottom: '1rem'}} />, 
    title: 'التزود بالوقود',
    desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبيات جاهز لتزويدكم بالوقود ..',
  },
  {
    id: 'battery',
    icon: <BatteryCharging size={44} color="#212D40" style={{marginBottom: '1rem'}} />, 
    title: 'وصلة بطارية',
    desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبيات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
  },
  {
    id: 'tires',
    icon: <Users size={44} color="#212D40" style={{marginBottom: '1rem'}} />, 
    title: 'تغيير الاطارات',
    desc: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..',
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearTimeout(timer);
  }, [current, isPaused, total]);

  // Pause auto-slide on manual navigation
  const pauseAutoSlide = () => {
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 5000);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
    pauseAutoSlide();
  };
  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    pauseAutoSlide();
  };
  const goTo = (idx) => {
    setCurrent(idx);
    pauseAutoSlide();
  };

  return (
    <>
      <style>{`
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
`}</style>
      {/* Marquee above the gallery section */}
      <div style={{
        width: '100%',
        background: '#ffb100',
        color: '#003844',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        padding: '0.5rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        marginBottom: '0.5rem',
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 12s linear infinite',
        }}>
          ونش محمد بحر لإنقاذ السيارات 01044844492
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <img src={galleryImages[current]} alt={`معرض ${current + 1}`} className="gallery-image fade-anim" />
        <div className="gallery-arrows">
          <button className="gallery-arrow" onClick={goPrev} aria-label="السابق"><ChevronRight size={24} /></button>
          <button className="gallery-arrow" onClick={goNext} aria-label="التالي"><ChevronLeft size={24} /></button>
        </div>
        <div className="gallery-dots">
          {galleryImages.map((_, idx) => (
            <div
              key={idx}
              className={`gallery-dot${idx === current ? ' active' : ''}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>

      {/* Hero Title/Desc/Phone with gradient background */}
      <section className="hero" id="home" style={{
        background: 'linear-gradient(90deg, #003844 60%, #ffb100 100%)',
        color: '#ffebc6',
        padding: '3rem 1rem 2rem 1rem',
        textAlign: 'center',
        marginBottom: '0'
      }}>
        <div className="hero-title">أسرع ونش إنقاذ سيارات في مصر</div>
        <div className="hero-desc">
          خدمة إنقاذ سيارات على مدار الساعة في جميع أنحاء الجمهورية. اتصل الآن ليصلك أقرب ونش إنقاذ بأقل سعر وأعلى جودة.
        </div>
        <a className="hero-phone" href='tel:01044844492'>01044844492</a>
      </section>

      {/* Features Section (from screenshot) */}
      <section style={{display: 'flex', flexWrap: 'wrap', background: '#003844', color: '#ffebc6', padding: '0', margin: '0 0 2rem 0', minHeight: '350px'}}>
        {/* Yellow CTA box */}
        <div style={{background: '#ffb100', color: '#003844', flex: '1 1 320px', minWidth: '320px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'right'}}>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem'}}>ونش انقاذ محمد بحر</div>
          <div style={{fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.3', marginBottom: '1.5rem'}}>اطلب ونش انقاذ سيارات دلوقتي بكل سهولة.</div>
          <div style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            ونش انقاذ محمد بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
          </div>
        </div>
        {/* Blue features grid */}
        <div style={{flex: '2 1 500px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'stretch', padding: '2.5rem 1rem', gap: '2rem'}}>
          {/* Feature: السرعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#ffebc6', textAlign: 'center'}}>
            <Brain size={48} color="#f194b4" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>السرعة</div>
            <div style={{fontSize: '1.05rem'}}>نصلك في غضون 10 دقائق بحد أقصى، ونقدم خدمة إنقاذ السيارات بسرعة واحترافية عالية.</div>
          </div>
          {/* Feature: خدمة 24 ساعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#ffebc6', textAlign: 'center'}}>
            <HardHat size={48} color="#f194b4" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>خدمة 24 ساعة</div>
            <div style={{fontSize: '1.05rem'}}>الأوناش متاحة طوال اليوم 24 ساعة طوال أيام الأسبوع في أي وقت من اليوم، نهاراً أو ليلاً.</div>
          </div>
          {/* Feature: الانتشار */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#ffebc6', textAlign: 'center'}}>
            <MessageSquare size={48} color="#f194b4" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>الانتشار</div>
            <div style={{fontSize: '1.05rem'}}>تنتشر جميع سيارات الانقاذ لدينا في جميع أنحاء الجمهورية والصياحين العامة والطرق الرئيسية لذلك نحن الأقرب إليك.</div>
          </div>
          {/* Feature: الخبرة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#ffebc6', textAlign: 'center'}}>
            <Factory size={48} color="#f194b4" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>الخبرة</div>
            <div style={{fontSize: '1.05rem'}}>يتمتع فريق العمل لدينا بخبرة واسعة إلى جانب معرفة السائقين بالطرق والاختصارات التي تضمن سرعة الوصول.</div>
          </div>
        </div>
      </section>

      {/* Otobiat Features Quote Section */}
      <section style={{
        position: 'relative',
        maxWidth: '600px',
        margin: '2.5rem auto',
        background: '#006c67',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        textAlign: 'right',
        overflow: 'hidden',
        border: '1px solid #f194b4'
      }}>
        {/* Decorative yellow quotes */}
        <Quote size={90} color="#ffb100" style={{position: 'absolute', top: '10px', left: '10px', opacity: 0.13, zIndex: 0}} />
        <Quote size={90} color="#ffb100" style={{position: 'absolute', bottom: '10px', right: '10px', opacity: 0.13, zIndex: 0, transform: 'scaleX(-1)'}} />
        {/* Title with two-tone and underline */}
        <div style={{fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.2rem', lineHeight: '1.2', color: '#f194b4'}}>
          <span>مميزات ونش انقاذ سيارات </span>
          <span style={{color: '#003844', position: 'relative', zIndex: 1}}>
          محمد بحر
            <span style={{
              display: 'block',
              height: '7px',
              background: '#ffb100',
              borderRadius: '4px',
              position: 'absolute',
              right: 0,
              left: 0,
              bottom: '-4px',
              zIndex: -1,
              opacity: 0.7
            }}></span>
          </span>
          :
        </div>
        {/* White inner card for quote */}
        <div style={{
          background: '#ffebc6',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '1.5rem 1.2rem',
          position: 'relative',
          zIndex: 1,
          borderRight: '6px solid #ffb100',
          fontSize: '1.18rem',
          fontWeight: 600,
          color: '#003844',
          lineHeight: '2',
          marginRight: '0.5rem',
        }}>
          إذا كنت تبحث عن خدمة إنقاذ سيارات بأرخص سعر فعليك إختيار خدمة ونش إنقاذ سيارات من خلال الاتصال بنا وسوف نرسل إليك أقرب ونش إنقاذ سيارات علي الفور في أي وقت علي مدار اليوم فنحن نوفر خدماتنا 24 ساعة علي مدار اليوم.
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="extra-services" style={{maxWidth: '1100px', margin: '2rem auto', padding: '1.5rem 0'}}>
        <div className="section-title">خدمات إضافية</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          {[extraImg1, extraImg2, extraImg3, extraImg4, extraImg5].map((img, idx) => (
            <Link to={`/service/${extraServices[idx].id}`} key={extraServices[idx].id} style={{textDecoration: 'none'}}> 
              <div style={{background:'#006c67', color:'#ffebc6', borderRadius:'1rem', padding:'2rem 1rem', boxShadow:'0 0 40px #00384466 inset', textAlign:'center', transition:'transform 0.2s', fontWeight:500, minHeight:'200px'}} className="service-card-hover">
                {extraServices[idx].icon}
                <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'0.7rem'}}>{extraServices[idx].title}</div>
                <div style={{fontSize:'1rem'}}>{extraServices[idx].desc}</div>
                <img src={img} alt={extraServices[idx].title} style={{width: '100%', borderRadius: '0.7rem', margin: '1rem auto 1rem auto', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-title">آراء العملاء</div>
        <div className="testimonial">
          
          <div>وصلني ونش الإنقاذ بعد 10 دقائق فقط من الاتصال. السائق كان متعاون جداً والخدمة ممتازة.</div>
          <div className="testimonial-author">إبراهيم سعيد - رجل أعمال</div>
        </div>
        <div className="testimonial">
          <div>شركة محترمة وفريق عمل محترف. أنصح الجميع بالتعامل معهم.</div>
          <div className="testimonial-author">خالد اكرم - صاحب شركة</div>
        </div>
      </section>

      {/* Call to Action Section - Bottom of Home Page */}
      <section style={{
        background: '#003844',
        color: '#ffebc6',
        textAlign: 'center',
        padding: '2.5rem 1rem 2rem 1rem',
        marginTop: '2.5rem',
        borderTop: '1px solid #006c67',
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#f194b4',
          marginBottom: '0.7rem',
          letterSpacing: '1px',
          position: 'relative',
          display: 'inline-block',
        }}>
          اتصل بنا الان
          <span style={{
            display: 'block',
            height: '5px',
            background: '#f194b4',
            borderRadius: '2px',
            marginTop: '0.3rem',
            width: '70%',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}></span>
        </div>
        <div style={{
          color: '#ffebc6',
          fontSize: '1.08rem',
          marginTop: '1.2rem',
          lineHeight: '2',
          maxWidth: '500px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
          ونش انقاذ محمد بحر هو اسرع و ارخص ونش انقاذ سيارات اتصل على رقم ونش الانقاذ خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%.
        </div>
      </section>
    </>
  );
};

export default Home; 