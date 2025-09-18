import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Wrench, Lightbulb, Package, Truck, BatteryCharging, Users,
  ArrowLeft, Phone, Clock, Shield, Star, CheckCircle
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ServiceDetail.css';
import img1 from '../images/images.jpeg';
import img2 from '../images/images (1).jpeg';
import img3 from '../images/fuel.jpeg';
import img4 from '../images/download.jpeg';
import img5 from '../images/battary.jpeg';
import img6 from '../images/download (2).jpeg';

const services = {
  rescue: {
    icon: <Wrench size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'إنقاذ السيارات',
    desc: 'خدمة إنقاذ السيارات المتكاملة على مدار الساعة! سواء كنت عالقًا على الطريق السريع أو في منطقة نائية، فريقنا المدرب على أعلى مستوى جاهز لمساعدتك في أسرع وقت ممكن. نقدم حلولًا شاملة لجميع أعطال السيارات بدءًا من الأعطال الميكانيكية المفاجئة وحتى حوادث الطرق. نستخدم أحدث معدات الإنقاذ ذات التقنية العالية لضمان نقل سيارتك بأمان تام إلى أقرب مركز صيانة أو الوجهة التي تختارها دون أي خدوش أو أضرار إضافية. خدمتنا تغطي جميع أنواع المركبات من السيارات الصغيرة وحتى الشاحنات الثقيلة.',
    image: img1,
    more: [
      'فريق الإنقاذ لدينا يعمل 24/7 ويصل خلال 30 دقيقة في المتوسط داخل المدن',
      'نقوم بتقديم تقرير مفصل عن حالة المركبة قبل وبعد عملية الإنقاذ',
      'خدماتنا تشمل: سحب المركبات، إنقاذ السيارات الغارقة، التعامل مع الحوادث الخطيرة',
      'نوفر خدمة التوصيل إلى المنزل أو العمل عند الحاجة',
      'أسطولنا مجهز بأحدث أنظمة التعقب والتتبع للمواقع'
    ]
  },
  equipment: {
    icon: <Lightbulb size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'نقل المعدات',
    desc: 'نقل المعدات الثقيلة يتطلب دقة واحترافية عالية، وهذا بالضبط ما نقدمه! سواء كنت بحاجة إلى نقل كرفانات، معدات بناء، آلات صناعية أو أي معدات ثقيلة أخرى، فإن فريقنا المؤهل يضمن نقلها بأعلى معايير السلامة. نستخدم شاحنات مجهزة خصيصًا مزودة بأنظمة تثبيت ذكية لمنع أي اهتزازات أو أضرار أثناء النقل. نغطي جميع أنحاء مصر ونقدم حلولاً مخصصة لكل مشروع، بدءًا من التخطيط اللوجستي الدقيق وحتى التنفيذ الميداني مع ضمان وصول معداتك في الوقت المحدد وبالحالة المثالية.',
    image: img2,
    more: [
      'أسطولنا يشمل: لوادر، كراكات، رافعات، وسيارات نقل مسطحة',
      'خدمات النقل تشمل: مواقع البناء، المصانع، المناطق الصناعية، الموانئ',
      'نقدم تأمينًا كاملاً على المعدات المنقولة',
      'فريق دعم فني متخصص لتركيب وتشغيل المعدات بعد النقل',
      'حلول مخصصة للمشاريع الكبيرة والمتوسطة'
    ]
  },
  fuel: {
    icon: <Package size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'التزود بالوقود',
    desc: 'لم يعد انقطاع الوقود مشكلة بعد الآن! مع خدمتنا المميزة للتزود بالوقود في الموقع، يمكنك طلب الوقود أينما كنت وفي أي وقت. سواء كنت على طريق سريع، في منطقة نائية، أو حتى في موقف سيارات، سنصل إليك بسرعة مع وقود عالي الجودة في عبوات آمنة ومعتمدة. الخدمة متاحة لجميع أنواع الوقود (بنزين، سولار، غاز) وبكميات تتناسب مع احتياجاتك. نضمن لك استئناف رحلتك في أسرع وقت ممكن دون الحاجة لترك سيارتك أو البحث عن محطة وقود قريبة.',
    image: img3,
    more: [
      'متاح 24 ساعة طوال أيام الأسبوع',
      'نستخدم مضخات وقود محمولة معتمدة من وزارة البترول',
      'خيارات دفع متعددة: نقدًا، تحويل بنكي، أو محفظة إلكترونية',
      'خدمة إضافية: فحص مستوى الزيوت والسوائل مجانًا',
      'برنامج ولاء للعملاء الدائمين'
    ]
  },
  unlock: {
    icon: <Truck size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'فتح أبواب السيارات',
    desc: 'نسيان المفاتيح داخل السيارة أصبح مشكلة سهلة الحل! فريقنا المتخصص في فتح الأبواب المغلقة يمتلك أدوات متطورة تمكنه من فتح جميع أنواع السيارات (ياباني، أوروبي، أمريكي) دون أي خدوش أو أضرار للسيارة أو نظام القفل. نستخدم تقنيات غير تدخلية تحافظ على طلاء السيارة وسلامة الزجاج. الخدمة متاحة في جميع الأوقات، حتى في منتصف الليل، ونضمن الوصول خلال 20 دقيقة في المناطق الحضرية. كما نقدم خدمة استبدال البطاريات عن بُعد للسيارات الذكية التي تعمل بنظام keyless.',
    image: img4,
    more: [
      'لا نسبب أي خدوش أو تلف في طلاء السيارة',
      'متخصصون في سيارات: مرسيدس، BMW، لكزس، تويوتا، وغيرها',
      'خدمة طوارئ ليلية بدون رسوم إضافية',
      'حلول بديلة عند تعذر الفتح (توصيل مفتاح احتياطي)',
      'ضمان عدم إتلاف أنظمة الإنذار بالسيارة'
    ]
  },
  battery: {
    icon: <BatteryCharging size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'وصلة بطارية',
    desc: 'انتهت مشكلة انتهاء شحن البطارية مع خدمة وصلة البطارية المتنقلة! فريقنا المدرب يصل إليك في أي مكان مزودًا بأحدث أجهزة الشحن المحمولة وكابلات ذات جودة عالية تناسب جميع أنواع السيارات (بنزين، ديزل، هايبرد). لا داعي للقلق إذا كانت سيارتك في جراج مغلق أو موقف تحت الأرض، فلدينا حلول لكل الظروف. نقدم تشخيصًا مجانيًا لحالة البطارية ونظام الشحن، مع نصائح خبراء لتفادي الأعطال المستقبلية. كما نوفر خدمة بيع وتركيب بطاريات جديدة في الموقع بضمان يصل إلى 3 سنوات.',
    image: img5,
    more: [
      'كابلات شاحن ذات جودة عالية تناسب السيارات الفاخرة',
      'فحص مجاني لنظام الشحن والبطارية',
      'خيار شراء بطارية جديدة مع تركيب فوري',
      'خدمة متاحة للسيارات الكهربائية والهجينة',
      'ضمان عدم تلف الكمبيوتر الخاص بالسيارة'
    ]
  },
  tires: {
    icon: <Users size={44} color="#0077ff" style={{ marginBottom: '1rem' }} />,
    title: 'تغيير الإطارات',
    desc: 'تغيير الإطارات في الطريق أصبح أسهل وأسرع مع خدمتنا المتنقلة! سواء كان لديك إطار مثقوب، انفجار مفاجئ، أو تحتاج لتركيب إطارات الشتاء، فإن فريقنا المدرب يصل إليك في أسرع وقت مجهزًا بجميع الأدوات اللازمة والمعدات الأصلية لضمان تركيب مثالي. نستخدم رافعات هيدروليكية خاصة تحمي هيكل سيارتك من الخدوش، كما نوفر خدمة موازنة العجلات في الموقع باستخدام أجهزة محمولة. نعمل مع جميع أنواع الإطارات (راديال، تيوبلس، run-flat) ونقدم ضمانًا على جودة التركيب. كما يمكنك طلب إطارات جديدة نوردها لك ونركبها فورًا.',
    image: img6,
    more: [
      'تركيب إطارات run-flat بدون الحاجة لرفع السيارة',
      'خدمة إصلاح المثقوب في الموقع (إذا أمكن)',
      'فحص مجاني لضغط الهواء ومحاذاة العجلات',
      'تخزين إطارات الموسم الآخر في مستودعاتنا',
      'عروض خاصة على مجموعات الإطارات الجديدة'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services[serviceId];

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  const phone = '01044844492';

  if (!service) {
    return (
      <div style={{
        textAlign: 'center',
        margin: '3rem 0',
        fontSize: '1.3rem',
        color: '#0077ff',
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        الخدمة غير موجودة
      </div>
    );
  }

  const features = [
    {
      icon: <Clock size={24} color="#ffc107" />,
      title: "استجابة سريعة",
      description: "وصول خلال 15-30 دقيقة"
    },
    {
      icon: <Shield size={24} color="#ffc107" />,
      title: "أمان تام",
      description: "معدات حديثة وطاقم مدرب"
    },
    {
      icon: <Star size={24} color="#ffc107" />,
      title: "خبرة 30 عام",
      description: "خبرة طويلة في مجال الإنقاذ"
    },
    {
      icon: <CheckCircle size={24} color="#ffc107" />,
      title: "ضمان الجودة",
      description: "خدمة مضمونة بجودة عالية"
    }
  ];

  return (
    <section style={{
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

          <Link to="/services" style={{
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
            العودة للخدمات
          </Link>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {service.icon}
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            direction: 'rtl'
          }}>
            {service.title}
          </h1>

          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto',
            direction: 'rtl'
          }}>
            خدمة متخصصة ومتقدمة لجميع احتياجاتك
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>

          {/* Service Description */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
              تفاصيل الخدمة
            </h2>

            <div style={{
              background: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid #e9ecef',
              direction: 'rtl',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#0a2c61'
            }}>
              {service.desc}
            </div>
          </div>

          {/* Service Image */}
          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '2px solid #e3f0ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#0a2c61',
              marginBottom: '1.5rem',
              textAlign: 'center',
              direction: 'rtl'
            }}>
              صور الخدمة
            </h2>

            <img
              src={service.image}
              alt={service.title}
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '1rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>

        {/* Features Section */}
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
            مميزات الخدمة
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.background = '#e3f0ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.transform = 'translateY(0)';
                }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  {feature.icon}
                </div>
                <div style={{ flex: 1, direction: 'rtl' }}>
                  <div style={{
                    fontWeight: 700,
                    color: '#0a2c61',
                    fontSize: '1.1rem',
                    marginBottom: '0.3rem'
                  }}>
                    {feature.title}
                  </div>
                  <div style={{
                    color: '#6c757d',
                    fontSize: '0.9rem'
                  }}>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Details */}
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
            تفاصيل إضافية
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {service.more && service.more.map((detail, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.5rem',
                borderRadius: '1rem',
                background: '#f8f9fa',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.target.style.background = '#e3f0ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#f8f9fa';
                  e.target.style.transform = 'translateY(0)';
                }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#0077ff',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  ✓
                </div>
                <div style={{
                  flex: 1,
                  direction: 'rtl',
                  fontSize: '1.05rem',
                  color: '#0a2c61',
                  lineHeight: 1.6
                }}>
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
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
            احصل على الخدمة الآن
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
              href={`tel:01034222636`}
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
                  الطوارئ و خدمة العملاء
                </div>
                <div style={{
                  color: '#0077ff',
                  fontWeight: 600,
                  fontSize: '1rem'
                }}>
                  01034222636
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

        {/* Emergency Contact */}
        <div style={window.innerWidth > 768 ? {
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(220,53,69,0.3)',
          marginBottom: '2rem',
        } : {
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(220,53,69,0.3)',
          marginBottom: '4rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <Shield size={32} />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              margin: 0
            }}>
              طوارئ؟
            </h3>
          </div>

          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            direction: 'rtl'
          }}>
            اتصل بنا فوراً للحصول على خدمة {service.title} سريعة
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

export default ServiceDetail; 