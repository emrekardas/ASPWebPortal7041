import ProductDetail from '@/components/products/ProductDetail';
import RelatedProducts from '@/components/products/RelatedProducts';
import { notFound } from 'next/navigation';

// Mock data - will be replaced with a real API
const mockProducts = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: 'This is a product description. Different product features can be listed here.',
  price: Math.floor(Math.random() * 1000) + 100,
  image: `https://picsum.photos/400/300`,
  gallery: [
    `https://picsum.photos/400/300?random=${i * 3 + 1}`,
    `https://picsum.photos/400/300?random=${i * 3 + 2}`,
    `https://picsum.photos/400/300?random=${i * 3 + 3}`,
  ],
  category: ['Software', 'Hardware', 'Service'][i % 3],
  rating: (Math.random() * 5).toFixed(1),
  stock: Math.floor(Math.random() * 100),
  specifications: [
    { name: "Manufacturer", value: "ASP Technologies" },
    { name: "Model", value: `ASP-${1000 + i}` },
    { name: "Warranty", value: "24 Months" },
    { name: "Condition", value: "New" },
  ],
  details: [
    "High performance hardware",
    "Easy integration features",
    "Long-lasting usage",
    "Continuous support with software updates"
  ]
}));

export async function generateMetadata({ params }) {
  const product = mockProducts.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı - ASP Solutions',
      description: 'Aradığınız ürün bulunamadı.'
    };
  }
  
  return {
    title: `${product.name} - ASP Solutions`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  // Gerçekte burada API çağrısı yapılacak
  // Simüle edilmiş API gecikmesi
  const product = mockProducts.find(p => p.id === parseInt(params.id));
  
  // Ürün bulunamadıysa 404 sayfasına yönlendir
  if (!product) {
    notFound();
  }
  
  // Aynı kategorideki diğer ürünleri bul
  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <main className="container mx-auto py-8 px-4">
      <ProductDetail product={product} />
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  );
}
