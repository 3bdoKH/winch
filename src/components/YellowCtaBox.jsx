import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, Shield } from 'lucide-react';
import './YellowCtaBox.css';

const YellowCtaBox = () => {
  const phoneNumber = '01044844492';

  return (
    <>
      <style>
        {`
          .yellow-cta-box {
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
            color: #0a2c61;
            border-radius: 1.5rem;
            padding: 3rem 2rem;
            margin: 3rem auto;
            max-width: 500px;
            text-align: right;
            box-shadow: 0 8px 32px rgba(255, 193, 7, 0.3);
            border: 2px solid rgba(255, 255, 255, 0.2);
            font-family: 'Cairo, Tajawal, Arial, sans-serif';
            direction: rtl;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .yellow-cta-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
            pointer-events: none;
          }

          .yellow-cta-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(255, 193, 7, 0.4);
          }

          .cta-header {
            position: relative;
            z-index: 2;
          }

          .cta-brand {
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            letter-spacing: 0.5px;
            color: #0a2c61;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .cta-title {
            font-weight: bold;
            font-size: 2.2rem;
            line-height: 1.3;
            margin-bottom: 1.5rem;
            color: #0a2c61;
            position: relative;
          }

          .cta-underline {
            width: 80px;
            height: 4px;
            background: #0a2c61;
            border-radius: 2px;
            margin-top: 0.8rem;
            margin-right: 0;
            transition: width 0.3s ease;
          }

          .yellow-cta-box:hover .cta-underline {
            width: 120px;
          }

          .cta-description {
            font-size: 1.15rem;
            color: #0a2c61;
            font-weight: 500;
            line-height: 1.8;
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
          }

          .cta-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
          }

          .cta-feature {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem;
            color: #0a2c61;
            font-weight: 600;
          }

          .cta-feature-icon {
            background: rgba(10, 44, 97, 0.1);
            color: #0a2c61;
            padding: 0.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cta-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
          }

          .cta-button {
            background: #0a2c61;
            color: white;
            border: none;
            border-radius: 0.8rem;
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            flex: 1;
            justify-content: center;
            min-width: 200px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            background: #0a3977;
          }

          .cta-button.secondary {
            background: rgba(10, 44, 97, 0.1);
            color: #0a2c61;
            border: 2px solid #0a2c61;
          }

          .cta-button.secondary:hover {
            background: #0a2c61;
            color: white;
          }

          .cta-stats {
            display: flex;
            justify-content: space-around;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(10, 44, 97, 0.2);
            position: relative;
            z-index: 2;
          }

          .cta-stat {
            text-align: center;
          }

          .cta-stat-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: #0a2c61;
            display: block;
          }

          .cta-stat-label {
            font-size: 0.9rem;
            color: #0a2c61;
            opacity: 0.8;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .yellow-cta-box {
              margin: 2rem 1rem;
              padding: 2rem 1.5rem;
            }

            .cta-title {
              font-size: 1.8rem;
            }

            .cta-description {
              font-size: 1.1rem;
            }

            .cta-features {
              grid-template-columns: 1fr;
            }

            .cta-actions {
              flex-direction: column;
            }

            .cta-button {
              min-width: auto;
            }

            .cta-stats {
              flex-direction: column;
              gap: 1rem;
            }
          }

          @media (max-width: 480px) {
            .yellow-cta-box {
              padding: 1.5rem 1rem;
              margin-bottom: 70px;
            }

            .cta-title {
              font-size: 1.6rem;
            }

            .cta-brand {
              font-size: 1.1rem;
            }

            .cta-description {
              font-size: 1rem;
            }
          }

          /* Animation */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .yellow-cta-box {
            animation: fadeInUp 0.6s ease-out;
          }
        `}
      </style>

      <div className="yellow-cta-box">
        <div className="cta-header">
          <div className="cta-brand">
            <Star size={20} />
            ونش انقاذ محمد بحر
          </div>
          <div className="cta-title">
            اطلب ونش انقاذ سيارات دلوقتي<br />
            بكل سهولة.
            <div className="cta-underline"></div>
          </div>
        </div>

        <div className="cta-description">
          ونش انقاذ محمد بحر أسرع وأرخص ونش انقاذ في مصر كل ما عليك فقط هو الاتصال بنا وتحديد موقعك وسيتم ربطك بأقرب ونش إنقاذ ليقوم بمساعدتك في انقاذ و نقل السيارة إلى أي جهة.
        </div>

        <div className="cta-features">
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <Clock size={16} />
            </div>
            <span>وصول خلال 10 دقائق</span>
          </div>
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <MapPin size={16} />
            </div>
            <span>تغطية جميع المناطق</span>
          </div>
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <Shield size={16} />
            </div>
            <span>أرخص الأسعار</span>
          </div>
        </div>

        <div className="cta-actions">
          <a href={`tel:${phoneNumber}`} className="cta-button">
            <Phone size={20} />
            اتصل الآن: {phoneNumber}
          </a>
          <a href={`tel:01034222636`} className="cta-button">
            <Phone size={20} />
            الطوارئ و خدمة العملاء: 01034222636
          </a>
          <a href={`https://wa.me/+200${phoneNumber}`} className="cta-button secondary">
            <MessageCircle size={20} />
            واتساب
          </a>
        </div>

        <div className="cta-stats">
          <div className="cta-stat">
            <span className="cta-stat-number">22+</span>
            <span className="cta-stat-label">سنوات خبرة</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-number">24/7</span>
            <span className="cta-stat-label">خدمة متواصلة</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-number">10</span>
            <span className="cta-stat-label">دقائق وصول</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default YellowCtaBox; 