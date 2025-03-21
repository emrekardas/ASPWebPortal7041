import Link from 'next/link';
import Image from 'next/image';

export default function RelatedProducts({ products = [] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <Link 
          href={`/products/${product.id}`}
          key={product.id}
          className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <figure className="relative h-48 w-full">
            <Image 
              src={product.image}
              alt={product.name}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </figure>
          
          <div className="card-body p-4">
            <h3 className="card-title text-lg truncate">{product.name}</h3>
            
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-primary">
                {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}
              </span>
              
              <div className="badge badge-outline">{product.category}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
