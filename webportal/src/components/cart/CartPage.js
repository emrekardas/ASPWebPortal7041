"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate fetching cart data
  useEffect(() => {
    // In a real app, you'd fetch from an API or local storage
    const demoItems = [
      {
        id: 1,
        name: 'ASP Cloud Storage',
        price: 499.99,
        quantity: 1,
        image: '/images/products/cloud-storage.jpg'
      },
      {
        id: 2,
        name: 'ASP Security Suite',
        price: 899.99,
        quantity: 1,
        image: '/images/products/security-suite.jpg'
      }
    ];
    
    setTimeout(() => {
      setCartItems(demoItems);
      setIsLoading(false);
    }, 500);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Alışveriş Sepeti</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-base-200">
                  <th>Ürün</th>
                  <th>Fiyat</th>
                  <th>Adet</th>
                  <th>Toplam</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="btn btn-outline">
              Alışverişe Devam Et
            </Link>
            <button 
              className="btn btn-outline btn-error"
              onClick={() => setCartItems([])}
            >
              Sepeti Temizle
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <CartSummary 
            cartItems={cartItems} 
          />
        </div>
      </div>
    </div>
  );
}
