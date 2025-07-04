import React from 'react';
import serviceImg1 from '../images/download.jpeg';
import serviceImg2 from '../images/images (1).jpeg';
import serviceImg3 from '../images/images (2).jpeg';
import { Wrench, Lightbulb, Package, BatteryCharging, Users } from 'lucide-react';
import YellowCtaBox from '../components/YellowCtaBox';
import { Link } from 'react-router-dom';
import extraImg1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../images/fuel.jpeg';
import extraImg4 from '../images/battary.jpeg';
import extraImg5 from '../images/images (3).jpeg';

const extraServices = [
  {
    id: 'rescue',
    icon: <Wrench size={44} color="#0077ff" style={{marginBottom: '1rem'}} />,
    title: 'إنقاذ السيارات',
    desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
  },
  {
    id: 'equipment',
    icon: <Lightbulb size={44} color="#0077ff" style={{marginBottom: '1rem'}} />,
    title: 'نقل المعدات',
    desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
  },
  {
    id: 'fuel',
    icon: <Package size={44} color="#0077ff" style={{marginBottom: '1rem'}} />,
    title: 'التزود بالوقود',
    desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبات جاهز لتزويدكم بالوقود ..',
  },
  {
    id: 'battery',
    icon: <BatteryCharging size={44} color="#0077ff" style={{marginBottom: '1rem'}} />,
    title: 'وصلة بطارية',
    desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
  },
  {
    id: 'tires',
    icon: <Users size={44} color="#0077ff" style={{marginBottom: '1rem'}} />,
    title: 'تغيير الاطارات',
    desc: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..',
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      
      <div className="section-title">خدماتنا</div>
      <div className="services-list">
        <div className="service-card">
          <img src={serviceImg1} alt="خدمة 24 ساعة" style={{width:'100%', borderRadius:'0.5rem', marginBottom:'1rem'}} />
          <div style={{color: 'var(--color-accent)'}}>
            ونش إنقاذ 24 ساعة
          </div>
        </div>
        <div className="service-card">
          <img src={serviceImg2} alt="أرخص ونش" style={{width:'100%', borderRadius:'0.5rem', marginBottom:'1rem'}} />
          <div style={{color: 'var(--color-accent)'}}>
            أرخص ونش إنقاذ سيارات
          </div>
        </div>
        <div className="service-card">
          <img src={serviceImg3} alt="فريق محترف" style={{width:'100%', borderRadius:'0.5rem', marginBottom:'1rem'}} />
          <div style={{color: 'var(--color-accent)'}}>
            فريق عمل محترف
          </div>
        </div>
      </div>

      {/* Extra Services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        margin: '3rem 0 0 0',
        direction: 'rtl',
      }}>
        {[extraImg1, extraImg2, extraImg3, extraImg4, extraImg5].map((img, idx) => (
          <Link to={`/service/${extraServices[idx].id}`} key={extraServices[idx].id} style={{textDecoration: 'none'}}> 
            <div style={{background: 'var(--color-muted)', color: 'var(--color-text)', borderRadius: '1rem', padding: '2rem 1rem', textAlign: 'center', fontWeight:500, minHeight:'200px'}} className="service-card-hover">
              {extraServices[idx].icon}
              <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'0.7rem'}}>{extraServices[idx].title}</div>
              <div style={{fontSize:'1rem'}}>{extraServices[idx].desc}</div>
              <img src={img} alt={extraServices[idx].title} style={{width: '100%', borderRadius: '0.7rem', margin: '1rem auto 1rem auto', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
            </div>
          </Link>
        ))}
      </div>
      <YellowCtaBox />
    </section>
  );
};

export default Services; 