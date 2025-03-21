"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CardProduct({ product }) {
  const { id, name, description, price, image, category, stock } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Cart addition logic will be here
    console.log("Product added to cart:", product);
  };

  // Fallback image
  const fallbackImage = 'https://placehold.co/400x300?text=ASP+Solutions';

  return (
    <div 
      className="card bg-base-100 shadow-xl h-full transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="relative h-48 w-full overflow-hidden">
        <div className="relative h-full w-full">
          <Image 
            src={imageError ? fallbackImage : (image || fallbackImage)} 
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={() => setImageError(true)}
          />
        </div>
        <div className="absolute top-2 right-2">
          <span className="badge badge-primary">{category}</span>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {stock <= 5 && <div className="badge badge-secondary">Limited Stock!</div>}
        </h2>
        <p className="line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">{price.toLocaleString('tr-TR')} ₺</span>
          <Link href={`/products/${id}`} className="text-primary hover:underline text-sm">Details</Link>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary w-full" onClick={handleAddToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
