import React, { useState } from 'react';
import '../pages/HomeGallery.css';
import testimonialImg from '../images/images (3).jpeg';
import { Brain, HardHat, MessageSquare, Factory, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

// Import all gallery images
import img1 from '../images/images.jpeg';
import img2 from '../images/images (1).jpeg';
import img3 from '../images/images (2).jpeg';
import img4 from '../images/download.jpeg';
import img5 from '../images/download (1).jpeg';
import img6 from '../images/download (2).jpeg';

const galleryImages = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goTo = (idx) => setCurrent(idx);

  return (
    <>
      {/* Gallery Section */}
      <div className="gallery-container">
        <img src={galleryImages[current]} alt={`معرض ${current + 1}`} className="gallery-image" />
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
        background: 'linear-gradient(90deg, #003366 60%, #FFD600 100%)',
        color: '#fff',
        padding: '3rem 1rem 2rem 1rem',
        textAlign: 'center',
        marginBottom: '0'
      }}>
        <div className="hero-title">أسرع ونش إنقاذ سيارات في مصر</div>
        <div className="hero-desc">
          خدمة إنقاذ سيارات على مدار الساعة في جميع أنحاء الجمهورية. اتصل الآن ليصلك أقرب ونش إنقاذ بأقل سعر وأعلى جودة.
        </div>
        <div className="hero-phone">+0123456789</div>
      </section>

      {/* Features Section (from screenshot) */}
      <section style={{display: 'flex', flexWrap: 'wrap', background: '#003366', color: '#fff', padding: '0', margin: '0 0 2rem 0', minHeight: '350px'}}>
        {/* Yellow CTA box */}
        <div style={{background: '#FFD600', color: '#003366', flex: '1 1 320px', minWidth: '320px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', textAlign: 'right'}}>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem'}}>ونش انقاذ المدينه</div>
          <div style={{fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.3', marginBottom: '1.5rem'}}>اطلب ونش انقاذ سيارات دلوقتي بكل سهولة.</div>
          <div style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            ونش انقاذ المدينه أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
          </div>
        </div>
        {/* Blue features grid */}
        <div style={{flex: '2 1 500px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'stretch', padding: '2.5rem 1rem', gap: '2rem'}}>
          {/* Feature: السرعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#fff', textAlign: 'center'}}>
            <Brain size={48} color="#FFD600" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>السرعة</div>
            <div style={{fontSize: '1.05rem'}}>نصلك في غضون 10 دقائق بحد أقصى، ونقدم خدمة إنقاذ السيارات بسرعة واحترافية عالية.</div>
          </div>
          {/* Feature: خدمة 24 ساعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#fff', textAlign: 'center'}}>
            <HardHat size={48} color="#FFD600" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>خدمة 24 ساعة</div>
            <div style={{fontSize: '1.05rem'}}>الأوناش متاحة طوال اليوم 24 ساعة طوال أيام الأسبوع في أي وقت من اليوم، نهاراً أو ليلاً.</div>
          </div>
          {/* Feature: الانتشار */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#fff', textAlign: 'center'}}>
            <MessageSquare size={48} color="#FFD600" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem'}}>الانتشار</div>
            <div style={{fontSize: '1.05rem'}}>تنتشر جميع سيارات الانقاذ لدينا في جميع أنحاء الجمهورية والصياحين العامة والطرق الرئيسية لذلك نحن الأقرب إليك.</div>
          </div>
          {/* Feature: الخبرة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: '#fff', textAlign: 'center'}}>
            <Factory size={48} color="#FFD600" style={{marginBottom: '1rem'}} />
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
        background: '#FFF9E3',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        textAlign: 'right',
        overflow: 'hidden',
        border: '1px solid #FFE066'
      }}>
        {/* Decorative yellow quotes */}
        <Quote size={90} color="#FFD600" style={{position: 'absolute', top: '10px', left: '10px', opacity: 0.13, zIndex: 0}} />
        <Quote size={90} color="#FFD600" style={{position: 'absolute', bottom: '10px', right: '10px', opacity: 0.13, zIndex: 0, transform: 'scaleX(-1)'}} />
        {/* Title with two-tone and underline */}
        <div style={{fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.2rem', lineHeight: '1.2', color: '#222'}}>
          <span>مميزات ونش انقاذ سيارات </span>
          <span style={{color: '#003366', position: 'relative', zIndex: 1}}>
          المدينه
            <span style={{
              display: 'block',
              height: '7px',
              background: '#FFD600',
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
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '1.5rem 1.2rem',
          position: 'relative',
          zIndex: 1,
          borderRight: '6px solid #FFD600',
          fontSize: '1.18rem',
          fontWeight: 600,
          color: '#222',
          lineHeight: '2',
          marginRight: '0.5rem',
        }}>
          إذا كنت تبحث عن خدمة إنقاذ سيارات بأرخص سعر فعليك إختيار خدمة ونش إنقاذ سيارات من خلال الاتصال بنا وسوف نرسل إليك أقرب ونش إنقاذ سيارات علي الفور في أي وقت علي مدار اليوم فنحن نوفر خدماتنا 24 ساعة علي مدار اليوم.
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-title">آراء العملاء</div>
        <div className="testimonial">
          <img src={testimonialImg} alt="عميل" style={{width:'60px', borderRadius:'50%', float:'left', marginLeft:'1rem'}} />
          <div>وصلني ونش الإنقاذ بعد 10 دقائق فقط من الاتصال. السائق كان متعاون جداً والخدمة ممتازة.</div>
          <div className="testimonial-author">إبراهيم سعيد - رجل أعمال</div>
        </div>
        <div className="testimonial">
          <div>شركة محترمة وفريق عمل محترف. أنصح الجميع بالتعامل معهم.</div>
          <div className="testimonial-author">ريمون فوزي - صاحب شركة</div>
        </div>
      </section>
    </>
  );
};

export default Home; 