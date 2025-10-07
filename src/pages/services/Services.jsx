import React from 'react';
import {
  Wrench, Lightbulb, Package, BatteryCharging, Users, Shield, Clock, MapPin, Phone,
  ArrowRight, Star, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import YellowCtaBox from '../../components/YellowCtaBox';
import './Services.css';
import extraImg1 from '../../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import extraImg2 from '../../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import extraImg3 from '../../images/fuel.jpeg';
import extraImg4 from '../../images/battary.jpeg';
import extraImg5 from '../../images/images (3).jpeg';

const Services = () => {
  const phoneNumber = '01044844492';

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const extraServices = [
    {
      id: 'rescue',
      icon: <Wrench size={44} color="#ffc107" />,
      title: 'إنقاذ السيارات',
      desc: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..',
      image: extraImg1,
      features: ['سحب السيارات المعطلة', 'رفع السيارات من الحوادث', 'نقل السيارات للمراكز']
    },
    {
      id: 'equipment',
      icon: <Lightbulb size={44} color="#ffc107" />,
      title: 'نقل المعدات',
      desc: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..',
      image: extraImg2,
      features: ['نقل السيارات التجارية', 'نقل المعدات الثقيلة', 'نقل الكرفانات']
    },
    {
      id: 'fuel',
      icon: <Package size={44} color="#ffc107" />,
      title: 'التزود بالوقود',
      desc: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبات جاهز لتزويدكم بالوقود ..',
      image: extraImg3,
      features: ['تزويد البنزين', 'تزويد الديزل', 'خدمة 24 ساعة']
    },
    {
      id: 'battery',
      icon: <BatteryCharging size={44} color="#ffc107" />,
      title: 'وصلة بطارية',
      desc: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبات جاهز وعلي أتم الاستعداد لمساعدتكم ..',
      image: extraImg4,
      features: ['شحن البطارية', 'فحص البطارية', 'استبدال البطارية']
    },
    {
      id: 'tires',
      icon: <Users size={44} color="#ffc107" />,
      title: 'تغيير الاطارات',
      desc: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..',
      image: extraImg5,
      features: ['تغيير الإطارات', 'إصلاح الإطارات', 'بيع الإطارات الجديدة']
    },
  ];

  return (
    <>
      <style>
        {`
          /* Services Page Styles */
          .services-hero {
            background: linear-gradient(135deg, #0a2c61 0%, #1976d2 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .services-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }

          .services-hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }

          .services-hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #ffc107;
          }

          .services-hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .services-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ffc107;
            display: block;
          }

          .stat-label {
            font-size: 1rem;
            opacity: 0.8;
          }

          /* Main Content */
          .services-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .services-intro {
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            padding: 3rem 2rem;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .services-intro::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
          }

          .intro-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 1.5rem;
          }

          .intro-description {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto;
          }

          /* Services Grid */
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .service-card {
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.15);
            border-color: #ffc107;
          }

          .service-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 3px solid #ffc107;
          }

          .service-content {
            padding: 2rem;
            text-align: center;
          }

          .service-icon {
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: white;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
          }

          .service-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 1rem;
          }

          .service-description {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
          }

          .service-features {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: right;
            direction: rtl;
          }

          .service-features li {
            padding: 0.5rem 0;
            color: #333;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .service-features li::before {
            content: '✓';
            color: #ffc107;
            font-weight: bold;
            font-size: 1.2rem;
          }

          .service-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: #0a2c61;
            text-decoration: none;
            padding: 0.8rem 1.5rem;
            border-radius: 0.8rem;
            font-weight: bold;
            margin-top: 1rem;
            transition: all 0.3s ease;
          }

          .service-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* Why Choose Us Section */
          .why-choose-us {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 1.5rem;
            padding: 3rem 2rem;
            margin: 3rem 0;
            text-align: center;
          }

          .why-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 2rem;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .why-item {
            background: white;
            border-radius: 1rem;
            padding: 2rem 1.5rem;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .why-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          }

          .why-icon {
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
          }

          .why-item-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 0.5rem;
          }

          .why-item-desc {
            color: #666;
            line-height: 1.6;
            font-size: 1rem;
          }

          /* Contact CTA */
          .contact-cta {
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: #0a2c61;
            border-radius: 1.5rem;
            padding: 3rem 2rem;
            text-align: center;
            margin-top: 3rem;
          }

          .cta-title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }

          .cta-description {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .cta-button {
            background: #0a2c61;
            color: white;
            border: none;
            border-radius: 0.8rem;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            margin: 10px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .services-hero {
              padding: 3rem 1rem;
            }

            .services-hero-title {
              font-size: 2.2rem;
            }

            .services-hero-subtitle {
              font-size: 1.1rem;
            }

            .services-stats {
              flex-direction: column;
              gap: 1.5rem;
            }

            .services-main {
              padding: 2rem 1rem;
            }

            .services-intro {
              padding: 2rem 1.5rem;
            }

            .intro-title {
              font-size: 2rem;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .why-grid {
              grid-template-columns: 1fr;
            }

            .contact-cta {
              padding: 2rem 1.5rem;
            }

            .cta-title {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 480px) {
            .services-hero-title {
              font-size: 1.8rem;
            }

            .intro-title {
              font-size: 1.6rem;
            }

            .service-card {
              margin: 0 0.5rem;
            }

            .why-item {
              padding: 1.5rem 1rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">خدماتنا المتميزة</h1>
          <p className="services-hero-subtitle">
            نقدم مجموعة شاملة من خدمات انقاذ ورفع السيارات بأحدث المعدات وأفضل الأسعار
          </p>
          <div className="services-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">خدمات أساسية</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">دقائق للوصول</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">خدمة متواصلة</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="services-main">
        {/* Services Introduction */}
        <section className="services-intro">
          <h2 className="intro-title">خدمات ونش انقاذ محمد بحر</h2>
          <p className="intro-description">
            نقدم مجموعة شاملة من خدمات انقاذ ورفع السيارات في جميع أنحاء مصر. فريقنا المحترف مجهز بأحدث المعدات والتقنيات لضمان تقديم خدمة عالية الجودة بأسرع وقت وأفضل سعر.
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-grid">
          {extraServices.map((service, index) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/service/${service.id}`} className="service-link">
                  المزيد من التفاصيل
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2 className="why-title">لماذا تختار خدماتنا؟</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <Clock size={24} />
              </div>
              <h3 className="why-item-title">سرعة الوصول</h3>
              <p className="why-item-desc">
                نصل إليك في غضون 10 دقائق بحد أقصى مع فريق محترف ومجهز
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <Shield size={24} />
              </div>
              <h3 className="why-item-title">أرخص الأسعار</h3>
              <p className="why-item-desc">
                نقدم أفضل الأسعار مع ضمان الجودة العالية والخدمة المتميزة
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <MapPin size={24} />
              </div>
              <h3 className="why-item-title">تغطية شاملة</h3>
              <p className="why-item-desc">
                نعمل في جميع أنحاء مصر مع شبكة واسعة من الأوناش
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <Star size={24} />
              </div>
              <h3 className="why-item-title">خبرة 22+ سنة</h3>
              <p className="why-item-desc">
                خبرة طويلة في مجال انقاذ ورفع السيارات منذ عام 2001
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <Award size={24} />
              </div>
              <h3 className="why-item-title">معدات حديثة</h3>
              <p className="why-item-desc">
                أحدث المعدات والتقنيات لضمان سلامة سيارتك
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <Phone size={24} />
              </div>
              <h3 className="why-item-title">دعم 24/7</h3>
              <p className="why-item-desc">
                خدمة متواصلة على مدار الساعة لمساعدتك في أي وقت
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2 className="cta-title">احصل على خدمة ونش الانقاذ الآن</h2>
          <p className="cta-description">
            اتصل بنا فوراً للحصول على أسرع وأرخص خدمة انقاذ سيارات في مصر
          </p>
          <a href={`tel:${phoneNumber}`} className="cta-button">
            اتصل الآن: {phoneNumber}
          </a>
          <a href={`tel:01034222636`} className="cta-button">
            الطوارئ و خدمة العملاء: 01034222636
          </a>
        </section>
      </div>

      <YellowCtaBox />
    </>
  );
};

export default Services; 