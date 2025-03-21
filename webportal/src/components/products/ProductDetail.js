'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);
  
  // Called when quantity changes
  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  // When add to cart button is clicked
  const handleAddToCart = () => {
    console.log(`${product.name} added to cart. Quantity: ${quantity}`);
    // In real app, this would update cart state
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Product images */}
      <div className="w-full md:w-1/2">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image 
            src={activeImage}
            alt={product.name}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        {/* Product gallery */}
        <div className="mt-4 flex space-x-4 overflow-x-auto pb-2">
          <div 
            onClick={() => setActiveImage(product.image)}
            className={`relative h-20 w-20 rounded-md overflow-hidden cursor-pointer ${activeImage === product.image ? 'ring-2 ring-primary' : ''}`}
          >
            <Image 
              src={product.image}
              alt={product.name}
              className="object-cover"
              fill
              sizes="80px"
            />
          </div>
          
          {product.gallery && product.gallery.map((img, index) => (
            <div 
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-20 rounded-md overflow-hidden cursor-pointer ${activeImage === img ? 'ring-2 ring-primary' : ''}`}
            >
              <Image 
                src={img}
                alt={`${product.name} - image ${index + 1}`}
                className="object-cover"
                fill
                sizes="80px"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Product information */}
      <div className="w-full md:w-1/2">
        <div className="mb-2">
          <span className="badge badge-accent text-xs">{product.category}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">|</span>
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
        
        <div className="text-2xl font-bold text-primary mb-6">
          {new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}
        </div>
        
        <p className="text-gray-700 mb-8">{product.description}</p>
        
        {/* Product Detail Tabs */}
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 mb-4">
            <Tab className={({ selected }) =>
              `w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700 
              ${selected ? 'bg-white shadow' : 'hover:bg-white/[0.12]'}`
            }>
              Specifications
            </Tab>
            <Tab className={({ selected }) =>
              `w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700 
              ${selected ? 'bg-white shadow' : 'hover:bg-white/[0.12]'}`
            }>
              Details
            </Tab>
          </Tab.List>
          <Tab.Panels className="mb-8">
            <Tab.Panel>
              <div className="divide-y">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="py-2 flex justify-between">
                    <span className="font-semibold">{spec.name}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <ul className="list-disc pl-5 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">{detail}</li>
                ))}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        {/* Purchase options */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center border rounded-md">
            <button 
              onClick={() => handleQuantityChange(-1)} 
              disabled={quantity <= 1}
              className="px-3 py-2 border-r"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)} 
              disabled={quantity >= product.stock}
              className="px-3 py-2 border-l"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="btn btn-primary flex-grow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
          
          <button className="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
