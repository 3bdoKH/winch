import React from 'react';
import { Link } from 'react-router-dom';
import YellowCtaBox from '../components/YellowCtaBox';
import './HomeGallery.css'; 
import winchImg from '../images/images.png'; // Use a suitable tow truck image
import logo from '../images/logo.png';

export const areas = [
  'ونش المقطم', 'ونش مصر الجديده', 'ونش العاشر من رمضان', 'ونش بدر', 'ونش عين شمس', 'ونش جسر السويس', 'ونش حلمية الزيتون', 'ونش شيراتون', 'ونش المطار',
  'ونش طريق الاسماعيليه', 'ونش طريق السويس', 'ونش الشروق', 'ونش مدينتي', 'ونش الرحاب', 'ونش مدينه المستقبل', 'ونش القطاميه', 'ونش التجمع الخامس',
  'ونش التجمع التالت', 'ونش التجمع الاول', 'ونش شارع التسعين', 'ونش طريق السخنه', 'ونش الدائري', 'ونش صلاح سالم', 'ونش طريق الاوتوستراد', 'ونش صقر قريش',
  'ونش المعادي', 'ونش زهراء المعادي', 'ونش غمره', 'ونش احمد سعيد', 'ونش الضاهر', 'ونش باب الشاعريه', 'ونش الزاويه', 'ونش السيده زينب', 'ونش السيده عائشه',
  'ونش القلعه', 'ونش مدينة نصر', 'ونش مكرم عبيد', 'ونش عباس العقاد', 'ونش الحي السادس', 'ونش الحي السابع', 'ونش الحي العاشر', 'ونش طريق المشير',
  'ونش محور جيهان السادات', 'ونش محور محمد نجيب', 'ونش جمال عبدالناصر', 'ونش محور ٣٠ يونيو', 'ونش العضبه الوسطى', 'ونش كورنيش المقطم',
  'ونش زايد', 'ونش اكتوبر', 'ونش المحور', 'ونش المهندسين', 'ونش حدائق الاهرام', 'ونش فيصل', 'ونش المريوطيه', 'ونش الجيزه', 'ونش مشعل', 'ونش حدائق اكتوبر',
  'ونش الهرم', 'ونش طريق الفيوم', 'ونش طريق الواحات', 'ونش ٦ اكتوبر', 'ونش العجوزه', 'ونش الزمالك', 'ونش وسط البلد', 'ونش الوراق', 'ونش عابدين',
  'ونش شبرا الخيمه', 'ونش شبرا', 'ونش كورنيش النيل', 'ونش روض الفرج', 'ونش نيو جيزه', 'ونش امبابه', 'ونش كرداسه',
  // New areas
  'صحراوي شرقي', 'صحراوي غربي', 'طريق الكريمات', 'مركز ناصر', 'سمسطا', 'بني سويف', 'الفشن', 'ببا', 'مركز بوش', 'مركز العدوا'
];

const Areas = () => {
  return (
    <section className="section" id="areas" style={{background:'#f7f7fa', minHeight:'100vh', padding:'2.5rem 0'}}>
      <div className="section-title" style={{marginBottom:'2.5rem'}}>الوصول السريع لمناطق الخدمة</div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        maxWidth: '1200px',
        margin: '0 auto 2.5rem auto',
      }}>
        {areas.map((area, idx) => (
          <Link
            key={idx}
            to={`/areas/${encodeURIComponent(area)}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              background: '#fff',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 24px #0001',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              transition: 'transform 0.18s',
            }} className="area-card-hover">
              {/* Top image with overlay */}
              <div style={{position:'relative', width:'100%', height:'150px', overflow:'hidden'}}>
                <img src={winchImg} alt="ونش انقاذ" style={{width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.85)'}} />
                {/* Overlay */}
                <div style={{
                  position:'absolute', top:0, left:0, width:'100%', height:'100%',
                  background:'linear-gradient(180deg, #0a223a99 0%, #0a223a00 80%)',
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  color:'#fff', zIndex:2
                }}>
                  <div style={{fontWeight:'bold', fontSize:'1.25rem', letterSpacing:'1px'}}>MOHAMED BAHR</div>
                  <div style={{fontSize:'1.05rem', margin:'0.2rem 0 0.5rem 0'}}>أسرع وأرخص ونش انقاذ في مصر</div>
                  <span style={{background:'#6c4b1b', color:'#fff', borderRadius:'1.2rem', padding:'0.3rem 1.2rem', fontWeight:'bold', fontSize:'1rem', marginTop:'0.2rem', boxShadow:'0 2px 8px #0002'}}>خدمة على مدار الساعة</span>
                </div>
              </div>
              {/* Area name bar */}
              <div style={{
                background:'#0a3977',
                color:'#fff',
                fontWeight:'bold',
                fontSize:'1.35rem',
                textAlign:'center',
                padding:'1.1rem 0 1rem 0',
                letterSpacing:'0.5px',
                borderBottom:'1px solid #eaeaea',
                marginTop:'0px',
                zIndex:3
              }}>{area}</div>
              {/* Subtitle */}
              <div style={{
                color:'#888',
                fontSize:'1.1rem',
                textAlign:'center',
                padding:'1.1rem 0 1.2rem 0',
                fontWeight:500,
                letterSpacing:'0.5px',
                background:'#fff',
                borderBottomLeftRadius:'1.2rem',
                borderBottomRightRadius:'1.2rem',
              }}>ونش انقاذ</div>
            </div>
          </Link>
        ))}
      </div>
      <YellowCtaBox />
    </section>
  );
};

export default Areas; 