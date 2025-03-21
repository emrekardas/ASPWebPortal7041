"use client";

import Link from "next/link";

export default function FooterMain() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto py-10 px-4">
        <div className="footer">
          <div>
            <span className="footer-title">Hakkımızda</span> 
            <Link href="/about" className="link link-hover">Şirketimiz</Link>
            <Link href="/team" className="link link-hover">Ekibimiz</Link>
            <Link href="/careers" className="link link-hover">İş Fırsatları</Link>
            <Link href="/news" className="link link-hover">Haberler</Link>
          </div> 
          <div>
            <span className="footer-title">Hizmetler</span> 
            <Link href="/products" className="link link-hover">Ürünler</Link>
            <Link href="/consultancy" className="link link-hover">Danışmanlık</Link>
            <Link href="/training" className="link link-hover">Eğitim</Link>
            <Link href="/support" className="link link-hover">Teknik Destek</Link>
          </div> 
          <div>
            <span className="footer-title">Müşteri Hizmetleri</span> 
            <Link href="/contact" className="link link-hover">İletişim</Link>
            <Link href="/faq" className="link link-hover">Sık Sorulan Sorular</Link>
            <Link href="/returns" className="link link-hover">İade Politikası</Link>
            <Link href="/privacy" className="link link-hover">Gizlilik Politikası</Link>
          </div> 
          <div>
            <span className="footer-title">Bülten</span> 
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Yeniliklerden haberdar olun</span>
              </label> 
              <div className="relative">
                <input type="text" placeholder="E-posta adresiniz" className="input input-bordered w-full pr-16" /> 
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Abone Ol</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-base-300 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
              <span className="text-white font-bold">ASP</span>
            </div>
            <p className="text-lg">ASP Solutions Ltd</p>
          </div>
          
          <p>© {new Date().getFullYear()} ASP Solutions Ltd. Tüm hakları saklıdır.</p>
          
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a> 
            <a className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
