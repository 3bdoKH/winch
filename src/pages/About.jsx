import React from 'react';
import { Info, Star, MessageCircle } from 'lucide-react';
import YellowCtaBox from '../components/YellowCtaBox';

const About = () => {
  return (
    <>
      <div style={{maxWidth: '700px', margin: '2rem auto', padding: '2rem 1.5rem', background: '#006c67', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #006c67'}}>
        <div className="section-title" style={{color: '#ffb100', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
          <Info color="#ffb100" size={32} /> عن الشركة
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2', fontSize: '1.1rem', color: '#f194b4'}}>
          <p>
            <b>ونش انقاذ محمد بحر</b> –   لإنقاذ ورفع السيارات تعمل في السوق المصري منذ عام <b>2001</b> بمجال انقاذ ورفع السيارات علي الطرق السريعة بكافة أنحاء الجمهورية. لبناء جسور من الثقة المتبادلة بين الشركة وعملائها، ولدينا احدث اوناش ومجهزة باحدث الات رفع السيارات ولدينا فريق عمل محترف جدا، ما يميزنا عن غيرنا هو تقديم خدمة انقاذ سيارات بأعلى جودة وأحدث الاجهزة بأقل سعر و باحترافية عالية.
          </p>
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb100', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
            <MessageCircle color="#ffb100" size={24} /> رسالتنا :
          </div>
          <p style={{marginRight: '2rem'}}>
            هي العمل على تقديم خدمات اوناش انقاذ السيارات بطريقة منافسة عالية الجودة تلبي احتياجات العملاء بأفضل الأسعار لتحقيق فهم أعمق بتقديم خدمة أوناش الإنقاذ سيارات بمعايير جودة وسلامة عالية.
          </p>
        </div>
        <div className="section-content" style={{marginBottom: '2rem', lineHeight: '2'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffb100', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
            <Star color="#ffb100" size={24} /> اهم ما يميزنا :
          </div>
          <ul style={{listStyle: 'disc', paddingRight: '2rem', marginTop: '1rem', color: '#ffebc6', fontSize: '1.08rem'}}>
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
      <YellowCtaBox />
    </>
  );
};

export default About; 