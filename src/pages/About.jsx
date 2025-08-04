import React from 'react';
import {
  Info, Star, MessageCircle, Clock, MapPin, Phone,
  Award, Users, Shield, Zap, Heart, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import YellowCtaBox from '../components/YellowCtaBox';

const About = () => {
  const phoneNumber = '01044844492';

  return (
    <>
      <style>
        {`
          /* About Page Styles */
          .about-hero {
            background: linear-gradient(135deg, #0a2c61 0%, #1976d2 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .about-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }

          .about-hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }

          .about-hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #ffc107;
          }

          .about-hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .about-hero-stats {
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
          .about-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .about-section {
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            padding: 3rem 2rem;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
          }

          .about-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
          }

          .section-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            color: #0a2c61;
          }

          .section-icon {
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: white;
            padding: 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .section-title {
            font-size: 2rem;
            font-weight: bold;
            margin: 0;
          }

          .section-content {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #333;
            text-align: right;
            direction: rtl;
          }

          .highlight {
            color: #ffc107;
            font-weight: bold;
          }

          /* Features Grid */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            background: #f8f9fa;
            border-radius: 1rem;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            border-color: #ffc107;
          }

          .feature-icon {
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

          .feature-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 1rem;
          }

          .feature-description {
            color: #666;
            line-height: 1.6;
          }

          /* Mission & Vision */
          .mission-vision {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .mission-card, .vision-card {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 1rem;
            padding: 2rem;
            border-left: 4px solid #ffc107;
          }

          .mission-card h3, .vision-card h3 {
            color: #0a2c61;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .mission-card p, .vision-card p {
            color: #333;
            line-height: 1.7;
            font-size: 1.1rem;
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
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .about-hero {
              padding: 3rem 1rem;
            }

            .about-hero-title {
              font-size: 2.2rem;
            }

            .about-hero-subtitle {
              font-size: 1.1rem;
            }

            .about-hero-stats {
              flex-direction: column;
              gap: 1.5rem;
            }

            .about-main {
              padding: 2rem 1rem;
            }

            .about-section {
              padding: 2rem 1.5rem;
            }

            .section-title {
              font-size: 1.6rem;
            }

            .section-content {
              font-size: 1.1rem;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .mission-vision {
              grid-template-columns: 1fr;
            }

            .contact-cta {
              padding: 2rem 1.5rem;
              margin-bottom: 70px;
            }

            .cta-title {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 480px) {
            .about-hero-title {
              font-size: 1.8rem;
            }

            .section-title {
              font-size: 1.4rem;
            }

            .feature-card {
              padding: 1.5rem;
            }

            .mission-card, .vision-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">عن شركة ونش انقاذ محمد بحر</h1>
          <p className="about-hero-subtitle">
            نعمل في مجال انقاذ ورفع السيارات منذ عام 2001، نقدم خدمات عالية الجودة بأحدث المعدات وأفضل الأسعار
          </p>
          <div className="about-hero-stats">
            <div className="stat-item">
              <span className="stat-number">22+</span>
              <span className="stat-label">سنوات من الخبرة</span>
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
      <div className="about-main">
        {/* Company Overview */}
        <section className="about-section">
          <div className="section-header">
            <div className="section-icon">
              <Info size={32} />
            </div>
            <h2 className="section-title">نظرة عامة على الشركة</h2>
          </div>
          <div className="section-content">
            <p>
              <span className="highlight">ونش انقاذ محمد بحر</span> – لإنقاذ ورفع السيارات تعمل في السوق المصري منذ عام <span className="highlight">2001</span> بمجال انقاذ ورفع السيارات علي الطرق السريعة بكافة أنحاء الجمهورية. لبناء جسور من الثقة المتبادلة بين الشركة وعملائها، ولدينا احدث اوناش ومجهزة باحدث الات رفع السيارات ولدينا فريق عمل محترف جدا، ما يميزنا عن غيرنا هو تقديم خدمة انقاذ سيارات بأعلى جودة وأحدث الاجهزة بأقل سعر و باحترافية عالية.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-section">
          <div className="section-header">
            <div className="section-icon">
              <Target size={32} />
            </div>
            <h2 className="section-title">رسالتنا ورؤيتنا</h2>
          </div>
          <div className="mission-vision">
            <div className="mission-card">
              <h3>
                <MessageCircle size={24} color="#ffc107" />
                رسالتنا
              </h3>
              <p>
                هي العمل على تقديم خدمات اوناش انقاذ السيارات بطريقة منافسة عالية الجودة تلبي احتياجات العملاء بأفضل الأسعار لتحقيق فهم أعمق بتقديم خدمة أوناش الإنقاذ سيارات بمعايير جودة وسلامة عالية.
              </p>
            </div>
            <div className="vision-card">
              <h3>
                <Star size={24} color="#ffc107" />
                رؤيتنا
              </h3>
              <p>
                أن نكون الشركة الرائدة في مجال انقاذ ورفع السيارات في مصر، معتمدين على أحدث التقنيات وأفضل المعدات لتقديم خدمة متميزة تلبي جميع احتياجات عملائنا.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="about-section">
          <div className="section-header">
            <div className="section-icon">
              <Award size={32} />
            </div>
            <h2 className="section-title">ما يميزنا</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3 className="feature-title">سرعة الوصول</h3>
              <p className="feature-description">
                نحرص على تقديم أسرع ونش انقاذ سيارات بمصر يصلك في غضون 10 دقائق
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">أرخص الأسعار</h3>
              <p className="feature-description">
                نتميز بتوفير أرخص ونش انقاذ سيارات على مستوى الجمهورية بأعلى جودة وأحدث الاجهزة
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3 className="feature-title">خدمة 24 ساعة</h3>
              <p className="feature-description">
                نعمل في جميع الأوقات لمدة 24 ساعة ونوفر اوناش في جميع المحافظات
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3 className="feature-title">تغطية شاملة</h3>
              <p className="feature-description">
                سرعة وصول ونش الانقاذ الي مكان العطل ورفع السيارة بأحدث تقنيات ضمانا لعدم أيذاء اجزاء السيارة
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3 className="feature-title">فريق محترف</h3>
              <p className="feature-description">
                لدينا سائقين محترفين في انقاذ ورفع السيارات مجهزين بأحدث معدات انقاذ السيارات
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="feature-title">دعم فني</h3>
              <p className="feature-description">
                نقدم دعم واستشارات فنية لجميع العملاء مع تسهيل الدفع باستخدام طرق دفع متعددة
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
        </section>
      </div>
    </>
  );
};

export default About; 