"use client";

import Image from 'next/image';

export default function OrderSummary({ cartItems }) {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 29.99 : 0;
  const total = subtotal + shipping;
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Sipariş Özeti</h2>
        
        <div className="divider"></div>
        
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12 relative bg-base-200">
                  {item.image ? (
                    <Image 
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xl">📦</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <div className="text-sm text-gray-500">
                  {item.quantity} x {item.price.toLocaleString('tr-TR')} ₺
                </div>
              </div>
              <div className="font-medium text-right">
                {(item.price * item.quantity).toLocaleString('tr-TR')} ₺
              </div>
            </div>
          ))}
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
          
          <div className="divider my-1"></div>
          
          <div className="flex justify-between font-bold text-lg">
            <span>Toplam:</span>
            <span>{total.toLocaleString('tr-TR')} ₺</span>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-base-200 rounded-lg">
          <h3 className="font-medium mb-2">Güvenli Ödeme</h3>
          <p className="text-sm">
            Tüm ödemeleriniz 256 bit SSL sertifikası ile güvence altındadır. 
            Kredi kartı bilgileriniz kesinlikle saklanmamaktadır.
          </p>
          <div className="flex gap-2 mt-3">
            <span className="badge badge-neutral">SSL</span>
            <span className="badge badge-neutral">3D Secure</span>
            <span className="badge badge-neutral">PCI DSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
