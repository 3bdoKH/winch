import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, Shield, Zap, ArrowLeft, AlertTriangle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Import WhatsApp images
import wa1 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_fe153007.jpg';
import wa2 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_732c1eeb.jpg';
import wa3 from '../images/WhatsApp Image 2025-07-02 at 15.02.33_0b194e2d.jpg';
import wa4 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_bc1bb19d.jpg';
import wa5 from '../images/WhatsApp Image 2025-07-02 at 15.02.32_00a9c303.jpg';

const AreaDetail = () => {
  const { areaName } = useParams();
  const displayName = decodeURIComponent(areaName).replace(/[-_]/g, ' ');
  const phone = '01044844492';
  const brand = 'ونش انقاذ محمد بحر';

  return (
    <section className="area-detail-section" style={{
      minHeight: '100vh',
      background: '#f7f7f7',
      fontFamily: 'Tajawal, Arial, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>

        {/* Header Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0a2c61 0%, #1976d2 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '3rem 2rem',
          marginBottom: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '2rem'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#ffc107',
            color: '#0a2c61',
            fontWeight: 900,
            fontSize: '1rem',
            borderRadius: '1rem',
            padding: '0.3rem 1rem',
          }}>
            خدمة 24/7
          </div>

          <Link to="/areas" style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: 600
          }}>
            <ArrowLeft size={20} />
            العودة للمناطق
          </Link>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            direction: 'rtl'
          }}>
            {brand} في {displayName}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            direction: 'rtl'
          }}>
            خدمة إنقاذ سيارات سريعة وآمنة في {displayName} على مدار الساعة
          </p>
        </div>

        {/* Contact Methods */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            طرق التواصل
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href={`tel:${phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#e3f0ff';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#f8f9fa';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <Phone size={24} color="#0077ff" />
              </div>
              <div style={{ flex: 1, direction: 'rtl' }}>
                <div style={{
                  fontWeight: 700,
                  color: '#0a2c61',
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem'
                }}>
                  الهاتف الرئيسي
                </div>
                <div style={{
                  color: '#0077ff',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {phone}
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  اتصل بنا على مدار الساعة
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/201044844492`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#e3f0ff';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#f8f9fa';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "#25D366" }} />
              </div>
              <div style={{ flex: 1, direction: 'rtl' }}>
                <div style={{
                  fontWeight: 700,
                  color: '#0a2c61',
                  fontSize: '1.1rem',
                  marginBottom: '0.2rem'
                }}>
                  واتساب
                </div>
                <div style={{
                  color: '#25D366',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  {phone}
                </div>
                <div style={{
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  marginTop: '0.2rem'
                }}>
                  راسلنا على واتساب
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* WhatsApp Images Gallery */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            صور أعمالنا في {displayName}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {[wa1, wa2, wa3, wa4, wa5].map((img, idx) => (
              <div key={idx} style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}>
                <img
                  src={img}
                  alt={`ونش انقاذ سيارات ${displayName} ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff',
          direction: 'rtl',
          fontSize: '1.15rem',
          lineHeight: 2
        }}>
          <h2 style={{
            color: '#d66853',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            {brand} في {displayName}
          </h2>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            {`ونش انقاذ في ${displayName} نحن أرخص ونش أنقاذ في  ${displayName} و أسرع ونش إنقاذ في ${displayName} دائما اوناشنا بالقرب منك , ونش انقاذ ${displayName} من  محمد بحر نعمل منذ 30 عاما ومتخصصون في أنقاذ ورفع السيارات وخدمات الإنقاذ السريع ولدينا اسطول سيارات إنقاذ منتشرة في ${displayName} و جميع انحاء الجمهورية لإنقاذ و رفع السيارات المعطلة و سيارات الحوادث.`}
          </p>

          <p style={{ fontWeight: 700, color: '#0a2c61', marginBottom: '1rem' }}>{brand}:</p>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>نتعهد بوصول ونش الانقاذ بسرعة إلى موقعك في {displayName} خلال 10 دقائق بحد اقصي.</li>
            <li style={{ marginBottom: '0.8rem' }}>يمكنك الاتصال بنا أو ارسال موقعك علي الواتساب أو إرسال بريد إلكتروني إلى أحد ممثلينا الموجودين لارسال أقرب ونش انقاذ اليك في أي وقت.</li>
            <li style={{ marginBottom: '0.8rem' }}>ونش انقاذ سيارات محمد بحر مؤمن بالكامل حتي لا يسب اي تلف اجزاء سياراتك.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا افضل و اسرع خدمة انقاذ سيارات باقل سعر بدون رسوم اضافية و بدون اكراميات.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم بتتبع جميع سيارات الانقاذ من خلال GPS.</li>
            <li style={{ marginBottom: '0.8rem' }}>يوجد ونش انقاذ على مدار 24 ساعة طوال أيام الأسبوع.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم بـ إنقاذ السيارات خلال النهار والليل دون أي تكلفة إضافية.</li>
            <li style={{ marginBottom: '0.8rem' }}>جميع سائقي أوناش الانقاذ لدينا على دراية باستخدام أحدث المعدات والتقنيات ورفع السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>تبحث عن ونش انقاذ سيارات في {displayName} اتصل بنا الان علي {phone}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            اتصل بخدمة العملاء التابعة لنا على مدار 24 ساعة الآن للحصول على أقرب ونش انقاذ من موقعك في {displayName} فريق المساعدة على أهبة الاستعداد و جاهز دائما لمساعدتك في أي وقت من النهار أو الليل 24/7 تشمل خدمات الانقاذ السريع للسيارات في {displayName} علي ما يلي:
          </p>

          <ol style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>السرعة</b><br />
              يصل ونش انقاذ السيارات بسرعة فائقة خلال 15 دقيقة بحد اقصي فور طلبك لـ ونش إنقاذ سيارات من أجل إنقاذ السيارات المُعطّلة في {displayName} او على الطريق وذلك لأننا نعمل على مدار الساعة طوال أيام الأسبوع.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الأمان</b><br />
              ونش انقاذ السيارات مراقبة بـ GPS وهي آمنة للغاية تحافظ علي السيارة امنة تماما حتي الوصول إلي أقرب مركز صيانة.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الخبرة</b><br />
              فريق عمل {brand} مدرب على كيفية نقل السيارات وتثبيتها علي ونش الانقاذ وذلك إلى جانب خبرتهم المتميزة في اختيار أسرع الطرق.
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <b style={{ color: '#0077ff' }}>الانتشار الواسع</b><br />
              تنتشر اوناش الانقاذ في {displayName} أو علي الطرق الرئيسية في جميع انحاء الجمهورية وهو ما يسمح بسرعة وصول ونش الانقاذ اليك خلال 15 دقيقة بحد اقصي.
            </li>
          </ol>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر لدينا دائما ونش انقاذ سيارات في {displayName} لسحب و إنقاذ سيارتك وأخذك الي اقرب مركز صيانة أو وكيل معتمد ، أتصل بنا الان ولا تتردد ونش أنقاذ محمد بحر أرخص ونش انقاذ في {displayName} , نحن نعمل على مدار الساعة ، اتصل الان {phone} يصلك ونش انقاذ سيارات سريع و مجهز بأحدث المعدات وأحدث وسائل الأمان والراحة.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            لماذا يجب أن تختار ونش انقاذ {displayName} من محمد بحر؟
          </h3>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>لدينا اسطول من أوناش انقاذ السيارات في {displayName} وجميع انحاء الجمهورية.</li>
            <li style={{ marginBottom: '0.8rem' }}>نعمل علي مدار الساعة لمدة 24 ساعة و 7 أيام في الاسبوع .</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا سائقين محترفين في انقاذ ورفع السيارات مجهزين بأحدث معدات انقاذ السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا خدمة عملاء تعمل علي مدار الساعة لتلقي طلبات إنقاذ السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>لدينا أحدث ونش انقاذ مزود بأحدث معدات إنقاذ السيارات لانقاذ ورفع السيارات.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقدم اعلي جودة بأقل سعر لراحة ورضاء العميل.</li>
            <li style={{ marginBottom: '0.8rem' }}>سرعة وصول ونش الانقاذ الي مكان العطل ورفع السيارة بأحدث تقنيات ضمانا لعدم أيذاء اجزاء السيارة.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقدم دعم واستشارات فنية لجميع العملاء.</li>
            <li style={{ marginBottom: '0.8rem' }}>نقوم باستبدال الاطارات و التزود بالوقود والتزود بالماء.</li>
            <li style={{ marginBottom: '0.8rem' }}>في حال استدعاء ونش انقاذ {displayName} او الاتصال برقم طوارئ على الطريق {phone}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ما عليك سوى الاتصال بنا علي رقم ونش انقاذ {displayName} : {phone} وإعلامنا بالمكان الذي تحتاج ونش انقاذ سيارات فيه.
          </p>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            نقوم بتوفير الوقت عليك في البحث عن ونش انقاذ سيارات في {displayName} فنحن أرخص ونش انقاذ و أسرع ونش انقاذ و أقرب ونش انقاذ {phone} يمكنك ان تطلب ونش أنقاذ {displayName}طوال أيام الاسبوع نقدم خدماتنا علي مدار الساعة 7 أيام بالاسبوع  .
          </p>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ما يميزنا عن غيرنا انفرادنا بتقديم خدماتنا باحترافية عالية ونعمل منذ عام 1995 على الطرق السريعة بكافة انحاء جمهورية مصر العربية لبناء جسور من الثقة المتبادلة بين الشركة وعملائها و انقاذ و رفع السيارات المعطلة وسحب سيارات الحوادث.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            اسرع ونش انقاذ في {displayName}
          </h3>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ سيارات {displayName} لدينا سيارات انقاذ حديثة ومجهزة لسحب سيارتك من الاعطال والحوادث نحن أسرع ونش انقاذ سيارات يرجي الاتصال بنا علي رقم ونش انقاذ سيارات {phone} ليصلك اقرب ونش انقاذ في غضون 15 دقيقة بحد اقصي.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            تليفون ونش انقاذ في {displayName}
          </h3>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ {displayName} لدينا فريق خدمة عملاء يعمل علي مدار الساعة و فريق سائقين و وناشين قادرين على التعامل مع كافة مواقف سيارتك سحب سيارات أو رفعسيارات أو إنقاذ سيارات اذا كان عطل او حادث ونش انقاذ {brand} نحن أسرع ونش انقاذ مما يجعل خدمة الانقاذ السريع سهل على عملائنا.
          </p>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            أسعار ونش انقاذ {brand} تعتبر رمزية لأننا نمتلك دائما ونش أنقاذ سيارات في {displayName} دائما اوناشنا فريبة منك وخدماتنا بأعلي جودة واقل سعر و نسعي دائما لرضا العملاء لأنك أنت وسيارتك على رأس أولوياتنا نحن دائما نراقب جميع سياراتنا عند طريق GPS لنجعلك دائما في امان تام علي الطريق.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {brand} نحن الاقرب لك :
          </h3>

          <ul style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.5rem'
          }}>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ سيارات {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>رقم ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>تليفون ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ سيارات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش انقاذ ب{displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>ونش عربيات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>سطحة سيارات في {displayName}</li>
            <li style={{
              background: 'white',
              padding: '0.8rem',
              borderRadius: '0.5rem',
              border: '1px solid #e9ecef',
              textAlign: 'center',
              fontWeight: 600
            }}>كرين في {displayName}</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            يمكن لفريق ونش انقاذ محمد بحر تقديم خدمات أنقاذ سيارات سريعة وبأسعار معقولة في {displayName} وجميع المحافظات فقط اتصل نحن نستجيب ونرسل لك على الفور أقرب ونش انقاذ سيارات متوفر في {displayName} بالقرب من مكان تعطل سيارتك نجعلها سهلة باتصالك بنا علي {phone} نحن نستعين بفريق من السائقين الخبرة لرفع و إنقاذ سيارتك ولا نعتمد على ونش الانقاذ فقط ولكننا نمتلك أيضا رافعات لانقاذ السيارات المعطلة ولدينا نظام رفع هيدروليكي متكامل للتعامل مع حالات العربات الثقيلة وعربات النقل والنصف نقل العالقة في الحفر.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ارخص ونش انقاذ سيارات في {displayName}
          </h3>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر - فقط أتصل بنا على الفور برقم ونش انقاذ {displayName} {phone} وسنقدم لك الحل لأننا نعمل علي سحب سيارتك بطريقة صحيحة مهما كان حجم سيارتك لا تقلق من إحضار ونش انقاذ بعد اليوم فنحن ارخص ونش انقاذ و اسرع ونش انقاذ نحن ودائما الاقرب اليك.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            ونش انقاذ محمد بحر خيارك الوحيد للبحث عن ونش انقاذ نمتلك عدد كبير من العملاء الراضيين تماماً عن خدمة إنقاذ ورفع السيارات ، ونعمل طوال اليوم علي استقبال مكالماتك واستفساراتك بخصوص استعداء ونش إنقاذ سيارات في {displayName} وارقام ونش إنقاذ في {displayName}
          </p>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            لاستدعاء ونش أنقاذ في {displayName} او لمزيد من الاستفسار والمعلومات فقط اتصل بنا علي {phone} رقم ونش الانقاذ الوحيد في مصر.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            في ونش انقاذ محمد بحر نعتمد على نخبة مدربة من السائقين المحترفيين على خدمات الانقاذ السريع على الطرق السريعة.
          </p>

          <p style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            كما ان في ونش انقاذ محمد بحر نقوم باستخدام أحدث موديلات من الاوناش لانقاذ السيارات السريع بمصر وجميع المحافظات.
          </p>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            تقدر تكاليف أستدعاء ونش السيارات حسب نقطة الانطلاق ونقطة الوصول مع الاخذ بالاعتبار العديد من المتغيرات التي يمكن تحديدها عادة عبر الهاتف قبل بدء الخدمة.
          </p>

          <h3 style={{
            color: '#0a2c61',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center'
          }}>
            ونش انقاذ {displayName}
          </h3>

          <p style={{
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e9ecef',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            إتصل بمركز إرسال خدمة ونش انقاذ سيارات على مدار الساعة على الرقم {phone} ، وسوف نجيبك على أسئلتك :
          </p>

          <ul style={{
            background: '#fffbe6',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #ffe066',
            marginBottom: '1.5rem'
          }}>
            <li style={{ marginBottom: '0.8rem' }}>نمتلك ألعديد من أوناش السيارات منها ونش انقاذ سيارات يدوي و ونش إنقاذ سيارات اوتوماتيكي و ونش انقاذ طبلية.</li>
          </ul>

          <p style={{
            background: '#e3f0ff',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '2px solid #0077ff',
            marginBottom: '1.5rem',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            textAlign: 'center',
            fontWeight: 600
          }}>
            نشكركم على زياره موقعنا و ننتظر مكالمتكم فى اى وقت علي الرقم الخاص بنا {phone}
          </p>
        </div>

        {/* Keywords Section */}
        <div style={{
          background: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          border: '2px solid #e3f0ff'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#0a2c61',
            marginBottom: '1.5rem',
            textAlign: 'center',
            direction: 'rtl'
          }}>
            كلمات بحث
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            {['ارخص ونش انقاذ سيارات', 'اسرع ونش انقاذ سيارات', 'اقرب ونش انقاذ سيارات', 'رقم ونش انقاذ سيارات', 'ونش انقاذ', 'ونش', 'ونش انقاذ سيارات', 'ونش انقاذ سيارات في الجيزة', 'ونش انقاذ سيارات في القاهرة', 'ونش جر سيارات', 'ونش ريكفري', 'ونش عربيات', 'ونش نقل سيارات', 'تليفون ونش انقاذ سيارات'].map((kw, idx) => (
              <span key={idx} style={{
                background: '#2d2d33',
                color: '#fff',
                border: '1px solid #444',
                borderRadius: '8px',
                padding: '0.4rem 1.1rem',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                display: 'inline-block',
                boxShadow: '0 2px 8px #0002',
                cursor: 'default',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.background = '#0077ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#2d2d33';
                  e.target.style.transform = 'translateY(0)';
                }}>
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div style={{
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(220,53,69,0.3)',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <AlertTriangle size={32} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              margin: 0
            }}>
              طوارئ في {displayName}؟
            </h3>
          </div>

          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            direction: 'rtl'
          }}>
            اتصل بنا فوراً للحصول على خدمة إنقاذ سريعة
          </p>

          <a
            href={`tel:${phone}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'white',
              color: '#dc3545',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <Phone size={24} />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreaDetail; 