"use client";

import { useState } from 'react';

export default function ConsultancyFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Danışmanlık süreci nasıl işliyor?",
      answer: "Danışmanlık sürecimiz, öncelikle işletmenizin ihtiyaç analizi ile başlıyor. Ardından stratejilerin geliştirilmesi, uygulama planı hazırlanması ve uygulamanın gerçekleştirilmesi aşamalarıyla devam ediyor. Son olarak sonuçları analiz ederek gerekli iyileştirmeleri yapıyoruz."
    },
    {
      id: 2,
      question: "Danışmanlık hizmetlerinizin fiyatlandırması nasıl?",
      answer: "Danışmanlık hizmetlerimizin fiyatlandırması, işletmenizin büyüklüğü, ihtiyaçlarınız ve projelerinizin kapsamına göre değişiklik gösteriyor. Size özel fiyat teklifi için bizimle iletişime geçebilirsiniz."
    },
    {
      id: 3,
      question: "Danışmanlık hizmetlerinden sonra destek sağlıyor musunuz?",
      answer: "Evet, danışmanlık projesinin tamamlanmasının ardından da işletmenize destek vermeye devam ediyoruz. Uygulama sonrası destek paketlerimiz hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz."
    },
    {
      id: 4,
      question: "Hangi sektörlere danışmanlık hizmeti veriyorsunuz?",
      answer: "Başta teknoloji, finans, üretim, sağlık ve perakende olmak üzere birçok sektörde danışmanlık hizmetleri sunuyoruz. Uzman ekibimiz farklı sektörlerdeki deneyimleriyle işletmenize özel çözümler üretebilir."
    },
    {
      id: 5,
      question: "Danışmanlık hizmetlerinizin süresi ne kadar?",
      answer: "Danışmanlık hizmetlerimizin süresi, projenizin kapsamına ve ihtiyaçlarınıza göre değişiklik gösterir. Kısa süreli danışmanlık hizmetlerimiz olduğu gibi, uzun vadeli stratejik ortaklıklar da kurabiliyoruz."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Sıkça Sorulan Sorular</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Danışmanlık hizmetlerimiz hakkında merak edilenler
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4">
              <div 
                className={`collapse collapse-arrow ${activeIndex === index ? 'collapse-open' : 'collapse-close'} bg-base-100 shadow-md`}
              >
                <input 
                  type="radio" 
                  name="faq-accordion" 
                  checked={activeIndex === index} 
                  onChange={() => toggleFaq(index)}
                /> 
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
