"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Johnson",
      position: "CTO, Tech Innovations",
      quote: "Our transition to cloud infrastructure with ASP Solutions was seamless and efficient. Their technical team was with us every step of the way.",
      image: "/images/testimonials/user1.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Zoe Carter",
      position: "CEO, Strategy Partners",
      quote: "Thanks to their consulting services, we completed our digital transformation process much faster. We are very satisfied with the results.",
      image: "/images/testimonials/user2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Steel",
      position: "E-Commerce Manager, ShopEasy",
      quote: "We completely renovated our e-commerce infrastructure and our sales increased by 40%. The technical support team is always by our side.",
      image: "/images/testimonials/user3.jpg",
      rating: 4
    }
  ];

  // Star rendering function
  function renderStars(rating) {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Full star
        stars.push(
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      } else {
        // Empty star
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
          <h2 className="mb-3">What Our Customers Say</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Discover our success stories and customer experiences
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
