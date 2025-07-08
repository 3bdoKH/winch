import React from 'react';
import { Info, Star, MessageCircle } from 'lucide-react';
import YellowCtaBox from '../components/YellowCtaBox';

const About = () => {
  return (
    <>
      <div style={{maxWidth: '700px', margin: '2rem auto', padding: '2rem 1.5rem', borderRadius: '1.5rem'}}>
        <div className="section-title" style={{color: 'var(--color-accent)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
          <Info color="#ffb100" size={32} /> عن الشركة
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2', fontSize: '1.5rem', color: 'black'}}>
          <p>
            <b>ونش انقاذ محمد بحر</b> –   لإنقاذ ورفع السيارات تعمل في السوق المصري منذ عام <b>2001</b> بمجال انقاذ ورفع السيارات علي الطرق السريعة بكافة أنحاء الجمهورية. لبناء جسور من الثقة المتبادلة بين الشركة وعملائها، ولدينا احدث اوناش ومجهزة باحدث الات رفع السيارات ولدينا فريق عمل محترف جدا، ما يميزنا عن غيرنا هو تقديم خدمة انقاذ سيارات بأعلى جودة وأحدث الاجهزة بأقل سعر و باحترافية عالية.
          </p>
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb100', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
            <MessageCircle color="#ffb100" size={24} /> رسالتنا :
          </div>
          <p style={{marginRight: '2rem'}}>
            هي العمل على تقديم خدمات اوناش انقاذ السيارات بطريقة منافسة عالية الجودة تلبي احتياجات العملاء بأفضل الأسعار لتحقيق فهم أعمق بتقديم خدمة أوناش الإنقاذ سيارات بمعايير جودة وسلامة عالية.
          </p>
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb100', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem'}}>
            <Star color="#ffb100" size={24} /> اهم ما يميزنا :
          </div>
          <ul style={{listStyle: 'disc', paddingRight: '2rem', marginTop: '1rem', color: 'var(--color-accent)', fontSize: '1.3rem'}}>
            <li>نحرص على تقديم أسرع <b>ونش انقاذ سيارات</b> بمصر يصلك في غضون 10 دقائق</li>
            <li>نتميز بتوفير أرخص ونش انقاذ سيارات على مستوى الجمهورية بأعلى جودة وأحدث الاجهزة</li>
            <li>نعمل في جميع الأوقات لمدة 24 ساعة ونوفر اوناش في جميع المحافظات</li>
            <li>تسهيل الدفع لخدمة انقاذ السيارات باستخدام طرق دفع متعددة</li>
            <li>سرعة وصول ونش الانقاذ الي مكان العطل ورفع السيارة بأحدث تقنيات ضمانا لعدم أيذاء اجزاء السيارة</li>
            <li>نقدم دعم واستشارات فنية لجميع العملاء</li>
            <li>لدينا سائقين محترفين في انقاذ ورفع السيارات مجهزين بأحدث معدات انقاذ السيارات</li>
          </ul>
        </div>
      </div>
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
    </>
  );
};

export default About; 