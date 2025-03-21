'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from '../ui/Pagination';
import Loading from '../ui/Loading';
import { useRouter, usePathname } from 'next/navigation';
import productService from '@/utils/productService';

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
      
      try {
        // Use the product service to get filtered products
        const result = await productService.getFilteredProducts({
          category,
          sort,
          page,
          itemsPerPage
        });
        
        setProducts(result.products);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
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
        <p className="text-xl text-gray-600">No products found matching your search.</p>
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
