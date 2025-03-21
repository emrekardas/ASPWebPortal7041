import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className="container mx-auto py-20 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold mb-4">Sepetiniz Boş</h1>
        <p className="text-gray-600 mb-8">
          Sepetinizde ürün bulunmamaktadır. Ürün eklemek için alışverişe başlayabilirsiniz.
        </p>
        <Link href="/products" className="btn btn-primary">
          Alışverişe Başla
        </Link>
      </div>
    </div>
  );
}
