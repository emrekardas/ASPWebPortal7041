export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8 animate-pulse">
        {/* Product image area */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 h-96 rounded-lg"></div>
          
          <div className="mt-4 flex gap-2">
            <div className="bg-gray-200 h-20 w-20 rounded-md"></div>
            <div className="bg-gray-200 h-20 w-20 rounded-md"></div>
            <div className="bg-gray-200 h-20 w-20 rounded-md"></div>
          </div>
        </div>
        
        {/* Product details area */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <div className="bg-gray-200 h-10 w-3/4 rounded mb-4"></div>
          <div className="bg-gray-200 h-6 w-1/4 rounded mb-6"></div>
          <div className="bg-gray-200 h-6 w-1/3 rounded mb-4"></div>
          
          <div className="bg-gray-200 h-24 w-full rounded my-6"></div>
          
          <div className="space-y-2 mb-8">
            <div className="bg-gray-200 h-4 w-full rounded"></div>
            <div className="bg-gray-200 h-4 w-full rounded"></div>
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-gray-200 h-12 w-40 rounded"></div>
            <div className="bg-gray-200 h-12 w-40 rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Similar products area */}
      <div className="mt-16">
        <div className="bg-gray-200 h-8 w-48 rounded mb-6"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-200 h-64 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
