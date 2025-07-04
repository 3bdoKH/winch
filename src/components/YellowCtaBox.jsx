import React from 'react';

const YellowCtaBox = () => (
  <div style={{
    background: 'var(--color-highlight)',
    color: 'var(--color-bg)',
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
      ونش انقاذ عمرو بحر
    </div>
    <div style={{fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.2', marginBottom: '1.2rem', color: 'var(--color-bg)'}}>
      اطلب ونش انقاذ سيارات دلوقتي<br />بكل سهولة.
      <div style={{width: '60px', height: '4px', background: 'var(--color-bg)', borderRadius: '2px', marginTop: '0.5rem', marginRight: 0}}></div>
    </div>
    <div style={{fontSize: '1.1rem', color: 'var(--color-bg)', fontWeight: 500, lineHeight: '2'}}>
      ونش انقاذ عمرو بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
    </div>
  </div>
);

export default YellowCtaBox; 