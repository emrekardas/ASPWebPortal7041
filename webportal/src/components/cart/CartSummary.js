"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CartSummary({ cartItems }) {
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 29.99 : 0;
  const discount = couponApplied ? couponDiscount : 0;
  const total = subtotal + shipping - discount;
  
  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'asp10') {
      const discountAmount = subtotal * 0.1; // 10% discount
      setCouponDiscount(discountAmount);
      setCouponApplied(true);
    } else {
      alert('Geçersiz kupon kodu!');
    }
  };
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Sipariş Özeti</h2>
        
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Kupon Kodu</span>
          </label>
          <div className="flex gap-2">
            <input 
              type="text" 
              className="input input-bordered flex-grow" 
              placeholder="Kupon kodu girin"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              disabled={couponApplied}
            />
            <button 
              className="btn btn-outline" 
              onClick={handleApplyCoupon}
              disabled={couponApplied || !couponCode}
            >
              Uygula
            </button>
          </div>
          {couponApplied && (
            <div className="text-success text-sm mt-1">
              %10 indirim uygulandı!
            </div>
          )}
        </div>
        
        <div className="divider"></div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Ara Toplam:</span>
            <span>{subtotal.toLocaleString('tr-TR')} ₺</span>
          </div>
          
          <div className="flex justify-between">
            <span>Kargo:</span>
            <span>{shipping.toLocaleString('tr-TR')} ₺</span>
          </div>
          
          {couponApplied && (
            <div className="flex justify-between text-success">
              <span>İndirim:</span>
              <span>-{discount.toLocaleString('tr-TR')} ₺</span>
            </div>
          )}
          
          <div className="divider my-1"></div>
          
          <div className="flex justify-between font-bold text-lg">
            <span>Toplam:</span>
            <span>{total.toLocaleString('tr-TR')} ₺</span>
          </div>
        </div>
        
        <div className="card-actions mt-4">
          <Link href="/checkout" className="btn btn-primary btn-block">
            Ödemeye Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
