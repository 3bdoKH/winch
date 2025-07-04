import React, { useState, useEffect, useRef } from 'react';
import { Brain, HardHat, MessageSquare, Factory, ChevronRight, ChevronLeft, Quote, Wrench, Lightbulb, Package, BatteryCharging, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomeGallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import extraImg1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../images/fuel.jpeg';
import extraImg4 from '../images/battary.jpeg';
import extraImg5 from '../images/images (3).jpeg';

import img1 from '../images/images.jpeg';
import img2 from '../images/images (1).jpeg';
import img3 from '../images/images (2).jpeg';
import img4 from '../images/images (3).jpeg';
import img5 from '../images/download.jpeg';
import img6 from '../images/download (1).jpeg';
import img7 from '../images/download (2).jpeg';
import img8 from '../images/battary.jpeg';
import img9 from '../images/fuel.jpeg';

const extraServices = [
  {
    id: 'rescue',
    icon: <Wrench size={44} color="#ffc107" style={{marginBottom: '1rem'}} />, 
    title: 'إنقاذ السيارات',
    desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
  },
  {
    id: 'equipment',
    icon: <Lightbulb size={44} color="#ffc107" style={{marginBottom: '1rem'}} />, 
    title: 'نقل المعدات',
    desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
  },
  {
    id: 'fuel',
    icon: <Package size={44} color="#ffc107" style={{marginBottom: '1rem'}} />, 
    title: 'التزود بالوقود',
    desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبيات جاهز لتزويدكم بالوقود ..',
  },
  {
    id: 'battery',
    icon: <BatteryCharging size={44} color="#ffc107" style={{marginBottom: '1rem'}} />, 
    title: 'وصلة بطارية',
    desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبيات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
  },
  {
    id: 'tires',
    icon: <Users size={44} color="#ffc107" style={{marginBottom: '1rem'}} />, 
    title: 'تغيير الاطارات',
    desc: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..',
  },
];

const Home = () => {
  return (
    <>
      <style>
      {`
        
        .marquee-container {
            background: #f5f5f5;
            padding: 2rem 0;
            overflow: hidden;
            margin: 0;
        }

        .marquee-track {
            display: flex;
            animation: marquee1 20s linear infinite;
            gap: 2rem;
            transform: translateX(-100%)
        }

        .marquee-item {
            min-width: 200px;
            height: 150px;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            flex-shrink: 0;
        }

        .marquee-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @keyframes marquee1 {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(150%); }
            100% {transform: translateX(-100%); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .marquee-item { min-width: 150px; height: 100px; }
        }

        /* Counter Section Styles for Responsiveness */
        @media (max-width: 768px) {
          .counter-section {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .counter-section .counter-item {
            border-left: none !important;
            border-bottom: 1px solid #f7e600 !important;
            padding: 1.2rem 0 !important;
            margin: 0 !important;
          }
          .counter-section .counter-item:last-child {
            border-bottom: none !important;
          }
        }
      `}
      </style>
      {/* Marquee above the gallery section */}
      <div style={{
        width: '100%',
        background: 'var(--color-accent)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        padding: '0.5rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
      }}>
        <marquee width='100%' direction='right'>
        خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%. ونش محمد بحر لإنقاذ السيارات 01044844492
        </marquee>
      </div>

      {/* Gallery Section */}
      <div className="section_top">
        <div className="content">
          <span>
            انقاذ سيارات
          </span>
          <h2>
            ونش انقاذ
          </h2>
          <p>
             ونش انقاذ سيارات بخصم 50%.
          </p>
        </div>
      </div>

      

      {/* Hero Title/Desc/Phone with gradient background */}
      <section className="hero" id="home" style={{background: 'var(--color-muted)', color: 'var(--color-text)'}}>
        <div className="hero-title">أسرع ونش إنقاذ سيارات في مصر</div>
        <div className="hero-desc">
          خدمة إنقاذ سيارات على مدار الساعة في جميع أنحاء الجمهورية. اتصل الآن ليصلك أقرب ونش إنقاذ بأقل سعر وأعلى جودة.
        </div>
        <a style={{color:'var(--color-highlight)', textDecoration:'none'}} className="hero-phone" href='tel:01044844492'>01044844492</a>
      </section>

      {/* Features Section (from screenshot) */}
      <section style={{display: 'flex', flexWrap: 'wrap', background: 'var(--color-bg)', color: 'var(--color-text)', padding: '0', margin: '0 0 2rem 0', minHeight: '350px'}}>
        {/* Yellow CTA box */}
        <div style={{background: 'var(--color-highlight)', color: 'var(--color-bg)', flex: '1 1 320px', minWidth: '320px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem'}}>ونش انقاذ محمد بحر</div>
          <div style={{fontWeight: 'bold', fontSize: '2rem', lineHeight: '1.3', marginBottom: '1.5rem'}}>اطلب ونش انقاذ سيارات دلوقتي بكل سهولة.</div>
          <div style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            ونش انقاذ محمد بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
          </div>
        </div>
        {/* Blue features grid */}
        <div style={{flex: '2 1 500px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'stretch', padding: '2.5rem 1rem', gap: '2rem'}}>
          {/* Feature: السرعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center'}}>
            <Brain size={48} color="#ffc107" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color:'var(--color-text)'}}>السرعة</div>
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>نصلك في غضون 10 دقائق بحد أقصى، ونقدم خدمة إنقاذ السيارات بسرعة واحترافية عالية.</div>
          </div>
          {/* Feature: خدمة 24 ساعة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center'}}>
            <HardHat size={48} color="#ffc107" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color:'var(--color-text)'}}>خدمة 24 ساعة</div>
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>الأوناش متاحة طوال اليوم 24 ساعة طوال أيام الأسبوع في أي وقت من اليوم، نهاراً أو ليلاً.</div>
          </div>
          {/* Feature: الانتشار */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center'}}>
            <MessageSquare size={48} color="#ffc107" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color:'var(--color-text)'}}>الانتشار</div>
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>تنتشر جميع سيارات الانقاذ لدينا في جميع أنحاء الجمهورية والصياحين العامة والطرق الرئيسية لذلك نحن الأقرب إليك.</div>
          </div>
          {/* Feature: الخبرة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center'}}>
            <Factory size={48} color="#ffc107" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color:'var(--color-text)'}}>الخبرة</div>
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>يتمتع فريق العمل لدينا بخبرة واسعة إلى جانب معرفة السائقين بالطرق والاختصارات التي تضمن سرعة الوصول.</div>
          </div>
        </div>
      </section>

{/* Rating Bar */}
<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  fontSize: '1.35rem', 
  fontWeight: 'bold',
  margin: '1.5rem 0 0.5rem 0',
  direction: 'rtl',
}}>
  <span style={{color: '#FFA500', fontSize: '2rem', marginLeft: '0.3rem'}}>
    {/* 5 filled stars */}
    <span style={{marginLeft: '0.1rem'}}>&#9733;</span>
    <span style={{marginLeft: '0.1rem'}}>&#9733;</span>
    <span style={{marginLeft: '0.1rem'}}>&#9733;</span>
    <span style={{marginLeft: '0.1rem'}}>&#9733;</span>
    <span style={{marginLeft: '0.1rem'}}>&#9733;</span>
  </span>
  <span style={{color: '#222', fontWeight: 'bold', fontSize: '1.15rem', marginTop:'8px'}}>
    5/5 - (1986 صوت)
  </span>
</div>

{/* Counter Section */}
<section className="counter-section" style={{
  background: '#ffed3b',
  width: '100%',
  padding: '2.5rem 0 1.5rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: 0,
  border: 'none',
  borderBottom: '1px solid #f7e600',
  margin: 0,
  direction: 'rtl',
  flexWrap: 'wrap',
}}>
  {/* Each counter */}
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>+32</div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>سنوات من الخبرة</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>98%</div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>عملاء سعداء</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>13,720</div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>سيارة تم إنقاذها</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>10</div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>عدد اوناش الانقاذ</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>49</div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>فريق العمل</div>
  </div>
</section>

    <div class="marquee-container">
        <div class="marquee-track">
            <div class="marquee-item">
                <img src={img1} alt="Image 1" />
            </div>
            <div class="marquee-item">
                <img src={img2} alt="Image 2" />
            </div>
            <div class="marquee-item">
                <img src={img3} alt="Image 3" />
            </div>
            <div class="marquee-item">
                <img src={img4} alt="Image 4" />
            </div>
            <div class="marquee-item">
                <img src={img5} alt="Image 5" />
            </div>
            <div class="marquee-item">
                <img src={img6} alt="Image 6" />
            </div>
            <div class="marquee-item">
                <img src={img7} alt="Image 7" />
            </div>
            <div class="marquee-item">
                <img src={img8} alt="Image 8" />
            </div>
            <div class="marquee-item">
                <img src={img9} alt="Image 9" />
            </div>
            <div class="marquee-item">
                <img src={img1} alt="Image 1" />
            </div>
            <div class="marquee-item">
                <img src={img2} alt="Image 2" />
            </div>
            <div class="marquee-item">
                <img src={img3} alt="Image 3" />
            </div>
            <div class="marquee-item">
                <img src={img4} alt="Image 4" />
            </div>
            <div class="marquee-item">
                <img src={img5} alt="Image 5" />
            </div>
            <div class="marquee-item">
                <img src={img6} alt="Image 6" />
            </div>
            <div class="marquee-item">
                <img src={img7} alt="Image 7" />
            </div>
            <div class="marquee-item">
                <img src={img8} alt="Image 8" />
            </div>
            <div class="marquee-item">
                <img src={img9} alt="Image 9" />
            </div>
        </div>
    </div>

      {/* Otobiat Features Quote Section */}
      <section style={{
        position: 'relative',
        maxWidth: '600px',
        margin: '2.5rem auto',
        background: ' var(--color-muted)',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: '2.5rem 1.5rem 2rem 1.5rem',
        textAlign: 'right',
        overflow: 'hidden',
        border: '1px solid #f194b4'
      }}>
        {/* Decorative yellow quotes */}
        <Quote size={90} color="#0077ff" style={{position: 'absolute', top: '10px', left: '10px', opacity: 0.13, zIndex: 0}} />
        <Quote size={90} color="#0077ff" style={{position: 'absolute', bottom: '10px', right: '10px', opacity: 0.13, zIndex: 0, transform: 'scaleX(-1)'}} />
        {/* Title with two-tone and underline */}
        <div style={{fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.2rem', lineHeight: '1.2', color: 'var(--color-accent)'}}>
          <span>مميزات ونش انقاذ سيارات </span>
          <span style={{color: 'var(--color-accent)', position: 'relative', zIndex: 1}}>
          محمد بحر
            <span style={{
              display: 'block',
              height: '7px',
              background: '#ffb100',
              borderRadius: '4px',
              position: 'absolute',
              right: 0,
              left: 0,
              bottom: '-4px',
              zIndex: -1,
              opacity: 0.7
            }}></span>
          </span>
          :
        </div>
        {/* White inner card for quote */}
        <div style={{
          background: '#ffebc6',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '1.5rem 1.2rem',
          position: 'relative',
          zIndex: 1,
          borderRight: '6px solid #ffb100',
          fontSize: '1.18rem',
          fontWeight: 600,
          color: '#003844',
          lineHeight: '2',
          marginRight: '0.5rem',
        }}>
          إذا كنت تبحث عن خدمة إنقاذ سيارات بأرخص سعر فعليك إختيار خدمة ونش إنقاذ سيارات من خلال الاتصال بنا وسوف نرسل إليك أقرب ونش إنقاذ سيارات علي الفور في أي وقت علي مدار اليوم فنحن نوفر خدماتنا 24 ساعة علي مدار اليوم.
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="extra-services" style={{maxWidth: '1100px', margin: '2rem auto', padding: '1.5rem 0'}}>
        <div className="section-title">خدمات إضافية</div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          {[extraImg1, extraImg2, extraImg3, extraImg4, extraImg5].map((img, idx) => (
            <Link to={`/service/${extraServices[idx].id}`} key={extraServices[idx].id} style={{textDecoration: 'none'}}> 
              <div style={{background:'var(--color-muted)', color:'var(--color-text)', borderRadius:'1rem', padding:'2rem 1rem', boxShadow:'0 0 40px #00384466 ', textAlign:'center', transition:'transform 0.2s', fontWeight:500, minHeight:'200px'}} className="service-card-hover">
                {extraServices[idx].icon}
                <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'0.7rem'}}>{extraServices[idx].title}</div>
                <div style={{fontSize:'1rem'}}>{extraServices[idx].desc}</div>
                <img src={img} alt={extraServices[idx].title} style={{width: '100%', borderRadius: '0.7rem', margin: '1rem auto 1rem auto', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-title">آراء العملاء</div>
        <div className="testimonial">
          
          <div>وصلني ونش الإنقاذ بعد 10 دقائق فقط من الاتصال. السائق كان متعاون جداً والخدمة ممتازة.</div>
          <div className="testimonial-author">إبراهيم سعيد - رجل أعمال</div>
        </div>
        <div className="testimonial">
          <div>شركة محترمة وفريق عمل محترف. أنصح الجميع بالتعامل معهم.</div>
          <div className="testimonial-author">خالد اكرم - صاحب شركة</div>
        </div>
      </section>

      {/* Call to Action Section - Bottom of Home Page */}
     

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-info">
            <div style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem'}}>تواصل معنا</div>
            <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>هاتف: 01044844492</div>
            <div style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>واتساب: 01044844492</div>
            <div style={{fontSize: '1.1rem'}}>خدمة 24 ساعة طوال أيام الأسبوع</div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section style={{
          background: 'var(--color-bg)',
          padding: '3rem 1rem',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              color: 'var(--color-accent)',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '2rem'
            }}>
              ونش انقاذ سيارات في مصر
            </h2>
            
            <div style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--color-text)',
              textAlign: 'right'
            }}>
              <p style={{marginBottom: '1.5rem'}}>
                نحن نقدم خدمة ونش انقاذ سيارات في جميع أنحاء مصر بأعلى جودة وأسرع وقت. فريقنا المدرب على أعلى مستوى جاهز لمساعدتك في أي وقت من اليوم.
              </p>
              
              <h3 style={{
                color: 'var(--color-accent)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                خدماتنا تشمل:
              </h3>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '1.5rem'
              }}>
                <li style={{
                  background: 'var(--color-muted)',
                  padding: '0.8rem 1rem',
                  margin: '0.5rem 0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>• إنقاذ السيارات من الحوادث</li>
                <li style={{
                  background: 'var(--color-muted)',
                  padding: '0.8rem 1rem',
                  margin: '0.5rem 0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>• نقل السيارات المعطلة</li>
                <li style={{
                  background: 'var(--color-muted)',
                  padding: '0.8rem 1rem',
                  margin: '0.5rem 0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>• خدمة التزود بالوقود</li>
                <li style={{
                  background: 'var(--color-muted)',
                  padding: '0.8rem 1rem',
                  margin: '0.5rem 0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>• وصلة البطارية</li>
                <li style={{
                  background: 'var(--color-muted)',
                  padding: '0.8rem 1rem',
                  margin: '0.5rem 0',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}>• فتح أبواب السيارات</li>
              </ul>
              
              <div style={{
                background: 'var(--color-highlight)',
                color: 'var(--color-bg)',
                padding: '1.5rem',
                borderRadius: '1rem',
                marginTop: '2rem'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  لماذا تختارنا؟
                </h4>
                <p style={{fontSize: '1rem', lineHeight: '1.6'}}>
                  • أسعار منافسة وشفافة<br/>
                  • خدمة 24 ساعة طوال أيام الأسبوع<br/>
                  • فريق مدرب ومحترف<br/>
                  • معدات حديثة وآمنة<br/>
                  • وصول سريع خلال 10 دقائق
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Keywords Section */}
        <section style={{
          background: 'var(--color-bg)',
          color: 'var(--color-accent)',
          textAlign: 'center',
          padding: '2rem 1rem 1.5rem 1rem',
          fontWeight: 'bold',
          fontSize: '1.35rem',
          lineHeight: '2.2',
          letterSpacing: '0.5px',
          direction: 'rtl',
        }}>
          ونش انقاذ – ونش انقاذ سيارات – ونش سيارة – اسرع ونش انقاذ – اقرب ونش انقاذ – انقاذ سيارات – ارخص ونش انقاذ – انقاذ السيارات – ونش عربيات – تليفون ونش انقاذ – رقم ونش انقاذ – ونش انقاذ بالقرب مني
        </section>
        <section
            style={{
              position: 'relative',
              minHeight: '390px',
              width: '100%',
              margin: '0',
              padding: '0',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='back-footer'
          >
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.81)',
                zIndex: 2,
              }}
            ></div>
            {/* Content */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '3rem 2rem',
                color: '#fff',
                gap: '2rem',
              }}
            >
              {/* Contact Info - Left */}
              <div style={{flex: '1 1 340px', minWidth: '300px', textAlign: 'right', background: 'rgba(0,0,0,0.55)', borderRadius: '1rem', padding: '2rem 2rem', boxShadow: '0 2px 16px #00000033', marginRight: 'auto'}}>
                <div style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem'}}>اتصل بنا الان</div>
                <div style={{fontSize: '1.05rem', margin: '1.2rem 0 1.5rem 0', color: '#fff'}}>
                  ونش انقاذ محمد بحر هو اسرع و ارخص ونش انقاذ سيارات اتصل على رقم ونش الانقاذ خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%.
                </div>
                <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#fff'}}>
                الهضبه الوسطى ، ال ٧٠ فدان ، خلف كومباوند نكست عماره رقم ١٠٥
                </div>
                <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.7rem', color: '#fff'}}>
                كورنيش عدلي مليجي، عماره ٢٢٦ ، الدور الارضي بجوار كافيه ليالي
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.2rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
                    <span style={{background: '#ffe600', borderRadius: '50%', padding: '0.5rem'}}><Phone color='#000'size={20} /></span>
                    <span style={{direction: 'ltr', fontFamily: 'monospace', fontSize:'20px'}}>01044844492</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
                    <span style={{background: '#ffe600',fontSize:'20px' , color:'#000', borderRadius: '50%', padding: '0.5rem'}}><FontAwesomeIcon color='#000' size='1xl' icon={faWhatsapp} /></span>
                    <span style={{direction: 'ltr', fontFamily: 'monospace', fontSize:'20px'}}>01044844492</span>
                  </div>
                  
                </div>
              </div>
              {/* Quick Links - Right */}
              <div style={{flex: '1 1 260px', minWidth: '220px', textAlign: 'right'}}>
                <div style={{fontWeight: 'bold', fontSize: '1.2rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem'}}>روابط مفيدة</div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2.5rem', marginTop: '1.5rem'}}>
                  <div style={{minWidth: '150px',  gap:'15px', display:'flex', flexDirection:'column'}}>
                    <div>ونش انقاذ سيارات</div>
                    <div>ونش انقاذ</div>
                    <div>ارخص ونش انقاذ</div>
                    <div>تليفون ونش انقاذ</div>
                    <div>ونش انقاذ سريع</div>
                    <div>ونش انقاذ القاهرة</div>
                    <div>ونش انقاذ على المحاور</div>
                    <div>ونش انقاذ محيطى</div>
                    <div>ونش انقاذ مدينة نصر</div>
                  </div>
                  <div style={{minWidth: '150px', gap:'15px', display:'flex', flexDirection:'column'}}>
                    <div>اقرب ونش انقاذ</div>
                    <div>رقم ونش انقاذ</div>
                    <div>ونش انقاذ 24 ساعة</div>
                    <div>ونش عربيات</div>
                    <div>ونش سحب</div>
                    <div>ونش انقاذ المعطم</div>
                    <div>ونش انقاذ التجمع</div>
                    <div>ونش انقاذ 6 اكتوبر</div>
                    <div>ونش انقاذ الرحاب</div>
                    <div>ونش انقاذ الشيخ زايد</div>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
      </>
    );
  };

export default Home; 