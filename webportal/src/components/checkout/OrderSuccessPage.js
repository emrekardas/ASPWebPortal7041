"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OrderSuccessPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');
  const [countdown, setCountdown] = useState(10);
  
  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
    
    // Redirect to home after countdown
    const timer = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [router]);
  
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-6 text-success">✓</div>
        <h1 className="text-3xl font-bold mb-4">Siparişiniz Alındı</h1>
        
        <div className="bg-base-100 shadow-lg rounded-lg p-6 mb-6">
          <p className="text-gray-600 mb-4">
            Siparişiniz başarıyla tamamlandı. Siparişinizle ilgili detaylar e-posta adresinize gönderilecektir.
          </p>
          
          <div className="stats bg-primary text-primary-content my-4 shadow">
            <div className="stat">
              <div className="stat-title">Sipariş Numarası</div>
              <div className="stat-value">{orderNumber}</div>
              <div className="stat-desc">Referans için saklayınız</div>
            </div>
          </div>
          
          <p className="text-sm mt-6">
            {countdown} saniye içinde ana sayfaya yönlendirileceksiniz...
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Ana Sayfaya Dön
          </Link>
          <Link href="/account/orders" className="btn btn-outline">
            Siparişlerim
          </Link>
        </div>
      </div>
    </div>
  );
}
