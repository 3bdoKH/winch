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
        <div>الهاتف : +0123456789</div>
      </div>
    </section>
  );
};

export default Contact; 