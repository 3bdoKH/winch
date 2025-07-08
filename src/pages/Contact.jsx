import React from 'react';
import YellowCtaBox from '../components/YellowCtaBox';

const Contact = () => {
  return (
    <section className="contact-section" id="contact"
    style={{
      background :'white',
      color:'black'
    }}
    >
      <div style={{
        borderRadius: '1.2rem',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        margin: '2rem auto',
        maxWidth: '420px',
        textAlign: 'right',
        boxShadow: 'none',
        border: 'none',
        fontFamily: 'inherit',
        direction: 'rtl',
      }}>
    <div style={{fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '1.2rem', letterSpacing: '0.5px'}}>
      ونش انقاذ محمد    بحر
    </div>
    <div style={{fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.2', marginBottom: '1.2rem'}}>
      اطلب ونش انقاذ سيارات دلوقتي<br />بكل سهولة.
      <div style={{width: '60px', height: '4px', background: 'var(--color-bg)', borderRadius: '2px', marginTop: '0.5rem', marginRight: 0}}></div>
    </div>
    <div style={{fontSize: '1.1rem', fontWeight: 500, lineHeight: '2'}}>
      ونش انقاذ محمد   بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
    </div>
  </div>
      <div className="section-title">اتصل بنا</div>
      <div className="contact-info">
        
        <div>الهاتف : <a href="tel:01044844492" style={{color: "#f194b4", textDecoration:"none"}}>01044844492</a></div>
      </div>
    </section>
  );
};

export default Contact; 