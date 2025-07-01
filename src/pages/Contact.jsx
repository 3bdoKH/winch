import React from 'react';
import YellowCtaBox from '../components/YellowCtaBox';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <YellowCtaBox />
      <div className="section-title">اتصل بنا</div>
      <div className="contact-info">
        <div style={{marginBottom: '1.5rem'}}>
          <div>العنوان ١: الهضبه الوسطى ، ال ٧٠ فدان ، خلف كومباوند نكست عماره رقم ١٠٥</div>
          <div>العنوان ٢: كورنيش عدلي مليجي، عماره ٢٢٦ ، الدور الارضي بجوار كافيه ليالي</div>
        </div>
        <div>الهاتف : <a href="tel:01044844492" style={{color: "white", textDecoration:"none"}}>01044844492</a></div>
      </div>
    </section>
  );
};

export default Contact; 