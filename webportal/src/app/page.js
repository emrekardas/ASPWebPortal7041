import dynamic from 'next/dynamic';

// Dinamik olarak bileşenleri yükleme
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const FeaturedProducts = dynamic(() => import('@/components/sections/FeaturedProducts'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const CtaSection = dynamic(() => import('@/components/sections/CtaSection'));

export const metadata = {
  title: 'ASP Solutions - Cloud Web Portal',
  description: 'E-ticaret ve hizmet yönetim portalı',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
