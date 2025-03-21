import Link from 'next/link';

export default function ConsultancyHero() {
  return (
    <div className="hero min-h-[60vh] bg-base-200" style={{
      backgroundImage: 'url("/images/consultancy-hero.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">Our Consultancy Services</h1>
          <p className="mb-8 text-xl">
            Accelerate your business's digital transformation with our professional consultancy team.
            We offer tailored solutions for your business with our industry experience and expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#services" className="btn btn-primary">Our Services</Link>
            <Link href="#contact" className="btn btn-outline btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
