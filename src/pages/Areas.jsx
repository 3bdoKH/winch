import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, MapPin, Clock, Phone, Star, Filter,
  Navigation, Car, Shield, Zap
} from 'lucide-react';
import YellowCtaBox from '../components/YellowCtaBox';
import winchImg from '../images/images.png';

export const areas = [
  'المقطم', 'مصر الجديده', 'العاشر من رمضان', 'بدر', 'عين شمس', 'جسر السويس', 'حلمية الزيتون', 'شيراتون', 'المطار',
  'طريق الاسماعيليه', 'طريق السويس', 'الشروق', 'مدينتي', 'الرحاب', 'مدينه المستقبل', 'القطاميه', 'التجمع الخامس',
  'التجمع التالت', 'التجمع الاول', 'شارع التسعين', 'طريق السخنه', 'الدائري', 'صلاح سالم', 'طريق الاوتوستراد', 'صقر قريش',
  'المعادي', 'زهراء المعادي', 'غمره', 'احمد سعيد', 'الضاهر', 'باب الشاعريه', 'الزاويه', 'السيده زينب', 'السيده عائشه',
  'القلعه', 'مدينة نصر', 'مكرم عبيد', 'عباس العقاد', 'الحي السادس', 'الحي السابع', 'الحي العاشر', 'طريق المشير',
  'محور جيهان السادات', 'محور محمد نجيب', 'جمال عبدالناصر', 'محور ٣٠ يونيو', 'الهضبه الوسطى', 'كورنيش المقطم',
  'زايد', 'اكتوبر', 'المحور', 'المهندسين', 'حدائق الاهرام', 'فيصل', 'المريوطيه', 'الجيزه', 'مشعل', 'حدائق اكتوبر',
  'الهرم', 'طريق الفيوم', 'طريق الواحات', '٦ اكتوبر', 'العجوزه', 'الزمالك', 'وسط البلد', 'الوراق', 'عابدين',
  'شبرا الخيمه', 'شبرا', 'كورنيش النيل', 'روض الفرج', 'نيو جيزه', 'امبابه', 'كرداسه',
  'صحراوي شرقي', 'صحراوي غربي', 'طريق الكريمات', 'مركز ناصر', 'سمسطا', 'بني سويف', 'الفشن', 'ببا', 'مركز بوش', 'مركز العدوا',
  'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'بورسعيد', 'السويس', 'الدقهلية', 'الشرقية', 'الغربية', 'المنوفية',
  'البحيرة', 'كفر الشيخ', 'دمياط', 'الإسماعيلية', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا',
  'الأقصر', 'أسوان', 'البحر الأحمر', 'الوادي الجديد', 'مطروح', 'شمال سيناء', 'جنوب سيناء'
];

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const phoneNumber = '01044844492';
  const regionsByGovernorate = [
    {
      name: 'القاهرة', areas: [
        'القاهرة', 'المقطم', 'مصر الجديده', 'عين شمس', 'جسر السويس', 'حلمية الزيتون',
        'شيراتون', 'المطار', 'مدينة نصر', 'مكرم عبيد', 'عباس العقاد', 'الحي السادس',
        'الحي السابع', 'الحي العاشر', 'التجمع الاول', 'التجمع التالت', 'التجمع الخامس',
        'القطاميه', 'الهضبه الوسطى', 'كورنيش المقطم', 'شارع التسعين', 'صلاح سالم',
        'صقر قريش', 'السيده زينب', 'السيده عائشه', 'القلعه', 'باب الشاعريه', 'الزاويه',
        'الضاهر', 'احمد سعيد', 'غمره', 'عابدين', 'وسط البلد', 'شبرا', 'روض الفرج', 'كورنيش النيل'
      ]
    },
    {
      name: 'الجيزة', areas: [
        'الجيزة', 'زايد', 'اكتوبر', 'المحور', 'المهندسين', 'حدائق الاهرام', 'فيصل',
        'المريوطيه', 'مشعل', 'حدائق اكتوبر', 'الهرم', '٦ اكتوبر', 'العجوزه', 'الزمالك',
        'الوراق', 'امبابه', 'نيو جيزه', 'كرداسه'
      ]
    },
    { name: 'الإسكندرية', areas: ['الإسكندرية'] },
    { name: 'القليوبية', areas: ['شبرا الخيمه', 'القليوبية'] },
    { name: 'بورسعيد', areas: ['بورسعيد'] },
    { name: 'السويس', areas: ['السويس'] },
    { name: 'الدقهلية', areas: ['الدقهلية'] },
    { name: 'الشرقية', areas: ['العاشر من رمضان', 'الشرقية'] },
    { name: 'الغربية', areas: ['الغربية'] },
    { name: 'المنوفية', areas: ['المنوفية'] },
    { name: 'البحيرة', areas: ['البحيرة'] },
    { name: 'كفر الشيخ', areas: ['كفر الشيخ'] },
    { name: 'دمياط', areas: ['دمياط'] },
    { name: 'الإسماعيلية', areas: ['الإسماعيلية'] },
    { name: 'الفيوم', areas: ['طريق الفيوم', 'الفيوم'] },
    {
      name: 'بني سويف', areas: [
        'بني سويف', 'مركز ناصر', 'مركز بوش', 'مركز العدوا',
        'الفشن', 'ببا', 'سمسطا', 'طريق الكريمات'
      ]
    },
    { name: 'المنيا', areas: ['المنيا'] },
    { name: 'أسيوط', areas: ['أسيوط'] },
    { name: 'سوهاج', areas: ['سوهاج'] },
    { name: 'قنا', areas: ['قنا'] },
    { name: 'الأقصر', areas: ['الأقصر'] },
    { name: 'أسوان', areas: ['أسوان'] },
    { name: 'البحر الأحمر', areas: ['البحر الأحمر'] },
    { name: 'الوادي الجديد', areas: ['الوادي الجديد'] },
    { name: 'مطروح', areas: ['مطروح'] },
    { name: 'شمال سيناء', areas: ['شمال سيناء'] },
    { name: 'جنوب سيناء', areas: ['جنوب سيناء'] }
  ];
  const normalizeArabic = (text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/أ|إ|آ/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/ء/g, '');
  };

  const filteredAreas = useMemo(() => {
    const normalizedSearch = normalizeArabic(searchTerm);

    let areasToFilter = [];

    if (selectedRegion === 'all') {
      areasToFilter = areas;
    } else {
      const region = regionsByGovernorate.find(r => r.name === selectedRegion);
      areasToFilter = region ? region.areas : [];
    }

    return areasToFilter.filter(area =>
      normalizeArabic(area).includes(normalizedSearch)
    );
  }, [searchTerm, selectedRegion]);


  return (
    <>
      <style>
        {`
          /* Areas Page Styles */
          .areas-hero {
            background: linear-gradient(135deg, #0a2c61 0%, #1976d2 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .areas-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
          }

          .areas-hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }

          .areas-hero-title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #ffc107;
          }

          .areas-hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }

          .areas-stats {
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
          .areas-main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
          }

          .search-section {
            background: white;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            padding: 2rem;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
          }

          .search-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #ffc107 0%, #ffb100 100%);
          }

          .search-header {
            text-align: center;
            margin-bottom: 2rem;
          }

          .search-title {
            font-size: 2rem;
            font-weight: bold;
            color: #0a2c61;
            margin-bottom: 1rem;
          }

          .search-description {
            color: #666;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .search-controls {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .search-input {
            flex: 1;
            min-width: 300px;
            padding: 1rem 1.5rem;
            border: 2px solid #e9ecef;
            border-radius: 0.8rem;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            direction: rtl;
          }

          .search-input:focus {
            outline: none;
            border-color: #ffc107;
            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);
          }

          .region-filter {
            padding: 1rem 1.5rem;
            border: 2px solid #e9ecef;
            border-radius: 0.8rem;
            font-size: 1.1rem;
            background: white;
            cursor: pointer;
            transition: all 0.3s ease;
            direction: rtl;
          }

          .region-filter:focus {
            outline: none;
            border-color: #ffc107;
          }

          .search-results {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: #666;
            font-size: 1rem;
          }

          /* Areas Grid */
          .areas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .area-card {
            background: white;
            border-radius: 1.2rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.1);
            overflow: hidden;
            position: relative;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .area-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.15);
            border-color: #ffc107;
          }

          .area-image {
            position: relative;
            width: 100%;
            height: 180px;
            overflow: hidden;
          }

          .area-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.85);
            transition: transform 0.3s ease;
          }

          .area-card:hover .area-image img {
            transform: scale(1.05);
          }

          .area-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(10, 34, 58, 0.8) 0%, rgba(10, 34, 58, 0.2) 80%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            z-index: 2;
          }

          .area-brand {
            font-weight: bold;
            font-size: 1.2rem;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
          }

          .area-tagline {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            opacity: 0.9;
          }

          .area-badge {
            background: rgba(255, 193, 7, 0.9);
            color: #0a2c61;
            border-radius: 1.2rem;
            padding: 0.3rem 1rem;
            font-weight: bold;
            font-size: 0.9rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }

          .area-content {
            padding: 1.5rem;
            text-align: center;
          }

          .area-name {
            background: #0a3977;
            color: white;
            font-weight: bold;
            font-size: 1.3rem;
            padding: 1rem;
            text-align: center;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #eaeaea;
          }

          .area-subtitle {
            color: #666;
            font-size: 1.1rem;
            padding: 1rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            background: white;
            border-bottom-left-radius: 1.2rem;
            border-bottom-right-radius: 1.2rem;
          }

          /* No Results */
          .no-results {
            text-align: center;
            padding: 3rem 2rem;
            color: #666;
          }

          .no-results-icon {
            font-size: 4rem;
            color: #ddd;
            margin-bottom: 1rem;
          }

          .no-results-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #333;
          }

          .no-results-description {
            font-size: 1.1rem;
            line-height: 1.6;
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
            .areas-hero {
              padding: 3rem 1rem;
            }

            .areas-hero-title {
              font-size: 2.2rem;
            }

            .areas-hero-subtitle {
              font-size: 1.1rem;
            }

            .areas-stats {
              flex-direction: column;
              gap: 1.5rem;
            }

            .areas-main {
              padding: 2rem 1rem;
            }

            .search-section {
              padding: 1.5rem;
            }

            .search-title {
              font-size: 1.6rem;
            }

            .search-controls {
              flex-direction: column;
            }

            .search-input {
              min-width: auto;
            }

            .areas-grid {
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
            .areas-hero-title {
              font-size: 1.8rem;
            }

            .search-title {
              font-size: 1.4rem;
            }

            .area-card {
              margin: 0 0.5rem;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="areas-hero">
        <div className="areas-hero-content">
          <h1 className="areas-hero-title">مناطق الخدمة</h1>
          <p className="areas-hero-subtitle">
            نقدم خدمات ونش الانقاذ في جميع أنحاء مصر مع تغطية شاملة للطرق السريعة والمناطق الحضرية
          </p>
          <div className="areas-stats">
            <div className="stat-item">
              <span className="stat-number">{areas.length}+</span>
              <span className="stat-label">منطقة خدمة</span>
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
      <div className="areas-main">
        {/* Search Section */}
        <section className="search-section">
          <div className="search-header">
            <h2 className="search-title">البحث عن منطقة الخدمة</h2>
            <p className="search-description">
              ابحث عن منطقتك أو اختر من القائمة أدناه للحصول على خدمة ونش الانقاذ في أسرع وقت
            </p>
          </div>

          <div className="search-controls">
            <input
              type="text"
              placeholder="ابحث عن منطقتك..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="region-filter"
            >
              <option value="all">جميع المناطق ({areas.length})</option>
              {regionsByGovernorate.map(region => (
                <option key={region.name} value={region.name}>
                  {region.name} ({region.areas.length})
                </option>
              ))}
            </select>

          </div>

          <div className="search-results">
            <Search size={20} />
            <span>تم العثور على {filteredAreas.length} منطقة</span>
          </div>
        </section>

        {/* Areas Grid */}
        {filteredAreas.length > 0 ? (
          <section className="areas-grid">
            {filteredAreas.map((area, idx) => (
              <Link
                key={idx}
                to={`/areas/${encodeURIComponent(area)}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="area-card">
                  <div className="area-image">
                    <img src={winchImg} alt="ونش انقاذ" />
                    <div className="area-overlay">
                      <div className="area-brand">MOHAMED BAHR</div>
                      <div className="area-tagline">أسرع وأرخص ونش انقاذ في مصر</div>
                      <span className="area-badge">خدمة على مدار الساعة</span>
                    </div>
                  </div>
                  <div className="area-name">{area}</div>
                  <div className="area-subtitle">ونش انقاذ</div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <section className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3 className="no-results-title">لم يتم العثور على نتائج</h3>
            <p className="no-results-description">
              لا توجد مناطق تطابق بحثك. جرب البحث بكلمات مختلفة أو اتصل بنا مباشرة للحصول على المساعدة.
            </p>
          </section>
        )}

        {/* Contact CTA */}
        <section className="contact-cta">
          <h2 className="cta-title">لا تجد منطقتك؟</h2>
          <p className="cta-description">
            اتصل بنا مباشرة وسنصل إليك في أي مكان في مصر
          </p>
          <a href={`tel:${phoneNumber}`} className="cta-button">
            اتصل الآن: {phoneNumber}
          </a>
        </section>
      </div>

      <YellowCtaBox />
    </>
  );
};

export default Areas; 