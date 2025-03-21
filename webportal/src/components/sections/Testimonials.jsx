"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      position: "CTO, Tech Innovations",
      quote: "ASP Solutions ile bulut altyapımıza geçiş sürecimiz sorunsuz ve verimli oldu. Teknik ekipleri her adımda yanımızdaydı.",
      image: "/images/testimonials/user1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Zeynep Kaya",
      position: "CEO, Strategy Partners",
      quote: "Danışmanlık hizmetleri sayesinde dijital dönüşüm sürecimizi çok daha hızlı tamamladık. Sonuçlardan çok memnunuz.",
      image: "/images/testimonials/user2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Mehmet Demir",
      position: "E-Ticaret Müdürü, ShopEasy",
      quote: "E-ticaret altyapımızı tamamen yeniledik ve satışlarımız %40 arttı. Teknik destek ekibi her zaman yanımızda.",
      image: "/images/testimonials/user3.jpg",
      rating: 4
    }
  ];

  // Yıldız oluşturma fonksiyonu
  function renderStars(rating) {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Dolu yıldız
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        // Boş yıldız
        stars.push(
          <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
    }
    
    return stars;
  }

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-3">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Başarı hikayelerimizi ve müşteri deneyimlerini keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} />
                      ) : (
                        <span className="text-lg font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/70">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
