'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Hata günlüğü veya analiz servisine gönderebilirsiniz
    console.error('Ürün listesi hatası:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] text-center p-4">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Bir şeyler yanlış gitti</h2>
      <p className="text-gray-600 mb-6">
        Ürün listeleme sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Yeniden Dene
        </button>
        <Link 
          href="/"
          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
