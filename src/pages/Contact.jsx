import React from 'react';
import YellowCtaBox from '../components/YellowCtaBox';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <YellowCtaBox />
      <div className="section-title">اتصل بنا</div>
      <div className="contact-info">
        
        <div>الهاتف : <a href="tel:01044844492" style={{color: "#f194b4", textDecoration:"none"}}>01044844492</a></div>
      </div>
    </section>
  );
};

export default Contact; 