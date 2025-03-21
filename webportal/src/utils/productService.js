'use client';

// Import the JSON data
import productData from '@/data/products.json';

export const productService = {
  // Get all products
  getAllProducts: async () => {
    try {
      // In a real app, this would be an API call
      // For now, we're simulating a delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return productData;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Get a product by ID
  getProductById: async (id) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const numericId = Number(id);
      return productData.find(product => product.id === numericId) || null;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      return null;
    }
  },

  // Get featured products (first 4 products)
  getFeaturedProducts: async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      return productData.slice(0, 4);
    } catch (error) {
      console.error('Error fetching featured products:', error);
      return [];
    }
  },

  // Get related products (same category, excluding current product)
  getRelatedProducts: async (productId, category, limit = 4) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const numericId = Number(productId);
      return productData
        .filter(p => p.category === category && p.id !== numericId)
        .slice(0, limit);
    } catch (error) {
      console.error(`Error fetching related products for ID ${productId}:`, error);
      return [];
    }
  },
  
  // Filter and sort products
  getFilteredProducts: async ({ category, sort, page = 1, itemsPerPage = 9 }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Filter by category if specified
      let filteredProducts = [...productData];
      if (category && category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      
      // Sort products if specified
      if (sort === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sort === 'rating') {
        filteredProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      }
      
      // Calculate total pages
      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      
      // Get products for current page
      const startIndex = (page - 1) * itemsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
      
      return {
        products: paginatedProducts,
        totalPages,
        totalProducts: filteredProducts.length
      };
    } catch (error) {
      console.error('Error filtering products:', error);
      return {
        products: [],
        totalPages: 0,
        totalProducts: 0
      };
    }
  }
};

export default productService;
