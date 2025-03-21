"use client";

import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="mb-3">Dijital Dönüşümünüz İçin Hazır mısınız?</h2>
            <p className="text-lg mb-6 text-primary-content/90">
              İşletmenizin ihtiyaçları doğrultusunda özelleştirilmiş çözümler için hemen bizimle iletişime geçin. Uzman ekibimiz, işletmenizi bir sonraki seviyeye taşımak için yanınızda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                İletişime Geç
              </Link>
              <Link href="/demos" className="btn btn-outline btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Demo İzle
              </Link>
            </div>
          </div>
          
          <div className="card w-full max-w-md bg-base-100 shadow-xl text-base-content">
            <div className="card-body">
              <h3 className="card-title mb-4">Ücretsiz Danışmanlık</h3>
              <form>
                <div className="form-control mb-3">
                  <input type="text" placeholder="Adınız Soyadınız" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <input type="email" placeholder="E-posta Adresiniz" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-3">
                  <input type="tel" placeholder="Telefon Numaranız" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-5">
                  <select className="select select-bordered w-full">
                    <option disabled selected>İlgilendiğiniz Hizmet</option>
                    <option>E-Ticaret Çözümleri</option>
                    <option>Bulut Altyapı</option>
                    <option>Danışmanlık</option>
                    <option>Eğitim & Geliştirme</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-full">Gönder</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
