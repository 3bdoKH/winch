import React from 'react';
import YellowCtaBox from '../components/YellowCtaBox';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <YellowCtaBox />
      <div className="section-title">اتصل بنا</div>
      <div className="contact-info">
        <div>العنوان: 33 عمارات العبور - صلاح سالم - مصر الجديدة - القاهرة</div>
        <div>الهاتف: ٠١٢٨١١٨٨٠٥١+ / ٠١٢٨١١٨٨١٠٢+</div>
        <div>البريد الإلكتروني: Info@Autopiat.com</div>
      </div>
      <div style={{marginTop: '2rem'}}>
        تابعنا على:
        <a href="#" style={{color:'#FFD600', margin:'0 0.5rem'}}>فيسبوك</a>
        <a href="#" style={{color:'#FFD600', margin:'0 0.5rem'}}>انستجرام</a>
        <a href="#" style={{color:'#FFD600', margin:'0 0.5rem'}}>يوتيوب</a>
      </div>

      {/* Contact Form */}
      <div style={{maxWidth: '600px', margin: '2rem auto', padding: '0 1rem'}}>
        <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <input 
            type="text" 
            placeholder="الاسم" 
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #ddd',
              backgroundColor: 'rgba(255,255,255,0.9)'
            }}
          />
          <input 
            type="tel" 
            placeholder="رقم الهاتف" 
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #ddd',
              backgroundColor: 'rgba(255,255,255,0.9)'
            }}
          />
          <textarea 
            placeholder="رسالتك" 
            rows="4"
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #ddd',
              backgroundColor: 'rgba(255,255,255,0.9)',
              resize: 'vertical'
            }}
          ></textarea>
          <button 
            type="submit"
            style={{
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: '#FFD600',
              color: '#003366',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 