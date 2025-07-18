import React from 'react';
import { useParams } from 'react-router-dom';

const AreaDetail = () => {
  const { areaName } = useParams();
  const displayName = decodeURIComponent(areaName).replace(/[-_]/g, ' ');

  return (
    <section className="section" id="area-detail">
      <div className="section-title">ونش انقاذ {displayName}: شريكك الموثوق في قلب المدن الذكية</div>
      <div className="area-detail-content" style={{ background: '#fffbe6', borderRadius: '1rem', padding: '2rem', margin: '2rem 0', boxShadow: '0 2px 8px #eee' }}>
        <h2 style={{ color: '#d66853', marginBottom: '1rem' }}>ونش انقاذ {displayName}</h2>
        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          نقدم لك خدمة ونش انقاذ {displayName} التي تُلبي احتياجاتك بدقة وسرعة، لتضمن لك راحة البال واستمرارية يومك دون عوائق. ندرك أن كل دقيقة ثمينة، وأن سيارتك تستحق أفضل رعاية.
        </p>
        <h3 style={{ color: '#d66853', margin: '1.5rem 0 1rem' }}>خدمات ونش انقاذ {displayName} | حلول متكاملة لرحلتك</h3>
        <p style={{ fontWeight: 'bold' }}>خدمات ونش انقاذ {displayName}</p>
        <p>
          نقدم خدمات انقاذ التي تضمن لك الأمان والراحة على الطريق. عندما تبحث عن رقم ونش انقاذ السيارات في {displayName}، محمد بحر هو خيارك الأمثل الذي يضمن لك خدمة سريعة، آمنة، وموثوقة. تشمل خدماتنا:
        </p>
        <ul style={{ margin: '1rem 0 1.5rem 0', paddingRight: '1.5rem', listStyle: 'disc' }}>
          <li>سحب وإنقاذ السيارات المعطلة<br /><span style={{ color: '#888' }}>نستخدم أحدث أوناش السحب التي تضمن عدم تعرض سيارتك لأي ضرر، ونوفر لك ونش إنقاذ فعالًا في أي وقت.</span></li>
          <li>المساعدة الفورية على الطريق<br /><span style={{ color: '#888' }}>إذا كنت بحاجة إلى مساعدة بسيطة مثل شحن البطارية، تغيير إطار مثقوب، أو توصيل وقود. يصلك ونش انقاذ {displayName} بأسرع ما يمكن.</span></li>
          <li>ونش لنقل السيارات بجميع أنواعها<br /><span style={{ color: '#888' }}>سواء كانت سيارتك فاخرة، رياضية، أو عادية، لدينا الأوناش والمعدات المناسبة لخدمة ونش لنقل السيارات بجميع أحجامها وأنواعها بأمان تام.</span></li>
        </ul>
        <h3 style={{ color: '#d66853', margin: '1.5rem 0 1rem' }}>محمد بحر في {displayName} | مميزات تضمن لك خدمة استثنائية</h3>
        <p>عندما تختار خدمة ونش انقاذ {displayName} من محمد بحر، تضمن شريكًا يفهم احتياجاتك ويقدم لك مميزات فريدة. تشمل خدماتنا:</p>
        <ul style={{ margin: '1rem 0 1.5rem 0', paddingRight: '1.5rem', listStyle: 'disc' }}>
          <li>أسطول حديث ومجهز<br /><span style={{ color: '#888' }}>نمتلك أسطولًا من ونش انقاذ {displayName} بأحدث التقنيات لضمان سحب ونقل سيارتك بأقصى درجات الأمان. سواء كنت بحاجة إلى ونش لنقل السيارات العادية أو الكبيرة.</span></li>
          <li>الاستجابة الفورية<br /><span style={{ color: '#888' }}>ندرك أن وقتك ثمين، لذا نوفر لك خدمة تواصل متاحة 24 ساعة لنتميز باستجابة سريعة. نضمن لك وصول ونش قريب من موقعي في أسرع وقت ممكن.</span></li>
          <li>تغطية شاملة لـ{displayName}<br /><span style={{ color: '#888' }}>سواء كنت في التجمع الخامس، الرحاب، مدينتي، أو أي منطقة أخرى داخل {displayName}، فإن خدماتنا تغطي جميع أنحاء المنطقة لضمان وصول المساعدة إليك أينما كنت. نحن نضمن لك أفضل وأسرع ونش انقاذ {displayName}.</span></li>
        </ul>
        <h3 style={{ color: '#d66853', margin: '1.5rem 0 1rem' }}>لماذا تختار خدمة ونش انقاذ {displayName} من محمد بحر؟</h3>
        <p>ونش محمد بحر في {displayName}<br />احصل على خدمة تليق بأسلوب حياتك العصري. محمد بحر هو الخيار الأمثل الذي يضمن لك راحة البال والأمان على الطريق، وإليك الأسباب:</p>
        <ul style={{ margin: '1rem 0 1.5rem 0', paddingRight: '1.5rem', listStyle: 'disc' }}>
          <li>فريق عمل محترف<br /><span style={{ color: '#888' }}>يمتلك فريقنا معرفة عميقة بشوارع وطرق {displayName}، مما يضمن وصولنا إليك بأسرع الطرق الممكنة</span></li>
          <li>الأمان أولاً مع ونش {displayName}<br /><span style={{ color: '#888' }}>سلامة سيارتك هي أولويتنا. نستخدم تقنيات حديثة وممارسات عديدة لضمان سحب ونقل سيارتك بأمان تام. اتصل على رقم ونش أمان لتطمئن على سيارتك.</span></li>
          <li>حلول متكاملة<br /><span style={{ color: '#888' }}>نقدم حلولًا شاملة لجميع احتياجات ونش انقاذ السيارات، من السحب والنقل إلى المساعدة على الطريق.</span></li>
          <li>شفافية في أسعار ونش انقاذ {displayName}<br /><span style={{ color: '#888' }}>نوفر أسعار ونش انقاذ سيارات واضحة وتنافسية، بدون أي رسوم تزيد عن ميزانيتك نضمن حصولك على أفضل وأرخص ونش انقاذ سيارات في {displayName} بأفضل جودة، وخدمات لا مثيل لها في أي مكان آخر اطلبها الآن.</span></li>
        </ul>
        <div style={{ background: '#f7f7f7', borderRadius: '0.7rem', padding: '1.5rem', margin: '2rem 0', border: '1px solid #eee' }}>
          <h4 style={{ color: '#d66853', marginBottom: '1rem' }}>الأسئلة الشائعة حول ونش انقاذ {displayName}</h4>
          <ul style={{ margin: 0, paddingRight: '1.5rem', listStyle: 'circle' }}>
            <li style={{ marginBottom: '0.7rem' }}><b>ما هي مناطق التغطية لخدمة ونش انقاذ محمد بحر في {displayName}؟</b><br />يغطي محمد بحر جميع أنحاء {displayName}، بما في ذلك التجمع الخامس، الرحاب، مدينتي، والمناطق المجاورة، لضمان وصول المساعدة إليك أينما كنت</li>
            <li style={{ marginBottom: '0.7rem' }}><b>هل يقدم محمد بحر خدمة المساعدة على الطريق في {displayName}؟</b><br />نعم، بالإضافة إلى سحب وإنقاذ السيارات، نقدم خدمات مساعدة فورية على الطريق مثل شحن البطارية، تغيير الإطارات، وتوصيل الوقود</li>
            <li style={{ marginBottom: '0.7rem' }}><b>ما هو رقم ونش انقاذ السيارات الخاص بمحمد بحر في {displayName}؟</b><br />يمكنك الاتصال بنا على رقم ونش انقاذ السيارات الخاص بمحمد بحر المتاح 24 ساعة يوميًا لطلب المساعدة الفورية</li>
            <li style={{ marginBottom: '0.7rem' }}><b>هل أسعار ونش انقاذ سيارات محمد بحر في {displayName} تنافسية؟</b><br />نعم، نقدم أسعارًا شفافة وتنافسية لخدمات ونش انقاذ السيارات في {displayName}، بدون أي رسوم خفية، مع إمكانية الحصول على تقدير للتكلفة قبل بدء الخدمة</li>
            <li style={{ marginBottom: '0.7rem' }}><b>هل محمد بحر يوفر ونش {displayName} للسيارات الفاخرة؟</b><br />بالتأكيد، لدينا أسطول من الأوناش الحديثة والمجهزة للتعامل مع جميع أنواع السيارات، بما في ذلك السيارات الفاخرة والرياضية، بأقصى درجات الأمان والحماية</li>
            <li style={{ marginBottom: '0.7rem' }}><b>هل يمكنني تتبع موقع الونش في الوقت الفعلي بعد طلب الخدمة؟</b><br />نعم، يوفر محمد بحر خدمة تتبع الونش في الوقت الفعلي عبر تطبيقنا الذكي أو رابط خاص، مما يمنحك راحة البال والثقة في الخدمة</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AreaDetail; 