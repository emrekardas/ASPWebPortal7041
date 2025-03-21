'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from '../ui/Pagination';
import Loading from '../ui/Loading';
import { useRouter, usePathname } from 'next/navigation';

// Mock data - would be replaced with API call
const mockProducts = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Ürün ${i + 1}`,
  description: 'Bu ürün açıklamasıdır. Farklı ürün özellikleri burada listelenebilir.',
  price: Math.floor(Math.random() * 1000) + 100,
  image: `https://picsum.photos/400/300`,
  category: ['Yazılım', 'Donanım', 'Hizmet'][i % 3],
  rating: (Math.random() * 5).toFixed(1),
}));

export default function ProductList({ category, sort, page = 1, fallback }) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const itemsPerPage = 9;
  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filter products by category if specified
      let filteredProducts = [...mockProducts];
      if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      
      // Sort products if specified
      if (sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sort === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
      }
      
      // Calculate pagination
      setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
      
      // Get products for current page
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
      
      setProducts(paginatedProducts);
      setLoading(false);
    };
    
    fetchProducts();
  }, [category, sort, page]);
  
  const handlePageChange = (newPage) => {
    // Build new query params
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (sort) params.set('sort', sort);
    params.set('page', newPage.toString());
    
    router.push(`${pathname}?${params.toString()}`);
  };
  
  if (loading) {
    return fallback || <Loading />;
  }
  
  if (products.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-xl text-gray-600">Aramanıza uygun ürün bulunamadı.</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
}
