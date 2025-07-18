import React, { useState, useEffect, useRef } from 'react';
import { Brain, HardHat, MessageSquare, Factory, ChevronRight, ChevronLeft, Quote, Wrench, Lightbulb, Package, BatteryCharging, Users, Phone, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HomeGallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import extraImg1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../images/fuel.jpeg';
import extraImg4 from '../images/battary.jpeg';
import extraImg5 from '../images/images (3).jpeg';
import logologo from '../images/logologo.png'
import img1 from '../images/images.jpeg';
import img2 from '../images/images (1).jpeg';
import img3 from '../images/images (2).jpeg';
import img4 from '../images/images (3).jpeg';
import img5 from '../images/download.jpeg';
import img6 from '../images/download (1).jpeg';
import img7 from '../images/download (2).jpeg';
import img8 from '../images/battary.jpeg';
import img9 from '../images/fuel.jpeg';

import AnimatedCounter from './AnimatedCounter'; // adjust the path as needed
import { areas } from './Areas'; // Import areas array from Areas.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toyota from "../images/cars/toyota.jpeg";
import Volkswagen from "../images/cars/Volkswagen.jpeg";
import volvo from "../images/cars/volvo.jpeg";
import audi from "../images/cars/audi.jpeg";
import bmw from "../images/cars/bmw.jpeg";
import byd from "../images/cars/byd.jpeg";
import Chevrolet from "../images/cars/Chevrolet.jpeg";
import Hyundai from "../images/cars/Hyundai.jpeg";
import jeep from "../images/cars/jeep.jpeg";
import kia from "../images/cars/kia.jpeg";
import mazda from "../images/cars/mazda.jpeg";
import mercedes from "../images/cars/mercedes.jpeg";
import minicooper from "../images/cars/minicooper.jpeg";
import Nissan from "../images/cars/Nissan.jpeg";
import Peugeot from "../images/cars/Peugeot.jpeg";
import skoda from "../images/cars/skoda.jpeg";
import subaru from "../images/cars/subaru.jpeg";
import whatsapp1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import whatsapp2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import whatsapp3 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_0b194e2d.jpg';
import whatsapp4 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_bc1bb19d.jpg';
import whatsapp5 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_7427781a.jpg';
import whatsapp6 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_00a9c303.jpg';
import whatsapp7 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_a2d1fc1d.jpg';
import whatsapp8 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_d02e6e11.jpg';
import whatsapp9 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_0da1e2e8.jpg';
import whatsapp10 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_58370244.jpg';
import whatsapp11 from '../images/WhatsApp Image 2025-07-02 at 15.02.31_d875b30c.jpg';

const whatsappImages = [
  whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp5, whatsapp6, whatsapp7, whatsapp8, whatsapp9, whatsapp10, whatsapp11
];

const partners = [
  { src: toyota, alt: "Toyota" },
  { src: Volkswagen, alt: "Volkswagen" },
  { src: volvo, alt: "Volvo" },
  { src: audi, alt: "Audi" },
  { src: bmw, alt: "BMW" },
  { src: byd, alt: "BYD" },
  { src: Chevrolet, alt: "Chevrolet" },
  { src: Hyundai, alt: "Hyundai" },
  { src: jeep, alt: "Jeep" },
  { src: kia, alt: "Kia" },
  { src: mazda, alt: "Mazda" },
  { src: mercedes, alt: "Mercedes" },
  { src: minicooper, alt: "Mini Cooper" },
  { src: Nissan, alt: "Nissan" },
  { src: Peugeot, alt: "Peugeot" },
  { src: skoda, alt: "Skoda" },
  { src: subaru, alt: "Subaru" },
];

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
            max-width: 90% !important;
            margin: auto !important;
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

        .gallery-content-box {
            background: #1873CD;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px #ffe06655, 0 2px 16px #0001;
            border: 2.5px solid #ffe066;
            padding: 2.2rem 2.5rem 1.7rem 2.5rem;
            margin: -2.5rem auto 2.5rem auto;
            max-width: 520px;
            text-align: center;
            font-family: 'Tajawal', Arial, sans-serif;
            position: relative;
            z-index: 3;
            animation: fadeInBox 1.1s cubic-bezier(.4,0,.2,1);
        }
        .gallery-content-box .gallery-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.1rem;
            font-size: 2.3rem;
            color: #ffb100;
            filter: drop-shadow(0 2px 6px #ffe06688);
        }
        .gallery-content-box p {
            color: #ffe066;
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
            letter-spacing: 0.5px;
        }
        @keyframes fadeInBox {
            0% { opacity: 0; transform: translateY(30px) scale(0.97); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 600px) {
            .gallery-content-box {
                padding: 1.2rem 0.7rem 1rem 0.7rem;
                max-width: 98vw;
                font-size: 1rem;
                margin: 1rem auto 1.5rem auto;
            }
            .gallery-content-box .gallery-icon {
                font-size: 1.5rem;
                margin-bottom: 0.7rem;
            }
            .gallery-content-box p {
                font-size: 1.05rem;
            }
        }
      `}
      </style>
      {/* Marquee above the gallery section */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
        color: '#ffe600',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        padding: '0.5rem 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        boxShadow: '0 2px 12px #00336622',
      }}>
        <marquee width='100%' direction='right' style={{fontFamily: 'Cairo, Tahoma, Arial, sans-serif'}}>
          خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%. ونش محمد بحر لإنقاذ السيارات 01044844492
        </marquee>
      </div>

      {/* Gallery Section */}
      <div className="section_top"></div>
      <div className="gallery-content-box">
        <img src={logologo} alt="" height={75}/>
        <p>ونش انقاذ سيارات بخصم 50%.</p>
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
        <div style={{background: 'var(--color-highlight)', color: 'var(--color-bg)', flex: '1 1 320px', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
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
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>تنتشر جميع سيارات الانقاذ لدينا في جميع أنحاء الجمهورية والميادين  العامة والطرق الرئيسية لذلك نحن الأقرب إليك.</div>
          </div>
          {/* Feature: الخبرة */}
          <div style={{flex: '1 1 220px', minWidth: '220px', background: 'transparent', color: 'var(--color-accent)', textAlign: 'center'}}>
            <Factory size={48} color="#ffc107" style={{marginBottom: '1rem'}} />
            <div style={{fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '0.5rem', color:'var(--color-text)'}}>الخبرة</div>
            <div style={{fontSize: '1.05rem', color:'var(--color-text)'}}>يتمتع فريق العمل لدينا بخبرة واسعة إلى جانب معرفة السائقين بالطرق والاختصارات التي تضمن سرعة الوصول.</div>
          </div>
        </div>
      </section>

      {/* Features Grid Section (from image) */}
      <section style={{
        position: 'relative',
        maxWidth: '1100px',
        margin: '2.5rem auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2rem',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px #0004',
        padding: '2.5rem 1.5rem',
        zIndex: 2,
        overflow: 'hidden',
        background: `linear-gradient(120deg, #0a223a 60%, #1a2a3a 100%)`,
      }}>
        {/* Optional background image overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/images/winch-bg.jpg) center/cover no-repeat', // Use your tow truck image if available
          opacity: 0.18,
          zIndex: 1,
          pointerEvents: 'none',
          filter: 'blur(1px) grayscale(0.2)',
        }}></div>
        {/* Content wrapper for z-index */}
        <div style={{position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
          {/* Right column */}
          <div style={{flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '2.2rem'}}>
            {/* الانتشار */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>الانتشار</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>اوناشنا منتشرة في جميع أنحاء الجمهورية طوال 24 ساعة.</div>
              </div>
            </div>
            {/* الدعم */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>الدعم</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>نقدم دعم واستشارات فنية مجانية.</div>
              </div>
            </div>
            {/* خدمة العملاء */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>خدمة العملاء</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>نقدم خدماتنا على مدار الساعة طوال أيام الأسبوع لمدة 24 ساعة.</div>
              </div>
            </div>
            {/* الجودة والسعر */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>الجودة والسعر</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>نقدم أعلى جودة ممكنة باستخدام أحدث التقنيات وبأقل الأسعار.</div>
              </div>
            </div>
          </div>
          {/* Left column */}
          <div style={{flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '2.2rem'}}>
            {/* السرعة */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>السرعة</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>سرعة وصول ونش الانقاذ خلال 10 دقائق بحد أقصى.</div>
              </div>
            </div>
            {/* الامان */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>الامان</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>نقوم بتتبع جميع الاوناش من خلال GPS.</div>
              </div>
            </div>
            {/* الخبرة */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>الخبرة</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>لدينا سائقين محترفين وعلى دراية كاملة بالطرق واستخدام المعدات.</div>
              </div>
            </div>
            {/* التنوع */}
            <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
              <span style={{background: '#ffe600', borderRadius: '50%', width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002'}}>
                <Wrench size={32} color="#222" />
              </span>
              <div>
                <div style={{fontWeight: 'bold', color: '#ffe600', fontSize: '1.25rem'}}>التنوع</div>
                <div style={{color: '#fff', fontSize: '1.05rem'}}>نقوم باستبدال الاطارات و التزود بالوقود والماء و وصلة بطارية وفتح الابواب.</div>
              </div>
            </div>
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
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>
      <AnimatedCounter target={32} prefix="+" />
    </div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>سنوات من الخبرة</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>
      <AnimatedCounter target={98} suffix="%" />
    </div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>عملاء سعداء</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>
      <AnimatedCounter target={13720} />
    </div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>سيارة تم إنقاذها</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', borderLeft: '1px solid #f7e600', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>
      <AnimatedCounter target={10} />
    </div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>عدد اوناش الانقاذ</div>
  </div>
  <div className="counter-item" style={{flex: 1, textAlign: 'center', padding: '0 0.5rem'}}>
    <div style={{fontSize: '3rem', color: '#003366', fontWeight: 700, fontFamily: 'Tajawal, sans-serif', marginBottom: '0.5rem'}}>
      <AnimatedCounter target={49} />
    </div>
    <div style={{fontWeight: 'bold', color: '#222', fontSize: '1rem'}}>فريق العمل</div>
  </div>
</section>

      {/* WhatsApp Images Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '2.5rem auto',
        padding: '1.5rem 1rem',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 2px 12px #0001',
      }}>
        <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#1976d2', marginBottom: '1.2rem', textAlign: 'center'}}>صور من أعمالنا  </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {whatsappImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`صورة واتساب رقم ${idx+1}`}
              style={{
                width: '180px',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '0.7rem',
                boxShadow: '0 2px 8px #0001',
                background: '#f7f7fa',
              }}
            />
          ))}
        </div>
      </section>

      {/* Areas Simple List Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '2.5rem auto',
        padding: '1.5rem 1rem',
        borderRadius: '1rem',
        boxShadow: '0 2px 12px #0001',
        background:'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
      }}>
        <div style={{fontWeight: 'bold', fontSize: '2rem', color: 'var(--color-highlight)', marginBottom: '1.2rem', textAlign: 'center'}}>مناطق التغطية</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '0.7rem 1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
          direction: 'rtl',
        }}>
          {areas.map((area, idx) => (
            <Link
              key={idx}
              to={`/areas/${encodeURIComponent(area)}`}
              style={{
                color:'#ffe066',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1.2rem',
                padding: '0.5rem 0.2rem',
                borderRadius: '0.4rem',
                transition: 'background 0.15s',
                textAlign: 'center',
                display: 'block',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#f7f7fa'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              {area}
            </Link>
          ))}
        </div>
      </section>

   
    {/* Partners Section */}
    <section style={{
        maxWidth: '1100px',
        margin: '3rem auto',
        padding: '2rem',
        background: '#ffc107',
        boxShadow: '0 2px 12px #0001',
        textAlign: 'center',
      }}>
        <div style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#0a3977', marginBottom: '2rem'}}>شركاء النجاح</div>
        <Slider
          dots={false}
          infinite={true}
          speed={700}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1800}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
          ]}
        >
          {partners.map((partner, idx) => (
            <div key={idx} style={{padding: '0 10px'}}>
              <img
                src={partner.src}
                alt={partner.alt}
                style={{
                  width: '100%',
                  maxWidth: '120px',
                  height: '80px',
                  objectFit: 'contain',
                  margin: '0 auto',
                  filter: 'drop-shadow(0 2px 8px #0002)',
                  background: 'white',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                }}
              />
            </div>
          ))}
        </Slider>
      </section>

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
          background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '1.5rem 1.2rem',
          position: 'relative',
          zIndex: 1,
          borderRight: '6px solid #ffb100',
          fontSize: '1.18rem',
          fontWeight: 600,
          color: 'var(--color-highlight)',
          lineHeight: '2',
          marginRight: '0.5rem',
        }}>
          إذا كنت تبحث عن خدمة إنقاذ سيارات بأرخص سعر فعليك إختيار خدمة ونش إنقاذ سيارات من خلال الاتصال بنا وسوف نرسل إليك أقرب ونش إنقاذ سيارات علي الفور في أي وقت علي مدار اليوم فنحن نوفر خدماتنا 24 ساعة علي مدار اليوم.
        </div>
      </section>

      {/* Extra Services Section */}
      <section className="extra-services" style={{maxWidth: '1100px', margin: '2rem auto', padding: '1.5rem 0'}}>
        <div className="section-title">خدمات إضافية</div>
        <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  marginTop: '2rem',
  justifyContent: 'center',
}}>
  {[extraImg1, extraImg2, extraImg3, extraImg4, extraImg5].map((img, idx) => (
    <Link
      to={`/service/${extraServices[idx].id}`}
      key={extraServices[idx].id}
      style={{ textDecoration: 'none', flex: '1 1 220px', maxWidth: '350px', minWidth: '220px', display: 'flex' }}
    >
      <div
        style={{
          background: 'var(--color-muted)',
          color: 'var(--color-text)',
          borderRadius: '1rem',
          padding: '2rem 1rem',
          boxShadow: '0 0 40px #00384466 ',
          textAlign: 'center',
          transition: 'transform 0.2s',
          fontWeight: 500,
          minHeight: '200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="service-card-hover"
      >
        {extraServices[idx].icon}
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.7rem' }}>{extraServices[idx].title}</div>
        <div style={{ fontSize: '1rem' }}>{extraServices[idx].desc}</div>
        <img
          src={img}
          alt={extraServices[idx].title}
          style={{
            width: '100%',
            borderRadius: '0.7rem',
            margin: '1rem auto 1rem auto',
            display: 'block',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          }}
        />
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
                نحن نقدم خدمة ونش انقاذ سيارات في جميع أنحاء جمهوريه مصر العربيه بأعلى جودة وأسرع وقت. فريقنا المدرب على أعلى مستوى جاهز لمساعدتك في أي وقت من اليوم.
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
                }}>• تغيير الاطارات</li>
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
                <ul style={{listStyle: 'disc', color: 'white', textAlign: 'right', margin: '1.5rem 2rem 0 0', fontWeight: 400, fontSize: '1.1rem', direction: 'rtl'}}>
                  <li>أسعار منافسة وشفافة</li>
                  <li>خدمة 24 ساعة طوال أيام الأسبوع</li>
                  <li>فريق مدرب ومحترف</li>
                  <li>معدات حديثة وآمنة</li>
                  <li>وصول سريع خلال 10 دقائق</li>
                  <li>خصم 50% على الخدمات</li>
                  <li>خدمة ونش انقاذ ليلي ونهاري</li>
                  <li>ونش انقاذ سريع للطوارئ</li>
                  <li>ونش انقاذ سيارات نقل ثقيل</li>
                  <li>ونش انقاذ سيارات ملاكي</li>
                  <li>ونش انقاذ سيارات على الطرق السريعة</li>
                  <li>ونش انقاذ سيارات في جميع المحافظات</li>
                </ul>
              </div>
            </div>
          </div>
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
          background: 'linear-gradient(90deg, #0a2c61 0%, #1976d2 100%)',
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
    <div style={{flex: '1 1 340px', textAlign: 'right', background: 'rgba(0,0,0,0.55)', borderRadius: '1rem', padding: '2rem 2rem', boxShadow: '0 2px 16px #00000033', marginRight: 'auto'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.3rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem'}}>اتصل بنا الان</div>
      <div style={{fontSize: '1.05rem', margin: '1.2rem 0 1.5rem 0', color: '#fff'}}>
        ونش انقاذ محمد بحر هو اسرع و ارخص ونش انقاذ سيارات اتصل على رقم ونش الانقاذ خدمة 24 ساعة اتصل بنا الان ليصلك اقرب ونش انقاذ سيارات بخصم 50%.
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
      {/* Keywords Section - inserted here */}
      <section style={{
        color: '#ffe600',
        textAlign: 'center',
        padding: '2rem 1rem 1.5rem 1rem',
        fontWeight: 'bold',
        fontSize: '1.35rem',
        lineHeight: '2.2',
        letterSpacing: '0.5px',
        direction: 'rtl',
        boxShadow: '0 2px 12px #00336622',
        borderRadius: '0.7rem',
        margin: '1.5rem 0',
        overflowX: 'auto',
      }}>
        <div style={{marginBottom: '1.2rem', fontWeight: 500, fontSize: '1.1rem', color: '#ffe600'}}>
          اختيار ونش إنقاذ سيارات موثوق به يضمن لك الأمان والسرعة في الوصول والمساعدة في أصعب الظروف. نحن نعمل على مدار الساعة لتقديم أفضل خدمة إنقاذ سيارات في مصر بأعلى جودة وأقل سعر.
        </div>
        <div>
          ونش انقاذ – ونش انقاذ سيارات – ونش سيارة – اسرع ونش انقاذ – اقرب ونش انقاذ – انقاذ سيارات – ارخص ونش انقاذ – انقاذ السيارات – ونش عربيات – تليفون ونش انقاذ – رقم ونش انقاذ – ونش انقاذ بالقرب مني
        </div>
        
      </section>
    </div>
    {/* Quick Links - Right */}
    <div style={{flex: '1 1 260px', minWidth: '220px', textAlign: 'right'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.2rem', color: '#ffe600', marginBottom: '1.2rem', borderBottom: '3px solid #ffe600', display: 'inline-block', paddingBottom: '0.2rem'}}>روابط مفيدة</div>
      <div style={{display: 'flex', gap: '0.5rem 2.5rem', marginTop: '1.5rem'}}>
        <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'10px'}}>
          {areas.slice(0, Math.ceil(areas.length/2)).map((area, idx) => (
            <Link key={idx} to={`/areas/${encodeURIComponent(area)}`} style={{color: 'inherit', textDecoration: 'none',display:'flex', alignItems:'center',gap:'5px'}}><Link2 size={15}/>{area}</Link>
          ))}
        </div>
        <div style={{display:'flex', flexDirection:'column', width:'100%', gap:'10px'}}>
          {areas.slice(Math.ceil(areas.length/2)).map((area, idx) => (
            <Link key={idx} to={`/areas/${encodeURIComponent(area)}`} style={{color: 'inherit', textDecoration: 'none', display:'flex', alignItems:'center', gap:'5px'}}><Link2 size={15}/>{area}</Link>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      
      </>
    );
  };

export default Home; 