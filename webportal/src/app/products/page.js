import dynamic from 'next/dynamic';

// Dynamically import components
const ProductList = dynamic(() => import('@/components/products/ProductList'), { ssr: false });
const ProductFilters = dynamic(() => import('@/components/products/ProductFilters'), { ssr: false });
const Loading = dynamic(() => import('@/components/ui/Loading'));

export const metadata = {
  title: 'Product Catalog - ASP Solutions',
  description: 'Explore all our products and find solutions that fit your needs',
};

export default function ProductsPage({ searchParams }) {
  const { category, sort, page = 1 } = searchParams;
  
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <ProductFilters />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="min-h-[400px]">
            <ProductList 
              category={category} 
              sort={sort} 
              page={Number(page)} 
              fallback={<Loading />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
