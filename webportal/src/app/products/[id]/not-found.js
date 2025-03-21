import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Ürün Bulunamadı</h1>
      <p className="text-xl text-gray-600 mb-8">
        Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          href="/products"
          className="btn btn-primary"
        >
          Tüm Ürünlere Dön
        </Link>
        <Link 
          href="/"
          className="btn btn-outline"
        >
          Ana Sayfa
        </Link>
      </div>
    </div>
  );
}
