import ProductDetail from '@/components/products/ProductDetail';
import RelatedProducts from '@/components/products/RelatedProducts';
import { notFound } from 'next/navigation';

// Import product data
import productData from '@/data/products.json';

// This is a server component, so we'll import the JSON directly
// In a real app, this would be an API or database call
export async function generateMetadata({ params }) {
  const product = productData.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: 'Product Not Found - ASP Solutions',
      description: 'The product you are looking for was not found.'
    };
  }
  
  return {
    title: `${product.name} - ASP Solutions`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  // Get product data directly from JSON
  // In a real app, this would be an API call
  const product = productData.find(p => p.id === parseInt(params.id));
  
  // If product not found, show 404 page
  if (!product) {
    notFound();
  }
  
  // Find related products (same category, excluding current product)
  const relatedProducts = productData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <main className="container mx-auto py-8 px-4">
      <ProductDetail product={product} />
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  );
}
