"use client";

import Link from 'next/link';
import CardProduct from '../cards/CardProduct';

// Örnek mock veri
const featuredProducts = [
  {
    id: 1,
    name: "Enterprise SaaS Çözümü",
    description: "Şirketiniz için özelleştirilmiş bulut tabanlı SaaS çözümü",
    price: 12999.99,
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1955&q=80",
    category: "Software",
    stock: 10
  },
  {
    id: 2,
    name: "İş Analiz Paketi",
    description: "Kapsamlı iş analizi ve danışmanlık hizmeti",
    price: 8499.50,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Service",
    stock: 5
  },
  {
    id: 3,
    name: "Bulut Veri Depolama",
    description: "Güvenli ve ölçeklenebilir bulut depolama çözümü",
    price: 4999.90,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Infrastructure",
    stock: 15
  },
  {
    id: 4,
    name: "Siber Güvenlik Paketi",
    description: "Kurumsal ağınız için kapsamlı siber güvenlik koruması",
    price: 9999.99,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Security",
    stock: 7
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Öne Çıkan Ürünler</h2>
          <Link href="/products" className="btn btn-outline">
            Tümünü Gör
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
