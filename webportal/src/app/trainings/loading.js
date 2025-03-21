export default function LoadingPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section Loading */}
      <div className="text-center mb-16 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
      
      {/* Training Benefits Loading */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-base-100 p-6 rounded-lg shadow-md animate-pulse">
            <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
      
      {/* Training Categories Loading */}
      <div className="mb-16">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-16 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative h-80 rounded-lg bg-gray-200"></div>
            
            <div className="w-full md:w-1/2">
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              
              <div className="space-y-4">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="bg-base-100 p-4 rounded-lg shadow border-l-4 border-gray-200">
                    <div className="flex justify-between items-start">
                      <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
                      <div className="h-5 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Training Formats Loading */}
      <div className="mb-16">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-md animate-pulse">
              <div className="card-body">
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
