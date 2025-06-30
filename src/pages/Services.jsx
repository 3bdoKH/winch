import React from 'react';
import serviceImg1 from '../images/download.jpeg';
import serviceImg2 from '../images/images (1).jpeg';
import serviceImg3 from '../images/images (2).jpeg';
import { Wrench, Lightbulb, Package, Truck, BatteryCharging, Users } from 'lucide-react';
import YellowCtaBox from '../components/YellowCtaBox';

const extraServices = [
  {
    icon: <Wrench size={44} color="#003366" style={{marginBottom: '1rem'}} />,
    title: 'إنقاذ السيارات',
    desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
  },
  {
    icon: <Lightbulb size={44} color="#003366" style={{marginBottom: '1rem'}} />,
    title: 'نقل المعدات',
    desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
  },
  {
    icon: <Package size={44} color="#003366" style={{marginBottom: '1rem'}} />,
    title: 'التزود بالوقود',
    desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبيات جاهز لتزويدكم بالوقود ..',
  },
  {
    icon: <Truck size={44} color="#003366" style={{marginBottom: '1rem'}} />,
    title: 'فتح أبواب السيارات',
    desc: 'نسيت المفتاح داخل السيارة؟ يمكنك الاتصال برقم ونش انقاذ سيارات أوتوبيات وتحديد مكان تعطل السيارة ليصلك بعدها بضع دقائق ..',
  },
  {
    icon: <BatteryCharging size={44} color="#003366" style={{marginBottom: '1rem'}} />,
    title: 'وصلة بطارية',
    desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبيات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
  },
  {
    icon: <Users size={44} color="#003366" style={{marginBottom: '1rem'}} />,
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
          <div>ونش إنقاذ 24 ساعة</div>
        </div>
        <div className="service-card">
          <img src={serviceImg2} alt="أرخص ونش" style={{width:'100%', borderRadius:'0.5rem', marginBottom:'1rem'}} />
          <div>أرخص ونش إنقاذ سيارات</div>
        </div>
        <div className="service-card">
          <img src={serviceImg3} alt="فريق محترف" style={{width:'100%', borderRadius:'0.5rem', marginBottom:'1rem'}} />
          <div>فريق عمل محترف</div>
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
        {extraServices.map((service, idx) => (
          <div key={idx} style={{
            background: '#fff',
            border: '1.5px solid #e5e7eb',
            borderRadius: '1.2rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            padding: '2rem 1.2rem',
            textAlign: 'center',
            minHeight: '240px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            {service.icon}
            <div style={{fontWeight: 'bold', color: '#003366', fontSize: '1.25rem', marginBottom: '0.7rem'}}>{service.title}</div>
            <div style={{color: '#222', fontSize: '1.08rem', lineHeight: '2'}}>{service.desc}</div>
          </div>
        ))}
      </div>
      <YellowCtaBox />
    </section>
  );
};

export default Services; 