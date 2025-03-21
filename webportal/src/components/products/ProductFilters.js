'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const categories = [
  { id: 'all', name: 'Tüm Ürünler' },
  { id: 'Yazılım', name: 'Yazılım' },
  { id: 'Donanım', name: 'Donanım' },
  { id: 'Hizmet', name: 'Hizmet' }
];

const sortOptions = [
  { id: 'default', name: 'Varsayılan Sıralama' },
  { id: 'price-low', name: 'Fiyat (Düşükten Yükseğe)' },
  { id: 'price-high', name: 'Fiyat (Yüksekten Düşüğe)' },
  { id: 'rating', name: 'En Yüksek Puanlı' }
];

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  
  // Initialize state from URL params when component mounts
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedSort(searchParams.get('sort') || 'default');
  }, [searchParams]);
  
  const applyFilters = () => {
    try {
      const params = new URLSearchParams();
      
      if (selectedCategory !== 'all') {
        params.set('category', selectedCategory);
      }
      
      if (selectedSort !== 'default') {
        params.set('sort', selectedSort);
      }
      
      // Always reset to page 1 when filters change
      params.set('page', '1');
      
      const newUrl = `${pathname}?${params.toString()}`;
      router.push(newUrl);
    } catch (error) {
      console.error('Error applying filters:', error);
    }
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Delay to prevent immediate rerender issues
    setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (category !== 'all') {
        params.set('category', category);
      } else {
        params.delete('category');
      }
      params.set('page', '1');
      router.push(`${pathname}?${params.toString()}`);
    }, 0);
  };
  
  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSelectedSort(newSort);
    
    // Delay to prevent immediate rerender issues
    setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (newSort !== 'default') {
        params.set('sort', newSort);
      } else {
        params.delete('sort');
      }
      params.set('page', '1');
      router.push(`${pathname}?${params.toString()}`);
    }, 0);
  };
  
  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    setPriceRange(newRange);
  };
  
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedSort('default');
    setPriceRange([0, 2000]);
    router.push(pathname);
  };
  
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title text-xl mb-4">Filtreler</h2>
        
        <div className="collapse collapse-arrow bg-base-200 mb-4">
          <input type="checkbox" defaultChecked /> 
          <div className="collapse-title font-medium">
            Kategoriler
          </div>
          <div className="collapse-content">
            <ul className="menu bg-base-200">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={selectedCategory === category.id ? 'active' : ''}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Sıralama</span>
          </label>
          <select
            value={selectedSort}
            onChange={handleSortChange}
            className="select select-bordered w-full"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <label className="label">
            <span className="label-text font-medium">Fiyat Aralığı</span>
          </label>
          <div className="flex justify-between mb-2">
            <span className="text-sm">{priceRange[0]} ₺</span>
            <span className="text-sm">{priceRange[1]} ₺</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="range range-primary range-xs"
            />
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="range range-primary range-xs"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button 
              onClick={applyFilters}
              className="btn btn-primary btn-sm"
            >
              Fiyata Göre Filtrele
            </button>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <button
            onClick={handleResetFilters}
            className="btn btn-outline btn-block btn-sm"
          >
            Tüm Filtreleri Temizle
          </button>
        </div>
      </div>
    </div>
  );
}
