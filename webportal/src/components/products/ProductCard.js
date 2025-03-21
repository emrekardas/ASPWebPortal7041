'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Fallback image URL using picsum
  const fallbackImage = 'https://picsum.photos/400/300';
  
  return (
    <div 
      className="card bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative h-48 w-full">
        <Image 
          src={!imageError ? (product.image || fallbackImage) : fallbackImage}
          alt={product.name}
          className="object-cover transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
      </figure>
      
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-1">
          <div className="badge badge-primary">{product.category}</div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="card-title text-lg">{product.name}</h3>
        
        <p className="text-sm line-clamp-2 text-gray-600 mb-2">
          {product.description}
        </p>
        
        <div className="text-xl font-bold text-primary mb-4">
          {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}
        </div>
        
        <div className="card-actions justify-between">
          <Link 
            href={`/products/${product.id}`}
            className="btn btn-outline btn-sm"
          >
            Detaylar
          </Link>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => console.log('Sepete eklendi:', product.name)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
