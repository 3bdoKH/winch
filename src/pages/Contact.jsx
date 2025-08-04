import React, { useState } from 'react';
import bgImg from '../images/images.png';
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertTriangle, CheckCircle, Send, WhatsApp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '', service: 'general' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Phone size={24} color="#0077ff" />,
      title: "الهاتف الرئيسي",
      value: "01044844492",
      link: "tel:01044844492",
      description: "اتصل بنا على مدار الساعة"
    },
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "#25D366" }} />,
      title: "واتساب",
      value: "01044844492",
      link: "https://wa.me/201044844492",
      description: "راسلنا على واتساب"
    },
    {
      icon: <Mail size={24} color="#0077ff" />,
      title: "البريد الإلكتروني",
      value: "info@mohamedbahr.com",
      link: "mailto:info@mohamedbahr.com",
      description: "أرسل لنا بريد إلكتروني"
    }
  ];


  const faqItems = [
    {
      question: "ما هي مناطق الخدمة؟",
      answer: "نقدم خدماتنا في جميع مناطق محافظة بني سويف والمناطق المجاورة."
    },
    {
      question: "هل الخدمة متاحة 24/7؟",
      answer: "نعم، فريقنا جاهز على مدار الساعة لتقديم خدمات الإنقاذ."
    },
    {
      question: "ما هي أنواع السيارات التي نتعامل معها؟",
      answer: "نتعامل مع جميع أنواع السيارات: سيدان، SUV، شاحنات، ومعدات ثقيلة."
    },
    {
      question: "ما هو وقت الاستجابة؟",
      answer: "نستجيب خلال 15-30 دقيقة في معظم الحالات، حسب الموقع."
    }
  ];

  return (
    <section
      className="contact-section"
      id="contact"
      style={{
        minHeight: '100vh',
        background: '#f7f7f7',
        padding: '2rem 0',
        fontFamily: 'Tajawal, Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, rgba(255,255,255,0.97) 70%, #e3f0ff 100%), url(${bgImg}) center/cover no-repeat`,
          borderRadius: '2rem',
          padding: '3rem 2rem',
          border: '4px solid #0077ff',
          boxShadow: '0 8px 32px 0 rgba(10,44,97,0.18)',
          position: 'relative',
          overflow: 'hidden'
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
            boxShadow: '0 2px 8px #ffc10733',
          }}>
            خدمة 24/7
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              color: '#0a2c61',
              marginBottom: '1rem',
              direction: 'rtl'
            }}>
              اتصل بنا
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#1976d2',
              fontWeight: 600,
              direction: 'rtl',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              فريقنا جاهز لمساعدتك على مدار الساعة. اتصل بنا الآن للحصول على أفضل خدمة إنقاذ سيارات
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>

          {/* Contact Methods */}
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
              طرق التواصل
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-evenly' }}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
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
                    {method.icon}
                  </div>
                  <div style={{ flex: 1, direction: 'rtl' }}>
                    <div style={{
                      fontWeight: 700,
                      color: '#0a2c61',
                      fontSize: '1.1rem',
                      marginBottom: '0.2rem'
                    }}>
                      {method.title}
                    </div>
                    <div style={{
                      color: '#0077ff',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}>
                      {method.value}
                    </div>
                    <div style={{
                      color: '#6c757d',
                      fontSize: '0.9rem',
                      marginTop: '0.2rem'
                    }}>
                      {method.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
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
              أرسل لنا رسالة
            </h2>

            {submitStatus === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                direction: 'rtl'
              }}>
                <CheckCircle size={20} />
                تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ direction: 'rtl' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '90%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9ecef',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0077ff'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '90%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9ecef',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0077ff'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '90%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9ecef',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0077ff'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  نوع الخدمة
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={{
                    width: '90%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9ecef',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0077ff'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                >
                  <option value="general">استفسار عام</option>
                  <option value="rescue">إنقاذ سيارة</option>
                  <option value="towing">سحب سيارة</option>
                  <option value="fuel">تزويد بالوقود</option>
                  <option value="battery">شحن بطارية</option>
                  <option value="other">خدمة أخرى</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 600,
                  color: '#0a2c61'
                }}>
                  الرسالة *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  style={{
                    width: '90%',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #e9ecef',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#0077ff'}
                  onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #0a2c61 60%, #1976d2 100%)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, #1976d2 60%, #0a2c61 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, #0a2c61 60%, #1976d2 100%)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #ffffff33',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
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
            الأسئلة الشائعة
          </h2>

          <div style={{ direction: 'rtl' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{
                marginBottom: '1rem',
                border: '1px solid #e9ecef',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '1rem',
                  fontWeight: 600,
                  color: '#0a2c61',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  {item.question}
                </div>
                <div style={{
                  padding: '1rem',
                  color: '#6c757d',
                  lineHeight: '1.6'
                }}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div style={{
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          borderRadius: '1.5rem',
          padding: '2rem',
          marginTop: '2rem',
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
              طوارئ؟
            </h3>
          </div>

          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1.5rem',
            direction: 'rtl'
          }}>
            في حالة الطوارئ، اتصل بنا فوراً على الرقم التالي:
          </p>

          <a
            href="tel:01044844492"
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
            01044844492
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default Contact; 