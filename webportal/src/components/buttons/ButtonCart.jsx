"use client";

import Link from "next/link";
import { useState } from "react";

export default function ButtonCart() {
  const [itemCount, setItemCount] = useState(0);
  
  return (
    <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {itemCount > 0 && (
            <span className="badge badge-sm indicator-item bg-primary text-white">{itemCount}</span>
          )}
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{itemCount} Ürün</span>
          <span className="text-info">Toplam: {(itemCount * 100).toLocaleString('tr-TR')} ₺</span>
          <div className="card-actions">
            <Link href="/cart" className="btn btn-primary btn-block">Sepeti Görüntüle</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
