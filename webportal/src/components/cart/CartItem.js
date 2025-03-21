"use client";

import Image from 'next/image';

export default function CartItem({ item, updateQuantity, removeItem }) {
  const { id, name, price, quantity, image } = item;
  
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16 relative bg-base-200">
              {image ? (
                <Image 
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl">📦</span>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap">{price.toLocaleString('tr-TR')} ₺</td>
      <td>
        <div className="flex items-center">
          <button 
            className="btn btn-xs btn-square"
            onClick={() => updateQuantity(id, quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input 
            type="number" 
            className="input input-bordered w-16 mx-2 text-center" 
            value={quantity}
            min="1"
            onChange={(e) => updateQuantity(id, parseInt(e.target.value) || 1)}
          />
          <button 
            className="btn btn-xs btn-square"
            onClick={() => updateQuantity(id, quantity + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="font-bold whitespace-nowrap">
        {(price * quantity).toLocaleString('tr-TR')} ₺
      </td>
      <td>
        <button 
          className="btn btn-ghost btn-xs text-error"
          onClick={() => removeItem(id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
